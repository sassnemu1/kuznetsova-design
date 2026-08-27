"use client";

import Link from "next/link";

import { useT } from "@/context/LanguageContext";

import styles from "./not-found.module.css";

/**
 * Текстовая часть страницы 404.
 *
 * Вынесена в клиентский компонент: сама not-found.jsx остаётся серверной
 * (Navbar и Footer живут там), а весь текст здесь переключается через useT().
 * Ключи словаря — notFound.*, русский оригинал передан вторым аргументом t()
 * как запасной вариант.
 */

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

export default function NotFoundContent() {
  const t = useT();

  const routes = [
    {
      href: "/",
      num: "01",
      label: t("notFound.homeLabel", "Главная"),
      title: t("notFound.homeTitle", "На главную"),
      desc: t(
        "notFound.homeDesc",
        "Студия, услуги и то, как мы работаем — с самого начала."
      ),
    },
    {
      href: "/work",
      num: "02",
      label: t("notFound.workLabel", "Портфолио"),
      title: t("notFound.workTitle", "В портфолио"),
      desc: t(
        "notFound.workDesc",
        "Проекты бюро: брендинг, сайты, 3D и работа с соцсетями."
      ),
    },
    {
      href: "/blog",
      num: "03",
      label: t("notFound.blogLabel", "Блог"),
      title: t("notFound.blogTitle", "В блог"),
      desc: t(
        "notFound.blogDesc",
        "Заметки, события и разборы проектов из жизни студии."
      ),
    },
  ];

  return (
    <div className={styles.inner}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>
          {t("notFound.eyebrow", "Ошибка 404")}
        </span>
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <h1 className={styles.title}>
          {t("notFound.title", "Такой страницы")}{" "}
          <em>{t("notFound.titleAccent", "не существует")}</em>
          {t("notFound.titleEnd", ".")}
        </h1>
        <p className={styles.lead}>
          {t(
            "notFound.lead",
            "Возможно, адрес набран с опечаткой, страница переехала или проект, который вы искали, мы убрали из открытого портфолио. Ниже — короткие пути туда, где точно есть что посмотреть."
          )}
        </p>
      </header>

      <nav
        className={styles.routes}
        aria-label={t("notFound.navLabel", "Основные разделы сайта")}
      >
        {routes.map((route) => (
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
          {t(
            "notFound.contactText",
            "Искали конкретный проект и не нашли? Напишите — подскажем, где он."
          )}
        </p>
        <a
          className={styles.contactLink}
          href="https://t.me/KUZNETSOVA_designn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("notFound.contactCta", "Написать в Telegram")}
          <ArrowIcon />
        </a>
      </div>
    </div>
  );
}
