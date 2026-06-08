'use client'

import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import ServicesSlider from "@/components/HomePage/ServicesSlider/ServicesSlider";

import Footer from "@/components/Footer/Footer.jsx";
import AboutSection from "@/components/HomePage/AboutUs/AboutUs";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <ServicesSlider />

      <AboutSection />

      <Footer />
    </main>
  );
}