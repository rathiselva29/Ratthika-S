import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  HelpCircle,
  Zap,
  Globe,
  Rocket
} from 'lucide-react';
import { BUSINESS_PACKAGES, PERSONAL_INFO } from '../data/portfolioData';
import { BusinessPackage } from '../types';

interface BusinessPackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const BusinessPackages: React.FC<BusinessPackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden">
      {/* Dynamic ambient backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#F27D26]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Headline */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#F27D26] text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 // BUSINESS SERVICE PACKAGES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif italic tracking-tight text-white max-w-4xl leading-tight">
            I Don't Just Build Websites.<br className="hidden sm:inline"/> I Build Digital Presence.
          </h2>
          <p className="text-sm sm:text-base text-[#F5F5F5]/70 max-w-2xl mt-4 font-light leading-relaxed">
            Businesses can partner with me for complete digital transformation — from high-converting websites and branding to verified Google indexing and WhatsApp customer lead funnels.
          </p>
        </div>

        {/* 3-Tier Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {BUSINESS_PACKAGES.map((pkg: BusinessPackage, idx: number) => {
            const isPopular = pkg.isPopular;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative flex flex-col justify-between rounded-2xl p-7 sm:p-9 glass-panel transition-all duration-300 group ${
                  isPopular 
                    ? 'border-2 border-[#F27D26]/50 bg-gradient-to-b from-[#F27D26]/10 via-black to-black shadow-2xl shadow-[#F27D26]/10 lg:-translate-y-2' 
                    : 'border border-white/10 hover:border-[#F27D26]/30'
                }`}
              >
                
                {/* Popular Ribbon */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-sm bg-[#F27D26] text-black text-[11px] font-mono font-bold tracking-widest uppercase shadow-lg shadow-[#F27D26]/30">
                    MOST POPULAR // HIGH IMPACT
                  </div>
                )}

                <div>
                  {/* Tier Title */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#F27D26] uppercase">
                      LEVEL 0{idx + 1}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Tailored Scope
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif italic text-white mb-2">
                    {pkg.tier}
                  </h3>

                  <p className="text-xs text-[#F27D26] font-medium mb-3">
                    {pkg.headline}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6 font-light">
                    {pkg.description}
                  </p>

                  {/* Target Audience Highlight */}
                  <div className="p-3 rounded-md bg-white/[0.02] border border-white/5 text-xs text-slate-300 mb-6 flex items-start gap-2">
                    <Zap className="w-3.5 h-3.5 text-[#F27D26] shrink-0 mt-0.5" />
                    <span>{pkg.highlight}</span>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold block mb-3">
                      Package Inclusions:
                    </span>
                    {pkg.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#F5F5F5]/85 leading-snug">
                        <Check className="w-4 h-4 text-[#F27D26] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Pricing & CTA */}
                <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                  
                  {/* Transparent Pricing Notice */}
                  <div className="text-center">
                    <span className="text-xs font-mono text-slate-400 block">
                      Custom Pricing Based on Requirements
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Transparent milestone-based quotes
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectPackage(pkg.tier)}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer group ${
                      isPopular
                        ? 'bg-[#F27D26] hover:bg-[#d96815] text-black shadow-lg shadow-[#F27D26]/20'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={`https://wa.me/917397732494?text=Hi%20Ratthika,%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.tier)}%20package%20for%20my%20business.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-[#F27D26] hover:underline transition-colors"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>Instant WhatsApp Inquiry</span>
                  </a>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Business Consultation Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-md bg-[#F27D26]/10 border border-[#F27D26]/20 flex items-center justify-center text-[#F27D26] shrink-0">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-serif italic">Need a Custom Business Architecture?</h4>
              <p className="text-xs text-slate-400 mt-0.5">Whether you are starting an eco-friendly wholesale business like VY Enterprises or an international consultancy, let's shape a dedicated digital package.</p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-sm bg-[#F27D26] hover:bg-[#d96815] text-black text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Let's Discuss Your Project
          </a>
        </div>

      </div>
    </section>
  );
};
