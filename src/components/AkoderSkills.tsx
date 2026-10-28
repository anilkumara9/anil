import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  num: string;
  category: string;
  skills: TechItem[];
}

/* Authentic, pixel-perfect brand SVG icons - Larger & Prominent (20px w-5 h-5) */
const TechIcons = {
  python: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <path d="M11.91 2C6.54 2 6.88 4.33 6.88 4.33L6.89 6.75H12V7.5H4.28S2 7.24 2 12.61c0 5.38 1.99 5.17 1.99 5.17h1.19v-1.67s-.06-1.99 1.96-1.99h5.18s1.86.03 1.86-1.83V7.12S14.54 2 11.91 2zM9.54 3.73a.85.85 0 110 1.7.85.85 0 010-1.7z" fill="#3776AB"/>
      <path d="M12.09 22c5.37 0 5.03-2.33 5.03-2.33l-.01-2.42H12v-.75h7.72s2.28.26 2.28-5.11c0-5.38-1.99-5.17-1.99-5.17h-1.19v1.67s.06 1.99-1.96 1.99h-5.18s-1.86-.03-1.86 1.83v5.17S9.46 22 12.09 22zm2.37-1.73a.85.85 0 110-1.7.85.85 0 010 1.7z" fill="#FFD43B"/>
    </svg>
  ),
  java: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <path d="M9 19c3 1 7 .5 8.5 0-.5.6-2 1-3.5 1-2 0-4-.4-5-1z" fill="#E76F00"/>
      <path d="M8 16.5c3.5 1 7.5.5 9 0-.8.6-2.5 1-4.5 1-2 0-3.5-.4-4.5-1z" fill="#5382A1"/>
      <path d="M12 3c1.5 1.5-.5 3 0 4.5 1-1.5 2-2 0-4.5zM14.5 5c.8 1-.5 2 0 3 .8-1 1.5-1.5 0-3z" stroke="#E76F00" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M7 14c4 1 9 .8 11 0 .5-.2-.5-1-1.8-1.2 1.2-.2 2-.5.8-.8-2-.3-5-.4-7 0-2 .3-2.5.8-3 2z" fill="#5382A1"/>
    </svg>
  ),
  c: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect width="24" height="24" rx="4.5" fill="#00599C"/>
      <path d="M16 8a5.5 5.5 0 100 8" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect width="24" height="24" rx="4.5" fill="#3178C6" />
      <path d="M11.75 14.1c-.26.8-.75 1.4-1.46 1.8-.7.4-1.6.6-2.68.6-1.07 0-1.97-.24-2.7-.72-.73-.48-1.24-1.15-1.54-2.02l2.08-.85c.16.53.43.94.8 1.23.38.29.84.44 1.38.44.57 0 1.02-.12 1.35-.37.33-.25.5-.58.5-1 0-.32-.11-.58-.33-.8-.22-.21-.57-.4-1.05-.56l-1.44-.49c-.93-.32-1.63-.75-2.1-1.3-.47-.54-.7-1.22-.7-2.03 0-.96.38-1.75 1.14-2.37.76-.62 1.74-.93 2.94-.93 1.02 0 1.88.22 2.58.66.7.44 1.18 1.05 1.44 1.83l-2 .87c-.15-.43-.39-.76-.72-.99-.33-.23-.74-.34-1.23-.34-.52 0-.94.12-1.26.36-.32.24-.48.55-.48.93 0 .3.11.55.33.74.22.19.57.36 1.05.52l1.4.48c.96.33 1.68.78 2.16 1.35.48.57.72 1.25.72 2.06zm9.25-5.9h-3.4v10.8h-2.4V8.2h-3.4V6h9.2v2.2z" fill="#FFFFFF"/>
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect width="24" height="24" rx="4.5" fill="#F7DF1E"/>
      <path d="M7 17.5v-2c.6.8 1.4 1.2 2.3 1.2 1.1 0 1.8-.6 1.8-1.5v-7h2.2v7c0 1.3-.5 2.2-1.4 2.8-.9.6-2 .8-3.2.8-1.8 0-3.1-.6-3.9-1.3zm8.3 0c-.8-.5-1.3-1.2-1.5-2.1l2.1-.6c.1.6.4 1 .8 1.3.4.3.9.4 1.5.4.6 0 1.1-.1 1.4-.4.3-.3.5-.6.5-1 0-.4-.2-.7-.5-.9-.3-.2-.8-.4-1.5-.6l-1.3-.4c-.9-.3-1.6-.7-2-1.2-.4-.5-.6-1.1-.6-1.8 0-.9.4-1.7 1.1-2.2.7-.5 1.7-.8 2.8-.8 1 0 1.9.2 2.6.7.7.5 1.1 1.1 1.3 1.9l-2 .6c-.1-.4-.3-.7-.6-.9-.3-.2-.7-.3-1.2-.3-.5 0-.9.1-1.2.3-.3.2-.4.5-.4.8 0 .3.1.5.3.7.2.2.6.3 1.1.5l1.4.4c1 .3 1.7.8 2.1 1.3.4.5.6 1.2.6 1.9 0 1-.4 1.8-1.1 2.3-.7.5-1.7.8-3 .8-1.2 0-2.2-.3-2.9-.8z" fill="#000000"/>
    </svg>
  ),
  golang: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <circle cx="12" cy="12" r="10" fill="#00ADD8" opacity="0.15" stroke="#00ADD8" strokeWidth="1.6"/>
      <path d="M6 12a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zm6 0h2.5M16 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" stroke="#38BDF8" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  sql: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <ellipse cx="12" cy="6" rx="8" ry="3" fill="#3B82F6" opacity="0.25" stroke="#3B82F6" strokeWidth="1.6"/>
      <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" stroke="#3B82F6" strokeWidth="1.6"/>
      <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" stroke="#3B82F6" strokeWidth="1.6"/>
    </svg>
  ),
  react: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <circle cx="12" cy="12" r="11" fill="#000000" stroke="#52525B" strokeWidth="1.4"/>
      <path d="M15.5 8v8M8.5 8v8l8.2-9.6" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2.1-1.2 3.3-.9 1 .3 1.8 1.1 2.6 2 1.3 1.3 2.8 2.8 6.6 2.8 2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.2-3.3.9-1-.3-1.8-1.1-2.6-2-1.3-1.3-2.8-2.8-6.6-2.8zM4.5 13.5C2.1 13.5.6 14.7 0 17.1c1-.9 2.1-1.2 3.3-.9 1 .3 1.8 1.1 2.6 2 1.3 1.3 2.8 2.8 6.6 2.8 2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.2-3.3.9-1-.3-1.8-1.1-2.6-2-1.3-1.3-2.8-2.8-6.6-2.8z" fill="#06B6D4"/>
    </svg>
  ),
  shadcn: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect width="24" height="24" rx="4.5" fill="#09090B" stroke="#27272A" strokeWidth="1.2"/>
      <path d="M17 7L7 17" stroke="#FAFAFA" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  tanstack: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <circle cx="12" cy="12" r="3.2" fill="#E4E4E7"/>
      <circle cx="12" cy="5.5" r="2.2" stroke="#E4E4E7" strokeWidth="1.5"/>
      <circle cx="12" cy="18.5" r="2.2" stroke="#E4E4E7" strokeWidth="1.5"/>
      <circle cx="5.5" cy="12" r="2.2" stroke="#E4E4E7" strokeWidth="1.5"/>
      <circle cx="18.5" cy="12" r="2.2" stroke="#E4E4E7" strokeWidth="1.5"/>
      <circle cx="7.4" cy="7.4" r="1.8" stroke="#E4E4E7" strokeWidth="1.3"/>
      <circle cx="16.6" cy="7.4" r="1.8" stroke="#E4E4E7" strokeWidth="1.3"/>
      <circle cx="7.4" cy="16.6" r="1.8" stroke="#E4E4E7" strokeWidth="1.3"/>
      <circle cx="16.6" cy="16.6" r="1.8" stroke="#E4E4E7" strokeWidth="1.3"/>
    </svg>
  ),
  vite: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <path d="M19.5 3L12 21.5 4.5 3l7.5 4.5L19.5 3z" fill="#646CFF" opacity="0.35" stroke="#646CFF" strokeWidth="1.5"/>
      <path d="M13 7l-5 7h4l-1 5 6-8h-4l1-4z" fill="#FACC15"/>
    </svg>
  ),
  framer: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <path d="M5 2h14v7H12L5 2zm0 7h7l7 7H5V9zm7 7v7l-7-7h7z" fill="#0055FF"/>
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <path d="M12 2l9 5.2v10.4L12 22.8l-9-5.2V7.2L12 2z" fill="#5FA04E" opacity="0.2"/>
      <path d="M12 2l9 5.2v10.4L12 22.8l-9-5.2V7.2L12 2z" stroke="#5FA04E" strokeWidth="1.6"/>
      <path d="M12 7.5a4.5 4.5 0 014.5 4.5c0 2.5-2 4.5-4.5 4.5S7.5 14.5 7.5 12c0-2.5 2-4.5 4.5-4.5z" stroke="#5FA04E" strokeWidth="1.5"/>
    </svg>
  ),
  fastapi: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <circle cx="12" cy="12" r="10" fill="#059669" opacity="0.2" stroke="#059669" strokeWidth="1.5"/>
      <path d="M13 4L6 13h5l-1 7 8-10h-5l1-6z" fill="#10B981"/>
    </svg>
  ),
  trpc: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <path d="M12 2.5L20 7v10l-8 4.5L4 17V7l8-4.5z" stroke="#38BDF8" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M12 2.5v19M4 7l8 5 8-5" stroke="#38BDF8" strokeWidth="1.4" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="2" fill="#38BDF8"/>
    </svg>
  ),
  prisma: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <path d="M12 3l9 16.5H3L12 3z" stroke="#2DD4BF" strokeWidth="1.6" strokeLinejoin="round" fill="#2DD4BF" fillOpacity="0.15"/>
      <path d="M12 3v16.5M7.5 11.25L12 19.5" stroke="#2DD4BF" strokeWidth="1.3"/>
    </svg>
  ),
  betterAuth: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect x="4" y="5" width="4.5" height="14" rx="1.5" fill="#F4F4F5"/>
      <rect x="15.5" y="5" width="4.5" height="14" rx="1.5" fill="#F4F4F5"/>
      <rect x="4" y="9.75" width="16" height="4.5" rx="1" fill="#F4F4F5"/>
    </svg>
  ),
  express: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect width="24" height="24" rx="4.5" fill="#18181B" stroke="#27272A" strokeWidth="1.2"/>
      <path d="M6 15l4-6M10 15l-4-6M14 9h4v2h-4v2h4M14 15h4" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  rest: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <circle cx="12" cy="12" r="10" fill="#3B82F6" opacity="0.15" stroke="#3B82F6" strokeWidth="1.5"/>
      <path d="M7 12h10M13 8l4 4-4 4" stroke="#60A5FA" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  graphql: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <path d="M12 3l8 4.6v9.2L12 21.4l-8-4.6V7.6L12 3z" stroke="#E10098" strokeWidth="1.5"/>
      <path d="M12 3l8 13.8H4L12 3z" stroke="#E10098" strokeWidth="1.3"/>
      <circle cx="12" cy="3" r="1.8" fill="#F472B6"/>
      <circle cx="20" cy="7.6" r="1.8" fill="#F472B6"/>
      <circle cx="20" cy="16.8" r="1.8" fill="#F472B6"/>
      <circle cx="12" cy="21.4" r="1.8" fill="#F472B6"/>
      <circle cx="4" cy="16.8" r="1.8" fill="#F472B6"/>
      <circle cx="4" cy="7.6" r="1.8" fill="#F472B6"/>
    </svg>
  ),
  websockets: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect width="24" height="24" rx="4.5" fill="#1E1B2E" stroke="#3B355A" strokeWidth="1.2"/>
      <path d="M4 12h2M8 8v8M12 4v16M16 7v10M20 12h-2" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  cursor: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <path d="M12 2.5L20.5 7.5v9L12 21.5 3.5 16.5v-9L12 2.5z" stroke="#E4E4E7" strokeWidth="1.7" strokeLinejoin="round"/>
      <path d="M12 2.5v19M3.5 7.5L12 12.5l8.5-5" stroke="#E4E4E7" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  aisdk: (
    <svg viewBox="0 0 28 20" className="w-6 h-4.5 shrink-0" fill="none">
      <rect width="28" height="20" rx="3.5" fill="#18181B" stroke="#3F3F46" strokeWidth="1"/>
      <text x="14" y="13.5" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold">AI SDK</text>
    </svg>
  ),
  claude: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <path d="M12 2.5v19M2.5 12h19M5.3 5.3l13.4 13.4M18.7 5.3L5.3 18.7" stroke="#D97706" strokeWidth="2.3" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="2.2" fill="#F59E0B"/>
    </svg>
  ),
  pytorch: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <path d="M13.5 2.5a.7.7 0 00-.9.2l-1.3 1.8A7.8 7.8 0 1018.6 15l-1.6-.9a6.2 6.2 0 11-4.8-10.4l1-1a.7.7 0 00.3-.2z" fill="#EE4C2C"/>
      <circle cx="15.8" cy="6.2" r="1.5" fill="#EE4C2C"/>
    </svg>
  ),
  huggingface: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <circle cx="12" cy="12" r="10" fill="#FFD21E"/>
      <path d="M8.5 10a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4zm7 0a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" fill="#000000"/>
      <path d="M12 16.5c-2.3 0-3.8-1.5-4.2-2.3-.2-.3.1-.7.5-.6 2.2.8 5.2.8 7.4 0 .4-.1.7.3.5.6-.4.8-1.9 2.3-4.2 2.3z" fill="#000000"/>
    </svg>
  ),
  langchain: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect x="2" y="4" width="20" height="16" rx="4" fill="#059669" opacity="0.15" stroke="#10B981" strokeWidth="1.5"/>
      <circle cx="8" cy="12" r="2.5" fill="#10B981"/>
      <circle cx="16" cy="12" r="2.5" fill="#34D399"/>
      <path d="M10.5 12h3" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  rag: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#DC2626" opacity="0.15" stroke="#DC2626" strokeWidth="1.5"/>
      <circle cx="8" cy="8" r="2" fill="#F87171"/>
      <circle cx="16" cy="16" r="2" fill="#F87171"/>
      <path d="M8 8l8 8" stroke="#F87171" strokeWidth="1.5" strokeDasharray="2 2"/>
    </svg>
  ),
  agents: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <circle cx="12" cy="12" r="10" fill="#8B5CF6" opacity="0.15" stroke="#8B5CF6" strokeWidth="1.5"/>
      <circle cx="9" cy="11" r="1.5" fill="#A78BFA"/>
      <circle cx="15" cy="11" r="1.5" fill="#A78BFA"/>
      <path d="M9 16c1.5 1 4.5 1 6 0" stroke="#C4B5FD" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 2v2M12 20v2" stroke="#8B5CF6" strokeWidth="1.5"/>
    </svg>
  ),
  mcp: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="#8B5CF6" opacity="0.15" stroke="#8B5CF6" strokeWidth="1.5"/>
      <circle cx="8" cy="8" r="2.3" fill="#A78BFA" />
      <circle cx="16" cy="8" r="2.3" fill="#A78BFA" />
      <circle cx="12" cy="16" r="2.3" fill="#C4B5FD" />
      <path d="M8 8l4 8 4-8" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  pytest: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect width="24" height="24" rx="4.5" fill="#0A9EDC" opacity="0.2" stroke="#0A9EDC" strokeWidth="1.5"/>
      <path d="M12 4l6 10H6l6-10z" fill="#0A9EDC"/>
      <path d="M12 16l3 4H9l3-4z" fill="#FACC15"/>
    </svg>
  ),
  vitest: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <path d="M19 4L12 21 5 4l7 3.5L19 4z" fill="#729B1B" opacity="0.25" stroke="#729B1B" strokeWidth="1.5"/>
      <path d="M12 7.5L8 15h4l-1 4 5-7h-4l1-4.5z" fill="#FCC72B"/>
    </svg>
  ),
  playwright: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect width="24" height="24" rx="4.5" fill="#2EAD33" opacity="0.2" stroke="#2EAD33" strokeWidth="1.5"/>
      <circle cx="8" cy="11" r="2.2" fill="#4ADE80"/>
      <circle cx="16" cy="11" r="2.2" fill="#4ADE80"/>
      <path d="M8 15c2 2 6 2 8 0" stroke="#4ADE80" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
  tdd: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#10B981" strokeWidth="1.5" fill="#10B981" opacity="0.15"/>
      <path d="M8 12l3 3 5-5" stroke="#34D399" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  pandas: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect width="24" height="24" rx="4.5" fill="#150458"/>
      <path d="M8 5v14M12 9v10M16 5v14" stroke="#FFD43B" strokeWidth="2.3" strokeLinecap="round"/>
      <path d="M6 12h12" stroke="#E70488" strokeWidth="2.1" strokeLinecap="round"/>
    </svg>
  ),
  numpy: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect width="24" height="24" rx="4.5" fill="#013243"/>
      <path d="M7 6v12l10-12v12" stroke="#4DABCF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  scikit: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <circle cx="9" cy="12" r="5.5" fill="#F89939" opacity="0.85"/>
      <circle cx="15" cy="12" r="5.5" fill="#3499CD" opacity="0.85"/>
    </svg>
  ),
  xgboost: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <circle cx="12" cy="12" r="10" fill="#16A34A" opacity="0.15" stroke="#16A34A" strokeWidth="1.5"/>
      <path d="M12 4v16M6 10l6-6 6 6M6 16l6-6 6 6" stroke="#22C55E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <circle cx="12" cy="12" r="10" fill="#4169E1" opacity="0.15" stroke="#4169E1" strokeWidth="1.5"/>
      <path d="M16 11c0-3-1.8-5-4-5s-4 2-4 5c0 3 1.5 5 3 6l1 2 1-2c1.5-1 3-3 3-6z" stroke="#60A5FA" strokeWidth="1.5"/>
      <path d="M9 13c-1.5 0-2.5.5-2.5 1.5S7.5 16 9 16M15 13c1.5 0 2.5.5 2.5 1.5s-1 1.5-2.5 1.5" stroke="#60A5FA" strokeWidth="1.3"/>
    </svg>
  ),
  redis: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <path d="M3 8.5L12 4l9 4.5-9 4.5-9-4.5z" fill="#DC382D" opacity="0.9"/>
      <path d="M3 12.5L12 8l9 4.5-9 4.5-9-4.5z" fill="#B91C1C" opacity="0.7"/>
      <path d="M3 16.5L12 12l9 4.5-9 4.5-9-4.5z" fill="#991B1B" opacity="0.5"/>
      <path d="M3 8.5v8L12 21v-8L3 8.5z" stroke="#DC382D" strokeWidth="1.3"/>
      <path d="M21 8.5v8L12 21v-8l9-4.5z" stroke="#DC382D" strokeWidth="1.3"/>
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <path d="M12 2C8 7 6 12 7 16c1 4 4 6 5 6s4-2 5-6c1-4-1-9-5-14z" fill="#47A248" opacity="0.3"/>
      <path d="M12 2C8 7 6 12 7 16c1 4 4 6 5 6s4-2 5-6c1-4-1-9-5-14z" stroke="#47A248" strokeWidth="1.5"/>
      <path d="M12 2v20" stroke="#47A248" strokeWidth="1.3"/>
    </svg>
  ),
  mysql: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect width="24" height="24" rx="4.5" fill="#00618A" opacity="0.2" stroke="#00618A" strokeWidth="1.5"/>
      <path d="M6 15c3-1 6-4 8-8 2 3 4 7 4 9-2 2-6 2-12-1z" fill="#E48E00"/>
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <path d="M3 13.5c.8-3 3.5-4.5 7-4.5 4.5 0 8.5 2 10.5 5.5-2.5 1.5-6.5 1.5-9 0-2.5 1.5-6.5 1.5-8.5-1z" fill="#2496ED" opacity="0.2"/>
      <path d="M22 13c-.5-3.5-3.5-5.5-7.5-5.5-1 0-2 .2-2.8.5V6H9v2H6V6H3.5v5.5C1.5 13 1 15 2 17c2 3.5 7 4 11 4 5.5 0 9.5-2.5 10-6 .5-.2.8-.5 1-.8-.5-.5-1.2-.8-2-1.2z" stroke="#2496ED" strokeWidth="1.5"/>
      <rect x="5.5" y="9.5" width="2" height="1.8" fill="#2496ED" rx="0.3"/>
      <rect x="8.5" y="9.5" width="2" height="1.8" fill="#2496ED" rx="0.3"/>
      <rect x="11.5" y="9.5" width="2" height="1.8" fill="#2496ED" rx="0.3"/>
    </svg>
  ),
  kubernetes: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <circle cx="12" cy="12" r="10" fill="#326CE5" opacity="0.15" stroke="#326CE5" strokeWidth="1.5"/>
      <path d="M12 4l6.5 3.8v7.4L12 19l-6.5-3.8V7.8L12 4z" stroke="#326CE5" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="2" fill="#60A5FA"/>
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect width="24" height="24" rx="4.5" fill="#232F3E"/>
      <path d="M6 15c3.5 2 8.5 2 12 0" stroke="#FF9900" strokeWidth="1.9" strokeLinecap="round"/>
      <path d="M17 13.8l1.6 1.4-1.8.8" stroke="#FF9900" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.5 9h2l1.5 4 1.5-4h2" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  gcp: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <circle cx="12" cy="12" r="10" fill="#1A1C23" stroke="#333544" strokeWidth="1.3"/>
      <path d="M7 14.5a3.5 3.5 0 011-6.8 4 4 0 017.5 0 3.5 3.5 0 011 6.8H7z" fill="#4285F4" opacity="0.3" stroke="#4285F4" strokeWidth="1.4"/>
      <circle cx="14" cy="10" r="1.5" fill="#EA4335"/>
      <circle cx="10" cy="13" r="1.5" fill="#34A853"/>
      <circle cx="15" cy="13" r="1.5" fill="#FBBC05"/>
    </svg>
  ),
  linux: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <path d="M12 3c-2.5 0-4 2-4 4.5 0 1 .3 2.5 0 4-1 1-2 2.5-2 4.5 0 3 2.5 4 4.5 4s2-.5 3.5-.5 1.5.5 3.5.5 4.5-1 4.5-4c0-2-1-3.5-2-4.5-.3-1.5 0-3 0-4C16 5 14.5 3 12 3z" fill="#FCC624" opacity="0.25" stroke="#FCC624" strokeWidth="1.5"/>
      <circle cx="10" cy="7" r="1" fill="#FFFFFF"/>
      <circle cx="14" cy="7" r="1" fill="#FFFFFF"/>
      <path d="M11 9c.5.5 1.5.5 2 0" stroke="#FCC624" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="4.5" fill="#F05032" opacity="0.15" stroke="#F05032" strokeWidth="1.5"/>
      <circle cx="8" cy="8" r="2.2" fill="#F87171"/>
      <circle cx="16" cy="12" r="2.2" fill="#F87171"/>
      <circle cx="8" cy="16" r="2.2" fill="#F87171"/>
      <path d="M8 10v4M8 8l8 4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  security: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <path d="M12 3l8 3.5v5.5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6.5L12 3z" fill="#10B981" opacity="0.2" stroke="#10B981" strokeWidth="1.5"/>
      <path d="M9 12l2 2 4-4" stroke="#34D399" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  dp: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="3.5" fill="#8B5CF6" opacity="0.18" stroke="#8B5CF6" strokeWidth="1.6"/>
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" stroke="#A78BFA" strokeWidth="1.2" opacity="0.4"/>
      <path d="M6 6l6 6 6-3" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="18" cy="9" r="1.8" fill="#FDE047"/>
    </svg>
  ),
  graph: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <circle cx="6" cy="6" r="2.8" fill="#3B82F6" stroke="#60A5FA" strokeWidth="1.5"/>
      <circle cx="18" cy="7" r="2.8" fill="#3B82F6" stroke="#60A5FA" strokeWidth="1.5"/>
      <circle cx="7" cy="18" r="2.8" fill="#3B82F6" stroke="#60A5FA" strokeWidth="1.5"/>
      <circle cx="18" cy="17" r="2.8" fill="#10B981" stroke="#34D399" strokeWidth="1.5"/>
      <path d="M8.5 7l7 1M7.5 8.5l1 7M15.5 17H9.5M16 9.5l1.5 5" stroke="#93C5FD" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  trees: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <circle cx="12" cy="5" r="2.6" fill="#10B981" stroke="#34D399" strokeWidth="1.4"/>
      <circle cx="6" cy="12" r="2.4" fill="#059669" stroke="#34D399" strokeWidth="1.4"/>
      <circle cx="18" cy="12" r="2.4" fill="#059669" stroke="#34D399" strokeWidth="1.4"/>
      <circle cx="4" cy="19" r="1.8" fill="#047857" stroke="#6EE7B7" strokeWidth="1.2"/>
      <circle cx="8" cy="19" r="1.8" fill="#047857" stroke="#6EE7B7" strokeWidth="1.2"/>
      <circle cx="16" cy="19" r="1.8" fill="#047857" stroke="#6EE7B7" strokeWidth="1.2"/>
      <circle cx="20" cy="19" r="1.8" fill="#047857" stroke="#6EE7B7" strokeWidth="1.2"/>
      <path d="M10 6.5l-2.5 3.5M14 6.5l2.5 3.5M5 14l-1 3M7 14l1 3M17 14l-1 3M19 14l1 3" stroke="#6EE7B7" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  heap: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <path d="M12 3l9 16.5H3L12 3z" fill="#F59E0B" opacity="0.18" stroke="#F59E0B" strokeWidth="1.6" strokeLinejoin="round"/>
      <circle cx="12" cy="8.5" r="2.2" fill="#FBBF24"/>
      <circle cx="8" cy="15" r="2" fill="#FBBF24"/>
      <circle cx="16" cy="15" r="2" fill="#FBBF24"/>
      <path d="M10.5 10L9 13.5M13.5 10L15 13.5" stroke="#FDE68A" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  slidingWindow: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect x="3" y="6" width="18" height="12" rx="2.5" stroke="#64748B" strokeWidth="1.4"/>
      <rect x="7" y="5" width="8" height="14" rx="2" fill="#06B6D4" opacity="0.25" stroke="#06B6D4" strokeWidth="1.8"/>
      <path d="M9 12h4M12 10l2 2-2 2" stroke="#22D3EE" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="5" cy="12" r="1" fill="#94A3B8"/>
      <circle cx="19" cy="12" r="1" fill="#94A3B8"/>
    </svg>
  ),
  backtracking: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <circle cx="12" cy="12" r="10" fill="#EC4899" opacity="0.15" stroke="#EC4899" strokeWidth="1.5"/>
      <path d="M9 10l-3 3 3 3" stroke="#F472B6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 13h9a3 3 0 003-3v0a3 3 0 00-3-3H9" stroke="#F472B6" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
  dsu: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <circle cx="7" cy="12" r="4.8" fill="#6366F1" opacity="0.25" stroke="#6366F1" strokeWidth="1.5"/>
      <circle cx="17" cy="12" r="4.8" fill="#A855F7" opacity="0.25" stroke="#A855F7" strokeWidth="1.5"/>
      <path d="M12 8.5v7" stroke="#C084FC" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2 2"/>
    </svg>
  ),
  greedy: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <circle cx="12" cy="12" r="10" fill="#EAB308" opacity="0.15" stroke="#EAB308" strokeWidth="1.5"/>
      <path d="M13 3l-6 11h5l-1 7 7-11h-5l1-7z" fill="#FACC15"/>
    </svg>
  ),
  bitmask: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="3.5" fill="#0EA5E9" opacity="0.15" stroke="#0EA5E9" strokeWidth="1.5"/>
      <path d="M6 14V10l-1 1M11 10a2 2 0 100 4 2 2 0 000-4zM16 14V10l-1 1" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  monotonicStack: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect x="4" y="16" width="16" height="4" rx="1.5" fill="#F97316" opacity="0.85"/>
      <rect x="6" y="11" width="12" height="4" rx="1.5" fill="#FB923C" opacity="0.85"/>
      <rect x="8" y="6" width="8" height="4" rx="1.5" fill="#FDBA74" opacity="0.85"/>
      <path d="M19 7l2 2-2 2" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  osKernel: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <circle cx="12" cy="12" r="9.5" fill="#3B82F6" opacity="0.15" stroke="#3B82F6" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="3.5" fill="#1D4ED8" stroke="#60A5FA" strokeWidth="1.4"/>
      <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8" stroke="#60A5FA" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  multithreading: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="#64748B" strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="8" cy="6" r="2.5" fill="#10B981"/>
      <circle cx="16" cy="12" r="2.5" fill="#3B82F6"/>
      <circle cx="10" cy="18" r="2.5" fill="#F59E0B"/>
    </svg>
  ),
  scheduling: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="3.5" fill="#6366F1" opacity="0.18" stroke="#6366F1" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="5" stroke="#818CF8" strokeWidth="1.4"/>
      <path d="M12 9.5v2.8l2 1.2" stroke="#C7D2FE" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  syncLocks: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect x="5" y="10" width="14" height="11" rx="2.5" fill="#EF4444" opacity="0.2" stroke="#EF4444" strokeWidth="1.5"/>
      <path d="M8 10V7a4 4 0 118 0v3" stroke="#F87171" strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="12" cy="15" r="1.5" fill="#FCA5A5"/>
    </svg>
  ),
  virtualMemory: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect x="4" y="4" width="16" height="7" rx="1.5" fill="#14B8A6" opacity="0.2" stroke="#14B8A6" strokeWidth="1.4"/>
      <rect x="4" y="13" width="16" height="7" rx="1.5" fill="#0F766E" opacity="0.25" stroke="#14B8A6" strokeWidth="1.4"/>
      <path d="M7 7.5h3M14 7.5h3M7 16.5h3M14 16.5h3" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  fileSystem: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <path d="M3 6.5A2.5 2.5 0 015.5 4H9l2 2.5h7.5A2.5 2.5 0 0121 9v9.5a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 18.5V6.5z" fill="#F59E0B" opacity="0.2" stroke="#F59E0B" strokeWidth="1.5"/>
      <path d="M7 13h10M7 17h6" stroke="#FCD34D" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  ipc: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect x="3" y="4" width="7" height="7" rx="1.5" fill="#8B5CF6" opacity="0.25" stroke="#8B5CF6" strokeWidth="1.4"/>
      <rect x="14" y="13" width="7" height="7" rx="1.5" fill="#8B5CF6" opacity="0.25" stroke="#8B5CF6" strokeWidth="1.4"/>
      <path d="M10 7.5h5a2 2 0 012 2V13M14 16.5H9a2 2 0 01-2-2V11" stroke="#A78BFA" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  networking: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <rect x="9" y="3" width="6" height="5" rx="1.5" stroke="#38BDF8" strokeWidth="1.4"/>
      <rect x="3" y="16" width="6" height="5" rx="1.5" stroke="#38BDF8" strokeWidth="1.4"/>
      <rect x="15" y="16" width="6" height="5" rx="1.5" stroke="#38BDF8" strokeWidth="1.4"/>
      <path d="M12 8v4M6 16v-2h12v2M12 12h0" stroke="#7DD3FC" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  dbmsInternals: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <ellipse cx="12" cy="5" rx="7" ry="2.5" fill="#0284C7" opacity="0.3" stroke="#0284C7" strokeWidth="1.5"/>
      <path d="M5 5v14c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5" stroke="#0284C7" strokeWidth="1.5"/>
      <path d="M5 10c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5M5 15c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" stroke="#38BDF8" strokeWidth="1.3"/>
    </svg>
  )
};

