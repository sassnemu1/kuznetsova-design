import Link from "next/link";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer.jsx";

import styles from "./not-found.module.css";

const ROUTES = [
  {
    href: "/",
    num: "01",
    label: "Главная",
    title: "На главную",
    desc: "Студия, услуги и то, как мы работаем — с самого начала.",
  },
  {
    href: "/work",
    num: "02",
    label: "Портфолио",
    title: "В портфолио",
    desc: "Проекты бюро: брендинг, сайты, 3D и работа с соцсетями.",
  },
  {
    href: "/blog",
    num: "03",
    label: "Блог",
    title: "В блог",
    desc: "Заметки, события и разборы проектов из жизни студии.",
  },
];

function ArrowIcon() {
  return (
    <svg
      className={styles.arrow}
      width="13"
      height="13"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3 9L9 3M4.5 3H9v4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function NotFound() {
  return (
    <main className={styles.page}>
      <Navbar />

      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Ошибка 404</span>
          <p className={styles.code} aria-hidden="true">
            404
          </p>
          <h1 className={styles.title}>
            Такой страницы <em>не существует</em>.
          </h1>
          <p className={styles.lead}>
            Возможно, адрес набран с опечаткой, страница переехала или проект,
            который вы искали, мы убрали из открытого портфолио. Ниже — короткие
            пути туда, где точно есть что посмотреть.
          </p>
        </header>

        <nav className={styles.routes} aria-label="Основные разделы сайта">
          {ROUTES.map((route) => (
            <Link key={route.href} href={route.href} className={styles.route}>
              <span className={styles.routeNum}>{route.num}</span>
              <span className={styles.routeLabel}>{route.label}</span>
              <span className={styles.routeTitle}>
                {route.title}
                <ArrowIcon />
              </span>
              <span className={styles.routeDesc}>{route.desc}</span>
            </Link>
          ))}
        </nav>

        <div className={styles.contactCard}>
          <p className={styles.contactText}>
            Искали конкретный проект и не нашли? Напишите — подскажем, где он.
          </p>
          <a
            className={styles.contactLink}
            href="https://t.me/KUZNETSOVA_designn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Написать в Telegram
            <ArrowIcon />
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
