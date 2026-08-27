"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import useGSAP from "@/hooks/useGSAP";
import RunningText from "@/components/UI/RunningText/RunningText";
import { useBecomeClient } from "@/context/BecomeClientContext";
import { useT, useLanguage } from "@/context/LanguageContext";
import { localizeUsluga } from "@/i18n/uslugi";
import styles from "./UslugiHero.module.css";

/**
 * Общий герой всех страниц услуг /uslugi/*.
 *
 * usluga — запись из UslugiData.js. Отсюда берётся единственный <h1>
 * страницы, поэтому ниже по странице заголовков уровня h1 быть не должно.
 *
 * Секция помечена классом nav-dark-zone — навбар инвертируется над тёмным фоном.
 */
export default function UslugiHero({ usluga: source, runningRows }) {
  const { lang } = useLanguage();
  // Страница серверная и языка не знает — локализуем здесь, на клиенте.
  const usluga = localizeUsluga(source, lang);

  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const dividerRef = useRef(null);
  const bottomRef = useRef(null);

  const openClientForm = useBecomeClient();
  const t = useT();
  const { gsap } = useGSAP();

  useEffect(() => {
    if (!gsap) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(
          [eyebrowRef.current, titleRef.current, bottomRef.current],
          { opacity: 1, y: 0 }
        );
        gsap.set(dividerRef.current, { scaleX: 1 });
        return;
      }

      gsap.set(eyebrowRef.current, { opacity: 0, y: -18 });
      gsap.set(titleRef.current, { y: "105%", opacity: 0 });
      gsap.set(dividerRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(bottomRef.current, { opacity: 0, y: 20 });

      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.8 })
        .to(titleRef.current, { y: "0%", opacity: 1, duration: 1.15 }, "-=0.4")
        .to(
          dividerRef.current,
          { scaleX: 1, duration: 1.2, ease: "expo.inOut" },
          "-=1.3"
        )
        .to(bottomRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=1.25");
    }, sectionRef);

    return () => ctx.revert();
  }, [gsap]);

  const rows =
    runningRows && runningRows.length
      ? runningRows
      : [usluga.h1, "Kuznetsova Design"];

  return (
    <section ref={sectionRef} className={`${styles.hero} nav-dark-zone`}>
      <RunningText rows={rows} />

      <div className={styles.dotGrid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      <div className={styles.inner}>
        <p ref={eyebrowRef} className={styles.eyebrow}>
          <span className={styles.eyebrowDot} aria-hidden="true" />
          {t("uslugi.eyebrow", "Услуга")}
        </p>

        <div className={styles.titleClip}>
          <h1 ref={titleRef} className={styles.title}>
            {usluga.h1}
          </h1>
        </div>

        <div className={styles.bottom}>
          <div ref={dividerRef} className={styles.divider} aria-hidden="true" />

          <div ref={bottomRef} className={styles.bottomContent}>
            <p className={styles.lead}>{usluga.lead}</p>

            <div className={styles.actions}>
              <button
                type="button"
                className={styles.ctaPrimary}
                onClick={openClientForm}
              >
                {t("uslugi.discuss", "Обсудить задачу")}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2.5 7h9M7.5 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <Link href="/work" className={styles.ctaSecondary}>
                {t("uslugi.viewWork", "Смотреть работы")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
