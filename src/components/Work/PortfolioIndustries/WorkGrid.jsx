"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import useGSAP from "@/hooks/useGSAP";
import { useLanguage, useT } from "@/context/LanguageContext";
import { pickLocalized, pickLocalizedList } from "@/i18n/dictionary";
import styles from "./WorkGrid.module.css";

const bgFor = (w) => (w.image ? `url(${w.image}), ${w.thumbBg}` : w.thumbBg);

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Сетка работ выбранной отрасли.
 *
 * works — плоский список работ (см. getWorksByIndustry / getAllWorks).
 * color — акцент отрасли, приходит как --ind-color.
 *
 * Работы с concept: true — инициативные концепты бюро, а не заказы клиентов,
 * поэтому карточка обязательно несёт бейдж «Концепт».
 */
export default function WorkGrid({ works, color }) {
  const gridRef = useRef(null);
  const { gsap } = useGSAP();
  const t = useT();
  const { lang } = useLanguage();

  /* ── Мягкое появление карточек при смене вкладки ───────────── */
  useEffect(() => {
    if (!gsap || !gridRef.current) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const cards = gridRef.current.querySelectorAll("[data-work-card]");
      if (!cards.length) return;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.05,
          overwrite: "auto",
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [gsap, works]);

  return (
    <div ref={gridRef} className={styles.grid}>
      {works.map((work) => (
        <article
          key={work.slug}
          data-work-card
          className={`${styles.card} ${work.url ? styles.cardHasUrl : ""}`}
          style={{ "--ind-color": color }}
        >
          <Link href={`/work/${work.slug}`} className={styles.cardLink}>
            <span
              className={styles.thumb}
              style={{ backgroundImage: bgFor(work) }}
              aria-hidden="true"
            />
            <span className={styles.veil} aria-hidden="true" />

            <span className={styles.top}>
              {work.concept && (
                <span className={styles.concept}>
                  {t("common.concept", "Концепт")}
                </span>
              )}
              <span className={styles.year}>{work.year}</span>
            </span>

            <span className={styles.body}>
              <span className={styles.title}>{work.title}</span>
              {work.sub && (
                <span className={styles.sub}>
                  {pickLocalized(work, lang, "sub", "subEn")}
                </span>
              )}

              {work.description && (
                <span className={styles.desc}>
                  {pickLocalized(work, lang, "description", "descriptionEn")}
                </span>
              )}

              {work.tags?.length > 0 && (
                <span className={styles.tags}>
                  {pickLocalizedList(work, lang, "tags").slice(0, 3).map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </span>
              )}
            </span>
          </Link>

          {work.url && (
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.external}
              aria-label={`${t("portfolio.openSiteAria", "Открыть сайт проекта")} «${work.title}»`}
            >
              <span className={styles.externalText}>
                {t("case.site", "Сайт")}
              </span>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M3 9L9 3M4.5 3H9v4.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
