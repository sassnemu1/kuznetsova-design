import Link from "next/link";
import styles from "./FeaturedPost.module.css";

export default function FeaturedPost({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.featured}>
      <div
        className={styles.media}
        style={post.image ? { backgroundImage: `url(${post.image})` } : { background: post.bgFallback }}
      />
      <div className={styles.overlay} />

      <div className={styles.body}>
        <span className={styles.category}>{post.category}</span>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <div className={styles.meta}>
          <span>{post.date}</span>
          <span className={styles.dot} />
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
}