import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowDown } from 'lucide-react';

export const CinematicContactTransition: React.FC = () => {
  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Radial ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#F27D26]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Subtle badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[#F27D26] text-xs font-mono tracking-widest uppercase mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>COLLABORATION & INITIATIVE</span>
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

          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif italic text-white font-bold"
          >
            LET’S BUILD IT.
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

        {/* Arrow prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">Start Project Conversation</span>
          <ArrowDown className="w-4 h-4 text-[#F27D26] animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
};
