'use client'

import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import ServicesSlider from "@/components/HomePage/ServicesSlider/ServicesSlider";

import Footer from "@/components/Footer/Footer.jsx";
import AboutSection from "@/components/HomePage/AboutUs/AboutSection";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <ServicesSlider />

      <Navbar />

      <AboutSection />

      <Footer />
    </main>
  );
}