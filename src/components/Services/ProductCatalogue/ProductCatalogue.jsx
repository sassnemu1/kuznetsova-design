"use client";

import { useEffect, useRef, useState } from "react";
import useGSAP from "@/hooks/useGSAP";
import { PRODUCT_GROUPS } from "@/data/ProductsData";
import styles from "./ProductCatalogue.module.css";

/* Склонение существительных при числительных — подписи не разъезжаются
   с данными, если каталог изменится */
function plural(n, one, few, many) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
}

const totalGroups = PRODUCT_GROUPS.length;
const totalItems = PRODUCT_GROUPS.reduce((sum, g) => sum + g.items.length, 0);

export default function ProductCatalogue() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const groupRefs = useRef([]);

  const { gsap, ScrollTrigger } = useGSAP();

  /* На узких экранах группы сворачиваются, на десктопе всегда раскрыты */
  const [isCompact, setIsCompact] = useState(false);
  const [openIds, setOpenIds] = useState([]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mq = window.matchMedia("(max-width: 1024px)");
    const apply = () => setIsCompact(mq.matches);

    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return;

    const ctx = gsap.context(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduce) {
        gsap.set([headerRef.current, ...groupRefs.current.filter(Boolean)], {
          opacity: 1,
          y: 0,
        });
        return;
      }

      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      groupRefs.current.forEach((group) => {
        if (!group) return;

        gsap.fromTo(
          group,
          { opacity: 0, y: 44 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [gsap, ScrollTrigger]);

  const toggle = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <section ref={sectionRef} className={styles.section} id="catalogue">
      <div className={styles.inner}>
        <div ref={headerRef} className={styles.header}>
          <span className={styles.eyebrow}>Каталог</span>
          <h2 className={styles.title}>Что можно заказать</h2>
          <p className={styles.lead}>
            {totalGroups}{" "}
            {plural(totalGroups, "направление", "направления", "направлений")} и{" "}
            {totalItems} {plural(totalItems, "позиция", "позиции", "позиций")}. Проекты
            собираются из этих блоков: можно взять одну услугу, можно закрыть весь цикл —
            от имени до ленты в соцсетях.
          </p>
        </div>

        <div className={styles.groups}>
          {PRODUCT_GROUPS.map((group, i) => {
            const panelId = `catalogue-panel-${group.id}`;
            const headId = `catalogue-head-${group.id}`;
            const isOpen = !isCompact || openIds.includes(group.id);
            const num = String(i + 1).padStart(2, "0");

            const headContent = (
              <>
                <span className={styles.groupNum} aria-hidden="true">
                  {num}
                </span>

                <span className={styles.groupHeadText}>
                  <span className={styles.groupTitleRow}>
                    <span className={styles.groupDot} aria-hidden="true" />
                    <span className={styles.groupTitle}>{group.ru}</span>
                  </span>
                  <span className={styles.groupEn}>{group.en}</span>
                  <span className={styles.groupLead}>{group.lead}</span>
                </span>

                <span className={styles.groupMeta}>
                  <span className={styles.groupCount}>{group.items.length}</span>
                  <svg
                    className={styles.chevron}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3.5 5.5L7 9l3.5-3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </>
            );

            return (
              <article
                key={group.id}
                ref={(el) => {
                  groupRefs.current[i] = el;
                }}
                className={styles.group}
                style={{ "--group-color": group.color }}
              >
                <span className={styles.groupRule} aria-hidden="true" />

                {isCompact ? (
                  <h3 className={styles.groupHeading}>
                    <button
                      type="button"
                      id={headId}
                      className={`${styles.groupHead} ${styles.groupHeadButton}`}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(group.id)}
                    >
                      {headContent}
                    </button>
                  </h3>
                ) : (
                  <h3 id={headId} className={`${styles.groupHead} ${styles.groupHeading}`}>
                    {headContent}
                  </h3>
                )}

                <div
                  id={panelId}
                  role={isCompact ? "region" : undefined}
                  aria-labelledby={isCompact ? headId : undefined}
                  className={`${styles.panel} ${isOpen ? "" : styles.panelClosed}`}
                >
                  <ul className={styles.items}>
                    {group.items.map((item) => (
                      <li key={item.en} className={styles.item}>
                        <span className={styles.itemMark} aria-hidden="true" />
                        <span className={styles.itemBody}>
                          <span className={styles.itemName}>{item.ru}</span>
                          {item.note ? (
                            <span className={styles.itemNote}>{item.note}</span>
                          ) : null}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
