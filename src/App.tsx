/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Sparkles, Compass, ShieldCheck, Menu, X, ArrowUpRight } from 'lucide-react';

import Hero from './components/Hero';
import LearningGap from './components/LearningGap';
import LearningExperience from './components/LearningExperience';
import JupyterLabs from './components/JupyterLabs';
import AIPoweredTools from './components/AIPoweredTools';
import MeasurableImpact from './components/MeasurableImpact';
import TrainingTypes from './components/TrainingTypes';
import CareerRoadmap from './components/CareerRoadmap';
import Integrations from './components/Integrations';
import SecurityCompliance from './components/SecurityCompliance';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll completion tracker
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", id: "hero" },
    { label: "The Gap", id: "learning-gap" },
    { label: "Experience", id: "learning-experience" },
    { label: "Jupyter", id: "jupyter-labs" },
    { label: "AI Tools", id: "ai-tools" },
    { label: "Metrics", id: "measurable-impact" },
    { label: "Sectors", id: "training-types-section" },
    { label: "Careers", id: "career-development" },
    { label: "Integrations", id: "integrations" },
    { label: "Audits", id: "security-compliance" },
    { label: "FAQ", id: "faq-section" }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-[#0A0A0A] font-sans antialiased text-sm">
      
      {/* Scroll completion visual reading bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-brand-yellow origin-left z-[100]" 
        style={{ scaleX }} 
      />

      {/* Primary Sticky Header Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-md border-b border-zinc-200/60 py-3 shadow-sm' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo Brand Mockup */}
          <div 
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 cursor-pointer group select-none"
          >
            <div className="w-9 h-9 rounded-xl bg-[#0A0A0A] flex items-center justify-center text-brand-yellow font-bold text-base transition-transform group-hover:scale-105 shadow-md border border-zinc-800">
              <span className="font-display font-black text-xs text-white">U</span>
              <span className="font-display font-black text-xs text-brand-yellow">S</span>
            </div>
            
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-[#0A0A0A]">
                Upskilled
              </span>
              <span className="text-[8px] font-mono font-bold tracking-widest text-[#FFC20E] uppercase leading-none">
                AI PLATFORM
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="px-3 py-1.5 rounded-full text-xs font-mono font-bold text-zinc-550 hover:text-black hover:bg-zinc-100/55 transition-all cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Sided Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('final-cta')}
              className="px-5 py-2.5 bg-[#000] hover:bg-zinc-900 text-white font-mono font-bold text-xs rounded-full flex items-center gap-1.5 shadow-sm hover:shadow transition-all cursor-pointer border border-zinc-850"
            >
              Start Free Trial
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger switcher */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 lg:hidden rounded-lg hover:bg-zinc-100 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Floating Interactive drawer for mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[57px] bg-white border-b border-zinc-200 z-40 p-6 flex flex-col gap-3 shadow-lg lg:hidden"
          >
            <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-zinc-400 border-b border-zinc-100 pb-1.5">
              Navigate Systems
            </span>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="px-3 py-2 text-left rounded-lg text-xs font-mono font-bold text-zinc-600 hover:text-black hover:bg-zinc-50 transition-colors cursor-pointer"
                >
                  &middot; {link.label}
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => handleNavClick('final-cta')}
              className="w-full text-center py-3 bg-brand-yellow font-bold font-mono text-xs text-black rounded-lg mt-3"
            >
              Start Free Trial &rarr;
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sequential sections elements */}
      <main className="relative">
        <Hero />
        <LearningGap />
        <LearningExperience />
        <JupyterLabs />
        <AIPoweredTools />
        <MeasurableImpact />
        <TrainingTypes />
        <CareerRoadmap />
        <Integrations />
        <SecurityCompliance />
        <FAQSection />
        <FinalCTA />
      </main>

      {/* Standard humble Footer badge */}
      <footer className="bg-zinc-50 border-t border-zinc-100 py-10 px-4 text-center text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono font-bold text-[10px] tracking-wide text-zinc-400">
          <span>&middot; TRUSTED COMPLIANCE INFRASTRUCTURE ACTIVE &middot;</span>
          <span>&copy; {new Date().getFullYear()} UPSKILLED CORE SYSTEMS &middot; FRA FRAMEWORK BASE</span>
        </div>
      </footer>

    </div>
  );
}
