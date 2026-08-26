import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'project' | 'explore'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check for touch screen
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest('[data-cursor="project"]');
      const exploreEl = target.closest('[data-cursor="explore"]');
      const buttonEl = target.closest('button, a, input, select, textarea, [role="button"], [data-cursor="pointer"]');

      if (projectEl) {
        setCursorVariant('project');
        setCursorText('VIEW PROJECT →');
      } else if (exploreEl) {
        setCursorVariant('explore');
        setCursorText('EXPLORE →');
      } else if (buttonEl) {
        setCursorVariant('hover');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Primary center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#F27D26] rounded-full shadow-[0_0_12px_rgba(242,125,38,0.9)]"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: cursorVariant === 'default' ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 450, mass: 0.1 }}
      />

      {/* Trailing follower circle & badge */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full backdrop-blur-[2px] transition-colors"
        animate={{
          x: cursorVariant === 'project' || cursorVariant === 'explore'
            ? mousePosition.x - 65
            : cursorVariant === 'hover'
            ? mousePosition.x - 24
            : mousePosition.x - 18,
          y: cursorVariant === 'project' || cursorVariant === 'explore'
            ? mousePosition.y - 65
            : cursorVariant === 'hover'
            ? mousePosition.y - 24
            : mousePosition.y - 18,
          width: cursorVariant === 'project' || cursorVariant === 'explore' ? 130 : cursorVariant === 'hover' ? 48 : 36,
          height: cursorVariant === 'project' || cursorVariant === 'explore' ? 130 : cursorVariant === 'hover' ? 48 : 36,
          backgroundColor:
            cursorVariant === 'project'
              ? 'rgba(242, 125, 38, 0.95)'
              : cursorVariant === 'explore'
              ? 'rgba(242, 125, 38, 0.9)'
              : cursorVariant === 'hover'
              ? 'rgba(242, 125, 38, 0.15)'
              : 'rgba(255, 255, 255, 0.04)',
          borderColor:
            cursorVariant === 'project' || cursorVariant === 'explore'
              ? 'transparent'
              : cursorVariant === 'hover'
              ? 'rgba(242, 125, 38, 0.6)'
              : 'rgba(255, 255, 255, 0.25)',
          borderWidth: cursorVariant === 'project' || cursorVariant === 'explore' ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 260, mass: 0.3 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-mono font-bold tracking-widest text-black text-center uppercase px-2 drop-shadow-sm"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};
