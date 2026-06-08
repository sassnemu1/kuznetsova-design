"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";

import {
  FaInstagram,
  FaBehance,
  FaDribbble,
  FaTelegramPlane,
  FaVk,
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import useGSAP from "@/hooks/useGSAP.js";

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

  // useEffect (not useLayoutEffect) — GSAP arrives async from the hook,
  // so the DOM is always ready by the time gsap/ScrollTrigger are non-null.
  useEffect(() => {
    if (!gsap || !ScrollTrigger) return;

    const ctx = gsap.context(() => {
      const hero = heroRef.current;
      if (!hero) return;

      // ── Entry animation ──────────────────────────────────────────
      const enterTL = gsap.timeline({ defaults: { ease: "power3.out" } });

      enterTL
        .fromTo(
          navRef.current,
          { y: -48, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 }
        )
        .fromTo(
          lettersRef.current,
          { y: 110, opacity: 0, rotateX: -55, filter: "blur(6px)" },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            filter: "blur(0px)",
            stagger: 0.042,
            duration: 0.85,
            ease: "power4.out",
          },
          "-=0.45"
        )
        .fromTo(
          designRef.current,
          { y: 200, scale: 1.22, opacity: 0, filter: "blur(10px)" },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.05,
            ease: "expo.out",
          },
          "-=0.45"
        )
        .fromTo(
          [socialLeftRef.current, socialRightRef.current],
          { opacity: 0, x: (i) => (i === 0 ? -36 : 36) },
          { opacity: 1, x: 0, duration: 0.9, stagger: 0.08 },
          "-=0.65"
        )
        .fromTo(
          bgTextRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 2.5 },
          "-=1.8"
        )
        .fromTo(
          taglineRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=1.2"
        );

      // ── Scroll-out animation ─────────────────────────────────────
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
        .to(navRef.current,          { y: -80, opacity: 0, ease: "none" }, 0)
        .to(socialLeftRef.current,   { x: -70, opacity: 0, ease: "none" }, 0)
        .to(socialRightRef.current,  { x: 70,  opacity: 0, ease: "none" }, 0)
        .to(lettersRef.current,      { y: -130, opacity: 0, stagger: 0.02, ease: "none" }, 0)
        .to(designRef.current,       { y: 110, scale: 0.9, opacity: 0, ease: "none" }, 0)
        .to(taglineRef.current,      { opacity: 0, ease: "none" }, 0);
    }, heroRef);

    const t = setTimeout(() => ScrollTrigger.refresh(), 150);

    return () => {
      clearTimeout(t);
      ctx.revert();
    };
  }, [gsap, ScrollTrigger]);

  const kuznetsova = "Kuznetsova".split("");

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.bgText} ref={bgTextRef}>
        MOSCOW
      </div>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav className={styles.nav} ref={navRef}>
        <div className={styles.navLogo}>
          <div className={styles.logoMark}>
            <img src="/logo-w.svg" alt="Kuznetsova Design logo" width={60} height={60} />
          </div>
          <span className={styles.logoText}>Kuznetsova Design</span>
        </div>

        <ul className={styles.navLinks}>
          <li><a href="#work">Work</a></li>
          <li><a href="#studio">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className={styles.navContact}>
          <a href="#contact" className={styles.contactBtn}>
            Cтать клиентом ↗
          </a>
        </div>
      </nav>

      {/* ── SOCIAL LEFT ─────────────────────────────────────── */}
      <div className={styles.socialLeft} ref={socialLeftRef}>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" aria-label="Behance"><FaBehance /></a>
        <a href="#" aria-label="Dribbble"><FaDribbble /></a>
      </div>

      {/* ── SOCIAL RIGHT ────────────────────────────────────── */}
      <div className={styles.socialRight} ref={socialRightRef}>
        <a href="#" aria-label="Telegram"><FaTelegramPlane /></a>
        <a href="#" aria-label="VK"><FaVk /></a>
        <a href="mailto:hello@kuznetsova.design" aria-label="Email">
          <MdOutlineMail />
        </a>
      </div>

      {/* ── TITLE ───────────────────────────────────────────── */}
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
          Visual systems · Brand identity · Digital experiences
        </p>
      </div>
    </section>
  );
}