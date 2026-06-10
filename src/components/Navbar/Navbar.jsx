"use client";

import { useEffect, useState } from "react";

import { HiOutlineMenu } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";

import styles from "./Navbar.module.css";

import FullMenu from "./FullMenu/FullMenu";
import BecomeClient from "../BecomeClient/BecomeClient";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClientFormOpen, setIsClientFormOpen] = useState(false);
  const [isServicesVisible, setIsServicesVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("portfolio");

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsServicesVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`${styles.stickyNav} ${
          isServicesVisible ? styles.darkMode : ""
        }`}
      >
        <div className={styles.navContainer}>
          <div className={styles.navRight}>
            <button
              className={styles.clientBtn}
              onClick={() => setIsClientFormOpen(true)}
            >
              <span>Начните проект</span>
              <IoIosArrowForward size={16} />
            </button>

            <button
              className={styles.menuBtn}
              onClick={() => setIsMenuOpen(true)}
            >
              <HiOutlineMenu size={21} />
            </button>
          </div>
        </div>
      </nav>

      <FullMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      <BecomeClient
        isOpen={isClientFormOpen}
        onClose={() => setIsClientFormOpen(false)}
      />
    </>
  );
}