/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { FeaturedWork } from './components/FeaturedWork';
import { BentoGrid } from './components/BentoGrid';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string | undefined>(undefined);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = () => {
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForInquiry(serviceTitle);
    handleOpenContact();
  };

  return (
    <div className="min-h-screen bg-[#F3F6FD] text-slate-800 relative selection:bg-sky-500/20 selection:text-sky-900">
      {/* Background architectural grid pattern */}
      <div className="fixed inset-0 ambient-grid opacity-35 pointer-events-none -z-20" />

      {/* Top ambient color wash */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] ambient-glow-1 pointer-events-none -z-20" />
      <div className="fixed top-[40%] right-0 w-[800px] h-[800px] ambient-glow-2 pointer-events-none -z-20" />

      {/* Global Navigation Header */}
      <Navbar onOpenContact={handleOpenContact} />

      <main>
        {/* 1. Hero Section */}
        <Hero onExploreWork={handleExploreWork} onOpenContact={handleOpenContact} />

        {/* 2. Metrics Ribbon & Quote */}
        <MetricsBar />

        {/* 3. Featured Work / Portfolio Section */}
        <FeaturedWork />

        {/* 4. Bento Grid: Skills, Tech Stack, Design Philosophy */}
        <BentoGrid />

        {/* 5. About / Introduction Section & Interactive Glass Engine */}
        <AboutSection />

        {/* 6. Main Services Showcase */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 7. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 8. Verified Testimonials Section */}
        <Testimonials />

        {/* 9. Strong Call-to-Action & Proposal Form */}
        <ContactCTA initialService={selectedServiceForInquiry} />
      </main>

      {/* 10. Professional Footer */}
      <Footer />
    </div>
  );
}
