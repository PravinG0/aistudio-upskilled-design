import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap } from 'gsap';
import { Terminal, Code, Cpu, Play, Sparkles, RefreshCw, BarChart2, CheckCircle } from 'lucide-react';

export default function JupyterLabs() {
  const [currentLine, setCurrentLine] = useState('');
  const [executionState, setExecutionState] = useState<'idle' | 'typing' | 'running' | 'success'>('idle');
  const [aiPanelActive, setAiPanelActive] = useState(false);
  const codeContainerRef = useRef<HTMLDivElement>(null);

  const fullCode = [
    "import pandas as pd",
    "import upskilled_ml as uml",
    "",
    "# Load actual learner performance dataset",
    "df = pd.read_csv('capability_proof.csv')",
    "print('Data Loaded. Row count:', len(df))",
    "",
    "# Train competency prediction model",
    "features = ['practice_hours', 'labs_completed']",
    "model = uml.TrainModel(df, target='outcome')",
    "model.evaluate_readiness()",
  ];

  useEffect(() => {
    // We want a typing simulator triggering continuously
    let isCancelled = false;
    
    const runTypingLoop = async () => {
      while (!isCancelled) {
        setExecutionState('typing');
        setCurrentLine('');
        setAiPanelActive(false);

        // Simulated typing logic
        for (let lineIndex = 0; lineIndex < fullCode.length; lineIndex++) {
          if (isCancelled) return;
          const lineText = fullCode[lineIndex];
          
          // Type out this line character by character
          for (let charIndex = 0; charIndex <= lineText.length; charIndex++) {
            if (isCancelled) return;
            setCurrentLine(prev => {
              const lines = prev.split('\n');
              lines[lineIndex] = lineText.substring(0, charIndex);
              return lines.join('\n');
            });
            await new Promise(resolve => setTimeout(resolve, Math.random() * 15 + 10));
          }

          // Move down to next line
          setCurrentLine(prev => prev + '\n');
          await new Promise(resolve => setTimeout(resolve, 80));
        }

        // Finish typing and transition to running
        if (isCancelled) return;
        setExecutionState('running');
        await new Promise(resolve => setTimeout(resolve, 1200));

        // State success
        if (isCancelled) return;
        setExecutionState('success');
        
        // Show AI assistant response
        await new Promise(resolve => setTimeout(resolve, 800));
        setAiPanelActive(true);

        // Wait before restarting
        await new Promise(resolve => setTimeout(resolve, 7000));
      }
    };

    runTypingLoop();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <section 
      id="jupyter-labs" 
      className="relative min-h-screen py-24 px-4 md:px-8 bg-white border-b border-zinc-100 flex flex-col justify-center overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto z-10">
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Column (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0A0A0A] uppercase bg-brand-yellow px-3 py-1 rounded-full inline-block">
              BUILT-IN JUPYTER LABS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-[#0A0A0A] leading-tight">
              Stop Switching Between Learning and Doing.
            </h2>
            
            <div className="space-y-4 text-zinc-600 leading-relaxed text-base md:text-lg">
              <p className="font-semibold text-zinc-900">
                Most platforms teach coding. Upskilled lets learners code.
              </p>
              <p>
                Integrated Jupyter Labs allow learners to write code, run programs, analyze data, build projects, and experiment with ideas without leaving the learning experience.
              </p>
              <p className="border-l-4 border-brand-yellow pl-4 italic text-sm text-zinc-700">
                No separate tools. No setup headaches. No disconnected workflows. Just seamless learning and practical application in a single environment.
              </p>
            </div>
          </div>

          {/* SVG Animated Sandbox Column (7 columns) */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden font-mono text-[11px] md:text-xs">
              
              {/* Window chrome header */}
              <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF4B4B]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFB200]" />
                  <span className="w-3 h-3 rounded-full bg-[#00D000]" />
                  <span className="text-zinc-400 font-mono text-[10px] ml-2 flex items-center gap-1.5 font-semibold">
                    <Terminal className="w-3 h-3 text-brand-yellow" />
                    capability_evaluation.ipynb (Python 3.10)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {executionState === 'typing' && (
                    <span className="text-zinc-500 text-[10px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full animate-ping" />
                      Learner typing...
                    </span>
                  )}
                  {executionState === 'running' && (
                    <span className="text-brand-yellow text-[10px] flex items-center gap-1">
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      Executing Cell...
                    </span>
                  )}
                  {executionState === 'success' && (
                    <span className="text-emerald-500 text-[10px] flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Cell Finished
                    </span>
                  )}
                  <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 text-[10px] font-semibold">
                    Trusted
                  </span>
                </div>
              </div>

              {/* Lab Workspace split into content & sidebar */}
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[420px] relative">
                
                {/* Main Notebook panel (8 columns) */}
                <div className="md:col-span-8 p-6 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-brand-yellow font-mono text-[10px] mt-1 text-right w-10 shrink-0">
                        {executionState === 'running' ? 'In [*]:' : 'In [4]:'}
                      </span>
                      <div className="flex-grow bg-zinc-900 border border-zinc-800/80 rounded-lg p-3 text-zinc-100 relative min-h-[160px] whitespace-pre select-none">
                        {currentLine}
                        {executionState === 'typing' && (
                          <span className="inline-block w-1.5 h-3.5 bg-brand-yellow animate-pulse ml-0.5" />
                        )}
                      </div>
                    </div>

                    {/* Output cell */}
                    <AnimatePresence>
                      {executionState !== 'typing' && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex items-start gap-3"
                        >
                          <span className="text-zinc-500 font-mono text-[10px] mt-1 text-right w-10 shrink-0">
                            Out [4]:
                          </span>
                          <div className="flex-grow space-y-4">
                            {executionState === 'running' && (
                              <div className="p-3 bg-zinc-900/50 border border-zinc-900 rounded-lg flex items-center gap-2 text-zinc-400 italic">
                                <RefreshCw className="w-3.5 h-3.5 animate-spin text-brand-yellow" />
                                Processing Pandas matrices & starting validation...
                              </div>
                            )}

                            {executionState === 'success' && (
                              <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="space-y-3"
                              >
                                <div className="text-zinc-400 font-mono text-[10px]">
                                  Data Loaded. Row count: <span className="text-indigo-400">12,540 rows</span><br />
                                  Training Multi-Layered Capability Estimator... Done.<br />
                                  <span className="text-emerald-500 font-semibold">&gt; Evaluating Readiness Index:</span>
                                </div>
                                
                                {/* Dynamic SVG Chart representation */}
                                <div className="bg-zinc-900 border border-zinc-800/80 rounded-lg p-3">
                                  <svg className="w-full h-32" viewBox="0 0 300 100">
                                    {/* Grid background lines */}
                                    <line x1="10" y1="10" x2="290" y2="10" stroke="#222" strokeWidth="1" />
                                    <line x1="10" y1="45" x2="290" y2="45" stroke="#222" strokeWidth="1" />
                                    <line x1="10" y1="80" x2="290" y2="80" stroke="#222" strokeWidth="1" />

                                    {/* Simulated Bar Charts from notebook dataset */}
                                    <motion.rect 
                                      x="25" y="80" width="30" height="0" fill="#FFC20E" rx="3"
                                      animate={{ height: 40, y: 40 }}
                                      transition={{ duration: 0.8 }}
                                    />
                                    <motion.rect 
                                      x="75" y="80" width="30" height="0" fill="#EAEAEA" rx="3"
                                      animate={{ height: 60, y: 20 }}
                                      transition={{ duration: 0.8, delay: 0.2 }}
                                    />
                                    <motion.rect 
                                      x="125" y="80" width="30" height="0" fill="#FFC20E" rx="3"
                                      animate={{ height: 75, y: 5 }}
                                      transition={{ duration: 0.8, delay: 0.4 }}
                                    />
                                    <motion.rect 
                                      x="175" y="80" width="30" height="0" fill="#FFFFFF" rx="3"
                                      animate={{ height: 70, y: 10 }}
                                      transition={{ duration: 0.8, delay: 0.5 }}
                                    />
                                    {/* Polyline line representation */}
                                    <motion.path 
                                      d="M 40 40 L 90 20 L 140 5 L 190 10" 
                                      fill="none" 
                                      stroke="#00D000" 
                                      strokeWidth="2"
                                      initial={{ pathLength: 0 }}
                                      animate={{ pathLength: 1 }}
                                      transition={{ duration: 1.2, delay: 0.6 }}
                                    />
                                    {/* Text values */}
                                    <text x="40" y="95" fill="#444" fontSize="7" textAnchor="middle">Python</text>
                                    <text x="90" y="95" fill="#444" fontSize="7" textAnchor="middle">ML</text>
                                    <text x="140" y="95" fill="#444" fontSize="7" textAnchor="middle">Cloud</text>
                                    <text x="190" y="95" fill="#444" fontSize="7" textAnchor="middle">DevOps</text>
                                  </svg>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* AI Tutor Sidebar Companion (4 columns) */}
                <div className="md:col-span-4 bg-zinc-900 border-l border-zinc-800 p-4 flex flex-col justify-between overflow-hidden relative">
                  
                  {/* Subtle matrix-like glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-full blur-2xl pointer-events-none" />

                  <div className="z-10 space-y-4">
                    <div className="flex items-center gap-1.5 border-b border-zinc-800 pb-2 mb-2">
                      <Sparkles className="w-3.5 h-3.5 text-brand-yellow animate-pulse" />
                      <span className="text-[9px] font-bold tracking-wider text-zinc-400 uppercase">
                        UPSKILLED AI TUTOR
                      </span>
                    </div>

                    <AnimatePresence>
                      {aiPanelActive ? (
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-3"
                        >
                          <div className="bg-zinc-800/80 border border-zinc-800/60 p-3 rounded-lg text-[10px] leading-relaxed text-zinc-300">
                            "Excellent setup! Your ML training model initialized parameters correctly. Try tweaking the <code className="text-brand-yellow">learning_rate=0.01</code> to optimize precision performance outputs even further!"
                          </div>
                          
                          <div className="flex gap-1.5">
                            <span className="text-[8px] bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30 px-1.5 py-0.5 rounded cursor-pointer hover:bg-brand-yellow/30">
                              How do I edit it?
                            </span>
                            <span className="text-[8px] bg-zinc-800 text-zinc-400 border border-zinc-700 px-1.5 py-0.5 rounded cursor-pointer hover:bg-zinc-700">
                              Explain dataset
                            </span>
                          </div>
                        </motion.div>
                      ) : (
                        <div className="h-24 flex items-center justify-center border border-dashed border-zinc-800 rounded-lg text-zinc-600 text-[10px] text-center p-3 italic">
                          Waiting for execution output to provide contextual guidance...
                        </div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="z-10 bg-zinc-950 p-2 border border-zinc-800 rounded text-[9px] text-zinc-500">
                    💡 In-notebook AI feedback active.
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