export const RESUME_STACK: SkillCategory[] = [
  {
    num: "01",
    category: "Language",
    skills: [
      { name: "TypeScript", icon: TechIcons.typescript },
      { name: "JavaScript", icon: TechIcons.javascript },
      { name: "Python", icon: TechIcons.python },
      { name: "Java", icon: TechIcons.java },
      { name: "C", icon: TechIcons.c },
      { name: "Go (Basic)", icon: TechIcons.golang },
      { name: "SQL", icon: TechIcons.sql }
    ]
  },
  {
    num: "02",
    category: "Data Structures & Algorithms",
    skills: [
      { name: "Dynamic Programming", icon: TechIcons.dp },
      { name: "Graphs", icon: TechIcons.graph },
      { name: "Binary Trees", icon: TechIcons.trees },
      { name: "Heaps", icon: TechIcons.heap },
      { name: "Trie", icon: TechIcons.trees },
      { name: "Segment Trees", icon: TechIcons.trees },
      { name: "Sliding Window", icon: TechIcons.slidingWindow },
      { name: "Two Pointers", icon: TechIcons.slidingWindow },
      { name: "Backtracking", icon: TechIcons.backtracking },
      { name: "Greedy Algorithms", icon: TechIcons.greedy },
      { name: "Union-Find (DSU)", icon: TechIcons.dsu },
      { name: "Bit Manipulation", icon: TechIcons.bitmask },
      { name: "Monotonic Stack", icon: TechIcons.monotonicStack }
    ]
  },
  {
    num: "03",
    category: "Operating Systems",
    skills: [
      { name: "Linux", icon: TechIcons.linux },
      { name: "Process Scheduling", icon: TechIcons.scheduling },
      { name: "Multithreading", icon: TechIcons.multithreading },
      { name: "Concurrency", icon: TechIcons.multithreading },
      { name: "Mutex & Semaphores", icon: TechIcons.syncLocks },
      { name: "Virtual Memory", icon: TechIcons.virtualMemory },
      { name: "Paging & TLB", icon: TechIcons.virtualMemory },
      { name: "File Systems", icon: TechIcons.fileSystem },
      { name: "System Calls", icon: TechIcons.osKernel },
      { name: "IPC & Pipes", icon: TechIcons.ipc },
      { name: "TCP/IP & Sockets", icon: TechIcons.networking },
      { name: "Deadlock Prevention", icon: TechIcons.syncLocks }
    ]
  },
  {
    num: "04",
    category: "Frontend",
    skills: [
      { name: "Next.js", icon: TechIcons.nextjs },
      { name: "React", icon: TechIcons.react },
      { name: "Tailwind CSS", icon: TechIcons.tailwind },
      { name: "shadcn/ui", icon: TechIcons.shadcn },
      { name: "TanStack", icon: TechIcons.tanstack },
      { name: "Vite", icon: TechIcons.vite },
      { name: "Framer Motion", icon: TechIcons.framer }
    ]
  },
  {
    num: "05",
    category: "Backend",
    skills: [
      { name: "TRPC", icon: TechIcons.trpc },
      { name: "Prisma", icon: TechIcons.prisma },
      { name: "better-auth", icon: TechIcons.betterAuth },
      { name: "Node.js", icon: TechIcons.nodejs },
      { name: "FastAPI", icon: TechIcons.fastapi },
      { name: "Express.js", icon: TechIcons.express },
      { name: "REST APIs", icon: TechIcons.rest },
      { name: "GraphQL", icon: TechIcons.graphql },
      { name: "WebSockets", icon: TechIcons.websockets }
    ]
  },
  {
    num: "06",
    category: "Workflow & AI",
    skills: [
      { name: "Cursor", icon: TechIcons.cursor },
      { name: "AI SDK", icon: TechIcons.aisdk },
      { name: "Claude", icon: TechIcons.claude },
      { name: "PyTorch", icon: TechIcons.pytorch },
      { name: "Hugging Face", icon: TechIcons.huggingface },
      { name: "LangChain", icon: TechIcons.langchain },
      { name: "RAG & Vector DBs", icon: TechIcons.rag },
      { name: "AI Agents", icon: TechIcons.agents },
      { name: "MCP", icon: TechIcons.mcp }
    ]
  },
  {
    num: "07",
    category: "Testing",
    skills: [
      { name: "Pytest", icon: TechIcons.pytest },
      { name: "Vitest", icon: TechIcons.vitest },
      { name: "Playwright", icon: TechIcons.playwright },
      { name: "TDD", icon: TechIcons.tdd }
    ]
  },
  {
    num: "08",
    category: "Machine Learning & Data",
    skills: [
      { name: "Pandas", icon: TechIcons.pandas },
      { name: "NumPy", icon: TechIcons.numpy },
      { name: "Scikit-learn", icon: TechIcons.scikit },
      { name: "XGBoost", icon: TechIcons.xgboost }
    ]
  },
  {
    num: "09",
    category: "Cloud & DevOps",
    skills: [
      { name: "PostgreSQL", icon: TechIcons.postgresql },
      { name: "Redis", icon: TechIcons.redis },
      { name: "MongoDB", icon: TechIcons.mongodb },
      { name: "MySQL & SQLite", icon: TechIcons.mysql },
      { name: "AWS", icon: TechIcons.aws },
      { name: "GCP", icon: TechIcons.gcp },
      { name: "Docker", icon: TechIcons.docker },
      { name: "Kubernetes", icon: TechIcons.kubernetes },
      { name: "Linux", icon: TechIcons.linux },
      { name: "Git & GitHub", icon: TechIcons.git }
    ]
  },
  {
    num: "10",
    category: "Security",
    skills: [
      { name: "AI Agent Security", icon: TechIcons.security },
      { name: "Prompt Injection Defense", icon: TechIcons.security },
      { name: "Secret Redaction", icon: TechIcons.security },
      { name: "JWT & Auth", icon: TechIcons.security }
    ]
  }
];

