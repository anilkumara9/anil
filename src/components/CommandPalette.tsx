import React, { useEffect, useState, useRef } from 'react';
import { 
  Search, 
  Home, 
  Briefcase, 
  GitBranch, 
  Cpu, 
  Atom, 
  BookOpen, 
  Mail, 
  FileText, 
  Github, 
  Linkedin, 
  Phone
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  paperUrl?: string;
  resumeUrl?: string;
}

interface CommandItem {
  id: string;
  title: string;
  icon: React.ElementType;
  sectionId?: string;
  url?: string;
  action?: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onNavigate,
  resumeUrl = "https://drive.google.com/file/d/1C_JAbG5rhGSdrsy8sGT8kT9f5FdH0qU2/view?usp=sharing"
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const navigationItems: CommandItem[] = [
    { id: 'home', title: 'Home', icon: Home, sectionId: 'hero' },
    { id: 'work', title: 'Work & Experience', icon: Briefcase, sectionId: 'work' },
    { id: 'opensource', title: 'Open Source', icon: GitBranch, sectionId: 'opensource' },
    { id: 'skills', title: 'Skills & Stack', icon: Cpu, sectionId: 'skills' },
    { id: 'research', title: 'SCBI Research', icon: Atom, sectionId: 'research' },
    { id: 'bookshelf', title: 'Bookshelf', icon: BookOpen, sectionId: 'bookshelf' },
    { id: 'contact', title: 'Contact', icon: Mail, sectionId: 'contact' },
  ];

  const actionItems: CommandItem[] = [
    { 
      id: 'resume', 
      title: 'View Resume (PDF)', 
      icon: FileText, 
      url: resumeUrl 
    },
    { 
      id: 'github', 
      title: 'GitHub Profile (@anilkumara9)', 
      icon: Github, 
      url: 'https://github.com/anilkumara9' 
    },
    { 
      id: 'linkedin', 
      title: 'LinkedIn Profile', 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/in/anilkumar-meda-2b2624331' 
    },
    { 
      id: 'email', 
      title: 'Email: anilkumarmeda6@gmail.com', 
      icon: Mail, 
      url: 'mailto:anilkumarmeda6@gmail.com' 
    },
    { 
      id: 'phone', 
      title: 'Call: +91 9972437551', 
      icon: Phone, 
      url: 'tel:+919972437551' 
    },
  ];

  // Filter items
  const filteredNav = navigationItems.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
  const filteredActions = actionItems.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const allFilteredItems = [...filteredNav, ...filteredActions];

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (allFilteredItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + allFilteredItems.length) % (allFilteredItems.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const selected = allFilteredItems[selectedIndex];
        if (selected) {
          executeItem(selected);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, allFilteredItems]);

  const executeItem = (item: CommandItem) => {
    if (item.sectionId) {
      onNavigate(item.sectionId);
      onClose();
    } else if (item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
      onClose();
    } else if (item.action) {
      item.action();
      onClose();
    }
  };

  if (!isOpen) return null;

  let currentIndex = -1;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      {/* Modal Dialog Card (Exact matching reference image) */}
      <div 
        className="w-full max-w-[500px] bg-[#18181B] border border-[#2B2B32] rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.95)] overflow-hidden animate-in zoom-in-95 duration-150 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Search Input Row */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#26262E]">
          <Search className="size-[17px] text-zinc-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent text-[14px] text-zinc-100 placeholder:text-zinc-500 focus:outline-none font-sans"
          />
          <kbd className="px-1.5 py-0.5 rounded bg-[#24242B] text-zinc-400 text-[11px] font-mono border border-zinc-700/40 select-none">
            Esc
          </kbd>
        </div>

        {/* Scrollable Command List */}
        <div className="p-2 max-h-[360px] overflow-y-auto no-scrollbar space-y-4">
          {/* Navigate Group */}
          {filteredNav.length > 0 && (
            <div>
              <div className="px-3 pt-1 pb-1.5 text-[11px] font-medium text-zinc-500 uppercase tracking-wider font-sans select-none">
                Navigate
              </div>
              <div className="space-y-0.5">
                {filteredNav.map((item) => {
                  currentIndex++;
                  const isSelected = currentIndex === selectedIndex;
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.id}
                      onClick={() => executeItem(item)}
                      onMouseEnter={() => setSelectedIndex(currentIndex)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors text-[13.5px] font-medium select-none ${
                        isSelected 
                          ? 'bg-[#26262D] text-white' 
                          : 'text-zinc-300 hover:bg-[#202026] hover:text-white'
                      }`}
                    >
                      <Icon className={`size-[16px] shrink-0 ${isSelected ? 'text-white' : 'text-zinc-400'}`} />
                      <span className="truncate">{item.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quick Actions / Links Group */}
          {filteredActions.length > 0 && (
            <div>
              <div className="px-3 pt-1 pb-1.5 text-[11px] font-medium text-zinc-500 uppercase tracking-wider font-sans select-none">
                Quick Links &amp; Actions
              </div>
              <div className="space-y-0.5">
                {filteredActions.map((item) => {
                  currentIndex++;
                  const isSelected = currentIndex === selectedIndex;
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.id}
                      onClick={() => executeItem(item)}
                      onMouseEnter={() => setSelectedIndex(currentIndex)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors text-[13.5px] font-medium select-none ${
                        isSelected 
                          ? 'bg-[#26262D] text-white' 
                          : 'text-zinc-300 hover:bg-[#202026] hover:text-white'
                      }`}
                    >
                      <Icon className={`size-[16px] shrink-0 ${isSelected ? 'text-white' : 'text-zinc-400'}`} />
                      <span className="truncate">{item.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {allFilteredItems.length === 0 && (
            <div className="py-8 text-center text-zinc-500 text-[13px]">
              No commands or sections found for "{query}"
            </div>
          )}
        </div>

        {/* Footer Bar (Exact matching reference image) */}
        <div className="px-4 py-2.5 border-t border-[#24242B] bg-[#141416]/50 flex items-center justify-between text-[11px] text-zinc-500 select-none">
          {/* Left navigation controls */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-[#24242B] text-zinc-400 font-mono text-[10px] border border-zinc-700/30">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-[#24242B] text-zinc-400 font-mono text-[10px] border border-zinc-700/30">↓</kbd>
              <span className="ml-1 text-zinc-400">Navigate</span>
            </div>
            <div className="flex items-center gap-1 ml-2">
              <kbd className="px-1.5 py-0.5 rounded bg-[#24242B] text-zinc-400 font-mono text-[10px] border border-zinc-700/30">↵</kbd>
              <span className="ml-1 text-zinc-400">Select</span>
            </div>
          </div>

          {/* Right close hint */}
          <div className="flex items-center gap-1.5">
            <kbd className="px-1.5 py-0.5 rounded bg-[#24242B] text-zinc-400 font-mono text-[10px] border border-zinc-700/30">Esc</kbd>
            <span className="text-zinc-400">Close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
