import React, { useState } from 'react';
import { Sparkles, ExternalLink, Image as ImageIcon } from 'lucide-react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  badge?: string;
  fallbackType?: 'artika' | 'skyfly' | 'sora' | 'loveloop' | 'habit' | 'profile' | 'code_art' | 'default';
  showOverlayOnHover?: boolean;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  className = '',
  badge,
  fallbackType = 'default',
  showOverlayOnHover = false
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // If standard image fails or is a placeholder, render rich stylized vector graphics matching Ratthika's portfolio assets
  const renderFallbackVisual = () => {
    switch (fallbackType) {
      case 'profile':
        return (
          <div className="w-full h-full min-h-[380px] bg-gradient-to-b from-[#38bdf8]/30 via-[#0f172a] to-[#050505] p-6 flex flex-col items-center justify-between text-center relative overflow-hidden border border-white/10 rounded-2xl group">
            {/* Background lighting simulating professional photo studio */}
            <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-[#38bdf8]/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
            
            {/* Center Avatar with Suit & Glasses Aesthetic */}
            <div className="relative z-10 flex flex-col items-center mt-4">
              <div className="relative w-32 h-32 rounded-2xl bg-gradient-to-tr from-[#F27D26] via-amber-400 to-sky-400 p-1 mb-4 shadow-2xl shadow-[#F27D26]/20">
                <div className="w-full h-full rounded-2xl bg-[#090d16] flex flex-col items-center justify-center relative overflow-hidden border border-white/10">
                  {/* Subtle portrait illustration / initials */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-b from-amber-100 to-amber-200 flex items-center justify-center text-slate-900 font-bold text-xl relative shadow-inner">
                    <span>SR</span>
                    {/* Glasses hint */}
                    <div className="absolute top-4 w-9 h-3 border-2 border-slate-900 rounded-sm opacity-60" />
                  </div>
                  {/* Formal blazer suit icon hint */}
                  <div className="w-16 h-8 bg-slate-900 rounded-t-xl mt-2 border-t-2 border-white flex justify-center pt-0.5">
                    <div className="w-3 h-3 bg-white rotate-45 -mt-1.5" />
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-bold text-white font-serif italic">S. Ratthika</h4>
              <p className="text-xs font-mono text-[#F27D26] uppercase tracking-wider mt-1">
                B.E. Computer Science & Engineering
              </p>
            </div>

            {/* Verified Credentials Pills */}
            <div className="relative z-10 mt-4 flex flex-wrap gap-1.5 justify-center max-w-xs">
              <span className="px-2.5 py-1 rounded-sm text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10">
                8.2 CGPA
              </span>
              <span className="px-2.5 py-1 rounded-sm text-[10px] font-mono bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/20 font-bold">
                Infosys Certified
              </span>
              <span className="px-2.5 py-1 rounded-sm text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10">
                Handball Winner
              </span>
              <span className="px-2.5 py-1 rounded-sm text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10">
                Hindi Prathamic 1st Class
              </span>
            </div>

            <div className="relative z-10 w-full pt-4 mt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>MAM COLLEGE OF ENG.</span>
              <span className="text-emerald-400 font-bold">VERIFIED PROFILE</span>
            </div>
          </div>
        );

      case 'artika':
        return (
          <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-pink-950/40 via-purple-950/30 to-slate-950 p-6 flex flex-col justify-between relative overflow-hidden border border-pink-500/20 rounded-xl">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl"></div>
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-300 font-bold text-sm">
                  AG
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-pink-300">Artika Creations</span>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/30">Art Business</span>
            </div>
            <div className="my-6 z-10">
              <h3 className="text-2xl font-bold text-white font-display">Bespoke Handcrafted Art & Digital Gallery</h3>
              <p className="text-xs text-slate-400 mt-2 line-clamp-2">Where Code Meets Creativity — Custom Paintings, Art Gifts & Merchandise Platform.</p>
            </div>
            <div className="flex items-center justify-between text-xs text-pink-400 font-medium z-10">
              <span>artika-creations.vercel.app</span>
              <span className="flex items-center gap-1">Live Storefront <ExternalLink className="w-3 h-3" /></span>
            </div>
          </div>
        );

      case 'skyfly':
        return (
          <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-blue-950/40 via-cyan-950/30 to-slate-950 p-6 flex flex-col justify-between relative overflow-hidden border border-blue-500/20 rounded-xl">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-300 font-bold text-sm">
                  ✈
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">SkyFly International</span>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30">Global Visas</span>
            </div>
            <div className="my-6 z-10">
              <h3 className="text-2xl font-bold text-white font-display">Global Visa Documentation & Immigration Guidance</h3>
              <p className="text-xs text-slate-400 mt-2 line-clamp-2">High-trust client consultancy platform with document verification and 1-click consultation.</p>
            </div>
            <div className="flex items-center justify-between text-xs text-blue-400 font-medium z-10">
              <span>travel-global-journey.lovable.app</span>
              <span className="flex items-center gap-1">Immigration Portal <ExternalLink className="w-3 h-3" /></span>
            </div>
          </div>
        );

      case 'sora':
        return (
          <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-purple-950/40 via-indigo-950/40 to-slate-950 p-6 flex flex-col justify-between relative overflow-hidden border border-indigo-500/20 rounded-xl">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300 font-bold text-sm">
                  SR
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-indigo-300">SoRa Innovative Solution</span>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">Agency Platform</span>
            </div>
            <div className="my-6 z-10">
              <h3 className="text-2xl font-bold text-white font-display">Digital Solutions & Growth for Businesses</h3>
              <p className="text-xs text-slate-400 mt-2 line-clamp-2">Creative design, smart code, SEO setup, and WhatsApp lead funnels for modern enterprises.</p>
            </div>
            <div className="flex items-center justify-between text-xs text-indigo-400 font-medium z-10">
              <span>sorainnovativesolution.in</span>
              <span className="flex items-center gap-1">Business Suite <Sparkles className="w-3 h-3" /></span>
            </div>
          </div>
        );

      case 'habit':
        return (
          <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-emerald-950/40 via-teal-950/30 to-slate-950 p-6 flex flex-col justify-between relative overflow-hidden border border-emerald-500/20 rounded-xl">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl"></div>
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-bold text-sm">
                  ✓
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300">HabitFlow</span>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">Web + Android APK</span>
            </div>
            <div className="my-6 z-10">
              <h3 className="text-2xl font-bold text-white font-display">Daily Habit Tracking & Productivity Engine</h3>
              <p className="text-xs text-slate-400 mt-2 line-clamp-2">Streak calculation, daily check-in matrices, and offline local state persistence.</p>
            </div>
            <div className="flex items-center justify-between text-xs text-emerald-400 font-medium z-10">
              <span>to-do-habits-delta.vercel.app</span>
              <span className="flex items-center gap-1">Productivity App <ExternalLink className="w-3 h-3" /></span>
            </div>
          </div>
        );

      case 'loveloop':
        return (
          <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-rose-950/40 via-pink-950/30 to-slate-950 p-6 flex flex-col justify-between relative overflow-hidden border border-rose-500/20 rounded-xl">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-500/10 rounded-full blur-2xl"></div>
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-300 font-bold text-sm">
                  ∞
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-rose-300">LoveLoop Web</span>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/30">Interactive Experience</span>
            </div>
            <div className="my-6 z-10">
              <h3 className="text-2xl font-bold text-white font-display">Celebration, Memory Timelines & Greetings</h3>
              <p className="text-xs text-slate-400 mt-2 line-clamp-2">Bespoke romantic webpages, secret surprise reveals, and multimedia digital keepsakes.</p>
            </div>
            <div className="flex items-center justify-between text-xs text-rose-400 font-medium z-10">
              <span>Connect. Share. Love.</span>
              <span className="flex items-center gap-1">Web Experience <Sparkles className="w-3 h-3" /></span>
            </div>
          </div>
        );

      case 'code_art':
        return (
          <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-violet-950/40 via-fuchsia-950/30 to-slate-950 p-6 flex flex-col justify-between relative overflow-hidden border border-violet-500/20 rounded-xl">
            <div className="absolute inset-0 bg-grid-pattern opacity-25"></div>
            <div className="flex items-center justify-between z-10">
              <span className="text-xs font-mono text-violet-300">&lt;/&gt; CODE. CREATE. INSPIRE.</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">Dual Craft</span>
            </div>
            <div className="my-4 z-10">
              <h3 className="text-xl font-bold text-white font-display">Frontend React Developer & Digital Artist</h3>
              <p className="text-xs text-slate-300 mt-1">Founder of Artika Gallery • Responsive Web Design & Visual Artistry</p>
            </div>
            <div className="flex items-center gap-3 text-xs text-violet-400 z-10">
              <span>HTML5 • CSS3 • React • Tailwind</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full min-h-[180px] bg-slate-900/80 p-5 flex flex-col items-center justify-center text-center border border-white/10 rounded-xl">
            <ImageIcon className="w-8 h-8 text-slate-500 mb-2" />
            <span className="text-sm font-semibold text-slate-300">{alt}</span>
            <span className="text-xs text-slate-500 mt-1">Creative Portfolio Asset</span>
          </div>
        );
    }
  };

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      {!imageError ? (
        <>
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setImageError(true)}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-slate-900/80 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
            </div>
          )}
        </>
      ) : (
        renderFallbackVisual()
      )}

      {badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className="px-3 py-1 text-xs font-semibold tracking-wide bg-slate-950/80 backdrop-blur-md text-white border border-white/10 rounded-full shadow-lg">
            {badge}
          </span>
        </div>
      )}

      {showOverlayOnHover && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 z-10 pointer-events-none">
          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-xs font-mono uppercase tracking-widest text-indigo-400">Click to expand</p>
            <h4 className="text-sm font-bold text-white mt-0.5">{alt}</h4>
          </div>
        </div>
      )}
    </div>
  );
};
