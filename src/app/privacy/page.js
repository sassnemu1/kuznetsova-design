import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer.jsx";
import BackLink from "@/components/Work/BackLink/BackLink";

import styles from "./page.module.css";

export const metadata = {
  title: "Политика конфиденциальности",
  description:
    "Политика обработки персональных данных сайта kuznetsova.design: какие данные мы собираем, зачем и как их защищаем.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

/**
 * Страница остаётся серверной: правовой текст должен рендериться на сервере
 * и индексироваться поисковыми системами, поэтому хуки языка здесь не
 * используются и переключатель на неё не влияет.
 *
 * Документ приведён в двух версиях: русской (юридически обязательной) и
 * английской (справочный перевод). Десять языков для политики
 * конфиденциальности сознательно не делаются — машинное размножение
 * юридического текста создаёт риск расхождений, а не ясность.
 */
const POLICY = {
  ru: {
    eyebrow: "Правовая информация",
    titleLead: "Политика",
    titleAccent: "конфиденциальности",
    updatedLabel: "Обновлено",
    updated: "20 июля 2026",
    bindingNote:
      "Юридически обязательной является русская версия настоящей политики. Английский перевод приведён ниже исключительно для удобства чтения: при любых расхождениях преимущественную силу имеет русский текст.",
    contactText: "Остались вопросы о том, как мы обращаемся с данными?",
    sections: [
      {
        title: "Общие положения",
        body: [
          "Настоящая политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта kuznetsova.design (далее — «Сайт»), которым управляет дизайн-бюро Kuznetsova Design (далее — «Оператор»).",
          "Используя Сайт и отправляя данные через формы обратной связи, вы соглашаетесь с условиями настоящей политики. Обработка персональных данных осуществляется в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».",
        ],
      },
      {
        title: "Какие данные мы собираем",
        body: [
          "Через форму «Стать клиентом» мы получаем только те данные, которые вы указываете сами: имя, название компании (по желанию), адрес электронной почты, номер телефона, ник в Telegram (по желанию), интересующие услуги, ориентировочный бюджет и описание проекта.",
          "Автоматически могут обрабатываться технические данные, необходимые для работы Сайта: IP-адрес, тип браузера и устройства, страницы посещения. Эти данные не используются для установления личности.",
        ],
      },
      {
        title: "Цели обработки",
        body: [
          "Мы используем ваши данные, чтобы: связаться с вами по заявке и обсудить проект; подготовить коммерческое предложение; исполнить договор, если сотрудничество состоится; улучшать работу Сайта и качество услуг.",
          "Мы не используем ваши данные для рассылок без отдельного согласия и не продаём их третьим лицам.",
        ],
      },
      {
        title: "Правовое основание",
        body: [
          "Обработка осуществляется на основании вашего согласия, которое вы даёте, отправляя форму на Сайте, а также в целях заключения и исполнения договора, стороной которого вы являетесь.",
        ],
      },
      {
        title: "Передача данных третьим лицам",
        body: [
          "Данные из формы передаются по защищённому соединению и доставляются Оператору через сервис отправки электронной почты (Resend). Такие сервисы обрабатывают данные только в объёме, необходимом для доставки сообщения.",
          "Данные могут быть переданы государственным органам исключительно в случаях, предусмотренных законодательством.",
        ],
      },
      {
        title: "Файлы cookie",
        body: [
          "Сайт может использовать технические cookie, необходимые для его корректной работы. Вы можете отключить cookie в настройках браузера — это не повлияет на возможность просмотра Сайта, но может ограничить работу отдельных функций.",
        ],
      },
      {
        title: "Хранение и защита",
        body: [
          "Данные хранятся не дольше, чем это необходимо для целей обработки: заявки — в течение срока ведения переговоров и исполнения договора, после чего удаляются или обезличиваются.",
          "Оператор принимает организационные и технические меры для защиты данных от неправомерного доступа, изменения, раскрытия или уничтожения.",
        ],
      },
      {
        title: "Ваши права",
        body: [
          "Вы вправе запросить информацию об обработке ваших данных, потребовать их уточнения, блокирования или удаления, а также отозвать согласие на обработку в любой момент. Для этого напишите на kristina@kuznetsova.design — мы ответим в течение 30 дней.",
        ],
      },
      {
        title: "Изменения политики",
        body: [
          "Оператор может обновлять настоящую политику. Новая редакция вступает в силу с момента публикации на этой странице. Дата последнего обновления указана ниже заголовка.",
        ],
      },
      {
        title: "Контакты",
        body: [
          "По всем вопросам, связанным с обработкой персональных данных, обращайтесь: kristina@kuznetsova.design.",
        ],
      },
    ],
  },

  en: {
    eyebrow: "Legal information",
    titleLead: "Privacy",
    titleAccent: "policy",
    updatedLabel: "Updated",
    updated: "20 July 2026",
    bindingNote:
      "The Russian version of this policy is the legally binding one. The English text below is provided for convenience of reading only: in the event of any discrepancy, the Russian version prevails.",
    contactText: "Any questions about how we handle your data?",
    sections: [
      {
        title: "General provisions",
        body: [
          "This privacy policy sets out how the personal data of users of the kuznetsova.design website (the “Site”), which is operated by the design studio Kuznetsova Design (the “Operator”), is processed and protected.",
          "By using the Site and submitting data through its contact forms, you agree to the terms of this policy. Personal data is processed in accordance with Federal Law No. 152-FZ of 27 July 2006 “On Personal Data”.",
        ],
      },
      {
        title: "What data we collect",
        body: [
          "Through the “Become a client” form we receive only the data you provide yourself: your name, company name (optional), email address, phone number, Telegram username (optional), the services you are interested in, an approximate budget and a description of the project.",
          "Technical data necessary for the Site to operate may be processed automatically: IP address, browser and device type, pages visited. This data is not used to identify you.",
        ],
      },
      {
        title: "Purposes of processing",
        body: [
          "We use your data in order to: contact you about your enquiry and discuss the project; prepare a commercial proposal; perform the contract if we begin working together; improve the Site and the quality of our services.",
          "We do not use your data for mailings without separate consent, and we do not sell it to third parties.",
        ],
      },
      {
        title: "Legal basis",
        body: [
          "Processing is carried out on the basis of your consent, which you give by submitting a form on the Site, and for the purposes of concluding and performing a contract to which you are a party.",
        ],
      },
      {
        title: "Transfer of data to third parties",
        body: [
          "Data from the form is transmitted over a secure connection and delivered to the Operator through an email delivery service (Resend). Such services process the data only to the extent necessary to deliver the message.",
          "Data may be disclosed to state authorities solely in the cases provided for by law.",
        ],
      },
      {
        title: "Cookies",
        body: [
          "The Site may use technical cookies necessary for it to work correctly. You can disable cookies in your browser settings — this will not affect your ability to view the Site, but it may limit the operation of individual features.",
        ],
      },
      {
        title: "Storage and protection",
        body: [
          "Data is stored no longer than is necessary for the purposes of processing: enquiries are kept for the duration of the negotiations and the performance of the contract, after which they are deleted or anonymised.",
          "The Operator takes organisational and technical measures to protect data against unlawful access, alteration, disclosure or destruction.",
        ],
      },
      {
        title: "Your rights",
        body: [
          "You have the right to request information about the processing of your data, to require it to be corrected, blocked or deleted, and to withdraw your consent to processing at any time. To do so, write to kristina@kuznetsova.design — we will respond within 30 days.",
        ],
      },
      {
        title: "Changes to this policy",
        body: [
          "The Operator may update this policy. A new version takes effect from the moment it is published on this page. The date of the most recent update is shown below the heading.",
        ],
      },
      {
        title: "Contacts",
        body: [
          "For any questions relating to the processing of personal data, please contact: kristina@kuznetsova.design.",
        ],
      },
    ],
  },
};

function PolicySections({ sections }) {
  return (
    <div className={styles.sections}>
      {sections.map((s, i) => (
        <section key={s.title} className={styles.section}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionNum}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <h2 className={styles.sectionTitle}>{s.title}</h2>
          </div>
          <div className={styles.sectionBody}>
            {s.body.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function ContactCard({ text }) {
  return (
    <div className={styles.contactCard}>
      <p className={styles.contactText}>{text}</p>
      <a href="mailto:kristina@kuznetsova.design" className={styles.contactLink}>
        kristina@kuznetsova.design
        <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
          <path
            d="M3 9L9 3M4.5 3H9v4.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}

export default function PrivacyPage() {
  const ru = POLICY.ru;
  const en = POLICY.en;

  return (
    <main className={styles.page}>
      <Navbar />

      <BackLink href="/" label="На главную" />

      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>{ru.eyebrow}</span>
          <h1 className={styles.title}>
            {ru.titleLead} <em>{ru.titleAccent}</em>.
          </h1>
          <p className={styles.updated}>
            {ru.updatedLabel}: {ru.updated}
          </p>
        </header>

        <div
          className={styles.sectionBody}
          role="note"
          style={{ marginBottom: "48px" }}
        >
          <p>{ru.bindingNote}</p>
        </div>

        <PolicySections sections={ru.sections} />

        <ContactCard text={ru.contactText} />

        <section lang="en">
          <header
            className={styles.header}
            style={{ marginTop: "96px", marginBottom: "48px" }}
          >
            <span className={styles.eyebrow}>{en.eyebrow}</span>
            <h2 className={styles.title}>
              {en.titleLead} <em>{en.titleAccent}</em>.
            </h2>
            <p className={styles.updated}>
              {en.updatedLabel}: {en.updated}
            </p>
          </header>

          <div
            className={styles.sectionBody}
            role="note"
            style={{ marginBottom: "48px" }}
          >
            <p>{en.bindingNote}</p>
          </div>

          <PolicySections sections={en.sections} />

          <ContactCard text={en.contactText} />
        </section>
      </div>

      <Footer />
    </main>
  );
}
