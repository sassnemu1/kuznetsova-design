import { getAllPostSlugs } from "@/data/BlogData";
import { getAllWorkSlugs } from "@/data/ServicesData";

const SITE_URL = "https://kuznetsova.design";

export default function sitemap() {
  const staticRoutes = ["", "/work", "/blog"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const workRoutes = getAllWorkSlugs().map((slug) => ({
    url: `${SITE_URL}/work/${slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = getAllPostSlugs().map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...workRoutes, ...blogRoutes];
}
