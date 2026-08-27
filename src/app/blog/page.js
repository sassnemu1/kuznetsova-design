import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer.jsx";
import BlogHero from "@/components/Blog/BlogHero/BlogHero";
import FeaturedPost from "@/components/Blog/FeaturedPost/FeaturedPost";
import PostGrid from "@/components/Blog/PostGrid/PostGrid";

import { BLOG_DATA } from "@/data/BlogData";

import styles from "./page.module.css";

const SITE_URL = "https://kuznetsova.design";

export const metadata = {
  title: "Блог и новости",
  description: "Новости, кейсы и инсайты дизайн-бюро Kuznetsova Design: брендинг, веб-разработка, 3D-дизайн.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Блог и новости — Kuznetsova Design",
    description: "Новости, кейсы и инсайты дизайн-бюро Kuznetsova Design.",
    url: `${SITE_URL}/blog`,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Блог", item: `${SITE_URL}/blog` },
  ],
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_DATA;

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

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