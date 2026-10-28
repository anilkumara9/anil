import React from 'react';
import { Search, Github, FileText, ArrowUpRight } from 'lucide-react';

interface AkoderNavProps {
  onOpenSearch?: () => void;
  activeSection?: string;
}

const RESUME_URL = "https://drive.google.com/file/d/1C_JAbG5rhGSdrsy8sGT8kT9f5FdH0qU2/view?usp=sharing";

/* 1. Sticker Style Tilted Keycap with Letter 'A' */
function KeycapStickerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-[17px] sm:h-[17px] shrink-0">
      {/* Outer thick white sticker contour */}
      <path
        d="M6 3.5C5.1 3.5 4.3 4.1 4.1 5L2.2 16.2C2 17.3 2.8 18.5 4 18.5H19.5C20.7 18.5 21.5 17.3 21.3 16.2L19.5 5C19.3 4.1 18.5 3.5 17.6 3.5H6Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      {/* Base keycap body */}
      <path
        d="M6 4H17.5L19.2 16.5C19.3 17.3 18.7 18 17.8 18H4.7C3.9 18 3.3 17.3 3.4 16.5L5.2 4H6Z"
        fill="#FFFFFF"
        stroke="#18181B"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Top key surface */}
      <path
        d="M7 5.5H16.5L17.5 12.8H5.8L7 5.5Z"
        fill="#FFFDF7"
        stroke="#18181B"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Bevel crease lines */}
      <path
        d="M5.8 12.8L4.7 18M17.5 12.8L17.8 18"
        stroke="#18181B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Letter 'A' */}
      <text
        x="11.7"
        y="10.8"
        textAnchor="middle"
        fill="#18181B"
        fontSize="7"
        fontWeight="900"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      >
        A
      </text>
    </svg>
  );
}

/* 2. Sticker Style Speech / Twitch Bubble with 2 Dark Slits */
function ChatBubbleStickerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-[17px] sm:h-[17px] shrink-0">
      {/* Outer thick white sticker contour */}
      <path
        d="M4.5 4C3.1 4 2 5.1 2 6.5V13.8C2 15.2 3.1 16.3 4.5 16.3H6.8V19.8C6.8 20.6 7.7 21 8.3 20.4L12.1 16.3H18.5C19.9 16.3 21 15.2 21 13.8V6.5C21 5.1 19.9 4 18.5 4H4.5Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      {/* Main bubble shape */}
      <path
        d="M4.5 4.5C3.4 4.5 2.5 5.4 2.5 6.5V13.8C2.5 14.9 3.4 15.8 4.5 15.8H7.2V19.4L11.5 15.8H18.5C19.6 15.8 20.5 14.9 20.5 13.8V6.5C20.5 5.4 19.6 4.5 18.5 4.5H4.5Z"
        fill="#FFFDF7"
        stroke="#18181B"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Two dark vertical dialogue slits */}
      <rect x="8.5" y="8" width="2" height="4.5" rx="1" fill="#18181B" />
      <rect x="13" y="8" width="2" height="4.5" rx="1" fill="#18181B" />
    </svg>
  );
}

/* 3. Sticker Style Terminal / Code Prompt Skills Badge */
function SkillsTerminalStickerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-[17px] sm:h-[17px] shrink-0">
      {/* Outer thick white sticker contour */}
      <rect
        x="2.5"
        y="4"
        width="19"
        height="16"
        rx="3.5"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      {/* Main terminal window body */}
      <rect
        x="2.5"
        y="4"
        width="19"
        height="16"
        rx="3"
        fill="#FFFDF7"
        stroke="#18181B"
        strokeWidth="1.8"
      />
      {/* Code prompt > */}
      <path
        d="M6.5 9.5L9.5 12L6.5 14.5"
        stroke="#18181B"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Cursor _ */}
      <line
        x1="11.5"
        y1="14.5"
        x2="15.5"
        y2="14.5"
        stroke="#18181B"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      {/* Small dot on top right */}
      <circle cx="17.5" cy="7.5" r="1" fill="#FECE12" stroke="#18181B" strokeWidth="0.6" />
    </svg>
  );
}

