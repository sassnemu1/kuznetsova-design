"use client";

import { useEffect, useRef } from "react";
import useGSAP from "@/hooks/useGSAP";
import { MORE_SERVICES_DATA } from "@/data/MoreServicesData";
import { useBecomeClient } from "@/context/BecomeClientContext";
import ChatMock from "./ChatMock";
import NetworkMock from "./NetworkMock";
import styles from "./MoreServices.module.css";
import RunningText from "@/components/UI/RunningText/RunningText";

export default function MoreServices() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  const openClientForm = useBecomeClient();

  const { gsap, ScrollTrigger } = useGSAP();

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" },
        }
      );

      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 56 },
          {
            opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: i * 0.1,
            scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" },
          }
        );

        // Реплики чата проявляются по очереди, как будто переписка происходит на скролле
        const bubbles = card.querySelectorAll(`.${styles.bubble}`);
        if (bubbles.length) {
          gsap.fromTo(
            bubbles,
            { opacity: 0, y: 14 },
            {
              opacity: 1, y: 0, duration: 0.55, ease: "power2.out", stagger: 0.16,
              scrollTrigger: { trigger: card, start: "top 70%", toggleActions: "play none none reverse" },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [gsap, ScrollTrigger]);

  return (
      <section ref={sectionRef} className={`${styles.section} nav-dark-zone`} id="more-services">
        <RunningText rows={[
            "KUZNETSOVA DESIGN",
            "WEB DEVELOPMENT",
            "KUZNETSOVA DESIGN",
          ]}
        />

        <div className={styles.inner}>

          <div ref={headerRef} className={styles.header}>
            <span className={styles.eyebrow}>Code</span>
            <h2 className={styles.title}>
              {"{ More Development }"}
              <span className={styles.scaleBadge}>{"<Code />"}</span>
            </h2>
            <p className={styles.intro}>
              Берём задачи на стыке дизайна и технологий: автоматизируем
              процессы и встраиваем нейросети в рабочие сценарии бизнеса.
            </p>
          </div>

          <div className={styles.grid}>
            {MORE_SERVICES_DATA.map((service, i) => (
              <div
                key={service.id}
                ref={(el) => { cardRefs.current[i] = el; }}
                className={styles.card}
                style={{ "--service-color": service.color }}
              >
                <span className={styles.cardNum}>{service.id}</span>

                {service.visual === "chat" ? (
                  <ChatMock messages={service.chat} color={service.color} />
                ) : (
                  <NetworkMock nodes={service.nodes} color={service.color} />
                )}

                <div className={styles.content}>
                  <span className={styles.tag}>{service.tag}</span>

                  <h3 className={styles.cardTitle}>
                    {service.title.split("\n").map((line, li) => (
                      <span key={li} style={{ display: "block" }}>{line}</span>
                    ))}
                  </h3>

                  <p className={styles.cardDesc}>{service.desc}</p>

                  <div className={styles.tagsRow}>
                    {service.tags.map((t) => (
                      <span key={t} className={styles.chip}>{t}</span>
                    ))}
                  </div>

                  <button className={styles.cta} onClick={openClientForm}>
                    Обсудить проект
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
  );
}