import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

export default function MeasurableImpact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Custom Animated Counters
  const [gradingCount, setGradingCount] = useState(0);
  const [onboardCount, setOnboardCount] = useState(0);
  const [timeMultiplier, setTimeMultiplier] = useState(0);
  const [waitMinutes, setWaitMinutes] = useState(20);

  useEffect(() => {
    if (isInView) {
      // 0 to 80
      let gradingTimer = setInterval(() => {
        setGradingCount(prev => {
          if (prev >= 80) {
            clearInterval(gradingTimer);
            return 80;
          }
          return prev + 2;
        });
      }, 30);

      // 0 to 40
      let onboardTimer = setInterval(() => {
        setOnboardCount(prev => {
          if (prev >= 40) {
            clearInterval(onboardTimer);
            return 40;
          }
          return prev + 1;
        });
      }, 40);

      // 0 to 3
      let multiplierTimer = setInterval(() => {
        setTimeMultiplier(prev => {
          if (prev >= 3) {
            clearInterval(multiplierTimer);
            return 3;
          }
          return prev + 1;
        });
      }, 400);

      // 60 to 5
      let minutesTimer = setInterval(() => {
        setWaitMinutes(prev => {
          if (prev <= 5) {
            clearInterval(minutesTimer);
            return 5;
          }
          return prev - 3;
        });
      }, 100);

      return () => {
        clearInterval(gradingTimer);
        clearInterval(onboardTimer);
        clearInterval(multiplierTimer);
        clearInterval(minutesTimer);
      };
    }
  }, [isInView]);

  return (
    <section 
      id="measurable-impact"
      ref={containerRef}
      className="relative min-h-screen py-24 px-4 md:px-8 bg-white border-b border-zinc-100 flex flex-col justify-center overflow-hidden"
    >
      {/* Decorative Floating SVG Graph elements in background */}
      <div className="absolute right-0 top-1/4 w-96 h-96 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#000" strokeWidth="0.5" />
          <path d="M10 50 Q30 20 50 80 T90 40" fill="none" stroke="#000" strokeWidth="1" />
        </svg>
      </div>

      <div className="w-full max-w-6xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase bg-zinc-100 px-3 py-1 rounded-full inline-block">
            MEASURABLE IMPACT
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-[#0A0A0A] mt-4 mb-4">
            Measure What Matters.
          </h2>
          <p className="text-base md:text-lg text-zinc-650 max-w-2xl">
            Learning initiatives should deliver more than course completions. They should improve capability, readiness, performance, and growth.
          </p>
        </div>

        {/* Dynamic Layout Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Key Outcomes List (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-xs uppercase font-mono tracking-widest font-bold text-zinc-500 border-b border-zinc-100 pb-3">
              Key Outcomes
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-yellow/10 text-brand-yellow flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  A
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#0A0A0A]">Track Skill Development</h4>
                  <p className="text-sm text-zinc-655 mt-1 leading-relaxed">
                    Understand how learners progress from foundational knowledge to practical competency.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#0A0A0A]/5 text-[#0A0A0A] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  B
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#0A0A0A]">Monitor Workforce Readiness</h4>
                  <p className="text-sm text-zinc-655 mt-1 leading-relaxed">
                    Measure preparedness across teams, departments, classrooms, and learning programs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-yellow/10 text-brand-yellow flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  C
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#0A0A0A]">Improve Learning Effectiveness</h4>
                  <p className="text-sm text-zinc-655 mt-1 leading-relaxed">
                    Identify which learning experiences deliver the strongest outcomes — and optimize spend.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#0A0A0A]/5 text-[#0A0A0A] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  D
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#0A0A0A]">Support Compliance Readiness</h4>
                  <p className="text-sm text-zinc-655 mt-1 leading-relaxed">
                    Track certifications, completions, and regulatory requirements with audit-ready logs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bento-style Metric Blocks (7 Columns) */}
          <div className="lg:col-span-7">
            <h3 className="text-xs uppercase font-mono tracking-widest font-bold text-zinc-500 border-b border-zinc-100 pb-3 mb-8">
              Impact Metrics
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: 80% */}
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-6 relative group hover:border-[#FFC20E] transition-all duration-300">
                <div className="absolute top-4 right-4 text-[10px] font-mono text-zinc-400">01 / ROI</div>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-5xl font-black font-display tracking-tight text-[#0A0A0A]">
                    {gradingCount}%
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-[#0A0A0A] mt-4 mb-1">
                  Grading Time Reduced
                </h4>
                <p className="text-xs text-zinc-550 leading-relaxed">
                  From 60% of instructor time on grading to under 10%
                </p>
                
                {/* Micro SVG progress bar inside */}
                <div className="w-full bg-zinc-200 h-1 rounded-full mt-4 overflow-hidden">
                  <motion.div 
                    className="bg-brand-yellow h-full" 
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "80%" } : {}}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>

              {/* Card 2: 40% */}
              <div className="bg-[#0A0A0A] border border-zinc-900 rounded-2xl p-6 text-white relative group hover:shadow-lg transition-all duration-300">
                <div className="absolute top-4 right-4 text-[10px] font-mono text-zinc-500">02 / FLOW</div>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-5xl font-black font-display tracking-tight text-white">
                    {onboardCount}%
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-brand-yellow mt-4 mb-1">
                  Faster Onboarding
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  New hires reach productivity faster with AI-guided onboarding
                </p>

                {/* Micro SVG circle meter inside */}
                <svg className="w-10 h-10 absolute bottom-4 right-4" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#222" strokeWidth="3" />
                  <motion.circle 
                    cx="18" cy="18" r="16" fill="none" stroke="#FFC20E" strokeWidth="3"
                    strokeDasharray="100"
                    initial={{ strokeDashoffset: 100 }}
                    animate={isInView ? { strokeDashoffset: 60 } : {}}
                    transition={{ duration: 1.2 }}
                  />
                </svg>
              </div>

              {/* Card 3: 3x */}
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-6 relative group hover:border-[#FFC20E] transition-all duration-300">
                <div className="absolute top-4 right-4 text-[10px] font-mono text-zinc-400">03 / VELOCITY</div>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-5xl font-black font-display tracking-tight text-[#0A0A0A]">
                    {timeMultiplier}x
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-[#0A0A0A] mt-4 mb-1">
                  Faster Time-to-Skill
                </h4>
                <p className="text-xs text-zinc-550 leading-relaxed">
                  Hands-on labs drive 3× faster skill acquisition than video-only learning
                </p>
                {/* Small indicator */}
                <div className="absolute bottom-4 right-4 w-4 h-4 rounded-full bg-brand-yellow animate-ping opacity-25" />
              </div>

              {/* Card 4: 5 min */}
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-6 relative group hover:border-[#FFC20E] transition-all duration-300">
                <div className="absolute top-4 right-4 text-[10px] font-mono text-zinc-400">04 / SUPPORT</div>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-5xl font-black font-display tracking-tight text-[#0A0A0A]">
                    {waitMinutes} min
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-[#0A0A0A] mt-4 mb-1">
                  Doubt Resolution
                </h4>
                <p className="text-xs text-zinc-550 leading-relaxed">
                  Down from 8 hours — AI answers learner questions in under 5 minutes
                </p>
              </div>

              {/* Card 5: Full Width Pricing Metric */}
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-6 relative group hover:border-[#FFC20E] transition-all duration-300 sm:col-span-2">
                <div className="absolute top-4 right-4 text-[10px] font-mono text-zinc-400">05 / VALUE</div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                  <div>
                    <div className="text-4xl sm:text-5xl font-black font-display tracking-tight text-[#0A0A0A]">
                      &lt;$5
                    </div>
                    <span className="text-xs font-semibold text-zinc-500 font-mono">
                      Per Learner Per Month
                    </span>
                  </div>
                  
                  <div className="sm:max-w-[300px]">
                    <h4 className="text-sm font-semibold text-[#0A0A0A] mb-1">
                      Predictable Scale Cost
                    </h4>
                    <p className="text-xs text-zinc-550 leading-relaxed">
                      Open-source base + predictable cloud pricing. Compare to $15–$60 on Coursera or LinkedIn Learning.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
