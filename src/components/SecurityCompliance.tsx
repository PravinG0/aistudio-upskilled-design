import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Shield, Lock, Fingerprint, Eye, Server, RefreshCw } from 'lucide-react';

export default function SecurityCompliance() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Reveal transforms for layers (stack alignment)
  const layer1Y = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);
  const layer1Alpha = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  const layer2Y = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]);
  const layer2Alpha = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  const layer3Y = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);
  const layer3Alpha = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  const layer4Y = useTransform(scrollYProgress, [0.4, 0.7], [100, 0]);
  const layer4Alpha = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);

  return (
    <section 
      id="security-compliance"
      ref={containerRef}
      className="relative min-h-screen py-24 px-4 md:px-8 bg-zinc-50 border-b border-zinc-100 flex flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#00000002] bg-[size:32px_32px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0A0A0A] uppercase bg-brand-yellow px-3 py-1 rounded-full inline-block">
            SECURITY &amp; COMPLIANCE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-[#0A0A0A] mt-4 mb-4">
            Security and Governance Built for Enterprise Requirements.
          </h2>
          <p className="text-base md:text-lg text-zinc-650">
            Protect learner data and maintain compliance through enterprise-grade security controls and deployment flexibility.
          </p>
        </div>

        {/* Isometric 3D Stack Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Stack Representation (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 min-h-[460px] relative">
            <div className="w-full max-w-[420px] space-y-4">
              
              {/* Layer 4 (top stack element): Governance & Compliance */}
              <motion.div 
                style={{ y: layer4Y, opacity: layer4Alpha }}
                className="bg-white border-2 border-brand-yellow rounded-2xl p-5 shadow-md relative group hover:shadow-lg transition-transform hover:-translate-y-1 block duration-300"
              >
                <div className="absolute top-4 right-4 flex items-center gap-1">
                  <Shield className="w-4 h-4 text-brand-yellow animate-pulse" />
                  <span className="text-[9px] font-bold font-mono tracking-wide text-zinc-400">LAYER 4</span>
                </div>

                <h3 className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-bold mb-2">
                  Governance &amp; Audit (SOC 2, HIPAA, ISO 27001)
                </h3>
                
                {/* Specific bullets in layer */}
                <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                  <div className="bg-zinc-800 text-white font-bold p-2.5 rounded font-mono text-[10px] border border-zinc-900 flex flex-col justify-between">
                    <span>SOC 2</span>
                    <span className="text-[7px] text-zinc-400 font-sans mt-1">Certified</span>
                  </div>
                  <div className="bg-zinc-50 text-[#0A0A0A] border border-zinc-200 font-bold p-2.5 rounded font-mono text-[10px] flex flex-col justify-between">
                    <span>HIPAA Ready</span>
                    <span className="text-[7px] text-zinc-500 font-sans mt-1">Compliant</span>
                  </div>
                  <div className="bg-zinc-50 text-[#0A0A0A] border border-zinc-200 font-bold p-2.5 rounded font-mono text-[10px] flex flex-col justify-between">
                    <span>ISO 27001</span>
                    <span className="text-[7px] text-zinc-500 font-sans mt-1 font-semibold">Aligned</span>
                  </div>
                </div>

                <div className="mt-3 text-[10px] text-zinc-500 font-mono">
                  &gt; tamper-evident logs loading... OK.
                </div>
              </motion.div>

              {/* Layer 3: Secure Admission (MFA / SSO) */}
              <motion.div 
                style={{ y: layer3Y, opacity: layer3Alpha }}
                className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm relative group hover:shadow-md transition-all duration-300"
              >
                <div className="absolute top-4 right-4 flex items-center gap-1">
                  <Fingerprint className="w-4 h-4 text-zinc-450" />
                  <span className="text-[9px] font-bold font-mono tracking-wide text-zinc-400">LAYER 3</span>
                </div>

                <h3 className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-bold mb-2">
                  Access Management (MFA, SSO)
                </h3>

                <div className="flex gap-4 mt-3 text-xs">
                  <div className="bg-zinc-100 px-3 py-1.5 rounded font-mono text-[10px] text-zinc-700">
                    SAML 2.0 &amp; OAuth
                  </div>
                  <div className="bg-zinc-100 px-3 py-1.5 rounded font-mono text-[10px] text-zinc-700">
                    Role-Based Access Control
                  </div>
                </div>
              </motion.div>

              {/* Layer 2: Partition Isolation */}
              <motion.div 
                style={{ y: layer2Y, opacity: layer2Alpha }}
                className="bg-white border border-zinc-250 rounded-2xl p-5 shadow-sm relative group hover:shadow-md transition-all duration-300"
              >
                <div className="absolute top-4 right-4 flex items-center gap-1">
                  <Eye className="w-4 h-4 text-zinc-450" />
                  <span className="text-[9px] font-bold font-mono tracking-wide text-zinc-400">LAYER 2</span>
                </div>

                <h3 className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-bold mb-2">
                  Data Segmentation (Multi-Tenant)
                </h3>

                <p className="text-[10px] text-zinc-550 italic">
                  Row-level isolation shields tenant partitions perfectly from shared queries.
                </p>
              </motion.div>

              {/* Layer 1: Base Core */}
              <motion.div 
                style={{ y: layer1Y, opacity: layer1Alpha }}
                className="bg-zinc-900 border border-zinc-800 text-white rounded-2xl p-5 shadow-inner relative"
              >
                <div className="absolute top-4 right-4 flex items-center gap-1">
                  <Lock className="w-4 h-4 text-brand-yellow animate-bounce" />
                  <span className="text-[9px] font-bold font-mono tracking-wide text-zinc-550">LAYER 1</span>
                </div>

                <h3 className="text-xs font-mono tracking-widest text-brand-yellow uppercase font-bold mb-1">
                  Core Cryptography &amp; Cloud (Private Cloud options)
                </h3>

                <p className="text-[10px] text-zinc-400 font-mono">
                  AES-256 Encryption at rest &middot; TLS 1.3 in transit &middot; Private Cloud Deployment
                </p>
              </motion.div>

            </div>
          </div>

          {/* Details / Text description grids (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs uppercase font-mono tracking-widest font-bold text-zinc-500 border-b border-zinc-100 pb-3">
              Compliance Standards &amp; Features
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-[#0A0A0A] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-yellow" />
                  SOC 2 Certified
                </h4>
                <p className="text-xs text-zinc-550 leading-relaxed mt-0.5 pl-3.5">
                  Demonstrate strong security controls and operational integrity.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[#0A0A0A] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                  HIPAA Ready
                </h4>
                <p className="text-xs text-zinc-550 leading-relaxed mt-0.5 pl-3.5">
                  Support healthcare learning environments with secure data handling.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[#0A0A0A] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-yellow" />
                  ISO 27001 Aligned
                </h4>
                <p className="text-xs text-zinc-550 leading-relaxed mt-0.5 pl-3.5">
                  Maintain information security through globally recognized standards.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-200/50 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold block">
                Additional Embedded Enforcements
              </span>
              
              <ul className="text-xs text-zinc-600 space-y-2 list-disc pl-4">
                <li><strong>Role-Based Access Control:</strong> Granular permissions per feature and tenant.</li>
                <li><strong>Audit Logging:</strong> Complete tamper-evident logs for compliance.</li>
                <li><strong>Secure Authentication:</strong> MFA, SSO — SAML 2.0 &amp; OAuth 2.0.</li>
                <li><strong>Data Protection:</strong> Encryption at rest and in transit.</li>
                <li><strong>Multi-Tenant Architecture:</strong> Full row-level data isolation per organization.</li>
                <li><strong>Private Cloud Deployment:</strong> On-premises options for strict compliance needs.</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
