"use client";

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import useGSAP from "@/hooks/useGSAP";
import styles from "./WorkHero.module.css";
import RunningText from "@/components/UI/RunningText/RunningText";
import { SERVICES_DATA } from "@/data/ServicesData";
import { plural } from "@/lib/plural";
import { useLanguage, useT } from "@/context/LanguageContext";

// Статистика считается из данных — не разъезжается с реальным портфолио
const totalWorks = SERVICES_DATA.reduce((sum, s) => sum + s.works.length, 0);
const totalCategories = SERVICES_DATA.filter((s) => s.works.length > 0).length;

export default function WorkHero() {
  const sectionRef = useRef(null);
  const topBarRef = useRef(null);
  const titleRef = useRef(null);
  const dividerRef = useRef(null);
  const bottomRef = useRef(null);

  const { gsap } = useGSAP();
  const t = useT();
  const { lang } = useLanguage();

  /* ── Подписи статистики ────────────────────────────────────────
     По-русски слово склоняется по числу; на остальных языках берём
     одну форму из словаря. */
  const stats = useMemo(() => {
    const worksLabel =
      lang === "ru"
        ? plural(totalWorks, "проект", "проекта", "проектов")
        : t("work.stat.projects", plural(totalWorks, "проект", "проекта", "проектов"));

    const categoriesLabel =
      lang === "ru"
        ? plural(totalCategories, "направление", "направления", "направлений")
        : t(
            "work.stat.categories",
            plural(totalCategories, "направление", "направления", "направлений")
          );

    return [
      { key: "projects", num: `${totalWorks}`, label: worksLabel },
      { key: "categories", num: `${totalCategories}`, label: categoriesLabel },
      { key: "years", num: "5+", label: t("work.stat.years", "лет в дизайне") },
    ];
  }, [lang, t]);

  useEffect(() => {
    if (!gsap) return;

    const ctx = gsap.context(() => {
      gsap.set(topBarRef.current, { opacity: 0, y: -24 });
      gsap.set(titleRef.current, { y: "105%", opacity: 0 });
      gsap.set(dividerRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(bottomRef.current, { opacity: 0, y: 18 });

      gsap.timeline({ defaults: { ease: "power4.out" } })
        .to(topBarRef.current, { opacity: 1, y: 0, duration: 0.9 })
        .to(titleRef.current, { y: "0%", opacity: 1, duration: 1.15 }, "-=0.45")
        .to(dividerRef.current, { scaleX: 1, duration: 1.3, ease: "expo.inOut" }, "-=1.45")
        .to(bottomRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=1.45");
    }, sectionRef);

    return () => ctx.revert();
  }, [gsap]);

  return (
    <section ref={sectionRef} className={`${styles.hero} nav-dark-zone`}>
      <RunningText rows={["Work", "Portfolio", "Kuznetsova Design"]} />

      <div className={styles.dotGrid} />
      <div className={styles.glow} />
      <div className={styles.glow2} />
      <div className={styles.glow3} />

      <div ref={topBarRef} className={styles.topBar}>
        <Link
          href="/"
          className={styles.brand}
          aria-label={t("common.home", "На главную")}
        >
          <div className={styles.logoMark}>
            <Image src="/logo-w.svg" alt="Kuznetsova Design" fill />
          </div>
          <span className={styles.brandName}>Kuznetsova Design</span>
        </Link>

        <div className={styles.issue}>
          <span className={styles.issueDot} />
        </div>
      </div>

      <div className={styles.titleWrap}>
        <div className={styles.titleClip}>
          <h1 ref={titleRef}>{t("work.title", "Portfolio")}</h1>
        </div>
      </div>

      <div className={styles.bottom}>
        <div ref={dividerRef} className={styles.divider} />
        <div ref={bottomRef} className={styles.bottomContent}>
          <p className={styles.desc}>
            {t(
              "work.desc",
              "Избранные проекты в брендинге, вебе, 3D и арт-дирекшне"
            )}
          </p>

          <div className={styles.stats}>
            {stats.map((s) => (
              <div key={s.key} className={styles.stat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
