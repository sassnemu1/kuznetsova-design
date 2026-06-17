'use client'

import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import ServicesSlider from "@/components/HomePage/ServicesSlider/ServicesSlider";

import Footer from "@/components/Footer/Footer.jsx";
import AboutSection from "@/components/HomePage/AboutUs/AboutSection";
import Navbar from "@/components/Navbar/Navbar";
import ProcessSection from "@/components/HomePage/ProcessSection/ProcessSection";
import Ticker from "@/components/UI/Ticker/Ticker";
import Reviews from "@/components/HomePage/Reviews/Reviews";

export default function Home() {
  return (
    <main>
      <Navbar />

      <HeroSection />

      <ServicesSlider />

      <AboutSection />

      {/* <Reviews /> */}

      <Ticker />

      <ProcessSection />

      <Footer />
    </main>
  );
}