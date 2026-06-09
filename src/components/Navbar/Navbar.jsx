"use client";

import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import styles from "./Navbar.module.css";
import FullMenu from "./FullMenu/FullMenu";

export default function Navbar() {
    const [visible, setVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const start = document.getElementById("menu-start");
        const end = document.getElementById("menu-end");

        if (!start || !end) return;

        let isInside = false;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target.id === "menu-start") {
                        if (entry.isIntersecting) isInside = true;
                    }

                    if (entry.target.id === "menu-end") {
                        if (entry.isIntersecting) isInside = false;
                    }
                });

                setVisible(isInside);
            },
            { threshold: 0 }
        );

        observer.observe(start);
        observer.observe(end);

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