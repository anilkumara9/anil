import React, { useState, useEffect } from 'react';
import { BookOpen, ExternalLink, GitBranch, CheckCircle2, X, ArrowUpRight } from 'lucide-react';

export default function AkoderResearch() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const paperPdfUrl = "https://openreview.net/pdf?id=QGcF4561UP";
  const openReviewUrl = "https://openreview.net/pdf?id=QGcF4561UP";
  const githubKitUrl = "https://github.com/anilkumara9/SCBI";

  // Lock body scroll and listen for ESC key when research modal is active
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isModalOpen]);

  return (
    <section id="research" className="scroll-mt-20">
      {/* Section Header */}
      <div className="px-4 sm:px-8 pt-10 sm:pt-14 pb-5 sm:pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
        <div>
          <h2 className="text-[20px] sm:text-[22px] font-medium text-[#F4F4F5] tracking-tight">
            AI Research &amp; Publications
          </h2>
          <p className="text-[13px] text-zinc-400 font-sans mt-1">
            Empirical mechanistic interpretability &amp; representation learning in frozen foundation models.
          </p>
        </div>

        <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/25 text-[11.5px] font-mono self-start sm:self-auto shrink-0">
          Springer Accepted · 2026
        </span>
      </div>

      {/* Two Block Split Container with Line Attached to Both Outer Sides (No Curved Borders) */}
      <div
        onClick={() => setIsModalOpen(true)}
        className="group/card border-y border-[#18181C] bg-[#07070A] hover:bg-[#0A0A0E] transition-colors cursor-pointer grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#18181C]"
      >
        {/* Left Block: Spacious, Uncompacted Title, Description & Meta */}
        <div className="lg:col-span-6 p-6 sm:p-7 md:p-8 flex flex-col justify-between space-y-5">
          <div className="space-y-3.5">
            {/* Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded text-[10.5px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                Peer-Reviewed Publication
              </span>
              <span className="text-[11.5px] font-mono text-zinc-500">
                October 2026 · Springer
              </span>
            </div>

            {/* Paper Title */}
            <h3 className="text-[21px] sm:text-[23px] font-serif font-medium text-[#F4F4F5] group-hover/card:text-white italic leading-snug transition-colors">
              The Decodability Gap: Decodability Without Causality in Static Steering of Frozen Language Models
            </h3>

            {/* Small Description */}
            <p className="text-[13.5px] text-zinc-400 font-sans leading-relaxed">
              Empirical boundary result: Layer 11 representations decode task information at 33.33% (6.7× chance), but static injection flips zero decisions. Proves high decodability does not imply causal steerability.
            </p>

            {/* Author */}
            <p className="font-mono text-[12px] text-zinc-500">
              Meda Anilkumar · New Horizon College of Engineering, CSE (Data Science)
            </p>
          </div>

          {/* Quick Tags Side-by-Side + View Case Study Button Below */}
          <div className="pt-4 space-y-3 border-t border-[#18181C]">
            {/* Tags Side by Side */}
            <div className="flex flex-wrap items-center gap-2">
              {["PyTorch", "Hugging Face", "LLM Interpretability", "Activation Steering", "Causal Probes"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#111116] text-zinc-300 border border-[#202028]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View case study button below */}
            <div>
              <div className="inline-flex items-center gap-1.5 text-[12.5px] font-mono text-amber-400 group-hover/card:text-amber-300 transition-colors">
                <span>View case study &amp; full research details</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Block: Academic Paper Sticker Cutout (Click directly opens research paper PDF) */}
        <div className="lg:col-span-6 bg-[#040407] p-3 sm:p-4 md:p-5 flex flex-col items-center justify-center relative overflow-hidden">
          <a
            href={paperPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full flex flex-col items-center justify-center cursor-pointer group/paper"
            title="Open The Decodability Gap Research Paper (PDF)"
          >
            <div className="w-full flex items-center justify-center">
              <img
                src="/decodability-gap-paper.png"
                alt="The Decodability Gap Academic Paper by Meda Anilkumar"
                className="w-full max-w-[460px] h-auto max-h-[380px] sm:max-h-[420px] object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)]"
              />
            </div>

            <span className="mt-2 text-[11px] font-mono text-zinc-500 group-hover/paper:text-amber-300 transition-colors flex items-center gap-1">
              <span>Click image to open research paper (PDF)</span>
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </a>
        </div>
      </div>

      {/* Complete Paper Information Modal (like projects) */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-[#090A0F] border border-[#1C1D25] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-zinc-100 animate-in zoom-in-95 duration-150"
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-7 border-b border-[#1C1D25] bg-[#0E0F15] shrink-0">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
                      Peer-Reviewed Publication
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400">
                      Springer Proceedings · October 2026
                    </span>
                  </div>

                  <h3 className="font-serif italic text-[22px] sm:text-[26px] font-[500] text-white leading-tight">
                    The Decodability Gap: Decodability Without Causality in Static Steering of Frozen Language Models
                  </h3>

                  <p className="text-[12.5px] font-mono text-zinc-400">
                    Author: <span className="text-zinc-200">Meda Anilkumar</span> · New Horizon College of Engineering, CSE (Data Science), Bengaluru
                  </p>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors shrink-0"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 mt-4 border-t border-[#1C1D25]">
                <a
                  href={paperPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F4F4F5] text-black hover:bg-white font-mono text-[12px] font-medium transition-colors shadow-sm"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Paper (PDF)</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <a
                  href={githubKitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#141418] hover:bg-[#1C1C22] border border-[#26262E] font-mono text-[12px] text-zinc-200 transition-colors"
                >
                  <GitBranch className="w-3.5 h-3.5 text-amber-400" />
                  <span>GitHub Falsification Suite</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
                </a>

                <a
                  href={openReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[12px] font-mono text-zinc-400 hover:text-zinc-200 transition-colors ml-auto"
                >
                  <span>OpenReview</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto p-6 sm:p-7 space-y-6 divide-y divide-[#18181F]">
              
              {/* Central Finding Callout */}
              <div className="p-4 rounded-xl bg-[#0D0D14] border border-[#1F202B] text-[13px] font-mono text-zinc-200 leading-relaxed">
                <span className="text-amber-400 font-bold block mb-1">Central Empirical Discovery:</span>
                "Task information decodes at 20/60 = 33.33% (6.7× chance) from layer 11 of a frozen language model. Yet injecting that exact same direction back at &alpha; = 1.0 flips zero decisions, even though the perturbation reaches the logits. We call this the Decodability Gap: decodability without causal steerability under static injection."
              </div>

              {/* Core Highlights & Discoveries (01., 02., 03., 04.) */}
              <div className="pt-6 space-y-3">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-zinc-400 font-semibold block">
                  Core Highlights &amp; Key Discoveries
                </span>
                <div className="space-y-3 font-sans text-[13.5px] text-zinc-300 leading-relaxed">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-amber-400 text-[11.5px] shrink-0 mt-0.5">01.</span>
                    <div>
                      <strong className="text-white font-medium">Discovery of the Decodability Gap: </strong>
                      Disproved the ubiquitous assumption in representation learning that high linear decodability implies causal intervention steerability. Demonstrates that probes easily read task features that downstream model layers ignore.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-mono text-amber-400 text-[11.5px] shrink-0 mt-0.5">02.</span>
                    <div>
                      <strong className="text-white font-medium">Headroom &amp; Logit Perturbation Proved: </strong>
                      Rigorously verified through logit perturbation tracking that the injected vector successfully propagates through attention and MLP blocks without dissolving, confirming failure to steer is not trivial signal decay.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-mono text-amber-400 text-[11.5px] shrink-0 mt-0.5">03.</span>
                    <div>
                      <strong className="text-white font-medium">Multiple Geometric Variations: </strong>
                      Tested across norm scaling, orthogonalized steering bases, and multi-token sweeps across multiple model checkpoints to confirm findings are structurally invariant.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-mono text-amber-400 text-[11.5px] shrink-0 mt-0.5">04.</span>
                    <div>
                      <strong className="text-white font-medium">Open Falsification Suite on GitHub: </strong>
                      Published turn-key open-source suite (`github.com/anilkumara9/SCBI`) with reproducible scripts, activation cache seeds, and unit tests to allow independent verification.
                    </div>
                  </div>
                </div>
              </div>

              {/* Research Methodology & Technical Architecture */}
              <div className="pt-6 space-y-3">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-zinc-400 font-semibold block">
                  Methodology &amp; Controlled Study
                </span>
                <p className="text-[13.5px] text-zinc-300 leading-relaxed font-sans">
                  Conducted a controlled decode-then-inject study using frozen language model activations. First, a layer-11 direction that decodes task information with high statistical significance (33.33% vs 5% chance baseline) is identified via linear probing. Next, the exact direction is injected statically across attention representations at calibrated scales (&alpha; &isin; [0.5, 2.0]), while tracking downstream logits, residual streams, and decision boundary switches.
                </p>
              </div>

              {/* Technologies & Methodological Tools */}
              <div className="pt-6 space-y-3">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-zinc-400 font-semibold block">
                  Technologies &amp; Tools Used
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "PyTorch",
                    "Hugging Face Transformers",
                    "LLM Interpretability",
                    "Activation Steering",
                    "Representation Learning",
                    "Causal Probing",
                    "Logit Lens",
                    "Linear Probes",
                    "Residual Stream Analysis",
                    "Springer Proceedings"
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11.5px] font-mono bg-[#13141C] text-zinc-300 border border-[#21232E]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
