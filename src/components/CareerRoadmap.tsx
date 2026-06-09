import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, GraduationCap, Briefcase, ChevronRight } from 'lucide-react';

export default function CareerRoadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll percentage to path animation
  const pathLength = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);

  const learnerItems = [
    "Explore jobs aligned with acquired skills",
    "Discover internships and full-time roles",
    "Connect certifications with career growth",
    "Build stronger career pathways",
    "Move from learning to employment faster"
  ];

  const orgItems = [
    "Post opportunities within the platform",
    "Connect trained learners with openings",
    "Support student placement initiatives",
    "Promote internal career mobility",
    "Strengthen learning-to-employment outcomes"
  ];

  return (
    <section 
      id="career-development"
      ref={containerRef}
      className="relative min-h-screen py-24 px-4 md:px-8 bg-zinc-50 border-b border-zinc-100 overflow-hidden flex flex-col justify-center"
    >
      <div className="absolute inset-0 bg-[#00000002] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto z-10 relative">
        
        {/* Header Block */}
        <div className="text-center mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0A0A0A] uppercase bg-brand-yellow px-3 py-1 rounded-full">
            CAREER DEVELOPMENT
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-[#0A0A0A] mt-4 mb-4">
            Connect Learning with Career Growth.
          </h2>
          <p className="text-base md:text-lg text-zinc-650 max-w-2xl mx-auto leading-relaxed">
            Learning should lead to opportunity. Upskilled enables organizations, colleges, universities, and training providers to publish job opportunities directly within the platform.
          </p>
        </div>

        {/* Dynamic Timeline Layout with Central Drawing SVG Path Line */}
        <div className="relative mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          
          {/* Central drawing line (Absolute, visible on desktop md+) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 hidden md:block z-10">
            <svg className="w-full h-full" viewBox="0 0 4 500" fill="none" preserveAspectRatio="none">
              {/* Background trace line */}
              <line x1="2" y1="0" x2="2" y2="500" stroke="#EDEDF0" strokeWidth="3" strokeDasharray="3 3"/>
              {/* Drawing active line */}
              <motion.line 
                x1="2" 
                y1="0" 
                x2="2" 
                y2="500" 
                stroke="#FFC20E" 
                strokeWidth="4"
                style={{ scaleY: pathLength, transformOrigin: 'top' }}
              />
            </svg>
          </div>

          {/* Left Column: For Learners */}
          <div className="space-y-6 relative">
            <div className="flex items-center gap-3 mb-6 bg-white border border-zinc-200 p-4 rounded-xl shadow-sm md:mr-4">
              <div className="w-10 h-10 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-[#0A0A0A]">For Learners</h3>
                <span className="text-[10px] font-mono text-zinc-400">PERSONALIZED EMPLOYMENT PATHWAY</span>
              </div>
            </div>

            <div className="space-y-4">
              {learnerItems.map((item, id) => (
                <motion.div 
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: id * 0.1 }}
                  className="bg-white border border-zinc-200 p-4 rounded-xl shadow-sm flex items-center gap-3 group hover:border-[#FFC20E] hover:shadow-md transition-all duration-300 md:mr-4"
                >
                  <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center mt-0.5 group-hover:bg-brand-yellow shrink-0 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-black" />
                  </div>
                  <span className="text-sm font-medium text-zinc-700 leading-relaxed font-sans group-hover:text-black">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: For Organizations */}
          <div className="space-y-6 md:pt-16">
            <div className="flex items-center gap-3 mb-6 bg-white border border-zinc-200 p-4 rounded-xl shadow-sm md:ml-4">
              <div className="w-10 h-10 rounded-full bg-zinc-150 flex items-center justify-center text-[#0A0A0A]">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-[#0A0A0A]">For Organizations</h3>
                <span className="text-[10px] font-mono text-zinc-400">ENTERPRISE TALENT PLACEMENT</span>
              </div>
            </div>

            <div className="space-y-4">
              {orgItems.map((item, id) => (
                <motion.div 
                  key={id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: id * 0.1 }}
                  className="bg-white border border-zinc-200 p-4 rounded-xl shadow-sm flex items-center gap-3 group hover:border-[#FFC20E] hover:shadow-md transition-all duration-300 md:ml-4"
                >
                  <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center mt-0.5 group-hover:bg-brand-yellow shrink-0 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-black" />
                  </div>
                  <span className="text-sm font-medium text-zinc-700 leading-relaxed font-sans group-hover:text-black">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
