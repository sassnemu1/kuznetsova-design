import styles from "./ArticleHero.module.css";

export default function ArticleHero({ post }) {
  return (
    <div className={styles.hero}>
      <div
        className={styles.media}
        style={post.image ? { backgroundImage: `url(${post.image})` } : { background: post.bgFallback }}
      />
      <div className={styles.overlay} />

      <div className={styles.meta}>
        <span className={styles.category}>{post.category}</span>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.info}>
          <span>{post.dateLabel}</span>
          <span className={styles.dot} />
          <span>{post.readTime}</span>
        </div>
      </div>
    </div>
  );
}