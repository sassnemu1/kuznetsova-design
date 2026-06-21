"use client";

import styles from "./TechnicalDesign.module.css";

export default function SchematicMock({ color }) {
  return (
    <div className={styles.mock} style={{ "--service-color": color }}>
      <div className={styles.mockHeader}>
        <div className={styles.mockDots}><span /><span /><span /></div>
        <span className={styles.mockLabel}>schematic · sheet 1</span>
        <span className={styles.scaleTag}>rev b</span>
      </div>

      <div className={styles.schematicArea}>
        <svg className={styles.illustration} viewBox="0 0 320 160" fill="none">
          <path
            id="schPath"
            className={styles.schWire}
            d="M14,80 H60 L68,66 L76,94 L84,66 L92,94 L100,66 L110,80 H306"
          />

          <rect className={styles.schChip} x="210" y="55" width="70" height="50" />

          <line className={styles.schWire} x1="225" y1="45" x2="225" y2="55" />
          <line className={styles.schWire} x1="245" y1="45" x2="245" y2="55" />
          <line className={styles.schWire} x1="265" y1="45" x2="265" y2="55" />
          <line className={styles.schWire} x1="225" y1="105" x2="225" y2="115" />
          <line className={styles.schWire} x1="245" y1="105" x2="245" y2="115" />
          <line className={styles.schWire} x1="265" y1="105" x2="265" y2="115" />

          <circle r="3.5" className={styles.schPulse}>
            <animateMotion dur="4.5s" repeatCount="indefinite">
              <mpath href="#schPath" xlinkHref="#schPath" />
            </animateMotion>
          </circle>
        </svg>

        <span className={styles.compLabel} style={{ left: "24%", top: "30%" }}>R1</span>
        <span className={styles.compLabel} style={{ left: "76%", top: "20%" }}>U1</span>
      </div>
    </div>
  );
}