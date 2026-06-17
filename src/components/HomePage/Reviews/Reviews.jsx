"use client";

import { useEffect, useRef } from "react";
import styles from "./Reviews.module.css";
import useGSAP from "@/hooks/useGSAP";

// TODO: заменить плейсхолдер-тексты на реальные отзывы клиентов
const REVIEWS = [
  {
    name: "Александр Петров",
    role: "CEO, Noir Coffee",
    text: "Кристина и команда сделали ребрендинг быстро и по делу — упаковка, сайт, соцсети в едином стиле. Видно, что дизайн работает на продажи, а не просто красиво смотрится.",
  },
  {
    name: "Мария Соколова",
    role: "Маркетинг-директор, Solara Energy",
    text: "Прозрачный процесс на каждом этапе: бриф, концепция, правки — всё в срок и без сюрпризов по бюджету. Получили сайт, которым реально гордимся.",
  },
  {
    name: "Дмитрий Волков",
    role: "Founder, Trove Platform",
    text: "Нужен был сложный дашборд с понятным UX. Бюро разобралось в продукте глубже, чем мы ожидали, и предложило решения, которые упростили работу пользователям.",
  },
];

export default function Reviews() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

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

      cardsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
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
    <section ref={sectionRef} className={styles.section} id="reviews">
      <div className={styles.inner}>
        <div ref={headerRef} className={styles.header}>
          <span className={styles.eyebrow}>Отзывы клиентов</span>
          <h2 className={styles.title}>
            Нам доверяют
            <br />
            <em>результат</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {REVIEWS.map((review, i) => (
            <div
              key={review.name}
              ref={(el) => { cardsRef.current[i] = el; }}
              className={styles.card}
            >
              <span className={styles.quoteMark}>&#8220;</span>
              <p className={styles.text}>{review.text}</p>
              <div className={styles.footer}>
                <div className={styles.avatar}>
                  {review.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <span className={styles.name}>{review.name}</span>
                  <span className={styles.role}>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}