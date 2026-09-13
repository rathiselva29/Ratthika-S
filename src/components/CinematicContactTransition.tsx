import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowDown, Zap } from 'lucide-react';

export const CinematicContactTransition: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-28 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden border-t border-white/5">
      {/* Radial ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#F27D26]/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Converging 3D Neon Lines drawing toward the central interaction */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="convergeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="50%" stopColor="#F27D26" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#F27D26" stopOpacity="1" />
            </linearGradient>
          </defs>
          {/* Beams converging to center */}
          <line x1="10%" y1="10%" x2="50%" y2="52%" stroke="url(#convergeGrad)" strokeWidth="1.5" strokeDasharray="6 6" className="animate-pulse" />
          <line x1="90%" y1="10%" x2="50%" y2="52%" stroke="url(#convergeGrad)" strokeWidth="1.5" strokeDasharray="6 6" className="animate-pulse" />
          <line x1="5%" y1="85%" x2="50%" y2="52%" stroke="url(#convergeGrad)" strokeWidth="1.5" strokeDasharray="6 6" className="animate-pulse" />
          <line x1="95%" y1="85%" x2="50%" y2="52%" stroke="url(#convergeGrad)" strokeWidth="1.5" strokeDasharray="6 6" className="animate-pulse" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center relative z-10">
        {/* Subtle badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#F27D26] text-xs font-mono tracking-widest uppercase mb-8 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>COLLABORATION & 3D CONVERGENCE</span>
        </motion.div>

        {/* 3-Part Cinematic Reveal Sequence */}
        <div className="space-y-3 sm:space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-mono uppercase tracking-widest text-slate-400 font-semibold"
          >
            HAVE AN IDEA?
          </motion.div>

          {/* Central Interactive "LET'S BUILD IT" Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="py-2"
          >
            <button
              onClick={scrollToContact}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium rounded-2xl group cursor-pointer"
            >
              <span className="absolute -inset-2 rounded-3xl bg-[#F27D26]/30 blur-xl group-hover:bg-[#F27D26]/50 transition-all duration-500 animate-pulse" />
              <span className="relative px-8 py-5 transition-all ease-in duration-300 bg-black/90 rounded-2xl border-2 border-[#F27D26] group-hover:border-white shadow-2xl flex items-center gap-4">
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic text-white font-bold tracking-tight">
                  LET’S BUILD IT.
                </span>
                <span className="w-10 h-10 rounded-full bg-[#F27D26] text-black flex items-center justify-center shadow-lg group-hover:rotate-45 transition-transform duration-300">
                  <Zap className="w-5 h-5 fill-black" />
                </span>
              </span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight text-[#F27D26]"
          >
            TOGETHER.
          </motion.div>
        </div>

        {/* Scroll trigger arrow prompt */}
        <motion.button
          onClick={scrollToContact}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col items-center gap-2 text-slate-400 hover:text-[#F27D26] transition-colors cursor-pointer"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">Tap to Launch Collaboration Portal</span>
          <ArrowDown className="w-4 h-4 text-[#F27D26] animate-bounce" />
        </motion.button>
      </div>
    </div>
  );
};
