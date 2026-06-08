"use client";

import { useEffect, useRef } from "react";
import styles from "./AboutSection.module.css";
import useGSAP from "@/hooks/useGSAP";

const services = [
  {
    title: "БРЕНДИНГ И ГРАФИКА",
    desc: "Логотипы, брендбуки, упаковка, мерч и полная айдентика, которую запоминают.",
    tags: ["Figma", "Illustrator", "After Effects", "Branding"],
    bgColor: "#f8f5f0",
  },
  {
    title: "ВЕБ И DIGITAL",
    desc: "Современные сайты и цифровые продукты на чистом коде. Без шаблонов и компромиссов.",
    tags: ["React", "Next.js", "TypeScript", "Framer Motion"],
    bgColor: "#f0f4ff",
  },
  {
    title: "3D-ДИЗАЙН",
    desc: "Визуализация, 3D-моделинг, моушн и AR/VR решения. Объём, который продаёт.",
    tags: ["Blender", "Cinema 4D", "Spline", "Three.js"],
    bgColor: "#f5f0f8",
  },
];

const stats = [
  { num: "5+", label: "лет в дизайне" },
  { num: "80+", label: "проектов" },
  { num: "3", label: "дисциплины" },
  { num: "100%", label: "на чистом коде" },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);

  const heroEyebrowRef = useRef(null);
  const heroLine1Ref = useRef(null);
  const heroLine2Ref = useRef(null);
  const heroSubRef = useRef(null);
  const heroBtnRef = useRef(null);
  const heroRulerRef = useRef(null);
  const heroIndexRef = useRef(null);

  const servIntroRef = useRef(null);
  const servCardsRef = useRef([]);
  const statsRefs = useRef([]);

  const { gsap, ScrollTrigger } = useGSAP();

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return;

    const ctx = gsap.context(() => {
      const heroTL = gsap.timeline({
        scrollTrigger: { trigger: heroRef.current, start: "top 78%", toggleActions: "play none none reverse" },
        defaults: { ease: "power4.out" },
      });

      heroTL
        .fromTo(heroEyebrowRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 })
        .fromTo(heroLine1Ref.current, { y: "110%", opacity: 0 }, { y: "0%", opacity: 1, duration: 1.15 }, "-=0.5")
        .fromTo(heroLine2Ref.current, { y: "110%", opacity: 0 }, { y: "0%", opacity: 1, duration: 1.15 }, "-=0.85")
        .fromTo(heroSubRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.95 }, "-=0.65")
        .fromTo(heroBtnRef.current, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.85 }, "-=0.55")
        .fromTo(heroRulerRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1.8, ease: "expo.out" }, "-=1.1")
        .fromTo(heroIndexRef.current, { opacity: 0 }, { opacity: 1, duration: 2 }, "-=1.3");

      statsRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.9, delay: i * 0.08,
          scrollTrigger: { trigger: heroRef.current, start: "top 65%", toggleActions: "play none none reverse" }
        });
      });

      gsap.fromTo(servIntroRef.current, { opacity: 0, y: 35 }, {
        opacity: 1, y: 0, duration: 1.1,
        scrollTrigger: { trigger: heroRef.current, start: "top 60%" }
      });

      servCardsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el, { opacity: 0, y: 60 }, {
          opacity: 1, y: 0, duration: 1.05, delay: i * 0.1,
          scrollTrigger: { trigger: heroRef.current, start: "top 58%" }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [gsap, ScrollTrigger]);

  return (
    <section ref={sectionRef} className={styles.about} id="studio">
      <div ref={heroRef} className={styles.hero}>

        <div className={styles.heroLayout}>
          {/* Левая колонка */}
          <div className={styles.heroLeft}>
            <span ref={heroEyebrowRef} className={styles.heroEyebrow}>— О нас</span>

            <div className={styles.heroPerspective}>
              <h1 className={styles.heroTitle}>
                <div className={styles.heroClip}>
                  <span ref={heroLine1Ref} className={styles.heroTitleLine}>Мы стремимся к инновациям.</span>
                </div>
              </h1>
            </div>

            <p ref={heroSubRef} className={styles.heroSub}>
              Создаём визуальные системы, которые работают во всех измерениях —<br />
              от брендинга и кода до объёмного 3D.
            </p>

            <a ref={heroBtnRef} href="#contact" className={styles.heroBtn}>
              Начать проект
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <div className={styles.statsGrid}>
              {stats.map((stat, i) => (
                <div key={i} ref={el => statsRefs.current[i] = el} className={styles.statCard}>
                  <div className={styles.statNum}>{stat.num}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Правая колонка — услуги */}
          <div className={styles.heroRight}>
            <div className={styles.servicesBlock}>
              <div className={styles.servTop}>
                <div className={styles.sectionLabel}>— Что мы делаем</div>
                <p ref={servIntroRef} className={styles.servIntro}>
                  Три направления, в которых мы создаём выдающийся результат
                </p>
              </div>

              {/* <div className={styles.servGrid}>
                {services.map((service, i) => (
                  <div
                    key={i}
                    ref={el => { servCardsRef.current[i] = el; }}
                    className={styles.servCard}
                    style={{ backgroundColor: service.bgColor }}
                  >
                    <h3 className={styles.servCardTitle}>{service.title}</h3>
                    <p className={styles.servCardDesc}>{service.desc}</p>

                    <div className={styles.servCardDivider} />

                    <div className={styles.servCardTags}>
                      {service.tags.map((tag, idx) => (
                        <span key={idx} className={styles.servTag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}