"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import useGSAP from "@/hooks/useGSAP";
import RunningText from "@/components/UI/RunningText/RunningText";
import { PRODUCT_GROUPS, CARE_PLANS } from "@/data/ProductsData";
import styles from "./ServicesHero.module.css";

/* Склонение существительных при числительных — чтобы подписи не врали,
   если каталог изменится. */
function plural(n, one, few, many) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
}

/* Статистика считается из данных — никаких зашитых чисел */
const groupsCount = PRODUCT_GROUPS.length;
const itemsCount = PRODUCT_GROUPS.reduce((sum, g) => sum + g.items.length, 0);
const plansCount = CARE_PLANS.length;

const STATS = [
  { num: `${groupsCount}`, label: plural(groupsCount, "направление", "направления", "направлений") },
  { num: `${itemsCount}`, label: plural(itemsCount, "услуга", "услуги", "услуг") },
  { num: `${plansCount}`, label: plural(plansCount, "тариф Care", "тарифа Care", "тарифов Care") },
];

export default function ServicesHero() {
  const sectionRef = useRef(null);
  const topBarRef = useRef(null);
  const titleRef = useRef(null);
  const kickerRef = useRef(null);
  const dividerRef = useRef(null);
  const bottomRef = useRef(null);

  const { gsap } = useGSAP();

  useEffect(() => {
    if (!gsap) return;

    const ctx = gsap.context(() => {
      const reduce =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduce) {
        gsap.set([topBarRef.current, kickerRef.current, bottomRef.current], { opacity: 1, y: 0 });
        gsap.set(titleRef.current, { opacity: 1, y: "0%" });
        gsap.set(dividerRef.current, { scaleX: 1 });
        return;
      }

      gsap.set(topBarRef.current, { opacity: 0, y: -24 });
      gsap.set(kickerRef.current, { opacity: 0, y: 14 });
      gsap.set(titleRef.current, { y: "105%", opacity: 0 });
      gsap.set(dividerRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(bottomRef.current, { opacity: 0, y: 18 });

      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .to(topBarRef.current, { opacity: 1, y: 0, duration: 0.9 })
        .to(kickerRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.55")
        .to(titleRef.current, { y: "0%", opacity: 1, duration: 1.15 }, "-=0.6")
        .to(dividerRef.current, { scaleX: 1, duration: 1.3, ease: "expo.inOut" }, "-=1.45")
        .to(bottomRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=1.45");
    }, sectionRef);

    return () => ctx.revert();
  }, [gsap]);

  return (
    <section ref={sectionRef} className={`${styles.hero} nav-dark-zone`}>
      <RunningText rows={["Services", "Catalogue", "Kuznetsova Design"]} />

      <div className={styles.dotGrid} />
      <div className={styles.glow} />
      <div className={styles.glow2} />
      <div className={styles.glow3} />

      <div ref={topBarRef} className={styles.topBar}>
        <Link href="/" className={styles.brand} aria-label="На главную">
          <span className={styles.logoMark}>
            <Image src="/logo-w.svg" alt="Kuznetsova Design" fill />
          </span>
          <span className={styles.brandName}>Kuznetsova Design</span>
        </Link>

        <div className={styles.issue}>
          <span className={styles.issueLabel}>Каталог 2026</span>
          <span className={styles.issueDot} />
        </div>
      </div>

      <div className={styles.titleWrap}>
        <span ref={kickerRef} className={styles.kicker}>
          Что мы делаем
        </span>

        <div className={styles.titleClip}>
          <h1 ref={titleRef} className={styles.title}>
            Услуги
          </h1>
        </div>
      </div>

      <div className={styles.bottom}>
        <div ref={dividerRef} className={styles.divider} />

        <div ref={bottomRef} className={styles.bottomContent}>
          <p className={styles.desc}>
            Полный каталог бюро — от знака и сайта до съёмки, 3D и автоматизации.
            Здесь виден состав работ; сумму называем в коммерческом предложении после брифа.
          </p>

          <div className={styles.stats}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
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
