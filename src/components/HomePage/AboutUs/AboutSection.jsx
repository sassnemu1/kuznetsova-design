"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./AboutSection.module.css";

import {
  FaInstagram,
  FaBehance,
  FaDribbble,
  FaPinterest,
  FaTelegramPlane,
  FaVk,
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

import useGSAP from "@/hooks/useGSAP";
import BecomeClient from "@/components/BecomeClient/BecomeClient";

const services = [
  {
    num: "01",
    title: "БРЕНДИНГ И ГРАФИКА",
    desc: "Логотипы, брендбуки, упаковка, мерч и полная айдентика, которую запоминают.",
    tags: ["Figma", "Illustrator", "After Effects", "Branding"],
    bgColor: "#f8f5f0",
    image: "/design-solutions.webp",
  },
  {
    num: "02",
    title: "WEB & DIGITAL",
    desc: "Современные сайты и цифровые продукты на чистом коде. Без шаблонов и компромиссов.",
    tags: ["React", "Next.js", "TypeScript", "Framer Motion"],
    bgColor: "#f0f4ff",
    image: "/web-dev.webp",
  },
  {
    num: "03",
    title: "3D-DESIGN",
    desc: "Визуализация, 3D-моделинг, моушн и AR/VR решения. Объём, который продаёт.",
    tags: ["Blender", "Cinema 4D", "Spline", "Three.js"],
    bgColor: "#f5f0f8",
    image: "/mob-dev.webp",
  },
];

const stats = [
  { num: "5+", label: "лет в дизайне" },
  { num: "80+", label: "проектов" },
  { num: "3", label: "дисциплины" },
  { num: "100%", label: "на чистом коде" },
];

const story = [
  {
    name: "Кристина Кузнецова",
    role: "Основатель · Арт-директор",
    text: "Дизайнер, который не признаёт границ между дисциплинами. Графический дизайн, веб-разработка, 3D-визуализация — для неё это не разные профессии, а один инструментарий. Бюро создано, чтобы доказывать это проектами.",
  },
  {
    name: "Ярослав Киселев",
    role: "CEO · Финансовый директор",
    text: "Он отвечает за то, чтобы каждый проект имел чёткий план, бюджет и дедлайн. Чтобы клиент получал результат, а не оправдания.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const storyRef = useRef(null);

  const heroEyebrowRef = useRef(null);
  const heroLine1Ref = useRef(null);
  const heroSubRef = useRef(null);
  const heroBtnRef = useRef(null);

  const servIntroRef = useRef(null);
  const servCardsRef = useRef([]);
  const statsRefs = useRef([]);
  const storyItemRefs = useRef([]);
  const storyHeadlineRef = useRef(null);
  const storyClosingRef = useRef(null);
  const storyQuoteRef = useRef(null);
  const storyStatsRef = useRef(null);

  const [isClientFormOpen, setIsClientFormOpen] = useState(false);

  const { gsap, ScrollTrigger } = useGSAP();

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return;

    const ctx = gsap.context(() => {

      // ─── Hover: параллакс фона карточки ──────────────────────────────
      servCardsRef.current.forEach((card) => {
        if (!card) return;
        const bg = card.querySelector(`.${styles.servCardBg}`);
        if (!bg) return;

        const onEnter = () => gsap.to(bg, { scale: 1.07, y: -10, duration: 0.85, ease: "power2.out" });
        const onLeave = () => gsap.to(bg, { scale: 1, y: 0, duration: 0.8, ease: "power2.out" });

        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);
        card._hoverHandlers = { onEnter, onLeave };
      });

      // ─── Hero enter-анимации ──────────────────────────────────────────
      const heroTL = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power4.out" },
      });

      heroTL
        .fromTo(heroEyebrowRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 })
        .fromTo(heroLine1Ref.current, { y: "110%", opacity: 0 }, { y: "0%", opacity: 1, duration: 1.15 }, "-=0.5")
        .fromTo(heroSubRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.95 }, "-=0.65")
        .fromTo(heroBtnRef.current, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.85 }, "-=0.55");

      // Stats
      statsRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.8, delay: i * 0.07,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Intro правой колонки
      gsap.fromTo(servIntroRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 1.0,
        scrollTrigger: {
          trigger: servIntroRef.current,
          start: "top 84%",
        },
      });

      // ─── Карточки услуг ───────────────────────────────────────────────
      servCardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.set(card, { opacity: 0, y: 48 });
        ScrollTrigger.create({
          trigger: card,
          start: "top 84%",
          end: "bottom 10%",
          onEnter: () => gsap.to(card, { opacity: 1, y: 0, duration: 0.85, ease: "power3.out" }),
          onLeaveBack: () => gsap.to(card, { opacity: 0, y: 48, duration: 0.4, ease: "power2.in" }),
        });
      });

      // ─── Story section ────────────────────────────────────────────────
      if (storyHeadlineRef.current) {
        gsap.fromTo(storyHeadlineRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 1.1, ease: "power4.out",
            scrollTrigger: { trigger: storyHeadlineRef.current, start: "top 82%" },
          }
        );
      }

      storyItemRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.85, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 86%" },
            delay: i * 0.1,
          }
        );
      });

      if (storyClosingRef.current) {
        gsap.fromTo(storyClosingRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 1.0, ease: "power3.out",
            scrollTrigger: { trigger: storyClosingRef.current, start: "top 88%" },
          }
        );
      }

      // Right column — quote & stats
      if (storyQuoteRef.current) {
        gsap.fromTo(storyQuoteRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 1.1, ease: "power3.out",
            scrollTrigger: { trigger: storyRef.current, start: "top 75%" },
          }
        );
      }

      if (storyStatsRef.current) {
        gsap.fromTo(storyStatsRef.current,
          { opacity: 0, y: 32 },
          {
            opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: storyRef.current, start: "top 70%" },
            delay: 0.15,
          }
        );
      }

    }, sectionRef);

    return () => {
      servCardsRef.current.forEach((card) => {
        if (card?._hoverHandlers) {
          const { onEnter, onLeave } = card._hoverHandlers;
          card.removeEventListener("mouseenter", onEnter);
          card.removeEventListener("mouseleave", onLeave);
          delete card._hoverHandlers;
        }
      });
      ctx.revert();
    };
  }, [gsap, ScrollTrigger]);

  return (
    <>
      <section ref={sectionRef} className={styles.about} id="services">

        {/* ════════════ HERO ════════════ */}
        <div ref={heroRef} className={styles.hero}>
          <div className={styles.heroLayout}>

            {/* ── Левая колонка — sticky ── */}
            <div className={styles.heroLeft}>
              <span ref={heroEyebrowRef} className={styles.heroEyebrow}>О нас</span>

              <h1 className={styles.heroTitle}>
                <div className={styles.heroClip}>
                  <span ref={heroLine1Ref} className={styles.heroTitleLine}>
                    Мы стремимся к инновациям.
                  </span>
                </div>
              </h1>

              <p ref={heroSubRef} className={styles.heroSub}>
                Создаём визуальные системы, которые работают во всех измерениях —
                от брендинга и кода до объёмного 3D.
              </p>

              <button
                ref={heroBtnRef}
                className={styles.heroBtn}
                onClick={() => setIsClientFormOpen(true)}
              >
                Начать проект
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className={styles.statsGrid}>
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    ref={(el) => { statsRefs.current[i] = el; }}
                    className={styles.statCard}
                  >
                    <div className={styles.statNum}>{stat.num}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Правая колонка — карточки ── */}
            <div className={styles.heroRight}>
              <div className={styles.servicesBlock}>
                <div className={styles.servTop}>
                  <div className={styles.sectionLabel}>Что мы делаем</div>
                  <p ref={servIntroRef} className={styles.servIntro}>
                    Три направления, в которых мы создаём выдающийся результат
                  </p>
                </div>

                <div className={styles.servGrid}>
                  {services.map((service, i) => (
                    <div
                      key={i}
                      ref={(el) => { servCardsRef.current[i] = el; }}
                      className={styles.servCard}
                      style={{ backgroundColor: service.bgColor }}
                    >
                      <div
                        className={styles.servCardBg}
                        style={{ backgroundImage: `url(${service.image})` }}
                      />
                      <div className={styles.servCardContent}>
                        <span className={styles.servCardNum}>{service.num}</span>
                        <h3 className={styles.servCardTitle}>{service.title}</h3>
                        <p className={styles.servCardDesc}>{service.desc}</p>
                        <div className={styles.servCardDivider} />
                        <div className={styles.servCardTags}>
                          {service.tags.map((tag, idx) => (
                            <span key={idx} className={styles.servTag}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ════════════ ИСТОРИЯ БРЕНДА ════════════ */}
        <div ref={storyRef} className={styles.story} id="contact">
          <div className={styles.storyInner}>

            {/* Левая колонка — заголовок + биографии */}
            <div className={styles.storyLeft}>
              <div>
                <span className={styles.storyEyebrow}>История бренда</span>
                <h2 ref={storyHeadlineRef} className={styles.storyHeadline}>
                  Одно имя.
                  <br />
                  Все виды дизайна.
                </h2>
              </div>

              <div className={styles.storyItems}>
                {story.map((item, i) => (
                  <div
                    key={i}
                    ref={(el) => { storyItemRefs.current[i] = el; }}
                    className={styles.storyItem}
                  >
                    <div className={styles.storyMeta}>
                      <span className={styles.storyName}>{item.name}</span>
                      <span className={styles.storyRole}>{item.role}</span>
                    </div>
                    <p className={styles.storyText}>{item.text}</p>
                  </div>
                ))}
              </div>

              <p ref={storyClosingRef} className={styles.storyClosing}>
                Вместе мы строим студию, где дизайн уважают как бизнес&#8209;инструмент,
                а не как украшение.
              </p>
            </div>

            {/* Правая колонка — цитата + мини-статы (sticky) */}
            <div className={styles.storyRight}>
             <div className={styles.storyQuote}>
                <div className={styles.storyQuoteOverlay} />

                <p className={styles.storyQuoteText}>
                  Дизайн — это не то, как вещь выглядит. Это то, как она работает.
                </p>

                <span className={styles.storyQuoteAuthor}>
                  Принцип студии
                </span>

                <div className={styles.storyContacts}>
                    <span className={styles.storyContactsTitle}>
                      Наши контакты
                    </span>

                    <a
                      href="mailto:kristina@kuznetsova.design"
                      className={styles.storyContactItem}
                    >
                      <span className={styles.storyContactLabel}>Email Кристины Кузнецовой</span>
                      <span className={styles.storyContactValue}>
                        kristina@kuznetsova.design
                      </span>
                    </a>
                    <a
                      href="mailto:kiselev@kuznetsova.design"
                      className={styles.storyContactItem}
                    >
                      <span className={styles.storyContactLabel}>Email Ярослава Киселева</span>
                      <span className={styles.storyContactValue}>
                        kiselev@kuznetsova.design
                      </span>
                    </a>

                    <a
                      href="tel:+79991112233"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.storyContactItem}
                    >
                      <span className={styles.storyContactLabel}>НОМЕР ТЕЛЕФОНА</span>
                      <span className={styles.storyContactValue}>
                        +7 (999) 111 22-33
                      </span>
                    </a>

                    <div className={styles.storySocials}>
                        <a href="https://www.instagram.com/kuznetsovade.sign?igsh=enVnMGd0emM2YjBx&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://www.behance.net/kristinkuznets17" target="_blank" rel="noopener noreferrer"><FaBehance /></a>
                        <a href="#"><FaDribbble /></a>
                        <a href="https://pin.it/sMiIQLlD7" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
                        <a href="https://t.me/kuznetsova_design1" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
                        <a href="https://vk.ru/club239423173" target="_blank" rel="noopener noreferrer"><FaVk /></a>
                        {/* <a href="mailto:kristina@kuznetsova.design"><MdOutlineMail /></a> */}
                    </div>
                </div>
              </div>
              {/* <span className={styles.storyContactTitle}>
                Контакты
              </span> */}
            </div>
          </div>
        </div>

      </section>

      <BecomeClient
        isOpen={isClientFormOpen}
        onClose={() => setIsClientFormOpen(false)}
      />
    </>
  );
}