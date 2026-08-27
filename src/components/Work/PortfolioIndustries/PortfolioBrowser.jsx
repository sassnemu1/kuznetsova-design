"use client";

/**
 * Портфолио с двумя осями фильтрации в одном рейле слева:
 *   сверху — ПРОДУКТ (что мы сделали: брендинг, сайт, 3D, SMM, арт-дирекшн),
 *   снизу  — ОТРАСЛЬ (кому: еда, luxury, недвижимость, экосистемы…).
 *
 * Фильтры складываются: «Web & Mobile» + «Еда» = сайты для ресторанов.
 * Оба списка показывают количество работ с учётом второго фильтра, поэтому
 * пустая комбинация видна ещё до клика.
 */

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import useGSAP from "@/hooks/useGSAP";
import { useBecomeClient } from "@/context/BecomeClientContext";
import { useT, useLanguage } from "@/context/LanguageContext";
import { pickLocalized } from "@/i18n/dictionary";
import { INDUSTRIES } from "@/data/IndustriesData";
import { SERVICES_DATA, getAllWorks } from "@/data/ServicesData";
import { plural } from "@/lib/plural";
import WorkGrid from "./WorkGrid";
import styles from "./PortfolioBrowser.module.css";

const ALL = "all";

/* ─── Хэш адреса как внешнее хранилище ───────────────────────────
   Формат: /work#service=02&industry=food — оба фильтра шарятся ссылкой.
   Снапшот кэшируем: useSyncExternalStore сравнивает результат по ссылке. */
let hashSnapshot = null;

function readHash() {
  const raw = window.location.hash.replace("#", "");
  if (!raw) return "";
  try {
    return decodeURIComponent(raw);
  } catch {
    return "";
  }
}

function getHashSnapshot() {
  if (hashSnapshot === null) hashSnapshot = readHash();
  return hashSnapshot;
}

function subscribeToHash(onChange) {
  const onHashChange = () => {
    hashSnapshot = readHash();
    onChange();
  };
  window.addEventListener("hashchange", onHashChange);
  return () => window.removeEventListener("hashchange", onHashChange);
}

