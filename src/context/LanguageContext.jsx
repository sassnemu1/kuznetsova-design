"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";

import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  isRTL,
  translate,
} from "@/i18n/dictionary";

const STORAGE_KEY = "kd-lang";

const LanguageContext = createContext(null);

function isSupported(value) {
  return typeof value === "string" && LANGUAGES.includes(value);
}

function readStored() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isSupported(stored) ? stored : null;
  } catch {
    // Приватный режим и часть браузеров бросают на доступе к localStorage.
    return null;
  }
}

function writeStored(lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Не смогли сохранить — язык всё равно работает до перезагрузки.
  }
}

/* ─── Внешнее хранилище языка для useSyncExternalStore ───────────
   Снапшот кэшируется: useSyncExternalStore сравнивает результат по
   ссылке и уходит в бесконечный цикл, если каждый вызов возвращает
   новое значение. */
let cachedSnapshot = null;

function getStoredLangSnapshot() {
  if (cachedSnapshot === null) {
    cachedSnapshot = readStored() || guessFromNavigator() || DEFAULT_LANGUAGE;
  }
  return cachedSnapshot;
}

function subscribeToStoredLang(onChange) {
  // Язык, выбранный в другой вкладке, подхватываем здесь же.
  const onStorage = (e) => {
    if (e.key !== STORAGE_KEY) return;
    cachedSnapshot = isSupported(e.newValue) ? e.newValue : DEFAULT_LANGUAGE;
    onChange();
  };
  window.addEventListener("storage", onStorage);
  return () => window.removeEventListener("storage", onStorage);
}

/** Язык браузера → поддерживаемый язык сайта, если распознали. */
function guessFromNavigator() {
  try {
    const list =
      (Array.isArray(navigator.languages) && navigator.languages.length
        ? navigator.languages
        : [navigator.language]) || [];

    for (const raw of list) {
      if (typeof raw !== "string") continue;
      const code = raw.toLowerCase().slice(0, 2);
      if (code === "ru") return "ru";
      if (isSupported(code)) return code;
    }

    return list.length ? "en" : null;
  } catch {
    return null;
  }
}

export function LanguageProvider({ children }) {
  /**
   * Рендер всегда стартует с русского — и на сервере, и на клиенте,
   * иначе разметка после гидратации не совпадёт. Реальный выбор
   * пользователя подхватывается ниже, уже в эффекте.
   */
  // null = пользователь ещё не выбирал язык руками в этой сессии.
  const [override, setOverride] = useState(null);

  /**
   * localStorage и navigator — внешние хранилища, недоступные на сервере.
   * useSyncExternalStore читает их уже после гидратации и отдаёт серверу
   * DEFAULT_LANGUAGE, поэтому разметка совпадает и лишнего каскада ререндеров
   * не возникает (в отличие от setState прямо в эффекте).
   */
  const detected = useSyncExternalStore(
    subscribeToStoredLang,
    getStoredLangSnapshot,
    () => DEFAULT_LANGUAGE
  );

  // Явный выбор пользователя важнее того, что лежит в хранилище.
  const effectiveLang = override ?? detected;

  // <html lang> должен соответствовать тому, что реально читает человек,
  // а <html dir> — направлению письма: арабский раскладывается справа налево.
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = effectiveLang;
    const rtl = typeof isRTL === "function" ? isRTL(effectiveLang) : false;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
  }, [effectiveLang]);

  const setLang = useCallback((next) => {
    if (!isSupported(next)) return;
    cachedSnapshot = next;
    setOverride(next);
    writeStored(next);
  }, []);

  const toggle = useCallback(() => {
    setLang(effectiveLang === "ru" ? "en" : "ru");
  }, [effectiveLang, setLang]);

  const value = useMemo(
    () => ({ lang: effectiveLang, setLang, toggle }),
    [effectiveLang, setLang, toggle]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

/**
 * Возвращает функцию перевода: t("nav.work", "Портфолио").
 * Второй аргумент — запасной текст, если ключа ещё нет в словаре.
 */
export function useT() {
  const { lang } = useLanguage();

  return useCallback(
    (key, fallback) => translate(lang, key, fallback),
    [lang]
  );
}

export default LanguageContext;
