import React, { useState, useEffect } from "react";
import { 
  ExternalLink, Mail, Github, Linkedin, MapPin, Award, 
  BookOpen, Download, Phone, Sparkles, FileText, ArrowUpRight, Cpu, 
  Layers, Database, Cloud, Terminal, CheckCircle2, FlaskConical, 
  Briefcase, Trophy, ArrowRight, Play, Check, Copy, Code2, Globe, Search,
  X, ChevronRight, UserCheck, ShieldCheck, Zap, Share2, Menu
} from "lucide-react";

// Custom Components
import ContactForm from "./components/ContactForm";
import InteractiveTimeline from "./components/InteractiveTimeline";
import { generateResumePDF } from "./utils/pdfGenerator";

export default function MobbinPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [activeProjectModal, setActiveProjectModal] = useState<any | null>(null);
  const [skillSearch, setSkillSearch] = useState<string>("");
  const [showRecruiterDossier, setShowRecruiterDossier] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // URLs
  const paperUrl = "https://drive.google.com/file/d/1CCAr86Jl00ynZZyDdFU8kL5x879OL9M3/view?usp=sharing";
  const resumeUrl = "https://drive.google.com/file/d/1ZEq5ZMgpNTdQ7HUubjA2lqpLhMSKmRRx/view?usp=sharing";
  const githubUrl = "https://github.com/anilkumara9";
  const linkedinUrl = "https://www.linkedin.com/in/anilkumar-meda-2b2624331";
  const twitterUrl = "https://x.com/anilKumar09873";
  const emailUrl = "mailto:anilkumarmeda6@gmail.com";
  const phoneUrl = "tel:+919986489887";

  useEffect(() => {
    // Ensure dark mode is completely removed and always on Mobbin gallery-white canvas
    document.documentElement.classList.remove('dark');
    try {
      localStorage.removeItem('darkMode');
    } catch (e) {
      console.warn("Storage access error:", e);
    }
  }, []);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
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

  const recruiterHighlights = [
    { label: "Target Roles", value: "Software Engineer / AI Engineer / Full-Stack", icon: Briefcase },
    { label: "Availability", value: "Immediate (Open for Full-Time & Internships)", icon: Zap },
    { label: "Degree & Year", value: "B.E. CSE (Data Science) · Graduating 2026", icon: BookOpen },
    { label: "Academic Standing", value: "CGPA: 8.09 / 10 (First Class with Distinction)", icon: Award },
    { label: "Work Authorization", value: "Bengaluru, India (Open to Relocation / Remote)", icon: MapPin },
    { label: "Flagship Proof", value: "Spora: 200+ active users bootstrapped solo", icon: ShieldCheck },
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
        "LLM APIs", "AI Agents", "Prompt Engineering", "Large Tabular Models", "LLM Pipelines"
      ],
    },
    {
      category: "Frontend & Full Stack",
      icon: Layers,
      items: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "REST APIs"],
    },
    {
      category: "Data & ML",
      icon: FlaskConical,
      items: ["Scikit-learn", "XGBoost", "Pandas", "Feature Engineering", "Model Evaluation"],
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      items: ["AWS", "GCP", "Docker", "Kubernetes", "Linux", "Microservices", "CI/CD", "Git", "GitHub"],
    },
    {
      category: "Databases",
      icon: Database,
      items: ["MongoDB", "MySQL", "PostgreSQL"],
    },
  ];

  const allProjects = [
    {
      id: "spora",
      title: "Spora: Knowledge-First Social Media Platform",
      period: "Mar 2026 – Present",
      role: "Solo founder & developer",
      type: "product",
      featured: true,
      badge: "Flagship · 200+ users",
      accentBadge: true,
      description: "A focused social platform for learners and creators in AI, tech, and research. Built with personalized content discovery, low-latency short video streaming, and real-time interaction.",
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
      stack: ["React", "Next.js", "Mobile", "Personalized Discovery", "Real-Time Interaction", "Media Stream"],
      links: [
        { label: "Demo on 𝕏", url: "https://x.com/anilKumar09873/status/2096482373299057022", primary: true },
        { label: "Android testing", url: "https://play.google.com/apps/testing/com.anilkumara9.news", primary: false }
      ]
    },
    {
      id: "scbi",
      title: "SCBI: Self-Consistent Basis Invention",
      period: "Jan 2026 – Present",
      role: "Independent AI researcher",
      type: "research",
      featured: true,
      badge: "Research spotlight",
      accentBadge: false,
      description: "Independent research into inference-time representation learning for frozen foundation models with no weight updates.",
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
        { label: "Read paper", url: paperUrl, primary: true },
        { label: "GitHub kit", url: "https://github.com/anilkumara9/SCBI", primary: false }
      ]
    },
    {
      id: "latable",
      title: "LaTable: Generative Foundation Models for Tabular Data",
      period: "2025 – 2026",
      role: "Independent AI researcher",
      type: "research",
      featured: true,
      badge: "Tabular Foundation Models",
      accentBadge: false,
      description: "Researched diffusion-transformer generation of tabular datasets; analyzed LLM metadata encoding, mixed-type modeling, and equivariance; benchmarked against CTGAN and TabDDPM.",
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
      stack: ["Diffusion Transformers", "Tabular Models", "PyTorch", "CTGAN", "TabDDPM", "Mixed-Type Modeling"],
      links: [
        { label: "Research section", url: "#research", primary: true }
      ]
    },
    {
      id: "hackathon",
      title: "AI Interview Platform (REVA Hackathon Winner)",
      period: "Aug – Sep 2024",
      role: "Hackathon team lead",
      type: "product",
      featured: true,
      badge: "Second Prize · Winner",
      accentBadge: true,
      description: "Built an AI interview preparation platform powered by Vapi AI voice agents for conversational interview simulation and performance evaluation.",
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
      role: "Full-stack AI builder",
      type: "product",
      featured: false,
      badge: "Live product",
      accentBadge: false,
      description: "A desktop AI copilot that answers technical engineering questions instantly through low-latency streaming LLM APIs and real-time context assistance.",
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
      role: "Edge ML engineer",
      type: "ml",
      featured: false,
      badge: "100% Offline Edge ML",
      accentBadge: false,
      description: "An on-device person re-identification system using Kotlin, ML Kit, and Edge ML. Selects high-confidence frames by cosine similarity (T = 0.68) and generates collages automatically, entirely offline and privacy-preserving.",
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
      id: "polo",
      title: "Polo: AI Web Application Generator",
      period: "Jan – Mar 2025",
      role: "Platform creator",
      type: "product",
      featured: false,
      badge: "Generative AI",
      accentBadge: false,
      description: "An AI platform that generates complete web applications from natural-language prompts, automating code generation through LLM APIs.",
      bulletPoints: [
        "Automates full-stack web application code generation from natural-language prompts",
        "Constructed with Next.js, React, and LLM APIs",
        "Automated scaffolding, component generation, and inline preview"
      ],
      deepDive: {
        problem: "Scaffolding boilerplate web applications from scratch consumes hours of developer time for standard repetitive workflows.",
        architecture: "Next.js and React app connected to prompt orchestration pipelines that convert high-level product prompts into modular React components and stateful code files.",
        keyOutcomes: [
          "Automated full-stack component generation from single-line conversational prompts.",
          "Integrated file tree generation with live client-side preview.",
          "Open-source repository available on GitHub."
        ]
      },
      stack: ["Next.js", "React", "LLM APIs", "Automated Code Generation"],
      links: [
        { label: "GitHub", url: "https://github.com/anilkumara9/vibe", primary: true }
      ]
    },
    {
      id: "stock-prediction",
      title: "Machine Learning Stock Price Prediction",
      period: "May – Jun 2025",
      role: "ML engineer",
      type: "ml",
      featured: false,
      badge: "Predictive ML",
      accentBadge: false,
      description: "A comparative study of Linear Regression, Random Forest, and LSTM neural networks for financial time-series prediction.",
      bulletPoints: [
        "Comparative benchmark across classical ML and deep recurrent architectures",
        "Feature engineering and time-series backtesting on financial market data",
        "Evaluated RMSE, MAE, and directional trend accuracy metrics"
      ],
      deepDive: {
        problem: "Financial time-series data exhibits high non-stationarity and stochastic volatility, necessitating rigorous empirical comparison between linear baselines, ensemble trees, and deep recurrent networks.",
        architecture: "Python, Scikit-learn, and PyTorch pipeline implementing sliding-window feature engineering, rolling standardization, and LSTM neural networks with multi-step forecasting.",
        keyOutcomes: [
          "Comprehensive quantitative benchmark comparing MSE, RMSE, and MAPE across 3 architectures.",
          "Evaluated feature importance to understand predictive relevance of technical indicators (RSI, Moving Averages).",
          "Clean reproducible Jupyter and Python repository."
        ]
      },
      stack: ["Python", "Scikit-learn", "PyTorch", "LSTM", "Random Forest", "Pandas"],
      links: []
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? allProjects 
    : allProjects.filter(p => p.type === selectedCategory);

  const filteredSkills = skillCategories.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.toLowerCase().includes(skillSearch.toLowerCase())
    )
  })).filter(category => category.items.length > 0);


  return (
    <div className="min-h-screen bg-[#ffffff] text-[#141414] selection:bg-[#141414] selection:text-[#ffffff]">
      
      {/* ================= MOBBIN FLOATING NAV (SPACIOUS & UNCOMPRESSED) ================= */}
      <div className="sticky top-4 sm:top-6 z-50 w-full px-4 sm:px-6 flex justify-center pointer-events-none mb-6">
        <header className="pointer-events-auto bg-[#ffffff]/95 backdrop-blur-md rounded-full px-5 sm:px-7 py-3 flex items-center justify-between gap-4 sm:gap-6 border border-[#e5e5ea] shadow-sm max-w-6xl w-full">
          
          {/* Logo Mark with User Photo */}
          <a href="#hero" className="flex items-center gap-3 group shrink-0">
            <img 
              src="/anil.png" 
              alt="Meda Anilkumar" 
              className="h-9 w-9 rounded-full object-cover transition-transform group-hover:scale-105 border border-[#e0e0e0] shrink-0"
            />
            <div className="flex flex-col text-left">
              <span className="font-[650] text-[15px] tracking-tight text-[#141414] leading-tight">
                Meda Anilkumar
              </span>
              <span className="text-[11px] font-[500] text-[#707070] hidden sm:block">
                SWE & Researcher
              </span>
            </div>
          </a>

          {/* Navigation Links - Spacious & Clean */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] font-[500] text-[#707070]">
            <a href="#about" className="hover:text-[#141414] transition-colors">About</a>
            <a href="#research" className="hover:text-[#141414] transition-colors font-[600] text-[#141414]">Research</a>
            <a href="#projects" className="hover:text-[#141414] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#141414] transition-colors">Experience</a>
            <a href="#skills" className="hover:text-[#141414] transition-colors">Skills</a>
            <a href="#timeline" className="hover:text-[#141414] transition-colors">Timeline</a>
            <a href="#contact" className="hover:text-[#141414] transition-colors">Contact</a>
          </nav>

          {/* Nav Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <a 
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-[13px] h-9 px-4 hidden sm:inline-flex"
              title="View & Download Resume"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile / Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden h-9 w-9 rounded-full bg-[#f3f3f3] text-[#141414] flex items-center justify-center hover:bg-[#e5e5ea] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

        </header>
      </div>

      {/* Mobile Drawer if open */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-50 bg-[#ffffff] border border-[#e5e5ea] rounded-[24px] p-6 shadow-2xl space-y-4 lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 text-[15px] font-[500] text-[#141414]">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-[#f5f5f7] rounded-[12px] transition-colors"
            >
              About
            </a>
            <a 
              href="#research" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-[#f5f5f7] rounded-[12px] transition-colors font-[600]"
            >
              Research Experience
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-[#f5f5f7] rounded-[12px] transition-colors"
            >
              Projects
            </a>
            <a 
              href="#experience" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-[#f5f5f7] rounded-[12px] transition-colors"
            >
              Experience
            </a>
            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-[#f5f5f7] rounded-[12px] transition-colors"
            >
              Skills
            </a>
            <a 
              href="#timeline" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-[#f5f5f7] rounded-[12px] transition-colors"
            >
              Timeline
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-[#f5f5f7] rounded-[12px] transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="pt-3 border-t border-[#f0f0f0] flex flex-col sm:flex-row gap-2">
            <a 
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 text-[13px] h-10"
            >
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </a>
            <a 
              href={paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex-1 text-[13px] h-10"
            >
              <FileText className="h-4 w-4" />
              <span>Research Paper</span>
            </a>
          </div>
        </div>
      )}

      {/* ================= MAIN GALLERY CANVAS ================= */}
      <main className="container mx-auto px-6 max-w-6xl py-6 md:py-12 space-y-24">

        {/* ================= HERO SECTION (2-COLUMN: LEFT CONTENT, RIGHT PHOTO) ================= */}
        <section id="hero" className="pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Side: Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Display Headlines */}
              <div className="space-y-2">
                <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-[650] text-[#141414] leading-[1.0] tracking-tight">
                  Anilkumar.
                </h1>
                
                <p className="text-xl sm:text-2xl font-[600] text-[#141414] leading-[1.25]">
                  Computer Science Undergraduate, Product Builder & Independent Researcher.
                </p>
              </div>

              {/* Bio Description - Crisp, punchy and direct */}
              <p className="text-[16px] sm:text-[18px] font-[400] text-[#606060] leading-[1.5] max-w-xl">
                Specializing in AI and web development with strong DSA foundations. Solo builder of Spora (200+ users), REVA Hackathon winner, and conducting independent research on foundation models.
              </p>

              {/* Action Stadium Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a href="#projects" className="btn-primary">
                  <span>View Projects</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a 
                  href={resumeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-outline"
                  title="View & Download Resume"
                >
                  <Download className="h-4 w-4" />
                  <span>Resume</span>
                </a>

                <a 
                  href={paperUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-outline"
                  title="Read Research Paper"
                >
                  <FileText className="h-4 w-4" />
                  <span>Paper</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>

                <a href="#contact" className="btn-pill-soft">
                  <Mail className="h-4 w-4" />
                  <span>Contact Me</span>
                </a>
              </div>

              {/* Clean Metadata Contact Row with Sleek SVG Icons */}
              <div className="pt-6 border-t border-[#f0f0f0] flex flex-wrap items-center gap-y-2 gap-x-4 text-[13px] font-[500] text-[#707070]">
                <span className="inline-flex items-center gap-1.5 text-[#141414]">
                  <MapPin className="h-3.5 w-3.5 text-[#707070]" />
                  <span>Bengaluru, Karnataka</span>
                </span>

                <span className="text-[#e0e0e0] hidden sm:inline">·</span>

                <button 
                  type="button"
                  onClick={() => copyToClipboard('anilkumarmeda6@gmail.com', 'hero-email')}
                  className="inline-flex items-center gap-1.5 hover:text-[#141414] transition-colors cursor-pointer group bg-transparent border-0 p-0"
                  title="Click to copy email address"
                >
                  <Mail className="h-3.5 w-3.5 text-[#707070] group-hover:text-[#141414]" />
                  <span className="underline decoration-dotted underline-offset-4">anilkumarmeda6@gmail.com</span>
                  {copiedItem === 'hero-email' ? (
                    <span className="badge-popular text-[10px] py-0 px-1.5 h-4">Copied!</span>
                  ) : (
                    <Copy className="h-3 w-3 opacity-50 group-hover:opacity-100" />
                  )}
                </button>

                <span className="text-[#e0e0e0] hidden sm:inline">·</span>

                <button 
                  type="button"
                  onClick={() => copyToClipboard('+919986489887', 'hero-phone')}
                  className="inline-flex items-center gap-1.5 hover:text-[#141414] transition-colors cursor-pointer group bg-transparent border-0 p-0"
                  title="Click to copy phone number"
                >
                  <Phone className="h-3.5 w-3.5 text-[#707070] group-hover:text-[#141414]" />
                  <span className="underline decoration-dotted underline-offset-4">+91 9986489887</span>
                  {copiedItem === 'hero-phone' ? (
                    <span className="badge-popular text-[10px] py-0 px-1.5 h-4">Copied!</span>
                  ) : (
                    <Copy className="h-3 w-3 opacity-50 group-hover:opacity-100" />
                  )}
                </button>

                <span className="text-[#e0e0e0] hidden sm:inline">·</span>

                <span className="inline-flex items-center gap-1.5 text-[#141414]">
                  <Award className="h-3.5 w-3.5 text-[#707070]" />
                  <span>B.E. CSE · CGPA 8.09</span>
                </span>
              </div>

            </div>

            {/* Right Side: Framed Portrait Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] bg-[#f5f5f7] border border-[#e5e5ea] rounded-[28px] p-4 shadow-sm">
                <div className="aspect-square w-full rounded-[22px] overflow-hidden bg-[#ebebf0] border border-[#e0e0e0]">
                  <img 
                    src="/anil.png" 
                    alt="Meda Anilkumar" 
                    className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-300"
                  />
                </div>
                
                {/* Status Bar Below Photo */}
                <div className="mt-3.5 flex items-center justify-between px-1.5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[12px] font-[600] text-[#141414]">Available for Opportunities</span>
                  </div>
                  <span className="text-[11px] font-[500] text-[#707070]">SWE & AI Researcher</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section id="about" className="space-y-6">
          <div>
            <span className="text-[12px] font-semibold text-[#707070] uppercase tracking-wider block mb-1">
              Profile
            </span>
            <h2 className="text-3xl sm:text-4xl font-[650] text-[#141414]">
              About Meda Anilkumar.
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Bio Narrative */}
            <div className="lg:col-span-7 bg-[#ffffff] border border-[#f0f0f0] rounded-[24px] p-8 sm:p-10 space-y-5">
              <div className="space-y-4 text-[16px] font-[456] text-[#707070] leading-[1.45]">
                <p>
                  I'm a Computer Science (Data Science) graduate from Bengaluru who likes turning ideas into working products. 
                  In the past year I've independently launched <strong className="text-[#141414]">Spora</strong>, a knowledge-first social platform that reached <strong className="text-[#141414]">200+ users with zero funding</strong>. I've also built an on-device ML system, a real-time AI desktop copilot, and an AI web app generator.
                </p>
                <p>
                  Alongside product work, I do independent research on inference-time representation learning for frozen foundation models. 
                  My <strong className="text-[#141414]">SCBI</strong> project produced a replicated boundary result and an open falsification kit.
                </p>
                <div className="p-4 rounded-[16px] bg-[#f5f5f7] text-[#141414] font-[500] text-[15px]">
                  I'm looking for Software Engineer and AI Engineer roles where I can build real products and work close to the model layer.
                </div>
              </div>
            </div>

            {/* Quick Facts Squircle Tiles */}
            <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {quickFacts.map((fact, idx) => {
                const Icon = fact.icon;
                return (
                  <div key={idx} className="p-4 rounded-[20px] bg-[#ffffff] border border-[#f0f0f0] flex items-start gap-4">
                    <div className="h-10 w-10 squircle-icon bg-[#f3f3f3] flex items-center justify-center shrink-0 text-[#141414]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-[600] uppercase tracking-wider text-[#707070] block">
                        {fact.label}
                      </span>
                      <span className="text-[14px] font-[600] text-[#141414] block mt-0.5">
                        {fact.val}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ================= RESEARCH EXPERIENCE SECTION ================= */}
        <section id="research" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-[#e5e5ea] pb-6">
            <div>
              <span className="text-[12px] font-semibold text-[#707070] uppercase tracking-wider block mb-1">
                Research Experience
              </span>
              <h2 className="text-3xl sm:text-4xl font-[650] text-[#141414]">
                Independent AI & Foundation Model Research.
              </h2>
            </div>
            <p className="text-[14px] font-[456] text-[#707070] max-w-md sm:text-right">
              Investigating tabular generative foundation models and frozen-LLM mechanistic interpretability with open falsification and reproducible code.
            </p>
          </div>

          {/* Research Key Metrics Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 sm:p-5 rounded-[20px] bg-[#f8f8fa] border border-[#e5e5ea] space-y-1">
              <span className="text-[11px] font-[600] uppercase tracking-wider text-[#707070] block">Central Bound</span>
              <span className="text-xl sm:text-2xl font-[650] text-[#141414] block">T = 0.68</span>
              <span className="text-[12px] text-[#707070] block leading-tight">Cosine threshold replicating representation geometry</span>
            </div>
            <div className="p-4 sm:p-5 rounded-[20px] bg-[#f8f8fa] border border-[#e5e5ea] space-y-1">
              <span className="text-[11px] font-[600] uppercase tracking-wider text-[#707070] block">Causal Mediation</span>
              <span className="text-xl sm:text-2xl font-[650] text-[#141414] block">p = 1.0</span>
              <span className="text-[12px] text-[#707070] block leading-tight">Zero causal transfer verified under static steering</span>
            </div>
            <div className="p-4 sm:p-5 rounded-[20px] bg-[#f8f8fa] border border-[#e5e5ea] space-y-1">
              <span className="text-[11px] font-[600] uppercase tracking-wider text-[#707070] block">Peer Reviewed</span>
              <span className="text-xl sm:text-2xl font-[650] text-[#141414] block">Springer</span>
              <span className="text-[12px] text-[#707070] block leading-tight">Accepted in scientific publication proceedings</span>
            </div>
            <div className="p-4 sm:p-5 rounded-[20px] bg-[#f8f8fa] border border-[#e5e5ea] space-y-1">
              <span className="text-[11px] font-[600] uppercase tracking-wider text-[#707070] block">Generative Baselines</span>
              <span className="text-xl sm:text-2xl font-[650] text-[#141414] block">CTGAN / DDPM</span>
              <span className="text-[12px] text-[#707070] block leading-tight">Empirical benchmarked on tabular distributions</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Card 1: LaTable */}
            <div className="bg-[#ffffff] border border-[#e5e5ea] hover:border-[#141414] rounded-[24px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-md">
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-[600] tracking-wide uppercase bg-[#f5f5f7] border border-[#e5e5ea] text-[#141414]">
                    Independent Research
                  </span>
                  <span className="text-[12px] font-[500] text-[#707070]">
                    Foundation Models
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-[650] text-[#141414] leading-tight">
                    LaTable – Generative Foundation Models for Tabular Data
                  </h3>
                  <p className="text-[13px] font-[500] text-[#707070] mt-1">
                    Diffusion-Transformer Generation & LLM Metadata Conditioning
                  </p>
                </div>

                {/* Abstract Highlight */}
                <div className="p-4 rounded-[16px] bg-[#f8f8fa] border border-[#f0f0f0] text-[14px] font-[456] text-[#141414] leading-relaxed">
                  "Researched diffusion-transformer generation of tabular datasets; analyzed LLM metadata encoding, mixed-type modeling, and equivariance; benchmarked against CTGAN and TabDDPM."
                </div>

                {/* Empirical Highlights */}
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-start gap-2.5 text-[13px] text-[#707070]">
                    <CheckCircle2 className="h-4 w-4 text-[#0066ff] shrink-0 mt-0.5" />
                    <span>Researched diffusion-transformer generation tailored for complex mixed-type tabular distributions</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[13px] text-[#707070]">
                    <CheckCircle2 className="h-4 w-4 text-[#0066ff] shrink-0 mt-0.5" />
                    <span>Analyzed LLM metadata encoding to capture column relationships, mixed continuous/categorical features, and permutation equivariance</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[13px] text-[#707070]">
                    <CheckCircle2 className="h-4 w-4 text-[#0066ff] shrink-0 mt-0.5" />
                    <span>Empirical quantitative benchmarking against established CTGAN and TabDDPM synthetic generative baselines</span>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["Diffusion Transformers", "Tabular Foundation Models", "PyTorch", "CTGAN", "TabDDPM", "Mixed-Type Modeling", "LLM Encoders"].map(tech => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 rounded-full text-[11px] font-[500] bg-[#f5f5f7] border border-[#e5e5ea] text-[#141414]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#f0f0f0] flex items-center justify-between text-[13px] text-[#707070]">
                <span className="font-[500] flex items-center gap-1.5">
                  <FlaskConical className="h-4 w-4 text-[#141414]" />
                  <span>Tabular Modality Research</span>
                </span>
                <span className="text-[12px] bg-[#f5f5f7] px-2.5 py-1 rounded-full font-[500] text-[#141414]">
                  Independent Research
                </span>
              </div>
            </div>

            {/* Card 2: SCBI */}
            <div className="bg-[#ffffff] border border-[#e5e5ea] hover:border-[#141414] rounded-[24px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-md">
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-[600] tracking-wide uppercase bg-[#0066ff]/10 text-[#0066ff] border border-[#0066ff]/20">
                    Independent Research
                  </span>
                  <span className="text-[12px] font-[600] text-[#141414]">
                    Jan 2026 – Present
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-[650] text-[#141414] leading-tight">
                    SCBI – Self-Consistent Basis Invention
                  </h3>
                  <p className="text-[13px] font-[500] text-[#707070] mt-1">
                    Mechanistic Interpretability & Latent Basis Discovery for Frozen Models
                  </p>
                </div>

                {/* Abstract Highlight */}
                <div className="p-4 rounded-[16px] bg-[#f8f8fa] border border-[#f0f0f0] text-[14px] font-[456] text-[#141414] leading-relaxed">
                  "Frozen-model LLM interpretability research; established boundary result (~0.7 cosine, zero causal transfer, p=1.0); open falsification kit."
                </div>

                {/* Empirical Highlights */}
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-start gap-2.5 text-[13px] text-[#707070]">
                    <CheckCircle2 className="h-4 w-4 text-[#0066ff] shrink-0 mt-0.5" />
                    <span>Inference-time representation learning on frozen foundation models with zero weight updates</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[13px] text-[#707070]">
                    <CheckCircle2 className="h-4 w-4 text-[#0066ff] shrink-0 mt-0.5" />
                    <span>Established empirical boundary result: ~0.7 cosine similarity with zero causal transfer (p = 1.0)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[13px] text-[#707070]">
                    <CheckCircle2 className="h-4 w-4 text-[#0066ff] shrink-0 mt-0.5" />
                    <span>Engineered an open-source falsification suite enabling peer researchers to verify results independently</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[13px] text-[#707070]">
                    <CheckCircle2 className="h-4 w-4 text-[#0066ff] shrink-0 mt-0.5" />
                    <span>Accepted for publication in peer-reviewed scientific proceedings (Springer)</span>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["LLM Interpretability", "Mechanistic Interpretability", "PyTorch", "Hugging Face", "Activation Steering", "Causal Probing", "Falsification Kit"].map(tech => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 rounded-full text-[11px] font-[500] bg-[#f5f5f7] border border-[#e5e5ea] text-[#141414]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons for SCBI */}
              <div className="pt-6 mt-6 border-t border-[#f0f0f0] flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/anilkumara9/SCBI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-[13px] h-10 px-4 flex-1"
                >
                  <Github className="h-4 w-4" />
                  <span>github.com/anilkumara9/SCBI</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                <a
                  href={paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-[13px] h-10 px-4"
                >
                  <FileText className="h-4 w-4" />
                  <span>Paper</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ================= FEATURED PROJECTS ================= */}
        <section id="projects" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="text-[12px] font-semibold text-[#707070] uppercase tracking-wider block mb-1">
                Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-[650] text-[#141414]">
                Featured projects.
              </h2>
            </div>

            {/* Mobbin Segmented Control Track */}
            <div className="flex items-center p-1 bg-[#f5f5f7] rounded-full text-[13px] font-[500] border border-[#e5e5ea]">
              {[
                { id: "all", label: "All (7)" },
                { id: "product", label: "Shipped products" },
                { id: "ml", label: "AI & ML" },
                { id: "research", label: "Research" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                    selectedCategory === tab.id 
                      ? 'bg-[#ffffff] text-[#141414] font-[600] shadow-sm' 
                      : 'text-[#707070] hover:text-[#141414]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`${
                  project.featured 
                    ? 'card-featured' 
                    : 'card-resting'
                } p-7 flex flex-col justify-between transition-all hover:-translate-y-0.5 border border-[#e5e5ea]`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    {project.accentBadge ? (
                      <span className="badge-popular">
                        {project.badge}
                      </span>
                    ) : (
                      <span className="px-3 py-0.5 rounded-full text-[11px] font-[600] bg-[#f0f0f0] text-[#141414]">
                        {project.badge}
                      </span>
                    )}
                    <span className="text-[12px] font-[500] text-[#707070]">
                      {project.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-[650] text-[#141414] leading-snug">
                      {project.title}
                    </h3>
                    <span className="text-[13px] font-[500] text-[#707070] block mt-0.5">
                      {project.role}
                    </span>
                  </div>

                  <p className="text-[13px] font-[456] leading-[1.38] text-[#707070]">
                    {project.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-2 border-t border-[#f0f0f0]">
                    {project.bulletPoints.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[13px] font-[456] text-[#707070]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#141414] shrink-0 mt-2" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.stack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-[500] bg-[#ffffff] border border-[#e5e5ea] text-[#141414]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links & Inspection Button */}
                <div className="pt-5 mt-5 border-t border-[#f0f0f0] space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <a 
                        key={link.label}
                        href={link.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`flex-1 ${link.primary ? 'btn-primary h-9' : 'btn-outline h-9'} text-[12px]`}
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>

                  {/* Inspect Details Drawer Trigger */}
                  <button
                    type="button"
                    onClick={() => setActiveProjectModal(project)}
                    className="w-full h-8 rounded-full text-[12px] font-[500] text-[#707070] hover:text-[#141414] hover:bg-[#f3f3f3] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Inspect System & Architecture</span>
                    <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= WORK EXPERIENCE ================= */}
        <section id="experience" className="space-y-6 scroll-mt-24">
          <div>
            <span className="text-[12px] font-semibold text-[#707070] uppercase tracking-wider block mb-1">
              Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-[650] text-[#141414]">
              Industry engineering and Generative AI.
            </h2>
          </div>

          <div className="bg-[#f5f5f7] rounded-[24px] p-8 sm:p-10 space-y-6 border border-[#e5e5ea]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#e0e0e0] pb-5">
              <div>
                <span className="text-[13px] font-[600] text-[#707070] block">Feb 2026 – May 2026</span>
                <h3 className="text-2xl font-[650] text-[#141414]">
                  AI intern — CampusPe
                </h3>
              </div>
              <span className="text-[13px] font-[500] text-[#707070]">
                Bengaluru, Karnataka, India
              </span>
            </div>

            <p className="text-[16px] font-[456] text-[#707070] leading-[1.38]">
              Worked with a product team on Generative AI initiatives, helping design and ship AI-powered features.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-[16px] bg-[#ffffff] border border-[#e5e5ea] space-y-1.5">
                <span className="text-[14px] font-[650] text-[#141414] block">Product delivery</span>
                <span className="text-[13px] font-[456] text-[#707070] leading-[1.38] block">Collaborated with product designers and backend engineers to take AI features to production.</span>
              </div>
              <div className="p-5 rounded-[16px] bg-[#ffffff] border border-[#e5e5ea] space-y-1.5">
                <span className="text-[14px] font-[650] text-[#141414] block">GenAI engineering</span>
                <span className="text-[13px] font-[456] text-[#707070] leading-[1.38] block">Constructed reliable prompt pipelines, structured schema validation, and evaluation harnesses.</span>
              </div>
              <div className="p-5 rounded-[16px] bg-[#ffffff] border border-[#e5e5ea] space-y-1.5">
                <span className="text-[14px] font-[650] text-[#141414] block">Model integration</span>
                <span className="text-[13px] font-[456] text-[#707070] leading-[1.38] block">Optimized token latency, error-recovery mechanisms, and user feedback capture loops.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TECHNICAL SKILLS MATRIX WITH SEARCH ================= */}
        <section id="skills" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="text-[12px] font-semibold text-[#707070] uppercase tracking-wider block mb-1">
                Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-[650] text-[#141414]">
                Technical skills.
              </h2>
            </div>

            {/* Filter Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#707070]" />
              <input
                type="text"
                value={skillSearch}
                onChange={(e) => setSkillSearch(e.target.value)}
                placeholder="Filter skills (e.g. PyTorch, React)..."
                className="w-full pl-9 pr-8 py-1.5 rounded-full text-[13px] bg-[#f5f5f7] text-[#141414] border border-[#e5e5ea] focus:outline-none focus:border-[#141414]"
              />
              {skillSearch && (
                <button
                  onClick={() => setSkillSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-[#707070] hover:text-[#141414] cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((group) => {
              const Icon = group.icon;
              return (
                <div 
                  key={group.category}
                  className="bg-[#ffffff] border border-[#e5e5ea] rounded-[24px] p-6 space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 squircle-icon bg-[#f5f5f7] flex items-center justify-center shrink-0 text-[#141414]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-[16px] font-[650] text-[#141414]">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span 
                        key={skill}
                        className={`px-3 py-1 rounded-full text-[12px] font-[500] transition-colors ${
                          skillSearch && skill.toLowerCase().includes(skillSearch.toLowerCase())
                            ? 'bg-[#0066ff] text-[#ffffff] font-[600]'
                            : 'bg-[#f5f5f7] text-[#141414]'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= EDUCATION & AWARDS ================= */}
        <section id="education" className="space-y-6">
          <div>
            <span className="text-[12px] font-semibold text-[#707070] uppercase tracking-wider block mb-1">
              Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl font-[650] text-[#141414]">
              Academics and hackathon honors.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            
            {/* Education */}
            <div className="bg-[#ffffff] border border-[#e5e5ea] rounded-[24px] p-8 space-y-5">
              <div className="flex items-center justify-between border-b border-[#f0f0f0] pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 squircle-icon bg-[#f5f5f7] flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-[#141414]" />
                  </div>
                  <h3 className="text-[18px] font-[650] text-[#141414]">Education</h3>
                </div>
                <span className="px-3 py-1 rounded-full text-[12px] font-[600] bg-[#f5f5f7] text-[#141414]">
                  Aug 2022 – Jul 2026
                </span>
              </div>

              <div>
                <h4 className="text-[18px] font-[650] text-[#141414]">
                  New Horizon College of Engineering, Bengaluru.
                </h4>
                <p className="text-[14px] font-[600] text-[#141414] mt-1">
                  B.E. Computer Science and Engineering (Data Science)
                </p>
                <p className="text-[13px] font-[456] text-[#707070] mt-0.5">
                  Cumulative Grade Point Average: <strong className="text-[#141414]">8.09 / 10</strong>
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#f0f0f0]">
                <span className="text-[11px] uppercase tracking-wider font-[600] text-[#707070] block">
                  Core coursework
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Data Structures and Algorithms", 
                    "DBMS", 
                    "Operating Systems", 
                    "Computer Networks"
                  ].map((course) => (
                    <span key={course} className="px-3 py-1 rounded-full text-[12px] font-[500] bg-[#f5f5f7] text-[#141414]">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Awards */}
            <div className="bg-[#ffffff] border border-[#e5e5ea] rounded-[24px] p-8 space-y-5">
              <div className="flex items-center justify-between border-b border-[#f0f0f0] pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 squircle-icon bg-[#f5f5f7] flex items-center justify-center">
                    <Trophy className="h-4 w-4 text-[#141414]" />
                  </div>
                  <h3 className="text-[18px] font-[650] text-[#141414]">Awards and honors</h3>
                </div>
                <span className="badge-popular">
                  Hackathons
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-[16px] bg-[#f5f5f7] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[15px] font-[650] text-[#141414]">
                      Second Prize — REVA Hackathon
                    </span>
                    <a 
                      href="https://github.com/anilkumara9/ai-tutor" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-pill-soft text-[11px] h-7 px-2.5 bg-[#ffffff] border border-[#e0e0e0]"
                    >
                      Code ↗
                    </a>
                  </div>
                  <p className="text-[13px] font-[456] text-[#707070] leading-[1.38]">
                    Built an AI interview preparation platform powered by Vapi AI conversational voice agents.
                  </p>
                </div>

                <div className="p-4 rounded-[16px] bg-[#f5f5f7] space-y-1.5">
                  <span className="text-[15px] font-[650] text-[#141414]">
                    Finalist — CIDECODE Hackathon (PES University)
                  </span>
                  <p className="text-[13px] font-[456] text-[#707070] leading-[1.38]">
                    Recognized as a finalist for AI-powered problem solving and automated execution.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= INTERACTIVE TIMELINE ================= */}
        <section id="timeline" className="space-y-6">
          <InteractiveTimeline />
        </section>

        {/* ================= CONTACT SECTION ================= */}
        <section id="contact" className="space-y-6">
          <ContactForm />
        </section>

      </main>

      {/* ================= PROJECT INSPECTION MODAL ================= */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity">
          <div 
            className="bg-[#ffffff] border border-[#e5e5ea] rounded-[24px] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-[#f0f0f0] pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="badge-popular text-[11px]">
                    {activeProjectModal.badge}
                  </span>
                  <span className="text-[12px] font-[500] text-[#707070]">
                    {activeProjectModal.period}
                  </span>
                </div>
                <h3 className="text-2xl font-[650] text-[#141414]">
                  {activeProjectModal.title}
                </h3>
                <span className="text-[13px] font-[500] text-[#707070]">
                  Role: {activeProjectModal.role}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setActiveProjectModal(null)}
                className="h-8 w-8 rounded-full bg-[#f3f3f3] text-[#141414] flex items-center justify-center hover:bg-[#e5e5ea] transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Problem & Motivation */}
            {activeProjectModal.deepDive && (
              <div className="space-y-4 text-[14px] leading-relaxed">
                <div>
                  <h4 className="text-[12px] font-[600] uppercase tracking-wider text-[#707070] mb-1">
                    Problem & Motivation
                  </h4>
                  <p className="text-[#141414] font-[456] bg-[#f5f5f7] p-4 rounded-[16px]">
                    {activeProjectModal.deepDive.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-[12px] font-[600] uppercase tracking-wider text-[#707070] mb-1">
                    Architecture & Implementation
                  </h4>
                  <p className="text-[#707070] font-[456]">
                    {activeProjectModal.deepDive.architecture}
                  </p>
                </div>

                <div>
                  <h4 className="text-[12px] font-[600] uppercase tracking-wider text-[#707070] mb-2">
                    Key Outcomes & Impact
                  </h4>
                  <div className="space-y-2">
                    {activeProjectModal.deepDive.keyOutcomes.map((outcome: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2.5 text-[13px] text-[#141414]">
                        <CheckCircle2 className="h-4 w-4 text-[#0066ff] shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tech Stack Matrix */}
            <div>
              <h4 className="text-[12px] font-[600] uppercase tracking-wider text-[#707070] mb-2">
                Tech Stack & Libraries
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeProjectModal.stack.map((tech: string) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 rounded-full text-[12px] font-[500] bg-[#f5f5f7] text-[#141414]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-4 border-t border-[#f0f0f0] flex flex-wrap gap-2.5">
              {activeProjectModal.links.map((link: any) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 ${link.primary ? 'btn-primary' : 'btn-outline'} text-[13px] h-10`}
                >
                  <span>{link.label}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))}
              <button
                type="button"
                onClick={() => setActiveProjectModal(null)}
                className="btn-pill-soft text-[13px] h-10 px-5 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= CLEAN LIGHT GALLERY FOOTER ================= */}
      <footer className="w-full bg-[#f8f8fa] border-t border-[#e5e5ea] text-[#141414] py-14 px-6 mt-24">
        <div className="container mx-auto max-w-6xl space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="space-y-2">
              <span className="text-2xl sm:text-3xl font-[650] tracking-tight block text-[#141414]">
                Meda Anilkumar.
              </span>
              <p className="text-[15px] font-[400] text-[#707070]">
                Software & AI Engineer · Bengaluru, Karnataka, India
              </p>
              <div className="pt-2 flex items-center gap-2 text-[12px] text-[#707070]">
                <kbd className="px-2 py-0.5 rounded bg-[#ffffff] border border-[#e0e0e0] font-mono text-[11px] text-[#141414]">C</kbd>
                <span>to copy email</span>
                <span className="mx-1">·</span>
                <kbd className="px-2 py-0.5 rounded bg-[#ffffff] border border-[#e0e0e0] font-mono text-[11px] text-[#141414]">R</kbd>
                <span>for resume</span>
                <span className="mx-1">·</span>
                <kbd className="px-2 py-0.5 rounded bg-[#ffffff] border border-[#e0e0e0] font-mono text-[11px] text-[#141414]">P</kbd>
                <span>for paper</span>
                <span className="mx-1">·</span>
                <kbd className="px-2 py-0.5 rounded bg-[#ffffff] border border-[#e0e0e0] font-mono text-[11px] text-[#141414]">Esc</kbd>
                <span>close modal</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-[14px] font-[500] text-[#707070]">
              <a href="#hero" className="hover:text-[#141414] transition-colors">Back to top ↑</a>
              <span>·</span>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#141414] transition-colors">GitHub</a>
              <span>·</span>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#141414] transition-colors">LinkedIn</a>
              <span>·</span>
              <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#141414] transition-colors">𝕏 Profile</a>
              <span>·</span>
              <a href={emailUrl} className="hover:text-[#141414] transition-colors">anilkumarmeda6@gmail.com</a>
            </div>
          </div>

          <div className="border-t border-[#e5e5ea] pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[13px] font-[456] text-[#707070]">
            <p>© {new Date().getFullYear()} Meda Anilkumar. All rights reserved.</p>
            <p className="text-[#141414] font-[500]">"Ships AI products, researches how models work."</p>
          </div>

        </div>
      </footer>

    </div>
  );
}