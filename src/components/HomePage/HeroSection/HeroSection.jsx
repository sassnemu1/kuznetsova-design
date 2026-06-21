"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";

import useGSAP from "@/hooks/useGSAP.js";

import {
  FaInstagram,
  FaBehance,
  FaDribbble,
  FaPinterest,
  FaTelegramPlane,
  FaVk,
} from "react-icons/fa";

export default function HeroSection() {
  const heroRef = useRef(null);
  const bgTextRef = useRef(null);
  const navRef = useRef(null);
  const socialLeftRef = useRef(null);
  const socialRightRef = useRef(null);
  const lettersRef = useRef([]);
  const designRef = useRef(null);
  const taglineRef = useRef(null);

  const { gsap, ScrollTrigger } = useGSAP();
  const scrollTriggerRef = useRef(null);
  const introPlayedRef = useRef(false);

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return;

    const ctx = gsap.context(() => {
      const hero = heroRef.current;
      if (!hero) return;

      // ── Set initial states ─────────────────────────────────────
      gsap.set(navRef.current, { y: -48, opacity: 0 });
      gsap.set(lettersRef.current, { y: 110, opacity: 0, rotateX: -55, filter: "blur(6px)" });
      gsap.set(designRef.current, { y: 200, scale: 1.22, opacity: 0, filter: "blur(10px)" });
      gsap.set([socialLeftRef.current, socialRightRef.current], { opacity: 0, x: (i) => (i === 0 ? -36 : 36) });
      gsap.set(bgTextRef.current, { opacity: 0 });
      gsap.set(taglineRef.current, { opacity: 0, y: 12 });

      const scrollY = window.scrollY;
      const shouldPlayIntro = scrollY < 100;

      // ── Create Scroll Out Animation (but don't start yet) ───────
      const createScrollTL = () => {
        if (scrollTriggerRef.current) return;

        const scrollTL = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 1.3,
            invalidateOnRefresh: true,
          },
        });

        scrollTL
          .to(navRef.current, { y: -80, opacity: 0, ease: "none" }, 0)
          .to(socialLeftRef.current, { x: -70, opacity: 0, ease: "none" }, 0)
          .to(socialRightRef.current, { x: 70, opacity: 0, ease: "none" }, 0)
          .to(lettersRef.current, { y: -130, opacity: 0, stagger: 0.02, ease: "none" }, 0)
          .to(designRef.current, { y: 110, scale: 0.9, opacity: 0, ease: "none" }, 0)
          .to(taglineRef.current, { opacity: 0, ease: "none" }, 0);

        scrollTriggerRef.current = scrollTL.scrollTrigger;
      };

      // ── Intro Animation ─────────────────────────────────────────
      if (shouldPlayIntro && !introPlayedRef.current) {
        introPlayedRef.current = true;

        const enterTL = gsap.timeline({
          defaults: { ease: "power3.out" },
          onComplete: () => {
            // Запускаем scrub-анимацию только после завершения intro
            createScrollTL();
          },
        });

        enterTL
          .fromTo(navRef.current, { y: -48, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 })
          .fromTo(
            lettersRef.current,
            { y: 110, opacity: 0, rotateX: -55, filter: "blur(6px)" },
            { y: 0, opacity: 1, rotateX: 0, filter: "blur(0px)", stagger: 0.042, duration: 0.85, ease: "power4.out" },
            "-=0.45"
          )
          .fromTo(
            designRef.current,
            { y: 200, scale: 1.22, opacity: 0, filter: "blur(10px)" },
            { y: 0, scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.05, ease: "expo.out" },
            "-=0.45"
          )
          .fromTo(
            [socialLeftRef.current, socialRightRef.current],
            { opacity: 0, x: (i) => (i === 0 ? -36 : 36) },
            { opacity: 1, x: 0, duration: 0.9, stagger: 0.08 },
            "-=0.65"
          )
          .fromTo(bgTextRef.current, { opacity: 0 }, { opacity: 1, duration: 2.5 }, "-=1.8")
          .fromTo(taglineRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=1.2");
      } else {
        // Уже проскроллено — сразу конечное состояние
        gsap.set(navRef.current, { y: 0, opacity: 1 });
        gsap.set(lettersRef.current, { y: 0, opacity: 1, rotateX: 0, filter: "blur(0px)" });
        gsap.set(designRef.current, { y: 0, scale: 1, opacity: 1, filter: "blur(0px)" });
        gsap.set([socialLeftRef.current, socialRightRef.current], { opacity: 1, x: 0 });
        gsap.set(bgTextRef.current, { opacity: 1 });
        gsap.set(taglineRef.current, { opacity: 1, y: 0 });

        createScrollTL();
      }
    }, heroRef);

    const refresh = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
    };

    refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      if (scrollTriggerRef.current) scrollTriggerRef.current.kill();
      ctx.revert();
    };
  }, [gsap, ScrollTrigger]);

  const kuznetsova = "Kuznetsova".split("");

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.bgImage} ref={bgTextRef}>
        <img src="/bg-hero2.svg" alt="bg-image" />
      </div>

      <div className={styles.bgText} ref={bgTextRef}>
        MOSCOW
      </div>

      {/* NAV */}
      <nav className={styles.nav} ref={navRef}>
        <div className={styles.navLogo}>
          <div className={styles.logoMark}>
            <img src="/logo-w.svg" alt="Kuznetsova Design logo" width={60} height={60} />
          </div>
          <span className={styles.logoText}>Kuznetsova Design</span>
        </div>

        <ul className={styles.navLinks}>
          <li><a href="#services">Services</a></li>
          <li><a href="#studio">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#howtowork">How to Work</a></li>
        </ul>
      </nav>

      {/* SOCIAL LEFT */}
      <div className={styles.socialLeft} ref={socialLeftRef}>
        <a href="https://www.behance.net/kristinkuznets17" target="_blank" rel="noopener noreferrer" aria-label="Behance"><FaBehance /></a>
        <a href="#" aria-label="Dribbble"><FaDribbble /></a>
        <a href="https://pin.it/sMiIQLlD7" target="_blank" rel="noopener noreferrer" aria-label="Pinterest"><FaPinterest /></a>
      </div>

      <div className={styles.socialRight} ref={socialRightRef}>
        <a href="https://t.me/kuznetsova_design1" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><FaTelegramPlane /></a>
        <a href="https://vk.ru/club239423173" target="_blank" rel="noopener noreferrer" aria-label="VK"><FaVk /></a>
        <a href="https://www.instagram.com/kuznetsovade.sign?igsh=enVnMGd0emM2YjBx&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
      </div>

      {/* TITLE */}
      <div className={styles.titleWrap}>
        <div className={styles.titlePerspective}>
          <div className={styles.titleTop}>
            {kuznetsova.map((char, i) => (
              <span
                key={i}
                className={styles.letter}
                ref={(el) => { lettersRef.current[i] = el; }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.titleBottom} ref={designRef}>
          <span className={styles.designText}>DESIGN.</span>
        </div>

        <p className={styles.tagline} ref={taglineRef}>
          Visual systems · Brand identity · Digital experiences · Web Development
        </p>
      </div>
    </section>
  );
}