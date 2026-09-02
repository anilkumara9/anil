import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Award, BookOpen, Code, Trophy, ChevronRight } from 'lucide-react';

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'achievement' | 'project' | 'certification';
  details?: string[];
  isExpanded?: boolean;
}

const InteractiveTimeline: React.FC = () => {
  const [events, setEvents] = useState<TimelineEvent[]>([
    {
      id: '1',
      date: 'Jan 2026 - Present',
      title: 'Creator of Spora & Invisly',
      organization: 'Product Development',
      description: 'Built Spora (next-gen social platform) and Invisly (real-time AI interview assistant)',
      type: 'project',
      details: [
        'Spora: Social platform with personalized content discovery, short videos, and real-time interaction (testing link live on Play Store)',
        'Invisly: AI-powered desktop assistant for real-time technical interview support (invisly.in)'
      ]
    },
    {
      id: '2',
      date: '2026',
      title: 'SCBI Research',
      organization: 'AI & Foundation Models',
      description: 'Researching Self-Consistent Basis Invention (SCBI) architecture',
      type: 'project',
      details: [
        'Inference-time representation-learning architecture',
        'Enables frozen foundation models to discover, validate, and reuse latent problem-solving representations without weight updates'
      ]
    },
    {
      id: '3',
      date: '2024 - 2025',
      title: 'Hackathon Victories & Recognition',
      organization: 'PES University & REVA University',
      description: 'Award-winning full-stack and AI problem solver',
      type: 'achievement',
      details: [
        'CIDECODE Hackathon (PES University) - Finalist for AI-Powered Problem Solving',
        'Codeforces REVA Hackathon - Third Prize for Full-Stack Application Development'
      ]
    },
    {
      id: '4',
      date: '2024 - 2025',
      title: 'Featured AI & ML Projects',
      organization: 'Machine Learning & Web Systems',
      description: 'Developed ML Stock Price Prediction System, Vibe-Coding (Polo), and AI Interview Prep Platform',
      type: 'project',
      details: [
        'ML Stock Price Prediction: Time-series forecasting with Linear Regression, Random Forest, and LSTM neural networks',
        'Vibe-Coding (Polo): AI platform turning natural prompts into production-ready web apps',
        'AI-Powered Interview Prep Platform: Full-stack web app with AI voice interviews and blockchain verification'
      ]
    },
    {
      id: '5',
      date: 'Aug 2022 - Present',
      title: 'B.E. in Computer Science',
      organization: 'New Horizon College of Engineering, Bengaluru',
      description: 'Specializing in AI and web development with strong DSA problem-solving skills',
      type: 'education',
      details: [
        'Current CGPA: 8.09',
        'Specializing in AI and web development',
        'Hackathon winner & active open-source creator'
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

  const getIcon = (type: string) => {
    switch (type) {
      case 'education': return BookOpen;
      case 'achievement': return Trophy;
      case 'project': return Code;
      case 'certification': return Award;
      default: return Calendar;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education': return 'bg-blue-500';
      case 'achievement': return 'bg-yellow-500';
      case 'project': return 'bg-green-500';
      case 'certification': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'education': return 'Education';
      case 'achievement': return 'Achievement';
      case 'project': return 'Project';
      case 'certification': return 'Certification';
      default: return 'Event';
    }
  };

  return (
    <Card className="hover-lift">
      <CardHeader>
        <CardTitle className="headline text-xl flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          INTERACTIVE TIMELINE
        </CardTitle>
        <CardDescription className="byline text-primary">
          Journey Through Innovation
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
          
          {events.map((event, index) => {
            const Icon = getIcon(event.type);
            return (
              <div key={event.id} className="relative flex items-start gap-4 pb-6">
                {/* Timeline dot */}
                <div className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-background ${getTypeColor(event.type)}`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {event.date}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {getTypeBadge(event.type)}
                    </Badge>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-sm">{event.title}</h3>
                    <p className="text-xs text-muted-foreground">{event.organization}</p>
                    <p className="text-xs mt-1">{event.description}</p>
                  </div>
                  
                  {event.details && (
                    <div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-auto p-0 text-xs text-primary hover:no-underline"
                        onClick={() => toggleExpand(event.id)}
                      >
                        <span>View Details</span>
                        <ChevronRight className={`h-3 w-3 ml-1 transition-transform ${event.isExpanded ? 'rotate-90' : ''}`} />
                      </Button>
                      
                      {event.isExpanded && (
                        <div className="mt-2 space-y-1 pl-4 border-l-2 border-primary/20">
                          {event.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-xs text-muted-foreground">
                              • {detail}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="pt-4 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            <span className="text-primary font-semibold">Timeline continues...</span> More achievements incoming!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveTimeline;