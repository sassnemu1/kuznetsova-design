"use client";

import styles from "./InfoSection.module.css";
import { useT } from "@/context/LanguageContext";

export default function InfoSection() {
  const t = useT();

  return (
    <section className={styles.section}>

      <div className={styles.inner}>
        <span className={styles.label}>
          {t("info.label", "Что мы создаём")}
        </span>

        <h2 className={styles.title}>
          <span>DESIGN</span>
          <span className={styles.cross}>×</span>
          <span>DEVELOPMENT</span>
          <span className={styles.cross}>×</span>
          <span>TECHNICAL DESIGN</span>
          <span className={styles.cross}>×</span>
          <span>AI</span>
          <span className={styles.cross}>×</span>
          <span>3D-DESIGN</span>
          <span className={styles.cross}>×</span>
        </h2>

        <p className={styles.subtext}>
          {t(
            "info.subtext",
            "От стратегии и визуальной идентичности до веб-разработки, автоматизация и интеллектуальные цифровые системы."
          )}
        </p>
      </div>
    </section>
  );
}