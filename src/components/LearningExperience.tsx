import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Code2, ServerCrash, Trophy, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function LearningExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCanvasRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      label: "Learn",
      title: "Build Foundational Knowledge",
      description: "Structured learning experiences that build understanding from the ground up — at the learner's pace, with AI support available throughout.",
      icon: GraduationCap,
      color: "#FFC20E"
    },
    {
      num: "02",
      label: "Practice",
      title: "Apply Concepts Immediately",
      description: "Hands-on exercises and interactive Jupyter Labs let learners apply what they just learned — without switching tools or setting up environments.",
      icon: Code2,
      color: "#0A0A0A"
    },
    {
      num: "03",
      label: "Apply",
      title: "Solve Real-World Challenges",
      description: "Practical projects and guided activities that mirror real job tasks — building the muscle memory that makes skills stick and transfer.",
      icon: ServerCrash,
      color: "#FFC20E"
    },
    {
      num: "04",
      label: "Succeed",
      title: "Demonstrate Competency",
      description: "Measurable outcomes, certifications, and career opportunities confirm what learners have built — not just what they watched or clicked through.",
      icon: Trophy,
      color: "#0A0A0A"
    }
  ];

  useEffect(() => {
    // Identify trigger zones for each step to swap the active stage state
    const elements = containerRef.current?.querySelectorAll('.story-text-block');
    if (!elements) return;

    const triggers: ScrollTrigger[] = [];

    elements.forEach((el, index) => {
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveStep(index),
        onEnterBack: () => setActiveStep(index),
      });
      triggers.push(trigger);
    });

    return () => {
      triggers.forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      id="learning-experience"
      ref={containerRef} 
      className="relative min-h-screen bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        
        {/* Intro Static Block */}
        <div className="max-w-3xl mb-24">
          <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase bg-zinc-100 px-3 py-1 rounded-full inline-block mb-3">
            THE LEARNING EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-[#0A0A0A] mb-6">
            Built for Real Skill Development.
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
            Real learning doesn't happen when someone watches a video. It happens when they practice, experiment, fail, improve — and eventually master a skill.
          </p>
        </div>

        {/* Master Pinned Storytelling Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          
          {/* Left Side: Pinned Interactive Canvas (Occupies 5 columns) */}
          <div ref={leftCanvasRef} className="lg:col-span-5 lg:sticky lg:top-32 w-full aspect-square lg:h-[500px] border border-zinc-200 bg-zinc-50/50 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center p-6 bg-[radial-gradient(#00000005_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]">
            
            {/* Ambient Background Glow matching selected step color */}
            <div 
              style={{ backgroundColor: steps[activeStep].color }}
              className="absolute w-60 h-60 rounded-full blur-[100px] opacity-[0.06] transition-colors duration-700 pointer-events-none" 
            />

            <div className="relative w-full h-full flex flex-col justify-between z-10">
              {/* Header inside canvas */}
              <div className="flex items-center justify-between border-b border-zinc-200/60 pb-3">
                <span className="text-[11px] font-mono font-medium text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full animate-ping" />
                  Ecosystem State Simulator
                </span>
                <span className="text-xs font-mono font-bold text-zinc-600">
                  Step {steps[activeStep].num} &middot; {steps[activeStep].label}
                </span>
              </div>

              {/* Central Transformational Graphic Canvas */}
              <div className="flex-grow flex items-center justify-center relative">
                <AnimatePresence mode="wait">
                  {activeStep === 0 && (
                    <motion.div 
                      key="step1-canvas"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col items-center"
                    >
                      {/* Knowledge Particles Animation */}
                      <svg width="220" height="220" viewBox="0 0 100 100">
                        {/* Orbit Circles */}
                        <circle cx="50" cy="50" r="40" stroke="#E4E4E7" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                        <circle cx="50" cy="50" r="25" stroke="#E4E4E7" strokeWidth="1" fill="none" />
                        
                        {/* Floating Knowledge Nodes */}
                        <motion.circle 
                          cx="50" cy="50" r="8" fill="#FFC20E"
                          animate={{ scale: [1, 1.15, 1] }}
                          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        />
                        <motion.circle 
                          cx="20" cy="30" r="5" fill="#0A0A0A"
                          animate={{ x: [0, 8, -4, 0], y: [0, -10, 4, 0] }}
                          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        />
                        <motion.circle 
                          cx="80" cy="40" r="4" fill="#0A0A0A"
                          animate={{ x: [0, -10, 6, 0], y: [0, 8, -4, 0] }}
                          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        />
                        <motion.circle 
                          cx="35" cy="75" r="5" fill="#FFC20E"
                          animate={{ x: [0, 6, -8, 0], y: [0, 4, -8, 0] }}
                          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                        />
                        <motion.circle 
                          cx="70" cy="70" r="3.5" fill="#0A0A0A"
                          animate={{ x: [0, -5, 5, 0], y: [0, -6, 6, 0] }}
                          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        />
                      </svg>
                      <span className="text-[11px] font-mono text-zinc-500 mt-2">
                        System State: Instantiating Knowledge Particles...
                      </span>
                    </motion.div>
                  )}

                  {activeStep === 1 && (
                    <motion.div 
                      key="step2-canvas"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col items-center w-full px-4"
                    >
                      {/* Notebook / Jupyter Lab Active Coding Animation */}
                      <div className="w-full bg-white border border-zinc-200 rounded-lg p-4 font-mono text-[10px] shadow-sm overflow-hidden text-zinc-700">
                        <div className="flex items-center gap-1.5 border-b border-zinc-100 pb-2 mb-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                          <span className="text-zinc-400 text-[9px] ml-1">jupyter_sandbox.ipynb</span>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="text-zinc-400">In [1]:</div>
                          <div className="bg-zinc-50 p-2 rounded border border-zinc-100 text-[#0A0A0A] relative">
                            <span className="text-black font-semibold">import</span> upskilled_lab as ul<br />
                            model = ul.init_model()<br />
                            model.fit(x, y)<br />
                            <span className="inline-block w-1.5 h-3 bg-brand-yellow animate-pulse ml-0.5" />
                          </div>
                          
                          <div className="text-zinc-400">Out [1]:</div>
                          <div className="text-emerald-600 pl-2">
                            Skills Compilation Completed (100%)
                          </div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-500 mt-4">
                        System State: Compiling Particles to Code Skills...
                      </span>
                    </motion.div>
                  )}

                  {activeStep === 2 && (
                    <motion.div 
                      key="step3-canvas"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col items-center"
                    >
                      {/* Skills Moved to Projects Animation */}
                      <div className="relative w-48 h-48 flex items-center justify-center">
                        {/* Dynamic Project Folder Tree / Cube */}
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          {/* Central Active Base */}
                          <motion.rect 
                            x="25" y="30" width="50" height="40" rx="4" fill="none" stroke="#0A0A0A" strokeWidth="2"
                            animate={{ strokeDashoffset: [0, 40], strokeDasharray: "4 4" }}
                            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                          />
                          {/* Connections */}
                          <line x1="50" y1="20" x2="50" y2="30" stroke="#FFC20E" strokeWidth="2" />
                          <line x1="20" y1="50" x2="25" y2="50" stroke="#FFC20E" strokeWidth="2" />
                          <line x1="75" y1="50" x2="80" y2="50" stroke="#FFC20E" strokeWidth="2" />
                          <line x1="50" y1="70" x2="50" y2="80" stroke="#FFC20E" strokeWidth="2" />

                          {/* Pulsing Nodes */}
                          <circle cx="50" cy="20" r="5" fill="#0A0A0A" />
                          <circle cx="20" cy="50" r="5" fill="#FFC20E" />
                          <circle cx="80" cy="50" r="5" fill="#FFC20E" />
                          <circle cx="50" cy="80" r="5" fill="#0A0A0A" />

                          {/* Inner pulsing particle running */}
                          <motion.circle 
                            cx="50" cy="20" r="2" fill="#FFC20E"
                            animate={{ cy: [20, 50, 80, 50, 20], cx: [50, 50, 50, 50, 50] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                          />
                        </svg>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-500 mt-2">
                        System State: Deploying Skills Into Real Projects...
                      </span>
                    </motion.div>
                  )}

                  {activeStep === 3 && (
                    <motion.div 
                      key="step4-canvas"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col items-center w-full px-6"
                    >
                      {/* Success / Proved Certificate and Competency Graph */}
                      <svg className="w-full max-w-[200px] h-32" viewBox="0 0 100 60">
                        {/* Competency Line Graph */}
                        <motion.path 
                          d="M 10 50 Q 25 40 40 45 T 70 20 T 90 10" 
                          fill="none" 
                          stroke="#FFC20E" 
                          strokeWidth="3.5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1 }}
                        />
                        {/* Grid Bars */}
                        <rect x="25" y="40" width="2" height="10" fill="#0A0A0A" opacity="0.2" />
                        <rect x="40" y="45" width="2" height="15" fill="#0A0A0A" opacity="0.2" />
                        <rect x="70" y="20" width="2" height="40" fill="#0A0A0A" opacity="0.2" />
                        <rect x="90" y="10" width="2" height="50" fill="#0A0A0A" opacity="0.2" />
                        
                        {/* Successful Target Star */}
                        <motion.circle 
                          cx="90" cy="10" r="5" fill="#FFC20E"
                          animate={{ scale: [1, 1.4, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </svg>
                      <div className="mt-4 px-3 py-1.5 bg-[#FFC20E]/10 border border-[#FFC20E] text-[#0A0A0A] rounded text-[10px] font-mono text-center">
                        🎓 Verification Code: APPROVED_100_A+
                      </div>
                      <span className="text-[11px] font-mono text-zinc-500 mt-3">
                        System State: Verification Code generated.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Status footer inside canvas */}
              <div className="border-t border-zinc-200/60 pt-3 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span>Buffer Rate: STABLE</span>
                <span>Signal Integrity: 100%</span>
              </div>
            </div>
          </div>

          {/* Right Side: Step descriptions (Occupies 7 columns) */}
          <div className="lg:col-span-7 space-y-16 lg:space-y-0 lg:py-24">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = idx === activeStep;

              return (
                <div 
                  key={idx}
                  className="story-text-block min-h-[60vh] lg:min-h-[85vh] flex flex-col justify-center transition-all duration-500"
                >
                  <div className="relative pl-6 md:pl-10 border-l border-zinc-200/80">
                    {/* Active colored bar indicator */}
                    <motion.div 
                      className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-r transition-all duration-300 ${isActive ? 'bg-brand-yellow' : 'bg-transparent'}`} 
                      layoutId="activeVerticalBar"
                    />

                    {/* Step ID Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-sm font-mono font-bold px-2 py-1.5 rounded ${isActive ? 'bg-brand-yellow text-black' : 'bg-zinc-100 text-zinc-500'}`}>
                        {step.num}
                      </span>
                      <span className="text-xs uppercase font-mono tracking-widest font-bold text-zinc-400">
                        {step.label}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3.5xl font-bold font-display tracking-tight text-[#0A0A0A] mb-4">
                      {step.title}
                    </h3>

                    {/* Body */}
                    <p className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-xl">
                      {step.description}
                    </p>

                    {/* Step Icon Indicator */}
                    <div className="mt-6 flex items-center gap-2">
                      <div className={`p-2.5 rounded-lg border ${isActive ? 'border-brand-yellow/30 bg-brand-yellow/5' : 'border-zinc-100 bg-zinc-50'}`}>
                        <StepIcon className={`w-5 h-5 ${isActive ? 'text-[#0A0A0A]' : 'text-zinc-400'}`} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
