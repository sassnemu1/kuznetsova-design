"use client";

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
import { INDUSTRIES } from "@/data/IndustriesData";
import { getAllWorks, getIndustryCounts } from "@/data/ServicesData";
import IndustryTabs from "./IndustryTabs";
import WorkGrid from "./WorkGrid";
import styles from "./PortfolioIndustries.module.css";

const ALL_ID = "all";

const ALL_TAB = {
  id: ALL_ID,
  ru: "Все работы",
  desc:
    "Полное портфолио бюро: брендинг, сайты, 3D и контент. Одна работа может относиться сразу к нескольким отраслям — выберите нужную, чтобы сузить список.",
  color: "#3864db",
};

/** 1 работа, 2 работы, 5 работ */
function pluralWorks(n) {
  const mod100 = n % 100;
  const mod10 = n % 10;
  if (mod100 >= 11 && mod100 <= 14) return "работ";
  if (mod10 === 1) return "работа";
  if (mod10 >= 2 && mod10 <= 4) return "работы";
  return "работ";
}

/* ─── Хэш адреса как внешнее хранилище ───────────────────────────
   Снапшот кэшируем: useSyncExternalStore сравнивает по ссылке. */
let hashSnapshot = null;

function readHash() {
  const raw = window.location.hash.replace("#", "");
  if (!raw) return "";
  try {
    return decodeURIComponent(raw);
  } catch {
    return ""; // битый хэш — остаёмся на «Все работы»
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

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function PortfolioIndustries() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  // null = вкладку в этой сессии ещё не выбирали руками, значит её задаёт хэш.
  const [picked, setPicked] = useState(null);

  /* ── Deep link: хэш адреса — внешнее состояние ─────────────────
     Читаем его через useSyncExternalStore, а не setState в эффекте:
     на сервере хэша нет, а каскадный ререндер после гидратации не нужен. */
  const hashId = useSyncExternalStore(subscribeToHash, getHashSnapshot, () => "");

  const openClientForm = useBecomeClient();
  const { gsap, ScrollTrigger } = useGSAP();

  /* ── Данные ────────────────────────────────────────────────── */
  const allWorks = useMemo(() => getAllWorks(), []);
  const counts = useMemo(() => getIndustryCounts(), []);

  const tabs = useMemo(
    () => [
      {
        id: ALL_ID,
        label: ALL_TAB.ru,
        count: allWorks.length,
        color: ALL_TAB.color,
        empty: false,
      },
      ...INDUSTRIES.map((ind) => ({
        id: ind.id,
        label: ind.ru,
        count: counts[ind.id] || 0,
        color: ind.color,
        empty: !counts[ind.id],
      })),
    ],
    [allWorks.length, counts]
  );

  const validIds = useMemo(() => new Set(tabs.map((t) => t.id)), [tabs]);

  // Вкладка, выбранная руками, важнее той, что пришла из адреса.
  const activeId = picked ?? (validIds.has(hashId) ? hashId : ALL_ID);

  const current = useMemo(
    () =>
      activeId === ALL_ID
        ? ALL_TAB
        : INDUSTRIES.find((i) => i.id === activeId) || ALL_TAB,
    [activeId]
  );

  const works = useMemo(
    () =>
      activeId === ALL_ID
        ? allWorks
        : allWorks.filter((w) => w.industry?.includes(activeId)),
    [activeId, allWorks]
  );

  const activeColor = current.color || ALL_TAB.color;

  /* ── Смена вкладки: пишем хэш без прокрутки страницы ────────
     router.push из next/navigation здесь не годится — он утащит
     страницу к якорю. Меняем адрес тихо, через replaceState.     */
  const handleSelect = useCallback((id) => {
    setPicked(id);

    if (typeof window === "undefined" || !window.history?.replaceState) return;
    const { pathname, search } = window.location;
    window.history.replaceState(null, "", `${pathname}${search}#${id}`);
    hashSnapshot = id; // replaceState не генерирует hashchange
  }, []);

  /* ── Появление заголовка ───────────────────────────────────── */
  useEffect(() => {
    if (!gsap || !ScrollTrigger || !headerRef.current) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 34 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [gsap, ScrollTrigger]);

  const isEmpty = works.length === 0;

  return (
    <section ref={sectionRef} className={styles.section} id="industries">
      <div className={styles.inner}>
        {/* ── Заголовок ────────────────────────────────────── */}
        <div ref={headerRef} className={styles.header}>
          <span className={styles.eyebrow}>Отделы портфолио</span>
          <h2 className={styles.title}>Кому мы делаем дизайн</h2>
          <p className={styles.intro}>
            Наши работы с ресторанами и кафе, брендами одежды, клиниками,
            застройщиками и продуктовыми командами. Один проект часто живёт сразу
            в нескольких отраслях — выберите вкладку, чтобы увидеть только
            профильные кейсы.
          </p>
        </div>

        {/* ── Вкладки отраслей ─────────────────────────────── */}
        <IndustryTabs tabs={tabs} activeId={activeId} onSelect={handleSelect} />

        {/* ── Панель выбранной отрасли ─────────────────────── */}
        <div
          key={activeId}
          id={`industry-panel-${activeId}`}
          role="tabpanel"
          aria-labelledby={`industry-tab-${activeId}`}
          tabIndex={0}
          className={styles.panel}
          style={{ "--ind-color": activeColor }}
        >
          <div className={styles.lead}>
            <p className={styles.leadText}>{current.desc}</p>
            <span className={styles.leadCount}>
              <span className={styles.leadNum}>{works.length}</span>
              <span className={styles.leadUnit}>{pluralWorks(works.length)}</span>
            </span>
          </div>

          {isEmpty ? (
            <div className={styles.empty}>
              <span className={styles.emptyLabel}>Раздел готовится</span>
              <p className={styles.emptyText}>
                В этом направлении мы сейчас готовим кейсы к публикации.
                Расскажите о своей задаче — покажем близкие по смыслу работы из
                других отраслей и обсудим, как это будет выглядеть у вас.
              </p>
              <button
                type="button"
                className={styles.emptyBtn}
                onClick={openClientForm}
              >
                Обсудить проект
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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
          ) : (
            <WorkGrid works={works} color={activeColor} />
          )}
        </div>
      </div>
    </section>
  );
}
