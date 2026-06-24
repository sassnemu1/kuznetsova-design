"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import useGSAP from "@/hooks/useGSAP";
import styles from "./WorkHero.module.css";
import RunningText from "@/components/UI/RunningText/RunningText";

const STATS = [
  { num: "20+", label: "проектов" },
  { num: "5", label: "направлений" },
  { num: "5+", label: "лет в дизайне" },
];

export default function WorkHero() {
  const sectionRef = useRef(null);
  const topBarRef = useRef(null);
  const titleRef = useRef(null);
  const dividerRef = useRef(null);
  const bottomRef = useRef(null);

  const { gsap } = useGSAP();

  useEffect(() => {
    if (!gsap) return;

    const ctx = gsap.context(() => {
      gsap.set(topBarRef.current, { opacity: 0, y: -24 });
      gsap.set(titleRef.current, { y: "105%", opacity: 0 });
      gsap.set(dividerRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(bottomRef.current, { opacity: 0, y: 18 });

      gsap.timeline({ defaults: { ease: "power4.out" } })
        .to(topBarRef.current, { opacity: 1, y: 0, duration: 0.9 })
        .to(titleRef.current, { y: "0%", opacity: 1, duration: 1.15 }, "-=0.45")
        .to(dividerRef.current, { scaleX: 1, duration: 1.3, ease: "expo.inOut" }, "-=1.45")
        .to(bottomRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=1.45");
    }, sectionRef);

    return () => ctx.revert();
  }, [gsap]);

  return (
    <section ref={sectionRef} className={`${styles.hero} nav-dark-zone`}>
      <RunningText rows={["Work", "Portfolio", "Kuznetsova Design"]} />

      <div className={styles.dotGrid} />
      <div className={styles.glow} />
      <div className={styles.glow2} />
      <div className={styles.glow3} />

      <div ref={topBarRef} className={styles.topBar}>
        <div className={styles.brand}>
          <div className={styles.logoMark}>
            <Image src="/logo-w.svg" alt="Kuznetsova Design" fill />
          </div>
          <span className={styles.brandName}>Kuznetsova Design</span>
        </div>

        <div className={styles.issue}>
          <span className={styles.issueDot} />
        </div>
      </div>

      <div className={styles.titleWrap}>
        <div className={styles.titleClip}>
          <h1 ref={titleRef}>Portfolio</h1>
        </div>
      </div>

      <div className={styles.bottom}>
        <div ref={dividerRef} className={styles.divider} />
        <div ref={bottomRef} className={styles.bottomContent}>
          <p className={styles.desc}>
            Избранные проекты в брендинге, вебе, 3D и арт-дирекшне
          </p>

          <div className={styles.stats}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
