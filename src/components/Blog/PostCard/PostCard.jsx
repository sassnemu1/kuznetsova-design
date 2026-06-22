import Link from "next/link";
import styles from "./PostCard.module.css";

export default function PostCard({ post, index = 0 }) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <div
        className={styles.thumb}
        style={
          post.image
            ? { backgroundImage: `url(${post.image})` }
            : { background: post.bgFallback }
        }
      >
        <div className={styles.thumbOverlay} />
        <span className={styles.thumbCategory}>{post.category}</span>
        <span className={styles.thumbNum}>
          {String(index + 2).padStart(2, "0")}
        </span>
      </div>

      <div className={styles.body}>
        <div>
          <p className={styles.date}>{post.date}</p>
          <h3 className={styles.title}>{post.title}</h3>
        </div>

        <div className={styles.footer}>
          <span className={styles.readTime}>{post.readTime}</span>
          <div className={styles.arrow}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}