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
  ChevronRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SmartImage } from './SmartImage';

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
    const x = (clientX / innerWidth - 0.5) * 20; // -10 to 10 px
    const y = (clientY / innerHeight - 0.5) * 20; // -10 to 10 px
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
      {/* ================= DYNAMIC ANIMATING GRADIENT MESH & GRID BACKGROUND ================= */}
      
      {/* 1. Slowly Moving Perspective Grid */}
      <motion.div 
        animate={{ 
          backgroundPosition: ['0px 0px', '60px 60px', '0px 0px'],
          opacity: [0.18, 0.28, 0.18]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
        className="absolute inset-0 bg-grid-pattern pointer-events-none"
        style={{
          backgroundSize: '40px 40px',
          transform: `translate3d(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px, 0)`
        }}
      />

      {/* 2. Slowly Drifting Gradient Mesh Orbs */}
      {/* Orb A: Warm Amber Brand Glow (Top Left) */}
      <motion.div 
        animate={{ 
          x: [-40, 50, -40],
          y: [-20, 40, -20],
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.22, 0.12]
        }}
        transition={{ 
          duration: 14, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
        className="absolute -top-10 left-1/4 w-[550px] h-[550px] bg-[#F27D26] rounded-full blur-[160px] pointer-events-none"
      />

      {/* Orb B: Deep Violet / Indigo Mesh Glow (Center Right) */}
      <motion.div 
        animate={{ 
          x: [30, -60, 30],
          y: [20, -40, 20],
          scale: [1.1, 0.9, 1.1],
          opacity: [0.08, 0.18, 0.08]
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: 'easeInOut',
          delay: 2
        }}
        className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-indigo-900/60 rounded-full blur-[170px] pointer-events-none"
      />

      {/* Orb C: Soft Golden Radiance (Bottom Left) */}
      <motion.div 
        animate={{ 
          x: [-20, 40, -20],
          y: [40, -30, 40],
          scale: [0.9, 1.15, 0.9],
          opacity: [0.06, 0.16, 0.06]
        }}
        transition={{ 
          duration: 16, 
          repeat: Infinity, 
          ease: 'easeInOut',
          delay: 4
        }}
        className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-amber-600/30 rounded-full blur-[150px] pointer-events-none"
      />

      {/* Orb D: Subtle Slate Depth (Top Center) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.04, 0.1, 0.04]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-white rounded-full blur-[180px] pointer-events-none"
      />

      {/* ================= LEFT FLOATING PROJECT PREVIEW CARDS ================= */}
      
      {/* Card 1: SkyFly International (Top Left) */}
      <motion.div
        animate={{ 
          x: mousePosition.x * -0.6,
          y: [0, -10, 0],
          rotateZ: [-2, 0, -2]
        }}
        transition={{ 
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          rotateZ: { duration: 7, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="hidden xl:block absolute left-6 top-32 w-72 rounded-xl overflow-hidden glass-panel border border-white/10 hover:border-[#F27D26]/40 transition-all duration-300 shadow-2xl z-10 group"
      >
        <div className="px-3 py-1.5 bg-black/80 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-rose-500/80" />
            <div className="w-2 h-2 rounded-full bg-amber-500/80" />
            <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
            <span className="text-[10px] font-mono text-slate-300 ml-1">SkyFly International</span>
          </div>
          <span className="text-[9px] font-mono text-[#F27D26]">CLIENT LIVE</span>
        </div>
        <div className="relative aspect-video bg-black">
          <SmartImage src="/images/skyfly-preview.png" alt="SkyFly" fallbackType="skyfly" className="w-full h-full" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-3 py-1 bg-[#F27D26] text-black text-[10px] font-bold uppercase tracking-wider rounded-sm flex items-center gap-1 cursor-pointer"
            >
              <span>View Project</span>
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
        transition={{ 
          y: { duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
          rotateZ: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }
        }}
        className="hidden xl:block absolute left-8 bottom-28 w-72 rounded-xl overflow-hidden glass-panel border border-[#F27D26]/30 hover:border-[#F27D26] transition-all duration-300 shadow-2xl z-10 group"
      >
        <div className="px-3 py-1.5 bg-black/80 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Palette className="w-3 h-3 text-[#F27D26]" />
            <span className="text-[10px] font-mono text-white font-bold">Artika Creations</span>
          </div>
          <span className="text-[9px] font-mono text-[#F27D26]">ART GALLERY</span>
        </div>
        <div className="relative aspect-video bg-black">
          <SmartImage src="/images/artika-creations-banner.png" alt="Artika" fallbackType="artika" className="w-full h-full" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button 
              onClick={() => scrollToSection('showcase')}
              className="px-3 py-1 bg-[#F27D26] text-black text-[10px] font-bold uppercase tracking-wider rounded-sm flex items-center gap-1 cursor-pointer"
            >
              <span>Explore Gallery</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* ================= RIGHT FLOATING PROJECT PREVIEW CARDS ================= */}

      {/* Card 3: To-Do-Habits / HabitFlow App (Top Right) */}
      <motion.div
        animate={{ 
          x: mousePosition.x * 0.7,
          y: [0, -12, 0],
          rotateZ: [2, 0, 2]
        }}
        transition={{ 
          y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
          rotateZ: { duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }
        }}
        className="hidden xl:block absolute right-6 top-32 w-72 rounded-xl overflow-hidden glass-panel border border-white/10 hover:border-[#F27D26]/40 transition-all duration-300 shadow-2xl z-10 group"
      >
        <div className="px-3 py-1.5 bg-black/80 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-emerald-400" />
            <span className="text-[10px] font-mono text-white font-medium">To-Do-Habits App</span>
          </div>
          <span className="text-[9px] font-mono text-emerald-400">PWA / LOGIC</span>
        </div>
        <div className="relative aspect-video bg-black">
          <SmartImage src="/images/todo-habits-preview.png" alt="To-Do-Habits" fallbackType="habit" className="w-full h-full" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button 
              onClick={() => scrollToSection('applications')}
              className="px-3 py-1 bg-[#F27D26] text-black text-[10px] font-bold uppercase tracking-wider rounded-sm flex items-center gap-1 cursor-pointer"
            >
              <span>Inspect App</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Card 4: VY Enterprises / Business Presence (Bottom Right) */}
      <motion.div
        animate={{ 
          x: mousePosition.x * 0.9,
          y: [0, 10, 0],
          rotateZ: [-2, 0, -2]
        }}
        transition={{ 
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 },
          rotateZ: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }
        }}
        className="hidden xl:block absolute right-8 bottom-28 w-72 rounded-xl overflow-hidden glass-panel border border-white/10 hover:border-[#F27D26]/40 transition-all duration-300 shadow-2xl z-10 group"
      >
        <div className="px-3 py-1.5 bg-black/80 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-[#F27D26]" />
            <span className="text-[10px] font-mono text-white">Business Packages</span>
          </div>
          <span className="text-[9px] font-mono text-[#F27D26]">DIGITAL PRESENCE</span>
        </div>
        <div className="relative aspect-video bg-black">
          <SmartImage src="/images/creative-art-banner.png" alt="Business Solutions" fallbackType="code_art" className="w-full h-full" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button 
              onClick={() => scrollToSection('packages')}
              className="px-3 py-1 bg-[#F27D26] text-black text-[10px] font-bold uppercase tracking-wider rounded-sm flex items-center gap-1 cursor-pointer"
            >
              <span>Explore Packages</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* ================= MAIN CENTER CONTAINER ================= */}
      <div className="relative z-20 max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        
        {/* Status Indicator Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F27D26] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F27D26]"></span>
          </span>
          <span className="text-[11px] font-mono text-white/80 font-medium tracking-wider uppercase">
            {PERSONAL_INFO.statusIndicator}
          </span>
        </motion.div>

        {/* Sophisticated Tag */}
        <div className="text-[#F27D26] text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-4">
          Web Developer | Digital Creator | Freelancer
        </div>

        {/* Main Hero Headline in Serif Italic */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif leading-[0.95] font-light italic text-slate-200"
        >
          Hi, I'm <br />
          <span className="not-italic font-bold text-white tracking-tight font-sans">
            S. Ratthika
          </span>
        </motion.h1>

        {/* Animated Role Cycler */}
        <div className="h-12 sm:h-16 flex items-center justify-center my-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2.5 px-4 py-1.5 rounded-md bg-white/[0.03] border border-white/10 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-[#F27D26]" />
              <span className="text-lg sm:text-2xl md:text-3xl font-display font-medium text-[#F27D26]">
                {PERSONAL_INFO.roleCycling[roleIndex]}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Supporting Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base sm:text-lg text-[#F5F5F5]/70 font-normal max-w-2xl leading-relaxed mt-2"
        >
          {PERSONAL_INFO.heroSubheadline}
        </motion.p>

        {/* Action CTAs in Sophisticated Dark Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mt-8 w-full max-w-md sm:max-w-none"
        >
          {/* Primary CTA: Explore Work */}
          <button
            onClick={() => scrollToSection('projects')}
            className="w-full sm:w-auto px-8 py-4 bg-[#F27D26] text-black font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-white hover:text-black transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-[#F27D26]/20"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Secondary CTA: Get In Touch */}
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Send className="w-3.5 h-3.5 text-[#F27D26]" />
            <span>Get In Touch</span>
          </button>

          {/* Additional CTA: Download Resume */}
          <button
            onClick={onOpenResume}
            className="w-full sm:w-auto px-6 py-4 border border-white/10 text-slate-300 font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-white/5 hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <FileText className="w-3.5 h-3.5 text-[#F27D26]" />
            <span>Resume</span>
          </button>
        </motion.div>

        {/* 3-Column Editorial Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-white/5 w-full max-w-2xl text-center sm:text-left"
        >
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-2xl sm:text-3xl font-serif italic text-white">01</div>
            <div className="text-[10px] uppercase tracking-widest opacity-50 mt-1">Code Expert</div>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-2xl sm:text-3xl font-serif italic text-white">02</div>
            <div className="text-[10px] uppercase tracking-widest opacity-50 mt-1">Digital Creator</div>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-2xl sm:text-3xl font-serif italic text-white">03</div>
            <div className="text-[10px] uppercase tracking-widest opacity-50 mt-1">Freelance Pro</div>
          </div>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-14 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-[10px] font-mono tracking-widest uppercase opacity-60">Scroll Down</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-[#F27D26] rounded-full animate-bounce" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
