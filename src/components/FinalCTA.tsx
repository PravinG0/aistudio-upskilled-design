import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, CalendarRange, MessageCircleCode, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Reconnection paths morph values
  const pathTransform = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
  const scaleValue = useTransform(scrollYProgress, [0.3, 0.9], [0.85, 1.05]);

  return (
    <section 
      id="final-cta"
      ref={containerRef}
      className="relative min-h-[90vh] py-28 px-4 md:px-8 bg-white border-t border-zinc-150 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Giant Converging SVG Pathways (Connecting nodes from previous sections) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15] flex items-center justify-center">
        <svg className="w-full h-full max-w-7xl" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Path 1: From Left (LMS Side) to Center */}
          <motion.path 
            d="M 50 100 L 200 150 Q 350 200 500 300" 
            stroke="#FFC20E" 
            strokeWidth="3" 
            strokeDasharray="5 5"
            style={{ pathLength: pathTransform }}
          />

          {/* Path 2: From Right (Jupyter Labs Side) to Center */}
          <motion.path 
            d="M 950 100 L 800 150 Q 650 200 500 300" 
            stroke="#0A0A0A" 
            strokeWidth="2.5" 
            style={{ pathLength: pathTransform }}
          />

          {/* Path 3: From Top (AI core Side) to Center */}
          <motion.path 
            d="M 500 50 L 500 300" 
            stroke="#FFC20E" 
            strokeWidth="4" 
            style={{ pathLength: pathTransform }}
          />

          {/* Path 4: From Bottom Left (Security Stack) to Center */}
          <motion.path 
            d="M 100 500 Q 300 450 500 300" 
            stroke="#0A0A0A" 
            strokeWidth="2" 
            strokeDasharray="10 10"
            style={{ pathLength: pathTransform }}
          />

          {/* Path 5: From Bottom Right (Careers) to Center */}
          <motion.path 
            d="M 900 500 Q 700 450 500 300" 
            stroke="#FFC20E" 
            strokeWidth="3" 
            style={{ pathLength: pathTransform }}
          />

          {/* Central Mega Node representation where everything merges */}
          <motion.circle 
            cx="500" 
            cy="300" 
            r="38" 
            fill="#FFFFFF" 
            stroke="#FFC20E" 
            strokeWidth="6" 
            style={{ scale: scaleValue }}
          />
          <motion.circle 
            cx="500" 
            cy="300" 
            r="16" 
            fill="#0A0A0A" 
            style={{ scale: scaleValue }}
          />

          {/* Connected Peripheral Orbit Circles */}
          <circle cx="50" cy="100" r="12" fill="#0A0A0A" />
          <circle cx="950" cy="100" r="10" fill="#FFC20E" />
          <circle cx="100" cy="500" r="14" fill="#FFC20E" />
          <circle cx="900" cy="500" r="12" fill="#0A0A0A" />
        </svg>
      </div>

      {/* Dynamic drifting background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[8px] h-[8px] bg-brand-yellow rounded-full top-[15%] left-[20%] animate-float opacity-30" />
        <div className="absolute w-[6px] h-[6px] bg-zinc-950 rounded-full top-[75%] left-[15%] animate-float opacity-20" />
        <div className="absolute w-[10px] h-[10px] bg-brand-yellow rounded-full top-[25%] right-[20%] animate-float opacity-40" />
        <div className="absolute w-[5px] h-[5px] bg-zinc-950 rounded-full top-[80%] right-[10%] animate-float opacity-30" />
      </div>

      <div className="w-full max-w-4xl text-center z-10">
        
        {/* Section title badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 rounded-full bg-brand-light border border-gray-soft self-center"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-yellow animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-[#0A0A0A] font-bold">
            GET STARTED TODAY
          </span>
        </motion.div>

        {/* Headline content exactly as provided */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#0A0A0A] leading-[1.1] mb-8"
        >
          Ready to Transform Learning Into Measurable Outcomes?
        </motion.h2>

        {/* Supporting description copy exactly as provided */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-zinc-700 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Whether you are training employees, educating students, or developing future talent, Upskilled provides the tools to create engaging learning experiences, validate skills, and deliver measurable success.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          {/* Button: Book a Personalized Demo */}
          <button 
            id="personalized-demo-btn"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-[#0A0A0A] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            Book a Personalized Demo
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Button: Talk to a Learning Specialist */}
          <button 
            id="talk-specialist-btn"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 bg-zinc-100 hover:bg-zinc-200 text-black border border-zinc-200 font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer font-sans"
          >
            Talk to a Learning Specialist
          </button>
        </motion.div>

        {/* Bottom subtle anchor node reference */}
        <div className="text-[10px] font-mono text-zinc-400 mt-12">
          &copy; {new Date().getFullYear()} Upskilled. All credentials verified. SOC 2 compliant environment.
        </div>

      </div>
    </section>
  );
}
