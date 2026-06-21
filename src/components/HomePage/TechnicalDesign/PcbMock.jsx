"use client";

import styles from "./TechnicalDesign.module.css";

export default function PcbMock({ color }) {
  return (
    <div className={styles.mock} style={{ "--service-color": color }}>
      <div className={styles.mockHeader}>
        <div className={styles.mockDots}><span /><span /><span /></div>
        <span className={styles.mockLabel}>layout · top layer</span>
        <span className={styles.scaleTag}>2L</span>
      </div>

      <div className={styles.pcbArea}>
        <svg className={styles.illustration} viewBox="0 0 320 170" fill="none">
          <rect className={styles.pcbBoard} x="20" y="20" width="280" height="130" rx="6" />

          <path id="pcbPath1" className={styles.pcbTrace} d="M30,45 H145 V55" />
          <path className={styles.pcbTrace} d="M30,125 H145 V115" />
          <path className={styles.pcbTrace} d="M190,85 H280" />

          <circle className={styles.pcbVia} cx="145" cy="45" r="4" />
          <circle className={styles.pcbVia} cx="145" cy="125" r="4" />

          <rect className={styles.pcbPad} x="14" y="40" width="14" height="10" />
          <rect className={styles.pcbPad} x="14" y="120" width="14" height="10" />
          <rect className={styles.pcbPad} x="292" y="80" width="14" height="10" />

          <rect className={styles.pcbPart} x="60" y="95" width="22" height="10" />
          <rect className={styles.pcbPart} x="60" y="115" width="22" height="10" />

          <rect className={styles.pcbChip} x="130" y="55" width="60" height="60" />
          <circle className={styles.pcbVia} cx="138" cy="63" r="2.5" />

          <circle r="3.5" className={styles.pcbPulse}>
            <animateMotion dur="4s" repeatCount="indefinite">
              <mpath href="#pcbPath1" xlinkHref="#pcbPath1" />
            </animateMotion>
          </circle>
        </svg>

        <span className={styles.compLabel} style={{ left: "47%", top: "26%" }}>U1</span>
        <span className={styles.compLabel} style={{ left: "20%", top: "53%" }}>R3</span>
        <span className={styles.compLabel} style={{ left: "20%", top: "65%" }}>C2</span>
      </div>
    </div>
  );
}