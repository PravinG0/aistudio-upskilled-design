import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, BrainCircuit, GraduationCap, FileQuestion, GraduationCap as GrayGrading, HelpCircle, FileText, BarChart2 } from 'lucide-react';

export default function AIPoweredTools() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const aiTools = [
    {
      id: "ai-tutor",
      category: "Learners",
      name: "AI Tutor",
      description: "Provide instant support, contextual guidance, and personalized assistance whenever learners need help — embedded directly in lessons and Jupyter notebooks.",
      icon: GraduationCap,
      // Angle for radial placement (0, 60, 120, 180, 240, 300)
      angle: 0,
      color: "#FFC20E"
    },
    {
      id: "ai-quiz",
      category: "Assessment",
      name: "AI Quiz Generator",
      description: "Automatically create quizzes and assessments aligned with learning objectives, saving hours of content creation time per course.",
      icon: FileQuestion,
      angle: 60,
      color: "#FFD34E"
    },
    {
      id: "ai-grading",
      category: "Instructors",
      name: "AI Auto Grading",
      description: "Reduce instructor workload by up to 80% by automating assignment evaluation and delivering consistent, timely feedback to every learner.",
      icon: BrainCircuit,
      angle: 120,
      color: "#FFC20E"
    },
    {
      id: "ai-doubt",
      category: "Support",
      name: "AI Doubt Solver",
      description: "Help learners get unblocked faster. AI drafts contextual answers to forum questions in seconds — turning 8-hour wait times into 5 minutes.",
      icon: HelpCircle,
      angle: 180,
      color: "#FFD34E"
    },
    {
      id: "ai-content",
      category: "Content",
      name: "AI Content Assistant",
      description: "Accelerate course development with AI-generated outlines, lesson recommendations, quiz banks, and Jupyter notebook starters.",
      icon: FileText,
      angle: 240,
      color: "#FFC20E"
    },
    {
      id: "ai-insights",
      category: "Analytics",
      name: "AI Learning Insights",
      description: "Identify skill gaps, engagement patterns, and learning opportunities through intelligent analytics that surface what matters most.",
      icon: BarChart2,
      angle: 300,
      color: "#FFD34E"
    }
  ];

  // Derive coordinates for lines
  // Radius of orbit in SVG layout
  const radius = 170;
  const centerX = 250;
  const centerY = 250;

  const getCoordinates = (angleDegrees: number) => {
    const angleRadians = (angleDegrees - 90) * (Math.PI / 180);
    return {
      x: centerX + radius * Math.cos(angleRadians),
      y: centerY + radius * Math.sin(angleRadians)
    };
  };

  return (
    <section 
      id="ai-tools"
      ref={containerRef}
      className="relative min-h-screen py-24 px-4 md:px-8 bg-zinc-50 border-b border-zinc-100 flex flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#eedd8208_2px,transparent_2px)] bg-[size:2rem_2rem] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase bg-zinc-100 px-3 py-1 rounded-full">
            AI-POWERED TOOLS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-[#0A0A0A] mt-4 mb-4">
            Enhance Learning with Intelligent AI Capabilities.
          </h2>
          <p className="text-base md:text-lg text-zinc-650">
            Leverage artificial intelligence to create engaging learning experiences, reduce administrative effort, and improve outcomes across every course.
          </p>
        </div>

        {/* Outer Grid showing either the Interactive Radial Hub or detailed cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Col 1: Interactive Radial Flow Graph (7 cols on desktop) */}
          <div className="lg:col-span-7 flex justify-center items-center relative order-2 lg:order-1 select-none">
            
            {/* The SVG and dynamic lines */}
            <div className="w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] relative">
              
              <svg 
                className="w-full h-full absolute inset-0" 
                viewBox="0 0 500 500" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Orbit path circle */}
                <circle cx={centerX} cy={centerY} r={radius} stroke="#0A0A0A" strokeWidth="1" strokeOpacity="0.06" strokeDasharray="5 5" />

                {/* Draw animated lines connecting each active node */}
                {aiTools.map((tool) => {
                  const nodeCoords = getCoordinates(tool.angle);
                  const isHovered = hoveredNode === tool.id;

                  return (
                    <g key={tool.id}>
                      {/* Connection Line */}
                      <motion.line 
                        x1={centerX} 
                        y1={centerY} 
                        x2={nodeCoords.x} 
                        y2={nodeCoords.y} 
                        stroke={isHovered ? "#FFC20E" : "#0A0A0A"} 
                        strokeWidth={isHovered ? 2.5 : 1} 
                        strokeOpacity={isHovered ? 0.8 : 0.15} 
                        transition={{ duration: 0.3 }}
                      />

                      {/* Moving light signal bubble along path */}
                      {isHovered && (
                        <motion.circle 
                          r="4" 
                          fill="#FFC20E"
                          animate={{
                            cx: [centerX, nodeCoords.x],
                            cy: [centerY, nodeCoords.y]
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.2,
                            ease: "easeInOut"
                          }}
                        />
                      )}
                    </g>
                  );
                })}

                {/* Outer spin rings around AI Core */}
                <motion.circle 
                  cx={centerX} 
                  cy={centerY} 
                  r="52" 
                  stroke="#FFC20E" 
                  strokeWidth="2" 
                  strokeDasharray="40 20" 
                  strokeOpacity="0.5"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  style={{ transformOrigin: `${centerX}px ${centerY}px` }}
                />

                <motion.circle 
                  cx={centerX} 
                  cy={centerY} 
                  r="62" 
                  stroke="#0A0A0A" 
                  strokeWidth="1" 
                  strokeDasharray="10 40 20 10" 
                  strokeOpacity="0.25"
                  className="hidden sm:block"
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
                  style={{ transformOrigin: `${centerX}px ${centerY}px` }}
                />
              </svg>

              {/* CENTER: AI Core representation */}
              <div 
                className="absolute w-24 h-24 sm:w-28 sm:h-28 bg-[#0A0A0A] rounded-full border-4 border-brand-yellow flex flex-col items-center justify-center text-center shadow-xl z-20"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="absolute inset-0 bg-brand-yellow rounded-full blur-xl opacity-[0.22] animate-pulse" />
                <BrainCircuit className="w-8 h-8 text-brand-yellow mb-1 animate-pulse" />
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-white">
                  AI CORE
                </span>
              </div>

              {/* Orbiting individual Node Buttons positioned with absolute positioning using angles */}
              {aiTools.map((tool) => {
                const coords = getCoordinates(tool.angle);
                const isHovered = hoveredNode === tool.id;
                const Icon = tool.icon;

                return (
                  <div
                    key={tool.id}
                    className="absolute cursor-pointer"
                    style={{
                      left: `${(coords.x / 500) * 100}%`,
                      top: `${(coords.y / 500) * 100}%`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: 30
                    }}
                    onMouseEnter={() => setHoveredNode(tool.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <motion.div 
                      whileHover={{ scale: 1.15 }}
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 relative ${
                        isHovered 
                          ? 'bg-brand-yellow text-black border-2 border-brand-yellow shadow-lg shadow-brand-yellow/20' 
                          : 'bg-white text-zinc-700 border border-zinc-200 shadow-sm hover:border-zinc-300'
                      }`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      
                      {/* Floating tooltip labels on small screen orb nodes */}
                      <span className="absolute whitespace-nowrap px-2 py-0.5 rounded bg-zinc-950 text-white text-[8px] sm:text-[9px] font-mono bottom-12 border border-zinc-800 opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none">
                        {tool.name}
                      </span>
                    </motion.div>
                  </div>
                );
              })}

            </div>

          </div>

          {/* Col 2: Text / Interactive Display Card (5 cols on desktop) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center min-h-[350px]">
            <AnimatePresence mode="wait">
              {hoveredNode ? (
                (() => {
                  const activeTool = aiTools.find(t => t.id === hoveredNode);
                  if (!activeTool) return null;
                  return (
                    <motion.div
                      key={activeTool.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white border-2 border-brand-yellow rounded-2xl p-6 md:p-8 shadow-md"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] font-mono font-bold px-2 py-1 bg-zinc-100 rounded text-zinc-500 uppercase tracking-widest">
                          {activeTool.category}
                        </span>
                        <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full animate-ping" />
                      </div>
                      
                      <h3 className="text-xl md:text-2.5xl font-bold font-display text-[#0A0A0A] mb-3">
                        {activeTool.name}
                      </h3>
                      
                      <p className="text-zinc-650 text-sm md:text-base leading-relaxed">
                        {activeTool.description}
                      </p>
                      
                      <div className="mt-6 flex items-center gap-2 text-xs font-mono font-medium text-brand-yellow-hover">
                        <Sparkles className="w-4 h-4 text-brand-yellow" />
                        Interactive Node Active (Hovered)
                      </div>
                    </motion.div>
                  );
                })()
              ) : (
                <motion.div
                  key="default-display-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-white relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-full blur-xl pointer-events-none" />
                  
                  <div className="flex items-center gap-2 text-brand-yellow mb-6">
                    <Sparkles className="w-5 h-5 animate-spin" />
                    <span className="text-xs uppercase font-mono tracking-widest font-bold">
                      Explore AI Capabilities
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold font-display text-white mb-2">
                    Hover over any orbit node
                  </h3>
                  
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                    Check out individual features (AI Tutor, AI Quiz Generator, AI Auto Grading, etc.) inside our high-performance radial playground to see how they integrate.
                  </p>

                  {/* Grid showing simple static references */}
                  <div className="grid grid-cols-2 gap-2 mt-6">
                    <div className="bg-zinc-800/50 border border-zinc-800 rounded p-2 text-center text-[10px] text-zinc-300">
                      AI Tutor
                    </div>
                    <div className="bg-zinc-800/50 border border-zinc-800 rounded p-2 text-center text-[10px] text-zinc-300">
                      AI Quiz Gen
                    </div>
                    <div className="bg-zinc-800/50 border border-zinc-800 rounded p-2 text-center text-[10px] text-zinc-300">
                      Auto Grading
                    </div>
                    <div className="bg-zinc-800/50 border border-zinc-800 rounded p-2 text-center text-[10px] text-zinc-300">
                      Insights &amp; Stats
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
