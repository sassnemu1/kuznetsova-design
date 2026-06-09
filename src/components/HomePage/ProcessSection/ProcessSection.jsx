"use client";

import { useEffect, useRef } from "react";
import styles from "./ProcessSection.module.css";
import useGSAP from "@/hooks/useGSAP";

const steps = [
  {
    num: "01",
    title: "Брифинг",
    desc: "Знакомимся, фиксируем задачу письменно, согласовываем объём, бюджет и сроки. Без брифа не начинаем.",
  },
  {
    num: "02",
    title: "Концепция",
    desc: "Кристина разрабатывает визуальное решение. Внутренняя проверка перед показом клиенту.",
  },
  {
    num: "03",
    title: "Презентация и правки",
    desc: "Показываем, обсуждаем, дорабатываем. До двух раундов правок включено в договор.",
  },
  {
    num: "04",
    title: "Производство",
    desc: "Финальные файлы, вёрстка, рендеры, передача исходников. Всё, что нужно для запуска.",
  },
  {
    num: "05",
    title: "Сдача",
    desc: "Подписание акта, передача материалов, запрос обратной связи. Проект закрыт — кейс готов.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const stepsRef = useRef([]);

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
    <section ref={sectionRef} className={styles.section} id="process">
      <div className={styles.inner}>
        <div ref={headerRef} className={styles.hero}>
          {/* Большой декоративный номер */}
          <div className={styles.heroBgIndex}>05</div>

          <div className={styles.heroLayout}>
            {/* Шаги теперь СЛЕВА */}
            <div className={styles.steps}>
              {steps.map((step, i) => (
                <div
                  key={i}
                  ref={el => { stepsRef.current[i] = el; }}
                  className={styles.step}
                >
                  <div className={styles.stepLeft}>
                    <span className={styles.stepNum}>{step.num}</span>
                    {i < steps.length - 1 && <div className={styles.connector} />}
                  </div>

                  <div className={styles.stepBody}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Заголовок теперь СПРАВА */}
            <div className={styles.heroRight}>
              <span className={styles.heroEyebrow}>— Как мы работаем</span>
              
              <h2 ref={titleRef} className={styles.heroTitle}>
                <span className="heroTitleLine">Процесс</span>{" "}
                <span className="heroTitleLine heroTitleLineAccent">работы</span>
              </h2>

              <p className={styles.heroSub}>
                От первого сообщения до передачи файлов.<br />
                Каждый этап прозрачен и контролируется.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}