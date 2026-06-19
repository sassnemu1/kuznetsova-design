"use client";

import { useEffect, useRef } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { getWorkBySlug, getAdjacentWorks } from "@/data/ServicesData";
import styles from "./page.module.css";

export default function WorkPage() {
  const { slug } = useParams();
  const work = getWorkBySlug(slug);

  if (!work) notFound();

  const { prev, next } = getAdjacentWorks(slug);

  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Простые CSS-анимации через классы
    const timer = setTimeout(() => {
      heroRef.current?.classList.add(styles.visible);
      contentRef.current?.classList.add(styles.visible);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.page}>

      {/* ── НАЗАД ── */}
      <Link href="/#portfolio" className={styles.back}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Портфолио
      </Link>

      {/* ── HERO ── */}
      <div ref={heroRef} className={styles.hero}>
        {/* Фон */}
        <div
          className={styles.heroBg}
          style={
            work.image
              ? { backgroundImage: `url(${work.image})` }
              : { background: work.thumbBg }
          }
        />
        <div className={styles.heroBgOverlay} />

        {/* Мета */}
        <div className={styles.heroMeta}>
          <span className={styles.heroTag} style={{ color: work.serviceColor }}>
            {work.serviceTag}
          </span>
          <h1 className={styles.heroTitle}>{work.title}</h1>
          <p className={styles.heroSub}>{work.sub} · {work.year}</p>
        </div>
      </div>

      {/* ── КОНТЕНТ ── */}
      <div ref={contentRef} className={styles.content}>
        <div className={styles.contentInner}>

          {/* ── Левая колонка: мета ── */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarSection}>
              <span className={styles.sidebarLabel}>Клиент</span>
              <span className={styles.sidebarValue}>{work.client}</span>
            </div>
            <div className={styles.sidebarSection}>
              <span className={styles.sidebarLabel}>Год</span>
              <span className={styles.sidebarValue}>{work.year}</span>
            </div>
            <div className={styles.sidebarSection}>
              <span className={styles.sidebarLabel}>Категория</span>
              <span className={styles.sidebarValue}>{work.serviceTitle}</span>
            </div>
            <div className={styles.sidebarSection}>
              <span className={styles.sidebarLabel}>Инструменты</span>
              <div className={styles.tags}>
                {(work.tags ?? []).map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          </aside>

          {/* ── Правая колонка: описание + галерея ── */}
          <div className={styles.main}>
            <div className={styles.intro}>
              <span className={styles.introEyebrow}>О проекте</span>
              <p className={styles.introText}>{work.description}</p>
            </div>

            {/* Галерея — замени src на реальные изображения */}
            <div className={styles.gallery}>
              <div
                className={`${styles.galleryItem} ${styles.galleryItemFull}`}
                style={work.image
                  ? { backgroundImage: `url(${work.image})` }
                  : { background: work.thumbBg }
                }
              >
                <span className={styles.galleryLabel}>Главный экран</span>
              </div>

              <div className={styles.galleryRow}>
                <div
                  className={styles.galleryItem}
                  style={{ background: work.thumbBg, filter: "brightness(0.85)" }}
                >
                  <span className={styles.galleryLabel}>Детали</span>
                </div>
                <div
                  className={styles.galleryItem}
                  style={{ background: work.thumbBg, filter: "brightness(0.7)" }}
                >
                  <span className={styles.galleryLabel}>Финал</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── НАВИГАЦИЯ МЕЖДУ РАБОТАМИ ── */}
      <nav className={styles.workNav}>
        <Link href={`/work/${prev.slug}`} className={styles.workNavItem}>
          <span className={styles.workNavDir}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11 7H3M6.5 3L3 7l3.5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Предыдущий
          </span>
          <span className={styles.workNavTitle}>{prev.title}</span>
          <span className={styles.workNavSub}>{prev.sub}</span>
        </Link>

        <div className={styles.workNavDivider} />

        <Link href={`/work/${next.slug}`} className={`${styles.workNavItem} ${styles.workNavItemRight}`}>
          <span className={styles.workNavDir}>
            Следующий
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className={styles.workNavTitle}>{next.title}</span>
          <span className={styles.workNavSub}>{next.sub}</span>
        </Link>
      </nav>

    </div>
  );
}