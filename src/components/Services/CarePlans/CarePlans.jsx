"use client";

import { useEffect, useRef } from "react";
import useGSAP from "@/hooks/useGSAP";
import { CARE_PLANS } from "@/data/ProductsData";
import { useBecomeClient } from "@/context/BecomeClientContext";
import styles from "./CarePlans.module.css";

export default function CarePlans() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);
  const noteRef = useRef(null);
  const ctaRef = useRef(null);

  const openClientForm = useBecomeClient();
  const { gsap, ScrollTrigger } = useGSAP();

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return;

    const ctx = gsap.context(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const cards = cardRefs.current.filter(Boolean);

      if (reduce) {
        gsap.set([headerRef.current, noteRef.current, ctaRef.current, ...cards], {
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

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 52 },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.fromTo(
        noteRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: noteRef.current,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [gsap, ScrollTrigger]);

  return (
    <div ref={sectionRef}>
      <section className={styles.section} id="care">
        <div className={styles.inner}>
          <div ref={headerRef} className={styles.header}>
            <span className={styles.eyebrow}>Care</span>
            <h2 className={styles.title}>Подписка на сопровождение</h2>
            <p className={styles.lead}>
              Сайт живёт дольше, если за ним следят. Care — это ежемесячная работа:
              хостинг и домен, бэкапы и обновления, правки по запросу, визуалы для
              соцсетей и отчёт о позициях в поиске.
            </p>
          </div>

          <div className={styles.grid}>
            {CARE_PLANS.map((plan, i) => (
              <article
                key={plan.id}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={`${styles.card} ${plan.featured ? styles.cardFeatured : ""}`}
              >
                {plan.featured ? (
                  <span className={styles.badge}>Популярный</span>
                ) : null}

                <div className={styles.cardTop}>
                  <span className={styles.planName}>{plan.name}</span>
                  <h3 className={styles.planTitle}>{plan.ru}</h3>
                  <p className={styles.planTagline}>{plan.tagline}</p>
                </div>

                <span className={styles.cardRule} aria-hidden="true" />

                <ul className={styles.includes}>
                  {plan.includes.map((inc) => (
                    <li key={inc.en} className={styles.include}>
                      <svg
                        className={styles.check}
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.8 7.4l2.8 2.8 5.6-6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{inc.ru}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={styles.planCta}
                  onClick={openClientForm}
                  aria-label={`Обсудить подписку ${plan.name}`}
                >
                  Обсудить подписку
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
              </article>
            ))}
          </div>

          <p ref={noteRef} className={styles.note}>
            Минимальный срок подписки — 3 месяца. Стоимость называем после брифа:
            она зависит от объёма сайта и того, сколько работы берём на себя.
          </p>
        </div>
      </section>

      <section ref={ctaRef} className={`${styles.ctaBand} nav-dark-zone`}>
        <div className={styles.ctaInner}>
          <span className={styles.ctaEyebrow}>Дальше</span>

          <h2 className={styles.ctaTitle}>Расскажите, что нужно сделать</h2>

          <p className={styles.ctaText}>
            Короткий бриф — и мы вернёмся с составом работ, сроками и стоимостью.
            Если задача не из каталога, тоже напишите: скорее всего, мы её уже решали.
          </p>

          <button type="button" className={styles.ctaButton} onClick={openClientForm}>
            Начать проект
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M2.5 7h9M7.5 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <a className={styles.ctaMail} href="mailto:kristina@kuznetsova.design">
            kristina@kuznetsova.design
          </a>
        </div>
      </section>
    </div>
  );
}
