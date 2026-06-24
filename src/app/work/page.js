import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer.jsx";
import WorkHero from "@/components/Work/WorkHero/WorkHero";
import CategorySection from "@/components/Work/CategorySection/CategorySection";

import { SERVICES_DATA } from "@/data/ServicesData";

import styles from "./page.module.css";

export const metadata = {
  title: "Портфолио — Kuznetsova Design",
  description:
    "Избранные проекты Kuznetsova Design: брендинг, веб-разработка, 3D и арт-дирекшн.",
  openGraph: {
    title: "Портфолио — Kuznetsova Design",
    description:
      "Избранные проекты Kuznetsova Design: брендинг, веб-разработка, 3D и арт-дирекшн.",
  },
};

export default function PortfolioPage() {
  const sections = SERVICES_DATA.filter((s) => s.works.length > 0);

  return (
    <main className={styles.page}>
      <Navbar />

      <WorkHero />

      <div className={styles.content}>
        <div className={styles.sections}>
          {sections.map((service, i) => (
            <CategorySection key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}