import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer.jsx";
import ServicesHero from "@/components/Services/ServicesHero/ServicesHero";
import ProductCatalogue from "@/components/Services/ProductCatalogue/ProductCatalogue";
import CarePlans from "@/components/Services/CarePlans/CarePlans";
import { PRODUCT_GROUPS, CARE_PLANS } from "@/data/ProductsData";

import styles from "./page.module.css";

const SITE_URL = "https://kuznetsova.design";

const DESCRIPTION =
  "Услуги дизайн-бюро Kuznetsova Design: брендинг и фирменный стиль, разработка сайтов, SEO и сопровождение, полиграфия, SMM, фото и видео, 3D и интерьер, автоматизация и AI. Состав работ и подписки Care.";

export const metadata = {
  title: "Услуги",
  description: DESCRIPTION,
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Услуги — Kuznetsova Design",
    description: DESCRIPTION,
    url: `${SITE_URL}/services`,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Услуги", item: `${SITE_URL}/services` },
  ],
};

/* Каталог услуг — состав без цен: прайс остаётся внутренним документом */
const catalogueJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Услуги Kuznetsova Design",
  url: `${SITE_URL}/services`,
  provider: { "@id": `${SITE_URL}/#organization` },
  itemListElement: PRODUCT_GROUPS.map((group, i) => ({
    "@type": "OfferCatalog",
    position: i + 1,
    name: group.ru,
    description: group.lead,
    itemListElement: group.items.map((item, j) => ({
      "@type": "Offer",
      position: j + 1,
      itemOffered: {
        "@type": "Service",
        name: item.ru,
        ...(item.note ? { description: item.note } : {}),
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    })),
  })),
};

const carePlansJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Подписки Care — сопровождение сайта",
  itemListElement: CARE_PLANS.map((plan, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: `${plan.name} — ${plan.ru}`,
      description: plan.tagline,
      serviceType: "Сопровождение и поддержка сайта",
      url: `${SITE_URL}/services#care`,
      provider: { "@id": `${SITE_URL}/#organization` },
    },
  })),
};

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbJsonLd, catalogueJsonLd, carePlansJsonLd]),
        }}
      />

      <Navbar />

      <ServicesHero />

      <ProductCatalogue />

      <CarePlans />

      <Footer />
    </main>
  );
}
