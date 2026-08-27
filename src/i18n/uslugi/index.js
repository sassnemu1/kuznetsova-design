/**
 * Переводы посадочных страниц /uslugi/*.
 *
 * ФАЙЛ СГЕНЕРИРОВАН scripts/gen-uslugi-index.mjs — правьте языковые файлы
 * рядом, а не этот индекс.
 *
 * Русский — оригинал, он живёт в data/UslugiData.js и сюда не дублируется.
 * Для языка, перевода на который ещё нет, страница отдаётся на английском.
 */
import en from "./en";
import es from "./es";
import pt from "./pt";
import de from "./de";

const BUNDLES = { en, es, pt, de };

/** Перевод одной услуги или null, если языка или услуги нет. */
export function getUslugiBundle(lang, slug) {
  if (!lang || lang === "ru") return null;
  const bundle = BUNDLES[lang] || BUNDLES.en;
  return bundle?.[slug] || BUNDLES.en?.[slug] || null;
}

/**
 * Собирает услугу под нужный язык: берёт русский оригинал и заменяет в нём
 * только текстовые поля. Структура, слаги, ключевые слова, caseSlugs и
 * relatedIndustries от языка не зависят и остаются исходными.
 */
export function localizeUsluga(usluga, lang) {
  if (!usluga) return usluga;
  const t = getUslugiBundle(lang, usluga.slug);
  if (!t) return usluga;

  const mergeList = (source, translated, fields) => {
    if (!Array.isArray(source) || !Array.isArray(translated)) return source;
    return source.map((item, i) => {
      const tr = translated[i];
      if (!tr) return item;
      const next = { ...item };
      for (const f of fields) {
        if (typeof tr[f] === "string" && tr[f].length) next[f] = tr[f];
      }
      return next;
    });
  };

  return {
    ...usluga,
    h1: t.h1 || usluga.h1,
    lead: t.lead || usluga.lead,
    sections: Array.isArray(t.sections)
      ? usluga.sections.map((s, i) => {
          const tr = t.sections[i];
          if (!tr) return s;
          return {
            ...s,
            h2: tr.h2 || s.h2,
            paragraphs:
              Array.isArray(tr.paragraphs) && tr.paragraphs.length
                ? tr.paragraphs
                : s.paragraphs,
          };
        })
      : usluga.sections,
    deliverables: mergeList(usluga.deliverables, t.deliverables, ["ru", "note"]),
    steps: mergeList(usluga.steps, t.steps, ["title", "text"]),
    faq: mergeList(usluga.faq, t.faq, ["q", "a"]),
  };
}
