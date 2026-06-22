import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "@/data/BlogData";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer.jsx";
import BackLink from "@/components/Work/BackLink/BackLink";
import ArticleHero from "@/components/Blog/ArticleHero/ArticleHero";
import ArticleBody from "@/components/Blog/ArticleBody/ArticleBody";

import styles from "./page.module.css";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Статья не найдена — Kuznetsova Design" };
  }

  return {
    title: `${post.title} — Kuznetsova Design`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [{ url: post.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main>
      <Navbar />

      <div className={styles.page}>
        <BackLink href="/blog" label="Журнал" />

        <ArticleHero post={post} />

        <div className={styles.inner}>
          <ArticleBody content={post.content} />
        </div>
      </div>

      <Footer />
    </main>
  );
}