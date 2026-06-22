import styles from "./ArticleBody.module.css";

export default function ArticleBody({ content }) {
  return (
    <div className={styles.body}>
      {content.map((paragraph, i) => (
        <p key={i} className={styles.paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}