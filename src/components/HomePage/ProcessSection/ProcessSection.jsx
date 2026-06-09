"use client";

import { useEffect, useRef } from "react";
import styles from "./ProcessSection.module.css";
import useGSAP from "@/hooks/useGSAP";

const processSteps = [
  {
    number: "01",
    title: "Брифинг",
    desc: "Изучаем задачу, фиксируем цели проекта, сроки и объём работ."
  },
  {
    number: "02",
    title: "Концепция",
    desc: "Создаём визуальную систему проекта и определяем направление дизайна."
  },
  {
    number: "03",
    title: "Презентация",
    desc: "Показываем решение, обсуждаем детали и собираем обратную связь."
  },
  {
    number: "04",
    title: "Производство",
    desc: "Готовим финальные материалы, адаптации и все необходимые файлы."
  },
  {
    number: "05",
    title: "Запуск",
    desc: "Передаём проект, сопровождаем внедрение и закрываем задачу."
  }
];

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const { gsap, ScrollTrigger } = useGSAP();

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 120
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [gsap, ScrollTrigger]);

  return (
    <section ref={sectionRef} className={styles.process}>
  <div className={styles.container}>
    <div className={styles.layout}>

      <div className={styles.left}>
        <span className={styles.eyebrow}>
          — Как мы работаем
        </span>

        <h2 className={styles.title}>
          Процесс
          <br />
          работы
        </h2>

        <p className={styles.subtitle}>
          От первого сообщения до передачи файлов.
          Каждый этап прозрачен и контролируется.
        </p>
      </div>

      <div className={styles.right}>
        {processSteps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={styles.step}
          >
            <div className={styles.stepNumber}>
              {step.number}
            </div>

            <div className={styles.stepContent}>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>
  );
}