"use client";

import { useEffect, useRef } from "react";
import { useT } from "@/context/LanguageContext";
import styles from "./IndustryTabs.module.css";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Горизонтальная лента вкладок отраслей.
 *
 * tabs — [{ id, label, count, color, empty }]
 * Активная вкладка подсвечивается своим цветом (--ind-color) и
 * подтягивается в видимую часть ленты. Скроллим ТОЛЬКО ленту по
 * горизонтали: scrollIntoView увёл бы страницу целиком.
 */
export default function IndustryTabs({ tabs, activeId, onSelect }) {
  const listRef = useRef(null);
  const btnRefs = useRef([]);
  const t = useT();

  const activeIndex = tabs.findIndex((t) => t.id === activeId);

  /* ── Активная вкладка — в видимую часть ленты ───────────────── */
  useEffect(() => {
    const list = listRef.current;
    if (!list || activeIndex < 0) return;

    const el = btnRefs.current[activeIndex];
    if (!el) return;

    const delta =
      el.getBoundingClientRect().left - list.getBoundingClientRect().left;
    const target =
      list.scrollLeft + delta - (list.clientWidth - el.offsetWidth) / 2;

    list.scrollTo({
      left: Math.max(0, target),
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }, [activeIndex]);

  /* ── Клавиатура: стрелки, Home, End ────────────────────────── */
  const handleKeyDown = (e) => {
    const last = tabs.length - 1;
    let next = null;

    if (e.key === "ArrowRight") next = activeIndex >= last ? 0 : activeIndex + 1;
    else if (e.key === "ArrowLeft") next = activeIndex <= 0 ? last : activeIndex - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;

    e.preventDefault();
    onSelect(tabs[next].id);
    btnRefs.current[next]?.focus();
  };

  return (
    <div className={styles.strip}>
      <div
        ref={listRef}
        className={styles.list}
        role="tablist"
        aria-label={t("portfolio.industriesNav", "Отрасли портфолио")}
        aria-orientation="horizontal"
        onKeyDown={handleKeyDown}
      >
        {tabs.map((tab, i) => {
          const isActive = tab.id === activeId;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`industry-tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`industry-panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              ref={(el) => {
                btnRefs.current[i] = el;
              }}
              className={[
                styles.tab,
                isActive ? styles.tabActive : "",
                tab.empty ? styles.tabEmpty : "",
              ]
                .filter(Boolean)
                .join(" ")}
              style={{ "--ind-color": tab.color }}
              onClick={() => onSelect(tab.id)}
            >
              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.label}>{tab.label}</span>
              <span className={styles.count}>{tab.count}</span>
            </button>
          );
        })}
      </div>

      <span className={styles.fadeLeft} aria-hidden="true" />
      <span className={styles.fadeRight} aria-hidden="true" />
    </div>
  );
}
