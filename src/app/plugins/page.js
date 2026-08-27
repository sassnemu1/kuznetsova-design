import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer.jsx";
import PluginsHero from "@/components/Plugins/PluginsHero/PluginsHero";
import PluginGrid from "@/components/Plugins/PluginGrid/PluginGrid";
import DashCore from "@/components/Plugins/DashCore/DashCore";
import { PLUGINS, PLUGIN_STATUS } from "@/data/PluginsData";

import styles from "./page.module.css";

const SITE_URL = "https://kuznetsova.design";

const DESCRIPTION =
  "Отраслевые дашборды и CRM поверх сайта: личный кабинет для команды, автоматизация заявок, записи, заказы и отчёты — модуль собирается под конкретную отрасль.";

export const metadata = {
  title: "Плагины и дашборды",
  description: DESCRIPTION,
  alternates: { canonical: "/plugins" },
  openGraph: {
    title: "Плагины и дашборды — Kuznetsova Design",
    description: DESCRIPTION,
    url: `${SITE_URL}/plugins`,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Плагины", item: `${SITE_URL}/plugins` },
  ],
};

const pluginsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Плагины и отраслевые дашборды Kuznetsova Design",
  itemListElement: PLUGINS.map((plugin, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${SITE_URL}/plugins#${plugin.id}`,
    name: plugin.ru,
    description: `${plugin.lead} Статус: ${PLUGIN_STATUS[plugin.status]?.ru ?? "В разработке"}.`,
  })),
};

export default function PluginsPage() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, pluginsJsonLd]) }}
      />

      <Navbar />

      <PluginsHero />

      <PluginGrid />

      <DashCore />

      <Footer />
    </main>
  );
}
