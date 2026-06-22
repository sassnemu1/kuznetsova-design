"use client";

import { useEffect, useRef } from "react";
import useGSAP from "@/hooks/useGSAP";
import styles from "./BlogHero.module.css";
import RunningText from "@/components/UI/RunningText/RunningText";

export default function BlogHero() {
  const sectionRef = useRef(null);
  const topBarRef = useRef(null);
  const lettersRef = useRef([]);
  const dividerRef = useRef(null);
  const bottomRef = useRef(null);

  const { gsap } = useGSAP();

  useEffect(() => {
    if (!gsap) return;

    const ctx = gsap.context(() => {
      gsap.set(topBarRef.current, { opacity: 0, y: -24 });
      gsap.set(lettersRef.current, { y: "105%", opacity: 0 });
      gsap.set(dividerRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(bottomRef.current, { opacity: 0, y: 18 });

      gsap.timeline({ defaults: { ease: "power4.out" } })
        .to(topBarRef.current, { opacity: 1, y: 0, duration: 0.9 })
        .to(
          lettersRef.current,
          { y: "0%", opacity: 1, stagger: 0.055, duration: 1.15 },
          "-=0.45"
        )
        .to(dividerRef.current, { scaleX: 1, duration: 1.3, ease: "expo.inOut" }, "-=1.45")
        .to(bottomRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=1.45");
    }, sectionRef);

    return () => ctx.revert();
  }, [gsap]);

  return (
    <section ref={sectionRef} className={`${styles.hero} nav-dark-zone`}>
      <RunningText rows={["Blog", "News", "Kuznetsova Design"]}/>
      {/* Точечная сетка */}
      <div className={styles.dotGrid} />
      {/* Глоу */}
      <div className={styles.glow} />
      <div className={styles.glow2} />
      <div className={styles.glow3} />

      {/* Верхняя плашка */}
      <div ref={topBarRef} className={styles.topBar}>
        <div className={styles.brand}>
          <div className={styles.logoMark}>
            <img src="/logo-w.svg" alt="Kuznetsova Design" width={52} height={52} />
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandName}>Kuznetsova Design</span>
            {/* <span className={styles.brandSub}>Дизайн-бюро · Москва</span> */}
          </div>
        </div>

        <div className={styles.issue}>
          <span className={styles.issueDot} />
        </div>
      </div>

      {/* Заголовок */}
      <div className={styles.titleWrap}>
        
        <div className={styles.titleClip}>
            <h2>Blog & News </h2>
        </div>
      </div>

      {/* Нижняя часть */}
      <div className={styles.bottom}>
        <div ref={dividerRef} className={styles.divider} />
        <div ref={bottomRef} className={styles.bottomContent}>
          <p className={styles.desc}>
            Работы, события и заметки из жизни студии
          </p>
        </div>
      </div>
    </section>
  );
}