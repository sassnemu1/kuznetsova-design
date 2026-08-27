"use client";

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import useGSAP from "@/hooks/useGSAP";
import { useT } from "@/context/LanguageContext";
import RunningText from "@/components/UI/RunningText/RunningText";
import { PLUGINS } from "@/data/PluginsData";
import styles from "./PluginsHero.module.css";

/* Все три числа считаются из PluginsData — руками ничего не проставлено,
   поэтому цифры в шапке не разъезжаются с сеткой модулей ниже. */
const totalModules = PLUGINS.length;
const liveModules = PLUGINS.filter((p) => p.status === "live").length;
const totalIndustries = new Set(PLUGINS.map((p) => p.industry)).size;

export default function PluginsHero() {
  const t = useT();

  const STATS = useMemo(
    () => [
      { id: "modules", num: `${totalModules}`, label: t("plugins.stat.modules", "модулей") },
      { id: "live", num: `${liveModules}`, label: t("plugins.stat.live", "уже работают") },
      { id: "industries", num: `${totalIndustries}`, label: t("plugins.stat.industries", "отраслей") },
    ],
    [t]
  );

  const sectionRef = useRef(null);
  const topBarRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const dividerRef = useRef(null);
  const bottomRef = useRef(null);

  const { gsap } = useGSAP();

  useEffect(() => {
    if (!gsap) return;

    const ctx = gsap.context(() => {
      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduced) return;

      gsap.set(topBarRef.current, { opacity: 0, y: -24 });
      gsap.set(eyebrowRef.current, { opacity: 0, y: 14 });
      gsap.set(titleRef.current, { y: "105%", opacity: 0 });
      gsap.set(dividerRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(bottomRef.current, { opacity: 0, y: 18 });

      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .to(topBarRef.current, { opacity: 1, y: 0, duration: 0.9 })
        .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
        .to(titleRef.current, { y: "0%", opacity: 1, duration: 1.15 }, "-=0.55")
        .to(dividerRef.current, { scaleX: 1, duration: 1.3, ease: "expo.inOut" }, "-=1.45")
        .to(bottomRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=1.4");
    }, sectionRef);

    return () => ctx.revert();
  }, [gsap]);

  return (
    <section ref={sectionRef} className={`${styles.hero} nav-dark-zone`}>
      <RunningText rows={["Plugins", "Dashboards", "Kuznetsova Design"]} />

      <div className={styles.dotGrid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      <div ref={topBarRef} className={styles.topBar}>
        <Link href="/" className={styles.brand} aria-label={t("common.home", "На главную")}>
          <span className={styles.logoMark}>
            <Image src="/logo-w.svg" alt="Kuznetsova Design" fill />
          </span>
          <span className={styles.brandName}>Kuznetsova Design</span>
        </Link>

        <span className={styles.issue}>
          <span className={styles.issueDot} aria-hidden="true" />
          <span className={styles.issueLabel}>{t("plugins.issue", "dash · в разработке")}</span>
        </span>
      </div>

      <div className={styles.titleWrap}>
        <p ref={eyebrowRef} className={styles.eyebrow}>
          {t("plugins.eyebrow", "Плагины и дашборды")}
        </p>
        <span className={styles.titleClip}>
          <h1 ref={titleRef} className={styles.title}>
            {t("plugins.title", "Плагины")}
          </h1>
        </span>
      </div>

      <div className={styles.bottom}>
        <div ref={dividerRef} className={styles.divider} aria-hidden="true" />

        <div ref={bottomRef} className={styles.bottomContent}>
          <p className={styles.desc}>
            {t(
              "plugins.desc",
              "Сайт приводит клиента, но работа начинается дальше: заявки, записи, заказы, остатки и деньги. Плагин — это дашборд, собранный под вашу отрасль и живущий в вашем собственном кабинете, а не в чужой универсальной панели."
            )}
          </p>

          <dl className={styles.stats}>
            {STATS.map((s) => (
              <div key={s.id} className={styles.stat}>
                <dt className={styles.statLabel}>{s.label}</dt>
                <dd className={styles.statNum}>{s.num}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
