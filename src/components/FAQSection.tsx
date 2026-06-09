import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles, MessageSquareCode } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is Upskilled?",
      a: "Upskilled is an AI-powered learning platform that combines learning management, integrated Jupyter labs, automated assessments, career development tools, and learning analytics to support workforce development and education. It is built on open-source Frappe Framework and is available via self-hosted, managed cloud, or private cloud deployment."
    },
    {
      q: "How is Upskilled different from traditional LMS platforms?",
      a: "Unlike traditional LMS platforms that primarily focus on content delivery, Upskilled enables learners to practice skills through integrated Jupyter labs, receive AI-powered guidance in real time, and demonstrate competency through practical learning experiences. Instructors save up to 80% of their grading time through AI auto-grading."
    },
    {
      q: "Does Upskilled support hands-on technical learning?",
      a: "Yes. Upskilled includes integrated Jupyter-powered coding labs that allow learners to write code, execute programs, analyze data, and complete practical exercises directly within the platform. An AI tutor is embedded in every notebook to provide hints, explain errors, and guide learners without them needing to leave the lesson."
    },
    {
      q: "Can organizations post job opportunities on Upskilled?",
      a: "Yes. Upskilled includes a built-in Jobs module where organizations, colleges, universities, and training providers can publish job opportunities. Learners can discover relevant openings aligned with their skills, certifications, and learning progress — creating a complete learning-to-career pathway."
    },
    {
      q: "Can educational institutions use Upskilled?",
      a: "Yes. Colleges, universities, bootcamps, and training providers can use Upskilled to deliver academic learning, technical training, certification programs, and blended learning experiences. The integrated Jupyter labs are especially well-suited for STEM and computer science programs."
    },
    {
      q: "What deployment options are available?",
      a: "Organizations can choose from three deployment models: Cloud (managed on Frappe Cloud), Private Cloud (fully managed in your own environment), or Self-Hosted (free Community Edition on your own infrastructure). Enterprise customers can also deploy on-premises for strict data residency and compliance requirements."
    },
    {
      q: "Is Upskilled secure?",
      a: "Yes. Upskilled supports enterprise-grade security controls and compliance standards including SOC 2, HIPAA, and ISO 27001 alignment. Security features include role-based access control, audit logging, MFA, SSO, data encryption, multi-tenant architecture, and private cloud deployment options."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <section 
      id="faq-section" 
      className="relative min-h-screen py-24 px-4 md:px-8 bg-white border-b border-zinc-100 flex flex-col justify-center overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* FAQ Left details Panel (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0A0A0A] uppercase bg-brand-yellow px-3 py-1 rounded-full inline-block">
              FAQ
            </span>
            
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-[#0A0A0A] leading-tight">
              Frequently Asked Questions
            </h2>
            
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
              Have questions? We have answers. Everything you need to know about Upskilled — platform capabilities, AI features, deployment options, and integrations.
            </p>

            {/* Premium Callout panel for booking demo */}
            <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-2xl shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-yellow/5 rounded-full blur-2xl" />
              <div className="flex items-center gap-2 mb-3">
                <MessageSquareCode className="w-5 h-5 text-brand-yellow" />
                <span className="text-xs uppercase font-mono tracking-wider font-bold text-zinc-400">
                  Direct Inquiries
                </span>
              </div>
              <h4 className="text-base font-semibold text-zinc-900 mb-2">
                Need customized compliance sizing?
              </h4>
              <p className="text-xs text-zinc-500 mb-4 leading-relaxed">
                Our support team is ready to map out custom cloud topologies or private Docker containers tailored for SOC 2 systems.
              </p>
              
              <button 
                id="faq-demo-btn"
                onClick={() => {
                  const el = document.getElementById('final-cta');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full text-center py-3 bg-zinc-900 hover:bg-[#0A0A0A] text-white font-semibold rounded-xl text-xs font-mono tracking-wider shadow-sm cursor-pointer transition-all duration-200"
              >
                Book a 20-min Demo
              </button>
            </div>
          </div>

          {/* Premium Accordions (7 Columns) */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              return (
                <div 
                  key={index}
                  className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? 'border-[#FFC20E] shadow-sm' 
                      : 'border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  {/* Trigger Button */}
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-display font-medium text-sm md:text-base text-[#0A0A0A] cursor-pointer"
                  >
                    <span className="flex items-center gap-2 font-display font-semibold select-none">
                      <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${isOpen ? 'text-brand-yellow' : 'text-zinc-400'}`} />
                      {faq.q}
                    </span>
                    <div className={`p-1.5 rounded-full border border-zinc-200/60 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brand-yellow/10 border-brand-yellow/30' : ''}`}>
                      <ChevronDown className="w-4 h-4 text-zinc-500" />
                    </div>
                  </button>

                  {/* Accordion panel reveal using CSS transition for flawless frame loading */}
                  <div 
                    className="transition-all duration-300 ease-in-out overflow-hidden"
                    style={{
                      maxHeight: isOpen ? '240px' : '0px',
                      opacity: isOpen ? 1 : 0
                    }}
                  >
                    <div className="p-5 pt-0 border-t border-zinc-100/60 text-xs md:text-sm text-zinc-600 leading-relaxed font-sans bg-zinc-50/40">
                      {faq.a}
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
