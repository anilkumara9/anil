import React, { useState } from 'react';
import { 
  Terminal, FlaskConical, Network, ArrowUpRight, Play, RefreshCw, 
  CheckCircle2, Sparkles, Sliders, ShieldCheck, Layers, Cpu, Database
} from 'lucide-react';

interface InteractiveConsoleProps {
  paperUrl: string;
}

const InteractiveConsole: React.FC<InteractiveConsoleProps> = ({ paperUrl }) => {
  const [activeTab, setActiveTab] = useState<'scbi' | 'terminal' | 'topology'>('scbi');
  
  // SCBI Lab State
  const [steeringStrength, setSteeringStrength] = useState<number>(0.85);
  const [selectedLayer, setSelectedLayer] = useState<number>(16);
  const [isIntervening, setIsIntervening] = useState<boolean>(false);

  // Terminal State
  const [cliInput, setCliInput] = useState<string>('');
  const [cliHistory, setCliHistory] = useState<Array<{ cmd: string; output: React.ReactNode }>>([
    {
      cmd: 'whoami',
      output: (
        <div className="space-y-1 text-slate-300">
          <p><span className="text-[#FC535B] font-bold">Meda Anilkumar</span> — Software & AI Engineer</p>
          <p className="text-slate-400">Bengaluru, India · B.E. CSE (Data Science) · CGPA: 8.09 / 10</p>
          <p className="text-emerald-400">Status: Actively interviewing for SWE & AI Engineer roles</p>
        </div>
      )
    },
    {
      cmd: 'metrics --summary',
      output: (
        <div className="grid grid-cols-2 gap-2 text-[12px] py-1 text-slate-300">
          <div className="p-2 rounded bg-white/5 border border-white/10">
            <span className="text-slate-400 block text-[10px]">Spora Platform</span>
            <span className="font-bold text-white text-[14px]">200+ Active Users</span>
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/10">
            <span className="text-slate-400 block text-[10px]">SCBI Research</span>
            <span className="font-bold text-[#FC535B] text-[14px]">p = 1.0 (Replicated)</span>
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/10">
            <span className="text-slate-400 block text-[10px]">Edge ML Re-ID</span>
            <span className="font-bold text-white text-[14px]">100% Offline (T=0.68)</span>
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/10">
            <span className="text-slate-400 block text-[10px]">Hackathons</span>
            <span className="font-bold text-[#F2F536] text-[14px]">REVA 2nd Prize Winner</span>
          </div>
        </div>
      )
    }
  ]);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300 text-[12px]">
            <p className="text-slate-400">Available commands:</p>
            <p><span className="text-[#FC535B] font-mono font-semibold">spora</span> — Bootstrapped social platform specs (200+ users)</p>
            <p><span className="text-[#FC535B] font-mono font-semibold">scbi</span> — Foundation model representation steering findings</p>
            <p><span className="text-[#FC535B] font-mono font-semibold">skills</span> — Full technical stack & tool matrix</p>
            <p><span className="text-[#FC535B] font-mono font-semibold">experience</span> — Industry work at CampusPe</p>
            <p><span className="text-[#FC535B] font-mono font-semibold">contact</span> — Reach out via email, phone, or LinkedIn</p>
            <p><span className="text-[#FC535B] font-mono font-semibold">clear</span> — Reset terminal output</p>
          </div>
        );
        break;
      case 'spora':
        output = (
          <div className="space-y-1.5 text-[12px] text-slate-300 bg-white/5 p-3 rounded-[12px] border border-white/10">
            <p className="font-bold text-white flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Spora: Knowledge-First Social Media Platform
            </p>
            <p className="text-slate-400">Solo founder & developer · Mar 2026 – Present · 200+ users bootstrapped with $0 funding</p>
            <p>Stack: React, Next.js, Mobile, Personalized Discovery Algorithms, Video Stream, WebSockets</p>
            <a href="https://x.com/anilKumar09873/status/2096482373299057022" target="_blank" rel="noopener noreferrer" className="text-[#FC535B] hover:underline inline-flex items-center gap-1">
              Watch Demo on 𝕏 <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        );
        break;
      case 'scbi':
        output = (
          <div className="space-y-1.5 text-[12px] text-slate-300 bg-white/5 p-3 rounded-[12px] border border-white/10">
            <p className="font-bold text-[#FC535B]">SCBI: Self-Consistent Basis Invention</p>
            <p className="text-slate-400">Independent Research · Jan 2026 – Present</p>
            <p>Result: Decodable concept directions (~0.7 cosine) show zero causal transfer under static steering (p = 1.0, replicated).</p>
            <p className="text-slate-400">Open-source falsification kit released on GitHub.</p>
            <a href={paperUrl} target="_blank" rel="noopener noreferrer" className="text-[#F2F536] hover:underline inline-flex items-center gap-1">
              Read Paper (PDF) <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        );
        break;
      case 'skills':
        output = (
          <div className="space-y-1 text-[12px] text-slate-300">
            <p><strong className="text-white">AI / LLMs:</strong> PyTorch, Hugging Face, LangChain, RAG, Vector DBs, LLM APIs, AI Agents, Prompt Engineering</p>
            <p><strong className="text-white">Languages:</strong> Python, Java, JavaScript, TypeScript, SQL, C</p>
            <p><strong className="text-white">Full Stack:</strong> React.js, Next.js, Tailwind CSS, Node.js, Express.js, REST APIs</p>
            <p><strong className="text-white">Data & Systems:</strong> Scikit-learn, XGBoost, Pandas, AWS, Docker, Kubernetes, Linux, MongoDB, PostgreSQL</p>
          </div>
        );
        break;
      case 'experience':
        output = (
          <div className="space-y-1 text-[12px] text-slate-300">
            <p><strong className="text-white">CampusPe — AI Intern</strong> (Feb 2026 – May 2026 · Bengaluru)</p>
            <p className="text-slate-400">Constructed reliable GenAI prompt pipelines, structured schema validation, and low-latency LLM workflows.</p>
          </div>
        );
        break;
      case 'contact':
        output = (
          <div className="space-y-1 text-[12px] text-slate-300">
            <p>📧 Email: <a href="mailto:anilkumarmeda6@gmail.com" className="text-[#FC535B] hover:underline">anilkumarmeda6@gmail.com</a></p>
            <p>📱 Phone: <a href="tel:+919986489887" className="text-[#0066ff] hover:underline">+91 9986489887</a></p>
            <p>🔗 LinkedIn: <a href="https://www.linkedin.com/in/anilkumar-meda-2b2624331" target="_blank" rel="noopener noreferrer" className="text-[#FC535B] hover:underline">linkedin.com/in/anilkumar-meda-2b2624331</a></p>
          </div>
        );
        break;
      case 'clear':
        setCliHistory([]);
        setCliInput('');
        return;
      default:
        output = (
          <p className="text-red-400 text-[12px]">
            Command not recognized: "{cmdText}". Type <span className="text-[#FC535B] font-bold">help</span> to view all commands.
          </p>
        );
    }

    setCliHistory(prev => [...prev, { cmd: cmdText, output }]);
    setCliInput('');
  };

  const runInterventionSimulation = () => {
    setIsIntervening(true);
    setTimeout(() => {
      setIsIntervening(false);
    }, 1200);
  };

  return (
    <div className="w-full bg-[#0E121D] border border-white/10 rounded-[28px] shadow-2xl overflow-hidden text-slate-200">
      
      {/* Console Top Bar */}
      <div className="px-5 py-3.5 bg-black/40 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#FC535B]/80" />
          <div className="h-3 w-3 rounded-full bg-[#F2F536]/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <span className="font-mono text-[12px] text-slate-400 ml-2 font-medium">
            meda-ai-lab // v2.6.4
          </span>
        </div>

        {/* Console Mode Selector */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 text-[11px] font-semibold">
          <button
            onClick={() => setActiveTab('scbi')}
            className={`px-3 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'scbi' 
                ? 'bg-[#FC535B] text-white shadow-sm' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FlaskConical className="h-3 w-3" />
            <span>SCBI Lab</span>
          </button>

          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-3 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'terminal' 
                ? 'bg-white text-black shadow-sm' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Terminal className="h-3 w-3" />
            <span>CLI Terminal</span>
          </button>

          <button
            onClick={() => setActiveTab('topology')}
            className={`px-3 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'topology' 
                ? 'bg-[#F2F536] text-black shadow-sm' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Network className="h-3 w-3" />
            <span>Spora Map</span>
          </button>
        </div>
      </div>

      {/* Tab 1: SCBI Neural Lab */}
      {activeTab === 'scbi' && (
        <div className="p-6 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FC535B] block">
                Frozen Foundation Model Intervention Lab
              </span>
              <h4 className="font-display font-bold text-[18px] text-white">
                Inference-Time Representation Steering
              </h4>
            </div>
            <button
              onClick={runInterventionSimulation}
              disabled={isIntervening}
              className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-[#FC535B] hover:text-white border border-white/15 text-[12px] font-semibold flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${isIntervening ? 'animate-spin text-[#FC535B]' : ''}`} />
              <span>{isIntervening ? 'Synthesizing...' : 'Run Steering Probe'}</span>
            </button>
          </div>

          {/* Interactive Controls */}
          <div className="grid sm:grid-cols-2 gap-4">
            
            {/* Steering Vector Magnitude */}
            <div className="p-4 rounded-[20px] bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-[12px]">
                <span className="text-slate-400 font-medium">Steering Multiplier (α)</span>
                <span className="font-mono text-[#FC535B] font-bold">{steeringStrength.toFixed(2)}x</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="2.5"
                step="0.05"
                value={steeringStrength}
                onChange={(e) => setSteeringStrength(parseFloat(e.target.value))}
                className="w-full accent-[#FC535B] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>0.1x (Subtle)</span>
                <span>1.0x (Standard)</span>
                <span>2.5x (Strong)</span>
              </div>
            </div>

            {/* Layer Depth Selector */}
            <div className="p-4 rounded-[20px] bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-[12px]">
                <span className="text-slate-400 font-medium">Intervention Layer</span>
                <span className="font-mono text-[#F2F536] font-bold">Layer {selectedLayer} / 32</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 pt-1">
                {[8, 16, 24, 32].map((layer) => (
                  <button
                    key={layer}
                    onClick={() => setSelectedLayer(layer)}
                    className={`py-1.5 rounded-[12px] font-mono text-[11px] font-bold transition-all cursor-pointer ${
                      selectedLayer === layer
                        ? 'bg-[#F2F536] text-black shadow-sm'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300'
                    }`}
                  >
                    L{layer}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Visual Gauge Comparison */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-[20px] bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-[12px]">
                <span className="text-slate-400">Decodability Probe</span>
                <span className="font-mono text-emerald-400 font-bold">cos θ = 0.71</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(71 * (steeringStrength / 1.0), 95)}%` }}
                />
              </div>
              <span className="text-[10px] text-slate-400 block">Linear probe decodes concept vector robustly</span>
            </div>

            <div className="p-4 rounded-[20px] bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-[12px]">
                <span className="text-slate-400">Causal Transfer</span>
                <span className="font-mono text-[#FC535B] font-bold">p = 1.0 (Zero)</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div 
                  className="h-full bg-[#FC535B] rounded-full transition-all duration-300"
                  style={{ width: isIntervening ? '10%' : '0%' }}
                />
              </div>
              <span className="text-[10px] text-slate-400 block">Replicated proof: static steering alters 0% output</span>
            </div>
          </div>

          {/* Empirical Finding Callout */}
          <div className="p-4 rounded-[20px] bg-[#FC535B]/10 border border-[#FC535B]/20 text-[12px] text-slate-200 leading-relaxed flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-[#FC535B] shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-semibold">Central Replicated Scientific Finding:</strong>
              Even when a concept direction is strongly decodable (~0.7 cosine), static activation steering produces zero causal behavioral change in frozen models ($p = 1.0$). Decodability does not imply steerability.
            </div>
          </div>

        </div>
      )}

      {/* Tab 2: CLI Terminal */}
      {activeTab === 'terminal' && (
        <div className="p-5 font-mono text-[13px] space-y-4">
          <div className="space-y-3 max-h-[260px] overflow-y-auto pr-2">
            {cliHistory.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-[#FC535B]">meda@terminal:~$</span>
                  <span className="text-white font-semibold">{item.cmd}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}
          </div>

          {/* Input Line */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (cliInput) handleCommand(cliInput);
            }}
            className="flex items-center gap-2 pt-2 border-t border-white/10"
          >
            <span className="text-[#FC535B] shrink-0">meda@terminal:~$</span>
            <input
              type="text"
              value={cliInput}
              onChange={(e) => setCliInput(e.target.value)}
              placeholder="Type 'help', 'spora', 'scbi', or 'skills'..."
              className="flex-1 bg-transparent text-white focus:outline-none text-[13px]"
            />
          </form>

          {/* Quick command suggestion pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-sans">Quick run:</span>
            {['help', 'spora', 'scbi', 'skills', 'contact', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-[#FC535B]/20 hover:text-[#FC535B] border border-white/10 text-[11px] text-slate-300 transition-colors cursor-pointer"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Spora Platform Topology */}
      {activeTab === 'topology' && (
        <div className="p-6 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F2F536] block">
                Platform Architecture
              </span>
              <h4 className="font-display font-bold text-[18px] text-white">
                Spora: Knowledge Social Engine (200+ Users)
              </h4>
            </div>
            <a
              href="https://x.com/anilKumar09873/status/2096482373299057022"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-[#F2F536] text-black text-[12px] font-bold flex items-center gap-1 hover:opacity-90 transition-opacity"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              <span>Live Demo</span>
            </a>
          </div>

          {/* Visual Topology Diagram */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 rounded-[20px] bg-white/[0.03] border border-white/10 text-center space-y-1.5">
              <div className="h-9 w-9 rounded-full bg-blue-500/20 text-blue-400 mx-auto flex items-center justify-center font-bold text-xs">
                UI
              </div>
              <span className="font-bold text-[13px] text-white block">React / Next.js</span>
              <span className="text-[11px] text-slate-400 block">Personalized Feed & Short Videos</span>
            </div>

            <div className="p-4 rounded-[20px] bg-white/[0.03] border border-white/10 text-center space-y-1.5">
              <div className="h-9 w-9 rounded-full bg-[#FC535B]/20 text-[#FC535B] mx-auto flex items-center justify-center font-bold text-xs">
                RT
              </div>
              <span className="font-bold text-[13px] text-white block">Fast Delivery</span>
              <span className="text-[11px] text-slate-400 block">Edge Media & Live Comments</span>
            </div>

            <div className="p-4 rounded-[20px] bg-white/[0.03] border border-white/10 text-center space-y-1.5">
              <div className="h-9 w-9 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center font-bold text-xs">
                ML
              </div>
              <span className="font-bold text-[13px] text-white block">RecSys Engine</span>
              <span className="text-[11px] text-slate-400 block">Learner Knowledge Graph</span>
            </div>
          </div>

          <div className="p-4 rounded-[20px] bg-white/[0.03] border border-white/10 flex items-center justify-between text-[12px]">
            <div>
              <span className="text-slate-400 block">Bootstrapped Milestone</span>
              <span className="font-bold text-white text-[15px]">200+ Active Users reached with $0 external funding</span>
            </div>
            <a 
              href="https://play.google.com/apps/testing/com.anilkumara9.news" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FC535B] font-semibold hover:underline inline-flex items-center gap-1"
            >
              Android Testing <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}

    </div>
  );
};

export default InteractiveConsole;
