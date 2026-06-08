"use client";

import { useEffect, useRef, useCallback } from "react";
import useGSAP from "@/hooks/useGSAP";

export default function ServiceDetail({
  service,
  isOpen,
  onClose,
  originCardRect,
  sectionRef,
}) {
  const detailRef = useRef(null);
  const portfolioRef = useRef(null);
  const detailCardRef = useRef(null);
  const closeBtnRef = useRef(null);
  const workItemRefs = useRef([]);

  const { gsap } = useGSAP();

  // Закрытие с анимацией
  const handleClose = useCallback(() => {
    if (!gsap || !isOpen) return;

    const detail = detailRef.current;
    const portfolio = portfolioRef.current;
    const detailCard = detailCardRef.current;
    const closeBtn = closeBtnRef.current;
    const validWorkItems = workItemRefs.current.filter(Boolean);

    const sectionRect = sectionRef.current?.getBoundingClientRect();
    const origin = originCardRect;
    const flipTop = origin && sectionRect ? origin.top - sectionRect.top : "50%";
    const flipLeft = origin && sectionRect ? origin.left - sectionRect.left : "50%";
    const flipW = origin ? origin.width : 400;
    const flipH = origin ? origin.height : 460;

    const tl = gsap.timeline({
      defaults: { ease: "expo.inOut" },
      onComplete: onClose,
    });

    tl
      .to(validWorkItems, { opacity: 0, x: -28, stagger: 0.03, duration: 0.28 }, 0)
      .to(closeBtn, { opacity: 0, y: -14, duration: 0.22 }, 0)
      .to(portfolio, { opacity: 0, x: -48, duration: 0.35 }, 0.04)
      .to(detailCard, {
        top: flipTop,
        left: flipLeft,
        width: flipW,
        height: flipH,
        borderRadius: 24,
        duration: 0.72,
      }, 0.08)
      .to(detail, { opacity: 0, duration: 0.3 }, 0.5);
  }, [gsap, isOpen, onClose, originCardRect, sectionRef]);

  // Открытие с анимацией
  useEffect(() => {
    if (!gsap || !isOpen || !service || !originCardRect) return;

    const detail = detailRef.current;
    const portfolio = portfolioRef.current;
    const detailCard = detailCardRef.current;
    const closeBtn = closeBtnRef.current;

    gsap.set(detail, { display: "flex", opacity: 0 });

    gsap.set(detailCard, {
      position: "absolute",
      top: originCardRect.top,
      left: originCardRect.left,
      width: originCardRect.width,
      height: originCardRect.height,
      borderRadius: 24,
      opacity: 1,
    });

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl
      .to(detail, { opacity: 1, duration: 0.3 }, 0.08)
      .to(detailCard, {
        top: 0,
        left: "50%",
        width: "50%",
        height: "100%",
        borderRadius: 0,
        duration: 0.8,
        ease: "expo.inOut",
      }, 0.12)
      .to(portfolio, { opacity: 1, x: 0, duration: 0.65 }, 0.45)
      .to(closeBtn, { opacity: 1, y: 0, duration: 0.4 }, 0.5)
      .to(workItemRefs.current.filter(Boolean), {
        opacity: 1,
        x: 0,
        stagger: 0.065,
        duration: 0.55,
      }, 0.58);
  }, [gsap, isOpen, service, originCardRect]);

  if (!isOpen || !service) return null;

  return (
    <div className="services__detail" ref={detailRef}>
      {/* Левая панель */}
      <div className="detail__portfolio" ref={portfolioRef}>
        <div className="detail__portfolio-header">
          <button
            className="detail__close"
            ref={closeBtnRef}
            onClick={handleClose}
            aria-label="Close"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M13.5 4.5l-9 9M4.5 4.5l9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="detail__portfolio-meta">
            <span className="detail__portfolio-tag">{service.tag}</span>
            <h3 className="detail__portfolio-title">
              {service.title.replace("\n", " ")}
            </h3>
            <p className="detail__portfolio-sub">{service.desc}</p>
          </div>
        </div>

        <div className="detail__work-list">
          {service.works.map((work, i) => (
            <div
              className="detail__work-item"
              key={`${service.id}-${i}`}
              ref={(el) => (workItemRefs.current[i] = el)}
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

      {/* Правая панель */}
      <div className="detail__card" ref={detailCardRef} style={{ "--card-color": service.color }}>
        <div className="detail__card-bg-img" style={{ backgroundImage: `url(${service.image})` }} />
        
        <div className="serviceCard__top">
          <span className="serviceCard__id">{service.id}</span>
          <span className="serviceCard__tag">{service.tag}</span>
        </div>

        <div className="serviceCard__bg-num" style={{ fontSize: "14rem", opacity: 0.05 }}>
          {service.id}
        </div>

        <div className="serviceCard__line" style={{ transform: "scaleX(1)" }} />

        <div className="serviceCard__content">
          <h3 className="serviceCard__title" style={{ fontSize: "3rem" }}>
            {service.title.split("\n").map((line, i) => (
              <span key={i} style={{ display: "block" }}>{line}</span>
            ))}
          </h3>
          <p className="serviceCard__desc" style={{ fontSize: "1rem", maxWidth: "none" }}>
            {service.desc}
          </p>
        </div>
      </div>
    </div>
  );
}