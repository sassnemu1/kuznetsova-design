import { NextResponse } from "next/server";
import { Resend } from "resend";
import { INDUSTRY_MAP } from "@/data/IndustriesData";

export const runtime = "nodejs";

/**
 * Запрос доступа к личному кабинету dash.kuznetsova.design.
 *
 * Это НЕ аутентификация: пароли здесь не принимаются, не проверяются и не
 * хранятся. Роут только отправляет студии письмо с заявкой — аккаунт заводится
 * вручную, когда кабинет будет готов.
 */

// Локальная копия хелпера — намеренно не импортируем из другого роута.
function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const MAX_LEN = 2000;

function cap(value) {
  return String(value ?? "").trim().slice(0, MAX_LEN);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req) {
  try {
    const body = await req.json();

    const name = cap(body?.name);
    const company = cap(body?.company);
    const email = cap(body?.email);
    const phone = cap(body?.phone);
    const industry = cap(body?.industry);
    const comment = cap(body?.comment);
    const consent = body?.consent === true;
    const website = cap(body?.website); // honeypot — люди это поле не видят

    // Бот заполнил скрытое поле — тихо "принимаем" запрос, но ничего не отправляем
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !company || !email) {
      return NextResponse.json(
        { error: "Заполните имя, компанию и e-mail" },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Проверьте формат e-mail" }, { status: 400 });
    }

    if (!consent) {
      return NextResponse.json(
        { error: "Нужно согласие на обработку персональных данных" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      console.error("Request-access: почтовый сервис не сконфигурирован");
      return NextResponse.json(
        { error: "Отправка временно недоступна. Напишите нам на почту." },
        { status: 500 }
      );
    }

    const industryLabel = INDUSTRY_MAP[industry]?.ru || "";

    const safe = {
      name: escapeHtml(name),
      company: escapeHtml(company),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      industry: escapeHtml(industryLabel),
      comment: escapeHtml(comment),
    };

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "Kuznetsova Design <noreply@kuznetsova.design>",
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Запрос доступа к кабинету — ${name}, ${company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #111;">
          <h2 style="border-bottom: 2px solid #111; padding-bottom: 12px;">
            Запрос доступа к личному кабинету
          </h2>

          <p style="margin: 0 0 20px; line-height: 1.6; color: #444;">
            Это запрос на доступ к дашборду dash.kuznetsova.design, отправленный
            со страницы /login. Аккаунт нужно завести вручную и передать доступ
            ответственному сотруднику.
          </p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 140px;">Имя</td>
              <td style="padding: 8px 0; font-weight: 600;">${safe.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Компания</td>
              <td style="padding: 8px 0; font-weight: 600;">${safe.company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Email</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${safe.email}" style="color: #111;">${safe.email}</a>
              </td>
            </tr>
            ${safe.phone ? `
            <tr>
              <td style="padding: 8px 0; color: #666;">Телефон</td>
              <td style="padding: 8px 0;">
                <a href="tel:${safe.phone}" style="color: #111;">${safe.phone}</a>
              </td>
            </tr>` : ""}
            ${safe.industry ? `
            <tr>
              <td style="padding: 8px 0; color: #666;">Сфера бизнеса</td>
              <td style="padding: 8px 0;">${safe.industry}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 8px 0; color: #666;">Согласие на обработку</td>
              <td style="padding: 8px 0;">получено</td>
            </tr>
          </table>

          ${safe.comment ? `
          <div style="margin-top: 24px; padding: 20px; background: #f5f5f5; border-radius: 8px;">
            <p style="margin: 0 0 8px; color: #666; font-size: 13px;">КОММЕНТАРИЙ</p>
            <p style="margin: 0; line-height: 1.6;">${safe.comment.replace(/\n/g, "<br>")}</p>
          </div>` : ""}

          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            Письмо отправлено со страницы /login сайта kuznetsova.design
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Request-access: ошибка отправки письма —", error?.message || error);
      return NextResponse.json(
        { error: "Не удалось отправить запрос. Попробуйте позже." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Request-access: сбой обработки запроса —", err?.message || err);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
