"use client";

import Link from "next/link";
import { useT } from "@/context/LanguageContext";
import styles from "./BackLink.module.css";

/**
 * Ссылка «назад».
 *
 * labelKey — ключ словаря; если передан, подпись берётся из перевода,
 *            а `label` работает как запасной русский текст.
 * label    — готовая подпись. Клиентские компоненты, которые уже вызвали
 *            t(...) сами, продолжают передавать только её.
 */
export default function BackLink({ href = "/work", label, labelKey }) {
  const t = useT();

  const text = labelKey
    ? t(labelKey, label || "Портфолио")
    : label || t("case.back", "Портфолио");

  return (
    <Link href={href} className={styles.back}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {text}
    </Link>
  );
}
