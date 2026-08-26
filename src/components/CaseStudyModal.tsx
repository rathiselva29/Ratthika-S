import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Code2, 
  ArrowRight,
  ShieldCheck,
  Send
} from 'lucide-react';
import { Project } from '../types';
import { SmartImage } from './SmartImage';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProjectForContact?: (projectTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProjectForContact
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] rounded-2xl border border-white/20 shadow-2xl p-6 sm:p-10 my-auto text-slate-100"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer z-20"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Tag & Number */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-xs font-mono font-bold text-[#F27D26]">
              PROJECT {project.number}
            </span>
            <span className="text-slate-600">•</span>
            <span className="px-3 py-0.5 rounded-sm text-xs font-mono bg-white/[0.03] text-[#F27D26] border border-white/10 uppercase">
              {project.category}
            </span>
            {project.statusBadge && (
              <span className="px-3 py-0.5 rounded-sm text-xs font-mono bg-white/[0.03] text-[#F5F5F5] border border-white/10">
                {project.statusBadge}
              </span>
            )}
          </div>

          {/* Project Title */}
          <h2 className="text-2xl sm:text-4xl font-serif italic text-white mb-2">
            {project.title}
          </h2>
          <p className="text-base sm:text-lg text-[#F5F5F5]/70 font-light mb-6">
            {project.subtitle}
          </p>

          {/* Project Visual Banner */}
          <div className="relative w-full rounded-xl overflow-hidden mb-8 border border-white/10 aspect-video max-h-80 bg-black">
            <SmartImage
              src={project.image}
              alt={project.title}
              fallbackType={
                project.id.includes('artika') ? 'artika' :
                project.id.includes('skyfly') ? 'skyfly' :
                project.id.includes('habit') ? 'habit' :
                project.id.includes('loveloop') ? 'loveloop' :
                'sora'
              }
              className="w-full h-full object-cover"
            />
          </div>

          {/* Case Study Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* The Challenge & Solution */}
            {project.caseStudy && (
              <>
                <div className="space-y-4">
                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F27D26] mb-2">
                      01 // The Challenge
                    </h4>
                    <p className="text-sm text-[#F5F5F5]/80 leading-relaxed font-light">
                      {project.caseStudy.challenge}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F27D26] mb-2">
                      02 // The Solution
                    </h4>
                    <p className="text-sm text-[#F5F5F5]/80 leading-relaxed font-light">
                      {project.caseStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Key Deliverables & Impact */}
                <div className="space-y-4">
                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F27D26] mb-3">
                      03 // Key Impact & Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {project.caseStudy.impact.map((imp, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-[#F5F5F5]/80 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#F27D26] shrink-0 mt-0.5" />
                          <span>{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.caseStudy.potentialServices && (
                    <div className="p-5 rounded-xl bg-[#F27D26]/5 border border-[#F27D26]/20">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F27D26] mb-2 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#F27D26]" />
                        <span>Services I Can Provide for this Concept</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {project.caseStudy.potentialServices.map((serv, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26]" />
                            <span>{serv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Services Provided & Technologies */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-2">
                Technologies Used
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-sm text-xs font-mono bg-white/[0.04] text-[#F5F5F5] border border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#F27D26] hover:bg-[#d96815] text-black text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#F27D26]/20 transition-all"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium uppercase tracking-wider transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repo</span>
                </a>
              )}

              {onSelectProjectForContact && (
                <button
                  onClick={() => {
                    onClose();
                    onSelectProjectForContact(project.title);
                  }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#F27D26]" />
                  <span>Request Similar Project</span>
                </button>
              )}
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
