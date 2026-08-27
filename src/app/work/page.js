import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer.jsx";
import WorkHero from "@/components/Work/WorkHero/WorkHero";
import PortfolioBrowser from "@/components/Work/PortfolioIndustries/PortfolioBrowser";
import { SERVICES_DATA, getAllWorkSlugs } from "@/data/ServicesData";

import styles from "./page.module.css";

const SITE_URL = "https://kuznetsova.design";

export const metadata = {
  title: "Портфолио",
  description:
    "Портфолио дизайн-бюро Kuznetsova Design: логотипы, сайты, брендинг и 3D-визуализация для клиентов из Москвы и других регионов.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Портфолио — Kuznetsova Design",
    description:
      "Портфолио дизайн-бюро Kuznetsova Design: логотипы, сайты, брендинг и 3D-визуализация для клиентов из Москвы и других регионов.",
    url: `${SITE_URL}/work`,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Портфолио", item: `${SITE_URL}/work` },
  ],
};

const worksJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: getAllWorkSlugs().map((slug, i) => {
    const work = SERVICES_DATA.flatMap((s) => s.works).find((w) => w.slug === slug);
    return {
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/work/${slug}`,
      name: work?.title,
    };
  }),
};

export default function PortfolioPage() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, worksJsonLd]) }}
      />

      <Navbar />

      <WorkHero />

      <div id="main">
        <PortfolioBrowser />
      </div>

      <Footer />
    </main>
  );
}