const RESUME_DRIVE_URL = "https://drive.google.com/file/d/1C_JAbG5rhGSdrsy8sGT8kT9f5FdH0qU2/view?usp=sharing";

export default function AkoderSkills() {
  // Initially only '01' (Language) is open on mount/refresh
  const [openCategoryIds, setOpenCategoryIds] = useState<string[]>(['01']);

  const toggleCategory = (catNum: string) => {
    setOpenCategoryIds(prev =>
      prev.includes(catNum) ? prev.filter(id => id !== catNum) : [...prev, catNum]
    );
  };

  return (
    <section id="skills" className="relative px-4 sm:px-8 py-10 sm:py-14 scroll-mt-20">
      {/* Clean Section Title + Expand/Collapse All */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[20px] sm:text-[22px] font-medium text-[#F4F4F5] tracking-tight">
          Skills &amp; Technologies
        </h2>
        <button
          type="button"
          onClick={() => {
            if (openCategoryIds.length === RESUME_STACK.length) {
              setOpenCategoryIds([]);
            } else {
              setOpenCategoryIds(RESUME_STACK.map(s => s.num));
            }
          }}
          className="text-[12px] font-mono text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer select-none"
        >
          {openCategoryIds.length === RESUME_STACK.length ? 'Collapse all' : 'Expand all'}
        </button>
      </div>

      {/* Outside Hand-drawn Note, Resume Cutout Sticker & Sketched Curved Arrow on RIGHT SIDE in gutter */}
      <div
        aria-hidden="true"
        className="absolute -right-36 sm:-right-48 md:-right-56 lg:-right-64 xl:-right-72 top-8 sm:top-10 md:top-12 lg:top-14 z-20 select-none hidden xl:flex flex-col items-start rotate-[2deg] pointer-events-none"
      >
        {/* Resume Cutout Sticker */}
        <a
          href={RESUME_DRIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:scale-105 hover:rotate-0 transition-transform duration-300 pointer-events-auto mb-2 flex flex-col items-start"
          title="Open Meda Anilkumar's Complete Resume (Google Drive PDF)"
        >
          <img
            src="/resume.png"
            alt="Meda Anilkumar Resume Notebook"
            className="w-24 sm:w-28 md:w-34 lg:w-40 xl:w-44 h-auto object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.85)] rotate-[3deg] hover:rotate-0 transition-transform duration-300"
          />
        </a>

        {/* Handwritten text in Caveat script font */}
        <a
          href={RESUME_DRIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto group font-['Caveat',_'Shantell_Sans',_cursive] text-[18px] sm:text-[21px] lg:text-[24px] text-zinc-100 leading-tight font-medium tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] text-left whitespace-nowrap hover:text-amber-300 transition-colors"
        >
          <div>More in Resume 📄</div>
          <div className="text-[14px] sm:text-[17px] lg:text-[19px] text-zinc-300 -mt-0.5">
            Click to open PDF ✨
          </div>
        </a>

        {/* Sketched Hand-drawn Curving Arrow pointing down-left across border into Skills table */}
        <svg 
          width="52" 
          height="46" 
          viewBox="0 0 52 46" 
          fill="none" 
          className="text-zinc-300 drop-shadow-md mt-1 ml-1"
        >
          <path 
            d="M44 4 C38 18, 24 28, 6 34" 
            stroke="currentColor" 
            strokeWidth="2.4" 
            strokeLinecap="round" 
            fill="none" 
          />
          <path 
            d="M17 26 L6 34 L14 40" 
            stroke="currentColor" 
            strokeWidth="2.4" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </div>

      {/* Rows with Hairline Dividers matching screenshot with Open/Close Collapsible */}
      <div className="divide-y divide-[#18181C] border-y border-[#18181C]">
        {RESUME_STACK.map((group) => {
          const isOpen = openCategoryIds.includes(group.num);
          return (
            <div
              key={group.num}
              className="py-3.5 sm:py-4 transition-colors"
            >
              <div
                onClick={() => toggleCategory(group.num)}
                className="group/row flex items-start justify-between gap-3 sm:gap-6 cursor-pointer select-none"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 flex-1 min-w-0">
                  {/* Left Column: Number + Category Name in Mono Font */}
                  <div className="flex items-center gap-2.5 shrink-0 sm:w-40 md:w-48 pt-1">
                    <span className="font-mono text-[13.5px] text-zinc-300 group-hover/row:text-white transition-colors">
                      {group.num} {group.category}
                    </span>
                    <span className="font-mono text-[11px] text-zinc-500 sm:hidden">
                      ({group.skills.length})
                    </span>
                  </div>

                  {/* Right Column: Clean Pill Badges when open, or preview summary when closed */}
                  {isOpen ? (
                    <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 flex-1 animate-in fade-in duration-150">
                      {group.skills.map((skill) => (
                        <div
                          key={skill.name}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0D0D12] border border-[#202028] hover:border-zinc-500 hover:bg-[#14141B] transition-colors cursor-default select-none shadow-none"
                        >
                          <div className="flex items-center justify-center shrink-0">
                            {skill.icon}
                          </div>
                          <span className="text-[13px] sm:text-[13.5px] font-sans text-zinc-200">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 flex-1 pt-1">
                      <span className="font-mono text-[12px] text-zinc-500 group-hover/row:text-zinc-400">
                        {group.skills.map(s => s.name).slice(0, 4).join(', ')}... ({group.skills.length} skills)
                      </span>
                    </div>
                  )}
                </div>

                {/* Chevron Icon on the far right */}
                <div className="flex items-center gap-1.5 shrink-0 pt-1 text-zinc-400 group-hover/row:text-zinc-200 transition-colors">
                  <div className="w-5 h-5 rounded flex items-center justify-center">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
