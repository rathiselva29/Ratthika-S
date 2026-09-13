import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle2,
  ChevronRight,
  Trophy,
  Code2,
  TrendingUp,
  ExternalLink
} from 'lucide-react';
import { TIMELINE_DATA, ACHIEVEMENTS } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'experience' | 'education'>('all');

  const filteredItems = filter === 'all' 
    ? TIMELINE_DATA 
    : TIMELINE_DATA.filter(item => item.type === filter);

  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#F27D26]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

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
            <span>02 // EXPERIENCE & JOURNEY</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif italic tracking-tight text-white max-w-3xl"
          >
            Education & Technical Milestones
          </motion.h2>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 mt-8 p-1.5 rounded-2xl glass-panel border border-white/10 shadow-2xl">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-xl text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#F27D26] text-black shadow-lg shadow-[#F27D26]/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setFilter('experience')}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                filter === 'experience'
                  ? 'bg-[#F27D26] text-black shadow-lg shadow-[#F27D26]/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Internships</span>
            </button>
            <button
              onClick={() => setFilter('education')}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                filter === 'education'
                  ? 'bg-[#F27D26] text-black shadow-lg shadow-[#F27D26]/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* 3D Animated Timeline Roadmap */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Glowing center vertical line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#F27D26] via-amber-500/50 to-transparent opacity-60 -translate-x-1/2" />

          <div className="space-y-10 relative">
            {filteredItems.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isEducation = item.type === 'education';

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-12 items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* 3D Timeline Glowing Milestone Node with Pulsating Halo */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-black border-2 border-[#F27D26] flex items-center justify-center text-[#F27D26] shadow-xl shadow-[#F27D26]/40 z-20 group-hover:scale-110 transition-transform">
                    {/* Glowing pulse aura */}
                    <span className="absolute -inset-1 rounded-xl bg-[#F27D26]/30 animate-ping pointer-events-none opacity-40" />
                    {isEducation ? (
                      <GraduationCap className="w-5 h-5 text-[#F27D26]" />
                    ) : (
                      <Briefcase className="w-5 h-5 text-[#F27D26]" />
                    )}
                  </div>

                  {/* Content Card with 3D Border & Spring Reaction */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-[#F27D26]/50 transition-all duration-300 shadow-xl group">
                      
                      {/* Date & Type Tag */}
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#F27D26]/15 text-[#F27D26] border border-[#F27D26]/30">
                          {item.period}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {item.location}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-lg font-serif italic font-bold text-white group-hover:text-[#F27D26] transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-xs font-mono text-[#F27D26] font-semibold mb-3">
                        {item.institution}
                      </div>

                      {/* Responsibilities list */}
                      <div className={`space-y-1.5 text-xs text-slate-300 font-light mb-4 ${isEven ? 'md:text-right' : ''}`}>
                        {item.highlights.map((highlight, rIdx) => (
                          <div key={rIdx} className={`flex items-start gap-1.5 ${isEven ? 'md:justify-end' : ''}`}>
                            <span className="text-[#F27D26] font-bold mt-0.5">•</span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Tags */}
                      <div className={`flex flex-wrap gap-1.5 ${isEven ? 'md:justify-end' : ''}`}>
                        {item.skills.map((skill, sIdx) => (
                          <span 
                            key={sIdx}
                            className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Empty side for layout balance */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Honors & Achievements Grid */}
        <div className="mt-20 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-[#F27D26]" />
            <h3 className="text-xl font-serif italic text-white font-bold">Key Honors & Certifications</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ACHIEVEMENTS.map((ach, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -4 }}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#F27D26]/40 transition-all shadow-md"
              >
                <div className="text-xs font-mono text-[#F27D26] font-bold mb-1">
                  {ach.badge}
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  {ach.title}
                </h4>
                <div className="text-[11px] font-mono text-slate-400 mb-1">
                  {ach.organization}
                </div>
                <p className="text-xs text-slate-400 font-light">
                  {ach.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
