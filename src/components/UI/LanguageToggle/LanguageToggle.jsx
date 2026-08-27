"use client";

import styles from "./LanguageToggle.module.css";
import { useLanguage, useT } from "@/context/LanguageContext";

/**
 * Компактный переключатель RU / EN.
 *
 * Две настоящие кнопки внутри role="group" — каждая сообщает своё состояние
 * через aria-pressed, обе доступны с клавиатуры по Tab и подсвечиваются
 * через :focus-visible. Никаких div с onClick.
 *
 * dark — тот же приём, что у Navbar с его .darkMode: над тёмными секциями
 * родитель передаёт dark, и переключатель меняет подложку на тёмную.
 */
export default function LanguageToggle({ dark = false, className = "" }) {
  const { lang, setLang } = useLanguage();
  const t = useT();

  const options = [
    { code: "ru", short: "RU", full: t("lang.ru", "Русский") },
    { code: "en", short: "EN", full: t("lang.en", "Английский") },
  ];

  return (
    <div
      role="group"
      aria-label={t("lang.label", "Язык интерфейса")}
      className={`${styles.group} ${dark ? styles.dark : ""} ${className}`}
      data-active={lang}
    >
      <span className={styles.indicator} aria-hidden="true" />

      {options.map((option) => (
        <button
          key={option.code}
          type="button"
          className={`${styles.option} ${
            lang === option.code ? styles.optionActive : ""
          }`}
          aria-pressed={lang === option.code}
          aria-label={option.full}
          onClick={() => setLang(option.code)}
        >
          {option.short}
        </button>
      ))}
    </div>
  );
}
