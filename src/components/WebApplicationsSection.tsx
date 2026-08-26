import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ExternalLink, 
  Github, 
  Terminal, 
  Eye, 
  Check, 
  Smartphone, 
  Globe, 
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { ALL_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { SmartImage } from './SmartImage';

interface WebApplicationsSectionProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const WebApplicationsSection: React.FC<WebApplicationsSectionProps> = ({ onOpenCaseStudy }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterOptions = [
    'All',
    'Business Solutions',
    'Web Application',
    'Creative & Art Platform',
    'Interactive Experience'
  ];

  const filteredProjects = activeFilter === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="applications" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#F27D26]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#F27D26] text-xs font-mono tracking-widest uppercase mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>06 // WEB APPLICATIONS & INTERACTIVE SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif italic tracking-tight text-white max-w-4xl">
            Apps, Tools & Digital Experiences
          </h2>
          <p className="text-sm sm:text-base text-[#F5F5F5]/70 max-w-2xl mt-4 font-light leading-relaxed">
            Beyond standard websites — responsive web apps with state management, offline local persistence, APK builds, and interactive storytelling.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-sm text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#F27D26] text-black shadow-lg shadow-[#F27D26]/20'
                    : 'glass-panel text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ type: 'spring', stiffness: 350, damping: 20, delay: idx * 0.05 }}
              data-cursor="project"
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-[#F27D26]/60 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-[#F27D26]/10"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-black mb-5 border border-white/10">
                  <SmartImage
                    src={project.image}
                    alt={project.title}
                    fallbackType={
                      project.id.includes('habit') ? 'habit' :
                      project.id.includes('loveloop') ? 'loveloop' :
                      project.id.includes('artika') ? 'artika' :
                      project.id.includes('skyfly') ? 'skyfly' :
                      'sora'
                    }
                    className="w-full h-full"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-0.5 rounded-sm text-[10px] font-mono bg-black/80 text-[#F27D26] border border-[#F27D26]/30 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {project.statusBadge && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-2 py-0.5 rounded-sm text-[10px] font-mono bg-[#F27D26]/20 text-[#F27D26] border border-[#F27D26]/30 backdrop-blur-md">
                        {project.statusBadge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <span className="text-[11px] font-mono text-[#F27D26] block mb-1">
                  PROJECT {project.number}
                </span>

                <h3 className="text-xl font-serif italic text-white group-hover:text-[#F27D26] transition-colors mb-1.5">
                  {project.title}
                </h3>

                <p className="text-xs text-[#F5F5F5]/70 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-sm text-[10px] font-mono bg-white/[0.03] text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded-sm text-[10px] font-mono text-slate-500">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <button
                  onClick={() => onOpenCaseStudy(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#F27D26]" />
                  <span>Case Study</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-sm bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#F27D26] hover:bg-[#d96815] text-black text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      <span>Live App</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
