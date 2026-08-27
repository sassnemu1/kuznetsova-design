"use client";

import { useEffect, useRef } from "react";
import styles from "./ProcessSection.module.css";
import useGSAP from "@/hooks/useGSAP";
import { useT } from "@/context/LanguageContext";

// Порядковые номера и ключи словаря — текст подставляется при рендере.
const STEP_KEYS = [
  {
    num: "01",
    titleKey: "process.step1.title",
    titleRu: "Брифинг",
    descKey: "process.step1.desc",
    descRu:
      "Знакомимся, фиксируем задачу письменно, согласовываем объём, бюджет и сроки. Без брифа не начинаем.",
  },
  {
    num: "02",
    titleKey: "process.step2.title",
    titleRu: "Концепция",
    descKey: "process.step2.desc",
    descRu:
      "Кристина разрабатывает визуальное решение. Внутренняя проверка перед показом клиенту.",
  },
  {
    num: "03",
    titleKey: "process.step3.title",
    titleRu: "Презентация и правки",
    descKey: "process.step3.desc",
    descRu:
      "Показываем, обсуждаем, дорабатываем. До двух раундов правок включено в договор.",
  },
  {
    num: "04",
    titleKey: "process.step4.title",
    titleRu: "Производство",
    descKey: "process.step4.desc",
    descRu:
      "Финальные файлы, вёрстка, рендеры, передача исходников. Всё, что нужно для запуска.",
  },
  {
    num: "05",
    titleKey: "process.step5.title",
    titleRu: "Сдача",
    descKey: "process.step5.desc",
    descRu:
      "Подписание акта, передача материалов, запрос обратной связи. Проект закрыт — кейс готов.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const stepsRef = useRef([]);

  const t = useT();
  const steps = STEP_KEYS;

  const { gsap, ScrollTrigger } = useGSAP();

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
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

      // Анимация строк заголовка
      if (titleRef.current) {
        const lines = titleRef.current.querySelectorAll(".heroTitleLine");
        gsap.fromTo(
          lines,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }

      // Шаги
      stepsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.08,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 72%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [gsap, ScrollTrigger]);

  return (
    <section ref={sectionRef} className={styles.section} id="howtowork">
      <div className={styles.inner}>
        <div ref={headerRef} className={styles.hero}>
          {/* Большой декоративный номер */}
          <div className={styles.heroBgIndex}>
            {t("process.bgLabel", "HOW TO WORK")}
          </div>

          <div className={styles.heroLayout}>
            {/* ЛЕВАЯ КОЛОНКА */}
            <div className={styles.heroRight}>
              <span className={styles.heroEyebrow}>
                {t("process.eyebrow", "— Как мы работаем")}
              </span>

              <h2 ref={titleRef} className={styles.heroTitle}>
                <span className="heroTitleLine">
                  {t("process.titleLine1", "Процесс")}
                </span>{" "}
                <span className="heroTitleLine heroTitleLineAccent">
                  {t("process.titleLine2", "работы")}
                </span>
              </h2>

              <p className={styles.heroSub}>
                {t("process.subLine1", "От первого сообщения до передачи файлов.")}
                <br />
                {t("process.subLine2", "Каждый этап прозрачен и контролируется.")}
              </p>
            </div>

            {/* ПРАВАЯ КОЛОНКА */}
            <div className={styles.steps}>
              {steps.map((step, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    stepsRef.current[i] = el;
                  }}
                  className={styles.step}
                >
                  <div className={styles.stepLeft}>
                    <span className={styles.stepNum}>
                      {step.num}
                    </span>

                    {i < steps.length - 1 && (
                      <div className={styles.connector} />
                    )}
                  </div>

                  <div className={styles.stepBody}>
                    <h3 className={styles.stepTitle}>
                      {t(step.titleKey, step.titleRu)}
                    </h3>

                    <p className={styles.stepDesc}>
                      {t(step.descKey, step.descRu)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}