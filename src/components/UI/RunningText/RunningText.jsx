"use client";

import { useEffect, useRef } from "react";
import useGSAP from "@/hooks/useGSAP";

import styles from "./RunningText.module.css";

export default function RunningText({ rows = [] }) {
  const wrapperRef = useRef(null);
  const rowsRef = useRef([]);

  const { gsap } = useGSAP();

  useEffect(() => {
    if (!gsap) return;

    const ctx = gsap.context(() => {
      rowsRef.current.forEach((row, index) => {
        if (!row) return;

        const direction = index % 2 === 0 ? -1 : 1;

        gsap.set(row, {
          xPercent: direction === -1 ? 0 : -50,
        });

        gsap.to(row, {
          xPercent: direction === -1 ? -50 : 0,
          duration: 90 + index * 45,
          ease: "none",
          repeat: -1,
        });
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, [gsap]);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      {rows.map((text, index) => {
        const repeated = Array(20)
          .fill(text)
          .join(" . ");

        return (
          <div
            key={index}
            className={styles.row}
            style={{
              opacity: Math.max(
                0.02,
                0.06 - index * 0.015
              ),
            }}
          >
            <div
              ref={(el) => (rowsRef.current[index] = el)}
              className={styles.track}
            >
              <span>{repeated}</span>
              <span>{repeated}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}