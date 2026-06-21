"use client";

import styles from "./TechnicalDesign.module.css";

export default function BlueprintMock({ color }) {
  return (
    <div className={styles.mock} style={{ "--service-color": color }}>
      <div className={styles.mockHeader}>
        <div className={styles.mockDots}><span /><span /><span /></div>
        <span className={styles.mockLabel}>drawing · v2</span>
        <span className={styles.scaleTag}>M 1:1</span>
      </div>

      <div className={styles.blueprintGrid}>
        <svg className={styles.illustration} viewBox="0 0 320 170" fill="none">
          <rect className={styles.draw} x="80" y="35" width="160" height="80" rx="10" pathLength="1" />

          <line className={styles.draw} x1="80" y1="135" x2="240" y2="135" pathLength="1" />
          <line className={styles.draw} x1="80" y1="128" x2="80" y2="142" pathLength="1" />
          <line className={styles.draw} x1="240" y1="128" x2="240" y2="142" pathLength="1" />

          <line className={styles.draw} x1="258" y1="35" x2="258" y2="115" pathLength="1" />
          <line className={styles.draw} x1="251" y1="35" x2="265" y2="35" pathLength="1" />
          <line className={styles.draw} x1="251" y1="115" x2="265" y2="115" pathLength="1" />

          <path className={styles.draw} d="M16,16 H32 M16,16 V32" pathLength="1" />
          <path className={styles.draw} d="M304,16 H288 M304,16 V32" pathLength="1" />
          <path className={styles.draw} d="M16,154 H32 M16,154 V138" pathLength="1" />
          <path className={styles.draw} d="M304,154 H288 M304,154 V138" pathLength="1" />
        </svg>

        <span className={styles.dimLabelBottom}>180 mm</span>
        <span className={styles.dimLabelRight}>96 mm</span>
      </div>
    </div>
  );
}