import { Suspense } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer.jsx";
import AuthPanel from "@/components/Auth/AuthPanel/AuthPanel";

import styles from "./page.module.css";

export const metadata = {
  title: "Личный кабинет",
  description:
    "Доступ к дашборду и CRM Kuznetsova Design: отраслевые модули, заявки, аналитика и роли сотрудников в одном кабинете. Здесь можно запросить доступ для своей компании.",
  alternates: { canonical: "/login" },
  // Страница аккаунта не должна попадать в индекс — только переходы по ссылкам.
  robots: { index: false, follow: true },
};

export default function LoginPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Кабинет клиента</p>
          <h1 className={styles.title}>
            Вход в <em>dash</em>
          </h1>
          <p className={styles.lead}>
            Дашборд и CRM для клиентов бюро: заявки с сайта, отраслевые модули,
            роли сотрудников и отчёты. Кабинет заводит студия — доступ выдаётся
            по запросу.
          </p>
        </header>

        {/* AuthPanel читает ?mode=request через useSearchParams — обязателен Suspense. */}
        <Suspense
          fallback={
            <div className={styles.fallback} aria-busy="true">
              <span className={styles.fallbackLabel}>Загружаем панель…</span>
            </div>
          }
        >
          <AuthPanel />
        </Suspense>
      </div>

      <Footer />
    </main>
  );
}
