import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Sparkles, ArrowRight, Play, Server, Brain, Code, FileCheck, Landmark, BarChart } from 'lucide-react';
import { gsap } from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [magneticPos, setMagneticPos] = useState({ x: 0, y: 0 });
  const [demoMagneticPos, setDemoMagneticPos] = useState({ x: 0, y: 0 });

  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 15 });
  
  const bgX = useTransform(springX, [-500, 500], [-15, 15]);
  const bgY = useTransform(springY, [-500, 500], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // GSAP Animation for title words
    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll('.word-span');
      gsap.fromTo(words, 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power4.out', delay: 0.2 }
      );
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Magnetic Button Effect helper
  const handleButtonMouse = (e: React.MouseEvent<HTMLButtonElement>, callback: typeof setMagneticPos) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    callback({ x: x * 0.4, y: y * 0.4 });
  };

  const handleButtonLeave = (callback: typeof setMagneticPos) => {
    callback({ x: 0, y: 0 });
  };

  const trustItems = [
    { text: "Trusted Learning Infrastructure", icon: Server },
    { text: "AI-Powered Learning", icon: Brain },
    { text: "Integrated Jupyter Labs", icon: Code },
    { text: "Automated Assessments", icon: FileCheck },
    { text: "Career Development", icon: Landmark },
    { text: "Measurable Outcomes", icon: BarChart },
  ];

  return (
    <section 
      id="hero"
      ref={containerRef} 
      className="relative min-h-screen flex flex-col justify-between items-center bg-white overflow-hidden pt-28 pb-10 px-4 md:px-8"
    >
      {/* Dynamic Background SVG Network */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 pointer-events-none opacity-[0.12] flex items-center justify-center"
      >
        <svg width="100%" height="100%" className="w-full h-full max-w-7xl" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Animated SVG Pathways */}
          <motion.path 
            d="M100 100 C 300 150, 400 50, 600 200 C 800 350, 700 500, 900 450" 
            stroke="#FFC20E" 
            strokeWidth="3" 
            strokeDasharray="10 15"
            animate={{ strokeDashoffset: [-100, 0] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />
          <motion.path 
            d="M150 450 C 350 350, 200 150, 500 250 C 700 300, 850 150, 950 200" 
            stroke="#0A0A0A" 
            strokeWidth="2" 
            strokeDasharray="5 5"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          />

          {/* SVG Neural Connections */}
          <line x1="200" y1="150" x2="450" y2="250" stroke="#000" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="450" y1="250" x2="650" y2="150" stroke="#000" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="450" y1="250" x2="500" y2="400" stroke="#000" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="650" y1="150" x2="800" y2="350" stroke="#FFC20E" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="500" y1="400" x2="800" y2="350" stroke="#000" strokeWidth="1.5" strokeOpacity="0.4" />

          {/* Animated Node Circles */}
          <circle cx="200" cy="150" r="8" fill="#0A0A0A" />
          <circle cx="450" cy="250" r="12" fill="#FFC20E" className="animate-pulse" />
          <circle cx="650" cy="150" r="10" fill="#0A0A0A" />
          <circle cx="500" cy="400" r="9" fill="#FFC20E" />
          <circle cx="800" cy="350" r="14" fill="#0A0A0A" />
          
          {/* Dynamic Small Floating Particles */}
          <circle cx="300" cy="180" r="4" fill="#FFC20E" opacity="0.8" />
          <circle cx="550" cy="300" r="3" fill="#0A0A0A" opacity="0.6" />
          <circle cx="720" cy="220" r="5" fill="#FFC20E" opacity="0.8" />
        </svg>
      </motion.div>

      {/* Hero Content Area */}
      <div className="w-full max-w-4xl text-center z-10 flex-grow flex flex-col justify-center">
        {/* Subtitle Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 rounded-full bg-brand-light border border-gray-soft self-center"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-yellow animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-[#0A0A0A] font-semibold">
            AI-POWERED LEARNING PLATFORM
          </span>
        </motion.div>

        {/* Word-by-Word Animated Hero Heading */}
        <h1 
          ref={titleRef} 
          className="text-4xl sm:text-6xl md:text-7xl font-bold font-display tracking-tight text-[#0A0A0A] leading-[1.1] mb-8"
        >
          {"The Platform Where Learning Becomes Capability.".split(" ").map((word, idx) => (
            <span key={idx} className="inline-block mr-[0.2em] overflow-hidden py-1">
              <span className="word-span inline-block">
                {word}
              </span>
            </span>
          ))}
        </h1>

        {/* Subparagraph */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base sm:text-lg md:text-xl text-zinc-700 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          Learning isn't measured by course completions.<br />
          It's measured by what people can do after they learn.<br />
          Upskilled combines AI tutors, integrated coding labs, automated assessments, career pathways, and learning intelligence to build real-world skills — and prove real-world outcomes.
        </motion.p>

        {/* Action Buttons with Magnetic/Interactive Effects */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          {/* Start Free Trial Button - Magnetic */}
          <motion.button 
            id="start-trial-btn"
            style={{ x: magneticPos.x, y: magneticPos.y }}
            onMouseMove={(e) => handleButtonMouse(e, setMagneticPos)}
            onMouseLeave={() => handleButtonLeave(setMagneticPos)}
            className="group relative px-8 py-4 bg-brand-yellow hover:bg-[#F0B300] text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            Start Free Trial
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>

          {/* Book a Demo Button */}
          <motion.button 
            id="book-demo-btn"
            style={{ x: demoMagneticPos.x, y: demoMagneticPos.y }}
            onMouseMove={(e) => handleButtonMouse(e, setDemoMagneticPos)}
            onMouseLeave={() => handleButtonLeave(setDemoMagneticPos)}
            className="group relative px-8 py-4 bg-white hover:bg-zinc-50 text-black border border-zinc-200 hover:border-zinc-300 font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow">
              <Play className="w-3 h-3 fill-current" />
            </div>
            Book a Demo
          </motion.button>
        </motion.div>
      </div>

      {/* Trust & Badging Section */}
      <div className="w-full max-w-6xl z-10 border-t border-zinc-100 pt-10">
        <h2 className="text-center text-xs font-mono uppercase tracking-widest text-zinc-400 mb-8 font-semibold">
          Trusted Learning Infrastructure
        </h2>
        
        {/* Grid presentation of ecosystem highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-4 mb-8">
          {trustItems.map((item, id) => {
            const Icon = item.icon;
            return (
              <div 
                key={id}
                className="flex flex-col items-center p-3 rounded-lg border border-transparent hover:border-zinc-100 hover:bg-zinc-50/50 transition-all duration-300 text-center group"
              >
                <div className="w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-4 h-4 text-zinc-700" />
                </div>
                <span className="text-[11px] font-medium text-zinc-600 transition-colors duration-300 group-hover:text-[#0A0A0A]">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Security badge at bottom */}
        <div className="flex justify-center">
          <span className="inline-flex px-4 py-1.5 rounded-full bg-zinc-50 border border-zinc-100 text-xs font-mono font-medium text-zinc-500">
            SOC 2 &middot; HIPAA &middot; ISO 27001
          </span>
        </div>
      </div>
    </section>
  );
}
