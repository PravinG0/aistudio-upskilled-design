import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Network, Link2, Share2, Cable, Database, Globe2 } from 'lucide-react';

export default function Integrations() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    "Video Conferencing",
    "Identity Providers",
    "HR & Workforce",
    "Business Intelligence",
    "CRM Platforms",
    "Content Libraries",
    "Enterprise Apps",
    "Custom Integrations"
  ];

  const technologies = [
    { name: "Zoom", category: "Video Conferencing" },
    { name: "Microsoft Teams", category: "Video Conferencing" },
    { name: "Google Workspace", category: "Identity Providers" },
    { name: "SSO — SAML & OAuth", category: "Identity Providers" },
    { name: "Slack", category: "HR & Workforce" },
    { name: "Workday", category: "HR & Workforce" },
    { name: "SAP SuccessFactors", category: "HR & Workforce" },
    { name: "Tableau & Power BI", category: "Business Intelligence" },
    { name: "Salesforce", category: "CRM Platforms" },
    { name: "LTI 1.3", category: "Content Libraries" },
    { name: "SCORM / xAPI / AICC", category: "Content Libraries" },
    { name: "Zapier", category: "Custom Integrations" },
    { name: "REST API", category: "Custom Integrations" },
    { name: "Webhooks", category: "Custom Integrations" }
  ];

  return (
    <section 
      id="integrations" 
      className="relative min-h-screen py-24 px-4 md:px-8 bg-white border-b border-zinc-100 flex flex-col justify-center overflow-hidden"
    >
      {/* Background continuous mesh grid */}
      <div className="absolute inset-0 bg-[#00000003] bg-[size:40px_40px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase bg-zinc-100 px-3 py-1 rounded-full">
            INTEGRATIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-[#0A0A0A] mt-4 mb-4">
            Connect Learning Across Your Technology Ecosystem.
          </h2>
          <p className="text-sm md:text-base text-zinc-650">
            Upskilled integrates with your existing business and education technology stack to create a connected, seamless learning experience.
          </p>
        </div>

        {/* Dynamic Connected Network Layout (Not a standard logo grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Dynamic interactive network map (7 Columns) */}
          <div className="lg:col-span-7 h-[420px] md:h-[480px] bg-zinc-50 border border-zinc-200/80 rounded-2xl relative overflow-hidden flex items-center justify-center p-6 bg-[radial-gradient(#00000005_1.5px,transparent_1.5px)] bg-[size:1.5rem_1.5rem] select-none">
            
            {/* SVG wires linking all structures */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              {/* Dynamic connected line loops to show constant background telemetry */}
              <motion.path 
                d="M 50 240 Q 250 100 450 240 T 850 240" 
                stroke="#FFC20E" 
                strokeWidth="1.5" 
                strokeDasharray="4 6" 
                fill="none" 
                opacity="0.15" 
                animate={{ strokeDashoffset: [-100, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              />
              <motion.path 
                d="M 120 120 C 250 300, 350 50, 480 380" 
                stroke="#0A0A0A" 
                strokeWidth="1" 
                strokeDasharray="2 3" 
                fill="none" 
                opacity="0.1" 
                animate={{ strokeDashoffset: [0, -100] }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              />
            </svg>

            {/* Hub node center */}
            <div className="absolute w-20 h-20 bg-[#0A0A0A] text-white border-2 border-brand-yellow rounded-full flex flex-col items-center justify-center shadow-lg z-20">
              <Network className="w-6 h-6 text-brand-yellow animate-pulse" />
              <span className="text-[8px] font-mono font-bold mt-1 tracking-widest text-[#FFF]">CORE</span>
            </div>

            {/* Orbiting technology bubbles */}
            <div className="absolute inset-0 z-10">
              {/* Symmetrically distributed active bubbles with hover signals */}
              {technologies.map((t, idx) => {
                const angle = (idx / technologies.length) * 360;
                // Calculate responsive spacing radius
                const xDist = 42 + 38 * Math.cos(angle * Math.PI / 180);
                const yDist = 50 + 35 * Math.sin(angle * Math.PI / 180);
                const isActive = activeCategory === t.category;

                return (
                  <motion.div 
                    key={t.name}
                    className={`absolute px-2.5 py-1.5 rounded-full border text-[9px] font-mono cursor-pointer transition-all duration-300 ${
                      isActive 
                        ? 'bg-brand-yellow text-black border-brand-yellow font-bold shadow-md shadow-brand-yellow/10 scale-105' 
                        : 'bg-white text-zinc-600 border-zinc-200 shadow-sm hover:border-zinc-300 hover:text-black'
                    }`}
                    style={{
                      left: `${xDist}%`,
                      top: `${yDist}%`,
                    }}
                    onMouseEnter={() => setActiveCategory(t.category)}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <div className="flex items-center gap-1">
                      <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-black animate-ping' : 'bg-zinc-300'}`} />
                      {t.name}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Live active connection lines shown when category hovered */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md rounded-lg p-3 text-center border border-zinc-200">
              <p className="text-[10px] font-mono text-zinc-650 select-none">
                {activeCategory 
                  ? `Flow State: Connected to tech in ${activeCategory}` 
                  : "Continuous integration signals: ACTIVE and monitoring API flows..."
                }
              </p>
            </div>

          </div>

          {/* Right: Integration Categories display panels (5 Columns) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs uppercase font-mono tracking-widest font-bold text-zinc-500 border-b border-zinc-100 pb-3 mb-6">
              Integration Categories
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {categories.map((cat) => {
                const isHovered = activeCategory === cat;
                return (
                  <div 
                    key={cat}
                    onMouseEnter={() => setActiveCategory(cat)}
                    onMouseLeave={() => setActiveCategory(null)}
                    className={`p-4 rounded-xl border text-left cursor-pointer transition-all duration-300 relative ${
                      isHovered 
                        ? 'bg-[#0A0A0A] border-zinc-900 text-white shadow-md' 
                        : 'bg-zinc-50 border-zinc-200/60 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100/30'
                    }`}
                  >
                    {isHovered && (
                      <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-brand-yellow rounded-full animate-ping" />
                    )}
                    
                    <h4 className="text-xs font-bold font-mono tracking-wide uppercase mb-1">
                      {cat}
                    </h4>
                    <span className="text-[10px] text-zinc-400 group-hover:text-zinc-300">
                      View Integrations &rarr;
                    </span>
                  </div>
                );
              })}
            </div>
            
            <div className="p-4 border-l-2 border-brand-yellow bg-zinc-50 rounded-r-lg mt-6">
              <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase font-bold block mb-1">Ecosystem Check</span>
              <p className="text-[11px] text-zinc-600 font-medium">
                Compatible with standard LTI 1.3 LMS hooks, SCORM courses, HR systems, webhooks, REST endpoint networks &amp; OAuth Single Sign-on.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
