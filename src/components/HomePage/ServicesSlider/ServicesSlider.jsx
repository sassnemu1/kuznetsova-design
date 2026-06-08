"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import useGSAP from "@/hooks/useGSAP";

import { SERVICES_DATA } from "@/data/ServicesData";

import "./ServicesSlider.css";

export default function ServicesSlider() {
  const sectionRef    = useRef(null);
  const trackRef      = useRef(null);
  const progressRef   = useRef(null);
  const currentRef    = useRef(null);
  const hintRef       = useRef(null);
  const titleRef      = useRef(null);
  const counterRef    = useRef(null);
  const cardRefs      = useRef([]);
  const detailRef     = useRef(null);
  const portfolioRef  = useRef(null);
  const detailCardRef = useRef(null);
  const closeBtnRef   = useRef(null);
  const workItemRefs  = useRef([]);

  const scrollTriggerRef = useRef(null);
  const isAnimatingRef   = useRef(false);
  const originRectRef    = useRef(null);
  const openRafRef       = useRef(null);
  const isMobileRef      = useRef(false);
  const savedScrollYRef  = useRef(0);

  const [activeIndex,     setActiveIndex]     = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [detailVisible,   setDetailVisible]   = useState(false);

  const { gsap, ScrollTrigger } = useGSAP();

  const services = SERVICES_DATA;

  // ── Scroll lock helpers ────────────────────────────────────────────────
  // Сохраняем scrollY и фиксируем body — страница не скроллится под оверлеем,
  // и при закрытии пользователь остаётся ровно там, где был.
  const lockBodyScroll = () => {
    savedScrollYRef.current = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top      = `-${savedScrollYRef.current}px`;
    document.body.style.left     = "0";
    document.body.style.right    = "0";
    document.body.style.overflow = "hidden";
  };

  const unlockBodyScroll = () => {
    document.body.style.position = "";
    document.body.style.top      = "";
    document.body.style.left     = "";
    document.body.style.right    = "";
    document.body.style.overflow = "";
    window.scrollTo({ top: savedScrollYRef.current, behavior: "instant" });
  };

  // ── Detect mobile once on mount ────────────────────────────────────────
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    isMobileRef.current = mq.matches;
    const onChange = (e) => { isMobileRef.current = e.matches; };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // ── Main horizontal scroll (desktop only) ──────────────────────────────
  useEffect(() => {
    if (!gsap || !ScrollTrigger) return;

    const ctx = gsap.context(() => {
      const section  = sectionRef.current;
      const track    = trackRef.current;
      const progress = progressRef.current;
      if (!section || !track) return;

      // On mobile — only entrance animation, no pinning
      if (isMobileRef.current) {
        gsap.fromTo(
          cardRefs.current.filter(Boolean),
          { opacity: 0, y: 48 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: section, start: "top 85%" } }
        );
        return;
      }

      const getScrollAmount = () => {
        const overflowWidth = track.scrollWidth - window.innerWidth;
        return -(overflowWidth + window.innerWidth * 0.05);
      };

      // Entrance
      gsap.timeline({ delay: 0.15 })
        .fromTo(titleRef.current,   { opacity: 0, y: 44 }, { opacity: 1, y: 0, duration: 1,   ease: "power3.out" })
        .fromTo(counterRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.65")
        .fromTo(hintRef.current,    { opacity: 0 },         { opacity: 1,        duration: 0.8, ease: "power2.out" }, "-=0.5");

      gsap.fromTo(
        cardRefs.current.filter(Boolean),
        { opacity: 0, y: 70, scale: 0.93 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.09, duration: 1, ease: "power3.out", delay: 0.35 }
      );

      const horizTween = gsap.to(track, { x: getScrollAmount, ease: "none", duration: 1 });

      const st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${Math.abs(getScrollAmount())}`,
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        animation: horizTween,
        onUpdate(self) {
          if (progress) progress.style.width = `${self.progress * 100}%`;
          const idx = Math.min(services.length - 1, Math.round(self.progress * (services.length - 1)));
          setActiveIndex(idx);
          if (currentRef.current) currentRef.current.textContent = String(idx + 1).padStart(2, "0");
        },
      });

      scrollTriggerRef.current = st;

      // Parallax
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const dir = i % 2 === 0 ? -20 : 20;
        gsap.fromTo(card, { "--card-parallax": "0px" }, {
          "--card-parallax": `${dir}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.abs(getScrollAmount())}`,
            scrub: 2.5,
          },
        });
      });
    }, sectionRef);

    const raf1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => ScrollTrigger.refresh());
    });

    return () => {
      cancelAnimationFrame(raf1);
      ctx.revert();
    };
  }, [gsap, ScrollTrigger]);

  // ── Open detail ────────────────────────────────────────────────────────
  const openDetail = useCallback((service, cardEl) => {
    if (!gsap || isAnimatingRef.current || detailVisible) return;
    isAnimatingRef.current = true;

    const detail    = detailRef.current;
    const portfolio = portfolioRef.current;
    const closeBtn  = closeBtnRef.current;

    // ── Mobile: простой fade без FLIP ──────────────────────────────────
    if (isMobileRef.current) {
      gsap.set(detail,    { display: "flex", opacity: 0 });
      gsap.set(portfolio, { opacity: 0, y: 24 });
      gsap.set(closeBtn,  { opacity: 0 });

      setSelectedService(service);
      setDetailVisible(true);
      lockBodyScroll();

      cancelAnimationFrame(openRafRef.current);
      openRafRef.current = requestAnimationFrame(() => {
        openRafRef.current = requestAnimationFrame(() => {
          const validWorkItems = workItemRefs.current.filter(Boolean);
          gsap.set(validWorkItems, { opacity: 0, y: 16 });

          gsap.timeline({
            defaults:   { ease: "expo.out" },
            onComplete: () => { isAnimatingRef.current = false; },
          })
            .to(detail,         { opacity: 1,  duration: 0.3 }, 0)
            .to(portfolio,      { opacity: 1, y: 0, duration: 0.5 }, 0.1)
            .to(closeBtn,       { opacity: 1,  duration: 0.3 }, 0.2)
            .to(validWorkItems, { opacity: 1, y: 0, stagger: 0.06, duration: 0.45 }, 0.25);
        });
      });
      return;
    }

    // ── Desktop: FLIP-анимация ─────────────────────────────────────────
    if (scrollTriggerRef.current) scrollTriggerRef.current.disable();
    lockBodyScroll();

    const rect        = cardEl.getBoundingClientRect();
    const sectionRect = sectionRef.current.getBoundingClientRect();
    originRectRef.current = rect;

    const detailCard = detailCardRef.current;
    const otherCards = cardRefs.current.filter(c => c && c !== cardEl);

    gsap.set(detail,     { display: "flex", opacity: 0 });
    gsap.set(detailCard, {
      position:    "absolute",
      top:         rect.top  - sectionRect.top,
      left:        rect.left - sectionRect.left,
      width:       rect.width,
      height:      rect.height,
      borderRadius: 24,
      opacity:     1,
      clearProps:  "scale,xPercent,yPercent",
    });
    gsap.set(portfolio, { opacity: 0, x: -48 });
    gsap.set(closeBtn,  { opacity: 0, y: -16 });

    setSelectedService(service);
    setDetailVisible(true);

    cancelAnimationFrame(openRafRef.current);
    openRafRef.current = requestAnimationFrame(() => {
      openRafRef.current = requestAnimationFrame(() => {
        const validWorkItems = workItemRefs.current.filter(Boolean);
        gsap.set(validWorkItems, { opacity: 0, x: -36 });

        gsap.timeline({
          defaults:   { ease: "expo.out" },
          onComplete: () => { isAnimatingRef.current = false; },
        })
          .to(otherCards,     { opacity: 0, scale: 0.9, y: 16, stagger: 0.035, duration: 0.4, ease: "power2.in" }, 0)
          .to(detail,         { opacity: 1, duration: 0.3, ease: "power2.out" }, 0.08)
          .to(detailCard,     { top: 0, left: "50%", width: "50%", height: "100%", borderRadius: 0, duration: 0.8, ease: "expo.inOut" }, 0.12)
          .to(portfolio,      { opacity: 1, x: 0, duration: 0.65 }, 0.45)
          .to(closeBtn,       { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }, 0.5)
          .to(validWorkItems, { opacity: 1, x: 0, stagger: 0.065, duration: 0.55 }, 0.58);
      });
    });
  }, [gsap, detailVisible]);

  // ── Close detail ───────────────────────────────────────────────────────
  const closeDetail = useCallback(() => {
    if (!gsap || isAnimatingRef.current || !detailVisible) return;
    isAnimatingRef.current = true;
    cancelAnimationFrame(openRafRef.current);

    const detail         = detailRef.current;
    const portfolio      = portfolioRef.current;
    const closeBtn       = closeBtnRef.current;
    const validWorkItems = workItemRefs.current.filter(Boolean);

    // ── Mobile: простой fade out ───────────────────────────────────────
    if (isMobileRef.current) {
      gsap.timeline({
        onComplete: () => {
          gsap.set(detail, { display: "none" });
          setDetailVisible(false);
          setSelectedService(null);
          isAnimatingRef.current = false;
          unlockBodyScroll();
        },
      })
        .to(validWorkItems, { opacity: 0, y: 10, stagger: 0.03, duration: 0.2, ease: "power2.in" }, 0)
        .to(portfolio,      { opacity: 0, y: 16, duration: 0.25, ease: "power2.in" }, 0.05)
        .to(detail,         { opacity: 0, duration: 0.25 }, 0.15);
      return;
    }

    // ── Desktop: FLIP назад ────────────────────────────────────────────
    const detailCard = detailCardRef.current;
    const allCards   = cardRefs.current.filter(Boolean);

    const sectionRect = sectionRef.current.getBoundingClientRect();
    const origin      = originRectRef.current;
    const flipTop     = origin ? origin.top  - sectionRect.top  : "50%";
    const flipLeft    = origin ? origin.left - sectionRect.left : "50%";
    const flipW       = origin ? origin.width  : 400;
    const flipH       = origin ? origin.height : 460;

    gsap.timeline({
      defaults:   { ease: "expo.inOut" },
      onComplete: () => {
        gsap.set(detail, { display: "none" });
        setDetailVisible(false);
        setSelectedService(null);
        isAnimatingRef.current = false;
        originRectRef.current  = null;
        unlockBodyScroll();
        if (scrollTriggerRef.current) scrollTriggerRef.current.enable();
      },
    })
      .to(validWorkItems, { opacity: 0, x: -28, stagger: 0.03, duration: 0.28, ease: "power2.in" }, 0)
      .to(closeBtn,       { opacity: 0, y: -14,                duration: 0.22, ease: "power2.in" }, 0)
      .to(portfolio,      { opacity: 0, x: -48,                duration: 0.35, ease: "power2.in" }, 0.04)
      .to(detailCard,     { top: flipTop, left: flipLeft, width: flipW, height: flipH, borderRadius: 24, duration: 0.72, clearProps: "xPercent,yPercent" }, 0.08)
      .to(detail,         { opacity: 0,                         duration: 0.3,  ease: "power2.in" }, 0.5)
      .to(allCards,       { opacity: 1, scale: 1, y: 0, stagger: 0.04, duration: 0.55, ease: "power3.out" }, 0.45);
  }, [gsap, detailVisible]);

  useEffect(() => () => cancelAnimationFrame(openRafRef.current), []);

  // Снимаем лок при анмаунте — на случай ухода со страницы с открытым оверлеем
  useEffect(() => {
    return () => {
      if (document.body.style.position === "fixed") unlockBodyScroll();
    };
  }, []);

  // ── Render ─────────────────────────────────────────────────────────────
  return (
    <section className="services" ref={sectionRef}>

      {/* HEADER */}
      <div className="services__header">
        <div className="services__meta">
          <div className="services__title" ref={titleRef}>
            <h2>Services</h2>
            <span className="services__title-sub">
              Будучи сплоченной командой экспертов, мы создаем запоминающиеся и
              <br /> вызывающие эмоции веб-сайты, цифровые решения и нативные приложения.
            </span>
          </div>
        </div>
        {/* Counter — desktop only (hidden via CSS on mobile) */}
        <div className="services__counter" ref={counterRef}>
          <span className="services__current" ref={currentRef}>01</span>
          <span className="services__total">/ {String(services.length).padStart(2, "0")}</span>
        </div>
      </div>

      {/* TRACK */}
      <div className="services__track-outer">
        <div className="services__track" ref={trackRef}>
          {services.map((item, index) => (
            <div
              className={`serviceCard${activeIndex === index ? " serviceCard--active" : ""}`}
              key={item.id}
              ref={el => { cardRefs.current[index] = el; }}
              style={{ "--card-color": item.color }}
              onClick={() => openDetail(item, cardRefs.current[index])}
            >
              <div className="serviceCard__bg-img" style={{ backgroundImage: `url(${item.image})` }} />

              <div className="serviceCard__top">
                <span className="serviceCard__id">{item.id}</span>
                <span className="serviceCard__tag">{item.tag}</span>
              </div>
              <div className="serviceCard__bg-num">{item.id}</div>
              <div className="serviceCard__line" />
              <div className="serviceCard__content">
                <h3 className="serviceCard__title">
                  {item.title.split("\n").map((line, li) => (
                    <span key={li} style={{ display: "block" }}>{line}</span>
                  ))}
                </h3>
                <p className="serviceCard__desc">{item.desc}</p>
              </div>
              <div className="serviceCard__cta">
                <span>View work</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROGRESS — desktop only */}
      <div className="services__progress-wrap">
        <div className="services__progress-track">
          <div className="services__progress-fill" ref={progressRef} />
        </div>
        <span className="services__scroll-hint" ref={hintRef}>Scroll</span>
      </div>

      {/* DETAIL OVERLAY */}
      <div className="services__detail" ref={detailRef} style={{ display: "none" }}>

        {/* Left panel: portfolio list */}
        <div className="detail__portfolio" ref={portfolioRef}>
          <div className="detail__portfolio-header">
            <button className="detail__close" ref={closeBtnRef} onClick={closeDetail} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M13.5 4.5l-9 9M4.5 4.5l9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {selectedService && (
              <div className="detail__portfolio-meta">
                <span className="detail__portfolio-tag">{selectedService.tag}</span>
                <h3 className="detail__portfolio-title">{selectedService.title.replace("\n", " ")}</h3>
                <p className="detail__portfolio-sub">{selectedService.desc}</p>
              </div>
            )}
          </div>

          <div className="detail__work-list">
            {(selectedService?.works ?? []).map((work, i) => (
              <div
                className="detail__work-item"
                key={`${selectedService?.id}-${i}`}
                ref={el => { workItemRefs.current[i] = el; }}
              >
                <div className="detail__work-thumb" style={{ background: work.thumbBg }}>
                  <div className="detail__work-thumb-inner" />
                </div>
                <div className="detail__work-info">
                  <span className="detail__work-title">{work.title}</span>
                  <span className="detail__work-sub">{work.sub}</span>
                </div>
                <span className="detail__work-year">{work.year}</span>
                <svg className="detail__work-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            ))}
          </div>

          <div className="detail__cta-row">
            <button className="detail__all-btn">
              See all work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Right panel: expanded card (desktop only, hidden on mobile via CSS) */}
        <div
          className="detail__card"
          ref={detailCardRef}
          style={selectedService ? { "--card-color": selectedService.color } : {}}
        >
          {selectedService && (
            <>
              <div className="detail__card-bg-img" style={{ backgroundImage: `url(${selectedService.image})` }} />
              <div className="serviceCard__top">
                <span className="serviceCard__id">{selectedService.id}</span>
                <span className="serviceCard__tag">{selectedService.tag}</span>
              </div>
              <div className="serviceCard__bg-num" style={{ fontSize: "14rem", opacity: 0.05 }}>
                {selectedService.id}
              </div>
              <div className="serviceCard__line" style={{ transform: "scaleX(1)" }} />
              <div className="serviceCard__content">
                <h3 className="serviceCard__title" style={{ fontSize: "3rem" }}>
                  {selectedService.title.split("\n").map((line, li) => (
                    <span key={li} style={{ display: "block" }}>{line}</span>
                  ))}
                </h3>
                <p className="serviceCard__desc" style={{ fontSize: "1rem", maxWidth: "none" }}>
                  {selectedService.desc}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}