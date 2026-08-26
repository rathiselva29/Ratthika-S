import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Code2, 
  Palette, 
  GraduationCap, 
  Terminal, 
  Check, 
  Layers, 
  Award,
  Globe,
  BrainCircuit,
  Cpu,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  TECHNICAL_SKILLS, 
  CORE_COMPETENCIES, 
  SOFT_SKILLS, 
  ACHIEVEMENTS 
} from '../data/portfolioData';
import { SmartImage } from './SmartImage';

export const AboutSection: React.FC = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Programming', 'Design', 'Tools', 'AI/ML'];

  const filteredSkills = activeSkillCategory === 'All' 
    ? TECHNICAL_SKILLS 
    : TECHNICAL_SKILLS.filter(s => s.category === activeSkillCategory || (activeSkillCategory === 'AI/ML' && s.category === 'AI/ML'));

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F27D26]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#F27D26] text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // ABOUT RATTHIKA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif italic tracking-tight text-white max-w-3xl">
            {PERSONAL_INFO.aboutHeadline}
          </h2>
          <p className="text-sm sm:text-base text-[#F5F5F5]/70 max-w-2xl mt-4">
            Bridging technical precision and creative visual artistry to create memorable digital solutions.
          </p>
        </div>

        {/* Two-Column Grid: Left Portrait + Right Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Official Portrait & Credentials Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              
              {/* Frame Card */}
              <div className="relative glass-panel rounded-2xl p-4 sm:p-5 border border-white/10 overflow-hidden shadow-2xl">
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-[#090d16] flex items-center justify-center border border-white/10">
                  <img
                    src="/images/profile/ratthika-profile.jpg"
                    alt="S. Ratthika"
                    loading="eager"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Profile Identity & Status */}
                <div className="mt-4 p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-white font-serif italic">S. Ratthika</h4>
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-xs text-[#F27D26] font-medium">B.E. Computer Science (8.2 CGPA)</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-sm text-[10px] font-mono font-bold bg-[#F27D26]/20 text-[#F27D26] border border-[#F27D26]/30 uppercase">
                    Engineer
                  </span>
                </div>

                {/* Professional Status Bar */}
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open for Roles & Projects</span>
                  </span>
                  <span className="text-[11px] text-slate-400">Trichy / Neyveli, India</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-md mt-5">
              <div className="glass-panel p-3.5 rounded-xl text-center border border-white/10">
                <span className="text-xl sm:text-2xl font-serif italic text-white">
                  3+
                </span>
                <p className="text-[10px] uppercase tracking-wider opacity-50 mt-0.5">Internships</p>
              </div>
              <div className="glass-panel p-3.5 rounded-xl text-center border border-white/10">
                <span className="text-xl sm:text-2xl font-serif italic text-[#F27D26]">
                  8.2
                </span>
                <p className="text-[10px] uppercase tracking-wider opacity-50 mt-0.5">B.E. CGPA</p>
              </div>
              <div className="glass-panel p-3.5 rounded-xl text-center border border-white/10">
                <span className="text-xl sm:text-2xl font-serif italic text-white">
                  100%
                </span>
                <p className="text-[10px] uppercase tracking-wider opacity-50 mt-0.5">Dedicated</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Bio & Qualifications */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Bio Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl sm:text-2xl font-serif italic text-white mb-4">
                Engineering Mindset with a Creative Pulse
              </h3>
              <p className="text-[#F5F5F5]/75 text-sm sm:text-base leading-relaxed">
                {PERSONAL_INFO.aboutDescription}
              </p>
              
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26]" />
                  <span><strong>Education:</strong> MAM College of Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  <span><strong>Degree:</strong> B.E. Computer Science (2022–2026)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26]" />
                  <span><strong>Location:</strong> Neyveli / Trichy, Tamil Nadu</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span><strong>Focus:</strong> Web Development & Digital Presence</span>
                </div>
              </div>
            </div>

            {/* Experience Building Areas */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#F27D26]" />
                <span>Hands-on Experience Building:</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  'Responsive Websites',
                  'Web Applications',
                  'UI Components',
                  'Digital Experiences',
                  'Creative Designs',
                  'Business Websites',
                  'Productivity Apps',
                  'Brand Identities',
                  'SEO Foundations'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-md bg-white/[0.02] border border-white/5 text-xs text-[#F5F5F5]/80">
                    <Check className="w-3.5 h-3.5 text-[#F27D26] shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies & Soft Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel p-5 rounded-xl border border-white/10">
                <h5 className="text-xs font-mono uppercase tracking-widest text-[#F27D26] font-bold mb-3 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Core Competencies</span>
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {CORE_COMPETENCIES.map((comp, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-sm bg-white/5 text-slate-200 border border-white/10 text-[11px]">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-panel p-5 rounded-xl border border-white/10">
                <h5 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-bold mb-3 flex items-center gap-1.5">
                  <BrainCircuit className="w-3.5 h-3.5 text-[#F27D26]" />
                  <span>Soft Skills</span>
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {SOFT_SKILLS.map((skill, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-sm bg-white/5 text-slate-200 border border-white/10 text-[11px]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Technical Skills & Floating Technology Labels */}
        <div className="mt-16 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold uppercase tracking-widest text-white">Technical Arsenal</h3>
                <span className="text-[10px] px-2 py-0.5 bg-[#F27D26]/20 text-[#F27D26] rounded">Tech Stack</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">Verified technical proficiencies across modern frontend, backend, and design stacks</p>
            </div>
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveSkillCategory(cat)}
                  className={`px-3 py-1 rounded-sm text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                    activeSkillCategory === cat
                      ? 'bg-[#F27D26] text-black shadow-md shadow-[#F27D26]/20'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Skill Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {filteredSkills.map((skill, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-[#F27D26]/40 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-white group-hover:text-[#F27D26] transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded-sm bg-white/5">
                    {skill.category}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mb-3">{skill.highlight}</p>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.05 }}
                    className="h-full bg-[#F27D26] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
