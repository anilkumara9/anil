import React, { useEffect, useState } from 'react';
import { Search, X, FileText, Download, Github, Linkedin, Mail, Phone, ExternalLink, Sparkles, Folder, ArrowRight } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  paperUrl: string;
  resumeUrl: string;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate,
  paperUrl,
  resumeUrl
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // toggling can be handled by parent
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      category: 'Navigation',
      items: [
        { id: 'hero', title: 'Home / Hero', desc: 'Overview, interactive lab, and core highlights', icon: Sparkles },
        { id: 'about', title: 'About Meda', desc: 'Background, education, and career profile', icon: Sparkles },
        { id: 'research', title: 'SCBI Research Spotlight', desc: 'Inference-time representation learning', icon: FileText },
        { id: 'experience', title: 'Work Experience (CampusPe)', desc: 'AI intern, production GenAI features', icon: Folder },
        { id: 'projects', title: 'Featured Projects (7)', desc: 'Spora (200+ users), Edge ML, Invisly, Polo', icon: Folder },
        { id: 'skills', title: 'Technical Skills Matrix', desc: 'PyTorch, Next.js, Edge ML, LangChain, Cloud', icon: Sparkles },
        { id: 'education', title: 'Education & Awards', desc: 'NHCE B.E. (8.09 CGPA) & REVA Hackathon 2nd Prize', icon: Folder },
        { id: 'timeline', title: 'Interactive Timeline', desc: 'Chronological roadmap of projects & research', icon: Folder },
        { id: 'contact', title: 'Get In Touch', desc: 'Email, phone, and direct messaging form', icon: Mail },
      ]
    },
    {
      category: 'Direct Links & Actions',
      items: [
        { title: 'Download Resume (PDF)', desc: 'Open verified resume file', icon: Download, url: resumeUrl },
        { title: 'Read SCBI Research Paper', desc: 'Full empirical paper on causal steering', icon: FileText, url: paperUrl },
        { title: 'SCBI Research Breakdown on 𝕏', desc: 'Read research post & findings thread', icon: ExternalLink, url: 'https://x.com/anilKumar09873/status/2108649451917308224?s=20' },
        { title: 'View Spora Demo on 𝕏', desc: 'Knowledge platform video demo', icon: ExternalLink, url: 'https://x.com/anilKumar09873/status/2096482373299057022' },
        { title: 'GitHub Profile', desc: 'Explore all repositories & open source code', icon: Github, url: 'https://github.com/anilkumara9' },
        { title: 'LinkedIn Profile', desc: 'Connect professionally', icon: Linkedin, url: 'https://www.linkedin.com/in/anilkumar-meda-2b2624331' },
        { title: 'Send Direct Email', desc: 'anilkumarmeda6@gmail.com', icon: Mail, url: 'mailto:anilkumarmeda6@gmail.com' },
        { title: 'Call on Phone', desc: '+91 9986489887', icon: Phone, url: 'tel:+919986489887' },
      ]
    }
  ];

  const filteredActions = actions.map(cat => ({
    ...cat,
    items: cat.items.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) || 
      item.desc.toLowerCase().includes(query.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-[#FFFFFF] border border-[#e5e5ea] rounded-[24px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#e5e5ea]">
          <Search className="h-5 w-5 text-[#141414]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project name, or section (e.g., Spora, SCBI, Resume)..."
            className="flex-1 bg-transparent text-[15px] text-[#141414] placeholder-[#707070] focus:outline-none"
            autoFocus
          />
          <button 
            onClick={onClose}
            className="h-8 w-8 rounded-full flex items-center justify-center text-[#707070] hover:text-[#141414] hover:bg-[#f3f3f3] transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
          {filteredActions.length === 0 ? (
            <div className="py-12 text-center text-[14px] text-[#707070]">
              No matching commands or projects found for "{query}".
            </div>
          ) : (
            filteredActions.map((cat, idx) => (
              <div key={idx} className="space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#707070] px-3">
                  {cat.category}
                </span>
                <div className="space-y-1">
                  {cat.items.map((item, itemIdx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={itemIdx}
                        onClick={() => {
                          if ('url' in item && item.url) {
                            window.open(item.url, '_blank');
                          } else if ('id' in item && item.id) {
                            onNavigate(item.id);
                          }
                          onClose();
                        }}
                        className="group flex items-center justify-between p-3 rounded-[16px] hover:bg-[#f3f3f3] cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-full bg-[#f8f8fa] border border-[#e5e5ea] flex items-center justify-center text-[#141414] group-hover:scale-105 transition-transform">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <span className="text-[14px] font-semibold text-[#141414] block group-hover:text-[#0066ff] transition-colors">
                              {item.title}
                            </span>
                            <span className="text-[12px] text-[#707070] block">
                              {item.desc}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-[#707070] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-5 py-3 bg-[#f8f8fa] border-t border-[#e5e5ea] flex items-center justify-between text-[12px] text-[#707070]">
          <div className="flex items-center gap-3">
            <span>Navigation: <kbd className="px-1.5 py-0.5 rounded bg-[#ffffff] border border-[#e0e0e0] font-mono text-[10px] text-[#141414]">Click</kbd></span>
            <span>Close: <kbd className="px-1.5 py-0.5 rounded bg-[#ffffff] border border-[#e0e0e0] font-mono text-[10px] text-[#141414]">Esc</kbd></span>
          </div>
          <span className="font-semibold text-[#141414]">Meda Anilkumar Portfolio</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
