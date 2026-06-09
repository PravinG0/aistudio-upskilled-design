import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PlayCircle, Award, CheckCircle2, Badge, Code, Zap, Check, AlertCircle } from 'lucide-react';

export default function LearningGap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Flow animation values
  const pathDraw = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);
  const leftX = useTransform(scrollYProgress, [0.1, 0.4], [-50, 0]);
  const rightX = useTransform(scrollYProgress, [0.1, 0.4], [50, 0]);
  const centerScale = useTransform(scrollYProgress, [0.1, 0.4], [0.7, 1]);

  return (
    <section 
      id="learning-gap"
      ref={containerRef} 
      className="relative min-h-screen py-24 px-4 md:px-8 bg-zinc-50 border-t border-b border-zinc-100 flex flex-col justify-center overflow-hidden"
    >
      {/* Dynamic Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase bg-zinc-100 px-3 py-1 rounded-full">
            THE LEARNING GAP
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-[#0A0A0A] mt-4 mb-6">
            Knowledge Is Everywhere. Capability Is Rare.
          </h2>
          <div className="w-16 h-1 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* The Comparative Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch relative">
          
          {/* Animated Connecting Pathways (SVG) */}
          <div className="absolute inset-0 hidden lg:block pointer-events-none z-20">
            <svg className="w-full h-full" viewBox="0 0 1100 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Left Side (Traditional) to Right Side (Upskilled) Connection Lines */}
              <motion.path 
                d="M 450 150 Q 550 250 650 350" 
                stroke="#FFC20E" 
                strokeWidth="2" 
                strokeDasharray="8 8"
                style={{ pathLength: pathDraw }}
              />
              <motion.path 
                d="M 450 350 Q 550 250 650 150" 
                stroke="#0A0A0A" 
                strokeWidth="1.5" 
                strokeDasharray="4 4"
                style={{ pathLength: pathDraw }}
              />
              <motion.path 
                d="M 450 250 H 650" 
                stroke="#FFC20E" 
                strokeWidth="3" 
                style={{ pathLength: pathDraw }}
              />

              {/* Pulsing center node representing closure of the gap */}
              <motion.circle 
                cx="550" 
                cy="250" 
                r="16" 
                fill="#FFFFFF" 
                stroke="#FFC20E" 
                strokeWidth="4"
                style={{ scale: centerScale }}
              />
              <motion.circle 
                cx="550" 
                cy="250" 
                r="6" 
                fill="#0A0A0A" 
                style={{ scale: centerScale }}
              />
            </svg>
          </div>

          {/* Left Panel: Traditional Learning */}
          <motion.div 
            style={{ x: leftX }}
            className="flex flex-col justify-between bg-white border border-zinc-200/80 rounded-2xl p-8 md:p-10 shadow-sm relative group hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            {/* Red top accent strip representing bottleneck */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-zinc-300" />
            
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono font-bold tracking-wider text-zinc-400 bg-zinc-100 px-2.5 py-1 rounded-sm">
                  TRADITIONAL LEARNING
                </span>
                <span className="flex items-center gap-1.5 text-xs text-orange-600 font-medium font-mono">
                  <AlertCircle className="w-3.5 h-3.5" /> Stop at Content Delivery
                </span>
              </div>

              <div className="space-y-6">
                <div className="border border-zinc-100 rounded-xl p-4 bg-zinc-50/50 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 shrink-0">
                    <PlayCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-800">Video Watch loop</h4>
                    <p className="text-xs text-zinc-500">Unidirectional video consumption, low interaction rates</p>
                  </div>
                </div>

                <div className="border border-zinc-100 rounded-xl p-4 bg-zinc-50/50 flex items-center gap-4 opacity-75">
                  <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-800">Certificate Completion</h4>
                    <p className="text-xs text-zinc-500">Earned for watching, proves attendance, not capability</p>
                  </div>
                </div>

                <div className="p-4 border-l-2 border-zinc-300 bg-zinc-50 text-zinc-600 italic text-sm rounded-r-lg">
                  "Organizations spend billions on learning. Students complete courses. Employees earn certifications. Training programs grow every year."
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-100 mt-8">
              <p className="text-xs text-zinc-400 font-mono">
                Outcome: Completion Rates &gt; Engagement &gt; Applied Skills (Gap Remains)
              </p>
            </div>
          </motion.div>

          {/* Right Panel: Upskilled */}
          <motion.div 
            style={{ x: rightX }}
            className="flex flex-col justify-between bg-white border-2 border-brand-yellow rounded-2xl p-8 md:p-10 shadow-md relative group hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            {/* Yellow glowing header representation */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-yellow animate-pulse" />
            
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono font-bold tracking-wider text-[#0A0A0A] bg-brand-yellow px-2.5 py-1 rounded-sm">
                  UPSKILLED ENVIRONMENT
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold font-mono">
                  <Zap className="w-3.5 h-3.5 animate-bounce" /> Focuses on Performance
                </span>
              </div>

              <div className="space-y-6">
                <div className="border border-brand-yellow/10 rounded-xl p-4 bg-yellow-50/20 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow shrink-0">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0A0A0A]">Interactive Jupyter Labs</h4>
                    <p className="text-xs text-zinc-600">Write, execute, compile code natively in the workspace</p>
                  </div>
                </div>

                <div className="border border-brand-yellow/10 rounded-xl p-4 bg-yellow-50/20 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0A0A0A]">Proven Capability Proving</h4>
                    <p className="text-xs text-zinc-600">Evaluates coding exercises automatically, proving mastery</p>
                  </div>
                </div>

                <div className="p-4 border-l-2 border-brand-yellow bg-yellow-50/20 text-zinc-800 italic text-sm rounded-r-lg">
                  "Yet one challenge remains: how do you know if someone can actually perform?"
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-100 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-zinc-500 font-mono">
                Outcome: Measurable Capability &amp; Real Performance
              </p>
              
              <button 
                id="see-how-works-btn"
                onClick={() => {
                  const el = document.getElementById('learning-experience');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-xs font-bold font-mono text-[#0A0A0A] hover:text-brand-yellow-hover bg-brand-yellow px-4 py-2 rounded-full cursor-pointer transition-colors duration-200"
              >
                See How It Works &rarr;
              </button>
            </div>
          </motion.div>
        </div>

        {/* Narrative Bottom Section */}
        <div className="max-w-3xl mx-auto mt-20 text-center text-lg text-zinc-800 leading-relaxed border-t border-zinc-200/50 pt-10">
          <p className="font-display font-medium text-zinc-900 mb-4 text-xl">
            "Most learning platforms stop at content delivery. Upskilled closes the gap between learning and performance — because learning should create capability, not just completions."
          </p>
        </div>

      </div>
    </section>
  );
}
