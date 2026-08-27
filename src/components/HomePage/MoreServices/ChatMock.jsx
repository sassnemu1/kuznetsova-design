"use client";

import { useT } from "@/context/LanguageContext";
import styles from "./MoreServices.module.css";

export default function ChatMock({ messages, color }) {
  const t = useT();

  return (
    <div className={styles.mock} style={{ "--service-color": color }}>
      <div className={styles.mockHeader}>
        <div className={styles.mockDots}>
          <span /><span /><span />
        </div>
        <span className={styles.mockLabel}>
          {t("more.chatLabel", "telegram · бот")}
        </span>
        <span className={styles.onlineDot} />
      </div>

      <div className={styles.chatBody}>
        {messages.map((m, i) => (
          <div
            key={i}
            className={`${styles.bubble} ${m.from === "bot" ? styles.bubbleBot : styles.bubbleUser}`}
          >
            {m.text}
          </div>
        ))}
      </div>
    </div>
  );
}
