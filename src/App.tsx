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
  const resumeUrl = "https://drive.google.com/file/d/1ccU7QI9gERllMVEea1Sac3FSjQ3avhio/view?usp=sharing";
  
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

    // Default to light mode, then honor the user's saved theme choice.
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
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
      title: "Languages & Core",
      skills: ["Python", "Java", "JavaScript", "SQL", "DSA"],
    },
    {
      title: "Web & Frameworks",
      skills: ["Next.js", "React", "Node.js", "Express.js", "Tailwind CSS"],
    },
    {
      title: "AI / ML & LLMs",
      skills: ["LangChain", "RAG", "MCP", "PyTorch", "Scikit-learn", "Production-ready LLM pipelines"],
    },
    {
      title: "Databases & DevOps",
      skills: ["MongoDB", "MySQL", "Vector Databases", "AWS", "Google Cloud Platform", "Docker", "Git/GitHub"],
    },
  ];

  const focusAreas = [
    {
      title: "AI & Web Specialization",
      detail: "Building impactful software solutions, AI products, and real-time interactive web applications.",
    },
    {
      title: "Strong DSA & Problem Solving",
      detail: "Solid Data Structures & Algorithms foundation with a competitive problem-solving mindset.",
    },
    {
      title: "Inference-Time AI Research",
      detail: "Researching Self-Consistent Basis Invention (SCBI) for frozen foundation models.",
    },
    {
      title: "Hackathon Winner",
      detail: "Proven track record in competitive hackathons including REVA Hackathon & PES CIDECODE.",
    },
  ];

  const myWork = [
    {
      title: "Spora",
      role: "builder",
      period: "Jan-2026 - Present",
      description: "Built Spora, a next-generation social media platform featuring personalized content discovery, short videos, articles, and real-time user interactions.",
      link: "https://play.google.com/apps/testing/com.anilkumar09.news",
      tech: ["Android / Mobile", "Personalized Content", "Real-Time Interaction", "Media Stream"],
    },
    {
      title: "Invisly",
      role: "builder",
      period: "2025 - Present",
      description: "Built Invisly, an AI-powered desktop interview assistant designed to provide real-time support during technical interviews, helping candidates analyze questions and generate relevant responses quickly.",
      link: "https://invisly.in/",
      tech: ["Desktop AI Assistant", "LLM Integration", "Real-Time Support", "Interview Analysis"],
    }
  ];

  const projects = [
    {
      title: "ML Stock Price Prediction System",
      period: "May 2025 - June 2025",
      description: "A machine-learning powered system that predicts future stock prices using historical market data and time-series forecasting models.",
      details: [
        "Trained and tested multiple algorithms including Linear Regression, Random Forest, and LSTM neural networks to evaluate accuracy and improve predictive performance."
      ],
      tech: ["Python", "Linear Regression", "Random Forest", "LSTM Neural Networks", "Scikit-learn", "Time-Series"],
      impact: "Predictive financial modeling & neural network time-series forecasting",
    },
    {
      title: "Vibe-Coding (Polo)",
      period: "Jan 2025 - Mar 2025",
      description: "An AI-driven coding platform that takes user input and generates complete, production-ready web-sites automatically.",
      details: [
        "Functions similar to platforms like Lovable or Bolt, enabling users to build web applications without manual coding."
      ],
      tech: ["Next.js", "React", "AI Agent Pipelines", "Tailwind CSS", "LLM APIs"],
      impact: "Automated web application generation from natural language prompts",
      link: "https://github.com/anilkumara9",
    },
    {
      title: "AI-Powered Interview Preparation Platform",
      period: "Aug 2024 - Sep 2024",
      description: "Full-stack web app with AI voice interviews and blockchain credential verification.",
      tech: ["Next.js", "AI Voice", "Gemini AI", "Blockchain", "Credential Verification"],
      impact: "Voice AI interview simulation & decentralized verification",
      link: "https://github.com/anilkumara9/ai-tutor",
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-background text-foreground relative">
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
                  {currentDate} • AI & WEB DEVELOPMENT EDITION
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
                  PROFILE: AI & WEB DEVELOPMENT SPECIALIST • HACKATHON WINNER
                </Badge>
                <h1 className="headline text-4xl md:text-6xl lg:text-7xl leading-tight">
                  ANILKUMAR
                </h1>
                <h2 className="headline text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light">
                  COMPUTER SCIENCE UNDERGRADUATE & PRODUCT BUILDER
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Computer Science undergraduate specializing in AI and web development with strong problem-solving 
                  skills (DSA) and a passion for building impactful software solutions and Hackathon Winner.
                </p>
                <div className="byline text-muted-foreground pt-4 flex flex-wrap justify-center items-center gap-4 text-xs">
                  <span>📍 Bengaluru, Karnataka</span>
                  <span>📧 anilkumarmeda6@gmail.com</span>
                  <span>📞 +91 9986489887</span>
                  <span>🎓 B.E. in Computer Science (CGPA: 8.09)</span>
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
                    PROFILE SUMMARY
                  </CardTitle>
                  <CardDescription className="byline text-primary">
                    About Meda Anilkumar
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed">
                    "Computer Science undergraduate specializing in AI and web development with strong problem-solving 
                    skills(DSA) and a passion for building impactful software solutions and Hackathon Winner."
                  </p>
                  <Separator />
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3 text-primary" />
                      <span>Bengaluru, Karnataka</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-3 w-3 text-primary" />
                      <span>B.E. in Computer Science (8.09 CGPA)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-3 w-3 text-primary" />
                      <span>Hackathon Winner & Product Builder</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Research Highlight Section */}
              <Card className="hover-lift newspaper-border border-primary/40 bg-card">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-1 text-xs">
                    ACTIVE RESEARCH
                  </Badge>
                  <CardTitle className="headline text-xl">
                    Research (I Am Working On)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-xs font-semibold text-primary">
                    SCBI (Self-Consistent Basis Invention)
                  </p>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Researching SCBI: an inference-time representation-learning architecture that aims to let frozen foundation models discover, validate, and reuse latent problem-solving representations without permanent weight updates.
                  </p>
                </CardContent>
              </Card>

              {/* Skills Section */}
              <Card className="hover-lift" id="skills" ref={skillsRef}>
                <CardHeader>
                  <CardTitle className="headline text-xl flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    SKILLS & TECH STACK
                  </CardTitle>
                  <CardDescription className="byline text-primary">
                    Proven Technologies & Frameworks
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
              {/* MY WORK / LIVE PRODUCTS */}
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="headline text-3xl mb-1">MY WORK</h2>
                  <p className="byline text-primary font-semibold">BUILT PRODUCTS & PLATFORMS</p>
                </div>

                {myWork.map((work) => (
                  <Card key={work.title} className="hover-lift border-2 border-primary/30">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <Badge variant="default" className="text-xs mb-1 capitalize">
                            {work.role}
                          </Badge>
                          <CardTitle className="headline text-xl">{work.title}</CardTitle>
                        </div>
                        <div className="text-xs font-semibold text-primary">{work.period}</div>
                      </div>
                      <CardDescription className="text-sm pt-2">{work.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {work.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <a href={work.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="default" size="sm" className="w-full mt-2 group">
                          Launch / Test {work.title}
                          <ExternalLink className="h-3 w-3 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* PROJECTS */}
              <div className="space-y-6 pt-4">
                <div className="text-center">
                  <h2 className="headline text-2xl mb-1">PROJECTS</h2>
                  <p className="byline text-muted-foreground">FEATURED ENGINEERING & ML SYSTEMS</p>
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
                        {project.period && (
                          <div className="text-xs font-semibold text-primary">{project.period}</div>
                        )}
                        <CardDescription className="text-sm">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {project.details && (
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
                          KEY HIGHLIGHT: {project.impact}
                        </div>
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="w-full group">
                              View Project / Repository
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
                    AWARDS & HONORS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-1">
                    <div className="text-sm font-semibold flex items-start gap-2">
                      <span className="text-amber-500">⭐</span>
                      <div>
                        <div>CIDECODE Hackathon (PES University)</div>
                        <div className="text-xs text-muted-foreground italic">Finalist for AI-Powered Problem Solving</div>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-1">
                    <div className="text-sm font-semibold flex items-start gap-2">
                      <span className="text-amber-500">🥉</span>
                      <div>
                        <div>Codeforces REVA Hackathon</div>
                        <div className="text-xs text-muted-foreground italic">Third Prize for Full-Stack Application Development</div>
                      </div>
                    </div>
                  </div>
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
                    <div className="font-semibold text-sm">B.E. in Computer Science</div>
                    <div className="text-xs font-semibold text-primary">CGPA: 8.09</div>
                    <div className="text-xs text-muted-foreground">New Horizon College of Engineering, Bengaluru</div>
                    <div className="text-xs text-muted-foreground">Aug 2022 - Present</div>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      Computer Science undergraduate specializing in AI and web development with strong problem-solving skills(DSA) and a passion for building impactful software solutions.
                    </p>
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
                <p className="text-sm text-muted-foreground">GitHub: github.com/anilkumara9</p>
              </div>
              <div>
                <h3 className="headline text-lg mb-2">EDUCATION</h3>
                <p className="text-sm text-muted-foreground">B.E. in Computer Science</p>
                <p className="text-sm text-muted-foreground">New Horizon College of Engineering</p>
                <p className="text-sm text-muted-foreground">CGPA: 8.09</p>
                <p className="text-sm text-muted-foreground">Aug 2022 - Present</p>
              </div>
              <div>
                <h3 className="headline text-lg mb-2">SPECIALIZATION</h3>
                <p className="text-sm text-muted-foreground">AI & Web Development</p>
                <p className="text-sm text-muted-foreground">Data Structures & Algorithms (DSA)</p>
                <p className="text-sm text-muted-foreground">Desktop AI & Social Platforms</p>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="text-xs font-mono text-muted-foreground space-y-2">
              <p>THE AI TIMES - ANILKUMAR PORTFOLIO EDITION • BENGALURU, KARNATAKA</p>
              <p>"Building Impactful AI & Web Solutions"</p>
              <p className="text-primary font-semibold">CONNECT WITH ANILKUMAR TODAY</p>
            </div>
          </motion.footer>
        </main>
      </div>
    </div>
  );
}