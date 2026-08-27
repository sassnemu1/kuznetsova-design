"use client";

import { useEffect, useRef } from "react";
import useGSAP from "@/hooks/useGSAP";
import { useBecomeClient } from "@/context/BecomeClientContext";
import { useT, useLanguage } from "@/context/LanguageContext";
import { localizeUsluga } from "@/i18n/uslugi";
import styles from "./UslugiBody.module.css";

/**
 * Редакционная часть страницы услуги: текстовые разделы, состав сдачи
 * и этапы работы. Заголовки внутри — h2, подзаголовки карточек — h3,
 * единственный h1 живёт в UslugiHero.
 *
 * usluga — запись из UslugiData.js.
 */
export default function UslugiBody({ usluga: source }) {
  const { lang } = useLanguage();
  const usluga = localizeUsluga(source, lang);

  const rootRef = useRef(null);
  const t = useT();
  const { gsap, ScrollTrigger } = useGSAP();

  useEffect(() => {
    if (!gsap || !ScrollTrigger || !rootRef.current) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      const items = rootRef.current.querySelectorAll("[data-reveal]");

      items.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 34 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, [gsap, ScrollTrigger]);

  const openClientForm = useBecomeClient();

  return (
    <div ref={rootRef} className={styles.root}>
      {/* ─── ТЕКСТОВЫЕ РАЗДЕЛЫ ─────────────────────────────── */}
      <section
        className={styles.editorial}
        aria-label={t("uslugi.aboutLabel", "Об услуге")}
      >
        <div className={styles.inner}>
          {usluga.sections.map((section, i) => (
            <article key={section.h2} data-reveal className={styles.block}>
              <div className={styles.blockAside}>
                <span className={styles.blockNum}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className={styles.blockTitle}>{section.h2}</h2>
              </div>

              <div className={styles.blockText}>
                {section.paragraphs.map((p, pi) => (
                  <p key={pi}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── ЧТО ПЕРЕДАЁМ ──────────────────────────────────── */}
      {usluga.deliverables?.length > 0 && (
        <section className={styles.deliverables} aria-labelledby="deliverables-title">
          <div className={styles.inner}>
            <div data-reveal className={styles.sectionHead}>
              <span className={styles.eyebrow}>
                {t("uslugi.deliverEyebrow", "Что вы получаете")}
              </span>
              <h2 id="deliverables-title" className={styles.sectionTitle}>
                {t("uslugi.deliverTitle", "Состав передачи")}
              </h2>
              <p className={styles.sectionIntro}>
                {t(
                  "uslugi.deliverIntro",
                  "Всё, что физически оказывается у вас на руках после сдачи проекта — в исходниках и без привязки к подрядчику."
                )}
              </p>
            </div>

            <ul className={styles.deliverList}>
              {usluga.deliverables.map((d, i) => (
                <li key={d.ru} data-reveal className={styles.deliverItem}>
                  <span className={styles.deliverNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={styles.deliverTitle}>{d.ru}</h3>
                  <p className={styles.deliverNote}>{d.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ─── ЭТАПЫ ─────────────────────────────────────────── */}
      {usluga.steps?.length > 0 && (
        <section className={styles.steps} aria-labelledby="steps-title">
          <div className={styles.inner}>
            <div data-reveal className={styles.sectionHead}>
              <span className={styles.eyebrow}>
                {t("uslugi.stepsEyebrow", "Процесс")}
              </span>
              <h2 id="steps-title" className={styles.sectionTitle}>
                {t("uslugi.stepsTitle", "Как идёт работа")}
              </h2>
              <p className={styles.sectionIntro}>
                {t(
                  "uslugi.stepsIntro",
                  "Этапы с точками приёмки: на каждой видно, что сделано, и можно скорректировать направление, пока это ещё недорого."
                )}
              </p>
            </div>

            <ol className={styles.stepList}>
              {usluga.steps.map((s) => (
                <li key={s.n} data-reveal className={styles.stepItem}>
                  <span className={styles.stepNum} aria-hidden="true">
                    {s.n}
                  </span>
                  <div className={styles.stepBody}>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <p className={styles.stepText}>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div data-reveal className={styles.estimate}>
              <p className={styles.estimateText}>
                {t(
                  "uslugi.estimateText",
                  "Смету со сроками и составом работ присылаем после короткого брифа — так цифра относится к вашей задаче, а не к средней по рынку."
                )}
              </p>
              <button
                type="button"
                className={styles.estimateCta}
                onClick={openClientForm}
              >
                {t("uslugi.estimateCta", "Отправить бриф")}
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
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
