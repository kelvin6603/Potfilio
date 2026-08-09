import React, { useState } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyChooseMe } from './components/WhyChooseMe';
import { TechStack } from './components/TechStack';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { InteractiveQuoteCalculator } from './components/InteractiveQuoteCalculator';
import { FloatingWhatsAppWidget } from './components/FloatingWhatsAppWidget';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  const handleOpenQuoteModal = (serviceName: string = '') => {
    setPreselectedService(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setPreselectedService('');
  };

  const handleNavigateToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-blue-500/30 selection:text-blue-300 font-sans antialiased overflow-x-hidden">
      
      {/* Scroll Reading Progress Bar */}
      <ScrollProgressBar />

      {/* Navigation */}
      <Navbar 
        onOpenQuoteModal={() => handleOpenQuoteModal('')} 
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal('')}
          onNavigateToPortfolio={handleNavigateToPortfolio}
        />

        {/* Featured Services */}
        <Services onSelectServiceForQuote={(service) => handleOpenQuoteModal(service)} />

        {/* Portfolio Showcase */}
        <Portfolio onOpenQuoteModal={() => handleOpenQuoteModal('')} />

        {/* Why Choose Kelvin */}
        <WhyChooseMe />

        {/* Tech Stack */}
        <TechStack />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Pricing Plans */}
        <Pricing 
          onSelectPlanForQuote={(plan) => handleOpenQuoteModal(plan)} 
        />

        {/* About Kelvin Muriuki */}
        <About onOpenQuoteModal={() => handleOpenQuoteModal('')} />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Floating Widgets */}
      <InteractiveQuoteCalculator
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        preselectedService={preselectedService}
      />

      <FloatingWhatsAppWidget />

    </div>
  );
}
