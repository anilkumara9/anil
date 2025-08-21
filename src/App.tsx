import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, ExternalLink, Mail, Github, Linkedin, Calendar, MapPin, Award, Code, BookOpen, Download } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import essential components only
import TypewriterText from "./components/TypewriterText";
import DarkModeToggle from "./components/DarkModeToggle";
import ContactForm from "./components/ContactForm";
import InteractiveTimeline from "./components/InteractiveTimeline";
import { generateResumePDF } from "./utils/pdfGenerator";

export default function NewspaperPortfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
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

  const downloadResume = async () => {
    // Try provided/static assets first; fall back to generating dynamically
    const candidateAssetUrls: string[] = [
      "/asset/updated%20resume.pdf", // provided path
      "/assets/updated%20resume.pdf",
      "/updated%20resume.pdf",
      "/assets/Meda_Anilkumar_Resume.pdf",
      "/Meda_Anilkumar_Resume.pdf",
      "/assets/resume.pdf",
      "/resume.pdf",
    ];

    for (const url of candidateAssetUrls) {
      try {
        const headOk = await fetch(url, { method: "HEAD" }).then(r => r.ok).catch(() => false);
        if (headOk) {
          const link = document.createElement('a');
          link.href = url;
          link.download = url.split('/').pop() || 'resume.pdf';
          document.body.appendChild(link);
          link.click();
          link.remove();
          return;
        }
        const getResp = await fetch(url);
        if (getResp.ok) {
          const blob = await getResp.blob();
          const blobUrl = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = blobUrl;
          link.download = url.split('/').pop() || 'resume.pdf';
          document.body.appendChild(link);
          link.click();
          link.remove();
          URL.revokeObjectURL(blobUrl);
          return;
        }
      } catch (_) {
        // continue to next candidate
      }
    }

    const resumeData = {
      name: "Meda Anilkumar",
      email: "anilkumarmeda6@gmail.com",
      phone: "+91 9986489887",
      location: "Bengaluru, Karnataka",
      education: "B.E. Computer Science (Data Science) - CGPA: 8.09",
      skills: skills,
      projects: projects,
    };
    generateResumePDF(resumeData);
  };

  const skills = [
    'Python', 'JavaScript', 'TypeScript', 'Java', 'React', 'Next.js', 'Node.js', 'MongoDB',
    'Docker', 'AWS', 'GCP', 'Vercel', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'LangChain',
    'RAG', 'Prisma', 'Neon DB', 'PostgreSQL', 'Chroma DB', 'Tailwind CSS', 'TRPC', 'Expo'
  ];

  const projects = [
    {
      title: "AI-Powered Interview Preparation Platform",
      description: "Full-stack web app with AI voice interviews and blockchain credential verification",
      tech: ["Next.js 15", "Firebase", "Vapi AI", "Gemini AI", "Ethereum", "IPFS"],
      impact: "Revolutionary interview prep with blockchain verification",
      link: "https://github.com/anilkumara9/ai-tutor",
    },
    {
      title: "Deep-Research Assistant",
      description: "Autonomous research agent using reinforcement learning for web-scale data extraction",
      tech: ["Python", "Reinforcement Learning", "Web Scraping", "AI"],
      link: "https://github.com/anilkumara9/deepresearch",
      impact: "Automated multi-source information synthesis for complex topics"
    },
    {
      title: "Vibe-Coding (Polo)",
      description: "AI-driven coding platform generating optimized, production-ready code from natural language",
      tech: ["Next.js", "Prisma", "Neon DB", "Tailwind CSS", "Vercel SDK", "Gemini AI"],
      link: "https://github.com/anilkumara9",
      impact: "Eliminated repetitive coding tasks, accelerated prototyping"
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
                <Button
                  onClick={downloadResume}
                  variant="outline"
                  size="sm"
                  className="group hover:bg-primary hover:text-primary-foreground hidden sm:flex"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
                <a href="https://portfolio-cli.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground hidden sm:flex">
                    CLI Portfolio
                    <ExternalLink className="h-3 w-3 ml-2" />
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
                  AI INNOVATOR READY TO TRANSFORM TECH
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Computer Science undergraduate specializing in Data Science with hands-on experience 
                  building AI-powered applications and scalable platforms. Multiple hackathon victories 
                  showcase exceptional talent in machine learning and full-stack development.
                </p>
                <div className="byline text-muted-foreground pt-4">
                  By Tech Editorial Team • The AI Times • Bengaluru, Karnataka
                </div>
              </div>
            </div>
          </motion.article>

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
                    "I'm passionate about solving complex problems at scale and contributing to high-impact 
                    products. My focus on AI-powered applications and data science drives innovation 
                    that makes a real difference."
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
                      <span>CGPA: 8.09</span>
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
                    Core Technologies & Skills
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
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
                        <CardDescription className="text-sm">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
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
                    <div className="text-xs">CGPA: 8.09</div>
                    <div className="text-xs text-muted-foreground mt-2">Pre-University (PCMB)</div>
                    <div className="text-xs text-muted-foreground">BKG PU College, Sandour • 71.3%</div>
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
                <p className="text-sm text-muted-foreground">CGPA: 8.09</p>
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