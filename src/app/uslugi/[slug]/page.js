import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer.jsx";
import UslugiHero from "@/components/Uslugi/UslugiHero/UslugiHero";
import UslugiBody from "@/components/Uslugi/UslugiBody/UslugiBody";
import UslugiCases from "@/components/Uslugi/UslugiCases/UslugiCases";
import UslugiFaq from "@/components/Uslugi/UslugiFaq/UslugiFaq";
import { USLUGI } from "@/data/UslugiData";

import styles from "./page.module.css";

const SITE_URL = "https://kuznetsova.design";

const CATALOGUE = USLUGI ?? {};

/* Первое непустое строковое значение — страница не завязана на конкретное
   имя поля в данных и не рассыпается, если какого-то поля нет. */
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

function nameOf(usluga, slug) {
  return pick(usluga?.shortTitle, usluga?.h1, usluga?.title, usluga?.name, slug);
}

function descriptionOf(usluga) {
  return pick(
    usluga?.metaDescription,
    usluga?.metaDesc,
    usluga?.seoDescription,
    usluga?.description,
    usluga?.lead,
    usluga?.intro
  );
}

function keywordsOf(usluga) {
  const raw = usluga?.keywords;
  if (Array.isArray(raw)) {
    const list = raw.filter((k) => typeof k === "string" && k.trim()).map((k) => k.trim());
    return list.length ? list : undefined;
  }
  if (typeof raw === "string" && raw.trim()) {
    return raw.split(",").map((k) => k.trim()).filter(Boolean);
  }
  return undefined;
}

/* Вопрос/ответ приходят из данных под разными возможными именами —
   раскладываем в одну форму, чтобы FAQPage не потерял ни одной пары. */
function normalizeFaq(faq) {
  if (!Array.isArray(faq)) return [];

  return faq
    .map((item) => ({
      q: pick(item?.q, item?.question, item?.title),
      a: pick(item?.a, item?.answer, item?.text),
    }))
    .filter((item) => item.q && item.a);
}

export async function generateStaticParams() {
  return Object.keys(CATALOGUE).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const usluga = CATALOGUE[slug];

  if (!usluga) {
    return { title: "Услуга не найдена — Kuznetsova Design" };
  }

  const name = nameOf(usluga, slug);
  const rawTitle = pick(usluga.metaTitle, usluga.seoTitle, usluga.title, name);
  const description = descriptionOf(usluga);

  /* Если заголовок из данных уже содержит имя бюро — отдаём его как absolute,
     чтобы шаблон «| Kuznetsova Design» из layout.js не задвоил бренд. */
  const title = /kuznetsova/i.test(rawTitle) ? { absolute: rawTitle } : rawTitle;
  const ogTitle = /kuznetsova/i.test(rawTitle) ? rawTitle : `${rawTitle} — Kuznetsova Design`;

  return {
    title,
    description,
    keywords: keywordsOf(usluga),
    alternates: { canonical: `/uslugi/${slug}` },
    openGraph: {
      title: ogTitle,
      description,
      url: `${SITE_URL}/uslugi/${slug}`,
      type: "website",
      locale: "ru_RU",
      siteName: "Kuznetsova Design",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}

export default async function UslugaPage({ params }) {
  const { slug } = await params;
  const usluga = CATALOGUE[slug];

  if (!usluga) notFound();

  const name = nameOf(usluga, slug);
  const description = descriptionOf(usluga);
  const faq = normalizeFaq(usluga.faq);
  const url = `${SITE_URL}/uslugi/${slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Услуги", item: `${SITE_URL}/uslugi` },
      { "@type": "ListItem", position: 3, name, item: url },
    ],
  };

  /* Service без price/offers — прайс остаётся внутренним документом */
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: pick(usluga.serviceType, usluga.h1, usluga.title, name),
    url,
    inLanguage: "ru-RU",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Москва" },
      { "@type": "Country", name: "Россия" },
    ],
  };

  const faqJsonLd = faq.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }
    : null;

  const jsonLd = [breadcrumbJsonLd, serviceJsonLd, faqJsonLd].filter(Boolean);

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <UslugiHero usluga={usluga} />

      <main id="main">
        <UslugiBody usluga={usluga} />

        <UslugiCases caseSlugs={usluga.caseSlugs} />

        <UslugiFaq usluga={usluga} />

        <section className={`${styles.cta} nav-dark-zone`} aria-labelledby="usluga-cta-title">
          <div className={styles.ctaInner}>
            <span className={styles.ctaEyebrow}>Дальше</span>

            <h2 id="usluga-cta-title" className={styles.ctaTitle}>
              Расскажите, что нужно сделать
            </h2>

            <p className={styles.ctaText}>
              Короткий бриф — и мы вернёмся с пониманием задачи, составом работ
              и оценкой. Если задача шире одного направления, так и напишите:
              логотип, сайт и 3D мы обычно ведём одной командой.
            </p>

            <Link href="/#contact" className={styles.ctaButton}>
              Оставить заявку
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M2.5 7h9M7.5 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <a className={styles.ctaMail} href="mailto:kristina@kuznetsova.design">
              kristina@kuznetsova.design
            </a>

            <div className={styles.ctaLinks}>
              <Link href="/uslugi" className={styles.ctaLink}>
                Все услуги
              </Link>
              <span className={styles.ctaDot} aria-hidden="true" />
              <Link href="/services" className={styles.ctaLink}>
                Полный каталог
              </Link>
              <span className={styles.ctaDot} aria-hidden="true" />
              <Link href="/work" className={styles.ctaLink}>
                Портфолио
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
