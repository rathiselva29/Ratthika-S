import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Code2, Palette, Globe, Layers, CheckCircle2 } from 'lucide-react';
import { SmartImage } from './SmartImage';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  useEffect(() => {
    // 3.2 seconds duration before seamless expansion into Hero
    const timer = setTimeout(() => {
      onComplete();
    }, 3200);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.08,
        filter: 'blur(12px)',
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }}
      className="fixed inset-0 z-[10000] bg-[#050505] overflow-hidden text-white select-none flex items-center justify-center"
      style={{ perspective: 1200 }}
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-radial from-[#F27D26]/10 via-black to-[#050505] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Sweeping cinematic beam */}
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: '250%', opacity: [0, 0.4, 0] }}
        transition={{ duration: 2.2, ease: 'easeInOut', delay: 0.3 }}
        className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#F27D26]/15 to-transparent skew-x-12 pointer-events-none"
      />

      {/* TOP HEADER: Label & Skip Intro */}
      <div className="absolute top-6 left-6 right-6 z-30 flex items-center justify-between">
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#F27D26] animate-ping" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-slate-300">
            CINEMATIC SHOWREEL // S. RATTHIKA
          </span>
        </div>

        <button
          onClick={onComplete}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#F27D26] hover:text-black border border-white/15 text-xs font-mono uppercase tracking-wider text-white transition-all cursor-pointer shadow-lg backdrop-blur-md"
        >
          <span>Skip Intro</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* ================= LEFT FLOATING PROJECT WINDOWS (3D PERSPECTIVE) ================= */}
      
      {/* 1. SkyFly International Window (Top Left) */}
      <motion.div
        initial={{ x: -140, y: -40, opacity: 0, rotateY: 28, rotateX: 10, scale: 0.8 }}
        animate={{ 
          x: [-120, -100, -110], 
          y: [-30, -50, -40], 
          opacity: 1, 
          rotateY: [28, 22, 25],
          rotateX: [10, 6, 8],
          scale: 1 
        }}
        transition={{ duration: 3, ease: 'easeInOut' }}
        className="hidden md:block absolute left-[3%] top-[12%] w-[260px] lg:w-[320px] rounded-xl overflow-hidden glass-panel border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 pointer-events-none"
      >
        {/* Browser Topbar */}
        <div className="px-3 py-2 bg-black/80 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[9px] font-mono text-slate-400">skyfly-international.vercel.app</span>
          <span className="text-[9px] font-mono text-[#F27D26]">LIVE</span>
        </div>
        <div className="relative aspect-video bg-black">
          <SmartImage src="/images/skyfly-preview.png" alt="SkyFly" fallbackType="skyfly" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">SkyFly International Platform</span>
          </div>
        </div>
      </motion.div>

      {/* 2. Artika Creations / Art Store (Bottom Left) */}
      <motion.div
        initial={{ x: -150, y: 60, opacity: 0, rotateY: 24, rotateX: -8, scale: 0.8 }}
        animate={{ 
          x: [-130, -90, -110], 
          y: [50, 30, 40], 
          opacity: 1, 
          rotateY: [24, 18, 20],
          rotateX: [-8, -4, -6],
          scale: 1 
        }}
        transition={{ duration: 3.1, ease: 'easeInOut', delay: 0.1 }}
        className="hidden md:block absolute left-[5%] bottom-[12%] w-[250px] lg:w-[300px] rounded-xl overflow-hidden glass-panel border border-[#F27D26]/40 shadow-[0_20px_50px_rgba(242,125,38,0.15)] z-10 pointer-events-none"
      >
        <div className="px-3 py-2 bg-black/80 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#F27D26]" />
            <span className="text-[9px] font-mono font-bold text-white">ARTIKA CREATIONS</span>
          </div>
          <span className="text-[9px] font-mono text-[#F27D26]">GALLERY STORE</span>
        </div>
        <div className="relative aspect-video bg-black">
          <SmartImage src="/images/artika-creations-banner.png" alt="Artika Creations" fallbackType="artika" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">Online Art Platform & Shop</span>
          </div>
        </div>
      </motion.div>

      {/* ================= RIGHT FLOATING PROJECT WINDOWS (3D PERSPECTIVE) ================= */}

      {/* 3. To-Do-Habits / HabitFlow App (Top Right) */}
      <motion.div
        initial={{ x: 140, y: -40, opacity: 0, rotateY: -28, rotateX: 10, scale: 0.8 }}
        animate={{ 
          x: [120, 100, 110], 
          y: [-30, -50, -40], 
          opacity: 1, 
          rotateY: [-28, -22, -25],
          rotateX: [10, 6, 8],
          scale: 1 
        }}
        transition={{ duration: 3.2, ease: 'easeInOut', delay: 0.15 }}
        className="hidden md:block absolute right-[3%] top-[12%] w-[260px] lg:w-[320px] rounded-xl overflow-hidden glass-panel border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 pointer-events-none"
      >
        <div className="px-3 py-2 bg-black/80 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-[9px] font-mono text-white">To-Do-Habits App</span>
          </div>
          <span className="text-[9px] font-mono text-emerald-400">PWA + APK</span>
        </div>
        <div className="relative aspect-video bg-black">
          <SmartImage src="/images/todo-habits-preview.png" alt="To-Do-Habits" fallbackType="habit" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">Productivity State Engine</span>
          </div>
        </div>
      </motion.div>

      {/* 4. Creative Artwork & Branding Showcase (Bottom Right) */}
      <motion.div
        initial={{ x: 150, y: 60, opacity: 0, rotateY: -24, rotateX: -8, scale: 0.8 }}
        animate={{ 
          x: [130, 90, 110], 
          y: [50, 30, 40], 
          opacity: 1, 
          rotateY: [-24, -18, -20],
          rotateX: [-8, -4, -6],
          scale: 1 
        }}
        transition={{ duration: 3.3, ease: 'easeInOut', delay: 0.2 }}
        className="hidden md:block absolute right-[5%] bottom-[12%] w-[250px] lg:w-[300px] rounded-xl overflow-hidden glass-panel border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 pointer-events-none"
      >
        <div className="px-3 py-2 bg-black/80 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Palette className="w-3 h-3 text-[#F27D26]" />
            <span className="text-[9px] font-mono text-white">CREATIVE BRANDING & ART</span>
          </div>
          <span className="text-[9px] font-mono text-[#F27D26]">DIGITAL DESIGN</span>
        </div>
        <div className="relative aspect-video bg-black">
          <SmartImage src="/images/creative-art-banner.png" alt="Creative Art" fallbackType="artika" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">Brand Identity & Digital Canvases</span>
          </div>
        </div>
      </motion.div>

      {/* ================= CENTER CINEMATIC HEADLINE ================= */}
      <div className="relative z-20 max-w-3xl mx-auto text-center px-4">
        
        {/* Subtle top tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#F27D26]" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#F27D26] uppercase">
            FLAGSHIP PORTFOLIO EXPERIENCE
          </span>
        </motion.div>

        {/* Master Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif italic tracking-tight text-white leading-none"
        >
          S. Ratthika
        </motion.h1>

        {/* Triple Identity Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-mono tracking-widest uppercase text-slate-300"
        >
          <span className="px-2.5 py-1 rounded-sm bg-white/5 border border-white/10 text-white font-bold">
            WEB DEVELOPER
          </span>
          <span className="text-[#F27D26]">•</span>
          <span className="px-2.5 py-1 rounded-sm bg-white/5 border border-white/10 text-white font-bold">
            DIGITAL CREATOR
          </span>
          <span className="text-[#F27D26]">•</span>
          <span className="px-2.5 py-1 rounded-sm bg-white/5 border border-white/10 text-white font-bold">
            FREELANCER
          </span>
        </motion.div>

        {/* Cinematic Mission Statement */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-sm sm:text-lg text-[#F5F5F5]/80 font-light mt-6 max-w-xl mx-auto leading-relaxed"
        >
          "Transforming Ideas into High-Impact Digital Experiences & Complete Business Presence"
        </motion.p>

        {/* Quick Tech Badge Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 flex items-center justify-center gap-2 text-[11px] font-mono text-slate-400"
        >
          <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/5">React.js</span>
          <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/5">TypeScript</span>
          <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/5">Tailwind CSS</span>
          <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/5">Artika Gallery</span>
        </motion.div>

      </div>

      {/* ================= BOTTOM CINEMATIC PROGRESS BAR ================= */}
      <div className="absolute bottom-6 left-6 right-6 z-30 flex flex-col gap-2">
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>INITIALIZING DIGITAL REEL</span>
          <span className="text-[#F27D26] font-bold">READY</span>
        </div>
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 3.2, ease: 'linear' }}
            className="h-full bg-gradient-to-r from-[#F27D26] via-orange-400 to-amber-300"
          />
        </div>
      </div>
    </motion.div>
  );
};
