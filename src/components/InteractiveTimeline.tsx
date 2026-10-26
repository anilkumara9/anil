import React, { useState } from 'react';
import { Calendar, BookOpen, Code, Trophy, ChevronRight, Briefcase, ExternalLink, Sparkles } from 'lucide-react';

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  organization: string;
  description: string;
  type: 'experience' | 'research' | 'project' | 'achievement' | 'education';
  details?: string[];
  link?: string;
  linkText?: string;
  isExpanded?: boolean;
}

const InteractiveTimeline: React.FC = () => {
  const [events, setEvents] = useState<TimelineEvent[]>([
    {
      id: 'omnirecon',
      date: 'Oct 2026 – Present',
      title: 'OmniRecon: Full-Spectrum Web Recon for Coding Agents',
      organization: 'Open Source · 21 MCP Tools',
      description: 'Gives Claude Code and coding agents the sensory ability to explore websites, map routes, capture API calls, and verify rebuilds.',
      type: 'project',
      details: [
        'Brings together 21 MCP tools for browser automation, network request sniffing, design system extraction, and rebuild blueprints',
        'Engineered an automated rebuild verification engine that directly benchmarks recreated applications against the original live site',
        'MIT licensed with 163 passing unit and integration tests and one-command installation'
      ],
      link: 'https://github.com/anilkumara9/omnirecon',
      linkText: 'GitHub Repo'
    },
    {
      id: '1',
      date: 'Mar 2026 – Present',
      title: 'Spora: Knowledge-first social platform',
      organization: 'Solo founder and developer',
      description: 'Launched a focused creator and learner platform; reached 200+ users with zero marketing budget.',
      type: 'project',
      details: [
        'Built full-stack social platform with personalized discovery feed, short-form video streaming, and real-time interaction',
        'Bootstrapped 200+ active knowledge creators and learners organically through direct product utility',
        'Sub-150ms dynamic feed rendering with client-side optimistic UI state'
      ],
      link: 'https://x.com/anilKumar09873/status/2096482373299057022',
      linkText: 'Demo on 𝕏'
    },
    {
      id: '2',
      date: 'Feb 2026 – May 2026',
      title: 'AI Intern at CampusPe',
      organization: 'CampusPe · Bengaluru, IN',
      description: 'Worked directly with product leadership on Generative AI pipelines and model optimization.',
      type: 'experience',
      details: [
        'Constructed GenAI prompt engineering harnesses and structured JSON schema validation loops',
        'Streamlined model response streaming, latency bottlenecks, and error-recovery fallbacks'
      ]
    },
    {
      id: '3',
      date: 'Jan 2026 – Present',
      title: 'SCBI: Self-Consistent Basis Invention',
      organization: 'Independent AI Research · Springer Accepted',
      description: 'Inference-time representation learning for frozen foundation models with no weight updates.',
      type: 'research',
      details: [
        'Central result: decodable concept directions (~0.7 cosine) show zero causal transfer under static steering (p = 1.0, replicated)',
        'Released open-source turn-key falsification kit on GitHub for transparent verification',
        'Accepted for publication in peer-reviewed scientific proceedings (Springer)'
      ],
      link: 'https://openreview.net/pdf?id=QGcF4561UP',
      linkText: 'OpenReview PDF'
    },
    {
      id: '4',
      date: 'Feb – Mar 2026',
      title: 'On-Device Video Person Re-ID & Smart Collage',
      organization: 'Edge Machine Learning',
      description: 'Kotlin, ML Kit, cosine-similarity (T = 0.68) frame selection; 100% offline and privacy-preserving.',
      type: 'project',
      details: [
        'Engineered edge ML inference on mobile devices without relying on external cloud APIs',
        'Automated multi-angle dynamic collage synthesis with high-frequency frame scoring'
      ],
      link: 'https://github.com/anilkumara9/college',
      linkText: 'GitHub'
    },
    {
      id: '5',
      date: 'Jan 2026',
      title: 'Invisly: Real-Time AI Desktop Copilot',
      organization: 'Product Engineering',
      description: 'Instant desktop copilot answering technical queries with sub-second streaming latency.',
      type: 'project',
      details: [
        'Engineered real-time desktop assistant powered by streaming LLM APIs',
        'Live in production at invisly.in'
      ],
      link: 'https://invisly.in/',
      linkText: 'Live Site'
    },
    {
      id: '6',
      date: 'Jan – Mar 2025',
      title: 'Polo (Vibe-Coding): AI Web App Generator',
      organization: 'Generative AI Platform',
      description: 'Generates full production web apps from natural language prompts using LLM APIs.',
      type: 'project',
      details: [
        'Automated multi-file web app code synthesis using Next.js, React, and LLM APIs',
        'Open-source repository available on GitHub'
      ],
      link: 'https://github.com/anilkumara9/vibe',
      linkText: 'GitHub'
    },
    {
      id: '7',
      date: 'Aug – Sep 2024',
      title: 'REVA University Hackathon (2nd Prize Winner)',
      organization: 'REVA University · Bengaluru',
      description: 'Built conversational voice AI interview simulation platform competing against 50+ squads.',
      type: 'achievement',
      details: [
        'Awarded Second Prize at 24-hour hackathon among 50+ competitive collegiate squads',
        'Built real-time conversational voice agent evaluation harness powered by Vapi AI'
      ],
      link: 'https://github.com/anilkumara9/ai-tutor',
      linkText: 'Hackathon Code'
    },
    {
      id: '8',
      date: 'Aug 2022 – Jul 2026',
      title: 'B.E. Computer Science & Engineering (Data Science)',
      organization: 'New Horizon College of Engineering, Bengaluru',
      description: 'CGPA: 8.09 / 10 · Core Computer Science, Distributed Systems & Artificial Intelligence.',
      type: 'education',
      details: [
        'Rigorous coursework in Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks',
        'Consistent high academic standing and strong competitive problem-solving record'
      ]
    }
  ]);

  const toggleExpand = (id: string) => {
    setEvents(events.map(event => 
      event.id === id 
        ? { ...event, isExpanded: !event.isExpanded }
        : event
    ));
  };

  const getTypeBadge = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'education':
        return { label: 'Education', style: 'bg-[#FECE12]/40 text-[#2B2620] border-[#DBD8D0]' };
      case 'achievement':
        return { label: 'Award & Podium', style: 'bg-[#FAF7EF] text-[#111111] border-[#DBD8D0]' };
      case 'experience':
        return { label: 'Industry Role', style: 'bg-[#FAF7EF] text-[#2B2620] border-[#DBD8D0]' };
      case 'research':
        return { label: 'Springer Research', style: 'bg-[#FECE12] text-[#111111] border-[#DBD8D0]' };
      case 'project':
        return { label: 'Shipped Product', style: 'bg-[#111111] text-[#FAF7EF] border-[#111111]' };
      default:
        return { label: 'Milestone', style: 'bg-[#FAF7EF] text-[#45433D] border-[#DBD8D0]' };
    }
  };

  const getIcon = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'education': return BookOpen;
      case 'achievement': return Trophy;
      case 'experience': return Briefcase;
      case 'research': return Sparkles;
      case 'project': return Code;
      default: return Calendar;
    }
  };

  return (
    <div className="card-yashb p-5 sm:p-7 md:p-9 overflow-hidden w-full">
      
      {/* Header (No dividing line) */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 pb-2 mb-6 sm:mb-8">
        <div>
          <h3 className="font-shantell text-2xl sm:text-3xl font-[800] text-[#111111] tracking-tight">
            Engineering &amp; research <span className="text-[#FECE12] underline decoration-[#FECE12] decoration-wavy decoration-3 underline-offset-4">journey</span>.
          </h3>
        </div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-[0_3px_8px_-1px_rgba(80,70,55,0.14),inset_0_1.5px_2px_#fff] text-[11px] font-mono font-[700] text-[#111111] w-fit">
          <span className="h-2 w-2 rounded-full bg-[#FECE12] animate-pulse" />
          <span>2022 – 2026 TRACK RECORD</span>
        </div>
      </div>

      <div className="relative pl-1 sm:pl-3">
        {/* Timeline Hairline */}
        <div className="absolute left-[14px] sm:left-[22px] top-3 bottom-3 w-0.5 bg-[#DBD8D0]/60" />
        
        <div className="space-y-3.5 sm:space-y-4">
          {events.map((event) => {
            const Icon = getIcon(event.type);
            const badge = getTypeBadge(event.type);

            return (
              <div key={event.id} className="relative flex items-start gap-3 sm:gap-5 group">
                
                {/* 3D Node Pill */}
                <div className="relative z-10 flex h-7 w-7 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_10px_-2px_rgba(80,70,55,0.16),inset_0_1.5px_2px_#fff] text-[#111111] transition-all">
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#111111]" />
                </div>
                
                {/* Content Box - Borderless 3D Soft Clay Card */}
                <div className="flex-1 bg-gradient-to-b from-[#FFFFFF] to-[#FAF8F5] rounded-[22px] p-4 sm:p-5 space-y-2 transition-all duration-150 shadow-[0_4px_12px_-2px_rgba(80,70,55,0.11),0_10px_20px_-3px_rgba(80,70,55,0.07),inset_0_1.5px_2px_#fff,inset_0_-1.5px_3px_rgba(180,168,145,0.14)] hover:shadow-[0_8px_20px_-3px_rgba(80,70,55,0.14),0_16px_30px_-5px_rgba(80,70,55,0.09),inset_0_1.5px_2px_#fff] min-w-0">
                  
                  {/* Top row with Date & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-1.5">
                    <span className="text-[11.5px] sm:text-[12px] font-mono font-[700] text-[#111111] uppercase tracking-wider">
                      {event.date}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-[700] uppercase tracking-wider shadow-[0_2px_5px_-1px_rgba(80,70,55,0.12),inset_0_1px_1.5px_#fff] border-0 ${badge.style}`}>
                      {badge.label}
                    </span>
                  </div>
                  
                  {/* Title & Organization */}
                  <div>
                    <h4 className="font-shantell text-[15.5px] sm:text-[17px] font-[800] text-[#111111] leading-snug">
                      {event.title}
                    </h4>
                    <p className="text-[12.5px] font-[500] text-[#6A6253] mt-0.5 font-inter">
                      {event.organization}
                    </p>
                    <p className="text-[13px] sm:text-[13.5px] font-[400] text-[#45433D] mt-1.5 leading-relaxed font-inter">
                      {event.description}
                    </p>
                  </div>
                  
                  {/* Expandable Details */}
                  {event.details && (
                    <div className="pt-0.5">
                      <button
                        type="button"
                        className="text-[11.5px] text-[#111111] font-[600] inline-flex items-center gap-1 transition-colors cursor-pointer hover:underline"
                        onClick={() => toggleExpand(event.id)}
                      >
                        <span>{event.isExpanded ? 'Hide details' : 'View details & outcomes'}</span>
                        <ChevronRight className={`h-3 w-3 transition-transform duration-200 ${event.isExpanded ? 'rotate-90' : ''}`} />
                      </button>
                      
                      {event.isExpanded && (
                        <div className="mt-2.5 space-y-2 pl-3 border-l-2 border-[#111111] pt-0.5">
                          {event.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-[12.5px] text-[#45433D] leading-relaxed font-inter">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#111111] shrink-0 mt-1.5" />
                              <span>{detail}</span>
                            </div>
                          ))}
                          {event.link && (
                            <div className="pt-1.5">
                              <a 
                                href={event.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn-outline text-[11.5px] h-8 px-3 inline-flex items-center gap-1.5"
                              >
                                <span>{event.linkText || 'Open link'}</span>
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTimeline;