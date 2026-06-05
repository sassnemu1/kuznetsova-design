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

export default function HeroSection() {
  const heroRef = useRef(null);
  const bgTextRef = useRef(null);
  const titleWrapRef = useRef(null);
  const navRef = useRef(null);
  const socialLeftRef = useRef(null);
  const socialRightRef = useRef(null);
  const lettersRef = useRef([]);
  const designRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    let gsap, ScrollTrigger, Lenis, ctx;

    const init = async () => {
      const gsapModule = await import("gsap");
      gsap = gsapModule.gsap;
      const scrollTriggerModule = await import("gsap/ScrollTrigger");
      ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      const lenisModule = await import("lenis");
      Lenis = lenisModule.default;

      gsap.registerPlugin(ScrollTrigger);

      // ── Lenis smooth scroll ──
      const lenis = new Lenis({ lerp: 0.08, smooth: true });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      ctx = gsap.context(() => {
        // ── MASTER TIMELINE ──
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // 0.0s — Logo drops in from top
        tl.fromTo(
          navRef.current,
          { y: -60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 }
        );

        // 0.4s — "Kuznetsova" letters stagger in
        tl.fromTo(
          lettersRef.current,
          { y: 120, opacity: 0, rotateX: -60 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.04,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.4"
        );

        // 0.9s — "DESIGN" slams up from below with scale
        tl.fromTo(
          designRef.current,
          { y: 220, scale: 1.25, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, duration: 1.1, ease: "expo.out" },
          "-=0.5"
        );

        tl.fromTo(
          [socialLeftRef.current, socialRightRef.current],
          {
            opacity: 0,
            x: (i) => (i === 0 ? -40 : 40),
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.1,
          },
          "-=0.8"
        );

        // bg text subtle fade
        tl.fromTo(
          bgTextRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 2 },
          "-=1.5"
        );
        

        // ── MOUSE PARALLAX ──
        const hero = heroRef.current;
        const handleMouse = (e) => {
          const rect = hero.getBoundingClientRect();
          const cx = rect.width / 2;
          const cy = rect.height / 2;
          const mx = e.clientX - rect.left - cx;
          const my = e.clientY - rect.top - cy;

          gsap.to(titleWrapRef.current, {
            x: mx * 0.025,
            y: my * 0.02,
            duration: 1.2,
            ease: "power2.out",
          });
          gsap.to(bgTextRef.current, {
            x: mx * -0.012,
            y: my * -0.01,
            duration: 1.8,
            ease: "power2.out",
          });
        };

        hero.addEventListener("mousemove", handleMouse);

        // cleanup stored
        hero._cleanMouse = () => hero.removeEventListener("mousemove", handleMouse);

        // ── SCROLL: bg text slow parallax ──
        gsap.to(bgTextRef.current, {
          y: -120,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        // ── SCROLL: title fade out faster ──
        gsap.to(titleWrapRef.current, {
          y: -60,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "10% top",
            end: "50% top",
            scrub: true,
          },
        });
        
      }, heroRef);
    };
    
    init();

    return () => {
      ctx?.revert();
      heroRef.current?._cleanMouse?.();
    };
  }, []);

  const kuznetsova = "Kuznetsova".split("");

  return (
    <section className={styles.hero} ref={heroRef}>
      {/* NOISE + GRADIENT OVERLAY */}
      <div className={styles.noise} />
      <div className={styles.radial} />

      {/* BACKGROUND GHOST TEXT */}
      <div className={styles.bgText} ref={bgTextRef}>
        MOSCOW
      </div>

      {/* NAV */}
      <nav className={styles.nav} ref={navRef}>
        <div className={styles.navLogo}>
          {/* <span className={styles.logoMark}>K</span> */}
          <div className={styles.logoMark}>
            <img src="logo-w.svg" alt="logo" />
          </div>
          <span className={styles.logoText}>Kuznetsova Design</span>
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#">Work</a></li>
          <li><a href="#">Studio</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className={styles.navContact}>
          <a href="#" className={styles.contactBtn}>Get in touch ↗</a>
        </div>
      </nav>

      {/* LEFT SOCIALS */}
      <div className={styles.socialLeft} ref={socialLeftRef}>
        <a href="#" aria-label="Instagram">
          <FaInstagram />
        </a>

        <a href="#" aria-label="Behance">
          <FaBehance />
        </a>

        <a href="#" aria-label="Dribbble">
          <FaDribbble />
        </a>
      </div>

      {/* RIGHT CONTACTS */}
      <div className={styles.socialRight} ref={socialRightRef}>
        <a href="#" aria-label="Telegram">
          <FaTelegramPlane />
        </a>

        <a href="#" aria-label="VK">
          <FaVk />
        </a>

        <a href="mailto:hello@kuznetsova.design" aria-label="Email">
          <MdOutlineMail />
        </a>
      </div>

      {/* CENTER TITLE */}
      <div className={styles.titleWrap} ref={titleWrapRef}>
        <div className={styles.titlePerspective}>
          <div className={styles.titleTop}>
            {kuznetsova.map((char, i) => (
              <span
                key={i}
                className={styles.letter}
                ref={(el) => (lettersRef.current[i] = el)}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.titleBottom} ref={designRef}>
          <span className={styles.designText}>DESIGN.</span>
        </div>

        <p className={styles.tagline}>
          Visual systems · Brand identity · Digital experiences
        </p>
      </div>

    </section>
  );
}