import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      company,
      email,
      phone,
      telegram,
      services,
      budget,
      message,
      website, // honeypot — настоящие пользователи это поле не видят и не заполняют
    } = body;

    // Бот заполнил скрытое поле — тихо "принимаем" заявку, но ничего не отправляем
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Заполните обязательные поля" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const safe = {
      name: escapeHtml(name),
      company: escapeHtml(company),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      telegram: escapeHtml(telegram),
      budget: escapeHtml(budget),
      message: escapeHtml(message),
      services: Array.isArray(services) ? services.map(escapeHtml).join(", ") : "",
    };

    const { error } = await resend.emails.send({
      from: "Kuznetsova Design <noreply@kuznetsova.design>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Новая заявка от ${safe.name}${safe.company ? ` · ${safe.company}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #111;">
          <h2 style="border-bottom: 2px solid #111; padding-bottom: 12px;">
            Новая заявка с сайта
          </h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 140px;">Имя</td>
              <td style="padding: 8px 0; font-weight: 600;">${safe.name}</td>
            </tr>
            ${safe.company ? `
            <tr>
              <td style="padding: 8px 0; color: #666;">Компания</td>
              <td style="padding: 8px 0; font-weight: 600;">${safe.company}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 8px 0; color: #666;">Email</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${safe.email}" style="color: #111;">${safe.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Телефон</td>
              <td style="padding: 8px 0;">
                <a href="tel:${safe.phone}" style="color: #111;">${safe.phone}</a>
              </td>
            </tr>
            ${safe.telegram ? `
            <tr>
              <td style="padding: 8px 0; color: #666;">Telegram</td>
              <td style="padding: 8px 0;">${safe.telegram}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Услуги</td>
              <td style="padding: 8px 0;">${safe.services}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Бюджет</td>
              <td style="padding: 8px 0; font-weight: 600;">${safe.budget}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 20px; background: #f5f5f5; border-radius: 8px;">
            <p style="margin: 0 0 8px; color: #666; font-size: 13px;">О ПРОЕКТЕ</p>
            <p style="margin: 0; line-height: 1.6;">${safe.message.replace(/\n/g, "<br>")}</p>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            Письмо отправлено с сайта kuznetsova.design
          </p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
