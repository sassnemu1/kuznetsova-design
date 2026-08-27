/**
 * Пересобирает src/i18n/uslugi/index.js под те языковые файлы, которые
 * реально лежат в папке. Языка нет — страница отдаётся на английском
 * (общий мост), а не на русском.
 *
 * Запуск: node scripts/gen-uslugi-index.mjs
 */
import { readdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dir = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "i18n", "uslugi");
const ORDER = ["en", "zh", "es", "pt", "fr", "de", "ar", "ja", "tr"];

const files = readdirSync(dir);
const present = ORDER.filter((l) => files.includes(`${l}.js`));

const header = `/**
 * Переводы посадочных страниц /uslugi/*.
 *
 * ФАЙЛ СГЕНЕРИРОВАН scripts/gen-uslugi-index.mjs — правьте языковые файлы
 * рядом, а не этот индекс.
 *
 * Русский — оригинал, он живёт в data/UslugiData.js и сюда не дублируется.
 * Для языка, перевода на который ещё нет, страница отдаётся на английском.
 */
`;

const imports = present.map((l) => `import ${l} from "./${l}";`).join("\n");
const bundles = `\n\nconst BUNDLES = { ${present.join(", ")} };\n`;

const body = `
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
`;

writeFileSync(join(dir, "index.js"), header + imports + bundles + body, "utf8");
console.log("языков подключено:", present.length, "→", present.join(", "));
