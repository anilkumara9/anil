import React, { useState } from 'react';
import { ArrowUpRight, GraduationCap, ChevronDown } from 'lucide-react';

export interface WorkProject {
  id: string;
  title: string;
  shortTitle?: string;
  period: string;
  role: string;
  type: 'flagship' | 'research' | 'hackathon';
  year: '2026' | '2025' | '2024';
  featured: boolean;
  badge: string;
  accentBadge?: boolean;
  tagline: string;
  description: string;
  lldType: string;
  lldMetric: string;
  lldStorage: string;
  lldPattern: string;
  lldFlow: string[];
  bulletPoints: string[];
  deepDive: {
    problem: string;
    architecture: string;
    keyOutcomes: string[];
  };
  stack: string[];
  links: { label: string; url: string; primary?: boolean }[];
}

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: "campuspe",
    title: "CampusPe: AI Engineering Internship",
    shortTitle: "CampusPe",
    period: "Feb 2026 – May 2026",
    role: "AI Intern",
    type: "flagship",
    year: "2026",
    featured: true,
    badge: "AI Intern",
    accentBadge: true,
    tagline: "Generative AI Initiatives, LLM Integration & Production Features",
    description: "Contributed to Generative AI initiatives and collaborated on engineering tasks, including integrating LLM APIs, developing AI-powered features, and debugging application issues. Built full-stack applications and explored new AI approaches from concept to working implementation.",
    lldType: "GENAI INTEGRATION / FULL-STACK",
    lldMetric: "Production GenAI Pipelines",
    lldStorage: "Relational DB & Vector Stores",
    lldPattern: "LLM Orchestration + RAG Pipeline",
    lldFlow: ["User Request", "API Gateway", "LLM Prompt Orchestrator", "Application Services", "Client UI"],
    bulletPoints: [
      "Contributed to Generative AI initiatives and collaborated on engineering tasks, including integrating LLM APIs, developing AI-powered features, and debugging application issues",
      "Built full-stack applications and explored new AI approaches through independent research, taking projects from initial idea to working production implementation",
      "Collaborated across engineering sprints to deploy production-ready full-stack AI features"
    ],
    deepDive: {
      problem: "Scaling Generative AI capabilities into production applications requires strict latency management, token efficiency, deterministic error handling, and intuitive UX.",
      architecture: "Collaborated on production engineering tasks integrating LLM APIs into web services. Built prompt-engineering pipelines, response parsing, and error-recovery handlers alongside senior developers.",
      keyOutcomes: [
        "Contributed to core GenAI initiatives and accelerated AI feature delivery at CampusPe.",
        "Integrated multi-model LLM APIs into user-facing workflows with robust validation.",
        "Delivered full-stack AI components adhering to production code standards."
      ]
    },
    stack: ["Generative AI", "LLM APIs", "Next.js", "Python", "TypeScript", "Prompt Engineering"],
    links: [
      { label: "CampusPe", url: "https://campuspe.com", primary: true }
    ]
  },
  {
    id: "omnirecon",
    title: "OmniRecon: Full-Spectrum Web Recon for Coding Agents",
    shortTitle: "OmniRecon",
    period: "Oct 2026 – Present",
    role: "Creator & Open Source Author",
    type: "flagship",
    year: "2026",
    featured: true,
    badge: "163 Tests · MCP",
    accentBadge: true,
    tagline: "Autonomous Web Reconnaissance for Coding Agents",
    description: "Equips AI coding agents (such as Claude Code) with full-spectrum web exploration capabilities: maps routes, captures live API calls, extracts design systems, and generates evidence-backed rebuild blueprints with automated verification.",
    lldType: "MCP RUNTIME / RECON PROTOCOL",
    lldMetric: "21 MCP Tools · 163 Tests Passing",
    lldStorage: "Evidence Artifacts & HAR Buffers",
    lldPattern: "Browser Automation + Rebuild Diff Engine",
    lldFlow: ["Claude Code / AI Agent", "21 MCP Tools Gateway", "Headless Browser Automation", "Network & Design Token Harvester", "Rebuild Blueprint & Diff Engine"],
    bulletPoints: [
      "Enables coding agents to actively explore, inspect live network calls, and extract UI styles rather than just reading static code",
      "Provides 21 purpose-built Model Context Protocol (MCP) tools covering browser automation, HAR capture, and design analysis",
      "Automated rebuild verification that directly compares reconstructed applications against target live sites (163 tests passing, MIT licensed)"
    ],
    deepDive: {
      problem: "Coding agents shouldn't just read code. When tasked with analyzing, rebuilding, or refactoring web software, LLMs lack the sensory awareness to inspect running browser state, detect runtime API payloads, or evaluate design fidelity against live systems.",
      architecture: "Architected on the Model Context Protocol (MCP) as an extensible agent server. Orchestrates headless browser drivers, real-time network traffic interception (capturing authenticated routes and endpoints), automated CSS/token extraction, and a dual-viewport visual and structural diff verification engine.",
      keyOutcomes: [
        "Delivered 21 robust MCP tools allowing coding agents to autonomously traverse complex web applications.",
        "Implemented automated rebuild verification that programmatically benchmarks new implementations against the source.",
        "Published as an open-source MIT-licensed package with one-command installation and 163 passing unit and integration tests."
      ]
    },
    stack: ["TypeScript", "Model Context Protocol (MCP)", "Claude Code", "Playwright", "Network Inspection", "Vitest"],
    links: [
      { label: "Announcement on 𝕏", url: "https://x.com/anilKumar09873/status/2109905045814968746?a=SYvA4nMXUt3yw3fABSs&s=20", primary: true },
      { label: "GitHub Repository", url: "https://github.com/anilkumara9/omnirecon", primary: false }
    ]
  },
  {
    id: "spora",
    title: "Spora: Knowledge-First Social Media Platform",
    shortTitle: "Spora",
    period: "Mar 2026 – Present",
    role: "Solo Founder & Developer",
    type: "flagship",
    year: "2026",
    featured: true,
    badge: "200+ users",
    accentBadge: true,
    tagline: "Knowledge-First Social Platform · 200+ Active Users",
    description: "A focused social media platform for learners and creators in AI, tech, and research. Built with personalized vector-based discovery, low-latency short video streaming, and real-time interaction.",
    lldType: "EVENT-DRIVEN / OPTIMISTIC CACHE",
    lldMetric: "p99 < 150ms · Zero Downtime",
    lldStorage: "PostgreSQL (B-Tree indexed)",
    lldPattern: "Optimistic UI + SWR Reconciler",
    lldFlow: ["React 19 Client", "Optimistic State", "Next.js Edge API", "PostgreSQL (B-Tree)", "Media Stream CDN"],
    bulletPoints: [
      "Independently designed, architected, and shipped end to end",
      "Bootstrapped 200+ active users with zero external funding or marketing",
      "Personalized recommendation engine, responsive feed, and real-time creator interaction"
    ],
    deepDive: {
      problem: "Social media feeds are flooded with algorithmic noise and outrage bait, making high-signal knowledge sharing and continuous technical learning painful for engineers and researchers.",
      architecture: "Full-stack web and mobile application utilizing Next.js, React, and modular streaming microservices. Employs lightweight vector-based personalized content discovery and client-side media caching for instantaneous short-video playback.",
      keyOutcomes: [
        "Zero marketing spend: acquired 200+ verified active technical creators organically.",
        "Sub-150ms dynamic feed rendering with client-side optimistic UI state.",
        "Responsive multi-device viewport design adhering to modern mobile-first constraints."
      ]
    },
    stack: ["React", "Next.js", "Mobile First", "Vector Discovery", "Real-Time Interaction", "Media Stream"],
    links: [
      { label: "Demo on 𝕏", url: "https://x.com/anilKumar09873/status/2096482373299057022", primary: true },
      { label: "Google Play Store", url: "https://play.google.com/store/apps/details?id=com.anilkumar09.news&pcampaignid=web_share", primary: false }
    ]
  },
  {
    id: "scbi",
    title: "SCBI: Self-Consistent Basis Invention",
    shortTitle: "SCBI",
    period: "Jan 2026 – Present",
    role: "Independent AI Researcher",
    type: "research",
    year: "2026",
    featured: true,
    badge: "Springer · Still working",
    accentBadge: true,
    tagline: "Frozen Model Interpretability · Springer Accepted · Still working",
    description: "Independent research into inference-time representation learning for frozen foundation models with no weight updates. Accepted for publication in peer-reviewed scientific proceedings (Springer).",
    lldType: "ACTIVATION PROBING PIPELINE",
    lldMetric: "Inference-Time (0 Weight Updates)",
    lldStorage: "PyTorch Activation Tensors",
    lldPattern: "Static Vector Steering (Cosine ~0.70)",
    lldFlow: ["Frozen Model", "Residual Stream", "Concept Probes", "Steering Vectors", "Causal Evaluator"],
    bulletPoints: [
      "Central result: decodable concept directions (~0.7 cosine) show zero causal transfer under static steering (p = 1.0, replicated)",
      "Released an open falsification kit on GitHub for transparent verification",
      "Topics: LLM interpretability, representation learning, activation steering, frozen models"
    ],
    deepDive: {
      problem: "Can frozen foundation models discover, validate, and reuse latent problem-solving representations at inference time without modifying their billions of parameters?",
      architecture: "PyTorch & Hugging Face pipeline measuring activation geometry across transformer residual streams. Formulated an empirical falsification suite testing causal mediation under steering vectors.",
      keyOutcomes: [
        "Discovered decodable concept directions (~0.7 cosine) demonstrate zero causal transfer under static steering (p = 1.0, replicated).",
        "Shipped an open, turn-key falsification kit on GitHub allowing peer researchers to verify results independently.",
        "Accepted for publication in peer-reviewed scientific proceedings (Springer)."
      ]
    },
    stack: ["PyTorch", "Hugging Face", "LLM Interpretability", "Activation Steering", "Representation Learning"],
    links: [
      { label: "Springer Paper (PDF)", url: "https://openreview.net/pdf?id=QGcF4561UP", primary: true },
      { label: "OpenReview", url: "https://openreview.net/pdf?id=QGcF4561UP", primary: false },
      { label: "GitHub Kit", url: "https://github.com/anilkumara9/SCBI", primary: false }
    ]
  },
  {
    id: "invisly",
    title: "Invisly: Real-Time AI Desktop Copilot",
    shortTitle: "Invisly",
    period: "Jan 2026",
    role: "Full-Stack AI Builder",
    type: "flagship",
    year: "2026",
    featured: false,
    badge: "Live",
    accentBadge: false,
    tagline: "Real-Time AI Desktop Copilot · invisly.in",
    description: "A desktop AI copilot that answers technical engineering questions instantly through low-latency streaming LLM APIs and real-time screen/context assistance.",
    lldType: "STREAMING COPILOT ARCHITECTURE",
    lldMetric: "Sub-Second First Token TTFT",
    lldStorage: "Local SQLite Context Buffer",
    lldPattern: "Async Token Deserialization",
    lldFlow: ["Desktop Screen Hook", "Context Buffer", "Async SSE Stream", "Token Deserializer", "Native Overlay"],
    bulletPoints: [
      "Answers technical questions with sub-second latency through streaming LLM APIs",
      "Seamless desktop application workflow integration and minimal memory footprint",
      "Deployed and live in production at invisly.in"
    ],
    deepDive: {
      problem: "Context switching between coding environments and web browsers degrades engineer flow state during debugging and technical research.",
      architecture: "Lightweight client application interfacing with low-latency streaming inference endpoints. Employs token streaming pipelines and smart local context buffer.",
      keyOutcomes: [
        "Sub-second first-token response latency for technical queries.",
        "Clean desktop UX that stays non-intrusive while writing code.",
        "Live in production at invisly.in."
      ]
    },
    stack: ["Desktop Copilot", "LLM APIs", "Real-Time Querying", "Streaming Token Pipelines"],
    links: [
      { label: "Live: invisly.in", url: "https://invisly.in/", primary: true }
    ]
  },
  {
    id: "re-id",
    title: "On-Device Video Person Re-ID & Dynamic Collage",
    shortTitle: "Edge Re-ID",
    period: "Feb – Mar 2026",
    role: "Edge ML Engineer",
    type: "research",
    year: "2026",
    featured: false,
    badge: "Edge ML",
    accentBadge: false,
    tagline: "Offline Computer Vision & Dynamic Collage · T = 0.68",
    description: "An on-device person re-identification system using Kotlin, ML Kit, and Edge ML. Selects high-confidence frames by cosine similarity (T = 0.68) and generates collages automatically, entirely offline and privacy-preserving.",
    lldType: "OFFLINE EDGE PIPELINE",
    lldMetric: "30 FPS On-Device ML",
    lldStorage: "On-Device Vector Cache (0 Cloud)",
    lldPattern: "Cosine Threshold Filtering (T=0.68)",
    lldFlow: ["Video Frame Feeder", "YOLOv8 Edge Model", "OSNet Embeddings", "Euclidean Matrix", "Collage Synth"],
    bulletPoints: [
      "Frame selection via cosine similarity threshold (T = 0.68)",
      "Automated collage generation executed entirely on-device without cloud dependence",
      "Complete privacy preservation for sensitive edge video streams"
    ],
    deepDive: {
      problem: "Transmitting continuous video streams to cloud servers for person recognition introduces significant network latency, bandwidth costs, and severe privacy violations.",
      architecture: "Kotlin and Google ML Kit edge execution pipeline. Extracts feature embeddings directly on mobile CPU/NPU, calculates cosine similarity with a strict threshold (T = 0.68), and synthesizes dynamic collages on the fly.",
      keyOutcomes: [
        "Zero cloud dependencies: 100% on-device local computation ensures strict data privacy.",
        "Consistent frame scoring eliminating redundant or blurred frames in video streams.",
        "Open source Android repository on GitHub."
      ]
    },
    stack: ["Kotlin", "ML Kit", "Edge ML", "Computer Vision", "Cosine Similarity"],
    links: [
      { label: "GitHub Repository", url: "https://github.com/anilkumara9/college", primary: true }
    ]
  },
  {
    id: "polo",
    title: "Polo (Vibe-Coding): AI Web App Generator",
    shortTitle: "Polo",
    period: "Jan – Mar 2025",
    role: "Full-Stack AI Builder",
    type: "flagship",
    year: "2025",
    featured: false,
    badge: "Open Source",
    accentBadge: false,
    tagline: "Natural Language to Full-Stack Web App Generator",
    description: "Generates multi-file production web applications from natural language prompts using LLM APIs, Next.js, and automated component sandboxing.",
    lldType: "CODE SYNTHESIS / VIRTUAL FS",
    lldMetric: "Multi-File Virtual Sandboxing",
    lldStorage: "In-Memory AST / File Tree",
    lldPattern: "Streaming Hierarchical Code Gen",
    lldFlow: ["Natural Language Prompt", "LLM Code Orchestrator", "Virtual File Tree", "Dependency Sandbox", "Interactive Live Preview"],
    bulletPoints: [
      "Generates complete multi-file full-stack web applications from natural language prompts",
      "Interactive live web app preview and real-time code inspection",
      "Open-source repository available on GitHub"
    ],
    deepDive: {
      problem: "Developers spend excessive hours configuring boilerplate, routing, and wiring standard components when prototyping new software ideas.",
      architecture: "Full-stack application utilizing Next.js, React, and streaming LLM APIs. Parses structured code blocks into a client-side virtual file tree, dynamically resolves dependencies, and mounts sandboxed live previews.",
      keyOutcomes: [
        "Enabled rapid vibe-coding prototyping from plain-English descriptions.",
        "Synthesizes clean, modular multi-component React applications with live rendering.",
        "Open-sourced on GitHub with turn-key setup."
      ]
    },
    stack: ["Next.js", "React", "LLM APIs", "Code Synthesis", "Virtual File System", "TypeScript"],
    links: [
      { label: "GitHub Repository", url: "https://github.com/anilkumara9/vibe", primary: true }
    ]
  },
  {
    id: "latable",
    title: "LaTable: Generative Foundation Models for Tabular Data",
    shortTitle: "LaTable",
    period: "2025 – Present",
    role: "Independent AI Researcher",
    type: "research",
    year: "2025",
    featured: false,
    badge: "Still working",
    accentBadge: false,
    tagline: "Generative Foundation Models for Tabular Data · Still working",
    description: "Researched diffusion-transformer generation of tabular datasets; analyzed LLM metadata encoding, mixed-type modeling, and equivariance; benchmarked against CTGAN and TabDDPM.",
    lldType: "DIFFUSION-TRANSFORMER MODEL",
    lldMetric: "Permutation-Equivariant Diffusion",
    lldStorage: "PyTorch Mixed Heterogeneous Tensors",
    lldPattern: "Conditioned Denoising Scheduler",
    lldFlow: ["Heterogeneous Table", "LLM Metadata Encoder", "Diffusion Transformer", "Denoising Scheduler", "Synthetic Table"],
    bulletPoints: [
      "Researched diffusion-transformer generation of tabular datasets",
      "Analyzed LLM metadata encoding, mixed-type modeling, and equivariance",
      "Empirically benchmarked against CTGAN and TabDDPM baselines"
    ],
    deepDive: {
      problem: "Generating realistic, privacy-compliant synthetic tabular datasets with complex heterogeneous categorical and numerical dependencies remains challenging for traditional GAN architectures.",
      architecture: "Investigated diffusion-transformer architectures for tabular modalities, integrating LLM metadata embeddings to capture relational field priors and enforce permutation equivariance.",
      keyOutcomes: [
        "Developed diffusion formulations for mixed continuous and discrete tabular distributions.",
        "Evaluated fidelity and privacy preservation metrics against CTGAN and TabDDPM.",
        "Explored LLM contextual encoders for zero-shot column relationship mapping."
      ]
    },
    stack: ["Diffusion Transformers", "Tabular Models", "PyTorch", "CTGAN", "TabDDPM"],
    links: [
      { label: "Research Deep-Dive", url: "#research", primary: true }
    ]
  },
  {
    id: "hackathon",
    title: "AI Interview Platform (REVA Hackathon Winner)",
    shortTitle: "AI Interview",
    period: "Aug – Sep 2024",
    role: "Hackathon Team Lead",
    type: "hackathon",
    year: "2024",
    featured: true,
    badge: "Winner 🏆",
    accentBadge: true,
    tagline: "Conversational Voice Agent Simulation · REVA 2nd Prize",
    description: "Built an AI interview preparation platform powered by Vapi AI conversational voice agents for realistic interview simulation and instantaneous candidate performance evaluation.",
    lldType: "BI-DIRECTIONAL VOICE STREAM",
    lldMetric: "Sub-800ms Audio Roundtrip",
    lldStorage: "Real-Time WebSocket Session State",
    lldPattern: "Full-Duplex Async Event Loop",
    lldFlow: ["WebAudio API", "WebSocket Gateway", "Vapi Voice Model", "Streaming LLM", "Rubric Scorer"],
    bulletPoints: [
      "Second Prize Winner at REVA Hackathon competing against 50+ collegiate teams",
      "Conversational AI interview simulation powered by Vapi AI voice agents",
      "Automated candidate response feedback, structured scoring metrics, and transcripts"
    ],
    deepDive: {
      problem: "Job seekers lack realistic, low-pressure mock interview practice that gives immediate, honest, structured grading on technical and behavioral answers.",
      architecture: "Integrated Vapi AI conversational voice agents with streaming LLM response evaluation. Built WebSocket audio streams with automated rubric-based candidate scoring in Next.js.",
      keyOutcomes: [
        "Awarded Second Prize at REVA University 24-hour Hackathon among 50+ competitive collegiate squads.",
        "Achieved natural, low-latency audio dialogue with automated post-session performance feedback.",
        "Open-sourced on GitHub with reusable interview prompt templates."
      ]
    },
    stack: ["Next.js", "Vapi AI", "Voice Agents", "LLM APIs", "WebSockets"],
    links: [
      { label: "Code on GitHub", url: "https://github.com/anilkumara9/ai-tutor", primary: true }
    ]
  }
];

