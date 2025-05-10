
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DeviceAndAppSection from "@/components/DeviceAndAppSection";
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
      <DeviceAndAppSection />
      <AboutSection />
      <FeaturesAndHowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <ScienceSection />
      <FAQSection />
      
      <div className="section-container text-center py-8">
        <Link to="/medical-professionals" className="inline-block text-pavlok-purple hover:text-pavlok-blue transition-colors">
          <span className="animated-border">Are you a medical professional? Check out Shock Clock Max →</span>
        </Link>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
