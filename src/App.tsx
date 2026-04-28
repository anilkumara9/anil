import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Mail, Github, Linkedin, Calendar, MapPin, Award, Code, BookOpen, Download } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import essential components only
import TypewriterText from "./components/TypewriterText";
import DarkModeToggle from "./components/DarkModeToggle";
import ContactForm from "./components/ContactForm";
import InteractiveTimeline from "./components/InteractiveTimeline";

export default function NewspaperPortfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const resumeUrl = "https://drive.google.com/file/d/1UWQDJJsJjohpk44rKD3EzCDaDoFmvk08/view?usp=sharing";
  
  // Intersection Observer hooks for animations
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    setIsVisible(true);
    const today = new Date();
    setCurrentDate(today.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }));

    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const skillGroups = [
    {
      title: "Core Programming",
      skills: ["DSA", "Python", "Java", "OOP", "System Design Basics"],
    },
    {
      title: "AI / ML",
      skills: ["ML Fundamentals", "Deep Learning", "LLM Basics", "Embeddings", "RAG"],
    },
    {
      title: "Agentic AI",
      skills: ["LangChain", "LlamaIndex", "AI Agents", "Function Calling", "AI Workflows"],
    },
    {
      title: "Full Stack",
      skills: ["React/Next.js", "Node.js", "FastAPI", "REST APIs", "Auth & Security"],
    },
    {
      title: "Systems & Cloud",
      skills: ["PostgreSQL", "MongoDB", "Vector DBs", "Docker", "AWS/GCP"],
    },
  ];

  const focusAreas = [
    {
      title: "DSA + Problem Solving",
      detail: "Practicing structured problem solving for coding rounds and scalable thinking.",
    },
    {
      title: "System Design Mindset",
      detail: "Understands APIs, databases, auth, deployment, and clean product architecture.",
    },
    {
      title: "Agentic AI Edge",
      detail: "Building AI agents, RAG workflows, tool calling, and LLM-powered applications.",
    },
    {
      title: "Production Shipping",
      detail: "Turns ideas into deployed projects with full-stack execution and ownership.",
    },
  ];

  const projects = [
    {
      title: "ML Stock Price Prediction System",
      period: "May 2025 - Present",
      description: "Machine-learning powered system that predicts future stock prices using historical market data and time-series forecasting models.",
      details: [
        "Trained and tested Linear Regression, Random Forest, and LSTM neural networks to compare accuracy and improve predictive performance.",
        "Built interactive visualizations and a Streamlit interface for exploring forecasts, trends, and model outputs."
      ],
      tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "TensorFlow/Keras", "LSTM", "Matplotlib", "Plotly", "Streamlit", "Yahoo Finance API"],
      impact: "Demonstrates ML modeling, time-series forecasting, data visualization, and practical financial analytics",
    },
    {
      title: "AI-Powered Interview Preparation Platform",
      description: "Full-stack AI interview platform with voice practice, feedback flows, and credential verification",
      tech: ["Next.js 15", "Firebase", "Vapi AI", "Gemini AI", "Ethereum", "IPFS"],
      impact: "Shows product thinking, AI integration, authentication, and deployable full-stack delivery",
      link: "https://github.com/anilkumara9/ai-tutor",
    },
    {
      title: "Deep-Research Assistant",
      description: "Research assistant that gathers, filters, and summarizes information from multiple web sources",
      tech: ["Python", "Machine Learning", "Web Scraping", "NLP"],
      link: "https://github.com/anilkumara9/deepresearch",
      impact: "Demonstrates Python automation, ML workflows, and practical data processing"
    },
    {
      title: "Vibe-Coding (Polo)",
      description: "AI coding assistant that turns natural-language prompts into structured project code",
      tech: ["Next.js", "Prisma", "Neon DB", "Tailwind CSS", "Vercel SDK", "Gemini AI"],
      link: "https://github.com/anilkumara9",
      impact: "Highlights modern app architecture, AI SDK usage, and fast prototyping ability"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-background text-foreground relative">
        {/* Dark Mode Toggle moved into header actions */}

        {/* Newspaper Header */}
        <motion.header 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="border-b-4 border-double border-border bg-background/95 backdrop-blur-sm sticky top-0 z-40"
          id="hero"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              {/* Left - Newspaper Info */}
              <div className="text-left">
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  {currentDate} • DATA SCIENCE EDITION
                </div>
                <h1 className="headline text-2xl md:text-4xl lg:text-5xl font-bold">
                  THE AI TIMES
                </h1>
              </div>
              
              {/* Right - Actions */}
              <div className="flex items-center gap-4">
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="group hover:bg-primary hover:text-primary-foreground hidden sm:flex">
                    Download Resume
                    <Download className="h-3 w-3 ml-2" />
                  </Button>
                </a>
                <div className="flex items-center gap-2">
                  <a href="https://github.com/anilkumara9" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                      <Github className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href="https://linkedin.com/in/anilkumar-meda-2b2624331" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href="mailto:anilkumarmeda6@gmail.com">
                    <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
                <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
              </div>
            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 relative z-10">
          {/* Hero Article */}
          <motion.article 
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="newspaper-border p-8 bg-card hover-lift">
              <div className="text-center space-y-6">
                <Badge variant="outline" className="byline text-primary">
                  EXCLUSIVE: Rising AI Talent Profile
                </Badge>
                <h1 className="headline text-4xl md:text-6xl lg:text-7xl leading-tight">
                  MEDA ANILKUMAR
                </h1>
                <h2 className="headline text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light">
                  AI/ML DEVELOPER READY FOR IMPACT
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Computer Science undergraduate specializing in Data Science, focused on building practical 
                  AI/ML products with clean full-stack execution. Available for internships and entry-level 
                  software, AI, and data roles where strong project ownership matters.
                </p>
                <div className="byline text-muted-foreground pt-4">
                  By Tech Editorial Team • The AI Times • Bengaluru, Karnataka
                </div>
              </div>
            </div>
          </motion.article>

          {/* Engineering Focus */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-12 grid md:grid-cols-4 gap-4"
          >
            {focusAreas.map((area) => (
              <Card key={area.title} className="hover-lift border-primary/20">
                <CardContent className="p-4 space-y-2">
                  <h3 className="headline text-sm">{area.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{area.detail}</p>
                </CardContent>
              </Card>
            ))}
          </motion.section>

          {/* Three Column Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              id="about"
            >
              {/* About Section */}
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="headline text-2xl flex items-center gap-2">
                    <Award className="h-6 w-6" />
                    EXCLUSIVE INTERVIEW
                  </CardTitle>
                  <CardDescription className="byline text-primary">
                    Meet the Developer
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed">
                    "I build practical AI and full-stack projects, learn quickly, and focus on shipping useful 
                    products. I'm looking for an opportunity to contribute to engineering teams working on 
                    software, machine learning, or data-driven products."
                  </p>
                  <Separator />
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3" />
                      <span>Bengaluru, Karnataka</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      <span>B.E. Computer Science (Data Science)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-3 w-3" />
                      <span>CGPA: 8.29 • Open to AI/ML internships and fresher roles</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills Section with Chart */}
              <Card className="hover-lift" id="skills" ref={skillsRef}>
                <CardHeader>
                  <CardTitle className="headline text-xl flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    TECHNICAL ARSENAL
                  </CardTitle>
                  <CardDescription className="byline text-primary">
                    Focused Skills for Software and AI Roles
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skillGroups.map((group) => (
                    <div key={group.title} className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {group.title}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={skillsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                          >
                            <Badge
                              variant="secondary"
                              className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Contact Section with Form */}
              <div id="contact">
                <ContactForm isDarkMode={isDarkMode} />
              </div>
            </motion.div>

            {/* Center Column */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              id="projects"
              ref={projectsRef}
            >
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="headline text-3xl mb-2">FEATURED PROJECTS</h2>
                  <p className="byline text-muted-foreground">EXCLUSIVE COVERAGE</p>
                </div>
                
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    <Card className="hover-lift">
                      <CardHeader>
                        <CardTitle className="headline text-lg">{project.title}</CardTitle>
                        {"period" in project && project.period && (
                          <div className="text-xs font-semibold text-primary">{project.period}</div>
                        )}
                        <CardDescription className="text-sm">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {"details" in project && project.details && (
                          <div className="space-y-1">
                            {project.details.map((detail) => (
                              <div key={detail} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                                <span className="text-primary font-bold">•</span>
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="flex flex-wrap gap-1">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="text-xs font-semibold text-primary">
                          IMPACT: {project.impact}
                        </div>
                        {project.link ? (
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="w-full group">
                              View on GitHub
                              <ExternalLink className="h-3 w-3 ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </a>
                        ) : (
                          <a href={`#project-${index}`} onClick={(e) => {
                            e.preventDefault();
                            alert(`More details about ${project.title} coming soon! Check GitHub for live demos.`);
                          }}>
                            <Button variant="outline" size="sm" className="w-full group">
                              Read Full Story
                              <ExternalLink className="h-3 w-3 ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

            </motion.div>

            {/* Right Column */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {/* Interactive Timeline */}
              <div id="timeline">
                <InteractiveTimeline />
              </div>

              {/* Awards Section */}
              <Card className="hover-lift newspaper-border">
                <CardHeader>
                  <CardTitle className="headline text-xl flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    HONORS & AWARDS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm font-semibold">🏆 IBM SkillsBuild - Advanced Cloud & AI Certified</div>
                  <div className="text-sm font-semibold">🎯 NPTEL DBMS - Elite Certification</div>
                  <div className="text-sm font-semibold">🥉 Codeforces REVA Hackathon - Third Prize</div>
                  <div className="text-sm font-semibold">🔝 Kaspersky Manipal Hackathon - Top 5 Teams</div>
                  <div className="text-sm font-semibold">⭐ CIDECODE Hackathon - Finalist (PES University)</div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="headline text-xl flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    EDUCATION
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm">B.E. Computer Science (Data Science)</div>
                    <div className="text-xs text-muted-foreground">New Horizon College of Engineering • 2022-Present</div>
                    <div className="text-xs">CGPA: 8.29</div>
                    <div className="text-xs">Relevant focus: AI/ML, Data Science, Databases, Web Development</div>
                    <div className="text-xs text-muted-foreground mt-2">Pre-University (PCMB)</div>
                    <div className="text-xs text-muted-foreground">BKG PU College, Sandour</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.footer 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 pt-8 border-t-2 border-double border-border text-center"
          >
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="headline text-lg mb-2">CONTACT INFO</h3>
                <p className="text-sm text-muted-foreground">Phone: +91 9986489887</p>
                <p className="text-sm text-muted-foreground">Email: anilkumarmeda6@gmail.com</p>
                <p className="text-sm text-muted-foreground">Location: Bengaluru, Karnataka</p>
              </div>
              <div>
                <h3 className="headline text-lg mb-2">EDUCATION</h3>
                <p className="text-sm text-muted-foreground">B.E. Computer Science (Data Science)</p>
                <p className="text-sm text-muted-foreground">New Horizon College of Engineering</p>
                <p className="text-sm text-muted-foreground">CGPA: 8.29</p>
                <p className="text-sm text-muted-foreground">Focused on AI/ML and full-stack projects</p>
              </div>
              <div>
                <h3 className="headline text-lg mb-2">SPECIALIZATION</h3>
                <p className="text-sm text-muted-foreground">AI & Machine Learning</p>
                <p className="text-sm text-muted-foreground">Full-Stack Development</p>
                <p className="text-sm text-muted-foreground">Data Science & Analytics</p>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="text-xs font-mono text-muted-foreground space-y-2">
              <p>THE AI TIMES - DATA SCIENCE EDITION • ESTABLISHED 2024 • BENGALURU, KARNATAKA</p>
              <p>"All the AI That's Fit to Deploy"</p>
              <p className="text-primary font-semibold">READY TO INNOVATE? CONNECT WITH MEDA ANILKUMAR TODAY</p>
            </div>
          </motion.footer>
        </main>
      </div>
    </div>
  );
}