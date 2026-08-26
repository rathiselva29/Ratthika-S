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
  Trophy
} from 'lucide-react';
import { TIMELINE_DATA, ACHIEVEMENTS } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'experience' | 'education'>('all');

  const filteredItems = filter === 'all' 
    ? TIMELINE_DATA 
    : TIMELINE_DATA.filter(item => item.type === filter);

  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#F27D26]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#F27D26] text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 // EXPERIENCE & JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif italic tracking-tight text-white max-w-3xl">
            Education, Internships & Milestones
          </h2>
          <p className="text-sm sm:text-base text-[#F5F5F5]/70 max-w-2xl mt-4">
            A timeline of real-world development experience, technical internships, and computer science engineering foundation.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 mt-8 p-1.5 rounded-md glass-panel border border-white/10">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-sm text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#F27D26] text-black shadow-lg shadow-[#F27D26]/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setFilter('experience')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-sm text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                filter === 'experience'
                  ? 'bg-[#F27D26] text-black shadow-lg shadow-[#F27D26]/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3 h-3" />
              <span>Internships</span>
            </button>
            <button
              onClick={() => setFilter('education')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-sm text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                filter === 'education'
                  ? 'bg-[#F27D26] text-black shadow-lg shadow-[#F27D26]/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3 h-3" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Glowing center vertical line (on desktop) / left line (on mobile) */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#F27D26] via-white/20 to-transparent opacity-40 -translate-x-1/2" />

          <div className="space-y-12 relative">
            {filteredItems.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isEducation = item.type === 'education';

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-12 items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Glowing Node on Timeline Axis */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border-2 border-[#F27D26] shadow-[0_0_16px_rgba(242,125,38,0.5)] flex items-center justify-center z-20">
                    {isEducation ? (
                      <GraduationCap className="w-3.5 h-3.5 text-[#F27D26]" />
                    ) : (
                      <Briefcase className="w-3.5 h-3.5 text-[#F27D26]" />
                    )}
                  </div>

                  {/* Content Card Container */}
                  <div className="w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0">
                    <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-[#F27D26]/40 transition-all duration-300 group shadow-xl">
                      
                      {/* Top Meta Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-[11px] font-mono font-semibold bg-white/5 border border-white/10 text-[#F27D26]">
                          <Calendar className="w-3 h-3 text-[#F27D26]" />
                          <span>{item.period}</span>
                        </span>

                        {item.gradeOrTag && (
                          <span className="px-3 py-1 rounded-sm text-[11px] font-mono font-bold bg-[#F27D26]/15 text-[#F27D26] border border-[#F27D26]/30">
                            {item.gradeOrTag}
                          </span>
                        )}
                        {item.statusLabel && !item.gradeOrTag && (
                          <span className="px-3 py-1 rounded-sm text-[11px] font-mono text-slate-300 bg-white/5 border border-white/10">
                            {item.statusLabel}
                          </span>
                        )}
                      </div>

                      {/* Main Title & Institution */}
                      <h3 className="text-lg sm:text-xl font-serif italic text-white group-hover:text-[#F27D26] transition-colors">
                        {item.title}
                      </h3>
                      
                      <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium mt-1 mb-4">
                        <span className="text-slate-200 font-semibold">{item.institution}</span>
                        {item.location && (
                          <>
                            <span className="text-slate-500">•</span>
                            <span className="text-slate-400 flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-[#F27D26]" />
                              {item.location}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Highlights Bullet List */}
                      <ul className="space-y-2 mb-5">
                        {item.highlights.map((point, hIdx) => (
                          <li key={hIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#F27D26] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-0.5 rounded-sm text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Empty Spacer on Opposite Side for Desktop Grid Symmetry */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />

                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Verified Achievements & Certifications Block */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-md bg-[#F27D26]/10 border border-[#F27D26]/20 flex items-center justify-center text-[#F27D26]">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-widest text-white">Certifications & Extracurricular Achievements</h3>
                <p className="text-xs text-slate-400">Recognitions demonstrating dedication, speed, technical breadth and athletic teamwork</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ACHIEVEMENTS.map((ach, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between hover:border-[#F27D26]/30 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/20">
                        {ach.badge}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">{ach.title}</h4>
                    <p className="text-xs text-[#F27D26] font-medium mb-2">{ach.organization}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{ach.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
