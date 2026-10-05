import React, { useState, useEffect, useRef } from "react";
import {
  ExternalLink, Mail, Github, Linkedin, MapPin, Award,
  BookOpen, Download, Phone, Sparkles, FileText, ArrowUpRight, Cpu,
  Layers, Database, Cloud, Terminal, CheckCircle2, FlaskConical,
  Briefcase, Trophy, ArrowRight, Play, Check, Copy, Code2, Globe, Search,
  X, ChevronRight, ChevronLeft, UserCheck, ShieldCheck, Zap, Share2, Menu, Smartphone,
  Monitor, Mic, Star, Flame, Compass, Heart, AlertCircle
} from "lucide-react";

// Custom Components
import ContactForm from "./components/ContactForm";
import InteractiveTimeline from "./components/InteractiveTimeline";
import { generateResumePDF } from "./utils/pdfGenerator";

export default function MobbinPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [activeProjectModal, setActiveProjectModal] = useState<any | null>(null);
  const [skillDomainFilter, setSkillDomainFilter] = useState<string>("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const projectsScrollRef = useRef<HTMLDivElement>(null);

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

  const scrollProjects = (direction: "left" | "right") => {
    if (projectsScrollRef.current) {
      const scrollAmount = projectsScrollRef.current.clientWidth * 0.85;
      projectsScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    if (projectsScrollRef.current) {
      projectsScrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [selectedCategory]);

  // URLs
  const paperUrl = "https://drive.google.com/file/d/1CCAr86Jl00ynZZyDdFU8kL5x879OL9M3/view?usp=sharing";
  const resumeUrl = "https://drive.google.com/file/d/19GDGtbuCselt_nlv07FmMmnzNsBU4746/view?usp=sharing";
  const playStoreUrl = "https://play.google.com/apps/testing/com.anilkumara9.news";
  const sporaXUrl = "https://x.com/anilKumar09873/status/2096482373299057022";
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
        "Python", "Java", "JavaScript", "TypeScript", "SQL",
        "React", "Next.js", "Node.js", "Express.js", "Tailwind CSS",
        "PyTorch", "Hugging Face", "LangChain", "RAG", "LLM APIs",
        "MongoDB", "PostgreSQL", "AWS", "Docker", "Git"
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
      icon: Terminal,
      items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C"],
    },
    {
      category: "AI / LLM & Agents",
      icon: Cpu,
      items: [
        "PyTorch", "Hugging Face", "LangChain", "RAG", "Vector Databases",
        "LLM APIs", "AI Agents", "Prompt Engineering", "Large Tabular Models", "Activation Steering"
      ],
    },
    {
      category: "Frontend & Full Stack",
      icon: Layers,
      items: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "REST APIs", "WebSockets"],
    },
    {
      category: "Data & ML",
      icon: FlaskConical,
      items: ["Scikit-learn", "XGBoost", "Pandas", "Feature Engineering", "Model Evaluation", "ML Kit"],
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      items: ["AWS", "GCP", "Docker", "Kubernetes", "Linux", "Microservices", "CI/CD", "Git", "GitHub"],
    },
    {
      category: "Databases",
      icon: Database,
      items: ["MongoDB", "MySQL", "PostgreSQL", "Pinecone"],
    },
  ];

  const allProjects = [
    {
      id: "spora",
      title: "Spora: Knowledge-First Social Media Platform",
      period: "Mar 2026 – Present",
      role: "Solo Founder & Developer",
      type: "product",
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
        { label: "Android Testing", url: "https://play.google.com/apps/testing/com.anilkumara9.news", primary: false }
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
        { label: "GitHub Kit", url: "https://github.com/anilkumara9/SCBI", primary: false }
      ]
    },
    {
      id: "hackathon",
      title: "AI Interview Platform (REVA Hackathon Winner)",
      period: "Aug – Sep 2024",
      role: "Hackathon Team Lead",
      type: "product",
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
      type: "product",
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
      type: "ml",
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
      if (skillDomainFilter === "ai") return cat.category.toLowerCase().includes("ai") || cat.category.toLowerCase().includes("ml");
      if (skillDomainFilter === "fullstack") return cat.category.toLowerCase().includes("frontend") || cat.category.toLowerCase().includes("languages");
      if (skillDomainFilter === "infra") return cat.category.toLowerCase().includes("cloud") || cat.category.toLowerCase().includes("databases");
      return true;
    });


  return (
    <div className="min-h-screen bg-[#ffffff] text-[#111113] selection:bg-[#111113] selection:text-[#ffffff] w-full max-w-full overflow-x-hidden">

      {/* ================= MINIMAL EDITORIAL NAVBAR ================= */}
      <div className={`sticky top-2 sm:top-5 z-50 w-full px-2.5 sm:px-6 flex justify-center pointer-events-none mb-3 sm:mb-6 transition-all duration-300 transform ${
        isHeaderVisible ? "translate-y-0 opacity-100" : "-translate-y-28 opacity-0"
      }`}>
        <header className="pointer-events-auto bg-[#ffffff]/95 backdrop-blur-md rounded-full px-3 sm:px-5 lg:px-7 py-2 sm:py-2.5 flex items-center justify-between gap-2 border border-[#e4e4e9] shadow-sm max-w-5xl w-full">

          {/* Logo Mark */}
          <a href="#hero" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
            <div className="relative shrink-0">
              <img
                src="/anil.png"
                alt="Meda Anilkumar"
                className="h-7 w-7 sm:h-8 sm:w-8 rounded-full object-cover transition-transform group-hover:scale-105 border border-[#e0e0e0] shrink-0"
              />
              <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white" />
            </div>
            <div className="flex flex-col text-left truncate">
              <span className="font-[650] text-[13.5px] sm:text-[14px] tracking-tight text-[#111113] leading-tight truncate">
                Meda Anilkumar
              </span>
              <span className="text-[10px] sm:text-[10.5px] font-[500] text-[#6e6e78] hidden md:block">
                SWE & AI Builder
              </span>
            </div>
          </a>

          {/* Minimal Navigation Links - Shown only on large desktop screens to prevent header overflow on tablets */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[13.5px] font-[500] text-[#6e6e78]">
            <a href="#about" className="hover:text-[#111113] transition-colors">About</a>
            <a href="#projects" className="hover:text-[#111113] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#111113] transition-colors">Skills</a>
            <a href="#research" className="hover:text-[#111113] transition-colors">Research</a>
            <a href="#experience" className="hover:text-[#111113] transition-colors">Timeline</a>
            <a href="#contact" className="hover:text-[#111113] transition-colors">Contact</a>
          </nav>

          {/* Nav Actions - Adaptively sized so buttons NEVER come outside the header pill on any device */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Quick Resume Button: visible on all devices, compact on small phones */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-[11.5px] sm:text-[12.5px] h-8 sm:h-8.5 px-2.5 sm:px-3.5 inline-flex items-center gap-1.5 shadow-2xs shrink-0"
              title="View & Download Resume"
            >
              <Download className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-indigo-600 shrink-0" />
              <span className="hidden xs:inline">Resume</span>
            </a>

            {/* Quick Contact CTA: visible on screens >= 640px */}
            <a
              href="#contact"
              className="btn-primary text-[12px] sm:text-[12.5px] h-8 sm:h-8.5 px-3 sm:px-4 hidden sm:inline-flex shadow-2xs shrink-0"
            >
              <span>Get in touch</span>
            </a>

            {/* Mobile / Tablet Menu Button (shown whenever lg navigation links are hidden: < 1024px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden h-8 w-8 sm:h-8.5 sm:w-8.5 rounded-full bg-[#f3f3f6] hover:bg-[#e4e4e9] text-[#111113] flex items-center justify-center transition-colors cursor-pointer shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

        </header>
      </div>

      {/* Mobile Drawer with Backdrop */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop overlay to close when clicking outside */}
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-x-3 sm:inset-x-6 top-16 sm:top-20 z-50 max-w-md mx-auto bg-[#ffffff] border border-[#e4e4e9] rounded-[22px] sm:rounded-[24px] p-4 sm:p-5 shadow-2xl space-y-3 lg:hidden animate-in fade-in slide-in-from-top-4 duration-200 max-h-[calc(100vh-5.5rem)] overflow-y-auto">
            <div className="flex items-center justify-between pb-2 border-b border-[#f0f0f4]">
              <span className="text-[12px] font-[600] uppercase tracking-wider text-[#6e6e78]">Navigation</span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="h-7 w-7 rounded-full bg-[#f3f3f6] text-[#111113] flex items-center justify-center hover:bg-[#e4e4e9] transition-colors"
                aria-label="Close menu"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="flex flex-col space-y-1 text-[14.5px] font-[500] text-[#111113]">
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 hover:bg-[#f8f8fa] rounded-[12px] transition-colors flex items-center justify-between"
              >
                <span>Home</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#a0a0ab]" />
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 hover:bg-[#f8f8fa] rounded-[12px] transition-colors flex items-center justify-between"
              >
                <span>About Meda</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#a0a0ab]" />
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 hover:bg-[#f8f8fa] rounded-[12px] transition-colors font-[600] flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <span>Projects in Action</span>
                  <span className="text-[10px] font-[700] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700">7</span>
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-[#a0a0ab]" />
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 hover:bg-[#f8f8fa] rounded-[12px] transition-colors flex items-center justify-between"
              >
                <span>Architecture &amp; Stack</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#a0a0ab]" />
              </a>
              <a
                href="#research"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 hover:bg-[#f8f8fa] rounded-[12px] transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <span>Research Paper</span>
                  <span className="text-[10px] font-[700] px-2 py-0.5 rounded-full bg-purple-50 text-purple-700">Springer</span>
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-[#a0a0ab]" />
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 hover:bg-[#f8f8fa] rounded-[12px] transition-colors flex items-center justify-between"
              >
                <span>Career Timeline</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#a0a0ab]" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 hover:bg-[#f8f8fa] rounded-[12px] transition-colors flex items-center justify-between"
              >
                <span>Contact</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#a0a0ab]" />
              </a>
            </div>

            <div className="pt-3 border-t border-[#f0f0f4] flex flex-col xs:flex-row gap-2">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex-1 text-[13px] h-10 w-full"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary flex-1 text-[13px] h-10 w-full"
              >
                <span>Get in touch</span>
              </a>
            </div>
          </div>
        </>
      )}

      {/* ================= MAIN CONTAINER ================= */}
      <main className="container mx-auto px-3.5 sm:px-6 lg:px-8 max-w-7xl py-2 sm:py-4 space-y-14 sm:space-y-20 md:space-y-28 overflow-x-hidden w-full">

        {/* ================= EDITORIAL HERO SECTION WITH BORDER-ALIGNED POLAROIDS ================= */}
        <section id="hero" className="relative pt-2 pb-6 sm:py-8 lg:py-12 flex flex-col justify-center overflow-x-hidden w-full">

          {/* Subtle Ambient Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] lg:w-[700px] h-[250px] sm:h-[350px] bg-gradient-to-r from-indigo-100/60 via-purple-100/50 to-blue-100/60 blur-3xl pointer-events-none rounded-full -z-10 max-w-full" />

          {/* 3-Column Wide Border-Aligned Hero Layout */}
          <div className="w-full flex items-center justify-between gap-4 lg:gap-8 xl:gap-12">

            {/* Left Image Card: Positioned on the left border */}
            <div className="hidden lg:flex w-[200px] xl:w-[230px] shrink-0 justify-start">
              <div
                className="polaroid-card group cursor-pointer w-[195px] xl:w-[220px] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] bg-white ring-1 ring-black/5 p-3 pb-3.5 rounded-[20px]"
                style={{ '--rot': '-4deg', transform: 'rotate(-4deg)' } as React.CSSProperties}
              >
                <div className="aspect-[4/4.8] w-full rounded-[14px] overflow-hidden bg-[#ebebf0] mb-2.5 shadow-inner border border-zinc-200">
                  <img
                    src="/anil.png"
                    alt="Meda Anilkumar"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center px-1">
                  <span className="text-[15px] xl:text-[16px] font-[800] text-[#111113] block leading-tight">Meda Anilkumar</span>
                  <span className="text-[11.5px] xl:text-[12px] text-indigo-600 font-[700] mt-0.5 block">SWE & AI Builder 🚀</span>
                </div>
              </div>
            </div>

            {/* Center Hero Column - Compact, perfectly proportioned, all content above fold */}
            <div className="text-center max-w-2xl xl:max-w-3xl mx-auto space-y-4 sm:space-y-5 relative z-10 flex-1 px-1">

              {/* Mobile Polaroids Duo (Shown ONLY on mobile < lg, placed at the top so cards NEVER go below) */}
              <div className="flex lg:hidden items-center justify-center gap-3 pb-1">
                <div className="polaroid-card shadow-md p-2 rounded-[14px] bg-white ring-1 ring-black/5 w-28" style={{ transform: 'rotate(-2deg)' }}>
                  <div className="aspect-square rounded-[8px] overflow-hidden mb-1 border border-zinc-200">
                    <img src="/anil.png" alt="Meda Anilkumar" className="w-full h-full object-cover object-top" />
                  </div>
                  <span className="text-[11px] font-bold text-[#111113] block truncate">Anilkumar 👨‍💻</span>
                </div>
                <div className="polaroid-card shadow-md p-2 rounded-[14px] bg-white ring-1 ring-black/5 w-28" style={{ transform: 'rotate(2deg)' }}>
                  <div className="aspect-square rounded-[8px] overflow-hidden mb-1 border border-zinc-200">
                    <img src="/ghibli-hackathon.jpg" alt="Hackathon win" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[11px] font-bold text-[#111113] block truncate">REVA 2nd 🏆</span>
                </div>
              </div>

              {/* Status Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#f8f8fa] border border-[#e4e4e9] text-[12.5px] sm:text-[13px] font-[650] text-[#111113] shadow-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for new opportunities</span>
              </div>

              {/* Editorial Main Headline with Serif Italic Accent */}
              <h1 className="text-[26px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] font-[850] text-[#111113] leading-[1.15] tracking-tight break-words">
                Hi, I'm <span className="font-editorial italic text-indigo-600 text-[1.12em] font-normal tracking-normal">Meda Anilkumar</span>, building software &amp; AI products.
              </h1>

              {/* Descriptive Subtext */}
              <p className="text-[15px] sm:text-[16.5px] font-[400] text-[#555560] leading-relaxed max-w-xl sm:max-w-2xl mx-auto">
                Computer Science graduate from Bengaluru crafting high-impact products and probing foundation models. Solo founder of <strong className="text-[#111113] font-[700]">Spora</strong> (200+ users), REVA Hackathon winner, and Springer-accepted AI researcher.
              </p>

              {/* Action CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1 w-full max-w-full">
                <a href="#projects" className="btn-primary px-4 sm:px-6 h-10 sm:h-11 md:h-12 text-[13px] sm:text-[14px] shadow-sm max-w-full">
                  <span>Explore my work</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>

                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline px-4 sm:px-6 h-10 sm:h-11 md:h-12 text-[13px] sm:text-[14px] shadow-xs max-w-full"
                  title="View & Download Resume"
                >
                  <Download className="h-4 w-4 shrink-0" />
                  <span>View resume</span>
                </a>

                {/* Research Paper Button */}
                <a
                  href={paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 h-10 sm:h-11 md:h-12 rounded-full text-[13px] sm:text-[14px] font-[650] bg-[#ffffff] text-[#111113] border border-[#e4e4e9] hover:border-indigo-300 hover:bg-indigo-50/60 hover:text-indigo-950 transition-all duration-200 shadow-2xs cursor-pointer group max-w-full"
                  title="Read Springer-Accepted Research Paper (SCBI)"
                >
                  <FileText className="h-4 w-4 text-indigo-600 transition-colors shrink-0" />
                  <span>Research paper</span>
                  <span className="text-[10px] sm:text-[10.5px] uppercase tracking-wider font-[750] px-1.5 sm:px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 shrink-0">
                    Springer
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#6e6e78] group-hover:text-indigo-600 transition-colors shrink-0" />
                </a>
              </div>

              {/* Spora & Google Playstore Button Row */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-0.5">
                {/* Google Play Store Button */}
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-1.5 sm:py-2 rounded-full bg-[#111113] text-white text-[12px] sm:text-[12.5px] font-[600] hover:bg-[#232326] transition-all shadow-xs cursor-pointer group"
                  title="Download / Test Spora on Google Play Store"
                >
                  {/* Exact 4-Color Google Play Store Logo */}
                  <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186A2.38 2.38 0 0 1 3.39 21.8V2.2c0-.134.076-.268.219-.386z" fill="#00D2FF" />
                    <path d="M17.295 8.498L13.792 12 3.609 1.814 17.295 8.498z" fill="#00E676" />
                    <path d="M13.792 12l3.503 3.502-13.685 6.684L13.792 12z" fill="#FF3344" />
                    <path d="M17.295 8.498l3.447 1.963a.85.85 0 0 1 0 1.487l-3.447 1.963-3.503-1.909 3.503-3.504z" fill="#FFD600" />
                  </svg>
                  <span>Google Play</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400 group-hover:text-white transition-colors" />
                </a>

                {/* Spora on X Link Button */}
                <a
                  href={sporaXUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-1.5 sm:py-2 rounded-full bg-[#f8f8fa] border border-[#e4e4e9] text-[#111113] text-[12px] sm:text-[12.5px] font-[600] hover:bg-[#efeff4] hover:border-[#d8d8df] transition-all shadow-xs cursor-pointer group"
                  title="Watch Spora Product Demo Video on 𝕏"
                >
                  <span className="font-bold text-[12px] leading-none">𝕏</span>
                  <span>Spora on 𝕏</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#6e6e78] group-hover:text-[#111113] transition-colors" />
                </a>
              </div>

              {/* Metadata Contact Row */}
              <div className="pt-1 flex flex-wrap items-center justify-center gap-y-1.5 gap-x-5 text-[12.5px] sm:text-[13px] font-[500] text-[#6e6e78]">
                <span className="inline-flex items-center gap-1.5 text-[#111113] font-[600]">
                  <MapPin className="h-4 w-4 text-indigo-600" />
                  <span>Bengaluru, Karnataka</span>
                </span>

                <span className="text-[#d8d8de] hidden sm:inline">·</span>

                <button
                  type="button"
                  onClick={() => copyToClipboard('anilkumarmeda6@gmail.com', 'hero-email')}
                  className="inline-flex items-center gap-1.5 hover:text-[#111113] transition-colors cursor-pointer group bg-transparent border-0 p-0 font-[600] max-w-full"
                  title="Click to copy email address"
                >
                  <Mail className="h-4 w-4 text-[#6e6e78] group-hover:text-indigo-600 shrink-0" />
                  <span className="underline decoration-dotted underline-offset-4 truncate max-w-[210px] xs:max-w-none">anilkumarmeda6@gmail.com</span>
                  {copiedItem === 'hero-email' ? (
                    <span className="badge-popular text-[10.5px] py-0.5 px-2 shrink-0">Copied!</span>
                  ) : (
                    <Copy className="h-3 w-3 opacity-50 group-hover:opacity-100 shrink-0" />
                  )}
                </button>

                <span className="text-[#d8d8de] hidden sm:inline">·</span>

                <span className="inline-flex items-center gap-1.5 text-[#111113] font-[600]">
                  <Award className="h-4 w-4 text-indigo-600" />
                  <span>B.E. CSE · CGPA 8.09 / 10</span>
                </span>
              </div>

            </div>

            {/* Right Image Card: Positioned on the right border */}
            <div className="hidden lg:flex w-[200px] xl:w-[230px] shrink-0 justify-end">
              <div
                className="polaroid-card group cursor-pointer w-[195px] xl:w-[220px] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] bg-white ring-1 ring-black/5 p-3 pb-3.5 rounded-[20px]"
                style={{ '--rot': '4deg', transform: 'rotate(4deg)' } as React.CSSProperties}
              >
                <div className="aspect-[4/4.8] w-full rounded-[14px] overflow-hidden bg-[#ebebf0] mb-2.5 shadow-inner border border-zinc-200">
                  <img
                    src="/ghibli-hackathon.jpg"
                    alt="Hackathon victory"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center px-1">
                  <span className="text-[15px] xl:text-[16px] font-[800] text-[#111113] block leading-tight">Hackathon Victory</span>
                  <span className="text-[11.5px] xl:text-[12px] text-indigo-600 font-[700] mt-0.5 block">REVA 2nd Prize 🏆</span>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section id="about" className="space-y-6 sm:space-y-8 scroll-mt-24 overflow-x-hidden w-full">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-[#e4e4e9] pb-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-[700] text-[#111113]">
                Meet <span className="font-editorial text-indigo-600 text-[1.18em] font-normal">Anilkumar</span>.
              </h2>
            </div>
          </div>

          {/* 2-Column Luxury Story & Profile Card */}
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">

            {/* Left Column: Compact Humanized Story */}
            <div className="lg:col-span-7 bg-[#ffffff] border border-[#e4e4e9] rounded-[22px] sm:rounded-[28px] p-5 sm:p-7 md:p-8 flex flex-col justify-center space-y-4 shadow-xs">
              <div className="space-y-3.5">
                <h3 className="text-xl sm:text-2xl font-[700] text-[#111113] leading-snug tracking-tight">
                  Full-stack AI engineer & researcher turning ambiguous problems into real-world systems.
                </h3>
                <div className="space-y-3 text-[14px] sm:text-[15px] text-[#4b4b53] leading-relaxed">
                  <p>
                    Hey, I’m Anil Kumar! I’m a Computer Science graduate specializing in Data Science, focused on full-stack architecture, applied AI, and developer tools. I enjoy diving deep into hard technical problems and building software that feels effortless to use.
                  </p>
                  <p>
                    I’ve shipped products end-to-end across AI, mobile, and web systems. On <strong className="text-[#111113] font-[600]">Spora</strong>, I owned the entire stack from the ground up—building the product interfaces, backend infrastructure, AI-driven discovery, and production deployment. I’ve also built real-time voice and streaming pipelines, tuning latency and reliability for high-concurrency environments.
                  </p>
                  <p>
                    Alongside building, I conduct independent AI research (including a paper accepted by <strong className="text-[#111113] font-[600]">Springer</strong>), which taught me to challenge assumptions and prove solutions with measurable data. I love working closely with teams and users, understanding true operational constraints, and turning complex, open-ended requirements into dependable software that ships.
                  </p>
                </div>

                {/* Compact Focus Pills */}
                <div className="pt-1 flex flex-wrap gap-2 text-[12px] font-[550] text-[#333338]">
                  <span className="px-3 py-1 rounded-full bg-[#f8f8fa] border border-[#e4e4e9] inline-flex items-center gap-1.5">
                    <span>⚡</span>
                    <span>Full-Stack & Applied AI</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#f8f8fa] border border-[#e4e4e9] inline-flex items-center gap-1.5">
                    <span>🎧</span>
                    <span>Real-Time Streaming & Inference</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#f8f8fa] border border-[#e4e4e9] inline-flex items-center gap-1.5">
                    <span>📄</span>
                    <span>Springer-Accepted Author</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Portrait Card */}
            <div className="lg:col-span-5 bg-[#ffffff] border border-[#e4e4e9] rounded-[22px] sm:rounded-[28px] p-3 sm:p-4 flex flex-col justify-center shadow-xs">
              <div className="relative w-full h-[320px] sm:h-[350px] lg:h-full lg:min-h-[320px] rounded-[20px] overflow-hidden bg-[#f0f0f4] border border-zinc-200 shadow-sm group">
                <img
                  src="/anil.png"
                  alt="Meda Anilkumar"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                {/* Top Floating Badge */}
                <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/40 text-[11px] font-[600] text-emerald-800 shadow-xs flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for roles</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-[11.5px] font-[600] uppercase tracking-wider text-emerald-300">Bengaluru, India</span>
                  </div>
                  <h3 className="text-2xl font-[700] text-white leading-tight">Meda Anilkumar</h3>
                  <p className="text-[13px] text-zinc-300 font-[500] mt-0.5">Software Engineer & AI Systems Builder</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= SELECTED WORK & PROJECTS ================= */}
        <section id="projects" className="space-y-6 sm:space-y-8 scroll-mt-24 overflow-x-hidden w-full">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-[#e4e4e9] pb-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-[700] text-[#111113]">
                Featured <span className="font-editorial text-indigo-600 text-[1.18em] font-normal">projects</span> & systems.
              </h2>
            </div>

            {/* Segmented Filter Pills */}
            <div className="flex items-center gap-1 p-1 bg-[#f3f3f6] rounded-full text-[12px] sm:text-[13px] font-[500] border border-[#e4e4e9] max-w-full overflow-x-auto no-scrollbar shrink-0">
              {[
                { id: "all", label: "All Work" },
                { id: "product", label: "Shipped Platforms" },
                { id: "research", label: "Research" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap shrink-0 ${selectedCategory === tab.id
                      ? 'bg-[#ffffff] text-[#111113] font-[600] shadow-xs'
                      : 'text-[#6e6e78] hover:text-[#111113]'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Horizontal Single-Line Project Showcase (Carousel) */}
          <div
            ref={projectsScrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar -mx-3.5 px-3.5 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          >
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="group w-[82vw] max-w-[340px] sm:w-[320px] lg:w-[340px] shrink-0 snap-start bg-[#ffffff] border border-[#e4e4e9] hover:border-[#111113] rounded-[22px] sm:rounded-[24px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >

                {/* Artwork Container - Compact & Sleek */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 border-b border-[#f0f0f4]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Single Clean Status Badge */}
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-[600] bg-black/65 backdrop-blur-md text-white border border-white/20 shadow-xs flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{project.badge}</span>
                    </span>
                  </div>
                </div>

                {/* Card Content & Details - Compact & Focused */}
                <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">

                    {/* Timeline Period & Telemetry */}
                    <div className="flex items-center justify-between text-[11.5px] font-[500] text-[#6e6e78]">
                      <span>{project.period}</span>
                      <span className="text-[10.5px] font-mono text-indigo-600 font-[650] truncate max-w-[140px]">{project.lldMetric}</span>
                    </div>

                    {/* Title & Role */}
                    <div>
                      <h3 className="text-[16px] sm:text-[17px] font-[700] text-[#111113] leading-snug group-hover:text-indigo-600 transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <span className="text-[12px] font-[500] text-[#6e6e78] block mt-0.5">
                        {project.role}
                      </span>
                    </div>

                    {/* 2-line Description Summary */}
                    <p className="text-[12.5px] text-[#4b4b53] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Stack Badges - Compact Top 3 */}
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {project.stack.slice(0, 3).map((tech: string) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-[10.5px] font-[550] bg-[#f8f8fa] border border-[#e4e4e9] text-[#111113]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded-md text-[10px] font-[550] bg-[#f8f8fa] border border-[#e4e4e9] text-[#6e6e78]">
                          +{project.stack.length - 3}
                        </span>
                      )}
                    </div>

                  </div>

                  {/* Actions Row - Structured 2-Button Grid */}
                  <div className="pt-3 mt-1 border-t border-[#f0f0f4] grid grid-cols-2 gap-2 w-full">
                    <a
                      href={project.links[0]?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-9 px-2.5 sm:px-3 rounded-full bg-[#111113] hover:bg-indigo-600 text-white font-[600] text-[11.5px] sm:text-[12px] inline-flex items-center justify-center gap-1 transition-all shadow-2xs hover:shadow-xs active:scale-98 min-w-0 group/btn"
                    >
                      <span className="truncate">{project.links[0]?.label}</span>
                      <ArrowUpRight className="h-3 w-3 shrink-0 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setActiveProjectModal(project)}
                      className="h-9 px-2.5 sm:px-3 rounded-full bg-white hover:bg-[#f8f8fa] text-[#111113] border border-[#e4e4e9] hover:border-[#111113] font-[600] text-[11.5px] sm:text-[12px] inline-flex items-center justify-center gap-1 transition-all shadow-2xs active:scale-98 min-w-0 cursor-pointer"
                      title="Inspect Low-Level Architecture Specs"
                    >
                      <Cpu className="h-3 w-3 text-indigo-600 shrink-0" />
                      <span className="truncate">Architecture</span>
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>

          {/* Carousel Navigation Bar Below Cards */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-[#f0f0f4]">
            <div className="flex items-center gap-3 text-[13px] text-[#6e6e78]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f8f8fa] border border-[#e4e4e9] font-[600] text-[#111113]">
                <Terminal className="h-3.5 w-3.5 text-indigo-600" />
                <span>Low-Level Architecture Showcase</span>
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline font-[500]">
                {filteredProjects.length} systems & platforms
              </span>
            </div>

            {/* 2 Navigation Buttons to Move Left and Right */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollProjects("left")}
                aria-label="Previous system"
                className="h-12 w-12 rounded-full border border-[#e4e4e9] bg-[#ffffff] text-[#111113] hover:bg-[#111113] hover:text-white hover:border-[#111113] shadow-2xs hover:shadow-md transition-all flex items-center justify-center cursor-pointer active:scale-95 group"
              >
                <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
              </button>
              <button
                onClick={() => scrollProjects("right")}
                aria-label="Next system"
                className="h-12 w-12 rounded-full border border-[#111113] bg-[#111113] text-white hover:bg-indigo-600 hover:border-indigo-600 shadow-2xs hover:shadow-md transition-all flex items-center justify-center cursor-pointer active:scale-95 group"
              >
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

        </section>

        {/* ================= CORE CAPABILITIES & STACK ================= */}
        <section id="skills" className="space-y-6 sm:space-y-8 scroll-mt-24 overflow-x-hidden w-full">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-[#e4e4e9] pb-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-[700] text-[#111113]">
                Architectural <span className="font-editorial text-indigo-600 text-[1.18em] font-normal">stack</span> & systems.
              </h2>
            </div>

            {/* Domain Switcher Pills */}
            <div className="flex items-center gap-1 p-1 bg-[#f3f3f6] rounded-full text-[12px] sm:text-[12.5px] font-[500] border border-[#e4e4e9] max-w-full overflow-x-auto no-scrollbar shrink-0">
              {[
                { id: "all", label: "All Capabilities" },
                { id: "ai", label: "AI & Foundation Models" },
                { id: "fullstack", label: "Full-Stack & Systems" },
                { id: "infra", label: "DevOps & Databases" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSkillDomainFilter(tab.id)}
                  className={`px-3 sm:px-3.5 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap shrink-0 ${skillDomainFilter === tab.id
                      ? 'bg-[#ffffff] text-[#111113] font-[600] shadow-xs'
                      : 'text-[#6e6e78] hover:text-[#111113]'
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
                    className="bg-[#ffffff] border border-[#e4e4e9] hover:border-[#111113] rounded-[24px] p-6 space-y-4 transition-all duration-200 shadow-2xs hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-[#f8f8fa] border border-[#e4e4e9] flex items-center justify-center shrink-0 text-indigo-600">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h4 className="text-[15.5px] font-[700] text-[#111113]">
                        {group.category}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-[12px] font-[500] bg-[#f8f8fa] text-[#111113] border border-[#e4e4e9] hover:bg-[#111113] hover:text-white transition-all cursor-default"
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
            <div className="p-4 sm:p-5 rounded-[20px] bg-[#f8f8fa] border border-[#e4e4e9] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[13px] text-[#6e6e78]">
              <div className="flex items-center gap-2.5">
                <Sparkles className="h-4 w-4 text-indigo-600 shrink-0" />
                <span>
                  <strong className="text-[#111113] font-[600]">Engineering Principle:</strong> From transformer residual stream activations down to sub-100ms client-side DOM reconciliation, engineered for production reliability.
                </span>
              </div>
              <span className="font-mono text-[11px] text-indigo-600 font-[600] shrink-0">
                zero-leakage · type-safe · reproducible
              </span>
            </div>
          </div>

        </section>

        {/* ================= RESEARCH & PUBLICATIONS ================= */}
        <section id="research" className="space-y-6 sm:space-y-8 scroll-mt-24 overflow-x-hidden w-full">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-[#e4e4e9] pb-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-[700] text-[#111113]">
                Foundation models & <span className="font-editorial text-indigo-600 text-[1.18em] font-normal">interpretability</span>.
              </h2>
            </div>
            <p className="text-[14px] text-[#6e6e78] max-w-md sm:text-right">
              Probing frozen transformer representations and tabular generative models with open falsification suites.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Research Card 1: SCBI */}
            <div className="bg-[#ffffff] border border-[#e4e4e9] hover:border-[#111113] rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-md">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-[600] tracking-wide uppercase bg-purple-50 text-purple-700 border border-purple-200">
                    Springer Accepted
                  </span>
                  <span className="text-[12px] font-[600] text-[#111113]">
                    Jan 2026 – Present
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-[700] text-[#111113] leading-tight">
                    SCBI: Self-Consistent Basis Invention
                  </h3>
                  <p className="text-[13px] font-[500] text-indigo-600 mt-1">
                    Mechanistic Interpretability & Latent Basis Discovery for Frozen Models
                  </p>
                </div>

                <div className="p-4 rounded-[18px] bg-[#f8f8fa] border border-[#f0f0f4] text-[13.5px] text-[#111113] leading-relaxed font-mono text-[12px]">
                  "Empirical boundary result: decodable concept directions (~0.7 cosine) demonstrate zero causal transfer under static steering (p = 1.0, replicated)."
                </div>

                <div className="space-y-2 text-[13px] text-[#6e6e78]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Inference-time representation learning without modifying billions of weights</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Shipped turn-key open-source falsification suite on GitHub</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Accepted for publication in peer-reviewed scientific proceedings (Springer)</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-[#f0f0f4] flex flex-col xs:flex-row gap-2.5">
                <a
                  href="https://github.com/anilkumara9/SCBI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-[12.5px] sm:text-[13px] h-10 px-3.5 sm:px-4 flex-1 min-w-0 justify-center"
                >
                  <Github className="h-4 w-4 shrink-0" />
                  <span className="truncate">GitHub Falsification Kit</span>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                </a>

                <a
                  href={paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-[12.5px] sm:text-[13px] h-10 px-3.5 sm:px-4 justify-center shrink-0"
                >
                  <FileText className="h-4 w-4 text-indigo-600 shrink-0" />
                  <span>Paper</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                </a>
              </div>
            </div>

            {/* Research Card 2: LaTable */}
            <div className="bg-[#ffffff] border border-[#e4e4e9] hover:border-[#111113] rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-md">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-[600] tracking-wide uppercase bg-blue-50 text-blue-700 border border-blue-200">
                    Foundation Models
                  </span>
                  <span className="text-[12px] font-[500] text-[#6e6e78]">
                    2025 – 2026
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-[700] text-[#111113] leading-tight">
                    LaTable: Generative Models for Tabular Data
                  </h3>
                  <p className="text-[13px] font-[500] text-indigo-600 mt-1">
                    Diffusion-Transformer Generation & LLM Metadata Conditioning
                  </p>
                </div>

                <div className="p-4 rounded-[18px] bg-[#f8f8fa] border border-[#f0f0f4] text-[13.5px] text-[#111113] leading-relaxed">
                  "Researched diffusion-transformer generation of tabular datasets; analyzed LLM metadata encoding, mixed-type modeling, and permutation equivariance."
                </div>

                <div className="space-y-2 text-[13px] text-[#6e6e78]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Diffusion formulations for mixed continuous and discrete distributions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Benchmarked against CTGAN and TabDDPM baselines</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>LLM contextual encoders for relational column prior mapping</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#f0f0f4] flex items-center justify-between text-[13px] text-[#6e6e78]">
                <span className="font-[500] flex items-center gap-1.5 text-[#111113]">
                  <FlaskConical className="h-4 w-4 text-indigo-600" />
                  <span>Tabular Modality Research</span>
                </span>
                <span className="text-[12px] bg-[#f8f8fa] px-3 py-1 rounded-full font-[600] text-[#111113]">
                  Independent Project
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

      {/* ================= HIGH-IMPACT BOLD DARK FOOTER (MATCHING REFERENCE) ================= */}
      <footer className="w-full bg-[#0c0c0e] text-[#f4f4f6] pt-16 sm:pt-20 pb-12 sm:pb-14 px-4 sm:px-6 mt-20 sm:mt-28 relative overflow-hidden">

        {/* Subtle radial ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[200px] sm:h-[250px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none rounded-full max-w-full" />

        <div className="container mx-auto max-w-5xl space-y-12 relative z-10 text-center">

          {/* Main Footer Headline */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-[700] text-white tracking-tight leading-[1.1]">
              Ready to build <span className="font-editorial text-indigo-400 text-[1.2em] font-normal">something amazing?</span>
            </h2>
            <p className="text-[16px] text-zinc-400 leading-relaxed">
              Open for full-time Software Engineer & AI Engineer roles in Bengaluru or Remote. Let's discuss how I can bring product velocity and AI depth to your team.
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <a
              href={emailUrl}
              className="px-5 sm:px-6 h-11 sm:h-12 rounded-full bg-white text-black font-[650] text-[13px] sm:text-[14px] inline-flex items-center gap-2 hover:bg-zinc-200 transition-all hover:scale-102 max-w-full"
            >
              <Mail className="h-4 w-4 shrink-0" />
              <span className="truncate max-w-[210px] xs:max-w-none">anilkumarmeda6@gmail.com</span>
            </a>

            <button
              type="button"
              onClick={() => copyToClipboard('anilkumarmeda6@gmail.com', 'footer-email')}
              className="px-5 h-12 rounded-full bg-zinc-900 text-white border border-zinc-700 font-[500] text-[13px] inline-flex items-center gap-2 hover:bg-zinc-800 transition-colors cursor-pointer"
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
              className="px-5 h-12 rounded-full bg-zinc-900 text-white border border-zinc-700 font-[500] text-[13px] inline-flex items-center gap-2 hover:bg-zinc-800 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Social Links Row */}
          <div className="pt-8 border-t border-zinc-800/80 flex flex-wrap items-center justify-center gap-6 text-[14px] font-[500] text-zinc-400">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <span>·</span>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <span>·</span>
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
              <span>𝕏 Profile</span>
            </a>
            <span>·</span>
            <a href={paperUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
              <FileText className="h-4 w-4" />
              <span>Springer Paper</span>
            </a>
          </div>

          {/* Copyright & Keyboard Hint */}
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[12px] text-zinc-500">
            <p>© {new Date().getFullYear()} Meda Anilkumar. Designed & built with care in Bengaluru.</p>
            <div className="flex items-center justify-center gap-2">
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 font-mono text-[10px] text-zinc-300">C</kbd>
              <span>to copy email</span>
              <span className="mx-1">·</span>
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 font-mono text-[10px] text-zinc-300">R</kbd>
              <span>resume</span>
              <span className="mx-1">·</span>
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 font-mono text-[10px] text-zinc-300">P</kbd>
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
            className="relative w-full max-w-2xl bg-white border border-[#e4e4e9] rounded-[22px] sm:rounded-[28px] shadow-2xl overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col my-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Modal Header */}
            <div className="flex items-start justify-between gap-3 sm:gap-4 p-4 sm:p-6 border-b border-[#e4e4e9] bg-white/95 backdrop-blur-md shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-[700] bg-indigo-50 border border-indigo-200 text-indigo-700 uppercase tracking-wider">
                    {activeProjectModal.lldType || "SYSTEM ARCHITECTURE"}
                  </span>
                  <span className="text-[12px] font-[500] text-[#6e6e78]">
                    {activeProjectModal.period}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-[700] text-[#111113]">
                  {activeProjectModal.title}
                </h3>
                <p className="text-[12.5px] sm:text-[13px] text-[#6e6e78] font-[500] mt-0.5">
                  {activeProjectModal.role}
                </p>
              </div>

              <button
                onClick={() => setActiveProjectModal(null)}
                aria-label="Close modal"
                className="p-2 rounded-full hover:bg-[#f3f3f6] text-[#6e6e78] hover:text-[#111113] transition-colors cursor-pointer border border-transparent hover:border-[#e4e4e9] shrink-0"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Modal Body with Sleek Scrollbar */}
            <div className="p-4 sm:p-6 space-y-5 sm:space-y-6 overflow-y-auto modal-scrollbar flex-1">

              {/* Artwork Banner Preview */}
              <div className="relative h-40 sm:h-48 w-full rounded-[18px] overflow-hidden border border-[#e4e4e9] bg-slate-900 shrink-0">
                <img
                  src={activeProjectModal.image}
                  alt={activeProjectModal.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[12px] pointer-events-none">
                  <span className="font-mono bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 text-indigo-300 font-[650] text-[11px]">
                    {activeProjectModal.lldMetric}
                  </span>
                  <span className="bg-emerald-500/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-[600] flex items-center gap-1.5 shadow-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    <span>{activeProjectModal.badge}</span>
                  </span>
                </div>
              </div>

              {/* Architecture Pipeline Flowchart */}
              {activeProjectModal.lldFlow && activeProjectModal.lldFlow.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="font-[750] text-indigo-600 flex items-center gap-1.5 uppercase tracking-wider">
                      <Terminal className="h-3.5 w-3.5" />
                      <span>Component Pipeline & Data Flow</span>
                    </span>
                    <span className="text-[#8c8c96] font-[500] text-[10.5px]">Execution Trace</span>
                  </div>

                  <div className="p-3.5 rounded-[16px] bg-[#f8f8fa] border border-[#e4e4e9]">
                    <div className="flex items-center gap-1.5 overflow-x-auto modal-scrollbar pb-1 pt-0.5">
                      {activeProjectModal.lldFlow.map((step: string, sIdx: number) => (
                        <React.Fragment key={sIdx}>
                          <div className="shrink-0 px-2.5 py-1 rounded-[8px] bg-white border border-[#e4e4e9] shadow-2xs flex items-center gap-1.5">
                            <span className="h-3.5 w-3.5 rounded-full bg-indigo-50 text-indigo-600 font-mono text-[9.5px] font-bold flex items-center justify-center">
                              {sIdx + 1}
                            </span>
                            <span className="text-[11.5px] font-mono font-[600] text-[#111113]">
                              {step}
                            </span>
                          </div>
                          {sIdx < activeProjectModal.lldFlow.length - 1 && (
                            <span className="text-indigo-500 font-bold text-[11px] shrink-0">➔</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* System Overview */}
              <div className="space-y-1.5">
                <h4 className="text-[11px] font-mono font-[700] uppercase tracking-wider text-[#8c8c96] flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-indigo-600" />
                  <span>System Overview</span>
                </h4>
                <p className="text-[13.5px] text-[#333338] leading-relaxed bg-[#f8f8fa] p-4 rounded-[16px] border border-[#e4e4e9]">
                  {activeProjectModal.description}
                </p>
              </div>

              {/* Problem & System Constraints */}
              {activeProjectModal.deepDive?.problem && (
                <div className="space-y-1.5">
                  <h4 className="text-[11px] font-mono font-[700] uppercase tracking-wider text-[#8c8c96] flex items-center gap-1.5">
                    <AlertCircle className="h-3.5 w-3.5 text-amber-600" />
                    <span>Problem & System Constraints</span>
                  </h4>
                  <p className="text-[13.5px] text-[#333338] leading-relaxed bg-[#f8f8fa] p-4 rounded-[16px] border border-[#e4e4e9]">
                    {activeProjectModal.deepDive.problem}
                  </p>
                </div>
              )}

              {/* Low-Level Design & Key Decisions */}
              {activeProjectModal.deepDive?.architecture && (
                <div className="space-y-1.5">
                  <h4 className="text-[11px] font-mono font-[700] uppercase tracking-wider text-[#8c8c96] flex items-center gap-1.5">
                    <Cpu className="h-3.5 w-3.5 text-indigo-600" />
                    <span>Low-Level Architecture & Technical Invariants</span>
                  </h4>
                  <p className="text-[13.5px] text-[#333338] leading-relaxed bg-[#f8f8fa] p-4 rounded-[16px] border border-[#e4e4e9]">
                    {activeProjectModal.deepDive.architecture}
                  </p>
                </div>
              )}

              {/* Technical Telemetry & Invariants Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-[12px]">
                <div className="p-3.5 rounded-[14px] bg-[#f8f8fa] border border-[#e4e4e9]">
                  <span className="text-[10px] uppercase font-[700] text-indigo-600 block mb-0.5">Primary Storage</span>
                  <span className="text-[#111113] font-[600] text-[12px]">{activeProjectModal.lldStorage || "Stateful Cache / DB"}</span>
                </div>
                <div className="p-3.5 rounded-[14px] bg-[#f8f8fa] border border-[#e4e4e9]">
                  <span className="text-[10px] uppercase font-[700] text-indigo-600 block mb-0.5">Concurrency Pattern</span>
                  <span className="text-[#111113] font-[600] text-[12px]">{activeProjectModal.lldPattern || "Asynchronous Non-Blocking"}</span>
                </div>
                <div className="p-3.5 rounded-[14px] bg-[#f8f8fa] border border-[#e4e4e9]">
                  <span className="text-[10px] uppercase font-[700] text-indigo-600 block mb-0.5">Key Metric / Latency</span>
                  <span className="text-[#111113] font-[600] text-[12px]">{activeProjectModal.lldMetric || "Sub-second Execution"}</span>
                </div>
                <div className="p-3.5 rounded-[14px] bg-[#f8f8fa] border border-[#e4e4e9]">
                  <span className="text-[10px] uppercase font-[700] text-indigo-600 block mb-0.5">System Paradigm</span>
                  <span className="text-[#111113] font-[600] text-[12px]">{activeProjectModal.lldType || "Decoupled Architecture"}</span>
                </div>
              </div>

              {/* Core Engineering Highlights (Full list moved from card) */}
              {activeProjectModal.bulletPoints && activeProjectModal.bulletPoints.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-[11px] font-mono font-[700] uppercase tracking-wider text-[#8c8c96] flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
                    <span>Core Engineering Highlights</span>
                  </h4>
                  <div className="space-y-2 bg-[#f8f8fa] p-4 rounded-[16px] border border-[#e4e4e9]">
                    {activeProjectModal.bulletPoints.map((pt: string, i: number) => (
                      <div key={i} className="flex items-start gap-2.5 text-[13px] text-[#333338]">
                        <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Measurable Outcomes */}
              {activeProjectModal.deepDive?.keyOutcomes && activeProjectModal.deepDive.keyOutcomes.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-[11px] font-mono font-[700] uppercase tracking-wider text-[#8c8c96] flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Measurable System Outcomes</span>
                  </h4>
                  <div className="space-y-2 bg-[#f8f8fa] p-4 rounded-[16px] border border-[#e4e4e9]">
                    {activeProjectModal.deepDive.keyOutcomes.map((outcome: string, i: number) => (
                      <div key={i} className="flex items-start gap-2.5 text-[13px] text-[#333338]">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Full Tech Stack */}
              <div className="space-y-2">
                <h4 className="text-[11px] font-mono font-[700] uppercase tracking-wider text-[#8c8c96] flex items-center gap-1.5">
                  <Code2 className="h-3.5 w-3.5 text-indigo-600" />
                  <span>Full Technology Stack</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeProjectModal.stack.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11.5px] font-[600] bg-[#f8f8fa] border border-[#e4e4e9] text-[#111113]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Sticky Modal Footer with Actions */}
            <div className="p-3.5 sm:p-5 border-t border-[#e4e4e9] bg-[#f8f8fa] flex flex-wrap items-center justify-between gap-3 shrink-0">
              <span className="hidden sm:inline font-mono text-[12px] text-[#6e6e78]">
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
                        ? 'h-9 px-4 rounded-full bg-[#111113] hover:bg-indigo-600 text-white font-[600] text-[12px] inline-flex items-center justify-center gap-1.5 transition-all shadow-xs flex-1 sm:flex-none'
                        : 'h-9 px-4 rounded-full bg-white hover:bg-[#f3f3f6] text-[#111113] border border-[#e4e4e9] font-[600] text-[12px] inline-flex items-center justify-center gap-1.5 transition-all shadow-2xs flex-1 sm:flex-none'
                    }
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ))}
                <button
                  type="button"
                  onClick={() => setActiveProjectModal(null)}
                  className="h-9 px-4 rounded-full bg-white hover:bg-[#f3f3f6] text-[#6e6e78] hover:text-[#111113] border border-[#e4e4e9] font-[600] text-[12px] transition-colors cursor-pointer"
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