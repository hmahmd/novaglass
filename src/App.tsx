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
import { ArrowUpRight, Sparkles } from 'lucide-react';

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
    <div className="min-h-screen bg-[#F3F6FD] text-slate-800 relative selection:bg-sky-500/20 selection:text-sky-900 overflow-x-hidden w-full max-w-full">
      {/* Background architectural grid pattern & ambient lighting wrapped safely inside an overflow-hidden container */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
        <div className="absolute inset-0 ambient-grid opacity-35" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[1000px] h-[400px] sm:h-[600px] ambient-glow-1" />
        <div className="absolute top-[40%] -right-20 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] ambient-glow-2" />
      </div>

      {/* Global Navigation Header */}
      <Navbar onOpenContact={handleOpenContact} />

      <main className="overflow-x-hidden w-full max-w-full">
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

      {/* Mobile Floating Action Dock for effortless thumb interaction */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40 max-w-md mx-auto">
        <div className="glass-panel rounded-2xl p-2 px-3 border border-white/95 shadow-xl shadow-sky-950/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-mono font-medium text-slate-700">Available Q1 2026</span>
          </div>

          <button
            onClick={handleOpenContact}
            className="glass-button-primary px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>Inquire Now</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
