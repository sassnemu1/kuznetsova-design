"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import useGSAP from "@/hooks/useGSAP";
import { useT, useLanguage } from "@/context/LanguageContext";
import { pickLocalized } from "@/i18n/dictionary";
import { DASH_URL } from "@/data/PluginsData";
import { INDUSTRIES } from "@/data/IndustriesData";
import styles from "./AuthPanel.module.css";

/**
 * Адрес кабинета настраивается переменной окружения, чтобы на стейджинге и
 * в проде ссылка вела куда нужно без правки кода. Значение из PluginsData —
 * запасной вариант.
 */
const DASH_BASE = process.env.NEXT_PUBLIC_DASH_URL || DASH_URL;
const DASH_LABEL = DASH_BASE.replace(/^https?:\/\//, "").replace(/\/+$/, "");

const INITIAL_FORM = {
  name: "",
  company: "",
  email: "",
  phone: "",
  industry: "",
  comment: "",
  consent: false,
  website: "", // honeypot — настоящие пользователи это поле не видят и не заполняют
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function AuthPanel() {
  const t = useT();
  const { lang } = useLanguage();

  const TABS = useMemo(
    () => [
      { id: "signin", label: t("auth.tabSignin", "Вход") },
      { id: "request", label: t("auth.tabRequest", "Запросить доступ") },
    ],
    [t]
  );

  const searchParams = useSearchParams();
  // Вкладка из адреса — производное значение, считаем его во время рендера.
  // Как только человек переключил вкладку сам, его выбор побеждает.
  const tabFromUrl = searchParams.get("mode") === "request" ? "request" : "signin";
  const [picked, setPicked] = useState(null);
  const tab = picked ?? tabFromUrl;
  const setTab = setPicked;
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [sent, setSent] = useState(false);

  const panelRef = useRef(null);
  const tabRefs = useRef({});

  const { gsap } = useGSAP();



  // Тихое появление панели. GSAP скрывает элемент только если сам загрузился,
  // поэтому без анимации контент всё равно виден.
  useEffect(() => {
    if (!gsap) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }, panelRef);

    return () => ctx.revert();
  }, [gsap]);

  const selectTab = (id) => {
    setTab(id);
    tabRefs.current[id]?.focus();
  };

  const onTabKeyDown = (e) => {
    const index = TABS.findIndex((t) => t.id === tab);
    if (e.key === "ArrowRight") {
      e.preventDefault();
      selectTab(TABS[(index + 1) % TABS.length].id);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      selectTab(TABS[(index - 1 + TABS.length) % TABS.length].id);
    } else if (e.key === "Home") {
      e.preventDefault();
      selectTab(TABS[0].id);
    } else if (e.key === "End") {
      e.preventDefault();
      selectTab(TABS[TABS.length - 1].id);
    }
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = () => {
    const next = {};

    if (!formData.name.trim()) next.name = t("auth.error.name", "Введите имя");
    if (!formData.company.trim())
      next.company = t("auth.error.company", "Укажите название компании");
    if (!formData.email.trim()) next.email = t("auth.error.email", "Введите e-mail");
    else if (!EMAIL_RE.test(formData.email.trim()))
      next.email = t("auth.error.emailFormat", "Проверьте формат e-mail");
    if (!formData.consent)
      next.consent = t("auth.error.consent", "Без согласия мы не сможем обработать запрос");

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    if (!validateForm()) return;

    setIsSending(true);

    try {
      const res = await fetch("/api/auth/request-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || t("auth.error.send", "Ошибка отправки"));

      setSent(true);
    } catch (err) {
      setSubmitError(
        t(
          "auth.error.submit",
          "Не удалось отправить запрос. Попробуйте ещё раз или напишите нам на почту."
        )
      );
      console.error("Request access form:", err?.message || err);
    } finally {
      setIsSending(false);
    }
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM);
    setErrors({});
    setSubmitError("");
    setSent(false);
  };

  const describedBy = (field) => (errors[field] ? `auth-${field}-error` : undefined);

  /* Ключ auth.notice содержит {dash}: адрес кабинета выводится в моноширинном
     span, поэтому строку разбираем вокруг подстановки, а не рендерим как есть. */
  const noticeParts = t(
    "auth.notice",
    "Кабинет {dash} сейчас в разработке. Формы входа пока нет — мы не станем делать вид, что она работает. Как только кабинет откроется, вход появится на этом же экране."
  ).split("{dash}");

  return (
    <section
      ref={panelRef}
      className={styles.panel}
      aria-label={t("auth.panelLabel", "Доступ к личному кабинету")}
    >
      <div
        className={styles.tabs}
        role="tablist"
        aria-label={t("auth.tabsLabel", "Вход или запрос доступа")}
      >
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`auth-tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls={`auth-panel-${t.id}`}
            tabIndex={tab === t.id ? 0 : -1}
            ref={(el) => {
              tabRefs.current[t.id] = el;
            }}
            className={`${styles.tab} ${tab === t.id ? styles.tabActive : ""}`}
            onClick={() => setTab(t.id)}
            onKeyDown={onTabKeyDown}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ─────────────── ВКЛАДКА «ВХОД» ───────────────
          Аутентификации в этом проекте нет: нет базы, нет сессий, нет
          серверной проверки пароля. Поэтому вкладка честно объясняет статус
          и никакого пароля не собирает.

          КОГДА ПОЯВИТСЯ БЭКЕНД: настоящая форма встаёт ровно сюда, вместо
          блока .notice + .primaryLink ниже. Поля e-mail + пароль, отправка —
          POST на `${DASH_BASE}/api/auth/login` (credentials: "include", cookie
          сессии ставит сам dash), ошибку показываем в том же aria-live блоке,
          что и форма запроса доступа. Пароль не должен попадать ни в state,
          который логируется, ни в localStorage, ни в этот репозиторий. */}
      <div
        role="tabpanel"
        id="auth-panel-signin"
        aria-labelledby="auth-tab-signin"
        tabIndex={0}
        hidden={tab !== "signin"}
        className={styles.tabPanel}
      >
        <p className={styles.notice}>
          {noticeParts[0]}
          {noticeParts.length > 1 ? (
            <>
              <span className={styles.mono}>{DASH_LABEL}</span>
              {noticeParts.slice(1).join(DASH_LABEL)}
            </>
          ) : null}
        </p>

        <p className={styles.noticeSecondary}>
          {t(
            "auth.noticeSecondary",
            "Если студия уже завела вам аккаунт, вы получили письмо с адресом кабинета и приглашением. Открыть его можно по ссылке ниже."
          )}
        </p>

        <a
          className={styles.primaryLink}
          href={DASH_BASE}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("auth.openDash", "Открыть {dash}").replace("{dash}", DASH_LABEL)}
          <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path
              d="M3 9L9 3M4.5 3H9v4.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <p className={styles.hint}>
          {t(
            "auth.hintSignin",
            "Доступ открывается после того, как студия создаст аккаунт вашей компании. Самостоятельная регистрация не предусмотрена."
          )}
        </p>

        <div className={styles.divider} />

        <p className={styles.switchRow}>
          {t("auth.noAccount", "Аккаунта ещё нет?")}{" "}
          <button type="button" className={styles.switchLink} onClick={() => selectTab("request")}>
            {t("auth.tabRequest", "Запросить доступ")}
          </button>{" "}
          {t("auth.orWrite", "или напишите на")}{" "}
          <a className={styles.inlineLink} href="mailto:kristina@kuznetsova.design">
            kristina@kuznetsova.design
          </a>
          .
        </p>
      </div>

      {/* ─────────────── ВКЛАДКА «ЗАПРОСИТЬ ДОСТУП» ─────────────── */}
      <div
        role="tabpanel"
        id="auth-panel-request"
        aria-labelledby="auth-tab-request"
        tabIndex={0}
        hidden={tab !== "request"}
        className={styles.tabPanel}
      >
        {/* Статус отправки — озвучивается скринридером */}
        <div className={styles.liveRegion} role="status" aria-live="polite">
          {sent
            ? t("auth.live.sent", "Запрос отправлен. Мы ответим в течение рабочего дня.")
            : submitError
            ? submitError
            : isSending
            ? t("auth.live.sending", "Отправляем запрос…")
            : ""}
        </div>

        {sent ? (
          <div className={styles.success}>
            <p className={styles.successLabel}>
              {t("auth.success.label", "Запрос отправлен")}
            </p>
            <h2 className={styles.successTitle}>
              {t("auth.success.title", "Мы получили заявку")}
            </h2>
            <p className={styles.successBody}>
              {t(
                "auth.success.body",
                "Свяжемся с вами в течение рабочего дня: уточним состав модулей, роли сотрудников и заведём кабинет на {dash}. Ответ придёт на указанный e-mail."
              ).replace("{dash}", DASH_LABEL)}
            </p>
            <button type="button" className={styles.ghostBtn} onClick={resetForm}>
              {t("auth.success.again", "Отправить ещё один запрос")}
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <p className={styles.formIntro}>
              {t(
                "auth.formIntro",
                "Расскажите о компании — подберём модули под вашу отрасль и заведём кабинет."
              )}
            </p>

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

            <div className={styles.field}>
              <label className={styles.label} htmlFor="auth-name">
                {t("auth.field.name", "Имя")} <span aria-hidden="true">*</span>
              </label>
              <input
                id="auth-name"
                className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder={t("auth.placeholder.name", "Александра")}
                aria-invalid={errors.name ? "true" : undefined}
                aria-describedby={describedBy("name")}
                required
              />
              {errors.name && (
                <span className={styles.errorText} id="auth-name-error">
                  {errors.name}
                </span>
              )}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="auth-company">
                {t("auth.field.company", "Компания")} <span aria-hidden="true">*</span>
              </label>
              <input
                id="auth-company"
                className={`${styles.input} ${errors.company ? styles.inputError : ""}`}
                type="text"
                autoComplete="organization"
                value={formData.company}
                onChange={(e) => updateField("company", e.target.value)}
                placeholder={t("auth.placeholder.company", "Название бренда")}
                aria-invalid={errors.company ? "true" : undefined}
                aria-describedby={describedBy("company")}
                required
              />
              {errors.company && (
                <span className={styles.errorText} id="auth-company-error">
                  {errors.company}
                </span>
              )}
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="auth-email">
                  {t("auth.field.email", "E-mail")} <span aria-hidden="true">*</span>
                </label>
                <input
                  id="auth-email"
                  className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder={t("auth.placeholder.email", "you@company.ru")}
                  aria-invalid={errors.email ? "true" : undefined}
                  aria-describedby={describedBy("email")}
                  required
                />
                {errors.email && (
                  <span className={styles.errorText} id="auth-email-error">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="auth-phone">
                  {t("auth.field.phone", "Телефон")}
                </label>
                <input
                  id="auth-phone"
                  className={styles.input}
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="auth-industry">
                {t("auth.field.industry", "Сфера бизнеса")}
              </label>
              <select
                id="auth-industry"
                className={styles.select}
                value={formData.industry}
                onChange={(e) => updateField("industry", e.target.value)}
              >
                <option value="">{t("auth.industryNone", "Не выбрано")}</option>
                {INDUSTRIES.map((industry) => (
                  <option key={industry.id} value={industry.id}>
                    {pickLocalized(industry, lang, "ru", "en")}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="auth-comment">
                {t("auth.field.comment", "Комментарий")}
              </label>
              <textarea
                id="auth-comment"
                className={styles.textarea}
                rows={4}
                value={formData.comment}
                onChange={(e) => updateField("comment", e.target.value)}
                placeholder={t(
                  "auth.placeholder.comment",
                  "Сколько человек будет работать в кабинете, какие задачи важны в первую очередь"
                )}
              />
            </div>

            <div className={styles.consentField}>
              <label className={styles.consent} htmlFor="auth-consent">
                <input
                  id="auth-consent"
                  type="checkbox"
                  className={styles.checkbox}
                  checked={formData.consent}
                  onChange={(e) => updateField("consent", e.target.checked)}
                  aria-invalid={errors.consent ? "true" : undefined}
                  aria-describedby={describedBy("consent")}
                  required
                />
                <span>
                  {t("auth.consent", "Согласен на обработку персональных данных согласно")}{" "}
                  <Link className={styles.inlineLink} href="/privacy">
                    {t("auth.consentLink", "политике конфиденциальности")}
                  </Link>
                </span>
              </label>
              {errors.consent && (
                <span className={styles.errorText} id="auth-consent-error">
                  {errors.consent}
                </span>
              )}
            </div>

            <button type="submit" className={styles.submitBtn} disabled={isSending}>
              {isSending
                ? t("auth.submitting", "Отправляем…")
                : t("auth.submit", "Отправить запрос")}
            </button>

            {submitError && <p className={styles.errorText}>{submitError}</p>}

            <p className={styles.hint}>
              {t(
                "auth.hintRequest",
                "Мы не создаём аккаунты автоматически: сначала обсуждаем задачи, потом заводим кабинет и передаём доступ ответственному сотруднику."
              )}
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
