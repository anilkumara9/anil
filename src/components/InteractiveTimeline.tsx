import React, { useState } from 'react';
import { Calendar, BookOpen, Code, Trophy, ChevronRight, Briefcase, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

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
      description: 'Launched a focused creator and learner platform; reached 200+ users with zero funding.',
      type: 'project',
      details: [
        'Built full-stack social platform with personalized discovery feed, short-form video streaming, and real-time interaction',
        'Bootstrapped 200+ active knowledge creators and learners with zero marketing spend',
        'Engineered creator discovery algorithms and fast media distribution'
      ],
      link: 'https://x.com/anilKumar09873/status/2096482373299057022',
      linkText: 'Demo on 𝕏'
    },
    {
      id: '2',
      date: 'Feb 2026 – May 2026',
      title: 'AI intern',
      organization: 'CampusPe · Bengaluru',
      description: 'Worked with product team on Generative AI initiatives, helping design and ship AI-powered features.',
      type: 'experience',
      details: [
        'Collaborated on production Generative AI features with product and backend teams',
        'Constructed structured LLM pipelines, prompt engineering patterns, and API workflows'
      ]
    },
    {
      id: '3',
      date: 'Jan 2026 – Present',
      title: 'SCBI: Self-consistent basis invention',
      organization: 'Independent AI research',
      description: 'Inference-time representation learning for frozen foundation models with no weight updates.',
      type: 'research',
      details: [
        'Central result: decodable concept directions (~0.7 cosine) show zero causal transfer under static steering (p = 1.0, replicated)',
        'Released open falsification kit on GitHub for transparent community verification',
        'Investigating activation steering, LLM interpretability, and causal transfer'
      ],
      link: 'https://drive.google.com/file/d/1ixGAoj-02c2dIN19v7_pUytsiVSv2z3k/view?usp=sharing',
      linkText: 'Read Paper'
    },
    {
      id: '4',
      date: 'Feb – Mar 2026',
      title: 'On-device video person re-ID and collage generator',
      organization: 'Edge machine learning',
      description: 'Kotlin, ML Kit, Edge ML, cosine-similarity (T = 0.68) frame selection; 100% offline and privacy-preserving.',
      type: 'project',
      details: [
        'Engineered edge ML inference on mobile devices without relying on external cloud APIs',
        'Automated frame scoring and multi-angle dynamic collage synthesis'
      ],
      link: 'https://github.com/anilkumara9/college',
      linkText: 'GitHub'
    },
    {
      id: '5',
      date: 'Jan 2026',
      title: 'Invisly: Real-time AI desktop copilot',
      organization: 'Product engineering',
      description: 'Instant desktop copilot answering technical questions with sub-second latency.',
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
      title: 'Polo (Vibe-Coding): AI web app generator',
      organization: 'Generative AI platform',
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
      date: 'May – Jun 2025',
      title: 'ML stock price prediction system',
      organization: 'Predictive modeling',
      description: 'Comparative study of Linear Regression, Random Forest, and LSTM neural networks.',
      type: 'project',
      details: [
        'Evaluated multi-model time-series forecasting on historical market data',
        'Implemented with Scikit-learn, PyTorch, and Pandas'
      ]
    },
    {
      id: '8',
      date: '2024 – 2025',
      title: 'Hackathon honors and awards',
      organization: 'REVA University and PES University',
      description: 'Second Prize, REVA Hackathon and Finalist, CIDECODE Hackathon.',
      type: 'achievement',
      details: [
        'Second Prize, REVA Hackathon: Built AI interview preparation platform powered by Vapi AI voice agents',
        'Finalist, CIDECODE Hackathon (PES University) for AI problem solving'
      ],
      link: 'https://github.com/anilkumara9/ai-tutor',
      linkText: 'Code'
    },
    {
      id: '9',
      date: 'Aug 2022 – Jul 2026',
      title: 'B.E. Computer Science and Engineering (Data Science)',
      organization: 'New Horizon College of Engineering, Bengaluru',
      description: 'CGPA: 8.09 / 10 · Core CS, Data Science and AI',
      type: 'education',
      details: [
        'Coursework: Data Structures and Algorithms, DBMS, Operating Systems, Computer Networks',
        'Strong problem-solving track record and competitive mindset'
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
    <div className="bg-[#ffffff] border border-[#f0f0f0] rounded-[24px] p-8 sm:p-12 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-[#f0f0f0] mb-8">
        <div>
          <span className="text-[12px] font-semibold text-[#707070] uppercase tracking-wider block mb-1">
            Chronology
          </span>
          <h3 className="text-2xl sm:text-3xl font-[650] text-[#141414]">
            Engineering and research journey.
          </h3>
        </div>
        <span className="self-start sm:self-auto px-4 py-1.5 rounded-full text-[12px] font-semibold bg-[#f3f3f3] text-[#141414]">
          2022 – 2026
        </span>
      </div>

      <div className="relative pl-2 sm:pl-4">
        {/* Timeline Hairline */}
        <div className="absolute left-[19px] sm:left-[27px] top-4 bottom-4 w-px bg-[#e0e0e0]" />
        
        <div className="space-y-6">
          {events.map((event) => {
            const Icon = getIcon(event.type);

            return (
              <div key={event.id} className="relative flex items-start gap-4 sm:gap-6">
                {/* Node Squircle */}
                <div className="relative z-10 flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center squircle-icon bg-[#ffffff] border border-[#e0e0e0] text-[#141414]">
                  <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                </div>
                
                {/* Content Box */}
                <div className="flex-1 bg-[#f3f3f3] rounded-[20px] p-5 sm:p-6 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[12px] font-[600] text-[#141414]">
                      {event.date}
                    </span>
                    <span className="px-3 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#ffffff] border border-[#f0f0f0] text-[#707070]">
                      {event.type}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="text-[16px] sm:text-[17px] font-[650] text-[#141414] leading-snug">
                      {event.title}
                    </h4>
                    <p className="text-[13px] font-[500] text-[#707070]">
                      {event.organization}
                    </p>
                    <p className="text-[13px] font-[456] text-[#707070] mt-1.5 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  
                  {event.details && (
                    <div className="pt-2">
                      <button
                        type="button"
                        className="text-[12px] text-[#141414] font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                        onClick={() => toggleExpand(event.id)}
                      >
                        <span>{event.isExpanded ? 'Hide details' : 'View details'}</span>
                        <ChevronRight className={`h-3.5 w-3.5 transition-transform duration-200 ${event.isExpanded ? 'rotate-90' : ''}`} />
                      </button>
                      
                      {event.isExpanded && (
                        <div className="mt-3 space-y-2 pl-3 border-l-2 border-[#141414] pt-1">
                          {event.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-[13px] text-[#707070] leading-relaxed">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#141414] shrink-0 mt-2" />
                              <span>{detail}</span>
                            </div>
                          ))}
                          {event.link && (
                            <div className="pt-2">
                              <a 
                                href={event.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn-pill-soft text-[12px]"
                              >
                                {event.linkText || 'Open link'}
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