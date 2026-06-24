import Link from "next/link";
import styles from "./BackLink.module.css";

export default function BackLink({ href = "/work", label = "Портфолио" }) {
  return (
    <Link href={href} className={styles.back}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {label}
    </Link>
  );
}