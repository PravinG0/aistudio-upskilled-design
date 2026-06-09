import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users2, Briefcase, ShieldAlert, Award, GraduationCap, Laptop, ShieldCheck, Database } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function TrainingTypes() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const nodes = [
    {
      id: "node-1",
      title: "Employee Onboarding",
      description: "Accelerate readiness through structured onboarding journeys and guided learning experiences. 40% faster time-to-productivity.",
      icon: Users2
    },
    {
      id: "node-2",
      title: "Corporate Training",
      description: "Deliver scalable learning programs that support workforce development and employee growth across any size organization.",
      icon: Briefcase
    },
    {
      id: "node-3",
      title: "Compliance Training",
      description: "Maintain audit readiness through certifications, assessments, automated reporting, and compliance tracking.",
      icon: ShieldAlert
    },
    {
      id: "node-4",
      title: "Workforce Upskilling",
      description: "Develop future-ready teams through practical learning experiences and skill-based development pathways.",
      icon: Award
    },
    {
      id: "node-5",
      title: "Higher Education",
      description: "Deliver engaging academic learning experiences that combine theory with hands-on coding lab practice.",
      icon: GraduationCap
    },
    {
      id: "node-6",
      title: "Technical Training",
      description: "Enable learners to develop programming, data science, AI, cloud, and tech skills through integrated coding labs.",
      icon: Laptop
    },
    {
      id: "node-7",
      title: "Certification Programs",
      description: "Create structured certification pathways with assessments, competency validation, and credential management.",
      icon: ShieldCheck
    },
    {
      id: "node-8",
      title: "Data Science Labs",
      description: "Live Jupyter notebooks, in-notebook AI tutor, auto-graded code review — scale to thousands without manual effort.",
      icon: Database
    }
  ];

  useEffect(() => {
    const track = trackRef.current;
    const container = scrollContainerRef.current;
    if (!track || !container) return;

    // Horizontally scroll the track based on container scroll depth
    const totalWidth = track.scrollWidth - container.clientWidth;
    if (totalWidth <= 0) return;

    const anim = gsap.to(track, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1.2,
        start: "top top",
        end: () => `+=${totalWidth * 1.5}`,
        invalidateOnRefresh: true,
      }
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <div 
      ref={scrollContainerRef} 
      id="training-types-section"
      className="relative min-h-screen bg-white overflow-hidden flex flex-col justify-start"
    >
      {/* Top Title Bar (Static) */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-4 z-20">
        <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase bg-zinc-100 px-3 py-1 rounded-full inline-block">
          By Training Type
        </span>
        <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-[#0A0A0A] mt-4 mb-3">
          Flexible Solutions Designed for Modern Learning Environments.
        </h2>
        <p className="text-sm md:text-base text-zinc-600 max-w-2xl leading-relaxed">
          From employee onboarding to university bootcamps — Upskilled adapts to every training context and learning need.
        </p>
      </div>

      {/* Horizontally scrolling track element */}
      <div className="flex-grow flex items-center relative z-15 select-none">
        
        {/* Animated Connecting SVG Vector in background running behind all elements */}
        <div className="absolute inset-x-0 h-1 bg-zinc-100 scale-y-50 top-1/2 -translate-y-1/2 pointer-events-none z-10">
          <div className="w-full h-full bg-gradient-to-r from-brand-yellow via-zinc-950 to-brand-yellow animate-shimmer" />
        </div>

        <div 
          ref={trackRef} 
          className="flex gap-10 px-4 md:px-8 lg:px-24 py-10 transition-transform duration-200"
          style={{ willChange: 'transform' }}
        >
          {nodes.map((node, i) => {
            const Icon = node.icon;
            return (
              <motion.div 
                key={node.id}
                whileHover={{ y: -8 }}
                className="w-[280px] sm:w-[320px] bg-zinc-50 border border-zinc-200/80 rounded-2xl p-6 md:p-8 shrink-0 flex flex-col justify-between shadow-sm relative group hover:border-[#FFC20E] hover:bg-white transition-all duration-300 z-20"
              >
                {/* Node connector dot */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 rounded-full bg-white border border-zinc-200 flex items-center justify-center z-30">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-400 group-hover:bg-brand-yellow transition-colors" />
                </div>

                <div>
                  {/* Category index */}
                  <span className="text-[10px] font-mono text-zinc-400 font-bold mb-4 block">
                    ECOSYSTEM NODE 0{i + 1}
                  </span>

                  {/* Header containing icon */}
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 group-hover:bg-[#FFC20E]/10 flex items-center justify-center mb-6 transition-all duration-300">
                    <Icon className="w-5 h-5 text-zinc-700 group-hover:text-brand-yellow-hover" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold font-display text-[#0A0A0A] mb-3 group-hover:text-brand-yellow-hover transition-colors">
                    {node.title}
                  </h3>

                  {/* Body description */}
                  <p className="text-xs md:text-sm text-zinc-600 leading-relaxed group-hover:text-zinc-800 transition-colors">
                    {node.description}
                  </p>
                </div>

                {/* Bottom interactive state marker */}
                <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>CAPABILITY METRIC</span>
                  <span className="text-emerald-600 font-semibold">ACTIVE</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Swipe/Scroll CTA */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pb-10 flex items-center justify-between text-xs font-mono text-zinc-400 z-20">
        <span>&larr; Drag track or Scroll vertically to interact &rarr;</span>
        <span>{nodes.length} Nodes</span>
      </div>
    </div>
  );
}
