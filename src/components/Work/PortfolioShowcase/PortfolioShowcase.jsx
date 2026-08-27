"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import useGSAP from "@/hooks/useGSAP";
import { useT } from "@/context/LanguageContext";
import { SERVICES_DATA } from "@/data/ServicesData";
import CategorySlider from "./CategorySlider";
import styles from "./PortfolioShowcase.module.css";

export default function PortfolioShowcase() {
  const t = useT();

  const sections = useMemo(
    () => SERVICES_DATA.filter((s) => s.works.length > 0),
    []
  );

  const [active, setActive] = useState(0);
  const sectionRefs = useRef([]);
  const railRef = useRef(null);

  const { gsap, ScrollTrigger } = useGSAP();

  /* ── Scroll-spy: подсветка категории по позиции скролла ── */
  useEffect(() => {
    if (!gsap || !ScrollTrigger) return;
    const triggers = sectionRefs.current.map((el, i) =>
      el
        ? ScrollTrigger.create({
            trigger: el,
            start: "top 55%",
            end: "bottom 55%",
            onToggle: (self) => self.isActive && setActive(i),
          })
        : null
    );
    return () => triggers.forEach((t) => t?.kill());
  }, [gsap, ScrollTrigger, sections.length]);

  /* ── Появление рейла ── */
  useEffect(() => {
    if (!gsap || !railRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        railRef.current.querySelectorAll("[data-rail-item]"),
        { opacity: 0, x: -24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: { trigger: railRef.current, start: "top 85%" },
        }
      );
    }, railRef);
    return () => ctx.revert();
  }, [gsap]);

  const scrollTo = (i) => {
    const el = sectionRefs.current[i];
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className={styles.wrap}>
      {/* ── Левая колонка: категории ── */}
      <aside ref={railRef} className={styles.rail}>
        <div className={styles.railInner}>
          <span className={styles.railLabel}>
            <span className={styles.railLabelDot} />
            {t("portfolio.categories", "Категории")}
          </span>

          <nav
            className={styles.railNav}
            aria-label={t("portfolio.categoriesNav", "Категории портфолио")}
          >
            {sections.map((s, i) => (
              <button
                key={s.id}
                data-rail-item
                className={`${styles.railItem} ${
                  i === active ? styles.railItemActive : ""
                }`}
                style={{ "--cat-color": s.color }}
                onClick={() => scrollTo(i)}
              >
                <span className={styles.railBar} />
                <span className={styles.railNum}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.railBody}>
                  <span className={styles.railTag}>{s.tag}</span>
                  <span className={styles.railTitle}>
                    {s.title.replace("\n", " ")}
                  </span>
                </span>
                <span className={styles.railCount}>{s.works.length}</span>
              </button>
            ))}
          </nav>

          <div data-rail-item className={styles.railFoot}>
            <div className={styles.railCounter}>
              <span
                className={styles.railCounterActive}
                style={{ color: sections[active]?.color }}
              >
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className={styles.railCounterSep}>/</span>
              <span className={styles.railCounterTotal}>
                {String(sections.length).padStart(2, "0")}
              </span>
            </div>
            <div className={styles.railTrack}>
              <div
                className={styles.railTrackFill}
                style={{
                  height: `${((active + 1) / sections.length) * 100}%`,
                  background: sections[active]?.color,
                }}
              />
            </div>
            <span className={styles.railHint}>
              {t("portfolio.hint", "Листайте вниз")}
            </span>
          </div>
        </div>
      </aside>

      {/* ── Правая колонка: слайдеры ── */}
      <div className={styles.sections}>
        {sections.map((service, i) => (
          <div
            key={service.id}
            ref={(el) => { sectionRefs.current[i] = el; }}
            className={styles.sectionWrap}
          >
            <CategorySlider
              service={service}
              index={i}
              isActive={i === active}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
