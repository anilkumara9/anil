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
  { id: "work-2026", label: "2026" },
  { id: "work-2025", label: "2025" },
  { id: "work-2024", label: "2024" },
  { id: "opensource", label: "Open Source" },
  { id: "opensource-prs", label: "PRs" },
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

  // Lock body scroll when modal or search dialog is active
  useEffect(() => {
    if (activeProjectModal || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
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
      
      {/* Extended Continuous Side Lines running full viewport height (880px wide) */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-y-0 left-0 right-0 z-20 hidden select-none md:block">
        <div className="relative mx-auto h-full w-full max-w-[880px]">
          {/* Left continuous line */}
          <div className="absolute inset-y-0 left-0 w-px bg-[#26262B]" />
          {/* Right continuous line */}
          <div className="absolute inset-y-0 right-0 w-px bg-[#26262B]" />
        </div>
      </div>

      {/* Side Gutter Dotted Frame: covered with black shadow a little bit, not fully */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 hidden select-none overflow-hidden md:block">
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
        className="pointer-events-none fixed inset-0 z-10 hidden select-none overflow-hidden md:block transition-opacity duration-200"
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
        {/* Header spacer to preserve document flow */}
        <div className="h-10 mb-0 shrink-0 pointer-events-none" aria-hidden="true" />

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

      {/* Project Case Study Modal (Proper Block Line & Premium Design) */}
      {activeProjectModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveProjectModal(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#090A0E] text-[#F4F4F5] border border-[#22232B] rounded-2xl shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)] overflow-hidden max-h-[88vh] flex flex-col my-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Block (Crisp Block Line border-b) */}
            <div className="p-6 sm:p-7 border-b border-[#1C1D25] bg-[#0E0F15] shrink-0">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    {activeProjectModal.badge && (
                      <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[#181923] text-zinc-300 border border-[#272835]">
                        {activeProjectModal.badge}
                      </span>
                    )}
                    <span className="font-mono text-[11px] text-zinc-500">
                      {activeProjectModal.period}
                    </span>
                    <span className="text-zinc-700 font-mono text-[11px]">•</span>
                    <span className="font-mono text-[11px] text-zinc-400">
                      {activeProjectModal.role}
                    </span>
                  </div>

                  <h3 className="font-serif text-[23px] sm:text-[26px] font-normal text-white tracking-tight leading-snug">
                    {activeProjectModal.title}
                  </h3>

                  <p className="text-[13.5px] text-zinc-400 leading-relaxed max-w-xl">
                    {activeProjectModal.tagline || activeProjectModal.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProjectModal(null)}
                  aria-label="Close dialog"
                  className="size-8 rounded-full bg-[#181923] hover:bg-[#232431] border border-[#272835] flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer shrink-0"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Action Buttons in Header */}
              {activeProjectModal.links && activeProjectModal.links.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-3.5 mt-3 border-t border-[#1C1D25]/70">
                  {activeProjectModal.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-mono transition-all ${
                        link.primary
                          ? 'bg-white text-black hover:bg-zinc-200 font-medium shadow-sm'
                          : 'bg-[#15161E] hover:bg-[#1E202B] border border-[#252735] text-zinc-300 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Body with Clean Block Line Sections */}
            <div className="overflow-y-auto divide-y divide-[#1C1D25] text-[13.5px]">

              {/* Meta Specs Grid with Crisp Hairline Block Lines */}
              <div className="grid grid-cols-2 sm:grid-cols-3 divide-x divide-y sm:divide-y-0 divide-[#1C1D25] bg-[#0B0C11]">
                <div className="p-4 sm:p-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">Role &amp; Focus</span>
                  <span className="font-mono text-[12px] text-zinc-200 font-medium block truncate" title={activeProjectModal.role}>
                    {activeProjectModal.role}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">Key Highlight</span>
                  <span className="font-mono text-[12px] text-amber-300 font-medium block truncate" title={activeProjectModal.lldMetric || activeProjectModal.badge}>
                    {activeProjectModal.lldMetric || activeProjectModal.badge}
                  </span>
                </div>
                <div className="p-4 sm:p-5 col-span-2 sm:col-span-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">Timeline</span>
                  <span className="font-mono text-[12px] text-zinc-200 font-medium block truncate">
                    {activeProjectModal.period}
                  </span>
                </div>
              </div>

              {/* Overview & Purpose Section */}
              <div className="p-6 sm:p-7 space-y-2.5">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-zinc-500 font-semibold block">
                  Overview &amp; Purpose
                </span>
                <p className="text-[14px] text-zinc-300 leading-relaxed font-sans">
                  {activeProjectModal.description}
                </p>
                {activeProjectModal.deepDive?.problem && (
                  <p className="text-[13.5px] text-zinc-400 leading-relaxed font-sans pt-1">
                    {activeProjectModal.deepDive.problem}
                  </p>
                )}
              </div>

              {/* Key Capabilities / Highlights Section */}
              {activeProjectModal.bulletPoints && activeProjectModal.bulletPoints.length > 0 && (
                <div className="p-6 sm:p-7 space-y-3">
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-zinc-500 font-semibold block">
                    Core Highlights &amp; Capabilities
                  </span>
                  <div className="space-y-2.5">
                    {activeProjectModal.bulletPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-[13.5px] text-zinc-300 leading-relaxed font-sans">
                        <span className="font-mono text-amber-400/80 text-[11.5px] shrink-0 mt-0.5">0{idx + 1}.</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Engineering Architecture & Technical Solution */}
              {activeProjectModal.deepDive?.architecture && (
                <div className="p-6 sm:p-7 space-y-3">
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-zinc-500 font-semibold block">
                    Engineering &amp; Architecture
                  </span>
                  <p className="text-[13.5px] text-zinc-300 leading-relaxed font-sans">
                    {activeProjectModal.deepDive.architecture}
                  </p>

                  {/* Production Outcomes */}
                  {activeProjectModal.deepDive?.keyOutcomes && activeProjectModal.deepDive.keyOutcomes.length > 0 && (
                    <div className="pt-2 space-y-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 block">Outcomes:</span>
                      <ul className="space-y-1.5 pl-0.5">
                        {activeProjectModal.deepDive.keyOutcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-[13px] text-zinc-400 leading-relaxed font-sans">
                            <span className="text-emerald-400 font-mono text-[12px] shrink-0 mt-0.5">✓</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Technologies Used Section */}
              <div className="p-6 sm:p-7 space-y-3">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-zinc-500 font-semibold block">
                  Technologies &amp; Tools
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.stack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11.5px] font-mono bg-[#13141C] text-zinc-300 border border-[#21232E]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Block (Crisp Block Line border-t) */}
            <div className="p-4 sm:p-5 border-t border-[#1C1D25] bg-[#0E0F15] flex items-center justify-between gap-3 shrink-0">
              <span className="font-mono text-[11px] text-zinc-500 hidden sm:inline">
                Press ESC or click outside to dismiss
              </span>
              <button
                type="button"
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-1.5 rounded-full bg-[#181923] hover:bg-[#232431] border border-[#272835] text-[12px] font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer ml-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
