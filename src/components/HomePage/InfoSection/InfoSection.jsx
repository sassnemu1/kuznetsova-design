"use client";

import styles from "./InfoSection.module.css";

export default function InfoSection() {
  return (
    <section className={styles.section}>
      
      <div className={styles.inner}>
        <span className={styles.label}>
          Что Мы Создаем
        </span>

        <h2 className={styles.title}>
          <span>DESIGN</span>
          <span className={styles.cross}>×</span>
          <span>DEVELOPMENT</span>
          <span className={styles.cross}>×</span>
          <span>AI</span>
          <span className={styles.cross}>×</span>
          <span>TECHNICAL DESIGN</span>
          <span className={styles.cross}>×</span>
          <span>3D-DESIGN</span>
          <span className={styles.cross}>×</span>
        </h2>

        {/* <p className={styles.text}>
          Большинство агентств останавливаются на дизайне.
          <br />
          Мы же продолжаем.
        </p> */}

        <p className={styles.subtext}>
          От стратегии и визуальной идентичности до веб-разработки, 
          автоматизация и интеллектуальные цифровые системы.
        </p>
      </div>
    </section>
  );
}