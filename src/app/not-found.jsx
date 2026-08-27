import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer.jsx";

import NotFoundContent from "./not-found.content.jsx";

import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <Navbar />

      <NotFoundContent />

      <Footer />
    </main>
  );
}
