import React, { useState, useEffect, useRef } from "react";
import {
  ExternalLink, Mail, Github, Linkedin, MapPin, Award,
  BookOpen, Download, Phone, Sparkles, FileText, ArrowUpRight, Cpu,
  Layers, Database, Cloud, Terminal, CheckCircle2, FlaskConical,
  Briefcase, Trophy, ArrowRight, Play, Check, Copy, Code2, Globe, Search,
  X, ChevronRight, ChevronLeft, UserCheck, ShieldCheck, Zap, Share2, Menu, Smartphone,
  Monitor, Mic, Star, Flame, Compass, Heart, AlertCircle, LayoutGrid, Columns3,
  GitPullRequest
} from "lucide-react";

// Custom Components
import ContactForm from "./components/ContactForm";
import InteractiveTimeline from "./components/InteractiveTimeline";
import OpenSourceSection from "./components/OpenSourceSection";
import { generateResumePDF } from "./utils/pdfGenerator";

export default function MobbinPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("flagship");
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [activeProjectModal, setActiveProjectModal] = useState<any | null>(null);
  const [skillDomainFilter, setSkillDomainFilter] = useState<string>("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);

  // Auto-hide header on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 60) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 8) {
        // Scrolling down -> hide header
        setIsHeaderVisible(false);
      } else if (lastScrollY - currentScrollY > 8) {
        // Scrolling up -> show header
        setIsHeaderVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // URLs
  const paperUrl = "https://drive.google.com/file/d/1CCAr86Jl00ynZZyDdFU8kL5x879OL9M3/view?usp=sharing";
  const openReviewUrl = "https://openreview.net/pdf?id=QGcF4561UP";
  const resumeUrl = "https://drive.google.com/file/d/1w8k__EWaOjgQ_lIn8L2xTy4CxIAGGHXe/view?usp=sharing";
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.anilkumar09.news&pcampaignid=web_share";
  const sporaXUrl = "https://x.com/anilKumar09873/status/2096482373299057022";
  const researchXUrl = "https://x.com/anilKumar09873/status/2108649451917308224?s=20";
  const omnireconGithubUrl = "https://github.com/anilkumara9/omnirecon";
  const omnireconXUrl = "https://x.com/anilKumar09873/status/2109905045814968746?s=20";
  const githubUrl = "https://github.com/anilkumara9";
  const linkedinUrl = "https://www.linkedin.com/in/anilkumar-meda-2b2624331";
  const twitterUrl = "https://x.com/anilKumar09873";
  const emailUrl = "mailto:anilkumarmeda6@gmail.com";
  const phoneUrl = "tel:+919986489887";

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    try {
      localStorage.removeItem('darkMode');
    } catch (e) {
      console.warn("Storage access error:", e);
    }
  }, []);

  // Lock background body scroll when modal is open
  useEffect(() => {
    if (activeProjectModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeProjectModal]);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }
      if (e.key === 'c' || e.key === 'C') {
        copyToClipboard('anilkumarmeda6@gmail.com', 'email');
      } else if (e.key === 'r' || e.key === 'R') {
        window.open(resumeUrl, '_blank');
      } else if (e.key === 'p' || e.key === 'P') {
        window.open(paperUrl, '_blank');
      } else if (e.key === 'Escape') {
        setActiveProjectModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2200);
  };

  const handleDownloadPDF = () => {
    generateResumePDF({
      name: "Meda Anilkumar",
      email: "anilkumarmeda6@gmail.com",
      phone: "+91 9986489887",
      location: "Bengaluru, Karnataka, India",
      education: "B.E. in Computer Science - CGPA: 8.09 (NHCE Bengaluru)",
      skills: [
        "Python", "Java", "C", "JavaScript", "TypeScript", "SQL",
        "React.js", "Next.js", "Node.js", "Express.js", "REST APIs", "Tailwind CSS",
        "Pytest", "Vitest", "Playwright", "TDD",
        "PyTorch", "Hugging Face", "LangChain", "RAG", "Vector Databases", "LLM APIs", "AI Agents", "MCP",
        "MongoDB", "MySQL", "PostgreSQL", "Redis", "SQLite", "AWS", "GCP", "Docker", "Kubernetes", "Linux", "Git"
      ],
      projects: allProjects.map(p => ({
        title: p.title,
        description: p.description,
        tech: p.stack,
        impact: p.bulletPoints[0] || p.badge
      }))
    });
  };

  const quickFacts = [
    { label: "Location", val: "Bengaluru, Karnataka, India", icon: MapPin },
    { label: "Academics", val: "B.E. CSE (Data Science), CGPA 8.09 / 10", icon: BookOpen },
    { label: "Experience", val: "AI Intern at CampusPe (Feb – May 2026)", icon: Briefcase },
    { label: "Honors", val: "Second Prize, REVA Hackathon · PES Finalist", icon: Trophy },
  ];

  const skillCategories = [
    {
      category: "Languages",
      icon: Code2,
      domain: "languages",
      items: ["Python", "Java", "C", "JavaScript", "TypeScript", "SQL"],
    },
    {
      category: "Frameworks & APIs",
      icon: Layers,
      domain: "frameworks",
      items: ["React.js", "Next.js", "Node.js", "Express.js", "REST APIs", "Tailwind CSS"],
    },
    {
      category: "Testing",
      icon: CheckCircle2,
      domain: "testing",
      items: ["Pytest", "Vitest", "Playwright", "Test-Driven Development (TDD)"],
    },
    {
      category: "AI / LLM",
      icon: Cpu,
      domain: "ai",
      items: [
        "PyTorch", "Hugging Face", "LangChain", "RAG", "Vector Databases",
        "LLM APIs", "AI Agents", "MCP (Model Context Protocol)",
        "Prompt Engineering", "Model Evaluation", "Large Tabular Models (LTM)", "LLM Pipelines"
      ],
    },
    {
      category: "Machine Learning & Data",
      icon: FlaskConical,
      domain: "data",
      items: ["Scikit-learn", "XGBoost", "Pandas", "NumPy"],
    },
    {
      category: "Cloud, Databases & DevOps",
      icon: Cloud,
      domain: "infra",
      items: [
        "MongoDB", "MySQL", "PostgreSQL", "Redis", "SQLite",
        "AWS", "GCP", "Docker", "Kubernetes", "Linux",
        "Microservices", "System Design", "CI/CD", "Git", "GitHub"
      ],
    },
    {
      category: "Security",
      icon: ShieldCheck,
      domain: "security",
      items: [
        "AI Agent Security", "Prompt Injection Defense", "Secret Redaction",
        "Egress Control", "JWT", "Authentication", "Authorization"
      ],
    },
  ];

  const allProjects = [
    {
      id: "omnirecon",
      title: "OmniRecon: Full-Spectrum Web Recon for Coding Agents",
      period: "Oct 2026 – Present",
      role: "Creator & Open Source Author",
      type: "flagship",
      featured: true,
      badge: "21 MCP Tools · 163 Tests",
      accentBadge: true,
      image: "/ghibli-omnirecon.jpg",
      tagline: "Autonomous Web Reconnaissance & Rebuild Blueprint for Coding Agents 🔍",
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
        { label: "Announcement on 𝕏", url: omnireconXUrl, primary: true },
        { label: "Code on GitHub", url: omnireconGithubUrl, primary: false }
      ]
    },
    {
      id: "spora",
      title: "Spora: Knowledge-First Social Media Platform",
      period: "Mar 2026 – Present",
      role: "Solo Founder & Developer",
      type: "flagship",
      featured: true,
      badge: "Flagship · 200+ users",
      accentBadge: true,
      image: "/ghibli-spora.jpg",
      tagline: "Knowledge-First Social Platform · 200+ Active Users 🚀",
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
      period: "Jan 2026 – Present",
      role: "Independent AI Researcher",
      type: "research",
      featured: true,
      badge: "Springer Accepted · Research Spotlight",
      accentBadge: true,
      image: "/ghibli-scbi.jpg",
      tagline: "Frozen Foundation Model Interpretability · Springer Accepted 📄",
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
        { label: "Read Paper", url: paperUrl, primary: true },
        { label: "OpenReview", url: openReviewUrl, primary: false },
        { label: "GitHub Kit", url: "https://github.com/anilkumara9/SCBI", primary: false },
        { label: "Research on 𝕏", url: researchXUrl, primary: false }
      ]
    },
    {
      id: "hackathon",
      title: "AI Interview Platform (REVA Hackathon Winner)",
      period: "Aug – Sep 2024",
      role: "Hackathon Team Lead",
      type: "hackathon",
      featured: true,
      badge: "Second Prize · Winner out of 50+ Teams",
      accentBadge: true,
      image: "/ghibli-voice.jpg",
      tagline: "Conversational Voice Agent Platform · REVA 2nd Prize 🏆",
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
    },
    {
      id: "invisly",
      title: "Invisly: Real-Time AI Desktop Copilot",
      period: "Jan 2026",
      role: "Full-Stack AI Builder",
      type: "flagship",
      featured: false,
      badge: "Live in Production",
      accentBadge: false,
      image: "/ghibli-copilot.jpg",
      tagline: "Real-Time AI Desktop Copilot · Live in Production ⚡",
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
      period: "Feb – Mar 2026",
      role: "Edge ML Engineer",
      type: "research",
      featured: false,
      badge: "100% Offline Edge ML",
      accentBadge: false,
      image: "/ghibli-hills.jpg",
      tagline: "Offline Computer Vision & Dynamic Collage · T = 0.68 📱",
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
        { label: "GitHub", url: "https://github.com/anilkumara9/college", primary: true }
      ]
    },
    {
      id: "latable",
      title: "LaTable: Generative Foundation Models for Tabular Data",
      period: "2025 – 2026",
      role: "Independent AI Researcher",
      type: "research",
      featured: false,
      badge: "Tabular Foundation Models",
      accentBadge: false,
      image: "/ghibli-desk.jpg",
      tagline: "Generative Foundation Models for Tabular Data 🔬",
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
    }
  ];

  const filteredProjects = selectedCategory === "all"
    ? allProjects
    : allProjects.filter(p => p.type === selectedCategory);

  const filteredSkills = skillDomainFilter === "all"
    ? skillCategories
    : skillCategories.filter(cat => {
      if (skillDomainFilter === "ai") return cat.domain === "ai" || cat.domain === "data";
      if (skillDomainFilter === "fullstack") return cat.domain === "languages" || cat.domain === "frameworks" || cat.domain === "testing";
      if (skillDomainFilter === "infra") return cat.domain === "infra";
      if (skillDomainFilter === "security") return cat.domain === "security";
      return true;
    });


  return (
    <div className="min-h-screen bg-[#EFECE4] text-[#45433D] selection:bg-[#111111] selection:text-[#FAF7EF] w-full max-w-full overflow-x-hidden font-inter">

      {/* ================= YASHB TACTILE NAVBAR (Compact, short floating capsule) ================= */}
      <div className={`sticky top-3 sm:top-5 z-50 w-full px-3 sm:px-6 flex justify-center pointer-events-none transition-all duration-300 transform ${
        isHeaderVisible ? "translate-y-0 opacity-100" : "-translate-y-28 opacity-0"
      }`}>
        <header className="pointer-events-auto yashb-nav px-4 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between gap-3 sm:gap-4 max-w-3xl w-full">

          {/* Logo Mark */}
          <a href="#hero" className="flex items-center gap-2 sm:gap-2.5 group shrink-0 min-w-0">
            <div className="relative shrink-0">
              <img
                src="/anil.png"
                alt="Meda Anilkumar"
                className="h-7.5 w-7.5 sm:h-8 sm:w-8 rounded-full object-cover transition-transform group-hover:scale-105 shadow-[0_2px_0_#DBD6C7] shrink-0"
              />
              <span className="absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full bg-[#FECE12] ring-2 ring-[#FAF7EF]" />
            </div>
            <div className="flex items-center text-left truncate">
              <span className="font-shantell font-[800] text-[14px] sm:text-[15.5px] tracking-tight text-[#111111] leading-tight truncate">
                Meda Anilkumar
              </span>
            </div>
          </a>

          {/* Navigation Links - Curated 4 core sections, compact & balanced */}
          <nav className="hidden md:flex items-center gap-5 sm:gap-6 text-[13px] sm:text-[13.5px] font-[600] font-inter text-[#45433D]">
            <a href="#about" className="hover:text-[#111111] transition-colors">About</a>
            <a href="#projects" className="hover:text-[#111111] transition-colors">Projects</a>
            <a href="#research" className="hover:text-[#111111] transition-colors">Research</a>
            <a href="#contact" className="hover:text-[#111111] transition-colors">Contact</a>
          </nav>

          {/* Nav Action - Single Clean Crisp 3D Button */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-[12.5px] h-8 sm:h-8.5 px-3.5 sm:px-4 inline-flex items-center gap-1.5 shrink-0 font-[600]"
              title="View & Download Resume"
            >
              <Download className="h-3.5 w-3.5 text-[#FAF7EF] shrink-0" />
              <span>Resume</span>
            </a>
          </div>

        </header>
      </div>



      {/* ================= MAIN CONTAINER - EXTENDS FULLY TO SIDES ================= */}
      <main className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10 max-w-[1360px] pt-4 sm:pt-7 pb-20 sm:pb-28 flex flex-col gap-16 sm:gap-24 lg:gap-32 w-full">

        {/* ================= YASHB HERO SECTION ================= */}
        <section id="hero" className="relative pt-8 pb-10 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 flex flex-col justify-center w-full">

          {/* Ambient Warm Radial Background Glow */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] lg:w-[920px] h-[260px] sm:h-[380px] pointer-events-none rounded-full -z-10 opacity-70 blur-3xl" 
            style={{ background: "radial-gradient(120% 130% at 38% 14%, rgb(254, 253, 249) 0%, rgb(241, 236, 225) 60%, rgb(226, 216, 198) 100%)" }}
          />

          {/* 3-Column Wide Border-Aligned Hero Layout */}
          <div className="w-full flex items-center justify-between gap-4 lg:gap-8 xl:gap-12">

            {/* Left Image Card: Positioned on the left border */}
            <div className="hidden lg:flex w-[210px] xl:w-[235px] shrink-0 justify-start">
              <div
                className="polaroid-card group cursor-pointer w-[205px] xl:w-[230px] transition-all duration-300 hover:scale-[1.03]"
                style={{ '--rot': '-3.5deg', transform: 'rotate(-3.5deg)' } as React.CSSProperties}
              >
                <div className="aspect-[4/4.7] w-full rounded-[12px] overflow-hidden bg-[#FAF7EF] mb-2 shadow-inner border border-[#DBD8D0]">
                  <img
                    src="/anil.png"
                    alt="Meda Anilkumar"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    loading="eager"
                  />
                </div>
                <div className="text-center px-1">
                  <span className="font-shantell text-[15px] xl:text-[16px] font-[800] text-[#111111] block leading-tight">Meda Anilkumar</span>
                  <span className="font-mono text-[10px] bg-[#FECE12] text-[#111111] font-[750] px-2 py-0.5 rounded-full inline-block mt-0.5 uppercase tracking-wider shadow-xs">BUILDING COOL STUFF ✨</span>
                </div>
              </div>
            </div>

            {/* Center Hero Column - Extends comfortably without being squeezed */}
            <div className="text-center max-w-2xl xl:max-w-3xl mx-auto space-y-3.5 sm:space-y-4 relative z-10 flex-1 px-1 sm:px-2">

              {/* Mobile Polaroids Duo */}
              <div className="flex lg:hidden items-center justify-center gap-3 pb-0.5">
                <div className="polaroid-card shadow-md p-1.5 rounded-[12px] w-24 sm:w-28" style={{ transform: 'rotate(-2deg)' }}>
                  <div className="aspect-square rounded-[8px] overflow-hidden mb-1 border border-[#DBD8D0]">
                    <img src="/anil.png" alt="Meda Anilkumar" className="w-full h-full object-cover object-top" loading="eager" />
                  </div>
                  <span className="font-shantell text-[11px] sm:text-[12px] font-[800] text-[#111111] block truncate">Anilkumar 👨‍💻</span>
                </div>
                <div className="polaroid-card shadow-md p-1.5 rounded-[12px] w-24 sm:w-28" style={{ transform: 'rotate(2deg)' }}>
                  <div className="aspect-square rounded-[8px] overflow-hidden mb-1 border border-[#DBD8D0]">
                    <img src="/ghibli-hackathon.jpg" alt="Hackathon win" className="w-full h-full object-cover" />
                  </div>
                  <span className="font-shantell text-[11px] sm:text-[12px] font-[800] text-[#111111] block truncate">REVA 2nd 🏆</span>
                </div>
              </div>

              {/* Status Pill Badge with playful tilt */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#DBD8D0] text-[11.5px] sm:text-[12px] font-mono font-[700] text-[#111111] shadow-[0_2px_0_#DBD8D0,inset_0_1px_1.5px_#fff] rotate-[-1deg]">
                <span className="h-2 w-2 rounded-full bg-[#FECE12] animate-pulse" />
                <span>AVAILABLE FOR FULL-TIME &amp; REMOTE ROLES 🚀</span>
              </div>

              {/* Yashb Main Headline */}
              <h1 className="font-shantell text-[28px] xs:text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-[800] text-[#111111] leading-[1.12] tracking-[-0.5px] break-words max-w-3xl mx-auto">
                Hi, I'm <span className="text-[#FECE12] underline decoration-[#FECE12] decoration-wavy decoration-3 underline-offset-6">Meda Anilkumar</span>.
              </h1>

              {/* Subtext in Inter - Personal Introduction & Proof */}
              <p className="font-inter text-[15px] sm:text-[16.5px] font-[450] text-[#45433D] leading-relaxed max-w-xl sm:max-w-2xl mx-auto">
                I'm a software engineer and builder based in Bengaluru. I love building real products and useful developer tools. I created <strong className="text-[#111111] font-[700]">OmniRecon</strong> (21 MCP tools for coding agents), founded <strong className="text-[#111111] font-[700]">Spora</strong> (200+ users on Google Play), contribute to <a href="#opensource" className="text-[#111111] font-[700] underline decoration-[#FECE12] decoration-2 underline-offset-2 hover:text-[#B87500] transition-colors">LiteLLM &amp; Haystack</a>, and published AI research with Springer.
              </p>

              {/* Action Hub with Tactile 3D Soft Clay Buttons */}
              <div className="flex flex-col items-center gap-3.5 sm:gap-4 pt-3 sm:pt-4 w-full max-w-3xl mx-auto">
                
                {/* Row 1: Products & Research Paper */}
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
                  <a
                    href={playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline h-10 sm:h-11 px-4.5 sm:px-5.5 text-[12.5px] sm:text-[13px] group"
                    title="Download / Test Spora on Google Play Store (200+ users)"
                  >
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186A2.38 2.38 0 0 1 3.39 21.8V2.2c0-.134.076-.268.219-.386z" fill="#00D2FF" />
                      <path d="M17.295 8.498L13.792 12 3.609 1.814 17.295 8.498z" fill="#00E676" />
                      <path d="M13.792 12l3.503 3.502-13.685 6.684L13.792 12z" fill="#FF3344" />
                      <path d="M17.295 8.498l3.447 1.963a.85.85 0 0 1 0 1.487l-3.447 1.963-3.503-1.909 3.503-3.504z" fill="#FFD600" />
                    </svg>
                    <span>Google Play</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#6A6253] group-hover:text-[#111111] transition-colors" />
                  </a>

                  <a
                    href={paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline h-10 sm:h-11 px-4.5 sm:px-5.5 text-[12.5px] sm:text-[13px] group"
                    title="Read Springer-Accepted Research Paper (SCBI)"
                  >
                    <FileText className="h-4 w-4 text-[#111111] shrink-0" />
                    <span>Research Paper</span>
                    <span className="text-[9.5px] uppercase tracking-wider font-[750] px-1.5 py-0.5 rounded-full bg-[#111111] text-[#FAF7EF] shrink-0 hidden md:inline">Springer</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#6A6253] group-hover:text-[#111111] transition-colors shrink-0" />
                  </a>

                  <a
                    href={sporaXUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline h-10 sm:h-11 px-4.5 sm:px-5.5 text-[12.5px] sm:text-[13px] group"
                    title="Watch Spora Product Demo Video on 𝕏"
                  >
                    <span className="font-bold text-[13px] leading-none">𝕏</span>
                    <span>Spora on 𝕏</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#6A6253] group-hover:text-[#111111] transition-colors" />
                  </a>
                </div>

                {/* Row 2: Open Source, OpenReview, GitHub Kit, Research on 𝕏 */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full">
                  <a
                    href="#opensource"
                    className="btn-pill-soft text-[12px] font-mono group"
                    title="View Open-Source Contributions (LiteLLM, Haystack, Hugging Face, pandas)"
                  >
                    <GitPullRequest className="h-3.5 w-3.5 text-[#B87500] shrink-0" />
                    <span>Open Source (6 PRs)</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#6A6253] group-hover:text-[#111111] transition-colors shrink-0" />
                  </a>

                  <a
                    href={openReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill-soft text-[12px] font-mono group"
                    title="Read Paper on OpenReview (SCBI)"
                  >
                    <BookOpen className="h-3.5 w-3.5 text-[#111111] shrink-0" />
                    <span>OpenReview</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#6A6253] group-hover:text-[#111111] transition-colors shrink-0" />
                  </a>

                  <a
                    href="https://github.com/anilkumara9/SCBI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill-soft text-[12px] font-mono group"
                    title="SCBI GitHub Falsification Kit"
                  >
                    <Github className="h-3.5 w-3.5 shrink-0" />
                    <span>GitHub Kit</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#6A6253] group-hover:text-[#111111] transition-colors shrink-0" />
                  </a>

                  <a
                    href={researchXUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill-soft text-[12px] font-mono group"
                    title="Read Research Post on 𝕏"
                  >
                    <span className="font-bold text-[11px] leading-none">𝕏</span>
                    <span>Research on 𝕏</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#6A6253] group-hover:text-[#111111] transition-colors shrink-0" />
                  </a>
                </div>
              </div>

              {/* Metadata Contact Row */}
              <div className="pt-5 sm:pt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-5 sm:gap-x-7 text-[12.5px] sm:text-[13px] font-[500] text-[#6A6253] font-inter">
                <span className="inline-flex items-center gap-1.5 text-[#111111] font-[600]">
                  <MapPin className="h-4 w-4 text-[#111111]" />
                  <span>Bengaluru, Karnataka</span>
                </span>

                <span className="text-[#DBD8D0] hidden sm:inline">·</span>

                <button
                  type="button"
                  onClick={() => copyToClipboard('anilkumarmeda6@gmail.com', 'hero-email')}
                  className="inline-flex items-center gap-2 hover:text-[#111111] transition-colors cursor-pointer group bg-transparent border-0 p-0 font-[600] max-w-full text-[#111111]"
                  title="Click to copy email address"
                >
                  <Mail className="h-4 w-4 text-[#6A6253] group-hover:text-[#111111] shrink-0" />
                  <span className="underline decoration-dotted underline-offset-4 truncate max-w-[210px] xs:max-w-none">anilkumarmeda6@gmail.com</span>
                  {copiedItem === 'hero-email' ? (
                    <span className="badge-yashb-blue text-[10px] py-0.5 px-2 shrink-0">Copied!</span>
                  ) : (
                    <Copy className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 shrink-0" />
                  )}
                </button>

                <span className="text-[#DBD8D0] hidden sm:inline">·</span>

                <span className="inline-flex items-center gap-1.5 text-[#111111] font-[600]">
                  <Award className="h-4 w-4 text-[#111111]" />
                  <span>B.E. CSE · CGPA 8.09 / 10</span>
                </span>
              </div>
            </div>

            {/* Right Image Card: Positioned on the right border */}
            <div className="hidden lg:flex w-[210px] xl:w-[235px] shrink-0 justify-end">
              <div
                className="polaroid-card group cursor-pointer w-[205px] xl:w-[230px] transition-all duration-300 hover:scale-[1.03]"
                style={{ '--rot': '3.5deg', transform: 'rotate(3.5deg)' } as React.CSSProperties}
              >
                <div className="aspect-[4/4.7] w-full rounded-[12px] overflow-hidden bg-[#FAF7EF] mb-2 shadow-inner border border-[#DBD8D0]">
                  <img
                    src="/ghibli-hackathon.jpg"
                    alt="Hackathon victory"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="text-center px-1">
                  <span className="font-shantell text-[15px] xl:text-[16px] font-[800] text-[#111111] block leading-tight">Hackathon Victory</span>
                  <span className="font-mono text-[10px] bg-[#FECE12] text-[#111111] font-[750] px-2 py-0.5 rounded-full inline-block mt-0.5 uppercase tracking-wider shadow-xs">REVA 2nd PRIZE 🏆</span>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section id="about" className="scroll-mt-24 space-y-6 sm:space-y-8 w-full">

          {/* Header (No dividing line) */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 pb-2">
            <div>
              <h2 className="font-shantell text-2xl sm:text-3xl md:text-[38px] font-[800] text-[#111111] leading-[1.1] tracking-[-0.4px]">
                Meet <span className="text-[#FECE12] underline decoration-[#FECE12] decoration-wavy decoration-3 underline-offset-4">Anilkumar</span>.
              </h2>
            </div>
          </div>

          {/* 2-Column Luxury Story & Profile Card */}
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">

            {/* Left Column: Humanized Story */}
            <div className="lg:col-span-7 card-yashb p-6 sm:p-8 md:p-10 flex flex-col justify-center space-y-4">
              <div className="space-y-3.5">
                <h3 className="font-shantell text-xl sm:text-2xl font-[800] text-[#111111] leading-snug tracking-tight">
                  Software engineer and builder who loves turning ambitious ideas into dependable products.
                </h3>
                <div className="space-y-3 font-inter text-[14.5px] sm:text-[15.5px] text-[#45433D] leading-relaxed">
                  <p>
                    Hey, I'm Anil! I love building software from the ground up, whether that means crafting clean interfaces, designing reliable backend APIs, or building practical tools for AI coding agents.
                  </p>
                  <p>
                    I enjoy shipping real things that people actually use. When building <strong className="text-[#111111] font-[700]">Spora</strong>, I owned the entire journey from design and database architecture to real-time feeds and the Google Play launch. With <strong className="text-[#111111] font-[700]">OmniRecon</strong>, I built an open-source MCP toolkit that gives AI coding agents real browser awareness, backed by 163 passing tests.
                  </p>
                  <p>
                    I also care about understanding how systems behave. My research on detecting LLM hallucinations was accepted for publication by <strong className="text-[#111111] font-[700]">Springer</strong>, which taught me to validate ideas with measurable data. Above all, I enjoy collaborating with teams, listening to users, and writing code that is clean, fast, and easy to maintain.
                  </p>
                </div>

                {/* Focus Tags */}
                <div className="pt-2 flex flex-wrap gap-2 text-[12px]">
                  <span className="tag-yashb inline-flex items-center gap-1.5">
                    <span>⚡</span>
                    <span>Full-Stack &amp; Applied AI</span>
                  </span>
                  <span className="tag-yashb inline-flex items-center gap-1.5">
                    <span>🎧</span>
                    <span>Real-Time Streaming &amp; Inference</span>
                  </span>
                  <span className="tag-yashb inline-flex items-center gap-1.5">
                    <span>📄</span>
                    <span>Springer-Accepted Author</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Portrait Card */}
            <div className="lg:col-span-5 card-yashb p-3 sm:p-4 flex flex-col justify-center">
              <div className="relative w-full h-[320px] sm:h-[350px] lg:h-full lg:min-h-[320px] rounded-[22px] overflow-hidden bg-[#FAF7EF] shadow-[inset_0_2px_4px_rgba(60,50,35,0.06),0_1.5px_2px_#fff] group">
                <img
                  src="/anil.png"
                  alt="Meda Anilkumar"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                {/* Top Floating Badge */}
                <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-mono font-[700] text-[#111111] shadow-[0_2px_8px_rgba(0,0,0,0.15),inset_0_1px_1.5px_#fff] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FECE12] animate-pulse" />
                  <span>AVAILABLE: FULL-TIME &amp; REMOTE</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#FECE12]" />
                    <span className="font-mono text-[11px] font-[700] uppercase tracking-wider text-[#FECE12]">Bengaluru, India</span>
                  </div>
                  <h3 className="font-shantell text-2xl font-[800] text-white leading-tight">Meda Anilkumar</h3>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= SELECTED WORK & PROJECTS ================= */}
        <section id="projects" className="space-y-4 scroll-mt-24 w-full">
          {/* Clean Header */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-1">
            <h2 className="font-shantell text-2xl sm:text-3xl font-[800] text-[#111111]">
              Featured <span className="text-[#FECE12] underline decoration-[#FECE12] decoration-wavy decoration-3 underline-offset-4">Projects</span>
            </h2>
            <span className="text-[12.5px] font-mono text-[#6A6253]">
              Agent tools, consumer platforms &amp; foundation model research
            </span>
          </div>

          {/* Tactile Segmented Filter Dock - Snug fit, no right gap */}
          <div className="flex">
            <div className="w-fit inline-flex items-center gap-1.5 p-1.5 bg-white/90 backdrop-blur-md rounded-full border border-[#DBD8D0] shadow-[0_4px_12px_-2px_rgba(80,70,55,0.1),inset_0_1.5px_2px_#fff] overflow-x-auto no-scrollbar max-w-full">
              {[
                { id: "flagship", label: "Flagship Products", count: allProjects.filter(p => p.type === 'flagship').length },
                { id: "research", label: "AI Research", count: allProjects.filter(p => p.type === 'research').length },
                { id: "hackathon", label: "Hackathon Winner", count: allProjects.filter(p => p.type === 'hackathon').length }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all cursor-pointer font-[700] text-[12px] sm:text-[12.5px] flex items-center gap-2 whitespace-nowrap shrink-0 ${
                    selectedCategory === tab.id
                      ? 'bg-gradient-to-b from-[#22201D] to-[#11100E] text-[#FAF8F4] shadow-[0_3px_8px_-1px_rgba(0,0,0,0.35),inset_0_1px_1.5px_rgba(255,255,255,0.25)]'
                      : 'text-[#45433D] hover:text-[#111111] hover:bg-[#F3EFE6]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    selectedCategory === tab.id ? 'bg-white/20 text-[#FAF7EF]' : 'bg-[#EFECE4] text-[#6A6253]'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Clean Responsive Project Cards Grid - Only displays selected category */}
          <div className={`grid gap-5 sm:gap-6 w-full pt-1 ${
            filteredProjects.length === 1 
              ? 'grid-cols-1 max-w-xl' 
              : filteredProjects.length === 2 
                ? 'grid-cols-1 md:grid-cols-2' 
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="card-project p-6 sm:p-7 flex flex-col justify-between h-full"
              >
                <div className="space-y-3 flex-1 flex flex-col">
                  {/* Top Bar: Status Badge + Period */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="badge-yashb-blue shadow-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      <span>{project.badge}</span>
                    </span>
                    <span className="font-mono text-[11.5px] font-[600] text-[#6A6253]">
                      {project.period}
                    </span>
                  </div>

                  {/* Title & Metric */}
                  <div className="space-y-1 pt-1">
                    <h3 className="font-shantell text-[18px] sm:text-[19px] font-[800] text-[#111111] leading-snug">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap items-center justify-between gap-1 text-[12px] font-mono">
                      <span className="font-[600] text-[#6A6253]">{project.role}</span>
                      <span className="font-[700] text-[#B87500]">{project.lldMetric}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-inter text-[13px] text-[#45433D] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1 mt-auto">
                    {project.stack.map((tech: string) => (
                      <span key={tech} className="tag-yashb text-[10.5px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 mt-5 grid grid-cols-2 gap-2 w-full border-t border-[#DBD8D0]/50">
                  <a
                    href={project.links[0]?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary h-9 text-[12px] px-3 justify-center min-w-0 group/btn"
                  >
                    <span className="truncate">{project.links[0]?.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveProjectModal(project)}
                    className="btn-outline h-9 text-[12px] px-3 justify-center min-w-0 cursor-pointer"
                    title="Inspect Low-Level Architecture Specs"
                  >
                    <Cpu className="h-3.5 w-3.5 text-[#B87500] shrink-0" />
                    <span className="truncate">Architecture</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= OPEN-SOURCE CONTRIBUTIONS (TIER-1 REPOS) ================= */}
        <OpenSourceSection />

        {/* ================= CORE CAPABILITIES & STACK ================= */}
        <section id="skills" className="space-y-6 sm:space-y-8 scroll-mt-24 w-full">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 pb-2">
            <div>
              <h2 className="font-shantell text-2xl sm:text-3xl md:text-[38px] font-[800] text-[#111111] leading-[1.1] tracking-[-0.4px]">
                Skills &amp; <span className="text-[#FECE12] underline decoration-[#FECE12] decoration-wavy decoration-3 underline-offset-4">technologies</span> I work with.
              </h2>
            </div>

            {/* Domain Switcher Pills - Borderless 3D Stadium Dock */}
            <div className="flex items-center gap-1.5 p-1.5 bg-white/85 backdrop-blur-md rounded-full text-[12px] sm:text-[12.5px] font-[500] shadow-[0_4px_12px_-2px_rgba(80,70,55,0.12),inset_0_1.5px_2px_#fff] max-w-full overflow-x-auto no-scrollbar shrink-0">
              {[
                { id: "all", label: "All Stack" },
                { id: "ai", label: "AI & ML" },
                { id: "fullstack", label: "Languages & Frameworks" },
                { id: "infra", label: "Cloud & DevOps" },
                { id: "security", label: "Security & Testing" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSkillDomainFilter(tab.id)}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap shrink-0 font-inter text-[12px] ${skillDomainFilter === tab.id
                      ? 'bg-gradient-to-b from-[#22201D] to-[#11100E] text-[#FAF8F4] font-[600] shadow-[0_3px_8px_-1px_rgba(0,0,0,0.35),inset_0_1px_1.5px_rgba(255,255,255,0.3)]'
                      : 'text-[#45433D] hover:text-[#111111] hover:bg-black/5'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">

            {/* Grid of Domain Taxonomy Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredSkills.map((group) => {
                const Icon = group.icon;
                return (
                  <div
                    key={group.category}
                    className="card-yashb p-6 space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-[14px] bg-[#FECE12]/20 border border-[#FECE12]/40 shadow-[0_3px_8px_-1px_rgba(80,70,55,0.14),inset_0_1.5px_2px_#fff] flex items-center justify-center shrink-0 text-[#111111]">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <h4 className="font-shantell text-[16.5px] font-[800] text-[#111111]">
                        {group.category}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="tag-yashb text-[11.5px]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Engineering Depth Philosophy Banner */}
            <div className="card-tactile-sm p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[13.5px] text-[#45433D] font-inter">
              <div className="flex items-center gap-2.5">
                <Sparkles className="h-4 w-4 text-[#B87500] shrink-0" />
                <span>
                  <strong className="text-[#111111] font-[700]">Engineering Principle:</strong> From transformer residual stream activations down to sub-100ms client-side DOM reconciliation, engineered for production reliability.
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#B87500] font-[700] uppercase tracking-wider shrink-0">
                zero-leakage · type-safe · reproducible
              </span>
            </div>
          </div>

        </section>

        {/* ================= RESEARCH & PUBLICATIONS ================= */}
        <section id="research" className="space-y-6 sm:space-y-8 scroll-mt-24 w-full">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 pb-2">
            <div>
              <h2 className="font-shantell text-2xl sm:text-3xl md:text-[38px] font-[800] text-[#111111] leading-[1.1] tracking-[-0.4px]">
                AI research &amp; <span className="text-[#FECE12] underline decoration-[#FECE12] decoration-wavy decoration-3 underline-offset-4">publications</span>.
              </h2>
            </div>
            <p className="font-inter text-[13px] text-[#6A6253] max-w-md sm:text-right">
              Independent research probing foundation model representations with open reproducible kits.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">

            {/* Research Card 1: SCBI */}
            <div className="card-yashb p-5 sm:p-7 md:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="badge-yashb-lavender">
                    Springer Accepted
                  </span>
                  <span className="font-mono text-[11.5px] font-[700] text-[#111111]">
                    JAN 2026 – PRESENT
                  </span>
                </div>

                <div>
                  <h3 className="font-shantell text-lg sm:text-xl font-[800] text-[#111111] leading-tight">
                    SCBI: Self-Consistent Basis Invention
                  </h3>
                  <p className="font-mono text-[12px] font-[700] text-[#B87500] mt-1">
                    Mechanistic Interpretability &amp; Latent Basis Discovery
                  </p>
                </div>

                <div className="p-4 rounded-[20px] bg-gradient-to-b from-[#FAF8F4] to-[#F3EFE6] text-[12.5px] text-[#111111] leading-relaxed font-mono shadow-[inset_0_2px_4px_rgba(60,50,35,0.06),0_1.5px_2px_#fff]">
                  "Empirical boundary result: decodable concept directions (~0.7 cosine) demonstrate zero causal transfer under static steering (p = 1.0, replicated)."
                </div>

                <div className="space-y-1.5 text-[13px] text-[#45433D] font-inter">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#B87500] shrink-0 mt-0.5" />
                    <span>Inference-time representation learning without modifying billions of weights</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#B87500] shrink-0 mt-0.5" />
                    <span>Shipped turn-key open-source falsification suite on GitHub</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#B87500] shrink-0 mt-0.5" />
                    <span>Accepted for publication in peer-reviewed scientific proceedings (Springer)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                <a
                  href="https://github.com/anilkumara9/SCBI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-[11.5px] sm:text-[12px] h-9 px-2 sm:px-3 justify-center min-w-0"
                >
                  <Github className="h-3.5 w-3.5 shrink-0 text-[#FAF7EF]" />
                  <span className="truncate">GitHub Kit</span>
                </a>

                <a
                  href={paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-[11.5px] sm:text-[12px] h-9 px-2 sm:px-3 justify-center min-w-0"
                >
                  <FileText className="h-3.5 w-3.5 text-[#111111] shrink-0" />
                  <span className="truncate">PDF Paper</span>
                </a>

                <a
                  href={openReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-[11.5px] sm:text-[12px] h-9 px-2 sm:px-3 justify-center min-w-0 hover:text-[#111111]"
                  title="Read on OpenReview"
                >
                  <BookOpen className="h-3.5 w-3.5 text-[#111111] shrink-0" />
                  <span className="truncate">OpenReview</span>
                </a>

                <a
                  href={researchXUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-[11.5px] sm:text-[12px] h-9 px-2 sm:px-3 justify-center min-w-0 hover:text-[#111111]"
                  title="Read Research Post on 𝕏"
                >
                  <span className="font-bold text-[11px] leading-none shrink-0">𝕏</span>
                  <span className="truncate">Research on 𝕏</span>
                </a>
              </div>
            </div>

            {/* Research Card 2: LaTable */}
            <div className="card-yashb p-6 sm:p-8 md:p-9 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="badge-yashb-blue">
                    Foundation Models
                  </span>
                  <span className="font-mono text-[12px] font-[700] text-[#6A6253]">
                    2025 – 2026
                  </span>
                </div>

                <div>
                  <h3 className="font-shantell text-xl sm:text-2xl font-[800] text-[#111111] leading-tight">
                    LaTable: Generative Models for Tabular Data
                  </h3>
                  <p className="font-mono text-[12.5px] font-[700] text-[#B87500] mt-1">
                    Diffusion-Transformer Generation &amp; Metadata Conditioning
                  </p>
                </div>

                <div className="p-4 rounded-[20px] bg-gradient-to-b from-[#FAF8F4] to-[#F3EFE6] text-[13px] text-[#111111] leading-relaxed font-mono shadow-[inset_0_2px_4px_rgba(60,50,35,0.06),0_1.5px_2px_#fff]">
                  "Researched diffusion-transformer generation of tabular datasets; analyzed LLM metadata encoding, mixed-type modeling, and permutation equivariance."
                </div>

                <div className="space-y-2 text-[13.5px] text-[#45433D] font-inter">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#B87500] shrink-0 mt-0.5" />
                    <span>Diffusion formulations for mixed continuous and discrete distributions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#B87500] shrink-0 mt-0.5" />
                    <span>Benchmarked against CTGAN and TabDDPM baselines</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#B87500] shrink-0 mt-0.5" />
                    <span>LLM contextual encoders for relational column prior mapping</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between text-[13px] text-[#6A6253]">
                <span className="font-mono font-[700] flex items-center gap-1.5 text-[#111111]">
                  <FlaskConical className="h-4 w-4 text-[#B87500]" />
                  <span>TABULAR MODALITY RESEARCH</span>
                </span>
                <span className="tag-yashb text-[11px] font-mono font-[700] text-[#111111]">
                  INDEPENDENT PROJECT
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* ================= CAREER & EDUCATION TRACK RECORD ================= */}
        <section id="experience" className="space-y-8 scroll-mt-24">
          <InteractiveTimeline />
        </section>

        {/* ================= CONTACT SECTION ================= */}
        <section id="contact" className="space-y-8 scroll-mt-24">
          <ContactForm />
        </section>

      </main>

      {/* ================= YASHB TACTILE WARM DARK FOOTER ================= */}
      <footer 
        className="w-full text-[#FAF7EF] pt-20 sm:pt-24 pb-14 sm:pb-16 px-4 sm:px-6 mt-20 sm:mt-28 relative overflow-hidden bg-[#181614] border-t border-[#34302A]"
      >

        {/* Soft Warm Radial Ambient Top Glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[850px] h-[240px] pointer-events-none rounded-full opacity-60 blur-3xl -z-0"
          style={{ background: "radial-gradient(50% 50% at 50% 0%, rgba(239, 236, 228, 0.16) 0%, transparent 100%)" }}
        />

        <div className="container mx-auto max-w-[1360px] space-y-12 relative z-10 text-center">

          {/* Main Footer Headline */}
          <div className="space-y-3.5 max-w-3xl mx-auto">
            <span className="font-mono text-[11px] font-[700] uppercase tracking-widest text-[#E7E1D2]/70 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md shadow-xs inline-block mb-1">
              LET'S COLLABORATE
            </span>
            <h2 className="font-shantell text-3xl sm:text-5xl lg:text-[54px] font-[800] text-[#FAF8F5] tracking-tight leading-[1.15]">
              Ready to build <span className="underline decoration-[#DBD6C7]/50 decoration-wavy">something amazing?</span>
            </h2>
            <p className="font-inter text-[15px] sm:text-[16.5px] text-[#E7E1D2]/80 leading-relaxed max-w-2xl mx-auto pt-1">
              Open for full-time Software Engineer and AI roles in Bengaluru or Remote. Feel free to reach out if you'd like to collaborate or just have a chat!
            </p>
          </div>

          {/* Action Row - Tactile 3D Buttons (Generous spacing & height) */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4.5 pt-1">
            <a
              href={emailUrl}
              className="btn-outline h-12 px-6 text-[13.5px] font-[600] inline-flex items-center gap-2.5 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.5),inset_0_1.5px_2px_#fff,inset_0_-2px_4px_rgba(180,168,145,0.2)] bg-gradient-to-b from-[#FFFFFF] to-[#FAF8F4] text-[#111111]"
            >
              <Mail className="h-4 w-4 shrink-0 text-[#111111]" />
              <span className="truncate max-w-[210px] xs:max-w-none">anilkumarmeda6@gmail.com</span>
            </a>

            <button
              type="button"
              onClick={() => copyToClipboard('anilkumarmeda6@gmail.com', 'footer-email')}
              className="h-12 px-5 rounded-full bg-white/10 hover:bg-white/15 text-[#FAF7EF] backdrop-blur-md text-[13px] font-[600] inline-flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_1.5px_rgba(255,255,255,0.18)] cursor-pointer transition-all hover:-translate-y-0.5 active:translate-y-0.5"
            >
              {copiedItem === 'footer-email' ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>Copied to clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copy email</span>
                </>
              )}
            </button>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-5 rounded-full bg-white/10 hover:bg-white/15 text-[#FAF7EF] backdrop-blur-md text-[13px] font-[600] inline-flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_1.5px_rgba(255,255,255,0.18)] cursor-pointer transition-all hover:-translate-y-0.5 active:translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Social Links Dock - Floating 3D Stadium Capsule (Matching reference image) */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-5 sm:gap-7 px-6 sm:px-9 py-3 sm:py-3.5 rounded-full bg-white/[0.08] backdrop-blur-md shadow-[0_8px_24px_-4px_rgba(0,0,0,0.35),inset_0_1px_1.5px_rgba(255,255,255,0.15)] text-[13px] sm:text-[13.5px] font-[600] text-[#E7E1D2]">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <span className="opacity-40">·</span>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <span className="opacity-40">·</span>
              <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                <span className="font-bold text-[12.5px] leading-none">𝕏</span>
                <span>Profile</span>
              </a>
              <span className="opacity-40">·</span>
              <a href={paperUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                <FileText className="h-4 w-4" />
                <span>Springer Paper</span>
              </a>
              <span className="opacity-40">·</span>
              <a href={openReviewUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                <BookOpen className="h-4 w-4" />
                <span>OpenReview</span>
              </a>
              <span className="opacity-40">·</span>
              <a href={researchXUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                <span className="font-bold text-[12.5px] leading-none">𝕏</span>
                <span>Research</span>
              </a>
            </div>
          </div>

          {/* Copyright & Keyboard Hint */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[12px] text-[#E7E1D2]/60 font-inter">
            <p>© {new Date().getFullYear()} Meda Anilkumar. Designed &amp; built in Bengaluru, Karnataka.</p>
            <div className="hidden sm:flex items-center justify-center gap-2">
              <kbd className="px-1.5 py-0.5 rounded-[4px] bg-white/10 border border-white/20 font-mono text-[10px] text-[#FAF7EF]">C</kbd>
              <span>copy email</span>
              <span className="mx-1">·</span>
              <kbd className="px-1.5 py-0.5 rounded-[4px] bg-white/10 border border-white/20 font-mono text-[10px] text-[#FAF7EF]">R</kbd>
              <span>resume</span>
              <span className="mx-1">·</span>
              <kbd className="px-1.5 py-0.5 rounded-[4px] bg-white/10 border border-white/20 font-mono text-[10px] text-[#FAF7EF]">P</kbd>
              <span>paper</span>
            </div>
          </div>

        </div>
      </footer>

      {/* ================= LOW-LEVEL DESIGN (LLD) SPECIFICATION MODAL ================= */}
      {activeProjectModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveProjectModal(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#FFFFFF] rounded-[24px] shadow-2xl overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col my-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Modal Header */}
            <div className="flex items-start justify-between gap-3 sm:gap-4 p-4 sm:p-6 shadow-[0_2.5px_0_#DBD6C7] bg-[#FAF7EF]/95 backdrop-blur-md shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="badge-yashb-blue text-[10px]">
                    {activeProjectModal.lldType || "SYSTEM ARCHITECTURE"}
                  </span>
                  <span className="font-mono text-[11.5px] font-[700] text-[#6A6253]">
                    {activeProjectModal.period}
                  </span>
                </div>
                <h3 className="font-shantell text-xl sm:text-2xl font-[800] text-[#111111]">
                  {activeProjectModal.title}
                </h3>
                <p className="font-mono text-[12px] text-[#6A6253] font-[600] mt-0.5">
                  {activeProjectModal.role}
                </p>
              </div>

              <button
                onClick={() => setActiveProjectModal(null)}
                aria-label="Close modal"
                className="btn-outline h-8 w-8 p-0 flex items-center justify-center cursor-pointer shrink-0"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Scrollable Modal Body */}
            <div className="p-4 sm:p-6 space-y-5 sm:space-y-6 overflow-y-auto modal-scrollbar flex-1 bg-[#FFFFFF]">

              {/* Architecture Blueprint Banner */}
              <div className="p-4 sm:p-5 rounded-[16px] bg-gradient-to-r from-[#1E1C1A] to-[#11100E] text-[#FAF8F5] shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
                <div className="space-y-1">
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#FECE12] font-[700] block">
                    {activeProjectModal.lldType || "SYSTEM ARCHITECTURE SPEC"}
                  </span>
                  <span className="font-shantell text-[17px] sm:text-[19px] font-[800] text-[#FFFFFF] block leading-snug">
                    {activeProjectModal.title}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="font-mono bg-[#FECE12]/20 text-[#FECE12] px-3 py-1.5 rounded-full border border-[#FECE12]/30 font-[700] text-[11px]">
                    {activeProjectModal.lldMetric}
                  </span>
                  <span className="badge-yashb-blue text-[10.5px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FECE12] animate-pulse" />
                    <span>{activeProjectModal.badge}</span>
                  </span>
                </div>
              </div>

              {/* Architecture Pipeline Flowchart */}
              {activeProjectModal.lldFlow && activeProjectModal.lldFlow.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="font-[750] text-[#B87500] flex items-center gap-1.5 uppercase tracking-wider">
                      <Terminal className="h-3.5 w-3.5" />
                      <span>Component Pipeline &amp; Data Flow</span>
                    </span>
                    <span className="text-[#6A6253] font-[500] text-[10.5px]">Execution Trace</span>
                  </div>

                  <div className="p-3.5 rounded-[12px] bg-[#FAF7EF] border border-[#DBD8D0]">
                    <div className="flex items-center gap-1.5 overflow-x-auto modal-scrollbar pb-1 pt-0.5">
                      {activeProjectModal.lldFlow.map((step: string, sIdx: number) => (
                        <React.Fragment key={sIdx}>
                          <div className="shrink-0 px-2.5 py-1 rounded-[6px] bg-white border border-[#DBD8D0] shadow-2xs flex items-center gap-1.5">
                            <span className="h-3.5 w-3.5 rounded-full bg-[#FECE12] text-[#111111] font-mono text-[9.5px] font-bold flex items-center justify-center">
                              {sIdx + 1}
                            </span>
                            <span className="text-[11.5px] font-mono font-[700] text-[#111111]">
                              {step}
                            </span>
                          </div>
                          {sIdx < activeProjectModal.lldFlow.length - 1 && (
                            <span className="text-[#B87500] font-bold text-[11px] shrink-0">➔</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* System Overview */}
              <div className="space-y-1.5">
                <h4 className="text-[11px] font-mono font-[700] uppercase tracking-wider text-[#6A6253] flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-[#B87500]" />
                  <span>System Overview</span>
                </h4>
                <p className="text-[13.5px] text-[#45433D] font-inter leading-relaxed bg-[#FAF7EF] p-4 rounded-[12px] border border-[#DBD8D0]">
                  {activeProjectModal.description}
                </p>
              </div>

              {/* Problem & System Constraints */}
              {activeProjectModal.deepDive?.problem && (
                <div className="space-y-1.5">
                  <h4 className="text-[11px] font-mono font-[700] uppercase tracking-wider text-[#6A6253] flex items-center gap-1.5">
                    <AlertCircle className="h-3.5 w-3.5 text-amber-600" />
                    <span>Problem &amp; System Constraints</span>
                  </h4>
                  <p className="text-[13.5px] text-[#45433D] font-inter leading-relaxed bg-[#FAF7EF] p-4 rounded-[12px] border border-[#DBD8D0]">
                    {activeProjectModal.deepDive.problem}
                  </p>
                </div>
              )}

              {/* Low-Level Design & Key Decisions */}
              {activeProjectModal.deepDive?.architecture && (
                <div className="space-y-1.5">
                  <h4 className="text-[11px] font-mono font-[700] uppercase tracking-wider text-[#6A6253] flex items-center gap-1.5">
                    <Cpu className="h-3.5 w-3.5 text-[#B87500]" />
                    <span>Low-Level Architecture &amp; Technical Invariants</span>
                  </h4>
                  <p className="text-[13.5px] text-[#45433D] font-inter leading-relaxed bg-[#FAF7EF] p-4 rounded-[12px] border border-[#DBD8D0]">
                    {activeProjectModal.deepDive.architecture}
                  </p>
                </div>
              )}

              {/* Technical Telemetry & Invariants Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-[12px]">
                <div className="p-3.5 rounded-[12px] bg-[#FAF7EF] border border-[#DBD8D0]">
                  <span className="text-[10px] uppercase font-[700] text-[#B87500] block mb-0.5">Primary Storage</span>
                  <span className="text-[#111111] font-[600] text-[12px]">{activeProjectModal.lldStorage || "Stateful Cache / DB"}</span>
                </div>
                <div className="p-3.5 rounded-[12px] bg-[#FAF7EF] border border-[#DBD8D0]">
                  <span className="text-[10px] uppercase font-[700] text-[#B87500] block mb-0.5">Concurrency Pattern</span>
                  <span className="text-[#111111] font-[600] text-[12px]">{activeProjectModal.lldPattern || "Asynchronous Non-Blocking"}</span>
                </div>
                <div className="p-3.5 rounded-[12px] bg-[#FAF7EF] border border-[#DBD8D0]">
                  <span className="text-[10px] uppercase font-[700] text-[#B87500] block mb-0.5">Key Metric / Latency</span>
                  <span className="text-[#111111] font-[600] text-[12px]">{activeProjectModal.lldMetric || "Sub-second Execution"}</span>
                </div>
                <div className="p-3.5 rounded-[12px] bg-[#FAF7EF] border border-[#DBD8D0]">
                  <span className="text-[10px] uppercase font-[700] text-[#B87500] block mb-0.5">System Paradigm</span>
                  <span className="text-[#111111] font-[600] text-[12px]">{activeProjectModal.lldType || "Decoupled Architecture"}</span>
                </div>
              </div>

              {/* Core Engineering Highlights */}
              {activeProjectModal.bulletPoints && activeProjectModal.bulletPoints.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-[11px] font-mono font-[700] uppercase tracking-wider text-[#6A6253] flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-[#B87500]" />
                    <span>Core Engineering Highlights</span>
                  </h4>
                  <div className="space-y-2 bg-[#FAF7EF] p-4 rounded-[12px] border border-[#DBD8D0]">
                    {activeProjectModal.bulletPoints.map((pt: string, i: number) => (
                      <div key={i} className="flex items-start gap-2.5 text-[13px] text-[#45433D] font-inter">
                        <CheckCircle2 className="h-4 w-4 text-[#B87500] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Measurable Outcomes */}
              {activeProjectModal.deepDive?.keyOutcomes && activeProjectModal.deepDive.keyOutcomes.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-[11px] font-mono font-[700] uppercase tracking-wider text-[#6A6253] flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Measurable System Outcomes</span>
                  </h4>
                  <div className="space-y-2 bg-[#FAF7EF] p-4 rounded-[12px] border border-[#DBD8D0]">
                    {activeProjectModal.deepDive.keyOutcomes.map((outcome: string, i: number) => (
                      <div key={i} className="flex items-start gap-2.5 text-[13px] text-[#45433D] font-inter">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Full Tech Stack */}
              <div className="space-y-2">
                <h4 className="text-[11px] font-mono font-[700] uppercase tracking-wider text-[#6A6253] flex items-center gap-1.5">
                  <Code2 className="h-3.5 w-3.5 text-[#B87500]" />
                  <span>Full Technology Stack</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeProjectModal.stack.map((tech: string) => (
                    <span
                      key={tech}
                      className="tag-yashb text-[11.5px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Sticky Modal Footer with Actions */}
            <div className="p-3.5 sm:p-5 shadow-[0_-2.5px_0_#DBD6C7] bg-[#FAF7EF] flex flex-wrap items-center justify-between gap-3 shrink-0">
              <span className="hidden sm:inline font-mono text-[12px] text-[#6A6253]">
                Architecture Specifications · {activeProjectModal.title}
              </span>
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                {activeProjectModal.links?.map((link: any) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      link.primary
                        ? 'btn-primary text-[12px] h-9 px-4 flex-1 sm:flex-none'
                        : 'btn-outline text-[12px] h-9 px-4 flex-1 sm:flex-none'
                    }
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ))}
                <button
                  type="button"
                  onClick={() => setActiveProjectModal(null)}
                  className="btn-outline text-[12px] h-9 px-4 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}