/* 4. Sticker Style Coffee Cup Badge */
function CoffeeCupStickerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-[17px] sm:h-[17px] shrink-0">
      <path
        d="M3.5 6.5H15.5V12C15.5 14.5 13.5 16.5 11 16.5H8C5.5 16.5 3.5 14.5 3.5 12V6.5Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 8H17.5C19 8 20 9 20 10.5C20 12 19 13 17.5 13H15.5"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M3.5 6.5H15.5V12C15.5 14.5 13.5 16.5 11 16.5H8C5.5 16.5 3.5 14.5 3.5 12V6.5Z"
        fill="#FFFDF7"
        stroke="#18181B"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 8.5H17.5C18.6 8.5 19.5 9.4 19.5 10.5C19.5 11.6 18.6 12.5 17.5 12.5H15.5"
        stroke="#18181B"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M7 3.5V5M11.5 3.5V5" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* 5. Glossy 3D Gold Star for GitHub Star Hover */
function GlossyStarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 drop-shadow-[0_1px_3px_rgba(245,158,11,0.6)]">
      <defs>
        <linearGradient id="navStarGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="35%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      <path
        d="M12 2.2L14.9 8.6L21.8 9.4L16.7 14.1L18.1 20.9L12 17.4L5.9 20.9L7.3 14.1L2.2 9.4L9.1 8.6L12 2.2Z"
        fill="url(#navStarGold)"
        stroke="#B45309"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AkoderNav({ onOpenSearch }: AkoderNavProps) {
  return (
    <header className="pointer-events-none fixed top-[max(0.65rem,env(safe-area-inset-top,0.65rem))] left-0 right-0 z-50 mx-auto flex h-10 sm:h-11 w-full max-w-[880px] items-center justify-between gap-1 sm:gap-2 px-1.5 xs:px-2.5 sm:px-6">

      {/* Left Navigation Group (Gray UI: bg-[#202126], border-[#32333B], white text) */}
      <nav aria-label="Site navigation" className="pointer-events-auto flex items-center gap-1 sm:gap-2 min-w-0">
        {/* Anil's Profile Photo Anchor */}
        <a
          href="#hero"
          aria-label="Home"
          className="relative flex h-8 w-8 sm:h-[34px] sm:w-[34px] shrink-0 items-center justify-center rounded-full overflow-hidden ring-1.5 ring-[#32333B] hover:ring-zinc-400 shadow-sm transition-transform hover:scale-105 active:scale-95 cursor-pointer bg-[#202126]"
        >
          <img
            src="/anil.png"
            alt="Meda Anilkumar"
            className="h-full w-full object-cover"
          />
        </a>

        {/* 1. Work Button (Gray UI) */}
        <a
          href="#work"
          className="group flex h-8 sm:h-[34px] items-center gap-1 sm:gap-1.5 rounded-full bg-[#202126] hover:bg-[#2A2B32] border border-[#32333B] px-2 sm:pl-3.5 sm:pr-2.5 text-[11px] xs:text-[11.5px] sm:text-[12.5px] font-medium text-white transition-all shrink-0 cursor-pointer shadow-xs"
        >
          <span>Work</span>
          <div className="shrink-0 flex items-center justify-center transition-transform group-hover:scale-110">
            <KeycapStickerIcon />
          </div>
        </a>

        {/* 2. Open Source Button (Gray UI) */}
        <a
          href="#opensource"
          className="group flex h-8 sm:h-[34px] items-center gap-1 sm:gap-1.5 rounded-full bg-[#202126] hover:bg-[#2A2B32] border border-[#32333B] px-2 sm:pl-3.5 sm:pr-2.5 text-[11px] xs:text-[11.5px] sm:text-[12.5px] font-medium text-white transition-all shrink-0 cursor-pointer shadow-xs"
        >
          <span>
            <span className="inline sm:hidden">Open</span>
            <span className="hidden sm:inline">Open Source</span>
          </span>
          <div className="shrink-0 flex items-center justify-center transition-transform group-hover:scale-110">
            <ChatBubbleStickerIcon />
          </div>
        </a>

        {/* 3. Skills Button (Gray UI) */}
        <a
          href="#skills"
          className="group flex h-8 sm:h-[34px] items-center gap-1 sm:gap-1.5 rounded-full bg-[#202126] hover:bg-[#2A2B32] border border-[#32333B] px-2 sm:pl-3.5 sm:pr-2.5 text-[11px] xs:text-[11.5px] sm:text-[12.5px] font-medium text-white transition-all shrink-0 cursor-pointer shadow-xs"
        >
          <span>Skills</span>
          <div className="shrink-0 flex items-center justify-center transition-transform group-hover:scale-110">
            <SkillsTerminalStickerIcon />
          </div>
        </a>

        {/* 4. Contact Button (Gray UI) */}
        <a
          href="#contact"
          className="group flex h-8 sm:h-[34px] items-center gap-1 sm:gap-1.5 rounded-full bg-[#202126] hover:bg-[#2A2B32] border border-[#32333B] px-2 sm:pl-3.5 sm:pr-2.5 text-[11px] xs:text-[11.5px] sm:text-[12.5px] font-medium text-white transition-all shrink-0 cursor-pointer shadow-xs"
        >
          <span>Contact</span>
          <div className="shrink-0 flex items-center justify-center transition-transform group-hover:scale-110">
            <CoffeeCupStickerIcon />
          </div>
        </a>
      </nav>

      {/* Right Control Actions Group (Gray UI) */}
      <div className="pointer-events-auto flex shrink-0 items-center gap-1 sm:gap-2">
        {/* Search Command Palette Trigger (Gray UI Squircle) */}
        <div className="relative group">
          <button
            type="button"
            onClick={onOpenSearch}
            aria-label="Open search command palette"
            className="flex h-8 w-8 sm:h-[34px] sm:w-[34px] items-center justify-center rounded-xl bg-[#202126] hover:bg-[#2A2B32] border border-[#32333B] text-zinc-300 hover:text-white transition-colors cursor-pointer shadow-xs shrink-0"
          >
            <Search className="size-[13px] sm:size-[14.5px]" />
          </button>

          {/* Upward Notch Tooltip */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:flex flex-col items-center z-50 pointer-events-none transition-all duration-150 animate-in fade-in-0 zoom-in-95">
            <div className="w-0 h-0 border-x-[6px] border-x-transparent border-b-[6px] border-b-white drop-shadow-xs" />
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-zinc-900 text-[11.8px] font-medium whitespace-nowrap shadow-xl border border-zinc-200/90">
              <span>Open command palette</span>
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-700 text-[10.5px] font-mono border border-zinc-200/80">Ctrl / ⌘</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-700 text-[10.5px] font-mono border border-zinc-200/80">K</kbd>
            </div>
          </div>
        </div>

        {/* GitHub Button (Gray UI Pill: Normal = GitHub Icon, Hover = Stars) */}
        <a
          href="https://github.com/anilkumara9"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View on GitHub"
          className="group flex h-8 w-8 sm:w-auto sm:h-[34px] items-center rounded-full bg-[#202126] hover:bg-[#2A2B32] border border-[#32333B] px-0 sm:px-3.5 transition-all duration-150 cursor-pointer justify-center shadow-xs shrink-0"
        >
          {/* Normal state: GitHub icon & count */}
          <div className="flex items-center gap-1.5 text-[12px] font-mono text-zinc-300 group-hover:hidden transition-all">
            <Github className="size-[13.5px] sm:size-[14px]" />
            <span className="font-sans font-medium text-white text-[12px] hidden sm:inline">42</span>
          </div>

          {/* Hover state: ONLY show the stars & count! */}
          <div className="hidden group-hover:flex items-center gap-1.5 text-[12px] font-mono text-zinc-100 transition-all animate-in fade-in zoom-in-95 duration-150">
            <GlossyStarIcon />
            <span className="font-sans font-semibold text-amber-300 text-[12px] hidden sm:inline">42</span>
          </div>
        </a>

        {/* Resume Button (Vibrant Yellow Accent) */}
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View and Download Resume"
          className="group flex h-8 sm:h-[34px] items-center gap-1 sm:gap-1.5 rounded-full bg-[#FECE12] hover:bg-[#F3C400] text-[#0A0A0A] font-semibold px-2 sm:px-3.5 text-[11px] sm:text-[12px] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xs cursor-pointer shrink-0"
        >
          <FileText className="size-[12px] sm:size-[13px] stroke-[2.2] text-[#0A0A0A]" />
          <span className="max-[370px]:hidden">Resume</span>
          <ArrowUpRight className="size-[11px] sm:size-[12px] stroke-[2.4] opacity-75 group-hover:opacity-100 transition-opacity text-[#0A0A0A] hidden sm:inline" />
        </a>
      </div>
    </header>
  );
}
