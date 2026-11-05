import React, { useState, useEffect } from 'react';
import { ArrowUpRight, GraduationCap, ChevronDown, X } from 'lucide-react';
import { LinkPreview } from './ui/link-preview';

export interface WorkProject {
  id: string;
  title: string;
  shortTitle?: string;
  period: string;
  role: string;
  type: 'flagship' | 'research' | 'hackathon';
  year: '2026' | '2025' | '2024';
  category?: 'desktop' | 'web' | 'research';
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
    id: "shiftsense",
    category: "desktop",
    title: "ShiftSense: Screen Aware AI Sidebar for Windows",
    shortTitle: "ShiftSense",
    period: "Nov 2026",
    role: "Creator & Systems Architect",
    type: "flagship",
    year: "2026",
    featured: true,
    badge: "v1.5.1 · 99 Tests",
    accentBadge: true,
    tagline: "Screen Aware AI Sidebar for Windows · Double-Tap Shift · 99 Tests Passing",
    description: "A Windows AI sidebar (Electron, Node.js) that opens with a double tap of Shift and answers questions about the app in front of you, in place, using UI Automation screen reads and local markdown memory, with Claude, OpenAI, or local Ollama models.",
    lldType: "NATIVE DESKTOP / UI AUTOMATION",
    lldMetric: "Double-Tap Shift · 99 Tests Passing",
    lldStorage: "Local Markdown Memory & Encrypted Store",
    lldPattern: "Global Shift Hook + In-Place Context Synthesis",
    lldFlow: ["Double-Tap Shift Hook", "Windows UI Automation Reader", "Privacy Redactor & Exclusion Filter", "Multi-LLM Dispatcher (Claude / OpenAI / Ollama)", "In-Place Native Sidebar"],
    bulletPoints: [
      "A Windows AI sidebar (Electron, Node.js) that opens with a double tap of Shift and answers questions about the app in front of you, in place",
      "Uses native Windows UI Automation screen reads and maintains local markdown memory",
      "Multi-model integration with Anthropic Claude, OpenAI, or local offline Ollama models",
      "Private by design: automated password redaction, per-app no-read exclusion lists, and approval-gated computer use",
      "Shipped publicly with dual-OS GitHub Actions CI on Windows and Linux (99 tests), installer releases with SHA-256 checksums, and a v1.5.1 fix for live shutdown crashes"
    ],
    deepDive: {
      problem: "Switching away from an active window to query an AI copilot causes friction, broken focus, and lost context. Conventional screen capture tools either blindly screenshot unencrypted screens (leaking confidential passwords) or fail to parse structured UI state.",
      architecture: "Engineered in Electron and Node.js with native C++ keyboard hooks and Windows UI Automation accessibility readers. Scans the foreground app hierarchy, strips sensitive fields and passwords before inference, and streams answers from Claude, OpenAI, or offline Ollama into an instant floating sidebar with markdown memory persistence.",
      keyOutcomes: [
        "Instant double-tap Shift summoning that delivers in-place contextual assistance without defocusing the host application.",
        "Zero-leak privacy safeguards: automated password redaction, customizable per-app exclusion lists, and approval gates for desktop actions.",
        "Production-grade release lifecycle: cross-platform GitHub Actions CI across Windows & Linux with 99 passing tests, cryptographically verified installer releases (SHA-256), and v1.5.1 production stability."
      ]
    },
    stack: ["Electron", "Node.js", "Windows UI Automation", "Claude API", "Ollama", "OpenAI", "TypeScript", "GitHub Actions"],
    links: [
      { label: "Installer Releases", url: "https://github.com/anilkumara9/shiftsense/releases", primary: true },
      { label: "GitHub Repository", url: "https://github.com/anilkumara9/shiftsense", primary: false }
    ]
  },
  {
    id: "openusage",
    category: "desktop",
    title: "OpenUsage for Windows: AI Subscriptions & API Spend Tracker",
    shortTitle: "OpenUsage",
    period: "Nov 2026 – Present",
    role: "Creator & Systems Engineer",
    type: "flagship",
    year: "2026",
    featured: true,
    badge: "Windows Tray · DPAPI",
    accentBadge: true,
    tagline: "Track AI Coding Subscriptions & API Spend from the Windows System Tray · 12+ Providers",
    description: "A native Windows system tray application that tracks AI coding subscriptions and API spend in real time: session and weekly limits, credits, token usage, spend, reset countdowns, and burn rate across 12+ providers (Claude, ChatGPT/Codex, Cursor, Copilot, Antigravity, Grok, Devin, OpenRouter, Ollama) in one unified dashboard panel.",
    lldType: "SYSTEM TRAY / SECURITY ARCHITECTURE",
    lldMetric: "12+ Providers · DPAPI Encryption",
    lldStorage: "Windows DPAPI (Electron safeStorage)",
    lldPattern: "Direct Polling IPC + In-Tray Gauge Synthesis",
    lldFlow: ["Windows System Tray Gauge", "Electron Main Polling Daemon", "Windows DPAPI Secure Key Vault", "Direct Provider Usage Endpoints", "Priority Board & Trend Visualizer"],
    bulletPoints: [
      "Tracks real-time limits, credits, token usage, dollar balances, reset times, and burn rates across 12+ AI providers in one panel",
      "Native Windows system tray gauge ring summarizing your worst metric with instant color thresholds (on-track, warning, critical)",
      "Priority board that automatically surfaces whichever quota or rate limit across all accounts will run out first with burn velocity analysis",
      "Zero-telemetry & hardened local security: credentials never leave Windows DPAPI encrypted storage, calling provider APIs directly without proxies",
      "Interactive 7-day and 30-day SVG usage trend charts with per-day hover inspection, model-level breakdowns, and rate-limit reset claims"
    ],
    deepDive: {
      problem: "Engineers and AI practitioners actively juggle 4–6 subscription plans and API keys (Claude Pro, Cursor, ChatGPT Team, GitHub Copilot, OpenRouter), leading to fragmented visibility, unexpected mid-sprint lockouts, opaque token depletion, and insecure storage of sensitive API tokens in plain-text configs.",
      architecture: "Architected with an Electron main process (Node 22) decoupled from a minimalist renderer over IPC. Authenticates providers via OAuth, device-code flows, API keys, or org tokens with credentials encrypted strictly through Windows DPAPI (via Electron safeStorage). Directly polls official provider usage APIs with zero proxy servers, zero analytics, and zero tracking. Features SVG historical trend engines and Win32 tray gauge integration.",
      keyOutcomes: [
        "Eliminated subscription blindspots by consolidating 12+ major AI providers (Claude, Cursor, Copilot, Codex, Grok, Devin, Ollama) into a single glanceable tray panel.",
        "Zero-trust credential safety: all auth tokens and keys are encrypted via OS-level Windows DPAPI, ensuring zero cloud exfiltration or intermediary server dependencies.",
        "Proactive burnout prevention: priority board detects fast-burning tokens and calculates pace against reset windows with customizable desktop alerts."
      ]
    },
    stack: ["Electron", "Node.js (v22)", "Windows DPAPI", "Win32 Tray", "IPC Architecture", "OAuth 2.0", "JavaScript", "SVG Data Viz"],
    links: [
      { label: "GitHub Repository", url: "https://github.com/anilkumara9/openusage-windows", primary: true },
      { label: "Architecture Spec", url: "https://github.com/anilkumara9/openusage-windows#system-design", primary: false }
    ]
  },
  {
    id: "campuspe",
    category: "web",
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
      { label: "Internship Proof (Drive)", url: "https://drive.google.com/file/d/1tlyNOtx1AanaKCU8CnGBHQ1FcdxqhHyt/view?usp=sharing", primary: true },
      { label: "CampusPe", url: "https://campuspe.com", primary: false }
    ]
  },
  {
    id: "omnirecon",
    category: "web",
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
    category: "web",
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
    category: "research",
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
    category: "desktop",
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
    category: "research",
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
    category: "web",
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
    category: "research",
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
    category: "research",
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
      { label: "View Certificate 🏆", url: "/reva-certificate.jpg", primary: true },
      { label: "Code on GitHub", url: "https://github.com/anilkumara9/ai-tutor", primary: false }
    ]
  }
];

