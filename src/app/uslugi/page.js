import Link from "next/link";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer.jsx";
import { USLUGI } from "@/data/UslugiData";

import styles from "./page.module.css";

const SITE_URL = "https://kuznetsova.design";

/* Порядок карточек задаём явно — он же порядок в ItemList для поисковиков.
   Если в данных появится новая услуга, она встанет в конец, а не потеряется. */
const ORDER = ["logotip", "brending", "sozdanie-saytov", "3d-vizualizaciya"];

const CATALOGUE = USLUGI ?? {};

const SLUGS = [
  ...ORDER.filter((slug) => CATALOGUE[slug]),
  ...Object.keys(CATALOGUE).filter((slug) => !ORDER.includes(slug)),
];

/* Первое непустое строковое значение из списка кандидатов.
   Позволяет странице не зависеть от того, как именно названо поле в данных. */
function pick(...values) {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) return value.trim();
    if (Array.isArray(value)) {
      const joined = value.filter((v) => typeof v === "string" && v.trim()).join(" ");
      if (joined.trim()) return joined.trim();
    }
  }
  return "";
}

function pickList(...values) {
  for (const value of values) {
    if (Array.isArray(value)) {
      const list = value.filter((v) => typeof v === "string" && v.trim());
      if (list.length) return list;
    }
  }
  return [];
}

function cardOf(slug, index) {
  const usluga = CATALOGUE[slug] ?? {};

  return {
    slug,
    num: String(index + 1).padStart(2, "0"),
    title: pick(usluga.cardTitle, usluga.shortTitle, usluga.h1, usluga.title, usluga.name, slug),
    lead: pick(
      usluga.cardLead,
      usluga.lead,
      usluga.intro,
      usluga.summary,
      usluga.description,
      usluga.metaDescription,
      usluga.metaDesc
    ),
    tags: pickList(usluga.tags, usluga.chips, usluga.deliverables).slice(0, 4),
  };
}

const CARDS = SLUGS.map(cardOf);

const DESCRIPTION =
  "Услуги дизайн-бюро Kuznetsova Design: создание логотипа, брендинг и фирменный стиль, разработка сайтов, 3D-визуализация. Отдельная страница на каждое направление — состав работ, примеры и ответы на частые вопросы.";

export const metadata = {
  /* absolute — чтобы к заголовку не приклеился шаблон «| Kuznetsova Design» из layout.js */
  title: { absolute: "Услуги бюро — Kuznetsova Design" },
  description: DESCRIPTION,
  keywords: [
    "услуги дизайн-бюро",
    "заказать логотип",
    "брендинг под ключ",
    "разработка сайта на заказ",
    "3D-визуализация на заказ",
    "дизайн-бюро Москва",
  ],
  alternates: { canonical: "/uslugi" },
  openGraph: {
    title: "Услуги бюро — Kuznetsova Design",
    description: DESCRIPTION,
    url: `${SITE_URL}/uslugi`,
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Услуги бюро — Kuznetsova Design",
    description: DESCRIPTION,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Услуги", item: `${SITE_URL}/uslugi` },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Услуги дизайн-бюро Kuznetsova Design",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  itemListElement: CARDS.map((card, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: card.title,
    url: `${SITE_URL}/uslugi/${card.slug}`,
  })),
};

export default function UslugiIndexPage() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbJsonLd, itemListJsonLd]),
        }}
      />

      <Navbar />

      <section className={`${styles.hero} nav-dark-zone`}>
        <div className={styles.dotGrid} aria-hidden="true" />
        <div className={styles.glow} aria-hidden="true" />

        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Услуги</span>

          <h1 className={styles.heroTitle}>Услуги дизайн-бюро</h1>

          <div className={styles.heroDivider} />

          <p className={styles.heroLead}>
            Четыре направления, с которых чаще всего начинается работа: логотип,
            брендинг, сайт и 3D-визуализация. Под каждым — отдельная страница:
            что входит в работу, как она устроена по шагам, примеры из портфолио
            и ответы на вопросы, которые задают до брифа.
          </p>

          <p className={styles.heroMeta}>Москва и удалённо по России</p>
        </div>
      </section>

      <main id="main">
        <section className={styles.list} aria-labelledby="uslugi-list-title">
          <div className={styles.inner}>
            <div className={styles.sectionHead}>
              <span className={styles.label}>Направления</span>
              <h2 id="uslugi-list-title" className={styles.sectionTitle}>
                Выберите, с чего начать
              </h2>
              <p className={styles.sectionText}>
                Направления собираются в один проект: логотип живёт в брендинге,
                брендинг ложится на сайт, 3D снимает вопросы там, где фотографии
                ещё нет. Начать можно с любого — стоимость называем после брифа.
              </p>
            </div>

            <ul className={styles.grid}>
              {CARDS.map((card) => (
                <li key={card.slug}>
                  <article className={styles.card}>
                    <div className={styles.cardHead}>
                      <span className={styles.cardNum}>{card.num}</span>
                      <h3 className={styles.cardTitle}>
                        <Link href={`/uslugi/${card.slug}`} className={styles.cardLink}>
                          {card.title}
                        </Link>
                      </h3>
                    </div>

                    <div className={styles.cardBody}>
                      {card.lead ? <p className={styles.cardLead}>{card.lead}</p> : null}

                      {card.tags.length ? (
                        <ul className={styles.chips}>
                          {card.tags.map((tag) => (
                            <li key={tag} className={styles.chip}>
                              {tag}
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      <span className={styles.cardCta} aria-hidden="true">
                        Подробнее об услуге
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path
                            d="M2.5 7h9M7.5 3l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.catalogue} aria-labelledby="uslugi-catalogue-title">
          <div className={styles.inner}>
            <div className={styles.panel}>
              <div className={styles.panelText}>
                <span className={styles.label}>Каталог</span>
                <h2 id="uslugi-catalogue-title" className={styles.panelTitle}>
                  Полный каталог услуг
                </h2>
                <p className={styles.panelLead}>
                  Эти четыре страницы — про то, что заказывают чаще всего.
                  Всё остальное собрано в каталоге: полиграфия, SMM и контент,
                  фото и видео, техническая документация, автоматизация,
                  сопровождение сайта.
                </p>
              </div>

              <div className={styles.panelLinks}>
                <Link href="/services" className={styles.panelPrimary}>
                  Смотреть каталог
                  <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 7h9M7.5 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                <Link href="/work" className={styles.panelSecondary}>
                  Портфолио
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
