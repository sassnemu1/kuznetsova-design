import { NextResponse } from "next/server";
import { buildSystemPrompt } from "@/data/AssistantKnowledge";

export const runtime = "nodejs";

/* ─── Настройки провайдера ──────────────────────────────────────
   Локальная Ollama живёт на http://127.0.0.1:11434 и НЕ требует ключа.
   Облачная — на https://ollama.com и требует Bearer-токен.
   Поэтому заголовок Authorization отправляем только если ключ задан. */
const DEFAULT_HOST = "https://ollama.com";
const DEFAULT_MODEL = "gpt-oss:20b";
const REQUEST_TIMEOUT_MS = 25_000;

/* ─── Лимиты запроса ────────────────────────────────────────── */
const MAX_MESSAGES = 20;
const MAX_CONTENT_LENGTH = 2000;
const ALLOWED_ROLES = new Set(["user", "assistant"]);

/* ─── Rate limit ────────────────────────────────────────────────
   Простой счётчик в памяти процесса: 20 запросов на IP за 5 минут.
   Ограничение живёт только внутри одного инстанса и обнуляется при
   передеплое/перезапуске — для защиты от случайного флуда этого хватает,
   для настоящей защиты нужен внешний стор (Redis / Upstash). */
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000;
const RATE_LIMIT_MAX = 20;
const rateLimitBuckets = new Map();

function getClientIp(req) {
  const forwarded = req.headers.get("x-forwarded-for") || "";
  const first = forwarded.split(",")[0].trim();
  return first || req.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();

  // Чистим протухшие записи, чтобы Map не рос бесконечно
  for (const [key, stamps] of rateLimitBuckets) {
    const alive = stamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (alive.length) rateLimitBuckets.set(key, alive);
    else rateLimitBuckets.delete(key);
  }

  const stamps = rateLimitBuckets.get(ip) || [];
  if (stamps.length >= RATE_LIMIT_MAX) return true;

  stamps.push(now);
  rateLimitBuckets.set(ip, stamps);
  return false;
}

/* ─── Тексты деградации ─────────────────────────────────────── */
const DEGRADED_TEXT = {
  ru:
    "Ассистент временно недоступен — у нас технические работы. " +
    "Напишите нам в Telegram @KUZNETSOVA_designn или оставьте заявку через форму «Начните проект» — " +
    "ответим в течение 24 часов.",
  en:
    "The assistant is temporarily unavailable. Write to us on Telegram @KUZNETSOVA_designn " +
    "or leave a request through the “Start a project” form — we reply within 24 hours.",
};

const RATE_LIMIT_TEXT = {
  ru: "Слишком много сообщений подряд. Подождите пару минут или напишите нам в Telegram @KUZNETSOVA_designn.",
  en: "Too many messages in a row. Please wait a couple of minutes or write to us on Telegram @KUZNETSOVA_designn.",
};

function degraded(lang) {
  // Всегда HTTP 200: виджет показывает дружелюбный запасной ответ, а не красную ошибку
  return NextResponse.json({ reply: DEGRADED_TEXT[lang], degraded: true });
}

/** Убирает служебные размышления моделей вида <think>…</think>. */
function cleanReply(text) {
  return String(text || "")
    .replace(/<think>[\s\S]*?<\/think>/gi, "")
    .replace(/<\/?think>/gi, "")
    .trim();
}

export async function POST(req) {
  let lang = "ru";

  try {
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Некорректный запрос" }, { status: 400 });
    }

    lang = body?.lang === "en" ? "en" : "ru";

    /* ── Валидация входа ── */
    const raw = body?.messages;
    if (!Array.isArray(raw) || raw.length === 0 || raw.length > MAX_MESSAGES) {
      return NextResponse.json({ error: "Некорректный список сообщений" }, { status: 400 });
    }

    const messages = [];
    for (const item of raw) {
      if (!item || typeof item !== "object") {
        return NextResponse.json({ error: "Некорректное сообщение" }, { status: 400 });
      }
      if (!ALLOWED_ROLES.has(item.role)) {
        return NextResponse.json({ error: "Недопустимая роль сообщения" }, { status: 400 });
      }
      if (typeof item.content !== "string") {
        return NextResponse.json({ error: "Некорректный текст сообщения" }, { status: 400 });
      }
      const content = item.content.trim().slice(0, MAX_CONTENT_LENGTH);
      if (!content) continue;
      messages.push({ role: item.role, content });
    }

    if (!messages.length) {
      return NextResponse.json({ error: "Пустое сообщение" }, { status: 400 });
    }

    /* ── Rate limit ── */
    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: RATE_LIMIT_TEXT[lang] }, { status: 429 });
    }

    /* ── Запрос к Ollama ── */
    const host = (process.env.OLLAMA_HOST || DEFAULT_HOST).replace(/\/+$/, "");
    const model = process.env.OLLAMA_MODEL || DEFAULT_MODEL;
    const apiKey = process.env.OLLAMA_API_KEY;

    const headers = { "Content-Type": "application/json" };
    if (apiKey) headers.Authorization = `Bearer ${apiKey}`;

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    let response;
    try {
      response = await fetch(`${host}/api/chat`, {
        method: "POST",
        headers,
        signal: controller.signal,
        body: JSON.stringify({
          model,
          stream: false,
          messages: [
            { role: "system", content: buildSystemPrompt(lang) },
            ...messages,
          ],
        }),
      });
    } catch (err) {
      // Сеть недоступна, DNS, отказ соединения или таймаут AbortController
      console.error("[api/chat] provider request failed:", err?.name, err?.message);
      return degraded(lang);
    } finally {
      clearTimeout(timer);
    }

    if (!response.ok) {
      // 401/403 — недействительный ключ; 4xx/5xx — что угодно на стороне провайдера.
      // Наружу не отдаём ни статус, ни тело: там может быть служебная информация.
      const detail = await response.text().catch(() => "");
      console.error(
        `[api/chat] provider responded ${response.status} ${response.statusText}:`,
        detail.slice(0, 500)
      );
      return degraded(lang);
    }

    let data;
    try {
      data = await response.json();
    } catch (err) {
      console.error("[api/chat] provider returned non-JSON:", err?.message);
      return degraded(lang);
    }

    const reply = cleanReply(data?.message?.content ?? data?.response ?? "");

    if (!reply) {
      console.error("[api/chat] provider returned an empty reply");
      return degraded(lang);
    }

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("[api/chat] unexpected error:", err);
    return degraded(lang);
  }
}
