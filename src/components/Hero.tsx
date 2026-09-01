import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Send, 
  FileText, 
  Sparkles, 
  Code2, 
  Palette, 
  CheckCircle2, 
  Globe, 
  Terminal,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Zap,
  Search,
  Rocket,
  Target,
  Layers,
  Cpu,
  ShieldCheck
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SmartImage } from './SmartImage';
import { TechMarketingAnimatedBackground } from './TechMarketingAnimatedBackground';
import { BrandLogo } from './BrandLogo';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roleCycling.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 30; // -15 to 15 px
    const y = (clientY / innerHeight - 0.5) * 30; // -15 to 15 px
    setMousePosition({ x, y });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050505]"
    >
      {/* ================= 3D AI ANIMATED VIDEO & CANVAS MATRIX BACKGROUND ================= */}
      <TechMarketingAnimatedBackground mousePosition={mousePosition} />

      {/* ================= LEFT FLOATING PROJECT PREVIEW CARDS (3D TILT) ================= */}
      
      {/* Card 1: SkyFly International (Top Left) */}
      <motion.div
        animate={{ 
          x: mousePosition.x * -0.6,
          y: [0, -10, 0],
          rotateZ: [-2, 0, -2]
        }}
        whileHover={{ scale: 1.05, rotateZ: 0 }}
        transition={{ 
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          rotateZ: { duration: 7, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="hidden xl:block absolute left-6 top-32 w-72 rounded-xl overflow-hidden glass-panel border border-white/10 hover:border-[#F27D26]/60 transition-all duration-300 shadow-2xl z-20 group cursor-pointer"
        onClick={() => scrollToSection('projects')}
      >
        <div className="px-3 py-1.5 bg-black/80 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-rose-500/80" />
            <div className="w-2 h-2 rounded-full bg-amber-500/80" />
            <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
            <span className="text-[10px] font-mono text-slate-300 ml-1 font-bold">SkyFly International</span>
          </div>
          <span className="text-[9px] font-mono text-[#F27D26] font-bold">LIVE CLIENT</span>
        </div>
        <div className="relative aspect-video bg-black">
          <SmartImage src="/images/skyfly-preview.png" alt="SkyFly" fallbackType="skyfly" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button 
              className="px-3 py-1 bg-[#F27D26] text-black text-[10px] font-bold uppercase tracking-wider rounded-sm flex items-center gap-1"
            >
              <span>Inspect Project</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Card 2: Artika Creations Gallery (Bottom Left) */}
      <motion.div
        animate={{ 
          x: mousePosition.x * -0.8,
          y: [0, 12, 0],
          rotateZ: [2, 0, 2]
        }}
        whileHover={{ scale: 1.05, rotateZ: 0 }}
        transition={{ 
          y: { duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
          rotateZ: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }
        }}
        className="hidden xl:block absolute left-8 bottom-28 w-72 rounded-xl overflow-hidden glass-panel border border-[#F27D26]/30 hover:border-[#F27D26] transition-all duration-300 shadow-2xl z-20 group cursor-pointer"
        onClick={() => scrollToSection('showcase')}
      >
        <div className="px-3 py-1.5 bg-black/80 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Palette className="w-3 h-3 text-[#F27D26]" />
            <span className="text-[10px] font-mono text-white font-bold">Artika Creations</span>
          </div>
          <span className="text-[9px] font-mono text-[#F27D26] font-bold">ART GALLERY</span>
        </div>
        <div className="relative aspect-video bg-black">
          <SmartImage src="/images/artika-creations-banner.png" alt="Artika" fallbackType="artika" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button 
              className="px-3 py-1 bg-[#F27D26] text-black text-[10px] font-bold uppercase tracking-wider rounded-sm flex items-center gap-1"
            >
              <span>Explore Gallery</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* ================= RIGHT FLOATING PROJECT PREVIEW CARDS (3D TILT) ================= */}

      {/* Card 3: To-Do-Habits / HabitFlow App (Top Right) */}
      <motion.div
        animate={{ 
          x: mousePosition.x * 0.7,
          y: [0, -12, 0],
          rotateZ: [2, 0, 2]
        }}
        whileHover={{ scale: 1.05, rotateZ: 0 }}
        transition={{ 
          y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
          rotateZ: { duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }
        }}
        className="hidden xl:block absolute right-6 top-32 w-72 rounded-xl overflow-hidden glass-panel border border-white/10 hover:border-emerald-500/50 transition-all duration-300 shadow-2xl z-20 group cursor-pointer"
        onClick={() => scrollToSection('applications')}
      >
        <div className="px-3 py-1.5 bg-black/80 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-emerald-400" />
            <span className="text-[10px] font-mono text-white font-bold">To-Do-Habits App</span>
          </div>
          <span className="text-[9px] font-mono text-emerald-400 font-bold">REACT / PWA</span>
        </div>
        <div className="relative aspect-video bg-black">
          <SmartImage src="/images/todo-habits-preview.png" alt="To-Do-Habits" fallbackType="habit" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button 
              className="px-3 py-1 bg-[#F27D26] text-black text-[10px] font-bold uppercase tracking-wider rounded-sm flex items-center gap-1"
            >
              <span>Test App</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Card 4: Business Growth Solutions (Bottom Right) */}
      <motion.div
        animate={{ 
          x: mousePosition.x * 0.9,
          y: [0, 10, 0],
          rotateZ: [-2, 0, -2]
        }}
        whileHover={{ scale: 1.05, rotateZ: 0 }}
        transition={{ 
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 },
          rotateZ: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }
        }}
        className="hidden xl:block absolute right-8 bottom-28 w-72 rounded-xl overflow-hidden glass-panel border border-white/10 hover:border-[#F27D26]/40 transition-all duration-300 shadow-2xl z-20 group cursor-pointer"
        onClick={() => scrollToSection('packages')}
      >
        <div className="px-3 py-1.5 bg-black/80 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-[#F27D26]" />
            <span className="text-[10px] font-mono text-white font-bold">Business Packages</span>
          </div>
          <span className="text-[9px] font-mono text-[#F27D26] font-bold">DIGITAL PRESENCE</span>
        </div>
        <div className="relative aspect-video bg-black">
          <SmartImage src="/images/creative-art-banner.png" alt="Business Solutions" fallbackType="code_art" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button 
              className="px-3 py-1 bg-[#F27D26] text-black text-[10px] font-bold uppercase tracking-wider rounded-sm flex items-center gap-1"
            >
              <span>Explore Packages</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* ================= MAIN CENTER HERO CONTAINER ================= */}
      <div className="relative z-20 max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        
        {/* Brand 3D Emblem & Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F27D26] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F27D26]"></span>
            </span>
            <span className="text-[11px] font-mono text-white/90 font-medium tracking-wider uppercase">
              {PERSONAL_INFO.statusIndicator}
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Dual Expertise: Tech + Growth</span>
          </div>
        </motion.div>

        {/* Dynamic Animatic Interactive Tags Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mb-5"
        >
          <motion.span
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#F27D26]/15 text-[#F27D26] border border-[#F27D26]/40 flex items-center gap-1.5 shadow-lg shadow-[#F27D26]/10 cursor-default backdrop-blur-md"
          >
            <Zap className="w-3.5 h-3.5 animate-bounce" />
            <span>Full-Stack Web Dev</span>
          </motion.span>

          <motion.span
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/40 flex items-center gap-1.5 shadow-lg shadow-emerald-500/10 cursor-default backdrop-blur-md"
          >
            <TrendingUp className="w-3.5 h-3.5 animate-pulse" />
            <span>Digital Marketing & Ads</span>
          </motion.span>

          <motion.span
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-sky-500/15 text-sky-400 border border-sky-500/40 flex items-center gap-1.5 shadow-lg shadow-sky-500/10 cursor-default backdrop-blur-md"
          >
            <Search className="w-3.5 h-3.5" />
            <span>SEO & Traffic Scaling</span>
          </motion.span>

          <motion.span
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-purple-500/15 text-purple-400 border border-purple-500/40 flex items-center gap-1.5 shadow-lg shadow-purple-500/10 cursor-default backdrop-blur-md"
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Creative Brand Design</span>
          </motion.span>
        </motion.div>

        {/* Main Hero Headline with 3D Depth */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif leading-[0.92] font-light italic text-slate-100 drop-shadow-2xl"
        >
          Hi, I'm <br />
          <span className="not-italic font-extrabold text-white tracking-tight font-sans bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
            S. Ratthika
          </span>
        </motion.h1>

        {/* Dynamic Animated Role Cycler with Holographic Glow */}
        <div className="h-12 sm:h-16 flex items-center justify-center my-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2.5 px-5 py-2 rounded-xl bg-black/60 border border-[#F27D26]/40 backdrop-blur-xl shadow-2xl shadow-[#F27D26]/10"
            >
              <Sparkles className="w-5 h-5 text-[#F27D26] animate-spin" style={{ animationDuration: '4s' }} />
              <span className="text-lg sm:text-2xl md:text-3xl font-display font-bold text-white">
                {PERSONAL_INFO.roleCycling[roleIndex]}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Punchy Kinetic Tagline (Avoids PDF Paragraph Bloat) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm sm:text-base text-slate-300 font-medium max-w-2xl mt-1"
        >
          <span className="flex items-center gap-1.5">
            <Code2 className="w-4 h-4 text-[#F27D26]" />
            <span>Modern Web Architecture</span>
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1.5">
            <Rocket className="w-4 h-4 text-emerald-400" />
            <span>Data-Driven Customer Growth</span>
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1.5">
            <Palette className="w-4 h-4 text-pink-400" />
            <span>Memorable Brand Experiences</span>
          </span>
        </motion.div>

        {/* High-Converting Action CTAs with Spring Physics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mt-8 w-full max-w-md sm:max-w-none"
        >
          {/* Primary CTA: Explore Work */}
          <motion.button
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto px-8 py-4 bg-[#F27D26] text-black font-extrabold uppercase text-xs tracking-widest rounded-xl hover:bg-white hover:text-black transition-all cursor-pointer flex items-center justify-center gap-2 shadow-2xl shadow-[#F27D26]/30 border border-[#F27D26]"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          {/* Secondary CTA: Get In Touch */}
          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto px-8 py-4 glass-panel border border-white/20 text-white font-bold uppercase text-xs tracking-widest rounded-xl hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg backdrop-blur-md"
          >
            <Send className="w-4 h-4 text-[#F27D26]" />
            <span>Get In Touch</span>
          </motion.button>

          {/* Additional CTA: Download Resume */}
          <motion.button
            onClick={onOpenResume}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto px-6 py-4 glass-panel border border-white/10 text-slate-300 font-bold uppercase text-xs tracking-widest rounded-xl hover:bg-white/5 hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md backdrop-blur-md"
          >
            <FileText className="w-4 h-4 text-[#F27D26]" />
            <span>Resume</span>
          </motion.button>
        </motion.div>

        {/* Visual 3D Metric Meters Grid (Replaces Wall of Text) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="grid grid-cols-3 gap-4 pt-10 mt-10 border-t border-white/10 w-full max-w-2xl text-center"
        >
          <motion.div 
            whileHover={{ scale: 1.06, y: -3 }}
            className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#F27D26]/30 transition-all shadow-md cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <div className="text-2xl sm:text-3xl font-serif italic text-white font-bold">01</div>
            <div className="text-[11px] uppercase tracking-widest text-[#F27D26] font-mono font-bold mt-1">Full-Stack Dev</div>
            <div className="text-[10px] text-slate-400 mt-0.5">React & Node Engine</div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.06, y: -3 }}
            className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all shadow-md cursor-pointer"
            onClick={() => scrollToSection('services')}
          >
            <div className="text-2xl sm:text-3xl font-serif italic text-emerald-400 font-bold">02</div>
            <div className="text-[11px] uppercase tracking-widest text-emerald-400 font-mono font-bold mt-1">Marketing ROI</div>
            <div className="text-[10px] text-slate-400 mt-0.5">SEO & Meta Ads</div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.06, y: -3 }}
            className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-sky-500/30 transition-all shadow-md cursor-pointer"
            onClick={() => scrollToSection('packages')}
          >
            <div className="text-2xl sm:text-3xl font-serif italic text-sky-400 font-bold">03</div>
            <div className="text-[11px] uppercase tracking-widest text-sky-400 font-mono font-bold mt-1">Freelance Pro</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Complete Delivery</div>
          </motion.div>
        </motion.div>

        {/* Animated Scroll Down Trigger */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-12 flex flex-col items-center gap-2 text-slate-500 hover:text-[#F27D26] transition-colors cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-[10px] font-mono tracking-widest uppercase opacity-75 font-semibold">Scroll To Explore</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1.5 h-2 bg-[#F27D26] rounded-full animate-bounce" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
