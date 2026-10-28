import React from 'react';
import { Terminal, Code2, Database, Wrench } from 'lucide-react';

export default function AkoderStack() {
  const stackCategories = [
    {
      num: '01',
      category: 'Language',
      icon: <Terminal className="h-4 w-4 text-blue-400" />,
      skills: ['TypeScript', 'Python', 'JavaScript', 'C++', 'SQL']
    },
    {
      num: '02',
      category: 'Frontend',
      icon: <Code2 className="h-4 w-4 text-emerald-400" />,
      skills: ['React', 'Next.js', 'Tailwind CSS', 'TanStack Query', 'Framer Motion', 'HTML5/CSS3']
    },
    {
      num: '03',
      category: 'Backend & AI',
      icon: <Database className="h-4 w-4 text-amber-400" />,
      skills: ['FastAPI', 'Node.js', 'PyTorch', 'LangChain', 'Qdrant Vector DB', 'PostgreSQL', 'Redis', 'Docker']
    },
    {
      num: '04',
      category: 'Tools & Cloud',
      icon: <Wrench className="h-4 w-4 text-purple-400" />,
      skills: ['AWS', 'Git', 'Linux', 'Vercel', 'Postman', 'Vite']
    }
  ];

  return (
    <section id="stack" className="border-t border-dashed border-zinc-800 pt-8 pb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
          Stack
        </h2>
        <span className="text-[11px] font-mono text-zinc-500">
          Technologies &amp; Frameworks
        </span>
      </div>

      <div className="space-y-4">
        {stackCategories.map((item) => (
          <div
            key={item.num}
            className="flex flex-col sm:flex-row sm:items-start gap-2.5 sm:gap-6 p-4 rounded-2xl bg-[#141416]/50 border border-white/[0.05] hover:border-white/10 transition-colors"
          >
            <div className="flex items-center gap-2.5 shrink-0 sm:w-36 pt-1">
              <span className="font-mono text-xs text-zinc-500">{item.num}</span>
              <span className="text-[13.5px] font-medium text-zinc-200">{item.category}</span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 flex-1">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.06] text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
