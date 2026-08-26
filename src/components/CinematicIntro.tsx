import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Palette, 
  Globe, 
  Layers, 
  CheckCircle2,
  Terminal,
  Play,
  Pause,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { SmartImage } from './SmartImage';

interface CinematicIntroProps {
  onComplete: () => void;
}

interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  tag: string;
  timeRange: string;
  activeProject: 'artika' | 'skyfly' | 'apps' | 'brand';
  description: string;
}

const CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: 'Artika Creations & Digital Store',
    subtitle: 'Where Code Meets Fine Artistry',
    tag: 'ART & E-COMMERCE',
    timeRange: '0s - 3s',
    activeProject: 'artika',
    description: 'Custom paintings, bespoke art merchandise, and high-performance interactive gallery storefront.'
  },
  {
    id: 2,
    title: 'SkyFly International Consultancy',
    subtitle: 'Global Visa & Immigration Solutions',
    tag: 'CLIENT PLATFORM',
    timeRange: '3s - 6s',
    activeProject: 'skyfly',
    description: 'High-conversion business platform supporting 29+ countries, Schengen visas & transparent consultation workflows.'
  },
  {
    id: 3,
    title: 'To-Do-Habits & VY Enterprises',
    subtitle: 'Full-Stack Apps & Business Systems',
    tag: 'APPLICATIONS & LOGIC',
    timeRange: '6s - 8.5s',
    activeProject: 'apps',
    description: 'Offline-first habit engine, PWA architecture, enterprise presence packages, and responsive state management.'
  },
  {
    id: 4,
    title: 'S. Ratthika // Master Brand',
    subtitle: 'Web Developer • Digital Creator • Freelancer',
    tag: 'PORTFOLIO READY',
    timeRange: '8.5s - 10s',
    activeProject: 'brand',
    description: 'Crafting digital products, full-stack web applications, and comprehensive online brand presence.'
  }
];

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const totalDuration = 10; // 10 seconds total

  useEffect(() => {
    const startTime = Date.now();
    const timerInterval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      if (elapsed >= totalDuration) {
        clearInterval(timerInterval);
        setSecondsElapsed(totalDuration);
        onComplete();
      } else {
        setSecondsElapsed(elapsed);
      }
    }, 80);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(timerInterval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  // Determine current chapter based on elapsed time
  const currentChapterIndex = secondsElapsed < 3.0 
    ? 0 
    : secondsElapsed < 6.0 
    ? 1 
    : secondsElapsed < 8.5 
    ? 2 
    : 3;

  const currentChapter = CHAPTERS[currentChapterIndex];
  const progressPercent = Math.min(100, (secondsElapsed / totalDuration) * 100);
  const remainingSeconds = Math.max(0, Math.ceil(totalDuration - secondsElapsed));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        filter: 'blur(10px)',
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }}
      className="fixed inset-0 z-[10000] bg-[#050505] overflow-hidden text-white select-none flex flex-col justify-between p-4 sm:p-6 lg:p-8"
      style={{ perspective: 1200 }}
    >
      {/* Dynamic Animated Background Mesh */}
      <div className="absolute inset-0 bg-radial from-[#F27D26]/12 via-black to-[#050505] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Sweeping cinematic beam */}
      <motion.div
        key={currentChapterIndex}
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: '250%', opacity: [0, 0.4, 0] }}
        transition={{ duration: 2.2, ease: 'easeInOut' }}
        className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#F27D26]/20 to-transparent skew-x-12 pointer-events-none"
      />

      {/* ================= TOP BAR ================= */}
      <div className="relative z-30 flex items-center justify-between gap-4">
        {/* Reel Status & Countdown Timer */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F27D26] animate-ping" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-white font-bold">
              10s SHOWREEL // S. RATTHIKA
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-slate-300">
            <span className="text-[#F27D26] font-bold">00:{remainingSeconds.toString().padStart(2, '0')}</span>
            <span className="opacity-40">REMAINING</span>
          </div>
        </div>

        {/* Chapter Navigation Indicators */}
        <div className="hidden lg:flex items-center gap-2">
          {CHAPTERS.map((ch, idx) => (
            <div
              key={ch.id}
              className={`px-3 py-1 rounded-full text-[10px] font-mono transition-all ${
                idx === currentChapterIndex 
                  ? 'bg-[#F27D26] text-black font-bold border border-[#F27D26]' 
                  : 'bg-white/5 text-slate-400 border border-white/10'
              }`}
            >
              0{ch.id} {ch.tag.split(' ')[0]}
            </div>
          ))}
        </div>

        {/* Skip to Website CTA */}
        <button
          onClick={onComplete}
          className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F27D26] text-black hover:bg-white border border-[#F27D26] text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_20px_rgba(242,125,38,0.3)] hover:shadow-white/20"
        >
          <span>Enter Website</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* ================= MAIN CINEMATIC STAGE (3D FLOATING WORK WINDOWS) ================= */}
      <div className="relative z-20 flex-1 flex items-center justify-center my-4 sm:my-6">
        
        {/* --- LEFT FLOATING WINDOW: SkyFly & Artika --- */}
        <motion.div
          animate={{
            x: currentChapter.activeProject === 'skyfly' ? 0 : -30,
            y: [-15, 10, -15],
            rotateY: [18, 12, 18],
            rotateX: [6, 2, 6],
            scale: currentChapter.activeProject === 'skyfly' ? 1.05 : 0.95,
            opacity: currentChapter.activeProject === 'brand' ? 0.35 : 1
          }}
          transition={{
            y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
            rotateY: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            scale: { duration: 0.5 },
            opacity: { duration: 0.5 }
          }}
          className="hidden md:block absolute left-2 lg:left-8 top-1/2 -translate-y-1/2 w-[280px] lg:w-[360px] rounded-xl overflow-hidden glass-panel border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9)] pointer-events-none"
        >
          <div className="px-3.5 py-2 bg-black/85 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[10px] font-mono text-slate-300 ml-1">SkyFly International</span>
            </div>
            <span className="text-[9px] font-mono text-[#F27D26]">CLIENT LIVE</span>
          </div>
          <div className="relative aspect-video bg-black">
            <SmartImage src="/images/skyfly-preview.png" alt="SkyFly Platform" fallbackType="skyfly" className="w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
              <span className="text-[11px] font-bold text-white uppercase tracking-wider">Visa Guidance & Client Portal</span>
            </div>
          </div>
        </motion.div>

        {/* --- RIGHT FLOATING WINDOW: To-Do-Habits & Artika Creations --- */}
        <motion.div
          animate={{
            x: currentChapter.activeProject === 'artika' || currentChapter.activeProject === 'apps' ? 0 : 30,
            y: [10, -15, 10],
            rotateY: [-18, -12, -18],
            rotateX: [-6, -2, -6],
            scale: currentChapter.activeProject === 'artika' ? 1.05 : 0.95,
            opacity: currentChapter.activeProject === 'brand' ? 0.35 : 1
          }}
          transition={{
            y: { duration: 5.8, repeat: Infinity, ease: 'easeInOut' },
            rotateY: { duration: 6.2, repeat: Infinity, ease: 'easeInOut' },
            scale: { duration: 0.5 },
            opacity: { duration: 0.5 }
          }}
          className="hidden md:block absolute right-2 lg:right-8 top-1/2 -translate-y-1/2 w-[280px] lg:w-[360px] rounded-xl overflow-hidden glass-panel border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9)] pointer-events-none"
        >
          <div className="px-3.5 py-2 bg-black/85 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-[#F27D26]" />
              <span className="text-[10px] font-mono font-bold text-white">Artika Creations Store</span>
            </div>
            <span className="text-[9px] font-mono text-[#F27D26]">ART GALLERY</span>
          </div>
          <div className="relative aspect-video bg-black">
            <SmartImage src="/images/artika-creations-banner.png" alt="Artika Creations" fallbackType="artika" className="w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
              <span className="text-[11px] font-bold text-white uppercase tracking-wider">Custom Paintings & Digital Art</span>
            </div>
          </div>
        </motion.div>

        {/* --- CENTER CINEMATIC DISPLAY BOARD --- */}
        <div className="relative max-w-2xl w-full text-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentChapter.id}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.45 }}
              className="flex flex-col items-center"
            >
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#F27D26]/40 text-[#F27D26] text-xs font-mono tracking-widest uppercase mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(242,125,38,0.2)]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentChapter.tag}</span>
              </div>

              {/* Main Dynamic Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif italic text-white font-bold leading-tight">
                {currentChapter.title}
              </h1>

              {/* Sub-Headline */}
              <div className="text-sm sm:text-lg font-mono text-[#F27D26] tracking-wider uppercase mt-3">
                {currentChapter.subtitle}
              </div>

              {/* Description Paragraph */}
              <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto mt-4 leading-relaxed">
                {currentChapter.description}
              </p>

              {/* Real Project Highlights Carousel Badge */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                  ⚡ CREATE
                </span>
                <span className="text-[#F27D26]">→</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                  🛠️ BUILD
                </span>
                <span className="text-[#F27D26]">→</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                  🚀 DEVELOP
                </span>
                <span className="text-[#F27D26]">→</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                  🎨 DESIGN
                </span>
                <span className="text-[#F27D26]">→</span>
                <span className="px-3 py-1 rounded bg-[#F27D26]/20 border border-[#F27D26]/40 text-[#F27D26] font-bold">
                  📈 GROW
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* ================= BOTTOM TIMELINE & PROGRESS BAR ================= */}
      <div className="relative z-30 flex flex-col gap-3 max-w-5xl mx-auto w-full">
        
        {/* Chapter Steps Visual Timeline */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 text-left">
          {CHAPTERS.map((ch, idx) => {
            const isActive = idx === currentChapterIndex;
            const isPassed = idx < currentChapterIndex;
            return (
              <div 
                key={ch.id} 
                className={`p-2 sm:p-2.5 rounded-lg border transition-all ${
                  isActive 
                    ? 'bg-white/10 border-[#F27D26] shadow-[0_0_12px_rgba(242,125,38,0.2)]' 
                    : isPassed
                    ? 'bg-white/[0.03] border-white/20 opacity-70'
                    : 'bg-white/[0.02] border-white/5 opacity-40'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className={isActive ? 'text-[#F27D26] font-bold' : 'text-slate-400'}>
                    0{ch.id}
                  </span>
                  <span className="hidden sm:inline text-slate-400">{ch.timeRange}</span>
                </div>
                <div className="text-[11px] font-bold text-white truncate mt-0.5">
                  {ch.tag.split(' ')[0]}
                </div>
              </div>
            );
          })}
        </div>

        {/* 10-Second Continuous Progress Bar */}
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            style={{ width: `${progressPercent}%` }}
            className="h-full bg-gradient-to-r from-[#F27D26] via-amber-400 to-orange-500 rounded-full shadow-[0_0_10px_rgba(242,125,38,0.8)]"
          />
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>CINEMATIC SHOWREEL (10 SECONDS)</span>
          <span className="text-[#F27D26] font-bold">PRESS ESC OR CLICK "ENTER WEBSITE" TO PROCEED</span>
        </div>
      </div>
    </motion.div>
  );
};
