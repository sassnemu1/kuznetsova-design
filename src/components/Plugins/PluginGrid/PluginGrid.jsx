"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import useGSAP from "@/hooks/useGSAP";
import { useT, useLanguage } from "@/context/LanguageContext";
import { pickLocalized } from "@/i18n/dictionary";
import { PLUGINS, PLUGIN_STATUS } from "@/data/PluginsData";
import { getIndustry } from "@/data/IndustriesData";
import { getIndustryCounts } from "@/data/ServicesData";
import styles from "./PluginGrid.module.css";

/* Счётчик работ по отраслям считается один раз: ссылку «Работы в этой сфере»
   показываем только там, где в портфолио действительно что-то есть. */
const INDUSTRY_COUNTS = getIndustryCounts();

/* Вкладки собираются из PLUGIN_STATUS, чтобы подписи и цвета жили в данных. */
const STATUS_ORDER = ["live", "beta", "soon"];

const CheckIcon = () => (
  <svg
    className={styles.check}
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2.5 6.9 5 9.3l5.5-5.6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function PluginGrid() {
  const [filter, setFilter] = useState("all");

  const t = useT();
  const { lang } = useLanguage();

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const tabRefs = useRef([]);

  const { gsap, ScrollTrigger } = useGSAP();

  const TABS = useMemo(
    () => [
      { id: "all", label: t("plugins.tabAll", "Все"), color: null, count: PLUGINS.length },
      ...STATUS_ORDER.map((id) => ({
        id,
        label: pickLocalized(PLUGIN_STATUS[id], lang, "ru", "en"),
        color: PLUGIN_STATUS[id].color,
        count: PLUGINS.filter((p) => p.status === id).length,
      })),
    ],
    [t, lang]
  );

  const visible = useMemo(
    () => (filter === "all" ? PLUGINS : PLUGINS.filter((p) => p.status === filter)),
    [filter]
  );

  /* ── Появление шапки секции ── */
  useEffect(() => {
    if (!gsap || !ScrollTrigger) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 36 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, [gsap, ScrollTrigger]);

  /* ── Мягкий каскад карточек при каждой смене фильтра ── */
  useEffect(() => {
    if (!gsap || !gridRef.current) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        "[data-plugin-card]",
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.045,
          overwrite: true,
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [gsap, filter]);

  const onTabKeyDown = (event, index) => {
    const last = TABS.length - 1;
    let next = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = index === last ? 0 : index + 1;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = index === 0 ? last : index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;

    if (next === null) return;

    event.preventDefault();
    setFilter(TABS[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section ref={sectionRef} className={styles.section} id="modules">
      <div className={styles.inner}>
        <div ref={headerRef} className={styles.header}>
          <p className={styles.eyebrow}>{t("plugins.modulesEyebrow", "Модули")}</p>
          <h2 className={styles.title}>
            {t("plugins.modulesTitle", "Дашборд под вашу отрасль")}
          </h2>
          <p className={styles.intro}>
            {t(
              "plugins.modulesIntro",
              "Каждый модуль — это готовый набор экранов и сценариев, который мы ставим поверх сайта и допиливаем под ваши процессы. Ресторану нужен стоп-лист, салону — график мастеров, застройщику — шахматка. Общая основа одна, начинка разная."
            )}
          </p>
        </div>

        <div
          className={styles.tabs}
          role="tablist"
          aria-label={t("plugins.filterLabel", "Фильтр модулей по статусу")}
        >
          {TABS.map((tab, i) => {
            const selected = tab.id === filter;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`plugin-tab-${tab.id}`}
                aria-selected={selected}
                aria-controls="plugin-panel"
                tabIndex={selected ? 0 : -1}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                onClick={() => setFilter(tab.id)}
                onKeyDown={(e) => onTabKeyDown(e, i)}
                className={`${styles.tab} ${selected ? styles.tabActive : ""}`}
                style={tab.color ? { "--tab-color": tab.color } : undefined}
              >
                {tab.color ? <span className={styles.tabDot} aria-hidden="true" /> : null}
                <span className={styles.tabLabel}>{tab.label}</span>
                <span className={styles.tabCount}>{tab.count}</span>
              </button>
            );
          })}
        </div>

        <div
          id="plugin-panel"
          role="tabpanel"
          aria-labelledby={`plugin-tab-${filter}`}
          tabIndex={0}
          className={styles.panel}
        >
          <ul ref={gridRef} className={styles.grid}>
            {visible.map((plugin) => {
              const status = PLUGIN_STATUS[plugin.status];
              const industry = getIndustry(plugin.industry);
              const worksCount = INDUSTRY_COUNTS[plugin.industry] || 0;

              return (
                <li
                  key={plugin.id}
                  id={plugin.id}
                  data-plugin-card
                  className={styles.card}
                  style={{
                    "--mod-color": industry?.color || "var(--accent)",
                    "--status-color": status.color,
                  }}
                >
                  <div className={styles.cardHead}>
                    <h3 className={styles.cardTitle}>
                      {pickLocalized(plugin, lang, "ru", "en")}
                    </h3>
                    <span className={styles.pill}>
                      <span className={styles.pillDot} aria-hidden="true" />
                      {pickLocalized(status, lang, "ru", "en")}
                    </span>
                  </div>

                  {industry ? (
                    <p className={styles.cardIndustry}>
                      {pickLocalized(industry, lang, "ru", "en")}
                    </p>
                  ) : null}

                  <p className={styles.cardLead}>
                    {pickLocalized(plugin, lang, "lead", "leadEn")}
                  </p>

                  <ul className={styles.features}>
                    {plugin.features.map((feature) => (
                      <li key={feature.ru} className={styles.feature}>
                        <CheckIcon />
                        <span>{pickLocalized(feature, lang, "ru", "en")}</span>
                      </li>
                    ))}
                  </ul>

                  {worksCount > 0 ? (
                    <Link
                      href={`/work#${plugin.industry}`}
                      className={styles.cardLink}
                    >
                      {t("plugins.worksInField", "Работы в этой сфере")}
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path
                          d="M2.5 7h9M7.5 3l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
