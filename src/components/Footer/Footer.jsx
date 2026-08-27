"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import useGSAP from "@/hooks/useGSAP";
import { useT } from "@/context/LanguageContext";
import {
  FaInstagram,
  FaBehance,
  FaPinterest,
  FaTelegramPlane,
  FaVk,
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function Footer() {
  const t = useT();
  const footerRef = useRef(null);
  const titleLettersRef = useRef([]);
  const designRef = useRef(null);
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

            <div className={styles.FooterLogoSection}>
              <Link
                href="/"
                className={styles.FooterLogoMark}
                aria-label={t("common.home", "На главную")}
              >
                <Image src="/logo-w.svg" alt="Kuznetsova Design logo" fill />
              </Link>
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
              

                <div className={styles.titleBottom} ref={designRef}>
                  <span className={styles.designText}>DESIGN.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Контент футера */}
        <div className={styles.footerContent}>

          <div className={styles.footerLinks} ref={linksRef}>
            <div>
              <h4>{t("footer.navigation", "Navigation")}</h4>
              <Link href="/work">{t("footer.work", "Work")}</Link>
              <Link href="/#studio">{t("footer.studioLink", "Studio")}</Link>
              <Link href="/#services">{t("footer.services", "Services")}</Link>
              <Link href="/#contact">{t("footer.contactLink", "Contact")}</Link>
            </div>

            <div>
              <h4>{t("footer.studio", "Studio")}</h4>
              <Link href="/#studio">{t("footer.about", "About")}</Link>
              <Link href="/blog">{t("footer.journal", "Journal")}</Link>
              <Link href="/#howtowork">{t("footer.process", "Process")}</Link>
              <Link href="/#engineering">
                {t("footer.engineering", "Engineering")}
              </Link>
            </div>

            <div>
              <h4>{t("footer.contact", "Contact")}</h4>
              <a href="mailto:kristina@kuznetsova.design">kristina@kuznetsova.design</a>
              <span>{t("footer.location", "Москва, Россия")}</span>
            </div>
          </div>

          {/* Социальные сети */}
          <div className={styles.socialWrapper} ref={socialRef}>
            <div className={styles.socialLinks}>
              <a href="https://www.instagram.com/kuznetsovade.sign" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.behance.net/kristinkuznets17" target="_blank" rel="noopener noreferrer" aria-label="Behance"><FaBehance /></a>
              <a href="https://pin.it/sMiIQLlD7" target="_blank" rel="noopener noreferrer" aria-label="Pinterest"><FaPinterest /></a>
              <a href="https://t.me/kuznetsova_design1" target="_blank" rel="noopener noreferrer" aria-label={t("footer.telegramChannel", "Telegram-канал бюро")}><FaTelegramPlane /></a>
              <a href="https://vk.ru/club239423173" target="_blank" rel="noopener noreferrer" aria-label="VK"><FaVk /></a>
              {/* <a href="mailto:kristina@kuznetsova.design" aria-label="Email"><MdOutlineMail /></a> */}
            </div>
          </div>
          
        </div>

        {/* Copyright */}
        <div className={styles.copyright} ref={copyrightRef}>
          <p>
            © {new Date().getFullYear()} Kuznetsova Design.{" "}
            {t("footer.rights", "Все права защищены.")}
          </p>
          <p className={styles.legal}>
            <Link href="/privacy">
              {t("footer.privacy", "Политика конфиденциальности")}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}