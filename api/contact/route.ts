import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";



export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await req.json();
    const { name, company, email, phone, telegram, services, budget, message } = body;

    const { error } = await resend.emails.send({
      from: "Kuznetsova Design <noreply@kuznetsova.design>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Новая заявка от ${name}${company ? ` · ${company}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #111;">
          <h2 style="border-bottom: 2px solid #111; padding-bottom: 12px;">
            Новая заявка с сайта
          </h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 140px;">Имя</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 8px 0; color: #666;">Компания</td>
              <td style="padding: 8px 0; font-weight: 600;">${company}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 8px 0; color: #666;">Email</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${email}" style="color: #111;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Телефон</td>
              <td style="padding: 8px 0;">
                <a href="tel:${phone}" style="color: #111;">${phone}</a>
              </td>
            </tr>
            ${telegram ? `
            <tr>
              <td style="padding: 8px 0; color: #666;">Telegram</td>
              <td style="padding: 8px 0;">${telegram}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Услуги</td>
              <td style="padding: 8px 0;">${services.join(", ")}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Бюджет</td>
              <td style="padding: 8px 0; font-weight: 600;">${budget}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 20px; background: #f5f5f5; border-radius: 8px;">
            <p style="margin: 0 0 8px; color: #666; font-size: 13px;">О ПРОЕКТЕ</p>
            <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
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