"use client";

import { useId, useState } from "react";
import { useBecomeClient } from "@/context/BecomeClientContext";
import { useT, useLanguage } from "@/context/LanguageContext";
import { localizeUsluga } from "@/i18n/uslugi";
import styles from "./UslugiFaq.module.css";

/**
 * Аккордеон вопросов по услуге.
 *
 * Доступность: заголовок каждой пары — настоящая <button> с aria-expanded
 * и aria-controls, панель ответа — role="region" с aria-labelledby на кнопку.
 * Первый вопрос раскрыт по умолчанию.
 *
 * faq — массив { q, a } из UslugiData.js.
 *
 * title не передан — берём заголовок из словаря на языке страницы.
 */
export default function UslugiFaq({ usluga, faq: faqProp = [], title = "" }) {
  const { lang } = useLanguage();
  const faq = usluga ? localizeUsluga(usluga, lang).faq : faqProp;

  const baseId = useId().replace(/:/g, "");
  const [openIndex, setOpenIndex] = useState(0);

  const openClientForm = useBecomeClient();
  const t = useT();

  if (!faq.length) return null;

  const heading = title || t("faq.title", "Частые вопросы");

  return (
    <section className={styles.section} aria-labelledby={`${baseId}-title`}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.eyebrow}>
            {t("faq.eyebrow", "Вопросы и ответы")}
          </span>
          <h2 id={`${baseId}-title`} className={styles.title}>
            {heading}
          </h2>
          <p className={styles.intro}>
            {t(
              "faq.intro",
              "Если нужного вопроса здесь нет — напишите, ответим человеческим текстом, а не выдержкой из договора."
            )}
          </p>
        </div>

        <ul className={styles.list}>
          {faq.map((item, i) => {
            const isOpen = openIndex === i;
            const btnId = `${baseId}-q-${i}`;
            const panelId = `${baseId}-a-${i}`;

            return (
              <li key={item.q} className={styles.item}>
                <h3 className={styles.qWrap}>
                  <button
                    type="button"
                    id={btnId}
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <span className={styles.qText}>{item.q}</span>
                    <span
                      className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
                      aria-hidden="true"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M7 2.5v9M2.5 7h9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
                  hidden={!isOpen}
                >
                  <p className={styles.answer}>{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            {t(
              "faq.footerText",
              "Остались вопросы по вашей задаче? Расскажите о ней в двух абзацах — вернёмся со сметой, сроком и составом работ."
            )}
          </p>
          <button type="button" className={styles.footerCta} onClick={openClientForm}>
            {t("faq.footerCta", "Написать нам")}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M2.5 7h9M7.5 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
