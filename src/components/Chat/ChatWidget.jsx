"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { useBecomeClient } from "@/context/BecomeClientContext";
import styles from "./ChatWidget.module.css";

/* Ключи sessionStorage — переписка живёт только внутри вкладки и одной сессии */
const STORAGE_OPEN = "kd-chat-open";
const STORAGE_LOG = "kd-chat-log";

/* Сколько сообщений держим в контексте (и отправляем на сервер) */
const CONTEXT_LIMIT = 12;

const GREETING = {
  role: "assistant",
  content:
    "Здравствуйте! Я ассистент бюро Kuznetsova Design. Расскажу про услуги, сопровождение и наши работы — спрашивайте.",
};

const SUGGESTIONS = [
  "Сколько стоит сайт?",
  "С какими нишами вы работаете?",
  "Что входит в сопровождение?",
];

const TELEGRAM_URL = "https://t.me/KUZNETSOVA_designn";
const EMAIL = "kristina@kuznetsova.design";

function readStoredLog() {
  try {
    const raw = sessionStorage.getItem(STORAGE_LOG);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || !parsed.length) return null;
    const clean = parsed
      .filter(
        (m) =>
          m &&
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string" &&
          m.content.trim()
      )
      .slice(-40);
    return clean.length ? clean : null;
  } catch {
    return null;
  }
}


/* ─── sessionStorage как внешнее хранилище ───────────────────────
   Читаем переписку через useSyncExternalStore, а не setState в
   эффекте: на сервере хранилища нет, а каскадный ререндер после
   гидратации здесь не нужен. Снапшоты кэшируем — хук сравнивает
   их по ссылке. */
let restoredLogSnapshot;
let restoredOpenSnapshot;

function getRestoredLog() {
  if (restoredLogSnapshot === undefined) {
    restoredLogSnapshot = readStoredLog() || null;
  }
  return restoredLogSnapshot;
}

function getRestoredOpen() {
  if (restoredOpenSnapshot === undefined) {
    try {
      restoredOpenSnapshot = sessionStorage.getItem(STORAGE_OPEN) === "1";
    } catch {
      restoredOpenSnapshot = false; // приватный режим
    }
  }
  return restoredOpenSnapshot;
}

// Хранилище меняется только из этого же компонента, подписка не нужна.
const noopSubscribe = () => () => {};

