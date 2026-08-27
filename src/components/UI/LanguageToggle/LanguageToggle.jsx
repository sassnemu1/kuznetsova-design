"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";

import styles from "./LanguageToggle.module.css";
import { useLanguage, useT } from "@/context/LanguageContext";
import { LANGUAGES, LANGUAGE_LABELS } from "@/i18n/dictionary";

/**
 * Выбор языка интерфейса — компактный дропдаун на десять языков.
 *
 * Триггер показывает короткий код текущего языка (RU, EN, ZH …), список —
 * эндоним каждого языка, то есть его самоназвание: человек узнаёт «中文»
 * и «العربية», даже если не читает по-русски.
 *
 * Разметка — паттерн collapsible listbox: настоящая <button> с
 * aria-haspopup="listbox" и список role="listbox" из role="option".
 * Клавиатура: Enter/Space/стрелки открывают, стрелки водят по списку,
 * Home/End прыгают к краям, буква — к первому совпадению, Enter/Space
 * выбирают, Escape закрывает и возвращает фокус на триггер, Tab закрывает.
 *
 * dark — тот же приём, что у Navbar с его .darkMode: над тёмными секциями
 * родитель передаёт dark, и контрол меняет подложку на тёмную.
 */

/** Самоназвание языка из словаря; терпимо к форме записи. */
function labelFor(code) {
  const raw = LANGUAGE_LABELS?.[code];
  if (typeof raw === "string" && raw.trim()) return raw;
  if (raw && typeof raw === "object") {
    const nested = raw.native || raw.label || raw.name;
    if (typeof nested === "string" && nested.trim()) return nested;
  }
  return code.toUpperCase();
}

/** Короткий код для триггера: ru → RU, zh → ZH. */
function shortFor(code) {
  return code.slice(0, 2).toUpperCase();
}

const TYPEAHEAD_RESET_MS = 700;

export default function LanguageToggle({ dark = false, className = "" }) {
  const { lang, setLang } = useLanguage();
  const t = useT();

  const [open, setOpen] = useState(false);

  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const optionRefs = useRef([]);
  const typeahead = useRef({ buffer: "", timer: null });

  const listId = useId();

  const options = useMemo(
    () =>
      (Array.isArray(LANGUAGES) ? LANGUAGES : []).map((code) => ({
        code,
        short: shortFor(code),
        label: labelFor(code),
      })),
    []
  );

  const currentIndex = Math.max(
    0,
    options.findIndex((option) => option.code === lang)
  );
  const current = options[currentIndex] || {
    code: lang,
    short: shortFor(lang),
    label: labelFor(lang),
  };

  const groupLabel = t("lang.label", "Язык интерфейса");

  /* ─── Фокус внутри списка ───────────────────────────────────── */
  const focusOption = useCallback((index) => {
    const node = optionRefs.current[index];
    if (node) node.focus();
  }, []);

  const closeAndReturnFocus = useCallback(() => {
    setOpen(false);
    const node = triggerRef.current;
    if (node) node.focus();
  }, []);

  const choose = useCallback(
    (code) => {
      setLang(code);
      setOpen(false);
      const node = triggerRef.current;
      if (node) node.focus();
    },
    [setLang]
  );

  /* Открыли — ставим фокус на выбранный язык. */
  useEffect(() => {
    if (!open) return;
    focusOption(currentIndex);
    // currentIndex намеренно не в зависимостях: фокус ставим один раз,
    // на открытии, дальше им управляет клавиатура.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, focusOption]);

  /* Клик мимо — закрываем. */
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event) => {
      const root = rootRef.current;
      if (root && !root.contains(event.target)) setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  /* Таймер поиска по букве не должен пережить размонтирование. */
  useEffect(
    () => () => {
      if (typeahead.current.timer) clearTimeout(typeahead.current.timer);
    },
    []
  );

  const jumpToTyped = useCallback(
    (char) => {
      const state = typeahead.current;
      if (state.timer) clearTimeout(state.timer);
      state.buffer += char.toLowerCase();
      state.timer = setTimeout(() => {
        state.buffer = "";
        state.timer = null;
      }, TYPEAHEAD_RESET_MS);

      const query = state.buffer;
      const index = options.findIndex(
        (option) =>
          option.label.toLowerCase().startsWith(query) ||
          option.code.toLowerCase().startsWith(query) ||
          option.short.toLowerCase().startsWith(query)
      );
      if (index >= 0) focusOption(index);
    },
    [focusOption, options]
  );

  /* ─── Клавиатура на триггере ────────────────────────────────── */
  const onTriggerKeyDown = (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      setOpen(true);
      return;
    }
    if (event.key === "Escape" && open) {
      event.preventDefault();
      setOpen(false);
    }
  };

  /* ─── Клавиатура внутри списка ──────────────────────────────── */
  const onListKeyDown = (event) => {
    const index = optionRefs.current.indexOf(event.target);
    const last = options.length - 1;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        focusOption(index >= last ? 0 : index + 1);
        break;
      case "ArrowUp":
        event.preventDefault();
        focusOption(index <= 0 ? last : index - 1);
        break;
      case "Home":
        event.preventDefault();
        focusOption(0);
        break;
      case "End":
        event.preventDefault();
        focusOption(last);
        break;
      case "Escape":
        event.preventDefault();
        closeAndReturnFocus();
        break;
      case "Tab":
        // Не мешаем Tab уйти дальше — просто закрываем и отдаём фокус триггеру,
        // чтобы обход страницы продолжился с ожидаемого места.
        setOpen(false);
        if (triggerRef.current) triggerRef.current.focus();
        break;
      default:
        if (
          event.key.length === 1 &&
          !event.metaKey &&
          !event.ctrlKey &&
          !event.altKey &&
          event.key !== " "
        ) {
          jumpToTyped(event.key);
        }
        break;
    }
  };

  return (
    <div
      ref={rootRef}
      className={`${styles.root} ${dark ? styles.dark : ""} ${className}`}
    >
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-label={`${groupLabel}: ${current.label}`}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={onTriggerKeyDown}
      >
        <span className={styles.triggerCode}>{current.short}</span>
        <svg
          className={styles.chevron}
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M1.5 3.5 5 7l3.5-3.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label={groupLabel}
          className={styles.list}
          onKeyDown={onListKeyDown}
        >
          {options.map((option, index) => {
            const selected = option.code === lang;
            return (
              <li key={option.code} className={styles.item}>
                <button
                  ref={(node) => {
                    optionRefs.current[index] = node;
                  }}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  tabIndex={-1}
                  lang={option.code}
                  dir="auto"
                  className={`${styles.option} ${
                    selected ? styles.optionActive : ""
                  }`}
                  onClick={() => choose(option.code)}
                >
                  <span className={styles.optionCode} aria-hidden="true">
                    {option.short}
                  </span>
                  <span className={styles.optionLabel}>{option.label}</span>
                  <svg
                    className={styles.check}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M2 6.4 4.6 9 10 3.2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
