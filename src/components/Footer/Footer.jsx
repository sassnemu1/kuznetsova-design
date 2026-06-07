"use client";

import { useEffect, useRef } from "react";
import styles from "./Footer.module.css";
import useGSAP from "@/hooks/useGSAP";
import {
  FaInstagram,
  FaBehance,
  FaDribbble,
  FaTelegramPlane,
  FaVk,
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function Footer() {
  const footerRef = useRef(null);
  const titleLettersRef = useRef([]);
  const designRef = useRef(null);
  const taglineRef = useRef(null);
  const linksRef = useRef(null);
  const socialRef = useRef(null);
  const copyrightRef = useRef(null);

  const { gsap, ScrollTrigger } = useGSAP();

  useEffect(() => {
    if (!gsap) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl
        .fromTo(
          titleLettersRef.current,
          { y: 80, opacity: 0, rotateX: -40 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.035,
            duration: 1.1,
            ease: "power4.out",
          }
        )
        .fromTo(
          designRef.current,
          { y: 60, opacity: 0, scale: 0.85 },
          { y: 0, opacity: 1, scale: 1, duration: 1, ease: "expo.out" },
          "-=0.9"
        )
        .fromTo(
          taglineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=1.1"
        )
        .fromTo(
          [linksRef.current, socialRef.current],
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
          "-=1.2"
        )
        .fromTo(
          copyrightRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          "-=1.2"
        );
    }, footerRef);

    return () => ctx.revert();
  }, [gsap]);

  const kuznetsova = "Kuznetsova".split("");

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div className={styles.container}>
        {/* Большой центральный тайтл */}
        <div className={styles.titleSection}>
          <div className={styles.titlePerspective}>
            <div>
            <div className={styles.titleTop}>
              {kuznetsova.map((char, i) => (
                <span
                  key={i}
                  className={styles.letter}
                  ref={(el) => (titleLettersRef.current[i] = el)}
                >
                  {char}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.titleBottom} ref={designRef}>
            <span className={styles.designText}>DESIGN.</span>
          </div>
          </div>

          <p className={styles.tagline} ref={taglineRef}>
            Visual systems · Brand identity · Digital experiences
          </p>
        </div>

        {/* Контент футера */}
        <div className={styles.footerContent}>
          <div className={styles.footerLinks} ref={linksRef}>
            <div>
              <h4>Navigation</h4>
              <a href="#work">Work</a>
              <a href="#studio">Studio</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </div>

            <div>
              <h4>Studio</h4>
              <a href="#">About</a>
              <a href="#">Journal</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
            </div>

            <div>
              <h4>Contact</h4>
              <a href="mailto:hello@kuznetsova.design">hello@kuznetsova.design</a>
              <a href="#">Moscow, Russia</a>
            </div>
          </div>

          {/* Социальные сети */}
          <div className={styles.socialWrapper} ref={socialRef}>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Behance"><FaBehance /></a>
              <a href="#" aria-label="Dribbble"><FaDribbble /></a>
              <a href="#" aria-label="Telegram"><FaTelegramPlane /></a>
              <a href="#" aria-label="VK"><FaVk /></a>
              <a href="mailto:hello@kuznetsova.design" aria-label="Email">
                <MdOutlineMail />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright} ref={copyrightRef}>
          <p>© {new Date().getFullYear()} Kuznetsova Design. All rights reserved.</p>
          <p className={styles.legal}>Privacy • Legal</p>
        </div>
      </div>
    </footer>
  );
}