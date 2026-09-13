import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ExternalLink, 
  Layers, 
  ArrowUpRight, 
  Check, 
  Eye, 
  Globe, 
  ChevronRight,
  ShieldCheck,
  Laptop,
  Smartphone,
  Cpu,
  Zap,
  Activity
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { SmartImage } from './SmartImage';

interface FeaturedProjectsProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onOpenCaseStudy }) => {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      {/* Dynamic ambient 3D glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#F27D26]/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#F27D26] text-xs font-mono tracking-widest uppercase mb-4 backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 // 3D PRODUCT SHOWCASE — BUSINESS CLIENTS FIRST</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif italic tracking-tight text-white max-w-4xl"
          >
            Real Business Solutions & Digital Presence
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-[#F5F5F5]/70 max-w-2xl mt-4 font-light"
          >
            Engineered as complete digital products — featuring interactive device mockups, scalable architecture, client lead funnels, and verified Google search presence.
          </motion.p>
        </div>

        {/* 3D Floating Product Showcase Cards */}
        <div className="space-y-20 lg:space-y-28">
          {FEATURED_PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 0;
            const isHovered = hoveredProjectId === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                data-cursor="project"
                className="group relative glass-panel rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10 hover:border-[#F27D26]/50 transition-all duration-500 shadow-2xl backdrop-blur-xl"
              >
                {/* 3D Subtle Floating Particle Sparks */}
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#F27D26]/20 border border-[#F27D26]/40 flex items-center justify-center pointer-events-none animate-pulse">
                  <Zap className="w-3 h-3 text-[#F27D26]" />
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}>
                  
