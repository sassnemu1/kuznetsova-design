"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import useGSAP from "@/hooks/useGSAP";
import { useBecomeClient } from "@/context/BecomeClientContext";
import { DASH_CORE } from "@/data/PluginsData";
import styles from "./DashCore.module.css";

export default function DashCore() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const listRef = useRef(null);
  const ctaRef = useRef(null);

  const openClientForm = useBecomeClient();

  const { gsap, ScrollTrigger } = useGSAP();

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        listRef.current?.querySelectorAll("[data-core-item]") || [],
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [gsap, ScrollTrigger]);

  return (
    <div ref={sectionRef}>
      {/* ─── Ядро кабинета ─── */}
      <section className={styles.core} id="dash-core">
        <div className={styles.inner}>
          <div className={styles.layout}>
            <div ref={headerRef} className={styles.header}>
              <p className={styles.eyebrow}>Ядро</p>
              <h2 className={styles.title}>Что входит в любой кабинет</h2>
              <p className={styles.intro}>
                Отраслевая часть у всех разная, но основание одно. Эти вещи
                собраны один раз и достаются каждому проекту — независимо от
                того, ресторан у вас, клиника или фонд.
              </p>
            </div>

            <ul ref={listRef} className={styles.list}>
              {DASH_CORE.map((item, i) => (
                <li key={item.ru} data-core-item className={styles.item}>
                  <span className={styles.itemNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.itemText}>{item.ru}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className={`${styles.cta} nav-dark-zone`} id="plugins-cta">
        <div className={styles.inner}>
          <div ref={ctaRef} className={styles.ctaInner}>
            <p className={styles.ctaEyebrow}>Доступ</p>

            <h2 className={styles.ctaTitle}>Кабинет собирается прямо сейчас</h2>

            <p className={styles.ctaText}>
              Расскажите про свою отрасль и процессы — мы покажем, как ляжет
              модуль на ваш сайт, и поставим вас в очередь на подключение.
            </p>

            <div className={styles.ctaActions}>
              <Link href="/login?mode=request" className={styles.btnPrimary}>
                Запросить доступ
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M2.5 7h9M7.5 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <button type="button" onClick={openClientForm} className={styles.btnSecondary}>
                Обсудить проект
              </button>
            </div>

            <p className={styles.ctaNote}>
              Кабинет dash.kuznetsova.design сейчас в разработке — оставьте
              заявку, и мы откроем доступ первым.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
