"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./BecomeClient.module.css";

const SERVICES = [
  "Брендинг",
  "Веб-дизайн",
  "Айдентика",
  "UX/UI",
  "Моушн",
  "Другое",
];

const BUDGETS = [
  "До 150 000 ₽",
  "150 000 – 500 000 ₽",
  "500 000 – 1 000 000 ₽",
  "Больше 1 000 000 ₽",
];

export default function BecomeClient({ isOpen, onClose }) {
  const [selected, setSelected] = useState([]);
  const [budget, setBudget] = useState("");
  const [sent, setSent] = useState(false);
  const firstFieldRef = useRef(null);

  // Focus trap — first input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => firstFieldRef.current?.focus(), 400);
    }
  }, [isOpen]);

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const toggleService = (s) =>
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    console.log(sent);
  };

  const handleClose = () => {
    onClose();
    // Reset after animation
    setTimeout(() => { setSent(false); setSelected([]); setBudget(""); }, 600);
  };

  useEffect(() => {
    console.log(sent); // вот тут увидишь актуальное значение
  }, [sent]);
  

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Стать клиентом"
    >
      {/* Backdrop click */}
      <div className={styles.backdrop} onClick={handleClose} />

      <div className={styles.sheet}>
        {/* ── LEFT ── */}
        <aside className={styles.left}>
          <div className={styles.leftInner}>
            <div className={styles.brand}>
              <div className={styles.brandMark}>КД</div>
              <span className={styles.brandName}>Kuznetsova Design</span>
            </div>

            <div className={styles.pitch}>
              <p className={styles.pitchEyebrow}>Начните проект</p>
              <h2 className={styles.pitchHeadline}>
                Давайте создадим&nbsp;нечто
                <br />
                <em>выдающееся</em>
              </h2>
              <p className={styles.pitchBody}>
                Заполните форму — мы ответим в течение 24&nbsp;часов
                и предложим концепцию уже на первом звонке.
              </p>
            </div>

            <ul className={styles.promises}>
              <li>
                <span className={styles.promiseIcon}>01</span>
                Персональный арт-директор на проекте
              </li>
              <li>
                <span className={styles.promiseIcon}>02</span>
                Прозрачный процесс и еженедельные синки
              </li>
              <li>
                <span className={styles.promiseIcon}>03</span>
                Результат в срок или деньги обратно
              </li>
            </ul>

            <div className={styles.contact}>
              <a href="mailto:hello@kuznetsova.design" className={styles.contactLink}>
                hello@kuznetsova.design
              </a>
            </div>
          </div>
        </aside>

        {/* ── RIGHT ── */}
        <div className={styles.right}>
          <div className={styles.rightInner}>

            {/* Header */}
            <div className={styles.header}>
              <span className={styles.headerLabel}>Заявка</span>
              <button
                className={styles.closeBtn}
                onClick={handleClose}
                aria-label="Закрыть"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {sent ? (
              /* ── SUCCESS STATE ── */
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <h3 className={styles.successTitle}>Заявка отправлена</h3>
                <p className={styles.successBody}>
                  Мы свяжемся с вами в течение 24 часов по указанному email.
                </p>
                <button className={styles.successBtn} onClick={handleClose}>
                  Закрыть
                </button>
              </div>
            ) : (
              /* ── FORM ── */
              <form onSubmit={handleSubmit} className={styles.form} noValidate>

                {/* Row 1 */}
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="bc-name">Имя</label>
                    <input
                      id="bc-name"
                      ref={firstFieldRef}
                      className={styles.input}
                      type="text"
                      placeholder="Александр"
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="bc-company">Компания</label>
                    <input
                      id="bc-company"
                      className={styles.input}
                      type="text"
                      placeholder="Ваш бренд"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="bc-email">Email</label>
                    <input
                      id="bc-email"
                      className={styles.input}
                      type="email"
                      placeholder="you@company.ru"
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="bc-tg">Telegram (необязательно)</label>
                    <input
                      id="bc-tg"
                      className={styles.input}
                      type="text"
                      placeholder="@username"
                    />
                  </div>
                </div>

                {/* Services */}
                <div className={styles.field}>
                  <label className={styles.label}>Нужные услуги</label>
                  <div className={styles.chips}>
                    {SERVICES.map((s) => (
                      <button
                        key={s}
                        type="button"
                        className={`${styles.chip} ${selected.includes(s) ? styles.chipActive : ""}`}
                        onClick={() => toggleService(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div className={styles.field}>
                  <label className={styles.label}>Бюджет</label>
                  <div className={styles.chips}>
                    {BUDGETS.map((b) => (
                      <button
                        key={b}
                        type="button"
                        className={`${styles.chip} ${budget === b ? styles.chipActive : ""}`}
                        onClick={() => setBudget(b)}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="bc-msg">О проекте</label>
                  <textarea
                    id="bc-msg"
                    className={styles.textarea}
                    rows={4}
                    placeholder="Расскажите о задаче — чем подробнее, тем точнее мы сможем помочь"
                    required
                  />
                </div>

                <div className={styles.formFooter}>
                  <button type="submit" className={styles.submitBtn}>
                    Отправить заявку
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <p className={styles.privacy}>
                    Нажимая кнопку, вы принимаете{" "}
                    <a href="#">политику конфиденциальности</a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}