import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer.jsx";
import BlogHero from "@/components/Blog/BlogHero/BlogHero";
import FeaturedPost from "@/components/Blog/FeaturedPost/FeaturedPost";
import PostGrid from "@/components/Blog/PostGrid/PostGrid";

import { BLOG_DATA } from "@/data/BlogData";

import styles from "./page.module.css";

export const metadata = {
  title: "Блог&Новости — Kuznetsova Design",
  description: "Новости, кейсы и инсайты дизайн-бюро Kuznetsova Design.",
  openGraph: {
    title: "Журнал — Kuznetsova Design",
    description: "Новости, кейсы и инсайты дизайн-бюро Kuznetsova Design.",
  },
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_DATA;

  return (
    <main className={styles.page}>
      <Navbar />

      <BlogHero />

      <div className={styles.content}>
        {featured && <FeaturedPost post={featured} />}
        <PostGrid posts={rest} />
      </div>

      <Footer />
    </main>
  );
}