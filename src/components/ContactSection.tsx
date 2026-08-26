import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Send, 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight,
  Clock,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  initialServiceOrProject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialServiceOrProject }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Business Website',
    budgetRange: 'Standard Business Solution',
    timeline: 'Within 2-4 Weeks',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceOrProject) {
      setFormData(prev => ({
        ...prev,
        projectType: initialServiceOrProject,
        message: `Hi Ratthika, I am reaching out to discuss requirements for "${initialServiceOrProject}".`
      }));
    }
  }, [initialServiceOrProject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // safe fallback
    }
  };

  const generateWhatsAppUrl = () => {
    const text = `Hi Ratthika!\n\nName: ${formData.name || 'Client'}\nEmail: ${formData.email || 'N/A'}\nProject Type: ${formData.projectType}\nTimeline: ${formData.timeline}\nMessage: ${formData.message || 'I would like to discuss a project with you.'}`;
    return `https://wa.me/917397732494?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden">
      {/* Dynamic ambient backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#F27D26]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#F27D26] text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F27D26] animate-ping" />
            <span>08 // INQUIRY & COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif italic tracking-tight text-white max-w-3xl leading-tight">
            Ready to Build Something Remarkable?
          </h2>
          <p className="text-sm sm:text-base text-[#F5F5F5]/70 max-w-2xl mt-4 font-light leading-relaxed">
            Have a project in mind, need a full business digital presence, or want to hire a dedicated web developer? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Contact Details & Instant Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Direct Cards */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
              <h3 className="text-xl font-serif italic text-white mb-6">
                Direct Communication Channels
              </h3>

              <div className="space-y-4">
                {/* WhatsApp Priority Card */}
                <a
                  href="https://wa.me/917397732494?text=Hi%20Ratthika,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20collaborate."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white/[0.02] hover:bg-[#F27D26]/10 border border-white/10 hover:border-[#F27D26]/30 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-md bg-[#F27D26]/10 flex items-center justify-center text-[#F27D26]">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#F27D26] font-bold block">
                        Fastest Response
                      </span>
                      <h4 className="text-sm font-serif italic text-white group-hover:text-[#F27D26] transition-colors">
                        WhatsApp Instant Chat
                      </h4>
                      <p className="text-xs text-slate-400">+91 73977 32494</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#F27D26] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-md bg-white/5 flex items-center justify-center text-[#F27D26]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                        Email Inquiry
                      </span>
                      <h4 className="text-sm font-serif italic text-white group-hover:text-[#F27D26] transition-colors">
                        {PERSONAL_INFO.email}
                      </h4>
                      <p className="text-xs text-slate-400">Within 24 Hours Response</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                {/* Direct Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-md bg-white/5 flex items-center justify-center text-[#F27D26]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                        Direct Phone
                      </span>
                      <h4 className="text-sm font-serif italic text-white group-hover:text-[#F27D26] transition-colors">
                        {PERSONAL_INFO.phone}
                      </h4>
                      <p className="text-xs text-slate-400">Mon – Sat • 9AM – 8PM IST</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                {/* Location */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-md bg-white/5 flex items-center justify-center text-[#F27D26]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                      Based In
                    </span>
                    <h4 className="text-sm font-serif italic text-white">
                      {PERSONAL_INFO.location}
                    </h4>
                    <p className="text-xs text-slate-400">Available Globally for Remote Work</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Profiles:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-sm bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#F27D26]" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-sm bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-slate-300" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quality Commitment Guarantee */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 flex items-center gap-3.5">
              <ShieldCheck className="w-6 h-6 text-[#F27D26] shrink-0" />
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                <strong>Satisfaction Guaranteed:</strong> Milestone-based progress reports, transparent code handover, and structured onboarding.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-white/10 shadow-2xl">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <h3 className="text-xl font-serif italic text-white">
                      Start Your Project
                    </h3>
                    <span className="text-xs font-mono text-[#F27D26]">
                      Step 1 of 1
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Johnson"
                        className="w-full px-4 py-3 rounded-sm bg-black/60 border border-white/10 focus:border-[#F27D26] focus:outline-hidden text-sm text-white placeholder-slate-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-sm bg-black/60 border border-white/10 focus:border-[#F27D26] focus:outline-hidden text-sm text-white placeholder-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Project Category
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm bg-black border border-white/10 focus:border-[#F27D26] focus:outline-hidden text-sm text-white transition-colors"
                      >
                        <option value="Business Starter Package">Business Starter Package</option>
                        <option value="Business Growth Package">Business Growth Package</option>
                        <option value="Complete Digital Presence">Complete Digital Presence</option>
                        <option value="Custom Business Website">Custom Business Website</option>
                        <option value="Web Application & Logic">Web Application & Logic</option>
                        <option value="Artika Gallery / Custom Art">Artika Gallery / Custom Art</option>
                        <option value="Full-Time / Developer Role">Full-Time / Developer Role</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Estimated Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm bg-black border border-white/10 focus:border-[#F27D26] focus:outline-hidden text-sm text-white transition-colors"
                      >
                        <option value="Immediate (< 1 Week)">Immediate (&lt; 1 Week)</option>
                        <option value="Within 2-4 Weeks">Within 2-4 Weeks</option>
                        <option value="Flexible Timeline">Flexible Timeline</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Project Details & Vision
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your business goals, required features, or creative ideas..."
                      className="w-full px-4 py-3 rounded-sm bg-black/60 border border-white/10 focus:border-[#F27D26] focus:outline-hidden text-sm text-white placeholder-slate-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Actions */}
                  <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3.5 rounded-sm bg-[#F27D26] hover:bg-[#d96815] text-black text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#F27D26]/20 transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>

                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Open in WhatsApp</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-center text-slate-500 pt-2 font-mono">
                    🔒 Your email & details are strictly confidential and will never be shared.
                  </p>
                </form>
              ) : (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#F27D26]/20 border border-[#F27D26]/30 flex items-center justify-center text-[#F27D26] mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif italic text-white mb-2">
                    Thank You, {formData.name || 'Friend'}!
                  </h3>
                  <p className="text-sm text-[#F5F5F5]/75 max-w-md mb-8">
                    Your project details have been received. I will review your requirements and respond back via email or WhatsApp within 24 hours.
                  </p>

                  <div className="flex flex-wrap gap-3 justify-center">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#F27D26] hover:bg-[#d96815] text-black text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#F27D26]/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Continue on WhatsApp Now</span>
                    </a>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2.5 rounded-sm bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium uppercase tracking-wider cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
