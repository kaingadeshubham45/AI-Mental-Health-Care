import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ImpactSection from "./components/ImpactSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";

export default function App() {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  const openSupportModal = () => setIsSupportModalOpen(true);
  const closeSupportModal = () => setIsSupportModalOpen(false);

  return (
    <div className="min-h-screen text-gray-100 font-sans selection:bg-[#7EF9FF] selection:text-[#140A2E]">
      
      {/* Dynamic Sticky Navigation header */}
      <Navbar onOpenSupportModal={openSupportModal} />

      {/* Hero viewport wrapper */}
      <HeroSection />

      {/* Problem presentation section */}
      <ProblemSection />

      {/* Core AI features presentation */}
      <FeaturesSection />

      {/* Flow timeline tutorial steps */}
      <HowItWorksSection />

      {/* India Map Geographic Interactive Dashboard */}
      <ImpactSection />

      {/* Clinical feedback opinions testimonials slider */}
      <TestimonialsSection />

      {/* Action section banner */}
      <CallToAction onOpenSupportModal={openSupportModal} />

      {/* Venture-Backed Legal layout elements footer */}
      <Footer onOpenSupportModal={openSupportModal} />

      {/* Connected Partner Proposal registration dialog */}
      <ContactModal isOpen={isSupportModalOpen} onClose={closeSupportModal} />

    </div>
  );
}
