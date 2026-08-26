import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Globe, 
  Palette, 
  Search, 
  Layers, 
  Sparkles, 
  Check, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Handshake, 
  Cpu, 
  Wand2, 
  Briefcase, 
  Zap, 
  MessageSquareText 
} from 'lucide-react';
import { SERVICE_PILLARS, WHY_WORK_WITH_ME, INDIVIDUAL_SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return Code2;
      case 'Sparkles': return Sparkles;
      case 'Palette': return Palette;
      case 'TrendingUp': return TrendingUp;
      case 'Handshake': return Handshake;
      case 'Cpu': return Cpu;
      case 'Wand2': return Wand2;
      case 'Briefcase': return Briefcase;
      case 'Zap': return Zap;
      case 'MessageSquareText': return MessageSquareText;
      default: return Sparkles;
    }
  };

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#F27D26]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#F27D26] text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>07 // SPECIALIZED SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif italic tracking-tight text-white max-w-4xl">
            What I Can Build For You
          </h2>
          <p className="text-sm sm:text-base text-[#F5F5F5]/70 max-w-2xl mt-4 font-light leading-relaxed">
            Delivering the complete digital spectrum from raw code implementation to brand identity, search visibility, and customer lead acquisition.
          </p>
        </div>

        {/* 5 Core Service Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_PILLARS.map((service, idx) => {
            const Icon = getIcon(service.icon);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel rounded-2xl p-7 border border-white/10 hover:border-[#F27D26]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Icon & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-md bg-[#F27D26]/10 border border-[#F27D26]/20 flex items-center justify-center text-[#F27D26] group-hover:scale-105 group-hover:bg-[#F27D26]/20 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-bold">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif italic text-white mb-1.5 group-hover:text-[#F27D26] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#F27D26] font-medium mb-3">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  {/* Deliverables / Capabilities */}
                  <div className="space-y-2 mb-6">
                    {service.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-[#F5F5F5]/80">
                        <Check className="w-3.5 h-3.5 text-[#F27D26] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Trigger */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    Milestone-based
                  </span>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F27D26] hover:underline transition-all cursor-pointer group-hover:translate-x-0.5"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            );
          })}

          {/* Individual Creative & Custom Card */}
          <div className="glass-panel rounded-2xl p-7 border border-[#F27D26]/30 bg-gradient-to-b from-[#F27D26]/10 via-black to-black flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-md bg-[#F27D26]/20 border border-[#F27D26]/30 flex items-center justify-center text-[#F27D26]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#F27D26] font-bold">
                  06
                </span>
              </div>

              <h3 className="text-xl font-serif italic text-white mb-1.5">
                Bespoke Keepsakes & Gifts
              </h3>
              <p className="text-xs text-[#F27D26] font-medium mb-3">
                Celebrations, romantic surprises & custom digital art.
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-light">
                Order customized birthday countdown webpages, interactive wedding cards, anniversary timelines, or physical handmade paintings from Artika Creations.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-[#F27D26]" />
                  <span>24–48 Hours Rapid Delivery Available</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-[#F27D26]" />
                  <span>Background Music & Photo Albums</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-[#F27D26]" />
                  <span>Personalized Secret Surprise Countdown</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">Custom Delivery</span>
              <button
                onClick={() => onSelectService('Bespoke Celebration Webpage')}
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F27D26] hover:underline transition-colors cursor-pointer"
              >
                <span>Order Keepsake</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Why Hire Me / Value Proposition Banner */}
        <div className="mt-20 glass-panel rounded-2xl p-8 sm:p-12 border border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F27D26] font-bold">
              WHY PARTNER WITH ME
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif italic text-white mt-1">
              Engineering Logic + Creative Design Pulse
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_WORK_WITH_ME.map((item, idx) => {
              const ItemIcon = getIcon(item.icon);
              return (
                <div key={idx} className="p-5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-[#F27D26]/20 transition-colors">
                  <div>
                    <div className="w-9 h-9 rounded-md bg-[#F27D26]/10 border border-[#F27D26]/20 flex items-center justify-center text-[#F27D26] mb-3">
                      <ItemIcon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-serif italic text-white mb-0.5">{item.title}</h4>
                    <span className="text-[11px] font-mono text-[#F27D26] block mb-2">{item.subtitle}</span>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
