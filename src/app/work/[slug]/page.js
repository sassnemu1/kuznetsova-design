import { notFound } from "next/navigation";
import {
  getWorkBySlug,
  getAdjacentWorks,
  getAllWorkSlugs,
} from "@/data/ServicesData";
import WorkCase from "@/components/Work/WorkCase/WorkCase";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer.jsx";

const SITE_URL = "https://kuznetsova.design";

export async function generateStaticParams() {
  return getAllWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    return { title: "Проект не найден — Kuznetsova Design" };
  }

  const title = `${work.title} — ${work.sub}`;

  return {
    title,
    description: work.description,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title,
      description: work.description,
      url: `${SITE_URL}/work/${slug}`,
      images: work.image ? [{ url: work.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: work.description,
      images: work.image ? [work.image] : undefined,
    },
  };
}

export default async function WorkPage({ params }) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) notFound();

  const { prev, next } = getAdjacentWorks(slug);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Портфолио", item: `${SITE_URL}/work` },
      { "@type": "ListItem", position: 3, name: work.title, item: `${SITE_URL}/work/${slug}` },
    ],
  };

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: work.title,
    description: work.description,
    image: work.image ? `${SITE_URL}${work.image}` : undefined,
    url: `${SITE_URL}/work/${slug}`,
    creator: { "@id": `${SITE_URL}/#organization` },
    about: work.serviceTitle,
    keywords: (work.tags ?? []).join(", "),
    ...(work.client ? { creditText: work.client } : {}),
    ...(work.year ? { dateCreated: work.year } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbJsonLd, creativeWorkJsonLd]),
        }}
      />
      <Navbar />
      <WorkCase work={work} prev={prev} next={next} />
      <Footer />
    </>
  );
}
