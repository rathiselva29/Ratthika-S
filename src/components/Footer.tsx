import React from 'react';
import { 
  ArrowUp, 
  Heart, 
  Sparkles, 
  MessageSquare, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  ExternalLink 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 text-slate-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-sm bg-[#F27D26] p-0.5">
                <div className="w-full h-full bg-black rounded-[2px] flex items-center justify-center font-serif font-bold text-xs text-white">
                  R
                </div>
              </div>
              <span className="font-serif italic font-bold text-xl tracking-tight text-white">
                {PERSONAL_INFO.brandLogo}
              </span>
            </div>

            <p className="text-sm text-[#F5F5F5]/70 max-w-sm leading-relaxed">
              Professional Web Developer, Creative Designer, and Freelancer building high-performance websites and complete digital solutions for businesses and individuals worldwide.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[#F27D26]" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-slate-300" />
              </a>
              <a
                href={`https://wa.me/917397732494`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-[#F27D26] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F27D26] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#home" className="hover:text-white transition-colors">Home & Intro</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About & Skills</a></li>
              <li><a href="#journey" className="hover:text-white transition-colors">Education & Timeline</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Business Solutions</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Service Packages</a></li>
              <li><a href="#showcase" className="hover:text-white transition-colors">Artika Gallery</a></li>
              <li><a href="#applications" className="hover:text-white transition-colors">Web Applications</a></li>
            </ul>
          </div>

          {/* Col 4: Flagship Portals */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F27D26] mb-4">
              Live Portals
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a 
                  href="https://artika-creations.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Artika Creations</span>
                  <ExternalLink className="w-3 h-3 text-[#F27D26]" />
                </a>
              </li>
              <li>
                <a 
                  href="https://travel-global-journey.lovable.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>SkyFly International</span>
                  <ExternalLink className="w-3 h-3 text-[#F27D26]" />
                </a>
              </li>
              <li>
                <a 
                  href="https://to-do-habits-delta.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>To-Do-Habits / HabitFlow</span>
                  <ExternalLink className="w-3 h-3 text-[#F27D26]" />
                </a>
              </li>
              <li>
                <span className="text-slate-500">SoRa Innovative Solutions</span>
              </li>
              <li>
                <span className="text-slate-500">LoveLoop Web Keepsake</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F27D26] mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#F27D26]" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#F27D26]" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </li>
              <li className="text-slate-500">
                {PERSONAL_INFO.location}
              </li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[10px] font-mono bg-white/[0.03] text-[#F27D26] border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26] animate-pulse" />
                  Open for Opportunities
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            © {new Date().getFullYear()} S. Ratthika. All rights reserved. <span className="text-slate-400 font-serif italic">Where Code Meets Creativity.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs uppercase tracking-wider font-mono transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#F27D26]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
