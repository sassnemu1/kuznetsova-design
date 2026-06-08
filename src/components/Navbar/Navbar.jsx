"use client";

import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import styles from "./Navbar.module.css";
import FullMenu from "./FullMenu/FullMenu";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const aboutSection = document.getElementById("studio");

    if (!aboutSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(aboutSection);

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <nav
      className={`${styles.stickyNav} ${
        visible ? styles.visible : ""
      }`}
    >
      <div className={styles.navContainer}>
        <div className={styles.navRight}>
          <button className={styles.clientBtn}>
            Стать клиентом ↗
          </button>

          <button
            className={styles.menuBtn}
            aria-label="Открыть меню"
            onClick={() => setIsMenuOpen(true)}
          >
            <HiOutlineMenu size={21} />
          </button>
        </div>
      </div>
    </nav>

    <FullMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}/>
    </>
  );
}