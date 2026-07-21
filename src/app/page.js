import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import ServicesSlider from "@/components/HomePage/ServicesSlider/ServicesSlider";

import Footer from "@/components/Footer/Footer.jsx";
import AboutSection from "@/components/HomePage/AboutUs/AboutSection";
import Navbar from "@/components/Navbar/Navbar";
import ProcessSection from "@/components/HomePage/ProcessSection/ProcessSection";
import Ticker from "@/components/UI/Ticker/Ticker";
import MoreServices from "@/components/HomePage/MoreServices/MoreServices";
import TechnicalDesign from "@/components/HomePage/TechnicalDesign/TechnicalDesign";
import InfoSection from "@/components/HomePage/InfoSection/InfoSection";
import { SERVICES_DATA } from "@/data/ServicesData";

const SITE_URL = "https://kuznetsova.design";

// Список услуг для поисковиков — helps Google/Yandex понять оффер бюро
const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: SERVICES_DATA.map((service, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: service.title.replace("\n", " "),
      description: service.desc,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: [
        { "@type": "City", name: "Москва" },
        { "@type": "Country", name: "Россия" },
      ],
    },
  })),
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      <Navbar />

      <HeroSection />

      <ServicesSlider />

      <MoreServices />

      <TechnicalDesign />

      <InfoSection />

      <AboutSection />

      <Ticker />

      <ProcessSection />

      <Footer />
    </main>
  );
}