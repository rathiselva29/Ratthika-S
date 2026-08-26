import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Download, 
  Printer, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Award,
  Sparkles
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  TIMELINE_DATA, 
  TECHNICAL_SKILLS, 
  ACHIEVEMENTS, 
  CORE_COMPETENCIES, 
  SOFT_SKILLS 
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyContact = () => {
    navigator.clipboard.writeText(`S. Ratthika - Web Developer & Freelancer\nEmail: ${PERSONAL_INFO.email}\nPhone: ${PERSONAL_INFO.phone}\nLinkedIn: ${PERSONAL_INFO.linkedin}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9800] flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:static">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md print:hidden"
        />

        {/* Modal Paper Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-950 text-slate-100 rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-10 my-auto print:bg-white print:text-black print:border-none print:shadow-none print:max-h-none print:p-6"
        >
          {/* Header Action Bar (Hidden in Print) */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 print:hidden">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                CURRICULUM VITAE // VERIFIED 2026
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyContact}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Copy contact text"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-indigo-400" />}
                <span>{copied ? 'Copied!' : 'Copy Info'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document Structure */}
          <div className="space-y-8 print:space-y-6">
            
            {/* Header / Name / Title */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 print:border-slate-300">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold font-display text-white print:text-black">
                  S. Ratthika
                </h1>
                <p className="text-base text-indigo-400 print:text-indigo-700 font-medium mt-1">
                  Computer Science Engineer • Web Developer • Digital Creator & Freelancer
                </p>
                <p className="text-xs text-slate-400 print:text-slate-600 mt-1 max-w-xl">
                  Dedicated developer with hands-on internship experience in responsive web development, foundational AI/ML, and creating full-spectrum digital presences.
                </p>
              </div>

              {/* Contact Meta */}
              <div className="flex flex-col gap-1.5 text-xs text-slate-300 print:text-slate-700 font-mono">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 hover:text-indigo-400">
                  <Mail className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-700" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-2 hover:text-indigo-400">
                  <Phone className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-700" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-700" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-400">
                  <Linkedin className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-700" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-indigo-400 print:text-indigo-800 mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </h3>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 print:border-slate-300 print:bg-slate-50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-base font-bold text-white print:text-black">
                    Bachelor of Engineering — Computer Science and Engineering
                  </h4>
                  <span className="text-xs font-mono text-indigo-300 print:text-indigo-800 font-semibold">
                    2022 – 2026 | CGPA: 8.2 / 10
                  </span>
                </div>
                <p className="text-xs text-slate-300 print:text-slate-700 mt-1">
                  MAM College of Engineering, Siruganur, Tiruchirappalli (Affiliated to Anna University)
                </p>
              </div>
            </div>

            {/* Work & Internship Experience */}
            <div>
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-purple-400 print:text-purple-800 mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>Work & Internship Experience</span>
              </h3>
              <div className="space-y-4">
                {TIMELINE_DATA.filter(t => t.type === 'experience').map((exp) => (
                  <div key={exp.id} className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 print:border-slate-300 print:bg-slate-50">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h4 className="text-sm font-bold text-white print:text-black">
                        {exp.title} — <span className="text-indigo-300 print:text-indigo-800">{exp.institution}</span>
                      </h4>
                      <span className="text-xs font-mono text-slate-400 print:text-slate-600">
                        {exp.period} | {exp.location}
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1 text-xs text-slate-300 print:text-slate-700">
                      {exp.highlights.map((point, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="text-indigo-400 print:text-indigo-700">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {exp.skills.map((s, sIdx) => (
                        <span key={sIdx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 print:bg-slate-200 text-slate-300 print:text-slate-800">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills & Competencies */}
            <div>
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-pink-400 print:text-pink-800 mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                <span>Technical Arsenal & Skills</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 print:border-slate-300 print:bg-slate-50">
                  <span className="font-bold text-white print:text-black block mb-1.5">Languages & Web Tech:</span>
                  <p className="text-slate-300 print:text-slate-700 leading-relaxed">
                    HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, Python, MySQL, REST APIs, JSON.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 print:border-slate-300 print:bg-slate-50">
                  <span className="font-bold text-white print:text-black block mb-1.5">Tools & Platforms:</span>
                  <p className="text-slate-300 print:text-slate-700 leading-relaxed">
                    Git, GitHub, Vercel, VS Code, Google Search Console, Responsive Web Design, AI/ML basics.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications & Extracurricular */}
            <div>
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-amber-400 print:text-amber-800 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Certifications & Extracurricular</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {ACHIEVEMENTS.map((ach, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 print:border-slate-300 print:bg-slate-50 text-xs">
                    <span className="font-bold text-white print:text-black block">{ach.title}</span>
                    <span className="text-[11px] text-indigo-300 print:text-indigo-700 block mt-0.5">{ach.organization}</span>
                    <span className="text-[10px] text-slate-400 print:text-slate-600 block mt-1">{ach.desc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
