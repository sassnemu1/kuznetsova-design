"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./FullMenu.module.css";

const NAV_ITEMS = [
  { num: "01", label: "Главная",   href: "/" },
  { num: "02", label: "Услуги",    href: "/#services" },
  { num: "03", label: "О студии",  href: "/#studio" },
  { num: "04", label: "Портфолио", href: "/work" },
  { num: "05", label: "Наш блог",    href: "/blog" },
  { num: "06", label: "Контакт",   href: "/#contact" },
];

export default function FullMenu({ isOpen, onClose }) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
      aria-hidden={!isOpen}
    >
      {/* ── LEFT PANEL ── */}
      <div className={styles.left}>
        <div className={styles.logo}>
          {/* Replace with your actual logo component / image */}
          <div className={styles.logoMark}>
            <Image src="/logo-w.svg" alt="Kuznetsova Design logo" fill />
          </div>
          <span className={styles.logoText}>
            Kuznetsova<br />Design
          </span>
        </div>

        <div className={styles.leftBottom}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <div>
              <p className={styles.badgeTitle}>5 лет опыта</p>
              <p className={styles.badgeSub}>Дизайн-бюро премиум-класса</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className={styles.right}>

        {/* Top bar */}
        <div className={styles.topBar}>
          <span className={styles.navLabel}>Навигация</span>

          <div className={styles.topBarRight}>
            <a href="#contact" className={styles.clientLink} onClick={onClose}>
              + Стать клиентом
            </a>
            <button
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Закрыть меню"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Main nav links */}
        <nav className={styles.nav}>
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.navItem}
              style={{ "--i": i }}
              onClick={onClose}
            >
              <span className={styles.navNum}>{item.num}</span>
              <span className={styles.navLabel2}>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <div className={styles.contact}>
          <span className={styles.contactTitle}>Telegram</span>
          <a
            href="https://t.me/KUZNETSOVA_designn"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            @KUZNETSOVA_designn
          </a>
        </div>
          <div className={styles.legal}>
            <span>Политика конфиденциальности</span>
            <span>© Kuznetsova Design 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}