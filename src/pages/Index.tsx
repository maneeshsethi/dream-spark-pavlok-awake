
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesAndHowItWorksSection from "@/components/FeaturesAndHowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ScienceSection from "@/components/ScienceSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-pavlok-dark text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesAndHowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <ScienceSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
