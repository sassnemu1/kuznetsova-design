"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Link from "next/link";
import useGSAP from "@/hooks/useGSAP";
import styles from "./CategorySection.module.css";

const bgFor = (w) => (w.image ? `url(${w.image}), ${w.thumbBg}` : w.thumbBg);

// Кратчайшее направление по кругу (для прыжков через точки/превью)
function shortestDir(from, to, len) {
  let diff = to - from;
  if (diff > len / 2) diff -= len;
  if (diff < -len / 2) diff += len;
  return diff < 0 ? -1 : 1;
}

export default function CategorySection({ service, index }) {
  const sectionRef = useRef(null);
  const heroRef    = useRef(null);
  const heroImgRef = useRef(null);   // текущий слайд
  const nextImgRef = useRef(null);   // следующий/предыдущий — едет навстречу при перетаскивании
  const heroContentRef = useRef(null);
  const thumbsRef  = useRef(null);

  const [active, setActive]   = useState(0);
  const activeRef = useRef(0);
  const tlRef = useRef(null);

  const { gsap, ScrollTrigger } = useGSAP();

  const works = useMemo(
    () => service.works.map((w, i) => ({
      ...w,
      serviceTag:   service.tag,
      serviceColor: service.color,
      _index: i,
    })),
    [service]
  );

  /* ── playTransition ───────────────────────────────────────────
     Единая анимация смены слайда: текущая картинка уезжает в
     сторону dir, следующая въезжает на её место. Принимает
     необязательные стартовые смещения (xPercent) — так перетаскивание
     может "доиграть" анимацию из той точки, где её бросил палец/курсор. */
  const playTransition = useCallback(
    (targetIndex, dir, { fromXPercent, fromNextXPercent } = {}) => {
      const img     = heroImgRef.current;
      const next    = nextImgRef.current;
      const content = heroContentRef.current;
      if (!gsap || !img || !next || !content) return;

      // Текущее визуальное смещение картинки — если предыдущий переход
      // был прерван новым кликом на середине, новый переход продолжает
      // ровно с этой точки, без визуального скачка.
      const startXPercent = fromXPercent ?? gsap.getProperty(img, "xPercent") ?? 0;

      tlRef.current?.kill();

      const targetWork = works[targetIndex];

      // Индекс обновляем сразу, а не по завершении анимации — иначе
      // быстрые повторные клики/смахивания считают "следующий" слайд от
      // одного и того же устаревшего активного индекса и просто
      // перезапускают один и тот же переход вместо того, чтобы идти дальше.
      activeRef.current = targetIndex;
      setActive(targetIndex);

      gsap.set(next, {
        display: "block",
        backgroundImage: bgFor(targetWork),
        xPercent: fromNextXPercent ?? (dir > 0 ? 100 : -100),
      });
      gsap.set(img, { xPercent: startXPercent });

      const tl = gsap.timeline({
        onComplete: () => {
          // "Подменяем" слои на финальном кадре — оба в этот момент
          // показывают одну и ту же картинку в одной и той же точке,
          // поэтому подмена незаметна.
          gsap.set(img,  { backgroundImage: bgFor(targetWork), xPercent: 0 });
          gsap.set(next, { display: "none", xPercent: 0 });
        },
      });
      tlRef.current = tl;

      tl.to(img,  { xPercent: dir > 0 ? -100 : 100, duration: 0.5, ease: "power3.inOut" }, 0);
      tl.to(next, { xPercent: 0,                    duration: 0.5, ease: "power3.inOut" }, 0);

      tl.to(content, { y: dir > 0 ? -16 : 16, opacity: 0, duration: 0.16, ease: "power2.in" }, 0);
      tl.fromTo(content,
        { y: dir > 0 ? 20 : -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.32, ease: "power3.out" }, 0.26);
    },
    [gsap, works]
  );

  /* ── Навигация ─────────────────────────────────────────────
     Любой вызов сразу обрывает текущую анимацию (tl.kill внутри
     playTransition) — слайдер никогда не "виснет" и не игнорирует
     быстрые повторные нажатия.                                   */
  const goTo = useCallback(
    (targetRaw) => {
      const len = works.length;
      const target = ((targetRaw % len) + len) % len;
      if (target === activeRef.current) return;
      playTransition(target, shortestDir(activeRef.current, target, len));
    },
    [playTransition, works.length]
  );

  const goNext = useCallback(() => {
    const len = works.length;
    if (len < 2) return;
    playTransition((activeRef.current + 1) % len, 1);
  }, [playTransition, works.length]);

  const goPrev = useCallback(() => {
    const len = works.length;
    if (len < 2) return;
    playTransition((activeRef.current - 1 + len) % len, -1);
  }, [playTransition, works.length]);

  /* ── Keyboard ───────────────────────────────────────────── */
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft")  goPrev();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [goNext, goPrev]);

  /* ── Drag / swipe на hero ─────────────────────────────────────
     Картинка тащится вживую за пальцем/курсором (xPercent = dx/width),
     рядом подъезжает соседний слайд. На отпускании — либо доезжает до
     него (та же playTransition, продолженная с текущего смещения),
     либо плавно возвращается на место.                              */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || !gsap || works.length < 2) return;

    const getX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

    let dragStart = null;   // { x, t }
    let dragged   = false;
    let dragDir   = 0;      // 1 — тащим к следующему, -1 — к предыдущему
    let width     = 1;

    const resetLayers = () => {
      gsap.set(heroImgRef.current, { xPercent: 0 });
      gsap.set(nextImgRef.current, { display: "none", xPercent: 0 });
      gsap.set(heroContentRef.current, { opacity: 1 });
    };

    const onDown = (e) => {
      dragStart = { x: getX(e), t: Date.now() };
      dragged = false;
      dragDir = 0;
      width = hero.offsetWidth || 1;
      tlRef.current?.kill();
      resetLayers();
    };

    const onMove = (e) => {
      if (!dragStart) return;
      const dx = getX(e) - dragStart.x;

      if (!dragged && Math.abs(dx) > 6) {
        dragged = true;
        dragDir = dx < 0 ? 1 : -1;
        const len = works.length;
        const targetIndex = ((activeRef.current + dragDir) % len + len) % len;
        gsap.set(nextImgRef.current, {
          display: "block",
          backgroundImage: bgFor(works[targetIndex]),
          xPercent: dragDir > 0 ? 100 : -100,
        });
      }

      if (dragDir !== 0) {
        const pct = (dx / width) * 100;
        gsap.set(heroImgRef.current, { xPercent: pct });
        gsap.set(nextImgRef.current, { xPercent: (dragDir > 0 ? 100 : -100) + pct });
        gsap.set(heroContentRef.current, { opacity: 1 - Math.min(Math.abs(pct) / 60, 1) * 0.7 });
      }
    };

    const onUp = (e) => {
      if (!dragStart) return;
      const dx = getX(e) - dragStart.x;
      const dt = Date.now() - dragStart.t;
      dragStart = null;

      if (dragDir === 0) return; // не двигали — ничего доигрывать не нужно

      const passed = Math.abs(dx) > 40 || (Math.abs(dx) > 18 && dt < 300);
      const len = works.length;
      const pct = (dx / width) * 100;

      if (passed) {
        const targetIndex = ((activeRef.current + dragDir) % len + len) % len;
        playTransition(targetIndex, dragDir, {
          fromXPercent: pct,
          fromNextXPercent: (dragDir > 0 ? 100 : -100) + pct,
        });
      } else {
        gsap.to(heroImgRef.current, { xPercent: 0, duration: 0.35, ease: "power3.out" });
        gsap.to(nextImgRef.current, {
          xPercent: dragDir > 0 ? 100 : -100,
          duration: 0.35,
          ease: "power3.out",
          onComplete: () => gsap.set(nextImgRef.current, { display: "none" }),
        });
        gsap.to(heroContentRef.current, { opacity: 1, duration: 0.25 });
      }
      dragDir = 0;
    };

    const onClick = (e) => {
      if (dragged) { e.preventDefault(); e.stopPropagation(); }
    };

    hero.addEventListener("mousedown",  onDown);
    hero.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("mousemove", onMove);
    hero.addEventListener("touchmove",  onMove, { passive: true });
    window.addEventListener("mouseup",   onUp);
    hero.addEventListener("touchend",   onUp);
    hero.addEventListener("click",      onClick, true);

    return () => {
      hero.removeEventListener("mousedown",  onDown);
      hero.removeEventListener("touchstart", onDown);
      window.removeEventListener("mousemove", onMove);
      hero.removeEventListener("touchmove",  onMove);
      window.removeEventListener("mouseup",   onUp);
      hero.removeEventListener("touchend",   onUp);
      hero.removeEventListener("click",      onClick, true);
    };
  }, [gsap, works, playTransition]);

  /* ── Scroll-in ──────────────────────────────────────────── */
  useEffect(() => {
    if (!gsap || !ScrollTrigger || !sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [gsap, ScrollTrigger]);

  /* ── Очистка анимации при размонтировании ───────────────── */
  useEffect(() => () => tlRef.current?.kill(), []);

  /* ── Авто-скролл активной thumb ─────────────────────────────
     Пропускаем самый первый рендер — иначе scrollIntoView на
     монтировании тащит всю страницу вниз, к превьюшкам секции
     (на каждой из 5 категорий), и в итоге страница открывается
     проскролленной к последней секции.                          */
  const skippedFirstScroll = useRef(false);
  useEffect(() => {
    if (!skippedFirstScroll.current) {
      skippedFirstScroll.current = true;
      return;
    }
    const thumbs = thumbsRef.current;
    if (!thumbs) return;
    const el = thumbs.children[active];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [active]);

  const cur = works[active];

  return (
    <section ref={sectionRef} className={styles.section}>

      {/* ── Header ─────────────────────────────────────────── */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.indexLabel} style={{ color: service.color }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <span className={styles.eyebrow} style={{ color: service.color }}>
              {service.tag}
            </span>
            <h2 className={styles.title}>{service.title.replace("\n", " ")}</h2>
          </div>
        </div>
        <p className={styles.desc}>{service.desc}</p>
      </div>

      {/* ── Hero + боковые кнопки ───────────────────────────── */}
      <div className={styles.heroWrap}>
        {/* Кнопка влево */}
        <button
          className={`${styles.sideBtn} ${styles.sideBtnLeft}`}
          onClick={goPrev}
          aria-label="Предыдущий"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Сам слайд */}
        <div ref={heroRef} className={styles.hero}>
          <div
            ref={heroImgRef}
            className={styles.heroImg}
            style={{
              backgroundImage: cur.image
                ? `url(${cur.image}), ${cur.thumbBg}`
                : cur.thumbBg,
            }}
          />
          <div ref={nextImgRef} className={styles.heroImg} style={{ display: "none" }} />
          <div className={styles.heroOverlay} />
          <div className={styles.heroDots} />
          <div className={styles.heroGhostNum}>{String(active + 1).padStart(2, "0")}</div>

          <div ref={heroContentRef} className={styles.heroContent}>
            <div className={styles.heroTop}>
              <span className={styles.heroBadge} style={{ borderColor: `${service.color}66` }}>
                <span className={styles.heroBadgeDot} style={{ background: service.color }} />
                {cur.serviceTag}
              </span>
              <span className={styles.heroYear}>{cur.year}</span>
            </div>

            <h3 className={styles.heroTitle}>{cur.title}</h3>

            {cur.description && (
              <p className={styles.heroDesc}>{cur.description}</p>
            )}

            <div className={styles.heroBottom}>
              <div className={styles.heroMeta}>
                <span className={styles.heroMetaLabel}>Клиент</span>
                <span className={styles.heroMetaVal}>{cur.sub}</span>
              </div>

              {cur.tags?.slice(0, 3).map((t) => (
                <span key={t} className={styles.heroChip}>{t}</span>
              ))}

              <Link href={`/work/${cur.slug}`} className={styles.heroCta}>
                Смотреть кейс
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor"
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Счётчик */}
          <div className={styles.heroCounter}>
            <span className={styles.heroCounterActive} style={{ color: service.color }}>
              {String(active + 1).padStart(2, "0")}
            </span>
            <span className={styles.heroCounterSep}>/</span>
            <span className={styles.heroCounterTotal}>
              {String(works.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Кнопка вправо */}
        <button
          className={`${styles.sideBtn} ${styles.sideBtnRight}`}
          onClick={goNext}
          aria-label="Следующий"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* ── Dots ───────────────────────────────────────────── */}
      <div className={styles.dots}>
        {works.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
            style={{ background: i === active ? service.color : undefined }}
            onClick={() => goTo(i)}
            aria-label={`Слайд ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Thumbnails (остальные работы) ──────────────────── */}
      {works.length > 1 && (
        <div ref={thumbsRef} className={styles.thumbs}>
          {works.map((work, i) => (
            <button
              key={work.slug}
              className={`${styles.thumb} ${i === active ? styles.thumbActive : ""}`}
              onClick={() => goTo(i)}
              aria-label={work.title}
            >
              <div className={styles.thumbProgress}
                style={{ background: i === active ? service.color : "transparent" }} />
              <div className={styles.thumbImg}
                style={{
                  backgroundImage: work.image
                    ? `url(${work.image}), ${work.thumbBg}`
                    : work.thumbBg,
                }} />
              <div className={styles.thumbImgOverlay} />
              <div className={styles.thumbBody}>
                <span className={styles.thumbNum}
                  style={{ color: i === active ? service.color : undefined }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.thumbTitle}>{work.title}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}