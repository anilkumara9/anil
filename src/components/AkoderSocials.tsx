import React, { useState } from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Copy, Check, BookOpen } from 'lucide-react';

export default function AkoderSocials() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const socials = [
    {
      id: 'github',
      name: 'GitHub',
      handle: '@anilkumara9',
      href: 'https://github.com/anilkumara9',
      icon: <Github className="h-4 w-4" />
    },
    {
      id: 'twitter',
      name: 'X (Twitter)',
      handle: '@anilKumar09873',
      href: 'https://x.com/anilKumar09873',
      icon: <span className="font-bold text-sm leading-none">𝕏</span>
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      handle: 'anilkumar-meda-2b2624331',
      href: 'https://www.linkedin.com/in/anilkumar-meda-2b2624331',
      icon: <Linkedin className="h-4 w-4" />
    },
    {
      id: 'discord',
      name: 'Discord',
      handle: '@t1x_faker',
      isCopy: true,
      copyValue: 't1x_faker',
      icon: (
        <svg className="h-4 w-4 fill-[#5865F2]" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      )
    },
    {
      id: 'email',
      name: 'Email',
      handle: 'anilkumarmeda6@gmail.com',
      isCopy: true,
      copyValue: 'anilkumarmeda6@gmail.com',
      icon: <Mail className="h-4 w-4 text-emerald-400" />
    },
    {
      id: 'springer',
      name: 'Research Paper',
      handle: 'Springer Published Author',
      href: 'https://link.springer.com',
      icon: <BookOpen className="h-4 w-4 text-purple-400" />
    }
  ];

  return (
    <section id="socials" className="px-4 sm:px-8 py-10 sm:py-14 scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-6">
        <div>
          <span className="font-mono text-[11px] tracking-widest text-[#71717A] uppercase block mb-1">
            [05] Socials &amp; Networks
          </span>
          <h2 className="font-serif text-[32px] sm:text-[38px] font-[450] text-[#F4F4F5] italic tracking-tight">
            Connect &amp; Profiles
          </h2>
        </div>
        <span className="text-[11.5px] font-mono text-[#71717A]">
          Direct Reach
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {socials.map((item) => {
          if (item.isCopy) {
            const isCopied = copiedItem === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => copyToClipboard(item.copyValue!, item.id)}
                className="group flex items-center justify-between p-3.5 rounded-xl bg-[#0A0A0C] hover:bg-[#0F0F13] border border-[#1C1C20] hover:border-[#27272A] transition-all duration-200 text-left shadow-sm cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#141418] border border-[#1C1C20] text-zinc-200 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[13.5px] font-medium text-zinc-200 group-hover:text-white transition-colors truncate">
                      {item.name}
                    </div>
                    <div className="text-xs font-mono text-[#71717A] truncate">
                      {isCopied ? 'Copied to clipboard!' : item.handle}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 text-zinc-500 group-hover:text-zinc-300">
                  {isCopied ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </div>
              </button>
            );
          }

          return (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3.5 rounded-xl bg-[#0A0A0C] hover:bg-[#0F0F13] border border-[#1C1C20] hover:border-[#27272A] transition-all duration-200 text-left shadow-sm"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#141418] border border-[#1C1C20] text-zinc-200 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-[13.5px] font-medium text-zinc-200 group-hover:text-white transition-colors truncate">
                    {item.name}
                  </div>
                  <div className="text-xs font-mono text-[#71717A] truncate">
                    {item.handle}
                  </div>
                </div>
              </div>

              <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-zinc-200 transition-colors shrink-0" />
            </a>
          );
        })}
      </div>
    </section>
  );
}
