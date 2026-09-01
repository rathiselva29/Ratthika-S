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
  MessageSquareText,
  Rocket
} from 'lucide-react';
import { SERVICE_PILLARS, WHY_WORK_WITH_ME, INDIVIDUAL_SERVICES } from '../data/portfolioData';

// 3D Generated Visual Assets
import webDev3dImg from '../assets/images/webdev_3d_code_screens_1788240780821.jpg';
import marketing3dImg from '../assets/images/marketing_3d_seo_rocket_1788240763600.jpg';
import branding3dImg from '../assets/images/branding_3d_design_cube_1788240799156.jpg';
import analytics3dImg from '../assets/images/analytics_3d_growth_graph_1788240816498.jpg';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  // Map 3D images to services
  const get3DImage = (idx: number) => {
    switch (idx % 4) {
      case 0: return webDev3dImg;
      case 1: return marketing3dImg;
      case 2: return branding3dImg;
      case 3: return analytics3dImg;
      default: return webDev3dImg;
    }
  };

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
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#F27D26]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[#F27D26] text-xs font-mono tracking-widest uppercase mb-4 backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>07 // 3D SPECIALIZED SERVICES</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif italic tracking-tight text-white max-w-4xl"
          >
            Engineering & Growth Solutions
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-slate-300 max-w-2xl mt-4 font-normal leading-relaxed"
          >
            From high-speed web application development to search engine supremacy and paid social conversion funnels.
          </motion.p>
        </div>

        {/* 3D Visual Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_PILLARS.map((service, idx) => {
            const Icon = getIcon(service.icon);
            const service3dImage = get3DImage(idx);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ type: 'spring', stiffness: 350, damping: 20, delay: idx * 0.05 }}
                className="glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-[#F27D26]/60 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-[#F27D26]/15"
              >
                <div>
                  {/* 3D Visual Illustration Header Banner */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/80 border-b border-white/10">
                    <img
                      src={service3dImage}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                    
                    {/* Floating Service Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass-panel border border-white/20 text-white text-[10px] font-mono font-bold backdrop-blur-md flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 text-[#F27D26]" />
                      <span>{service.number}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-serif italic text-white mb-1 group-hover:text-[#F27D26] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-[#F27D26] font-medium mb-3">
                      {service.tagline}
                    </p>

                    {/* Deliverables / Capabilities Badges */}
                    <div className="space-y-2 mb-4">
                      {service.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-[#F5F5F5]/85">
                          <Check className="w-3.5 h-3.5 text-[#F27D26] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Trigger */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5">
                  <span className="text-[11px] font-mono text-slate-400">
                    Milestone-based
                  </span>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F27D26] hover:text-white transition-all cursor-pointer group-hover:translate-x-1"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            );
          })}

          {/* 3D Individual Keepsakes Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -6 }}
            className="glass-panel rounded-3xl overflow-hidden border border-[#F27D26]/40 bg-gradient-to-b from-[#F27D26]/10 via-black to-black flex flex-col justify-between shadow-2xl"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-black/80 border-b border-white/10">
                <img
                  src={branding3dImg}
                  alt="Bespoke Keepsakes & Gifts"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass-panel border border-[#F27D26]/40 text-[#F27D26] text-[10px] font-mono font-bold backdrop-blur-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>06 // ARTIKA CREATIONS</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif italic text-white mb-1">
                  Bespoke Keepsakes & Gifts
                </h3>
                <p className="text-xs text-[#F27D26] font-medium mb-3">
                  Celebrations, surprise websites & custom digital art.
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <Check className="w-3.5 h-3.5 text-[#F27D26]" />
                    <span>24–48 Hours Rapid Delivery Available</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <Check className="w-3.5 h-3.5 text-[#F27D26]" />
                    <span>Background Music & Photo Albums</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <Check className="w-3.5 h-3.5 text-[#F27D26]" />
                    <span>Personalized Secret Surprise Countdown</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5">
              <span className="text-[11px] font-mono text-slate-400">Rapid Delivery</span>
              <button
                onClick={() => onSelectService('Bespoke Celebration Webpage')}
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F27D26] hover:text-white transition-colors cursor-pointer"
              >
                <span>Order Keepsake</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Why Hire Me / Value Proposition Banner */}
        <div className="mt-20 glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F27D26] font-bold">
              WHY PARTNER WITH ME
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold font-serif italic text-white mt-1">
              Engineering Logic + Creative Growth Pulse
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_WORK_WITH_ME.map((item, idx) => {
              const ItemIcon = getIcon(item.icon);
              return (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.04, y: -3 }}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-[#F27D26]/30 transition-all shadow-md"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#F27D26]/10 border border-[#F27D26]/20 flex items-center justify-center text-[#F27D26] mb-3">
                      <ItemIcon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-serif italic text-white mb-0.5">{item.title}</h4>
                    <span className="text-xs font-mono text-[#F27D26] block mb-2">{item.subtitle}</span>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
