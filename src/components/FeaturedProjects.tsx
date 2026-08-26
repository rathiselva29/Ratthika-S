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
  ShieldCheck
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { SmartImage } from './SmartImage';

interface FeaturedProjectsProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onOpenCaseStudy }) => {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#F27D26]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#F27D26] text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 // FEATURED WORK — BUSINESS CLIENTS FIRST</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif italic tracking-tight text-white max-w-4xl">
            Real Business Solutions & Digital Presence
          </h2>
          <p className="text-sm sm:text-base text-[#F5F5F5]/70 max-w-2xl mt-4">
            Showcasing flagship web platforms engineered for brand authority, client lead generation, and creative product presentation.
          </p>
        </div>

        {/* Large Cinematic Project Cards List */}
        <div className="space-y-16 lg:space-y-24">
          {FEATURED_PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                data-cursor="project"
                className="group relative glass-panel rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-[#F27D26]/40 transition-all duration-500 shadow-2xl"
              >
                
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}>
                  
                  {/* Visual Preview Side (Col 7) */}
                  <div className={`lg:col-span-7 ${!isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-xl overflow-hidden aspect-video bg-black border border-white/10 shadow-2xl group-hover:scale-[1.01] transition-transform duration-500">
                      
                      <SmartImage
                        src={project.image}
                        alt={project.title}
                        fallbackType={
                          project.id.includes('artika') ? 'artika' :
                          project.id.includes('skyfly') ? 'skyfly' :
                          'sora'
                        }
                        className="w-full h-full"
                      />

                      {/* Number Overlay */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3.5 py-1 rounded-sm text-xs font-mono font-bold bg-black/80 backdrop-blur-md text-white border border-white/15 shadow-md">
                          PROJECT {project.number}
                        </span>
                      </div>

                      {/* Status badge */}
                      {project.statusBadge && (
                        <div className="absolute top-4 right-4 z-20">
                          <span className="px-3 py-1 rounded-sm text-xs font-mono font-medium bg-[#F27D26]/20 text-[#F27D26] border border-[#F27D26]/30 backdrop-blur-md">
                            {project.statusBadge}
                          </span>
                        </div>
                      )}

                      {/* Interactive overlay on hover */}
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
                        <button
                          onClick={() => onOpenCaseStudy(project)}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-sm bg-[#F27D26] text-black text-xs font-bold shadow-lg hover:bg-[#d96815] transition-colors cursor-pointer uppercase tracking-wider"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Case Study</span>
                        </button>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-4 py-2 rounded-sm bg-white/20 hover:bg-white/30 text-white text-xs font-bold backdrop-blur-md transition-colors uppercase tracking-wider"
                          >
                            <span>Live Website</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content Info Side (Col 5) */}
                  <div className={`lg:col-span-5 flex flex-col justify-between ${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    <div>
                      {/* Subtitle tag */}
                      <span className="text-xs font-mono font-bold tracking-widest text-[#F27D26] uppercase">
                        {project.subtitle}
                      </span>

                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-white mt-1.5 mb-3 group-hover:text-[#F27D26] transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-[#F5F5F5]/75 leading-relaxed mb-6 font-light">
                        {project.description}
                      </p>

                      {/* Services Provided Highlights */}
                      <div className="mb-6 space-y-2">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold block">
                          Key Capabilities Delivered:
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
                          <span>Visit Website</span>
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
                        <span>Case Study</span>
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
