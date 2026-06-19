"use client";

import styles from "./MoreServices.module.css";

export default function NetworkMock({ nodes, color }) {
  return (
    <div className={styles.mock} style={{ "--service-color": color }}>
      <div className={styles.mockHeader}>
        <div className={styles.mockDots}>
          <span /><span /><span />
        </div>
        <span className={styles.mockLabel}>ai · pipeline</span>
        <span className={styles.onlineDot} />
      </div>

      <div className={styles.network}>
        <div className={styles.networkTrack} />
        <div className={styles.networkPulse} />
        <div className={styles.networkPulse} style={{ animationDelay: "-2.2s" }} />

        <div className={styles.networkNodes}>
          {nodes.map((label, i) => (
            <div key={label} className={styles.node} style={{ "--n": i }}>
              <span className={styles.nodeDot} />
              <span className={styles.nodeLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}