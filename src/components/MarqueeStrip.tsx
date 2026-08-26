import React from 'react';
import { Sparkles, Code, Palette, Globe, Layers, CheckCircle } from 'lucide-react';

interface MarqueeStripProps {
  reverse?: boolean;
  theme?: 'indigo' | 'purple' | 'slate';
  items?: string[];
}

export const MarqueeStrip: React.FC<MarqueeStripProps> = ({
  reverse = false,
  theme = 'indigo',
  items
}) => {
  const defaultItems = [
    'WEB DEVELOPMENT',
    'DIGITAL CREATION',
    'FREELANCE',
    'BRANDING',
    'DIGITAL MARKETING',
    'UI/UX DESIGN',
    'REACT.JS & NODE',
    'RESPONSIVE ARCHITECTURE',
    'SEO & GOOGLE SEARCH'
  ];

  const contentItems = items || defaultItems;

  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-white/5 bg-black/40 backdrop-blur-sm select-none">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <div className={reverse ? 'animate-marquee-reverse' : 'animate-marquee'}>
        {/* Double repeated set to create endless loop */}
        {[...contentItems, ...contentItems, ...contentItems, ...contentItems].map((text, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 mx-6 text-xs sm:text-sm font-mono font-medium tracking-[0.25em] uppercase text-white/50 hover:text-white transition-colors"
          >
            <span>{text}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26]" />
          </div>
        ))}
      </div>
    </div>
  );
};
