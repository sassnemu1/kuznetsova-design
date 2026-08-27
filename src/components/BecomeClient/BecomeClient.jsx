"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useT } from "@/context/LanguageContext";
import styles from "./BecomeClient.module.css";

/**
 * Услуги и бюджеты.
 *
 * value — то, что уходит на /api/contact. Оно всегда русское и не зависит
 * от языка интерфейса: письмо студии читают в Москве. Переводится только
 * подпись на чипе — через ключ key с русским запасным вариантом.
 */
const SERVICES = [
  { value: "Брендинг", key: "form.service.branding" },
  { value: "Веб-дизайн", key: "form.service.web" },
  { value: "Айдентика", key: "form.service.identity" },
  { value: "UX/UI", key: "form.service.uxui" },
  { value: "Моушн", key: "form.service.motion" },
  { value: "Другое", key: "form.service.other" },
];


const INITIAL_FORM_DATA = {
  name: "",
  company: "",
  email: "",
  phone: "",
  telegram: "",
  services: [],
  message: "",
  website: "",
};

export default function BecomeClient({ isOpen, onClose }) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const firstFieldRef = useRef(null);

  const t = useT();

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

    if (!formData.name.trim())
      newErrors.name = t("form.error.name", "Введите имя");
    if (!formData.email.trim())
      newErrors.email = t("form.error.email", "Введите email");
    if (!formData.phone.trim())
      newErrors.phone = t("form.error.phone", "Введите номер телефона");
    if (!formData.message.trim())
      newErrors.message = t("form.error.message", "Расскажите о проекте");
    if (formData.services.length === 0)
      newErrors.services = t("form.error.services", "Выберите хотя бы одну услугу");

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

        if (!res.ok)
          throw new Error(data.error || t("form.error.generic", "Ошибка отправки"));

        setSent(true);
    } catch (err) {
        setSubmitError(
          t("form.error.submit", "Не удалось отправить заявку. Попробуйте ещё раз.")
        );
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
      aria-label={t("form.dialogLabel", "Стать клиентом")}
    >
      <div className={styles.backdrop} onClick={handleClose} />

      <div className={styles.sheet}>
        {/* ── LEFT ── */}
        <aside className={styles.left}>
          <div className={styles.leftInner}>
            <Link
              href="/"
              className={styles.brand}
              aria-label={t("common.home", "На главную")}
            >
              <div className={styles.logoMark}>
                <Image src="/logo-w.svg" alt="Kuznetsova Design logo" fill />
              </div>
              <span className={styles.brandName}>Kuznetsova Design</span>
            </Link>

            <div className={styles.pitch}>
              <p className={styles.pitchEyebrow}>
                {t("form.eyebrow", "Начните проект")}
              </p>
              <h2 className={styles.pitchHeadline}>
                {t("form.headlineLine1", "Давайте создадим нечто")}
                <br />
                <em>{t("form.headlineAccent", "выдающееся")}</em>
              </h2>
              <p className={styles.pitchBody}>
                {t(
                  "form.pitch",
                  "Заполните форму — мы ответим в течение 24 часов и предложим концепцию уже на первом звонке."
                )}
              </p>
            </div>

            <ul className={styles.promises}>
              <li>
                <span className={styles.promiseIcon}>01</span>
                {t("form.promise1", "Персональный арт-директор на проекте")}
              </li>
              <li>
                <span className={styles.promiseIcon}>02</span>
                {t("form.promise2", "Прозрачный процесс и еженедельные синки")}
              </li>
              <li>
                <span className={styles.promiseIcon}>03</span>
                {t("form.promise3", "Сроки и объём работ зафиксированы в договоре")}
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
              <span className={styles.headerLabel}>
                {t("form.headerLabel", "Заявка")}
              </span>
              <button
                className={styles.closeBtn}
                onClick={handleClose}
                aria-label={t("form.close", "Закрыть")}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {sent ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <h3 className={styles.successTitle}>
                  {t("form.success.title", "Заявка отправлена")}
                </h3>
                <p className={styles.successBody}>
                  {t("form.success.body", "Мы свяжемся с вами в течение 24 часов.")}
                </p>
                <button className={styles.successBtn} onClick={handleClose}>
                  {t("form.success.close", "Закрыть")}
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
                    <label className={styles.label} htmlFor="bc-name">
                      {t("form.name.label", "Имя")} <span>*</span>
                    </label>
                    <input
                      ref={firstFieldRef}
                      id="bc-name"
                      className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder={t("form.name.placeholder", "Александр")}
                      required
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="bc-company">
                      {t("form.company.label", "Компания")}
                    </label>
                    <input
                      id="bc-company"
                      className={styles.input}
                      type="text"
                      value={formData.company}
                      onChange={(e) => updateField("company", e.target.value)}
                      placeholder={t("form.company.placeholder", "Ваш бренд")}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="bc-email">
                      {t("form.email.label", "Email")} <span>*</span>
                    </label>
                    <input
                      id="bc-email"
                      className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder={t("form.email.placeholder", "you@company.ru")}
                      required
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="bc-phone">
                      {t("form.phone.label", "Телефон")} <span>*</span>
                    </label>
                    <input
                      id="bc-phone"
                      className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder={t("form.phone.placeholder", "+7 (___) ___-__-__")}
                      required
                    />
                    {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                  </div>
                </div>

                {/* Telegram */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="bc-tg">
                    {t("form.telegram.label", "Telegram")}
                  </label>
                  <input
                    id="bc-tg"
                    className={styles.input}
                    type="text"
                    value={formData.telegram}
                    onChange={(e) => updateField("telegram", e.target.value)}
                    placeholder={t("form.telegram.placeholder", "@username")}
                  />
                </div>

                {/* Services */}
                <div className={styles.field}>
                  <label className={styles.label}>
                    {t("form.services.label", "Нужные услуги")} <span>*</span>
                  </label>
                  <div className={styles.chips}>
                    {SERVICES.map((s) => (
                      <button
                        key={s.value}
                        type="button"
                        className={`${styles.chip} ${formData.services.includes(s.value) ? styles.chipActive : ""}`}
                        onClick={() => toggleService(s.value)}
                        aria-pressed={formData.services.includes(s.value)}
                      >
                        {t(s.key, s.value)}
                      </button>
                    ))}
                  </div>
                  {errors.services && <span className={styles.errorText}>{errors.services}</span>}
                </div>

                {/* Message */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="bc-msg">
                    {t("form.message.label", "О проекте")} <span>*</span>
                  </label>
                  <textarea
                    id="bc-msg"
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder={t(
                      "form.message.placeholder",
                      "Расскажите подробнее о задаче..."
                    )}
                    required
                  />
                  {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                </div>

                <div className={styles.formFooter}>
                  <button type="submit" className={styles.submitBtn} disabled={isLoading}>
                    {isLoading
                      ? t("form.submitting", "Отправка...")
                      : t("form.submit", "Отправить заявку")}
                    {!isLoading && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    )}
                  </button>

                    {submitError && (
                        <p className={styles.errorText} style={{ marginTop: 8 }}>{submitError}</p>
                    )}
                  <p className={styles.privacy}>
                    {t("form.privacyPrefix", "Нажимая кнопку, вы принимаете")}{" "}
                    <Link href="/privacy" target="_blank">
                      {t("form.privacyLink", "политику конфиденциальности")}
                    </Link>
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