interface AkoderWorkProps {
  onSelectProject?: (project: WorkProject) => void;
}


function getProjectPreview(project: WorkProject) {
  if (project.id === 'hackathon') {
    return {
      url: '/reva-certificate.jpg',
      imageSrc: '/reva-certificate.jpg',
      isCert: true
    };
  }

  if (project.id === 'campuspe') {
    return {
      url: 'https://drive.google.com/file/d/1tlyNOtx1AanaKCU8CnGBHQ1FcdxqhHyt/view?usp=sharing',
      imageSrc: '/previews/campuspe_proof.png',
      isCert: false
    };
  }

  const previewMap: Record<string, string> = {
    shiftsense: '/previews/shiftsense.png',
    openusage: '/previews/openusage.png',
    campuspe: '/previews/campuspe.png',
    omnirecon: '/previews/omnirecon.png',
    spora: '/previews/spora.png',
    scbi: '/previews/scbi.png',
    invisly: '/previews/invisly.png',
    're-id': '/previews/re-id.png',
    polo: '/previews/polo.png',
    latable: '/previews/latable.png',
  };

  const imageSrc = previewMap[project.id] || '/previews/shiftsense.png';
  const githubLink = project.links.find(l => l.url.includes('github.com'))?.url;
  const webLink = project.links.find(l => l.url.startsWith('http'))?.url;
  const targetUrl = githubLink || webLink || 'https://github.com/anilkumara9';

  return {
    url: targetUrl,
    imageSrc,
    isCert: false
  };
}


