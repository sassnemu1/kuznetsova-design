import Link from "next/link";
import { getWorkBySlug } from "@/data/ServicesData";
import styles from "./UslugiCases.module.css";

const bgFor = (w) => (w.image ? `url(${w.image}), ${w.thumbBg}` : w.thumbBg);

/**
 * Компактный ряд работ по направлению.
 *
 * caseSlugs — слаги из ServicesData.js. Слаг, который не резолвится,
 * молча пропускается: пустая карточка хуже отсутствующей.
 *
 * Работы с concept: true — инициативные концепты бюро, а не заказы клиента,
 * поэтому карточка обязательно несёт бейдж «Концепт».
 */
export default function UslugiCases({
  caseSlugs = [],
  title = "Работы по направлению",
  eyebrow = "Портфолио",
}) {
  const works = caseSlugs.map(getWorkBySlug).filter(Boolean);

  if (works.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="uslugi-cases-title">
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h2 id="uslugi-cases-title" className={styles.title}>
              {title}
            </h2>
          </div>

          <Link href="/work" className={styles.allLink}>
            Всё портфолио
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M2.5 7h9M7.5 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <ul className={styles.row}>
          {works.map((work) => (
            <li key={work.slug} className={styles.card}>
              <Link href={`/work/${work.slug}`} className={styles.cardLink}>
                <span
                  className={styles.thumb}
                  style={{ backgroundImage: bgFor(work) }}
                  aria-hidden="true"
                />
                <span className={styles.veil} aria-hidden="true" />

                <span className={styles.top}>
                  {work.concept && <span className={styles.concept}>Концепт</span>}
                  <span className={styles.year}>{work.year}</span>
                </span>

                <span className={styles.body}>
                  <span className={styles.cardTitle}>{work.title}</span>
                  {work.sub && <span className={styles.sub}>{work.sub}</span>}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
