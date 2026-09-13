import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Palette, 
  ExternalLink, 
  X, 
  Heart, 
  ShoppingBag, 
  Brush, 
  Layers, 
  Eye,
  CheckCircle2
} from 'lucide-react';
import { CREATIVE_SHOWCASE_ITEMS, PERSONAL_INFO } from '../data/portfolioData';
import { CreativeShowcaseItem } from '../types';
import { SmartImage } from './SmartImage';

export const CreativeShowcase: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<CreativeShowcaseItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Art Business' | 'Visual Artwork' | 'Digital Creative' | 'Brand Art'>('All');

  const categories = ['All', 'Art Business', 'Visual Artwork', 'Digital Creative', 'Brand Art'];

  const filteredItems = activeFilter === 'All'
    ? CREATIVE_SHOWCASE_ITEMS
    : CREATIVE_SHOWCASE_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="showcase" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      {/* Background ambient lighting and subtle floating paint particles */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[#F27D26]/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Floating 3D Paint Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-20 left-16 w-3 h-3 rounded-full bg-pink-400/40 blur-xs animate-ping" />
        <span className="absolute top-1/2 right-24 w-4 h-4 rounded-full bg-amber-400/30 blur-xs animate-pulse" />
        <span className="absolute bottom-28 left-1/3 w-3 h-3 rounded-full bg-[#F27D26]/40 blur-xs animate-ping" />
        <span className="absolute top-3/4 right-1/4 w-2 h-2 rounded-full bg-purple-400/40 blur-xs animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#F27D26] text-xs font-mono tracking-widest uppercase mb-4">
            <Palette className="w-3.5 h-3.5" />
            <span>05 // DIGITAL CREATOR & ARTIKA GALLERY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif italic tracking-tight text-white max-w-4xl">
            Where Code Meets Creativity
          </h2>
          <p className="text-sm sm:text-base text-[#F5F5F5]/70 max-w-2xl mt-4 font-light leading-relaxed">
            Beyond engineering logic, I craft visual identities, bespoke artwork, and custom digital canvases through <span className="text-[#F27D26] font-semibold">Artika Creations</span>.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat as any)}
                className={`px-4 py-1.5 rounded-sm text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#F27D26] text-black shadow-lg shadow-[#F27D26]/20'
                    : 'glass-panel text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Artika Banner Hero Card */}
        <div className="mb-14 relative rounded-2xl overflow-hidden glass-panel border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#F27D26]/10 text-[#F27D26] text-xs font-mono mb-4 border border-[#F27D26]/20">
                <Sparkles className="w-3 h-3" />
                <span>FOUNDER & CREATIVE DIRECTOR</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif italic text-white mb-3">
                Artika Creations & Online Gallery
              </h3>
              <p className="text-sm sm:text-base text-[#F5F5F5]/75 leading-relaxed mb-6 font-light">
                An integrated platform celebrating handcrafted traditional art, customized birthday & celebration keepsakes, acrylic paintings, and digital artwork. Built with modern web performance and bespoke visual presentation.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3 rounded-md bg-white/[0.02] border border-white/5 text-xs text-slate-300">
                  <Brush className="w-3.5 h-3.5 text-[#F27D26] mb-1" />
                  <span className="font-bold text-white block">Custom Artwork</span>
                  <span className="text-[10px] text-slate-400">Canvases & Acrylic</span>
                </div>
                <div className="p-3 rounded-md bg-white/[0.02] border border-white/5 text-xs text-slate-300">
                  <ShoppingBag className="w-3.5 h-3.5 text-[#F27D26] mb-1" />
                  <span className="font-bold text-white block">Art Storefront</span>
                  <span className="text-[10px] text-slate-400">Direct Orders</span>
                </div>
                <div className="p-3 rounded-md bg-white/[0.02] border border-white/5 text-xs text-slate-300">
                  <Heart className="w-3.5 h-3.5 text-[#F27D26] mb-1" />
                  <span className="font-bold text-white block">Bespoke Keepsakes</span>
                  <span className="text-[10px] text-slate-400">Gift Collections</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://artika-creations.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#F27D26] hover:bg-[#d96815] text-black text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#F27D26]/20 transition-all"
                >
                  <span>Explore Artika Live Store</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`https://wa.me/917397732494?text=Hi%20Ratthika,%20I%20am%20interested%20in%20ordering%20custom%20artwork%20from%20Artika%20Creations.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-medium uppercase tracking-wider transition-colors"
                >
                  <span>Commission Art</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden aspect-video sm:aspect-square bg-black border border-white/10 shadow-2xl relative group">
                <SmartImage
                  src="/images/artika-gallery-banner.png"
                  alt="Artika Gallery Presentation"
                  fallbackType="artika"
                  className="w-full h-full"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ type: 'spring', stiffness: 350, damping: 20, delay: idx * 0.05 }}
              data-cursor="explore"
              onClick={() => setSelectedItem(item)}
              className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-[#F27D26]/50 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-[#F27D26]/10"
            >
              <div>
                {/* Image Box */}
                <div className="relative aspect-[4/3] bg-black overflow-hidden">
                  <SmartImage
                    src={item.image}
                    alt={item.title}
                    fallbackType={item.id.includes('artika') ? 'artika' : 'code_art'}
                    className="w-full h-full"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-0.5 rounded-sm text-[10px] font-mono bg-black/80 text-[#F27D26] border border-[#F27D26]/20 backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-sm bg-[#F27D26] text-black text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Artwork</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h4 className="text-base font-serif italic text-white group-hover:text-[#F27D26] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Footer Tags */}
              <div className="px-5 pb-5 pt-2 border-t border-white/5 flex flex-wrap gap-1">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/[0.03]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal for Creative Items */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[9500] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 max-w-2xl w-full glass-panel rounded-2xl p-6 border border-white/20 shadow-2xl my-auto text-white overflow-hidden"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer z-20"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="rounded-xl overflow-hidden aspect-video bg-black mb-5 border border-white/10">
                <SmartImage
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fallbackType="artika"
                  className="w-full h-full"
                />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-sm text-xs font-mono bg-[#F27D26]/20 text-[#F27D26] border border-[#F27D26]/30">
                  {selectedItem.category}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif italic text-white mb-2">
                {selectedItem.title}
              </h3>
              <p className="text-sm text-[#F5F5F5]/75 mb-6 leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {selectedItem.tags.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded">
                      #{t}
                    </span>
                  ))}
                </div>

                {selectedItem.link && (
                  <a
                    href={selectedItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-sm bg-[#F27D26] hover:bg-[#d96815] text-black text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Visit Live Store</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
