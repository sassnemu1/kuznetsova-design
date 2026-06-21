"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import useGSAP from "@/hooks/useGSAP";

import { SERVICES_DATA } from "@/data/ServicesData";

import ServicesHeader from "./ServicesHeader/ServicesHeader";
import ServicesTrack from "./ServicesTrack/ServicesTrack";
import ServicesProgress from "./ServicesProgress/ServicesProgress";
import DetailOverlay from "./DetailOverlay/DetailOverlay";

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

    const scrollTriggerRef    = useRef(null);
    const isAnimatingRef      = useRef(false);
    const originRectRef       = useRef(null);
    const openRafRef          = useRef(null);
    const isMobileRef         = useRef(false);
    const savedScrollYRef     = useRef(0);
    const savedSTProgressRef  = useRef(0);

    const [activeIndex,     setActiveIndex]     = useState(0);
    const [selectedService, setSelectedService] = useState(null);
    const [detailVisible,   setDetailVisible]   = useState(false);

    const { gsap, ScrollTrigger } = useGSAP();

    const services = SERVICES_DATA;

    // ── Scroll lock helpers ────────────────────────────────────────────────
    const lockBodyScroll = () => {
        savedScrollYRef.current = window.scrollY;

        const section = sectionRef.current;
        if (section) {
            Array.from(document.body.children).forEach(el => {
                if (!el.contains(section) && el !== section) {
                    el.dataset.hiddenByServices = el.style.visibility || "";
                    el.style.visibility = "hidden";
                }
            });
        }

        document.body.style.position = "fixed";
        document.body.style.top      = `-${savedScrollYRef.current}px`;
        document.body.style.left     = "0";
        document.body.style.right    = "0";
        document.body.style.overflow = "hidden";
    };

    const unlockBodyScroll = () => {
        Array.from(document.body.children).forEach(el => {
            if ("hiddenByServices" in el.dataset) {
                el.style.visibility = el.dataset.hiddenByServices;
                delete el.dataset.hiddenByServices;
            }
        });

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

    if (scrollTriggerRef.current) {
      savedSTProgressRef.current = scrollTriggerRef.current.progress;
      scrollTriggerRef.current.disable();
    }
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
        if (scrollTriggerRef.current) {
          scrollTriggerRef.current.enable();
          requestAnimationFrame(() => {
            if (scrollTriggerRef.current) {
              const st = scrollTriggerRef.current;
              const target = st.start + savedSTProgressRef.current * (st.end - st.start);
              window.scrollTo({ top: target, behavior: "instant" });
            }
          });
        }
      },
    })
      .to(validWorkItems, { opacity: 0, x: -28, stagger: 0.03, duration: 0.28, ease: "power2.in" }, 0)
      .to(closeBtn,       { opacity: 0, y: -14,                duration: 0.22, ease: "power2.in" }, 0)
      .to(portfolio,      { opacity: 0, x: -48,                duration: 0.35, ease: "power2.in" }, 0.04)
      .to(detailCard,     { top: flipTop, left: flipLeft, width: flipW, height: flipH, borderRadius: 24, duration: 1.72, clearProps: "xPercent,yPercent" }, 0.08)
      .to(detail,         { opacity: 0,                         duration: 1.3,  ease: "power2.in" }, 0.5)
      .to(allCards,       { opacity: 1, scale: 1, y: 0, stagger: 0.04, duration: 0.55, ease: "power3.out" }, 0.45);
  }, [gsap, detailVisible]);

    useEffect(() => () => cancelAnimationFrame(openRafRef.current), []);

    useEffect(() => {
        return () => {
            if (document.body.style.position === "fixed") {
                document.documentElement.classList.remove("services-open");
                unlockBodyScroll();
            }
        };
    }, []);

  // ── Render ─────────────────────────────────────────────────────────────
  return (
    <section className="services nav-dark-zone" ref={sectionRef} id="services">
      <ServicesHeader
        titleRef={titleRef}
        counterRef={counterRef}
        currentRef={currentRef}
        total={services.length}
      />

      <ServicesTrack
        trackRef={trackRef}
        services={services}
        activeIndex={activeIndex}
        cardRefs={cardRefs}
        onCardClick={openDetail}
      />

      <ServicesProgress progressRef={progressRef} hintRef={hintRef} />

      <DetailOverlay
        detailRef={detailRef}
        portfolioRef={portfolioRef}
        detailCardRef={detailCardRef}
        closeBtnRef={closeBtnRef}
        workItemRefs={workItemRefs}
        selectedService={selectedService}
        onClose={closeDetail}
      />
    </section>
  );
}