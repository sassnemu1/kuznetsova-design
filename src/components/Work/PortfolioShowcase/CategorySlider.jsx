"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Link from "next/link";
import useGSAP from "@/hooks/useGSAP";
import { useLanguage, useT } from "@/context/LanguageContext";
import { pickLocalized, pickLocalizedList } from "@/i18n/dictionary";
import styles from "./CategorySlider.module.css";

const AUTOPLAY_SEC = 6;

const bgFor = (w) => (w.image ? `url(${w.image}), ${w.thumbBg}` : w.thumbBg);

// Кратчайшее направление по кругу (для прыжков через точки/превью)
function shortestDir(from, to, len) {
  let diff = to - from;
  if (diff > len / 2) diff -= len;
  if (diff < -len / 2) diff += len;
  return diff < 0 ? -1 : 1;
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function CategorySlider({ service, index, isActive }) {
  const t = useT();
  const { lang } = useLanguage();

  const sectionRef = useRef(null);
  const heroRef    = useRef(null);
  const parallaxRef = useRef(null); // обёртка слоёв — двигается при скролле
  const heroImgRef = useRef(null);  // текущий слайд
  const nextImgRef = useRef(null);  // следующий/предыдущий — едет навстречу
  const heroContentRef = useRef(null);
  const ghostRef   = useRef(null);
  const thumbsRef  = useRef(null);
  const progressRef = useRef(null);

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
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
     сторону dir, следующая въезжает на её место.                  */
  const playTransition = useCallback(
    (targetIndex, dir, { fromXPercent, fromNextXPercent } = {}) => {
      const img     = heroImgRef.current;
      const next    = nextImgRef.current;
      const content = heroContentRef.current;
      if (!gsap || !img || !next || !content) return;

      const startXPercent = fromXPercent ?? gsap.getProperty(img, "xPercent") ?? 0;

      tlRef.current?.kill();

      const targetWork = works[targetIndex];

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
          gsap.set(img,  { backgroundImage: bgFor(targetWork), xPercent: 0 });
          gsap.set(next, { display: "none", xPercent: 0 });
        },
      });
      tlRef.current = tl;

      tl.to(img,  { xPercent: dir > 0 ? -100 : 100, duration: 0.55, ease: "power3.inOut" }, 0);
      tl.to(next, { xPercent: 0,                    duration: 0.55, ease: "power3.inOut" }, 0);

      tl.to(content, { y: dir > 0 ? -16 : 16, opacity: 0, duration: 0.16, ease: "power2.in" }, 0);
      tl.fromTo(content,
        { y: dir > 0 ? 20 : -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.34, ease: "power3.out" }, 0.28);
    },
    [gsap, works]
  );

  /* ── Навигация ──────────────────────────────────────────── */
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

  /* ── Keyboard (только для активной секции) ──────────────── */
  useEffect(() => {
    if (!isActive) return;
    const fn = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft")  goPrev();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [isActive, goNext, goPrev]);

  /* ── Автоплей с прогресс-баром ──────────────────────────────
     Тонкая линия внизу hero заполняется за AUTOPLAY_SEC секунд,
     затем слайдер листает дальше. Пауза — на ховере/касании и
     когда секция вне зоны внимания.                              */
  useEffect(() => {
    const bar = progressRef.current;
    if (!gsap || !bar) return;

    if (!isActive || paused || works.length < 2 || prefersReducedMotion()) {
      gsap.set(bar, { scaleX: 0 });
      return;
    }

    gsap.set(bar, { scaleX: 0 });
    const tween = gsap.to(bar, {
      scaleX: 1,
      duration: AUTOPLAY_SEC,
      ease: "none",
      onComplete: () => goNext(),
    });
    return () => tween.kill();
  }, [gsap, isActive, paused, active, goNext, works.length]);

  /* ── Drag / swipe на hero ───────────────────────────────── */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || !gsap || works.length < 2) return;

    // На touchend активных касаний уже нет — координата в changedTouches
    const getX = (e) =>
      e.changedTouches?.[0]?.clientX ??
      e.touches?.[0]?.clientX ??
      e.clientX ??
      0;

    let dragStart = null;
    let dragged   = false;
    let dragDir   = 0;
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

      if (dragDir === 0) return;

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

  /* ── Параллакс при прокрутке ────────────────────────────────
     Слои картинки выше hero на ~28% и плавно едут по вертикали,
     пока секция проходит через вьюпорт. Призрачный номер едет
     навстречу — глубина в два слоя.                              */
  useEffect(() => {
    if (!gsap || !ScrollTrigger || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const st = {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.6,
      };
      gsap.fromTo(parallaxRef.current, { yPercent: -7 }, { yPercent: 7, ease: "none", scrollTrigger: st });
      gsap.fromTo(ghostRef.current,    { y: 70 },        { y: -70,      ease: "none", scrollTrigger: { ...st } });
    }, sectionRef);
    return () => ctx.revert();
  }, [gsap, ScrollTrigger]);

  /* ── Появление секции ───────────────────────────────────── */
  useEffect(() => {
    if (!gsap || !ScrollTrigger || !sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" } }
      );
      gsap.fromTo(heroRef.current,
        { scale: 0.965 },
        { scale: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [gsap, ScrollTrigger]);

  /* ── Очистка анимации при размонтировании ───────────────── */
  useEffect(() => () => tlRef.current?.kill(), []);

  /* ── Авто-скролл активной превьюшки ─────────────────────────
     Скроллим ТОЛЬКО ленту превью по горизонтали. scrollIntoView
     здесь нельзя: он может прокрутить и страницу целиком — из-за
     этого страница «улетала» к последней секции при открытии.    */
  useEffect(() => {
    const thumbs = thumbsRef.current;
    if (!thumbs) return;
    const el = thumbs.children[active];
    if (!el) return;
    const delta = el.getBoundingClientRect().left - thumbs.getBoundingClientRect().left;
    const target = thumbs.scrollLeft + delta - (thumbs.clientWidth - el.offsetWidth) / 2;
    thumbs.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
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
        <p className={styles.desc}>
          {t(`services.desc.${service.id}`, service.desc)}
        </p>
      </div>

      {/* ── Hero + боковые кнопки ───────────────────────────── */}
      <div
        className={styles.heroWrap}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <button
          className={`${styles.sideBtn} ${styles.sideBtnLeft}`}
          onClick={goPrev}
          aria-label={t("common.prev", "Предыдущий")}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div ref={heroRef} className={styles.hero}>
          {/* Параллакс-обёртка: двигается при скролле страницы */}
          <div ref={parallaxRef} className={styles.parallax}>
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
          </div>

          <div className={styles.heroOverlay} />
          <div className={styles.heroDots} />
          <div ref={ghostRef} className={styles.heroGhostNum}>
            {String(active + 1).padStart(2, "0")}
          </div>

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
              <p className={styles.heroDesc}>
                {pickLocalized(cur, lang, "description", "descriptionEn")}
              </p>
            )}

            <div className={styles.heroBottom}>
              <div className={styles.heroMeta}>
                <span className={styles.heroMetaLabel}>
                  {t("common.client", "Клиент")}
                </span>
                <span className={styles.heroMetaVal}>
                  {pickLocalized(cur, lang, "sub", "subEn")}
                </span>
              </div>

              {pickLocalizedList(cur, lang, "tags").slice(0, 3).map((t) => (
                <span key={t} className={styles.heroChip}>{t}</span>
              ))}

              <div className={styles.heroActions}>
                {cur.url && (
                  <a
                    href={cur.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.siteBtn}
                  >
                    {t("common.openSite", "Открыть сайт")}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 9L9 3M4.5 3H9v4.5" stroke="currentColor"
                        strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
                <Link href={`/work/${cur.slug}`} className={styles.heroCta}>
                  {t("common.viewCase", "Смотреть кейс")}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor"
                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
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

          {/* Прогресс автоплея */}
          <div className={styles.autoTrack}>
            <div
              ref={progressRef}
              className={styles.autoFill}
              style={{ background: service.color }}
            />
          </div>
        </div>

        <button
          className={`${styles.sideBtn} ${styles.sideBtnRight}`}
          onClick={goNext}
          aria-label={t("common.next", "Следующий")}
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
            aria-label={`${t("portfolio.slide", "Слайд")} ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Thumbnails ─────────────────────────────────────── */}
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
