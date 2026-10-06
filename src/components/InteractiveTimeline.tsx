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
      title: 'AI Intern — CampusPe',
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
      title: 'REVA University Hackathon — Second Prize Podium',
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
        return { label: 'Education', style: 'bg-blue-50 text-blue-700 border-blue-200' };
      case 'achievement':
        return { label: 'Award & Podium', style: 'bg-amber-50 text-amber-700 border-amber-200' };
      case 'experience':
        return { label: 'Industry Role', style: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
      case 'research':
        return { label: 'Research Paper', style: 'bg-purple-50 text-purple-700 border-purple-200' };
      case 'project':
        return { label: 'Shipped Product', style: 'bg-indigo-50 text-indigo-700 border-indigo-200' };
      default:
        return { label: 'Milestone', style: 'bg-[#f8f8fa] text-[#111113] border-[#e4e4e9]' };
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
    <div className="bg-[#ffffff] border border-[#e4e4e9] rounded-[24px] sm:rounded-[32px] p-4.5 sm:p-8 md:p-12 transition-all shadow-xs overflow-hidden w-full">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-[#e4e4e9] mb-8 sm:mb-10">
        <div>
          <h3 className="text-2xl sm:text-4xl font-[700] text-[#111113]">
            Engineering and research <span className="font-editorial text-indigo-600 text-[1.18em] font-normal">journey</span>.
          </h3>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#f8f8fa] border border-[#e4e4e9] text-[11.5px] sm:text-[12px] font-[600] text-[#111113] w-fit">
          <span className="h-2 w-2 rounded-full bg-indigo-600" />
          <span>2022 – 2026 Track Record</span>
        </div>
      </div>

      <div className="relative pl-1 sm:pl-4">
        {/* Timeline Hairline */}
        <div className="absolute left-[15px] sm:left-[27px] top-4 bottom-4 w-px bg-[#e4e4e9]" />
        
        <div className="space-y-4 sm:space-y-6">
          {events.map((event) => {
            const Icon = getIcon(event.type);
            const badge = getTypeBadge(event.type);

            return (
              <div key={event.id} className="relative flex items-start gap-3 sm:gap-6 group">
                
                {/* Node Squircle */}
                <div className="relative z-10 flex h-8 w-8 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-[#ffffff] border border-[#e4e4e9] group-hover:border-[#111113] text-[#111113] shadow-xs group-hover:shadow-sm transition-all">
                  <Icon className="h-3.5 w-3.5 sm:h-[18px] sm:w-[18px] group-hover:text-indigo-600 transition-colors" />
                </div>
                
                {/* Content Box */}
                <div className="flex-1 bg-[#ffffff] group-hover:bg-[#f8f8fa]/60 border border-[#e4e4e9] group-hover:border-[#111113] rounded-[18px] sm:rounded-[24px] p-4 sm:p-6 space-y-2.5 sm:space-y-3 transition-all duration-200 shadow-2xs min-w-0">
                  
                  {/* Top row with Date & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[12.5px] font-[600] text-[#111113]">
                      {event.date}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-[600] uppercase tracking-wide border ${badge.style}`}>
                      {badge.label}
                    </span>
                  </div>
                  
                  {/* Title & Organization */}
                  <div>
                    <h4 className="text-[16px] sm:text-[18px] font-[700] text-[#111113] leading-snug group-hover:text-indigo-600 transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-[13px] font-[500] text-[#6e6e78] mt-0.5">
                      {event.organization}
                    </p>
                    <p className="text-[13.5px] font-[400] text-[#6e6e78] mt-2 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  
                  {/* Expandable Details */}
                  {event.details && (
                    <div className="pt-1">
                      <button
                        type="button"
                        className="text-[12px] text-[#111113] font-[600] inline-flex items-center gap-1.5 transition-colors cursor-pointer hover:text-indigo-600"
                        onClick={() => toggleExpand(event.id)}
                      >
                        <span>{event.isExpanded ? 'Hide details' : 'View details & outcomes'}</span>
                        <ChevronRight className={`h-3.5 w-3.5 transition-transform duration-200 ${event.isExpanded ? 'rotate-90' : ''}`} />
                      </button>
                      
                      {event.isExpanded && (
                        <div className="mt-3 space-y-2.5 pl-3 border-l-2 border-indigo-600 pt-1">
                          {event.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-[13px] text-[#6e6e78] leading-relaxed">
                              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 shrink-0 mt-2" />
                              <span>{detail}</span>
                            </div>
                          ))}
                          {event.link && (
                            <div className="pt-2">
                              <a 
                                href={event.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn-pill-soft text-[12px] inline-flex items-center gap-1.5"
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