export default function ChatWidget() {
  const restoredLog = useSyncExternalStore(noopSubscribe, getRestoredLog, () => null);
  const restoredOpen = useSyncExternalStore(noopSubscribe, getRestoredOpen, () => false);

  // null = в этой сессии ещё не трогали, значит показываем восстановленное.
  const [openOverride, setIsOpen] = useState(null);
  const [log, setMessages] = useState(null);

  const isOpen = openOverride ?? restoredOpen;
  // useMemo — иначе [GREETING] был бы новым массивом на каждый рендер
  // и тянул за собой все эффекты, зависящие от messages.
  const messages = useMemo(
    () => log ?? restoredLog ?? [GREETING],
    [log, restoredLog]
  );
  const [draft, setDraft] = useState("");
  const [isSending, setIsSending] = useState(false);

  const openClientForm = useBecomeClient();

  const launcherRef = useRef(null);
  const textareaRef = useRef(null);
  const listRef = useRef(null);

  /* ── Сохранение состояния сессии ── */
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_LOG, JSON.stringify(messages.slice(-40)));
    } catch {
      /* хранилище недоступно — переписка просто не переживёт переход */
    }
  }, [messages]);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_OPEN, isOpen ? "1" : "0");
    } catch {
      /* ignore */
    }
  }, [isOpen]);

  /* ── Фокус в поле ввода при открытии ── */
  useEffect(() => {
    if (!isOpen) return;
    const id = window.setTimeout(() => textareaRef.current?.focus(), 120);
    return () => window.clearTimeout(id);
  }, [isOpen]);

  /* ── Escape закрывает панель и возвращает фокус на кнопку ── */
  const close = useCallback(() => {
    setIsOpen(false);
    launcherRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  /* ── Автопрокрутка ленты вниз ── */
  useEffect(() => {
    const list = listRef.current;
    if (!list || !isOpen) return;
    list.scrollTop = list.scrollHeight;
  }, [messages, isSending, isOpen]);

  /* ── Отправка ── */
  const send = useCallback(
    async (rawText) => {
      const text = rawText.trim().slice(0, 2000);
      if (!text || isSending) return;

      const nextMessages = [...messages, { role: "user", content: text }];
      setMessages(nextMessages);
      setDraft("");
      setIsSending(true);

      const payload = nextMessages
        .slice(-CONTEXT_LIMIT)
        .map((m) => ({ role: m.role, content: m.content }));

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: payload, lang: "ru" }),
        });

        const data = await res.json().catch(() => null);

        if (res.status === 429) {
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content:
                data?.error ||
                "Слишком много сообщений подряд. Подождите пару минут.",
              degraded: true,
            },
          ]);
          return;
        }

        if (!res.ok || !data?.reply) {
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content:
                "Не получилось получить ответ. Напишите нам напрямую — ответим быстро.",
              degraded: true,
            },
          ]);
          return;
        }

        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.reply,
            degraded: Boolean(data.degraded),
          },
        ]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Связь прервалась. Напишите нам в Telegram или на почту — так точно дойдёт.",
            degraded: true,
          },
        ]);
      } finally {
        setIsSending(false);
      }
    },
    [isSending, messages]
  );

  const onSubmit = (e) => {
    e.preventDefault();
    send(draft);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(draft);
    }
  };

  const showSuggestions = messages.length <= 1 && !isSending;

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        className={styles.launcher}
        onClick={() => (isOpen ? close() : setIsOpen(true))}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Закрыть чат с ассистентом" : "Открыть чат с ассистентом"}
      >
        {isOpen ? (
          <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M1 1l12 12M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M3 5.6c0-1 .8-1.8 1.8-1.8h10.4c1 0 1.8.8 1.8 1.8v6.3c0 1-.8 1.8-1.8 1.8H8.4L4.6 16.6c-.5.4-1.2 0-1.2-.6v-2.3H3V5.6z"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            <circle cx="7.2" cy="8.8" r="0.9" fill="currentColor" />
            <circle cx="10" cy="8.8" r="0.9" fill="currentColor" />
            <circle cx="12.8" cy="8.8" r="0.9" fill="currentColor" />
          </svg>
        )}
      </button>

      <div
        className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
        role="dialog"
        aria-modal="false"
        aria-label="Чат с ассистентом Kuznetsova Design"
      >
        <header className={styles.header}>
          <div className={styles.headerText}>
            <span className={styles.eyebrow}>Ассистент</span>
            <h2 className={styles.title}>Kuznetsova Design</h2>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={close}
            aria-label="Закрыть чат"
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </header>

        <div
          ref={listRef}
          className={styles.list}
          aria-live="polite"
          aria-relevant="additions text"
        >
          {messages.map((message, i) => (
            <div
              key={`${message.role}-${i}`}
              className={`${styles.row} ${
                message.role === "user" ? styles.rowUser : styles.rowBot
              }`}
            >
              <div
                className={`${styles.bubble} ${
                  message.role === "user" ? styles.bubbleUser : styles.bubbleBot
                }`}
              >
                {message.content}
              </div>

              {message.degraded && (
                <div className={styles.fallback}>
                  <a
                    className={styles.fallbackLink}
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telegram
                  </a>
                  <a className={styles.fallbackLink} href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                  <button
                    type="button"
                    className={styles.fallbackBtn}
                    onClick={() => {
                      close();
                      openClientForm();
                    }}
                  >
                    Оставить заявку
                  </button>
                </div>
              )}
            </div>
          ))}

          {isSending && (
            <div className={`${styles.row} ${styles.rowBot}`}>
              <div className={`${styles.bubble} ${styles.bubbleBot} ${styles.typing}`}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.srOnly}>Ассистент печатает</span>
              </div>
            </div>
          )}
        </div>

        {showSuggestions && (
          <div className={styles.chips}>
            {SUGGESTIONS.map((question) => (
              <button
                key={question}
                type="button"
                className={styles.chip}
                onClick={() => send(question)}
              >
                {question}
              </button>
            ))}
          </div>
        )}

        <form className={styles.composer} onSubmit={onSubmit}>
          <label className={styles.srOnly} htmlFor="kd-chat-input">
            Сообщение ассистенту
          </label>
          <textarea
            id="kd-chat-input"
            ref={textareaRef}
            className={styles.textarea}
            rows={1}
            value={draft}
            maxLength={2000}
            placeholder="Спросите об услугах или проекте…"
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <button
            type="submit"
            className={styles.sendBtn}
            disabled={isSending || !draft.trim()}
            aria-label="Отправить сообщение"
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>

        <p className={styles.note}>
          Ассистент может ошибаться. Цены называем после короткого брифа.
        </p>
      </div>
    </>
  );
}
