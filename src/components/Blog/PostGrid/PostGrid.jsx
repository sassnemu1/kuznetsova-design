import PostCard from "../PostCard/PostCard";
import styles from "./PostGrid.module.css";

export default function PostGrid({ posts }) {
  if (!posts.length) return null;

  return (
    <>
      <div className={styles.header}>
        <span className={styles.label}>Все материалы</span>
        <div className={styles.line} />
      </div>
      <div className={styles.grid}>
        {posts.map((post, i) => (
          <PostCard key={post.slug} post={post} index={i} />
        ))}
      </div>
    </>
  );
}