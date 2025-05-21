
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import UseCasesSection from '@/components/UseCasesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TeaserSection from '@/components/TeaserSection';
import EarlyAccessSection from '@/components/EarlyAccessSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-cre8-bg-dark text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <UseCasesSection />
      <HowItWorksSection />
      <TeaserSection />
      <EarlyAccessSection />
      <Footer />
    </div>
  );
};

export default Index;
