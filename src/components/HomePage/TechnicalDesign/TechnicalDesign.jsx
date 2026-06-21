"use client";

import { useEffect, useRef, useState } from "react";
import useGSAP from "@/hooks/useGSAP";
import { TECHNICAL_DESIGN_DATA } from "@/data/TechnicalDesignData";
import BecomeClient from "@/components/BecomeClient/BecomeClient";
import BlueprintMock from "./BlueprintMock";
import SchematicMock from "./SchematicMock";
import PcbMock from "./PcbMock";
import styles from "./TechnicalDesign.module.css";

const MOCKS = {
  blueprint: BlueprintMock,
  schematic: SchematicMock,
  pcb: PcbMock,
};

export default function TechnicalDesign() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  const [isClientFormOpen, setIsClientFormOpen] = useState(false);

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

        // Чертёж "дорисовывается" при попадании в зону видимости
        const drawEls = card.querySelectorAll(`.${styles.draw}`);
        if (drawEls.length) {
          ScrollTrigger.create({
            trigger: card,
            start: "top 75%",
            once: true,
            onEnter: () => {
              drawEls.forEach((el, idx) => {
                el.style.animationDelay = `${idx * 0.05}s`;
                el.classList.add(styles.drawn);
              });
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [gsap, ScrollTrigger]);

  return (
    <>
      <section ref={sectionRef} className={`${styles.section} nav-dark-zone`} id="engineering">
        <div className={styles.inner}>

          <div ref={headerRef} className={styles.header}>
            <span className={styles.eyebrow}>Инженерия и документация</span>
            <h2 className={styles.title}>
              {"< technical design >"}
              <span className={styles.scaleBadge}>M 1:1</span>
            </h2>
            <p className={styles.intro}>
              Готовим техническую документацию для производства: чертежи
              с допусками, принципиальные схемы и разводку печатных плат.
            </p>
          </div>

          <div className={styles.grid}>
            {TECHNICAL_DESIGN_DATA.map((service, i) => {
              const Mock = MOCKS[service.visual];
              return (
                <div
                  key={service.id}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  className={styles.card}
                  style={{ "--service-color": service.color }}
                >
                  <span className={styles.cardNum}>{service.id}</span>

                  <Mock color={service.color} />

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

                    <button className={styles.cta} onClick={() => setIsClientFormOpen(true)}>
                      Обсудить проект
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <BecomeClient isOpen={isClientFormOpen} onClose={() => setIsClientFormOpen(false)} />
    </>
  );
}