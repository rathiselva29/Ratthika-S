import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  TrendingUp, 
  Sparkles, 
  Activity, 
  Zap, 
  Layers, 
  Eye, 
  Play, 
  Pause,
  Rocket,
  Search,
  CheckCircle2
} from 'lucide-react';
import hero3dBg from '../assets/images/hero_3d_tech_marketing_1788240725314.jpg';

interface TechMarketingAnimatedBackgroundProps {
  mousePosition: { x: number; y: number };
}

export const TechMarketingAnimatedBackground: React.FC<TechMarketingAnimatedBackgroundProps> = ({
  mousePosition
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [visualMode, setVisualMode] = useState<'3d-hybrid' | 'matrix-network' | 'cyber-grid'>('3d-hybrid');
  const animationFrameId = useRef<number | null>(null);

  // Floating live business metrics animation
  const liveStats = [
    { label: 'SEO Traffic Spikes', value: '+340%', icon: TrendingUp, color: 'text-emerald-400', border: 'border-emerald-500/30' },
    { label: 'Clean FullStack Code', value: 'React 19 / Node', icon: Code2, color: 'text-[#F27D26]', border: 'border-[#F27D26]/40' },
    { label: 'Ads ROI Multiplier', value: '8.4x CTR', icon: Rocket, color: 'text-cyan-400', border: 'border-cyan-500/30' },
    { label: 'Performance Score', value: '100 / 100', icon: Zap, color: 'text-amber-400', border: 'border-amber-500/30' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes for digital marketing & web dev network
    const particleCount = Math.min(Math.floor(width / 22), 55);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      label?: string;
    }> = [];

    const techLabels = ['<React/>', 'SEO #1', 'SQL', 'TypeScript', 'Ads Funnel', 'API', 'Growth', 'UI/UX', 'Tailwind', 'ROI +300%'];
    const colors = ['#F27D26', '#06b6d4', '#10b981', '#a855f7', '#e2e8f0'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1.2,
        color: colors[i % colors.length],
        label: i % 4 === 0 ? techLabels[(i / 4) % techLabels.length] : undefined
      });
    }

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(242, 125, 38, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach((p) => {
        if (isPlaying) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Render micro tech labels for floating particle nodes
        if (p.label && visualMode !== 'cyber-grid') {
          ctx.font = '10px monospace';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
          ctx.fillText(p.label, p.x + 8, p.y + 3);
        }
      });

      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [isPlaying, visualMode]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      
      {/* 1. 3D AI Background Render Image Layer with Kinetic Parallax Tilt */}
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
          opacity: visualMode === '3d-hybrid' ? 0.35 : visualMode === 'cyber-grid' ? 0.2 : 0.15
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translate3d(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px, 0) scale(1.05)`,
          transition: 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)'
        }}
      >
        <img
          src={hero3dBg}
          alt="3D Web Development & Digital Marketing Animated Environment"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-125"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic Vignette Overlay to seamlessly blend with continuous 3D canvas */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-radial-vignette opacity-40" />
      </motion.div>

      {/* 2. Interactive Animated Matrix & Node Connection Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        style={{
          opacity: visualMode === 'matrix-network' ? 0.85 : 0.65
        }}
      />

      {/* 3. Ambient 3D Neon Scanning Beam */}
      <motion.div
        animate={{
          y: ['-10%', '110%'],
          opacity: [0, 0.4, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#F27D26]/10 to-transparent pointer-events-none z-10"
      />

      {/* 4. Drifting 3D Floating Metric Cards (Top Corners) */}
      <div className="hidden lg:flex absolute top-28 left-8 right-8 justify-between items-start z-10 pointer-events-none">
        {/* Left Floating 3D Badge */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="glass-panel px-3.5 py-2 rounded-xl border border-emerald-500/30 flex items-center gap-2.5 shadow-2xl backdrop-blur-md"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-emerald-400 uppercase font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Digital Marketing
            </div>
            <div className="text-xs font-bold text-white">+340% Organic Traffic</div>
          </div>
        </motion.div>

        {/* Right Floating 3D Badge */}
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [1, -1, 1] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="glass-panel px-3.5 py-2 rounded-xl border border-[#F27D26]/40 flex items-center gap-2.5 shadow-2xl backdrop-blur-md"
        >
          <div className="w-8 h-8 rounded-lg bg-[#F27D26]/10 flex items-center justify-center text-[#F27D26]">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-[#F27D26] uppercase font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26] animate-pulse" />
              Full-Stack Architecture
            </div>
            <div className="text-xs font-bold text-white">React 19 & High Speed</div>
          </div>
        </motion.div>
      </div>

      {/* 5. Floating Interactive Video / Canvas Controls Widget (Bottom Right) */}
      <div className="absolute bottom-6 right-6 z-20 pointer-events-auto flex items-center gap-2">
        <div className="glass-panel px-2.5 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 shadow-xl backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-1" />
          <span className="text-[10px] font-mono text-white/80 uppercase font-semibold hidden sm:inline">
            3D Visual AI Loop:
          </span>

          <button
            onClick={() => setVisualMode(visualMode === '3d-hybrid' ? 'matrix-network' : visualMode === 'matrix-network' ? 'cyber-grid' : '3d-hybrid')}
            className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/10 hover:bg-white/20 text-[#F27D26] font-bold transition-colors cursor-pointer"
            title="Toggle Visual Mode"
          >
            {visualMode === '3d-hybrid' ? '⚡ 3D Studio' : visualMode === 'matrix-network' ? '🌐 Node Matrix' : '📐 Cyber Grid'}
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs transition-colors cursor-pointer"
            title={isPlaying ? 'Pause Motion' : 'Play Motion'}
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 text-[#F27D26]" />}
          </button>
        </div>
      </div>

    </div>
  );
};
