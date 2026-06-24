"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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

const INITIAL_FORM_DATA = {
  name: "",
  company: "",
  email: "",
  phone: "",
  telegram: "",
  services: [],
  budget: "",
  message: "",
  website: "",
};

export default function BecomeClient({ isOpen, onClose }) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const firstFieldRef = useRef(null);


  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Focus trap
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => firstFieldRef.current?.focus(), 400);
    }
  }, [isOpen]);

  // Reset form when closing
  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSent(false);
      setFormData(INITIAL_FORM_DATA);
      setErrors({});
    }, 600);
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const toggleService = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Введите имя";
    if (!formData.email.trim()) newErrors.email = "Введите email";
    if (!formData.phone.trim()) newErrors.phone = "Введите номер телефона";
    if (!formData.message.trim()) newErrors.message = "Расскажите о проекте";
    if (formData.services.length === 0) newErrors.services = "Выберите хотя бы одну услугу";
    if (!formData.budget) newErrors.budget = "Выберите бюджет";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


    const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setSubmitError("");

    try {
        const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Ошибка отправки");

        setSent(true);
    } catch (err) {
        setSubmitError("Не удалось отправить заявку. Попробуйте ещё раз.");
        console.error(err);
    } finally {
        setIsLoading(false);
    }
    };

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Стать клиентом"
    >
      <div className={styles.backdrop} onClick={handleClose} />

      <div className={styles.sheet}>
        {/* ── LEFT ── */}
        <aside className={styles.left}>
          <div className={styles.leftInner}>
            <div className={styles.brand}>
              <div className={styles.logoMark}>
                <Image src="/logo-w.svg" alt="Kuznetsova Design logo" fill />
              </div>
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
              <a href="mailto:kristina@kuznetsova.design" className={styles.contactLink}>
                kristina@kuznetsova.design
              </a>
            </div>
          </div>
        </aside>

        {/* RIGHT PANEL */}
        <div className={styles.right}>
          <div className={styles.rightInner}>
            <div className={styles.header}>
              <span className={styles.headerLabel}>Заявка</span>
              <button className={styles.closeBtn} onClick={handleClose} aria-label="Закрыть">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {sent ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <h3 className={styles.successTitle}>Заявка отправлена</h3>
                <p className={styles.successBody}>
                  Мы свяжемся с вами в течение 24 часов.
                </p>
                <button className={styles.successBtn} onClick={handleClose}>
                  Закрыть
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                {/* Honeypot — скрыто от людей, ловит ботов */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={(e) => updateField("website", e.target.value)}
                  className={styles.honeypot}
                  aria-hidden="true"
                />

                {/* Row 1 */}
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="bc-name">Имя <span>*</span></label>
                    <input
                      ref={firstFieldRef}
                      id="bc-name"
                      className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder="Александр"
                      required
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="bc-company">Компания</label>
                    <input
                      id="bc-company"
                      className={styles.input}
                      type="text"
                      value={formData.company}
                      onChange={(e) => updateField("company", e.target.value)}
                      placeholder="Ваш бренд"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="bc-email">Email <span>*</span></label>
                    <input
                      id="bc-email"
                      className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="you@company.ru"
                      required
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="bc-phone">Телефон <span>*</span></label>
                    <input
                      id="bc-phone"
                      className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="+7 (999) 123-45-67"
                      required
                    />
                    {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                  </div>
                </div>

                {/* Telegram */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="bc-tg">Telegram</label>
                  <input
                    id="bc-tg"
                    className={styles.input}
                    type="text"
                    value={formData.telegram}
                    onChange={(e) => updateField("telegram", e.target.value)}
                    placeholder="@username"
                  />
                </div>

                {/* Services */}
                <div className={styles.field}>
                  <label className={styles.label}>Нужные услуги <span>*</span></label>
                  <div className={styles.chips}>
                    {SERVICES.map((s) => (
                      <button
                        key={s}
                        type="button"
                        className={`${styles.chip} ${formData.services.includes(s) ? styles.chipActive : ""}`}
                        onClick={() => toggleService(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  {errors.services && <span className={styles.errorText}>{errors.services}</span>}
                </div>

                {/* Budget */}
                <div className={styles.field}>
                  <label className={styles.label}>Бюджет <span>*</span></label>
                  <div className={styles.chips}>
                    {BUDGETS.map((b) => (
                      <button
                        key={b}
                        type="button"
                        className={`${styles.chip} ${formData.budget === b ? styles.chipActive : ""}`}
                        onClick={() => updateField("budget", b)}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                  {errors.budget && <span className={styles.errorText}>{errors.budget}</span>}
                </div>

                {/* Message */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="bc-msg">О проекте <span>*</span></label>
                  <textarea
                    id="bc-msg"
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Расскажите подробнее о задаче..."
                    required
                  />
                  {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                </div>

                <div className={styles.formFooter}>
                  <button type="submit" className={styles.submitBtn} disabled={isLoading}>
                    {isLoading ? "Отправка..." : "Отправить заявку"}
                    {!isLoading && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    )}
                  </button>

                    {submitError && (
                        <p className={styles.errorText} style={{ marginTop: 8 }}>{submitError}</p>
                    )}
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