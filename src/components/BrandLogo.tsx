import React from 'react';
import { motion } from 'motion/react';
import brandLogoImg from '../assets/images/brand_3d_logo_icon_1788240744035.jpg';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
  onClick
}) => {
  const sizeConfig = {
    sm: { icon: 'w-7 h-7', text: 'text-base', sub: 'text-[9px]' },
    md: { icon: 'w-9 h-9', text: 'text-xl', sub: 'text-[10px]' },
    lg: { icon: 'w-12 h-12', text: 'text-2xl', sub: 'text-xs' },
    hero: { icon: 'w-16 h-16 sm:w-20 sm:h-20', text: 'text-3xl sm:text-4xl', sub: 'text-xs sm:text-sm' }
  };

  const config = sizeConfig[size];

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`flex items-center gap-3 group cursor-pointer select-none ${className}`}
    >
      {/* 3D Animated Logo Icon Container */}
      <div className="relative">
        {/* Animated Glow Backdrop */}
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#F27D26] via-amber-500 to-cyan-500 opacity-60 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-pulse" />
        
        {/* Logo Image / Emblem with 3D Border */}
        <div className={`relative ${config.icon} rounded-xl overflow-hidden border border-white/20 bg-black/80 flex items-center justify-center shadow-2xl`}>
          <img
            src={brandLogoImg}
            alt="Ratthika Selvakumar Brand Logo"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          
          {/* Neon Corner Accent */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/20 pointer-events-none" />
        </div>

        {/* Orbit Ring Dot */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-1 pointer-events-none"
        >
          <span className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-[#F27D26] shadow-[0_0_8px_#F27D26]" />
        </motion.div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className={`font-bold tracking-tight text-white flex items-center font-sans ${config.text}`}>
          <span>RATTHIKA</span>
          <span className="text-[#F27D26] font-serif italic ml-0.5 animate-pulse">.</span>
        </div>
        {showSubtitle && (
          <span className={`font-mono uppercase tracking-widest text-[#F27D26] font-semibold ${config.sub}`}>
            Dev & Digital Marketing
          </span>
        )}
      </div>
    </motion.div>
  );
};