interface AkoderWorkProps {
  onSelectProject?: (project: WorkProject) => void;
}

export default function AkoderWork({ onSelectProject }: AkoderWorkProps) {
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const years: ('2026' | '2025' | '2024')[] = ['2026', '2025', '2024'];

  return (
    <section id="work" className="px-4 sm:px-8 py-8 sm:py-10 scroll-mt-20">
      {/* Section Header */}
      <div className="mb-5">
        <h2 className="text-[20px] sm:text-[22px] font-medium text-[#F4F4F5] tracking-tight">
          Work <span className="text-[13.5px] sm:text-[15px] font-normal text-zinc-400 font-sans tracking-normal">(Experience &amp; Academics)</span>
        </h2>
      </div>

      {/* Year Groups with Block Lines */}
      <div className="space-y-6">
        {years.map(year => {
          const yearProjects = WORK_PROJECTS.filter(p => p.year === year);
          if (yearProjects.length === 0) return null;

          return (
            <div key={year} id={`work-${year}`} className="relative scroll-mt-24">
              {/* Year Sticker + Badge */}
              <div className="flex items-center gap-2 mb-2.5">
                <img
                  src="/folder-sticker.png"
                  alt=""
                  className="w-5 h-5 object-contain select-none shrink-0"
                />
                <span className="font-serif italic text-[13.5px] text-zinc-300 bg-[#141417] px-2.5 py-0.5 rounded border border-[#222226]">
                  {year}
                </span>
              </div>

              {/* Projects Block Table with Hairline Dividers */}
              <div className="divide-y divide-[#18181C] border-y border-[#18181C]">
                {yearProjects.map(project => (
                  <div
                    key={project.id}
                    onClick={() => onSelectProject?.(project)}
                    className="group flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 py-3 px-2 sm:px-3 hover:bg-[#121216]/60 transition-colors cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 min-w-0">
                      <span className="font-medium text-[14.5px] text-[#F4F4F5] group-hover:text-white shrink-0 sm:w-[130px] md:w-[155px]">
                        {project.shortTitle || project.title}
                      </span>
                      <span className="text-[13.5px] text-[#8E8E93] group-hover:text-[#A1A1AA] truncate leading-relaxed">
                        {project.tagline || project.description}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-auto pt-1 sm:pt-0">
                      {project.badge && (
                        <span className="text-[10.5px] font-mono px-2 py-0.5 rounded bg-[#141418] text-zinc-400 border border-[#222227]">
                          {project.badge}
                        </span>
                      )}
                      <a
                        href={project.links[0]?.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-zinc-500 group-hover:text-zinc-200 p-0.5 transition-colors"
                        title={`Open ${project.shortTitle || project.title}`}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Outside Hand-drawn Note, Trophy Character & Sketched Arrow on Right Side in gutter (matching 'Hi I am Anil' style) */}
              {year === '2024' && (
                <div
                  aria-hidden="true"
                  className="absolute -right-36 sm:-right-48 md:-right-56 lg:-right-64 xl:-right-72 -top-28 sm:-top-36 md:-top-44 z-20 select-none hidden xl:flex flex-col items-start rotate-[2deg] pointer-events-none"
                >
                  {/* Trophy Cutout Sticker ABOVE */}
                  <div
                    onClick={() => onSelectProject?.(yearProjects[0])}
                    className="cursor-pointer hover:scale-105 hover:rotate-0 transition-transform duration-300 pointer-events-auto mb-1.5"
                    title="Click to view REVA Hackathon winner specs"
                  >
                    <img
                      src="/profile-cutout.webp"
                      alt="Anil character holding trophy"
                      className="w-18 sm:w-22 md:w-26 lg:w-30 h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] rotate-[-3deg]"
                    />
                  </div>

                  {/* Handwritten text in Caveat script font */}
                  <div className="font-['Caveat',_'Shantell_Sans',_cursive] text-[18px] sm:text-[22px] lg:text-[25px] text-zinc-100 leading-tight font-medium tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] text-left whitespace-nowrap">
                    <div>Won 2nd Prize 🏆</div>
                    <div className="text-[15px] sm:text-[18px] lg:text-[21px] text-zinc-300 -mt-0.5">out of 50+ teams!</div>
                  </div>

                  {/* Sketched Hand-drawn Curving Arrow pointing down-left across border into REVA project row */}
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
              )}
            </div>
          );
        })}
      </div>

      {/* Academic Details (Collapsible Open/Close, Clean Non-Card Style) */}
      <div className="mt-9 pt-6 border-t border-[#1C1C20]">
        {/* Interactive Open/Close Toggle Header */}
        <button
          type="button"
          onClick={() => setIsAcademicsOpen(prev => !prev)}
          className="w-full flex items-center justify-between py-2.5 text-left group cursor-pointer select-none"
          aria-expanded={isAcademicsOpen}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <GraduationCap className="size-[17px] text-zinc-400 group-hover:text-white transition-colors shrink-0" />
            <h3 className="text-[15px] sm:text-[16px] font-medium text-[#F4F4F5] group-hover:text-white tracking-tight transition-colors">
              Academic Details
            </h3>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#141418] text-zinc-400 border border-[#222227] shrink-0">
              NHCE · BKG PU · MDRS
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[12px] font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors shrink-0">
            <span>{isAcademicsOpen ? 'Close' : 'Open'}</span>
            <ChevronDown className={`size-4 transition-transform duration-200 ${isAcademicsOpen ? 'rotate-180' : ''}`} />
          </div>
        </button>

        {/* Collapsible Content: Clean Non-Card Dividers */}
        {isAcademicsOpen && (
          <div className="mt-2 divide-y divide-[#1C1C20] border-t border-[#1C1C20] animate-in fade-in-50 duration-200">
            {/* 1. College (B.E. Computer Science) */}
            <div className="py-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <h4 className="font-medium text-[15px] sm:text-[15.5px] text-[#F4F4F5] tracking-tight">
                  New Horizon College of Engineering, Bengaluru
                </h4>
                <span className="font-mono text-[12px] text-zinc-400 shrink-0">
                  Aug 2022 – Jul 2026
                </span>
              </div>
              <div className="text-[13.5px] text-zinc-300 font-sans mb-1">
                B.E. in Computer Science and Engineering (Data Science)
              </div>
              <div className="text-[13px] font-mono text-[#FECE12] font-medium mb-3 flex items-center gap-2">
                <span>CGPA: 8.09/10</span>
              </div>

              {/* Coursework and Certifications */}
              <div className="pt-2">
                <div className="text-[12.5px] font-medium text-zinc-300 mb-2 font-sans">
                  Coursework and Certifications
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] text-zinc-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0" />
                    <span>Data Structures and Algorithms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0" />
                    <span>Database Management Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0" />
                    <span>Operating Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0" />
                    <span>Computer Networks</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. 12th PUC */}
            <div className="py-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <h4 className="font-medium text-[15px] sm:text-[15.5px] text-[#F4F4F5] tracking-tight">
                  BKG PU COLLEGE
                </h4>
                <span className="font-mono text-[12.5px] font-semibold text-[#FECE12] shrink-0">
                  71.32%
                </span>
              </div>
              <div className="text-[13px] text-zinc-400 font-sans">
                12th Pre-University Course (PUC · Science)
              </div>
            </div>

            {/* 3. SSLC (10th) */}
            <div className="py-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <h4 className="font-medium text-[15px] sm:text-[15.5px] text-[#F4F4F5] tracking-tight">
                  MDRS
                </h4>
                <span className="font-mono text-[12.5px] font-semibold text-[#FECE12] shrink-0">
                  80.32%
                </span>
              </div>
              <div className="text-[13px] text-zinc-400 font-sans">
                Secondary School Leaving Certificate (10th SSLC)
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
