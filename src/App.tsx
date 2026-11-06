import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Layers, 
  Cpu, 
  ExternalLink, 
  X, 
  Code2, 
  CheckCircle2, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import AkoderNav from './components/AkoderNav';
import AkoderHero from './components/AkoderHero';
import AkoderWork, { WorkProject } from './components/AkoderWork';
import AkoderOpenSource from './components/AkoderOpenSource';
import AkoderSkills from './components/AkoderSkills';
import AkoderResearch from './components/AkoderResearch';
import AkoderBookshelf from './components/AkoderBookshelf';
import AkoderFooter from './components/AkoderFooter';
import ContactForm from './components/ContactForm';
import CommandPalette from './components/CommandPalette';
import SectionRail, { RailItem } from './components/section-rail';

const RAIL_ITEMS: RailItem[] = [
  { id: "hero", label: "Top" },
  { id: "hero-intro", label: "Intro" },
  { id: "work", label: "Work" },
  { id: "work-desktop", label: "Desktop" },
  { id: "work-2026", label: "2026" },
  { id: "work-2025", label: "2025" },
  { id: "work-2024", label: "2024" },
  { id: "opensource", label: "Open Source" },
  { id: "opensource-prs", label: "PRs" },
  { id: "opensource-activity", label: "Activity" },
  { id: "skills", label: "Skills" },
  { id: "skills-tax", label: "Stack" },
  { id: "research", label: "Research" },
  { id: "bookshelf", label: "Library" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('akoder-theme');
      return saved ? saved === 'dark' : true;
    }
    return true;
  });

  const [activeProjectModal, setActiveProjectModal] = useState<WorkProject | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -400, y: -400, isHovering: false });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('akoder-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('akoder-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  // Mouse tracking for subtle spotlight on gutter dots
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY, isHovering: true });
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setMousePos(prev => ({ ...prev, isHovering: false }));
      }, 2500);
    };

    const handleMouseLeave = () => {
      setMousePos(prev => ({ ...prev, isHovering: false }));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeout);
    };
  }, []);

  // Lock body & document scroll when modal or search dialog is active
  useEffect(() => {
    if (activeProjectModal || isSearchOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = originalBodyOverflow || '';
        document.documentElement.style.overflow = originalHtmlOverflow || '';
      };
    }
  }, [activeProjectModal, isSearchOpen]);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setActiveProjectModal(null);
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div 
      className={`relative min-h-screen ${isDark ? 'bg-[#050505] text-[#F4F4F5]' : 'bg-[#FAFAFA] text-[#18181B]'} transition-colors duration-300 font-sans selection:bg-[#FECE12] selection:text-[#050505]`}
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
        '--gutter-lit': mousePos.isHovering ? '1' : '0'
      } as React.CSSProperties}
    >
      
      {/* Extended Continuous Side Lines running full viewport height (880px wide) - Only visible when screen is wide enough for gutters */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-y-0 left-0 right-0 z-20 hidden select-none min-[920px]:block">
        <div className="relative mx-auto h-full w-full max-w-[880px]">
          {/* Left continuous line */}
          <div className="absolute inset-y-0 left-0 w-px bg-[#26262B]" />
          {/* Right continuous line */}
          <div className="absolute inset-y-0 right-0 w-px bg-[#26262B]" />
        </div>
      </div>

      {/* Side Gutter Dotted Frame: only visible when screen is wide enough for gutters */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 hidden select-none overflow-hidden min-[920px]:block">
        <div className="relative mx-auto h-full w-full max-w-[880px]">
          {/* Left: visible dots near the line */}
          <div className="absolute inset-y-0 w-36 sm:w-48 right-full [mask-image:linear-gradient(to_bottom,transparent,black_3rem,black_calc(100%_-_3rem),transparent)]">
            <div className="absolute inset-0 [mask-image:linear-gradient(to_left,black_0%,black_35%,transparent_85%)]">
              <div className="frame-gutter-dots absolute inset-0 opacity-80" />
            </div>
          </div>

          {/* Right: visible dots near the line */}
          <div className="absolute inset-y-0 w-36 sm:w-48 left-full [mask-image:linear-gradient(to_bottom,transparent,black_3rem,black_calc(100%_-_3rem),transparent)]">
            <div className="absolute inset-0 [mask-image:linear-gradient(to_right,black_0%,black_35%,transparent_85%)]">
              <div className="frame-gutter-dots absolute inset-0 opacity-80" />
            </div>
          </div>
        </div>
      </div>

      {/* Cursor Hover Spotlight Overlay: ONLY a small tight portion of dots glows under cursor */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed inset-0 z-10 hidden select-none overflow-hidden min-[920px]:block transition-opacity duration-200"
        style={{
          opacity: mousePos.isHovering ? 1 : 0,
          WebkitMaskImage: `radial-gradient(circle 36px at ${mousePos.x}px ${mousePos.y}px, black 15%, transparent 100%)`,
          maskImage: `radial-gradient(circle 36px at ${mousePos.x}px ${mousePos.y}px, black 15%, transparent 100%)`
        }}
      >
        <div className="relative mx-auto h-full w-full max-w-[880px]">
          {/* Left dots illuminated on hover */}
          <div className="absolute inset-y-0 w-[84px] right-full">
            <div className="frame-gutter-dots-lit absolute inset-0" />
          </div>
          {/* Right dots illuminated on hover */}
          <div className="absolute inset-y-0 w-[84px] left-full">
            <div className="frame-gutter-dots-lit absolute inset-0" />
          </div>
        </div>
      </div>

      {/* Main Centered Content Container (Shadowless, crisp hairline borders at 880px) */}
      <div className={`relative mx-auto w-full max-w-[880px] border-x ${isDark ? 'border-[#1C1C20] bg-[#08080A]' : 'border-zinc-200 bg-[#FFFFFF]'} shadow-none min-h-screen flex flex-col transition-colors duration-300 z-10`}>
        {/* Responsive Section Navigation Rail with scroll tracking */}
        <SectionRail items={RAIL_ITEMS} />

        {/* Floating Top Navigation (Fixed pinned so it never hides on scroll) */}
        <AkoderNav
          onOpenSearch={() => setIsSearchOpen(true)}
        />
        {/* Header spacer to preserve document flow with safe-area support */}
        <div className="h-[calc(2.75rem+env(safe-area-inset-top,0px))] sm:h-12 shrink-0 pointer-events-none" aria-hidden="true" />

        {/* Main Sections (Each section is a full-width line block with edge-to-edge dividing borders) */}
        <main className="flex-1 w-full divide-y divide-[#1C1C20]">
          {/* Hero Section */}
          <AkoderHero />

          {/* Work / Projects Section */}
          <AkoderWork onSelectProject={(project) => setActiveProjectModal(project)} />

          {/* Tier-1 Open Source Section */}
          <AkoderOpenSource />

          {/* Skills & Technologies Section */}
          <AkoderSkills />

          {/* AI Research & Publications Section */}
          <AkoderResearch />

          {/* Interactive Bookshelf Section */}
          <AkoderBookshelf />

          {/* Contact Section */}
          <ContactForm />
        </main>

        {/* Akoder Botanical Garden Footer */}
        <AkoderFooter />

        {/* Fixed Bottom Glassy Cover (Dotted / dithered optical frosted glass with iOS Safe Area) */}
        <div aria-hidden="true" className="pointer-events-none fixed bottom-0 left-0 right-0 z-40 mx-auto w-full max-w-[880px] h-[calc(64px+env(safe-area-inset-bottom,0px))] shadow-none drop-shadow-none">
          {/* Frosted glass backdrop blur with dither dot matrix */}
          <div className="bottom-blur shadow-none drop-shadow-none" />
        </div>
      </div>

      {/* Command Palette Search Dialog */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={(id) => {
          setIsSearchOpen(false);
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        paperUrl="https://openreview.net/pdf?id=QGcF4561UP"
        resumeUrl="https://drive.google.com/file/d/1C_JAbG5rhGSdrsy8sGT8kT9f5FdH0qU2/view?usp=sharing"
      />

      {/* Project Case Study Modal (Sleek Pitch Black Minimalist Dialog matching Reference) */}
      {activeProjectModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overscroll-none"
          onClick={() => setActiveProjectModal(null)}
          onWheel={(e) => {
            if (e.target === e.currentTarget) {
              e.preventDefault();
            }
          }}
        >
          <div
            className="relative w-full max-w-xl sm:max-w-2xl bg-[#000000] text-[#E4E4E7] border border-white/10 rounded-[28px] sm:rounded-[32px] shadow-[0_30px_90px_rgba(0,0,0,0.98)] overflow-hidden max-h-[88vh] flex flex-col my-auto animate-in zoom-in-95 duration-200 overscroll-contain"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Minimalist Top Right Close Button (matching reference) */}
            <button
              type="button"
              onClick={() => setActiveProjectModal(null)}
              aria-label="Close dialog"
              className="absolute top-5 right-5 sm:top-6 sm:right-6 text-zinc-400 hover:text-white transition-colors cursor-pointer p-1.5 z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Modal Content */}
            <div 
              className="overflow-y-auto overscroll-contain modal-dark-scroll my-2 sm:my-3 mr-1 sm:mr-2 p-6 sm:p-9 pt-6 sm:pt-8 pr-5 sm:pr-8 space-y-6 text-[14.5px] sm:text-[15px] leading-[1.75] font-sans"
              onWheel={(e) => {
                const el = e.currentTarget;
                const isScrollingDown = e.deltaY > 0;
                const isScrollingUp = e.deltaY < 0;

                if (isScrollingDown && Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight) {
                  e.preventDefault();
                } else if (isScrollingUp && el.scrollTop <= 0) {
                  e.preventDefault();
                }
              }}
            >
              
              {/* Header: Title & Meta */}
              <div className="space-y-2 pr-8">
                <div className="flex flex-wrap items-center gap-2 font-mono text-[11.5px] text-zinc-400">
                  {activeProjectModal.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-white/[0.06] text-zinc-300 border border-white/10">
                      {activeProjectModal.badge}
                    </span>
                  )}
                  <span>{activeProjectModal.period}</span>
                  <span className="text-zinc-600">•</span>
                  <span>{activeProjectModal.role}</span>
                </div>

                <h3 className="text-[23px] sm:text-[26px] font-semibold text-white tracking-tight leading-snug">
                  {activeProjectModal.title}
                </h3>

                {activeProjectModal.tagline && (
                  <p className="text-[14px] text-zinc-400 leading-relaxed">
                    {activeProjectModal.tagline}
                  </p>
                )}
              </div>

              {/* Main Narrative Description */}
              <div className="space-y-3.5 text-zinc-200">
                <p>{activeProjectModal.description}</p>
                {activeProjectModal.deepDive?.problem && (
                  <p className="text-zinc-300">
                    {activeProjectModal.deepDive.problem}
                  </p>
                )}
              </div>

              {/* Engineering & Architecture */}
              {activeProjectModal.deepDive?.architecture && (
                <div className="space-y-2 pt-1">
                  <h4 className="text-[13px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                    Architecture &amp; Engineering
                  </h4>
                  <p className="text-zinc-300">
                    {activeProjectModal.deepDive.architecture}
                  </p>
                </div>
              )}

              {/* Key Capabilities / Highlights */}
              {activeProjectModal.bulletPoints && activeProjectModal.bulletPoints.length > 0 && (
                <div className="space-y-2.5 pt-1">
                  <h4 className="text-[13px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-2 text-zinc-300">
                    {activeProjectModal.bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-zinc-500 font-mono select-none shrink-0">—</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Outcomes */}
              {activeProjectModal.deepDive?.keyOutcomes && activeProjectModal.deepDive.keyOutcomes.length > 0 && (
                <div className="space-y-2 pt-1">
                  <h4 className="text-[13px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                    Outcomes:
                  </h4>
                  <ul className="space-y-1.5 text-zinc-300">
                    {activeProjectModal.deepDive.keyOutcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-emerald-400/90 font-mono select-none shrink-0">✓</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies & Stack */}
              {activeProjectModal.stack && activeProjectModal.stack.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-[12px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2.5">
                    Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProjectModal.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-[12px] font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Hackathon Certificate Showcase */}
              {activeProjectModal.id === 'hackathon' && (
                <div className="pt-2 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-amber-300 font-medium flex items-center gap-1.5">
                      <span>🏆</span> Award Certificate (Second Place)
                    </span>
                    <a
                      href="/reva-certificate.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12px] font-mono text-[#38bdf8] hover:underline flex items-center gap-1"
                    >
                      View Original ↗
                    </a>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/60">
                    <img
                      src="/reva-certificate.jpg"
                      alt="REVA University Hackathon Second Place Certificate"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              )}

              {/* CampusPe Internship Proof Showcase */}
              {activeProjectModal.id === 'campuspe' && (
                <div className="pt-2 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-amber-300 font-medium flex items-center gap-1.5">
                      <span>📄</span> Official Internship Proof Letter
                    </span>
                    <a
                      href="https://drive.google.com/file/d/1tlyNOtx1AanaKCU8CnGBHQ1FcdxqhHyt/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12px] font-mono text-[#38bdf8] hover:underline flex items-center gap-1"
                    >
                      Open Google Drive ↗
                    </a>
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1tlyNOtx1AanaKCU8CnGBHQ1FcdxqhHyt/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 shadow-2xl bg-black/60 transition-colors group cursor-pointer"
                  >
                    <img
                      src="/previews/campuspe_proof.png"
                      alt="CampusPe Official Internship Proof Document"
                      className="w-full h-auto max-h-[380px] object-contain mx-auto"
                    />
                  </a>
                </div>
              )}

              {/* Links (matching the reference image style: My Work: - Portfolio: ... - GitHub: ...) */}
              {activeProjectModal.links && activeProjectModal.links.length > 0 && (
                <div className="pt-3 space-y-2 font-mono text-[13px]">
                  <span className="text-zinc-300 font-semibold block">Links:</span>
                  <div className="space-y-1.5">
                    {activeProjectModal.links.map((link) => (
                      <div key={link.label} className="flex items-baseline gap-2">
                        <span className="text-zinc-500 select-none">—</span>
                        <span className="text-zinc-400 font-medium">{link.label}:</span>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#38bdf8] hover:underline inline-flex items-center gap-1 font-sans break-all"
                        >
                          <span>{link.url.replace(/^https?:\/\//, '')}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
