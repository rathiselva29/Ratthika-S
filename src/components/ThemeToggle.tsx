import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Sparkles, Check, ChevronDown, Monitor } from 'lucide-react';
import { useTheme, ThemeMode } from '../context/ThemeContext';

interface ThemeToggleProps {
  compact?: boolean;
}

const THEME_OPTIONS: { id: ThemeMode; label: string; icon: typeof Moon; description: string; previewBg: string; previewAccent: string }[] = [
  {
    id: 'dark',
    label: 'Default Dark',
    icon: Moon,
    description: 'Obsidian black & amber glow',
    previewBg: '#050505',
    previewAccent: '#F27D26',
  },
  {
    id: 'light',
    label: 'High-Contrast Light',
    icon: Sun,
    description: 'Crisp white & ink typography',
    previewBg: '#FFFFFF',
    previewAccent: '#E06510',
  },
  {
    id: 'midnight',
    label: 'Midnight Ocean',
    icon: Sparkles,
    description: 'Deep navy & neon accents',
    previewBg: '#080E1A',
    previewAccent: '#38BDF8',
  },
];

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ compact = false }) => {
  const { theme, setTheme, toggleTheme, isLight } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const currentOption = THEME_OPTIONS.find((opt) => opt.id === theme) || THEME_OPTIONS[0];

  return (
    <div className="relative inline-flex items-center" ref={dropdownRef}>
      {/* Quick 1-Click Toggle Button + Optional Dropdown trigger */}
      <div className="flex items-center rounded-full bg-white/5 border border-white/10 p-0.5 theme-toggle-container transition-all hover:border-white/20">
        <button
          onClick={toggleTheme}
          aria-label={`Switch theme (Currently ${currentOption.label})`}
          title={`Quick Toggle: Switch between Dark & High-Contrast Light (${currentOption.label})`}
          className="flex items-center justify-center w-8 h-8 rounded-full text-slate-200 hover:text-white transition-all cursor-pointer relative overflow-hidden focus:outline-none focus:ring-1 focus:ring-[#F27D26]"
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme === 'light' ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-[#E06510]"
              >
                <Sun className="w-4 h-4" />
              </motion.div>
            ) : theme === 'midnight' ? (
              <motion.div
                key="sparkles"
                initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-sky-400"
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-[#F27D26]"
              >
                <Moon className="w-4 h-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Dropdown open chevron button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Select theme options"
          title="Choose theme (Dark, Light, Midnight)"
          className="pr-1.5 pl-0.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Theme Selection Dropdown Popover */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-56 p-2 rounded-2xl glass-panel shadow-2xl border border-white/15 z-50 theme-dropdown-menu"
          >
            <div className="px-2.5 py-1.5 border-b border-white/10 mb-1 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-slate-400">
              <span>Theme Mode</span>
              <span className="text-[#F27D26] font-bold">{currentOption.label.split(' ')[0]}</span>
            </div>

            <div className="space-y-1">
              {THEME_OPTIONS.map((opt) => {
                const Icon = opt.icon;
                const isSelected = theme === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setTheme(opt.id);
                      setMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-2 rounded-xl text-left text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#F27D26]/15 text-white border border-[#F27D26]/30 font-medium'
                        : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-5 h-5 rounded-md flex items-center justify-center border border-white/20"
                        style={{ backgroundColor: opt.previewBg }}
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: opt.previewAccent }}
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{opt.label}</div>
                        <div className="text-[10px] text-slate-400 leading-tight">{opt.description}</div>
                      </div>
                    </div>

                    {isSelected && (
                      <Check className="w-3.5 h-3.5 text-[#F27D26] flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
