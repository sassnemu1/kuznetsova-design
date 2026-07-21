import { getAllPostSlugs, getPostBySlug } from "@/data/BlogData";
import { getAllWorkSlugs } from "@/data/ServicesData";

const SITE_URL = "https://kuznetsova.design";

const STATIC_ROUTES = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/work", priority: 0.9, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap() {
  const staticRoutes = STATIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const workRoutes = getAllWorkSlugs().map((slug) => ({
    url: `${SITE_URL}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes = getAllPostSlugs().map((slug) => {
    const post = getPostBySlug(slug);
    return {
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: post?.date ? new Date(post.date) : new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    };
  });

  return [...staticRoutes, ...workRoutes, ...blogRoutes];
}
