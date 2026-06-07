'use client'


import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import ServicesSlider from "@/components/HomePage/ServicesSlider/ServicesSlider";
import Footer from "@/components/Footer/Footer.jsx";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSlider />
      <Footer />
    </main>
  );
}