export default function AkoderWork({ onSelectProject }: AkoderWorkProps) {
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [isNhceModalOpen, setIsNhceModalOpen] = useState(false);

  const desktopProjects = WORK_PROJECTS.filter(
    p => p.id === 'shiftsense' || p.id === 'openusage' || p.id === 'invisly' || p.category === 'desktop'
  );

  const sections: { id: string; label: string; projects: WorkProject[] }[] = [
    {
      id: 'work-desktop',
      label: 'Desktop',
      projects: desktopProjects
    },
    {
      id: 'work-2026',
      label: '2026',
      projects: WORK_PROJECTS.filter(
        p => p.year === '2026' && p.id !== 'shiftsense' && p.id !== 'openusage' && p.id !== 'invisly'
      )
    },
    {
      id: 'work-2025',
      label: '2025',
      projects: WORK_PROJECTS.filter(p => p.year === '2025')
    },
    {
      id: 'work-2024',
      label: '2024',
      projects: WORK_PROJECTS.filter(p => p.year === '2024')
    }
  ];

  useEffect(() => {
    if (!isCertModalOpen && !isNhceModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCertModalOpen(false);
        setIsNhceModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalBodyOverflow || '';
      document.documentElement.style.overflow = originalHtmlOverflow || '';
    };
  }, [isCertModalOpen, isNhceModalOpen]);

  return (
    <section id="work" className="px-4 sm:px-8 py-8 sm:py-10 scroll-mt-20">
      {/* Section Header */}
      <div className="mb-5">
        <h2 className="text-[20px] sm:text-[22px] font-medium text-[#F4F4F5] tracking-tight">
          Work <span className="text-[13.5px] sm:text-[15px] font-normal text-zinc-400 font-sans tracking-normal">(Experience &amp; Academics)</span>
        </h2>
      </div>

      {/* Project Groups (Desktop Title + Year Groups) */}
      <div className="space-y-6">
        {sections.map(section => {
          if (section.projects.length === 0) return null;

          return (
            <div key={section.id} id={section.id} className="relative scroll-mt-24">
              {/* Sticker + Title Badge */}
              <div className="flex items-center gap-2 mb-2.5">
                <img
                  src="/folder-sticker.png"
                  alt=""
                  className="w-5 h-5 object-contain select-none shrink-0"
                />
                <span className="font-serif italic text-[13.5px] text-zinc-300 bg-[#141417] px-2.5 py-0.5 rounded border border-[#222226]">
                  {section.label}
                </span>
              </div>

              {/* Projects Block Table with Hairline Dividers & Live Link Previews */}
              <div className="divide-y divide-[#18181C] border-y border-[#18181C]">
                {section.projects.map(project => {
                  const preview = getProjectPreview(project);

                  return (
                    <div
                      key={project.id}
                      onClick={() => onSelectProject?.(project)}
                      className="group relative flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 py-3 px-2 sm:px-3 hover:bg-[#121216]/60 transition-colors cursor-pointer"
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

                      {/* Floating Link & Certificate Preview in Middle on Cursor Hover */}
                      <div 
                        onClick={(e) => {
                          e.stopPropagation();
                          if (preview.isCert) {
                            setIsCertModalOpen(true);
                          } else if (preview.url && preview.url.startsWith('http')) {
                            window.open(preview.url, '_blank', 'noopener,noreferrer');
                          }
                        }}
                        className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 z-50 w-[220px] sm:w-[250px] opacity-0 translate-y-1.5 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out cursor-pointer drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
                      >
                        <div className="rounded-xl overflow-hidden border border-white/25 bg-[#0E0F14] p-1.5 shadow-2xl hover:border-amber-400/80 transition-colors">
                          <img
                            src={preview.imageSrc}
                            alt={`${project.shortTitle || project.title} preview`}
                            className="w-full h-auto max-h-[145px] rounded-lg object-contain block bg-black/60"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Outside Hand-drawn Note, Trophy Character & Sketched Arrow on Right Side in gutter (matching 'Hi I am Anil' style) */}
              {section.id === 'work-2024' && (
                <div
                  aria-hidden="true"
                  className="absolute -right-36 sm:-right-48 md:-right-56 lg:-right-64 xl:-right-72 -top-28 sm:-top-36 md:-top-44 z-20 select-none hidden xl:flex flex-col items-start rotate-[2deg] pointer-events-none"
                >
                  {/* Trophy Cutout Sticker with Interactive Hover Preview */}
                  <div className="relative group/sticker pointer-events-auto mb-1.5">
                    <div
                      onClick={() => setIsCertModalOpen(true)}
                      className="cursor-pointer hover:scale-105 hover:rotate-0 transition-transform duration-300"
                      title="Hover to preview certificate · Click to enlarge"
                    >
                      <img
                        src="/profile-cutout.webp"
                        alt="Anil character holding trophy"
                        className="w-18 sm:w-22 md:w-26 lg:w-30 h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] rotate-[-3deg]"
                      />
                    </div>

                    {/* Certificate Preview directly below character sticker on hover */}
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsCertModalOpen(true);
                      }}
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-50 w-[210px] sm:w-[230px] opacity-0 translate-y-1.5 pointer-events-none group-hover/sticker:opacity-100 group-hover/sticker:translate-y-0 group-hover/sticker:pointer-events-auto transition-all duration-200 ease-out cursor-pointer drop-shadow-[0_16px_32px_rgba(0,0,0,0.9)]"
                    >
                      <div className="rounded-lg overflow-hidden border border-white/25 bg-[#0E0F14] p-1 shadow-2xl hover:border-amber-400/80 transition-colors">
                        <img
                          src="/reva-certificate.jpg"
                          alt="REVA University Hackathon Certificate"
                          className="w-full h-auto rounded-[5px] object-contain block"
                        />
                      </div>
                    </div>
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
            <h3 className="text-[14.5px] sm:text-[16px] font-medium text-[#F4F4F5] group-hover:text-white tracking-tight transition-colors">
              Academic Details
            </h3>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#141418] text-zinc-400 border border-[#222227] shrink-0 hidden min-[440px]:inline-block">
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
            <div 
              className="py-4 group relative cursor-pointer hover:bg-[#121216]/50 -mx-2.5 px-2.5 rounded-lg transition-colors"
              onClick={() => setIsNhceModalOpen(true)}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-medium text-[15px] sm:text-[15.5px] text-[#F4F4F5] group-hover:text-amber-300 tracking-tight transition-colors">
                    New Horizon College of Engineering, Bengaluru
                  </h4>
                  <span className="text-[10.5px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 inline-flex items-center gap-1">
                    <span>🎓</span>
                    <span>Graduation Letter</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="font-mono text-[12px] text-zinc-400">
                    Aug 2022 – Jul 2026
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsNhceModalOpen(true);
                    }}
                    className="text-zinc-500 group-hover:text-zinc-200 p-0.5 transition-colors"
                    title="View Graduation Letter"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
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

              {/* Floating Graduation Certificate Preview Card on Hover */}
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsNhceModalOpen(true);
                }}
                className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 z-50 w-[220px] sm:w-[250px] opacity-0 translate-y-1.5 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out cursor-pointer drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
              >
                <div className="rounded-xl overflow-hidden border border-white/25 bg-[#0E0F14] p-1.5 shadow-2xl hover:border-amber-400/80 transition-colors">
                  <img
                    src="/nhce-certificate.jpg"
                    alt="New Horizon College of Engineering Graduation Letter Preview"
                    className="w-full h-auto max-h-[160px] rounded-lg object-contain block bg-[#0D1117]"
                  />
                  <div className="pt-1.5 pb-0.5 px-1 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span className="text-amber-400 flex items-center gap-1">🎓 Graduation Letter</span>
                    <span className="text-zinc-500">Click to view</span>
                  </div>
                </div>
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

      {/* Full-Screen Certificate Lightbox Modal */}
      {isCertModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsCertModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#000000] border border-white/10 rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.98)] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black">
              <div className="flex items-center gap-2.5">
                <span className="text-amber-400 text-lg">🏆</span>
                <div>
                  <h3 className="text-sm font-semibold text-white">REVA University Hackathon Certificate</h3>
                  <p className="text-xs text-zinc-400">Second Place · Hack-n-Fly with Copilot (Feb 2025)</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/reva-certificate.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-mono text-[#38bdf8] hover:underline transition-colors"
                >
                  <span>Open Full Size</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsCertModalOpen(false)}
                  className="p-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Body */}
            <div className="p-4 sm:p-6 bg-black flex items-center justify-center max-h-[80vh] overflow-auto modal-dark-scroll my-2 mr-1 sm:mr-2">
              <img
                src="/reva-certificate.jpg"
                alt="REVA University Hack-n-Fly Hackathon 2nd Place Certificate"
                className="max-w-full max-h-[74vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      )}

      {/* Full-Screen NHCE Certificate Lightbox Modal */}
      {isNhceModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsNhceModalOpen(false)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#000000] border border-white/10 rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.98)] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black">
              <div className="flex items-center gap-2.5">
                <span className="text-amber-400 text-lg">🎓</span>
                <div>
                  <h3 className="text-sm font-semibold text-white">New Horizon College of Engineering</h3>
                  <p className="text-xs text-zinc-400">Bachelor of Engineering · CSE (Data Science) Graduation Letter</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/nhce-certificate.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-mono text-[#38bdf8] hover:underline transition-colors"
                >
                  <span>Open Full Size</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsNhceModalOpen(false)}
                  className="p-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Body */}
            <div className="p-4 sm:p-6 bg-black flex items-center justify-center max-h-[80vh] overflow-auto modal-dark-scroll my-2 mr-1 sm:mr-2">
              <img
                src="/nhce-certificate.jpg"
                alt="New Horizon College of Engineering Graduation Letter"
                className="max-w-full max-h-[74vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