                  {/* 3D Visual Product Showcase Side (Col 7) */}
                  <div className={`lg:col-span-7 ${!isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative perspective-1000">
                      
                      {/* Floating Laptop Mockup Stage */}
                      <motion.div 
                        animate={{ 
                          rotateY: isHovered ? (isEven ? -4 : 4) : 0,
                          rotateX: isHovered ? 3 : 0,
                          scale: isHovered ? 1.02 : 1
                        }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        className="relative rounded-2xl bg-gradient-to-b from-[#181a20] via-[#0d0f14] to-[#08090c] p-2.5 sm:p-3.5 border border-white/15 shadow-2xl overflow-hidden group-hover:border-[#F27D26]/40"
                      >
                        {/* Laptop Top Bezel & Camera */}
                        <div className="flex items-center justify-between px-3 py-1.5 mb-1.5 bg-black/60 rounded-t-xl border-b border-white/10">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                            <span className="text-[10px] font-mono text-slate-400 ml-2 hidden sm:inline truncate max-w-[200px]">
                              https://{project.id}.client.live
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            <span className="text-[9px] font-mono uppercase text-[#F27D26] font-bold">
                              PRODUCT 0{project.number}
                            </span>
                          </div>
                        </div>

                        {/* Screen Viewport with Glass Reflection */}
                        <div className="relative rounded-lg overflow-hidden aspect-video bg-black border border-white/10">
                          <SmartImage
                            src={project.image}
                            alt={project.title}
                            fallbackType={
                              project.id.includes('artika') ? 'artika' :
                              project.id.includes('skyfly') ? 'skyfly' :
                              'sora'
                            }
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />

                          {/* Glossy Diagonal Glass Reflection */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />

                          {/* Status Badge */}
                          {project.statusBadge && (
                            <div className="absolute top-3 right-3 z-20">
                              <span className="px-3 py-1 rounded-sm text-xs font-mono font-medium bg-black/85 text-[#F27D26] border border-[#F27D26]/40 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                                <Activity className="w-3 h-3 text-[#F27D26]" />
                                {project.statusBadge}
                              </span>
                            </div>
                          )}

                          {/* Hover Action Overlay */}
                          <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 backdrop-blur-xs p-4">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => onOpenCaseStudy(project)}
                                className="flex items-center gap-1.5 px-4 py-2 rounded-sm bg-[#F27D26] text-black text-xs font-bold shadow-lg hover:bg-[#d96815] transition-all cursor-pointer uppercase tracking-wider scale-95 group-hover:scale-100"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                <span>Inspect Case Study</span>
                              </button>
                              
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1.5 px-4 py-2 rounded-sm bg-white/20 hover:bg-white/30 text-white text-xs font-bold backdrop-blur-md transition-all uppercase tracking-wider scale-95 group-hover:scale-100"
                                >
                                  <span>Live Product</span>
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                              )}
                            </div>
                            <span className="text-[10px] font-mono text-slate-300 tracking-wider">
                              Interactive 3D Product View
                            </span>
                          </div>
                        </div>

                        {/* Laptop Bottom Lip / Notch */}
                        <div className="h-1.5 sm:h-2 bg-gradient-to-r from-white/10 via-white/25 to-white/10 mx-auto w-24 rounded-b-md mt-1" />
                      </motion.div>

                      {/* Companion Floating Mobile Device Preview (3D Parallax Layer) */}
                      <motion.div
                        animate={{ 
                          y: isHovered ? -12 : 0,
                          rotateZ: isEven ? 3 : -3,
                          scale: isHovered ? 1.05 : 1
                        }}
                        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                        className={`hidden sm:block absolute ${isEven ? '-right-6 -bottom-6' : '-left-6 -bottom-6'} w-32 sm:w-40 rounded-2xl p-1.5 bg-[#0e121a] border-2 border-white/20 shadow-2xl backdrop-blur-md z-30 group-hover:border-[#F27D26]/70 transition-all`}
                      >
                        {/* Mobile Speaker Notch */}
                        <div className="w-8 h-1 bg-white/30 mx-auto rounded-full mb-1" />
                        <div className="rounded-xl overflow-hidden aspect-[9/16] bg-black relative">
                          <SmartImage
                            src={project.image}
                            alt="Mobile view"
                            fallbackType={project.id.includes('artika') ? 'artika' : 'skyfly'}
                            className="w-full h-full object-cover object-top"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                            <span className="text-[8px] font-mono text-emerald-400 font-bold uppercase flex items-center gap-1">
                              <Smartphone className="w-2.5 h-2.5" />
                              Mobile UI
                            </span>
                          </div>
                        </div>
                      </motion.div>

                    </div>
                  </div>

                  {/* Content & Product Blueprint Side (Col 5) */}
                  <div className={`lg:col-span-5 flex flex-col justify-between ${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    <div>
                      {/* Subtitle tag with glowing line */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-[#F27D26]" />
                        <span className="text-xs font-mono font-bold tracking-widest text-[#F27D26] uppercase">
                          {project.subtitle}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-white mt-1 mb-3 group-hover:text-[#F27D26] transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-[#F5F5F5]/75 leading-relaxed mb-6 font-light">
                        {project.description}
                      </p>

                      {/* Product Deliverables & Capabilities Delivered */}
                      <div className="mb-6 space-y-2.5 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold block flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-[#F27D26]" />
                          Product Engineering Highlights:
                        </span>
                        {project.services.slice(0, 4).map((serv, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-[#F27D26] shrink-0 mt-0.5" />
                            <span>{serv}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.technologies.map((tech, tIdx) => (
                          <motion.span
                            key={tIdx}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] hover:bg-[#F27D26]/15 text-slate-300 hover:text-[#F27D26] border border-white/[0.08] hover:border-[#F27D26]/40 transition-colors cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                      {project.liveUrl ? (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.96 }}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#F27D26] hover:bg-[#d96815] text-black text-xs font-bold tracking-wider uppercase shadow-lg shadow-[#F27D26]/20 transition-all cursor-pointer"
                        >
                          <span>Visit Live Product</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </motion.a>
                      ) : (
                        <motion.button
                          onClick={() => onOpenCaseStudy(project)}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.96 }}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#F27D26]/20 hover:bg-[#F27D26]/30 text-[#F27D26] border border-[#F27D26]/40 text-xs font-bold tracking-wider uppercase transition-all cursor-pointer"
                        >
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>View Solution Blueprint</span>
                        </motion.button>
                      )}

                      <motion.button
                        onClick={() => onOpenCaseStudy(project)}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white text-xs font-medium tracking-wider uppercase transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#F27D26]" />
                        <span>Interactive Case Study</span>
                      </motion.button>
                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
