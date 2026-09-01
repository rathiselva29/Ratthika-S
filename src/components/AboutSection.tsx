import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  ShieldCheck,
  TrendingUp,
  Search,
  Zap,
  Rocket,
  ArrowRight,
  Database,
  Layout,
  ExternalLink
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  TECHNICAL_SKILLS, 
  CORE_COMPETENCIES, 
  SOFT_SKILLS, 
  ACHIEVEMENTS 
} from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tech' | 'marketing' | 'creative'>('tech');
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Programming', 'Design', 'Tools', 'AI/ML'];

  const filteredSkills = activeSkillCategory === 'All' 
    ? TECHNICAL_SKILLS 
    : TECHNICAL_SKILLS.filter(s => s.category === activeSkillCategory || (activeSkillCategory === 'AI/ML' && s.category === 'AI/ML'));

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#F27D26]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#F27D26] text-xs font-mono tracking-widest uppercase mb-4 backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            <span>01 // DUAL EXPERTISE PROFILE</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif italic tracking-tight text-white max-w-3xl"
          >
            Engineering Logic Meets High-Growth Marketing
          </motion.h2>

          {/* Interactive Mode Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl glass-panel border border-white/10 shadow-2xl">
            <button
              onClick={() => setActiveTab('tech')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                activeTab === 'tech'
                  ? 'bg-[#F27D26] text-black shadow-lg shadow-[#F27D26]/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Full-Stack Engineer</span>
            </button>

            <button
              onClick={() => setActiveTab('marketing')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                activeTab === 'marketing'
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Digital Marketing Specialist</span>
            </button>

            <button
              onClick={() => setActiveTab('creative')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                activeTab === 'creative'
                  ? 'bg-pink-500 text-black shadow-lg shadow-pink-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>Brand & Creative Director</span>
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Dual-Pillar Stage */}
        <AnimatePresence mode="wait">
          {activeTab === 'tech' && (
            <motion.div
              key="tech"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16"
            >
              {/* Left 3D Code Terminal Preview Card */}
              <div className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-8 border border-[#F27D26]/30 bg-gradient-to-br from-black via-zinc-950 to-black shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="text-xs font-mono text-slate-300 ml-2 font-bold">RatthikaArchitect.tsx</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#F27D26]/20 text-[#F27D26] border border-[#F27D26]/30 font-bold">
                      REACT 19 + NODE
                    </span>
                  </div>

                  {/* Animated Code snippet simulation */}
                  <div className="font-mono text-xs text-slate-300 space-y-2 py-5 overflow-x-auto">
                    <div className="text-slate-500">// B.E. Computer Science Graduate (8.2 CGPA)</div>
                    <div><span className="text-[#F27D26]">const</span> developer: <span className="text-cyan-400">FullStackDeveloper</span> = &#123;</div>
                    <div className="pl-4">name: <span className="text-emerald-400">'S. Ratthika'</span>,</div>
                    <div className="pl-4">frontend: [<span className="text-emerald-400">'React 19'</span>, <span className="text-emerald-400">'TypeScript'</span>, <span className="text-emerald-400">'Tailwind'</span>],</div>
                    <div className="pl-4">backend: [<span className="text-emerald-400">'Node.js'</span>, <span className="text-emerald-400">'Express'</span>, <span className="text-emerald-400">'REST APIs'</span>],</div>
                    <div className="pl-4">database: [<span className="text-emerald-400">'MySQL'</span>, <span className="text-emerald-400">'PostgreSQL'</span>, <span className="text-emerald-400">'Firebase'</span>],</div>
                    <div className="pl-4">architecture: <span className="text-amber-400">'Clean Modular & PWA'</span>,</div>
                    <div className="pl-4">mission: <span className="text-pink-400">() =&gt; 'Build fast, high-converting web applications'</span></div>
                    <div>&#125;;</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
                  <div className="text-center p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-lg font-bold text-white font-mono">100%</div>
                    <div className="text-[10px] text-slate-400 uppercase">Responsive</div>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-lg font-bold text-[#F27D26] font-mono">&lt; 0.8s</div>
                    <div className="text-[10px] text-slate-400 uppercase">Page Load</div>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-lg font-bold text-emerald-400 font-mono">100%</div>
                    <div className="text-[10px] text-slate-400 uppercase">Type Safe</div>
                  </div>
                </div>
              </div>

              {/* Right Visual Feature Cards */}
              <div className="lg:col-span-6 flex flex-col justify-between gap-4">
                <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-start gap-4 shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-[#F27D26]/15 border border-[#F27D26]/30 flex items-center justify-center text-[#F27D26] shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 font-serif italic">High-Performance Frontend</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Building pixel-perfect interfaces in React, TypeScript, and Tailwind with 60fps micro-animations and zero layout shifts.
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {['Component Architecture', 'Custom Hooks', 'State Management', 'Motion Animations'].map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-start gap-4 shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 font-serif italic">Backend & API Integrations</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Crafting secure REST endpoints, database schemas, authentication systems, and cloud integrations.
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {['Node.js APIs', 'MySQL / Postgres', 'OAuth & Auth', 'Cloud Deployment'].map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-start gap-4 shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Layout className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 font-serif italic">Progressive Web Apps & Tools</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Deploying offline-ready web apps with local caching, instant search, and intuitive dashboard workflows.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'marketing' && (
            <motion.div
              key="marketing"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16"
            >
              {/* Left Growth Dashboard Visualizer */}
              <div className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-500/40 bg-gradient-to-br from-black via-zinc-950 to-black shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Growth Funnel Matrix</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                      DATA-DRIVEN
                    </span>
                  </div>

                  {/* Visual Funnel Metrics */}
                  <div className="space-y-4 py-6">
                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <span className="text-slate-300">1. Top Funnel: Organic Search & Traffic</span>
                        <span className="text-emerald-400 font-bold">+340% Lift</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: '92%' }}
                          transition={{ duration: 1 }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <span className="text-slate-300">2. Mid Funnel: Engagement & Retargeting</span>
                        <span className="text-[#F27D26] font-bold">8.4x CTR</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: '84%' }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-[#F27D26] to-amber-400 rounded-full"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <span className="text-slate-300">3. Bottom Funnel: Direct Conversions & Leads</span>
                        <span className="text-purple-400 font-bold">+280% Sales</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: '78%' }}
                          transition={{ duration: 1, delay: 0.4 }}
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
                  <div className="text-center p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-lg font-bold text-emerald-400 font-mono">Rank #1</div>
                    <div className="text-[10px] text-slate-400 uppercase">Target SEO</div>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-lg font-bold text-[#F27D26] font-mono">Meta & Google</div>
                    <div className="text-[10px] text-slate-400 uppercase">Paid Funnels</div>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-lg font-bold text-cyan-400 font-mono">GA4 + GTM</div>
                    <div className="text-[10px] text-slate-400 uppercase">Precision Tracking</div>
                  </div>
                </div>
              </div>

              {/* Right Marketing Pillars */}
              <div className="lg:col-span-6 flex flex-col justify-between gap-4">
                <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-start gap-4 shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Search className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 font-serif italic">Search Engine Optimization (SEO)</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Technical SEO audits, semantic keyword mapping, schema markup, and speed optimization to rank businesses organically on Google.
                    </p>
                  </div>
                </div>

                <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-start gap-4 shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 font-serif italic">Meta & Google Paid Advertising</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Creating high-converting creative ad copy, audience segmentations, and automated retargeting funnels with maximum ROI.
                    </p>
                  </div>
                </div>

                <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-start gap-4 shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 font-serif italic">Social Media Growth & Branding</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Storytelling and content strategies across Instagram, LinkedIn, and YouTube to build loyal brand communities.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'creative' && (
            <motion.div
              key="creative"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16"
            >
              {/* Left Brand Showcase Card */}
              <div className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-8 border border-pink-500/40 bg-gradient-to-br from-black via-zinc-950 to-black shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Palette className="w-4 h-4 text-pink-400" />
                      <span className="text-xs font-mono text-pink-400 font-bold uppercase">Artika Brand Studio</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-pink-500/20 text-pink-400 border border-pink-500/30 font-bold">
                      CREATIVE ESSENCE
                    </span>
                  </div>

                  <div className="py-6 space-y-4">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="text-xs font-mono text-[#F27D26] block font-bold">Artistic Philosophy</span>
                      <p className="text-xs text-slate-300 mt-1">
                        Every brand deserves an unmistakable visual voice. Combining handmade artistic emotion with high-converting digital design.
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                        <div className="w-6 h-6 rounded-full bg-[#F27D26] mx-auto mb-1 shadow-md shadow-[#F27D26]/40" />
                        <span className="text-[10px] font-mono text-slate-300">#F27D26 Amber</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                        <div className="w-6 h-6 rounded-full bg-cyan-400 mx-auto mb-1 shadow-md shadow-cyan-400/40" />
                        <span className="text-[10px] font-mono text-slate-300">#06B6D4 Cyan</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                        <div className="w-6 h-6 rounded-full bg-pink-500 mx-auto mb-1 shadow-md shadow-pink-500/40" />
                        <span className="text-[10px] font-mono text-slate-300">#EC4899 Rose</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">Founder of Artika Creations</span>
                  <span className="text-xs font-mono text-pink-400 font-bold">30+ Bespoke Artworks</span>
                </div>
              </div>

              {/* Right Creative Features */}
              <div className="lg:col-span-6 flex flex-col justify-between gap-4">
                <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-start gap-4 shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
                    <Palette className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 font-serif italic">Complete Brand Identity</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Logos, custom color palettes, typography guidelines, and design systems that stand out in crowded markets.
                    </p>
                  </div>
                </div>

                <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-start gap-4 shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 font-serif italic">Interactive Celebration Keepsakes</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Custom birthday countdown websites, digital wedding invitations with music, and personalized interactive memories.
                    </p>
                  </div>
                </div>

                <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-start gap-4 shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-[#F27D26]/15 border border-[#F27D26]/30 flex items-center justify-center text-[#F27D26] shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 font-serif italic">UI/UX Wireframing & Prototypes</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      High-fidelity Figma interfaces and user-journey maps focused on seamless usability and conversions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Technical Skills & Floating Technology Labels */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold uppercase tracking-widest text-white font-mono">Skill Matrix</h3>
                <span className="text-[10px] px-2 py-0.5 bg-[#F27D26]/20 text-[#F27D26] rounded-full border border-[#F27D26]/30 font-mono font-bold">
                  TECH + MARKETING
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">Interactive technical proficiency radar across development, marketing, and design stacks</p>
            </div>
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveSkillCategory(cat)}
                  className={`px-3 py-1 rounded-xl text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
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

          {/* Skill Cards Grid with Animated Progress Fill */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {filteredSkills.map((skill, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.03, y: -2 }}
                className="p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#F27D26]/40 transition-all flex flex-col justify-between shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-white">{skill.name}</span>
                  <span className="text-[10px] font-mono text-[#F27D26] font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.03 }}
                    className="h-full bg-gradient-to-r from-[#F27D26] to-amber-400 rounded-full"
                  />
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase mt-2">{skill.category}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
