import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { FeaturedProjects } from './components/FeaturedProjects';
import { BusinessPackages } from './components/BusinessPackages';
import { CreativeShowcase } from './components/CreativeShowcase';
import { WebApplicationsSection } from './components/WebApplicationsSection';
import { ServicesSection } from './components/ServicesSection';
import { CinematicContactTransition } from './components/CinematicContactTransition';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { CinematicIntro } from './components/CinematicIntro';
import { ResumeModal } from './components/ResumeModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Project } from './types';

export function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [contactInitialService, setContactInitialService] = useState<string>('');

  const handleSelectServiceOrPackage = (serviceName: string) => {
    setContactInitialService(serviceName);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactEl.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-[#F27D26] selection:text-black font-sans antialiased overflow-x-hidden">
      {/* Custom Mouse Following Cursor */}
      <CustomCursor />

      {/* Cinematic 3-Second Opening Showreel */}
      <AnimatePresence>
        {showIntro && (
          <CinematicIntro onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Main Website App Container */}
      <div className="flex flex-col min-h-screen">
        {/* Sticky Glass Navbar */}
        <Navbar
          onOpenResume={() => setResumeOpen(true)}
          onReplayIntro={() => setShowIntro(true)}
        />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* 01. Hero Section */}
          <Hero onOpenResume={() => setResumeOpen(true)} />

          {/* Infinite Marquee 1 */}
          <MarqueeStrip />

          {/* 02. About Section & Technical Arsenal */}
          <AboutSection />

          {/* 03. Experience & Journey Timeline */}
          <ExperienceTimeline />

          {/* Infinite Marquee 2 Reverse (Workflow & Craft) */}
          <MarqueeStrip 
            reverse={true} 
            items={[
              'IDEA → PLAN → DESIGN → BUILD → TEST → LAUNCH',
              'WHERE CODE MEETS CREATIVITY',
              'PROFESSIONAL WEB DEVELOPER',
              'FOUNDER OF ARTIKA GALLERY',
              'FREELANCE DIGITAL PARTNER',
              'PERFORMANCE & CLEAN ARCHITECTURE'
            ]}
          />

          {/* 04. Featured Work (Business-Facing First) */}
          <FeaturedProjects onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)} />

          {/* 05. Business Service Packages */}
          <BusinessPackages onSelectPackage={handleSelectServiceOrPackage} />

          {/* 06. Digital Creator & Artika Gallery Showcase */}
          <CreativeShowcase />

          {/* 07. Web Applications & Interactive Experiences */}
          <WebApplicationsSection onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)} />

          {/* 08. Specialized Services & Value Proposition */}
          <ServicesSection onSelectService={handleSelectServiceOrPackage} />

          {/* 09. Cinematic Call to Action Transition */}
          <CinematicContactTransition />

          {/* 10. Contact & Inquiry Section */}
          <ContactSection initialServiceOrProject={contactInitialService} />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Modals & Dialogs */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onSelectProjectForContact={handleSelectServiceOrPackage}
      />
    </div>
  );
}

export default App;
