"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./FullMenu.module.css";
import { useT } from "@/context/LanguageContext";

/* Номер и адрес — данные. Подпись живёт в словаре: ключ + русский
   запасной текст, который резолвится уже внутри компонента. */
const NAV_ITEMS = [
  { num: "01", key: "nav.home",         ru: "Главная",         href: "/" },
  { num: "02", key: "nav.services",     ru: "Услуги",          href: "/services" },
  { num: "03", key: "nav.work",         ru: "Портфолио",       href: "/work" },
  { num: "04", key: "nav.plugins",      ru: "Плагины",         href: "/plugins" },
  { num: "05", key: "nav.studio",       ru: "О студии",        href: "/#studio" },
  { num: "06", key: "nav.blog",         ru: "Наш блог",        href: "/blog" },
  { num: "07", key: "nav.account",      ru: "Личный кабинет",  href: "/login" },
  { num: "08", key: "nav.contact",      ru: "Контакт",         href: "/#contact" },
];

export default function FullMenu({ isOpen, onClose }) {
  const t = useT();

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
        <Link
          href="/"
          className={styles.logo}
          onClick={onClose}
          aria-label={t("common.home", "На главную")}
        >
          <div className={styles.logoMark}>
            <Image src="/logo-w.svg" alt="Kuznetsova Design logo" fill />
          </div>
          <span className={styles.logoText}>
            Kuznetsova<br />Design
          </span>
        </Link>

        <div className={styles.leftBottom}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <div>
              <p className={styles.badgeTitle}>
                {t("menu.badgeTitle", "5 лет опыта")}
              </p>
              <p className={styles.badgeSub}>
                {t("menu.badgeSub", "Дизайн-бюро премиум-класса")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className={styles.right}>

        {/* Top bar */}
        <div className={styles.topBar}>
          <span className={styles.navLabel}>{t("menu.label", "Навигация")}</span>

          <div className={styles.topBarRight}>
            <Link href="/#contact" className={styles.clientLink} onClick={onClose}>
              {t("menu.becomeClient", "+ Стать клиентом")}
            </Link>
            <button
              className={styles.closeBtn}
              onClick={onClose}
              aria-label={t("nav.closeMenu", "Закрыть меню")}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Main nav links */}
        <nav className={styles.nav}>
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.navItem}
              style={{ "--i": i }}
              onClick={onClose}
            >
              <span className={styles.navNum}>{item.num}</span>
              <span className={styles.navLabel2}>{t(item.key, item.ru)}</span>
            </Link>
          ))}
        </nav>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <div className={styles.contact}>
          <span className={styles.contactTitle}>
            {t("menu.contactTitle", "Написать в Telegram")}
          </span>
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
            <Link href="/privacy" onClick={onClose}>
              {t("common.privacy", "Политика конфиденциальности")}
            </Link>
            <span>{t("menu.copyright", "© Kuznetsova Design 2026")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}