/** «service=02&industry=food» либо просто «food» (старые ссылки). */
function parseHash(raw) {
  if (!raw) return { service: ALL, industry: ALL };
  if (raw.includes("=")) {
    const out = { service: ALL, industry: ALL };
    for (const part of raw.split("&")) {
      const [k, v] = part.split("=");
      if (k === "service" && v) out.service = v;
      if (k === "industry" && v) out.industry = v;
    }
    return out;
  }
  // Обратная совместимость: /work#food по-прежнему открывает отрасль.
  return { service: ALL, industry: raw };
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function PortfolioBrowser() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const railRef = useRef(null);

  const t = useT();
  const { lang } = useLanguage();
  const openClientForm = useBecomeClient();
  const { gsap, ScrollTrigger } = useGSAP();

  const hashRaw = useSyncExternalStore(subscribeToHash, getHashSnapshot, () => "");
  const fromHash = useMemo(() => parseHash(hashRaw), [hashRaw]);

  // null = в этой сессии фильтр руками не трогали, значит его задаёт адрес.
  const [pickedService, setPickedService] = useState(null);
  const [pickedIndustry, setPickedIndustry] = useState(null);

  const allWorks = useMemo(() => getAllWorks(), []);

  const serviceIds = useMemo(
    () => new Set(SERVICES_DATA.map((s) => s.id)),
    []
  );
  const industryIds = useMemo(() => new Set(INDUSTRIES.map((i) => i.id)), []);

  const activeService =
    pickedService ?? (serviceIds.has(fromHash.service) ? fromHash.service : ALL);
  const activeIndustry =
    pickedIndustry ??
    (industryIds.has(fromHash.industry) ? fromHash.industry : ALL);

  /* ── Фильтрация ────────────────────────────────────────────── */
  const matchService = useCallback(
    (w, id) => id === ALL || w.serviceId === id,
    []
  );
  const matchIndustry = useCallback(
    (w, id) => id === ALL || w.industry?.includes(id),
    []
  );

  const works = useMemo(
    () =>
      allWorks.filter(
        (w) => matchService(w, activeService) && matchIndustry(w, activeIndustry)
      ),
    [allWorks, activeService, activeIndustry, matchService, matchIndustry]
  );

  // Счётчики считаются с учётом ВТОРОГО фильтра — видно, что даст клик.
  const serviceItems = useMemo(() => {
    const base = allWorks.filter((w) => matchIndustry(w, activeIndustry));
    return [
      {
        id: ALL,
        tag: t("portfolio.allProducts", "Все продукты"),
        title: t("portfolio.everything", "Всё портфолио"),
        count: base.length,
        color: "#3864db",
      },
      ...SERVICES_DATA.map((s) => ({
        id: s.id,
        tag: s.tag,
        title: s.title.replace("\n", " "),
        count: base.filter((w) => w.serviceId === s.id).length,
        color: s.color,
      })),
    ];
  }, [allWorks, activeIndustry, matchIndustry, t]);

  const industryItems = useMemo(() => {
    const base = allWorks.filter((w) => matchService(w, activeService));
    return [
      {
        id: ALL,
        tag: t("portfolio.allIndustries", "Все отрасли"),
        title: t("portfolio.everyone", "Все клиенты"),
        count: base.length,
        color: "#3864db",
      },
      ...INDUSTRIES.map((ind) => ({
        id: ind.id,
        tag: ind.en,
        title: pickLocalized(ind, lang, "ru", "en"),
        count: base.filter((w) => w.industry?.includes(ind.id)).length,
        color: ind.color,
      })),
    ];
  }, [allWorks, activeService, matchService, lang, t]);

  const currentIndustry = useMemo(
    () => INDUSTRIES.find((i) => i.id === activeIndustry) || null,
    [activeIndustry]
  );
  const currentService = useMemo(
    () => SERVICES_DATA.find((s) => s.id === activeService) || null,
    [activeService]
  );

  const accent =
    currentIndustry?.color || currentService?.color || "#3864db";

  /* ── Запись фильтров в адрес без прокрутки страницы ─────────── */
  const writeHash = useCallback((service, industry) => {
    if (typeof window === "undefined" || !window.history?.replaceState) return;
    const parts = [];
    if (service !== ALL) parts.push(`service=${service}`);
    if (industry !== ALL) parts.push(`industry=${industry}`);
    const { pathname, search } = window.location;
    const next = parts.length ? `#${parts.join("&")}` : "";
    window.history.replaceState(null, "", `${pathname}${search}${next}`);
    hashSnapshot = parts.join("&"); // replaceState не шлёт hashchange
  }, []);

  const selectService = useCallback(
    (id) => {
      setPickedService(id);
      setPickedIndustry(activeIndustry);
      writeHash(id, activeIndustry);
    },
    [activeIndustry, writeHash]
  );

  const selectIndustry = useCallback(
    (id) => {
      setPickedIndustry(id);
      setPickedService(activeService);
      writeHash(activeService, id);
    },
    [activeService, writeHash]
  );

  const reset = useCallback(() => {
    setPickedService(ALL);
    setPickedIndustry(ALL);
    writeHash(ALL, ALL);
  }, [writeHash]);

  /* ── Появление заголовка и рейла ───────────────────────────── */
  useEffect(() => {
    if (!gsap || !ScrollTrigger || !sectionRef.current) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 84%" },
          }
        );
      }
      /* Пункты рейла намеренно НЕ анимируются по opacity.
         Это орган управления, а не декорация: если анимация не доиграет
         (прерванный скролл, перерисовка, медленное устройство), фильтры
         останутся невидимыми и страницей нельзя будет пользоваться.
         Двигаем только по горизонтали — видимость от этого не зависит. */
      if (railRef.current) {
        gsap.from(railRef.current.querySelectorAll("[data-rail-item]"), {
          x: -14,
          duration: 0.5,
          stagger: 0.02,
          ease: "power3.out",
          scrollTrigger: { trigger: railRef.current, start: "top 90%" },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [gsap, ScrollTrigger]);

  const isFiltered = activeService !== ALL || activeIndustry !== ALL;
  const unit =
    lang === "ru"
      ? plural(works.length, "работа", "работы", "работ")
      : t("portfolio.worksUnit", "работ");

  const renderGroup = (label, items, activeId, onSelect, groupId) => (
    <div className={styles.group}>
      <span className={styles.groupLabel}>
        <span className={styles.groupDot} />
        {label}
      </span>

      <div className={styles.groupNav} role="tablist" aria-label={label}>
        {items.map((item, i) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              data-rail-item
              type="button"
              role="tab"
              id={`${groupId}-tab-${item.id}`}
              aria-selected={isActive}
              aria-controls="portfolio-results"
              className={`${styles.railItem} ${isActive ? styles.railItemActive : ""} ${
                item.count === 0 ? styles.railItemEmpty : ""
              }`}
              style={{ "--cat-color": item.color }}
              onClick={() => onSelect(item.id)}
            >
              <span className={styles.railBar} aria-hidden="true" />
              <span className={styles.railNum}>
                {String(i).padStart(2, "0")}
              </span>
              <span className={styles.railBody}>
                <span className={styles.railTag}>{item.tag}</span>
                <span className={styles.railTitle}>{item.title}</span>
              </span>
              <span className={styles.railCount}>{item.count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className={styles.section} id="industries">
      {/* ── Заголовок ───────────────────────────────────────── */}
      <div ref={headerRef} className={styles.header}>
        <span className={styles.eyebrow}>
          {t("portfolio.eyebrow", "Отделы портфолио")}
        </span>
        <h2 className={styles.title}>
          {t("portfolio.title", "Кому мы делаем дизайн")}
        </h2>
        <p className={styles.intro}>
          {t(
            "portfolio.intro",
            "Слева выберите продукт — что именно мы сделали, и отрасль — для кого. Фильтры складываются: например, «Web & Mobile» и «Еда» покажут сайты для ресторанов и кафе."
          )}
        </p>
      </div>

      {/* ── Рейл + результаты ───────────────────────────────── */}
      <div className={styles.wrap}>
        <aside ref={railRef} className={styles.rail}>
          <div className={styles.railInner}>
            {renderGroup(
              t("portfolio.productLabel", "Продукт"),
              serviceItems,
              activeService,
              selectService,
              "service"
            )}

            <div className={styles.groupDivider} aria-hidden="true" />

            {renderGroup(
              t("portfolio.industryLabel", "Отрасль"),
              industryItems,
              activeIndustry,
              selectIndustry,
              "industry"
            )}
          </div>
        </aside>

        <div
          className={styles.results}
          id="portfolio-results"
          role="tabpanel"
          tabIndex={-1}
          style={{ "--ind-color": accent }}
        >
          <div className={styles.resultsHead}>
            <p className={styles.resultsDesc}>
              {currentIndustry
                ? pickLocalized(currentIndustry, lang, "desc", "descEn")
                : currentService
                  ? currentService.desc
                  : t(
                      "portfolio.allDesc",
                      "Полное портфолио бюро: брендинг, сайты, 3D и контент."
                    )}
            </p>

            <span className={styles.resultsCount}>
              <span className={styles.resultsNum}>{works.length}</span>
              <span className={styles.resultsUnit}>{unit}</span>
            </span>
          </div>

          {isFiltered && (
            <div className={styles.chips}>
              {currentService && (
                <button
                  type="button"
                  className={styles.chip}
                  onClick={() => selectService(ALL)}
                >
                  {currentService.title.replace("\n", " ")}
                  <span className={styles.chipX} aria-hidden="true">
                    ×
                  </span>
                  <span className={styles.srOnly}>
                    {t("portfolio.removeFilter", "Снять фильтр")}
                  </span>
                </button>
              )}
              {currentIndustry && (
                <button
                  type="button"
                  className={styles.chip}
                  onClick={() => selectIndustry(ALL)}
                >
                  {pickLocalized(currentIndustry, lang, "ru", "en")}
                  <span className={styles.chipX} aria-hidden="true">
                    ×
                  </span>
                  <span className={styles.srOnly}>
                    {t("portfolio.removeFilter", "Снять фильтр")}
                  </span>
                </button>
              )}
            </div>
          )}

          {works.length === 0 ? (
            <div className={styles.empty}>
              <span className={styles.emptyLabel}>
                {t("portfolio.emptyLabel", "Раздел готовится")}
              </span>
              <p className={styles.emptyText}>
                {t(
                  "portfolio.emptyText",
                  "В этой комбинации у нас пока нет опубликованных кейсов. Расскажите о своей задаче — покажем близкие по смыслу работы и обсудим, как это будет выглядеть у вас."
                )}
              </p>
              <div className={styles.emptyActions}>
                <button
                  type="button"
                  className={styles.emptyBtn}
                  onClick={openClientForm}
                >
                  {t("portfolio.discuss", "Обсудить проект")}
                </button>
                <button
                  type="button"
                  className={styles.resetBtn}
                  onClick={reset}
                >
                  {t("portfolio.reset", "Сбросить фильтры")}
                </button>
              </div>
            </div>
          ) : (
            <WorkGrid key={`${activeService}-${activeIndustry}`} works={works} />
          )}
        </div>
      </div>
    </section>
  );
}
