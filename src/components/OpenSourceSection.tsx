import React, { useState } from 'react';
import { 
  GitPullRequest, 
  GitBranch, 
  Star, 
  ExternalLink
} from 'lucide-react';

interface PRItem {
  id: string;
  prNumber?: string;
  prUrl?: string;
  issueNumber?: string;
  issueUrl?: string;
  forkBranch?: string;
  forkUrl?: string;
  title: string;
  statusNote: string;
  isReadyFork?: boolean;
  description: string;
  talkTrack: string;
  stats: string;
  tags: string[];
}

interface ProjectTab {
  id: string;
  name: string;
  repoUrl: string;
  stars?: string;
  prs: PRItem[];
}

const projectTabs: ProjectTab[] = [
  {
    id: 'litellm',
    name: 'LiteLLM',
    repoUrl: 'https://github.com/BerriAI/litellm',
    stars: '62k',
    prs: [
      {
        id: 'litellm-redis',
        prNumber: '#48403',
        prUrl: 'https://github.com/BerriAI/litellm/pull/48403',
        issueNumber: '#48376',
        issueUrl: 'https://github.com/BerriAI/litellm/issues/48376',
        title: 'Redis Circuit Breaker Idle Recovery via Background Prober',
        statusNote: 'Open in Review',
        description: 'Tripped Redis circuit breakers stayed frozen indefinitely on idle instances because recovery only checked on active requests. Added a background daemon thread that tests Redis health every 5s with raw PINGs to autonomously close healthy breakers.',
        talkTrack: 'I fixed a LiteLLM circuit breaker that could never recover on an idle service by adding a safe background prober to test Redis and reopen traffic.',
        stats: '+142 lines · 5 tests pass',
        tags: ['Python', 'Redis', 'Concurrency', 'Resilience']
      },
      {
        id: 'litellm-ollama',
        prNumber: '#48402',
        prUrl: 'https://github.com/BerriAI/litellm/pull/48402',
        issueNumber: '#48388',
        issueUrl: 'https://github.com/BerriAI/litellm/issues/48388',
        title: 'Error Diagnostics for Non-JSON Proxy Responses in Ollama Embeddings',
        statusNote: 'Open in Review',
        description: 'Fixed unhandled JSONDecodeError crashes when reverse proxies returned HTML error pages. Implemented guarded parsing across sync and async embedding paths that raises OllamaError with status code and body snippet.',
        talkTrack: 'In LiteLLM I fixed Ollama embeddings dying on opaque JSON errors when a proxy returns an HTML page, surfacing the real HTTP status and payload.',
        stats: '+80 lines · 2 regression tests',
        tags: ['Python', 'Embeddings', 'AsyncIO', 'Reverse Proxy']
      },
      {
        id: 'litellm-azure',
        prNumber: '#48404',
        prUrl: 'https://github.com/BerriAI/litellm/pull/48404',
        issueNumber: '#48387',
        issueUrl: 'https://github.com/BerriAI/litellm/issues/48387',
        title: 'Model-Accurate Pricing for Azure Speech Fast Transcription',
        statusNote: 'Open in Review',
        description: 'Fast-transcription calls were priced at a flat rate regardless of the actual model executed. Added enhancedMode model extraction and verified official rates ($0.54/hr for MAI-Transcribe-2) from Microsoft Azure Retail Prices API.',
        talkTrack: 'I made LiteLLM price Azure Speech transcription by the model that actually ran, sourcing verified rates directly from Microsoft\'s Retail Prices API.',
        stats: '+201 lines · 6 tests pass',
        tags: ['Python', 'Azure Speech', 'Pricing API', 'Telemetry']
      }
    ]
  },
  {
    id: 'haystack',
    name: 'Haystack',
    repoUrl: 'https://github.com/deepset-ai/haystack',
    stars: '27k',
    prs: [
      {
        id: 'haystack-diagnostics',
        prNumber: '#13440',
        prUrl: 'https://github.com/deepset-ai/haystack/pull/13440',
        issueNumber: '#13418',
        issueUrl: 'https://github.com/deepset-ai/haystack/issues/13418',
        title: 'Per-Query Missing-Document Diagnostics in DocumentRecallEvaluator',
        statusNote: 'Open in Review',
        description: 'Replaced a blunt aggregate recall score with granular per-query diagnostics. With include_diagnostics=True, developers get exact missing ground-truth documents and coverage metrics to debug RAG retrieval failures.',
        talkTrack: 'I added per-query diagnostics to Haystack\'s recall evaluator. Before this, you only got an aggregate number, but now you see exactly which documents each query missed.',
        stats: '+232 lines · 56 tests pass (11 new)',
        tags: ['Python', 'RAG Evaluation', 'Search & Retrieval', 'Pytest']
      }
    ]
  },
  {
    id: 'hf',
    name: 'Sentence-Transformers',
    repoUrl: 'https://github.com/huggingface/sentence-transformers',
    stars: '19k',
    prs: [
      {
        id: 'hf-sentence-transformers',
        prNumber: '#4276',
        prUrl: 'https://github.com/huggingface/sentence-transformers/pull/4276',
        issueNumber: '#3923',
        issueUrl: 'https://github.com/huggingface/sentence-transformers/issues/3923',
        title: 'Production Guide: Cold Starts & Air-Gapped Offline Model Loading',
        statusNote: 'Open in Review',
        description: 'Authored complete deployment documentation covering containerized embedding startup bottlenecks: weight pre-baking into container images, local_files_only=True, HF_HUB_OFFLINE=1, and Kubernetes readiness warmup probes.',
        talkTrack: 'For Hugging Face, I wrote deployment guidance on cold starts and offline model loading to solve latency when serving embeddings.',
        stats: '+173 lines · Docs & code verified',
        tags: ['Hugging Face', 'Embeddings', 'Production ML', 'Docker']
      }
    ]
  },
  {
    id: 'pandas',
    name: 'pandas',
    repoUrl: 'https://github.com/pandas-dev/pandas',
    prs: [
      {
        id: 'pandas-doclinks',
        prNumber: '#71721',
        prUrl: 'https://github.com/pandas-dev/pandas/pull/71721',
        issueNumber: '#70086',
        issueUrl: 'https://github.com/pandas-dev/pandas/issues/70086',
        title: 'Core Codebase Documentation & Source Citation Link Remediation',
        statusNote: 'Open in Review',
        description: 'Claimed assigned issue (/take) and audited dead documentation links across core Python/Cython source files. Replaced retired MSDN anchors and paper citations with verified modern docs and Wayback Machine archives.',
        talkTrack: 'I claimed an official pandas issue, verified every replacement link live, and fixed dead URLs across active Python and Cython source files.',
        stats: '6 files updated · Tooling verified',
        tags: ['Python', 'Cython', 'pandas', 'Documentation']
      }
    ]
  },
  {
    id: 'forks',
    name: 'LangChain & MLflow',
    repoUrl: 'https://github.com/anilkumara9',
    stars: '166k combined',
    prs: [
      {
        id: 'langchain-vectorstore',
        forkBranch: 'fix-inmemory-relevance-40502',
        forkUrl: 'https://github.com/anilkumara9/langchain/tree/fix-inmemory-relevance-40502',
        issueNumber: '#40502',
        issueUrl: 'https://github.com/langchain-ai/langchain/issues/40502',
        title: 'InMemoryVectorStore Relevance Score Normalization',
        statusNote: 'Ready on Fork',
        isReadyFork: true,
        description: 'Resolved NotImplementedError on similarity_search_with_relevance_scores by properly rescaling cosine similarity from [-1, 1] into [0, 1] range. Followed contributor guidelines for issue assignment prior to opening PR.',
        talkTrack: 'Implemented relevance scores for LangChain\'s InMemoryVectorStore with proper cosine normalization and verified 37 tests pass.',
        stats: '+54 lines · 37 tests pass',
        tags: ['Python', 'LangChain (148k★)', 'Vector Stores', 'Cosine Similarity']
      },
      {
        id: 'mlflow-url-sync',
        forkBranch: 'feat-mlflow-search-url-14841',
        forkUrl: 'https://github.com/anilkumara9/mlflow/tree/feat-mlflow-search-url-14841',
        issueNumber: '#14841',
        issueUrl: 'https://github.com/mlflow/mlflow/issues/14841',
        title: 'Bidirectional URL Sync for UI Search Experiments Filter',
        statusNote: 'Ready on Fork',
        isReadyFork: true,
        description: 'Fixed React UI filter desync where shared or bookmarked experiment filters were wiped by empty uncontrolled search inputs. Synchronized state with URL params via established React effect patterns.',
        talkTrack: 'Fixed an MLflow UI bug that cleared bookmarked search filters, cleanly syncing input state with URL query parameters.',
        stats: '+58 lines · 2 Jest tests',
        tags: ['TypeScript', 'React', 'MLflow (18k★)', 'UI State']
      }
    ]
  }
];

export const OpenSourceSection: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState<string>('litellm');

  const activeProject = projectTabs.find(p => p.id === selectedTabId) || projectTabs[0];

  return (
    <section id="opensource" className="space-y-4 scroll-mt-24 w-full">
      {/* Clean Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-1">
        <h2 className="font-shantell text-2xl sm:text-3xl font-[800] text-[#111111]">
          Open-Source <span className="text-[#FECE12] underline decoration-[#FECE12] decoration-wavy decoration-3 underline-offset-4">Contributions</span>
        </h2>
        <span className="text-[12.5px] font-mono text-[#6A6253]">
          Active PRs across tier-1 AI &amp; Python libraries
        </span>
      </div>

      {/* Tactile Segmented Tab Bar Dock - Snug fit, no stretched buttons, no right gap */}
      <div className="flex">
        <div className="w-fit inline-flex items-center gap-1.5 p-1.5 bg-white/90 backdrop-blur-md rounded-full border border-[#DBD8D0] shadow-[0_4px_12px_-2px_rgba(80,70,55,0.1),inset_0_1.5px_2px_#fff] overflow-x-auto no-scrollbar max-w-full">
          {projectTabs.map((tab) => {
            const isSelected = selectedTabId === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTabId(tab.id)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all cursor-pointer font-[700] text-[12px] sm:text-[12.5px] flex items-center gap-2 whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#22201D] to-[#11100E] text-[#FAF8F4] shadow-[0_3px_8px_-1px_rgba(0,0,0,0.35),inset_0_1px_1.5px_rgba(255,255,255,0.25)]'
                    : 'text-[#45433D] hover:text-[#111111] hover:bg-[#F3EFE6]'
                }`}
              >
                <span>{tab.name}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                  isSelected ? 'bg-white/20 text-[#FAF7EF]' : 'bg-[#EFECE4] text-[#6A6253]'
                }`}>
                  {tab.prs.length} {tab.prs.length === 1 ? 'PR' : 'PRs'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Project PR Cards */}
      <div className={`grid gap-4 ${
        activeProject.prs.length === 1 
          ? 'grid-cols-1' 
          : activeProject.prs.length === 2 
            ? 'grid-cols-1 lg:grid-cols-2' 
            : 'grid-cols-1 lg:grid-cols-3'
      }`}>
        {activeProject.prs.map((pr) => (
          <div
            key={pr.id}
            className="card-yashb p-5 flex flex-col justify-between space-y-3.5 border border-[#DBD8D0]/80"
          >
            <div className="space-y-2.5">
              {/* Header: PR/Branch + Status Badge */}
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] font-[800] bg-[#FECE12] text-[#111111] px-2.5 py-0.5 rounded-full shadow-2xs">
                  {pr.prNumber ? `PR ${pr.prNumber}` : 'Fork Branch'}
                </span>

                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10.5px] font-mono font-[700] bg-[#D1FAE5] text-[#065F46] border border-[#A7F3D0]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span>{pr.statusNote}</span>
                </span>
              </div>

              {/* Title */}
              <h3 className="font-shantell text-[15.5px] font-[800] text-[#111111] leading-snug">
                {pr.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-[12.5px] text-[#45433D] leading-relaxed">
                {pr.description}
              </p>

              {/* Interview Talk Track */}
              <div className="p-2.5 rounded-[10px] bg-[#FAF8F4] border border-[#DBD8D0] text-[12px] italic text-[#111111]">
                "{pr.talkTrack}"
              </div>

              {/* Metrics & Tags */}
              <div className="flex flex-wrap items-center justify-between gap-1.5 pt-1 text-[11px] font-mono text-[#6A6253]">
                <span className="font-[700] text-[#111111]">{pr.stats}</span>
                <div className="flex flex-wrap gap-1">
                  {pr.tags.slice(0, 2).map(t => (
                    <span key={t} className="tag-yashb text-[10px] py-0.5 px-1.5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions: View PR / Branch + Issue */}
            <div className="pt-2.5 border-t border-[#DBD8D0]/60 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {pr.prUrl ? (
                  <a
                    href={pr.prUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-[11.5px] h-7.5 px-3 inline-flex items-center gap-1.5"
                  >
                    <GitPullRequest className="h-3 w-3 text-[#FAF7EF]" />
                    <span>View PR</span>
                    <ExternalLink className="h-2.5 w-2.5 opacity-75" />
                  </a>
                ) : pr.forkUrl ? (
                  <a
                    href={pr.forkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-[11.5px] h-7.5 px-3 inline-flex items-center gap-1.5"
                  >
                    <GitBranch className="h-3 w-3 text-[#FAF7EF]" />
                    <span>View Branch</span>
                    <ExternalLink className="h-2.5 w-2.5 opacity-75" />
                  </a>
                ) : null}

                {pr.issueUrl && (
                  <a
                    href={pr.issueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-[11px] h-7.5 px-2.5 inline-flex items-center gap-1"
                  >
                    <span>Issue {pr.issueNumber}</span>
                  </a>
                )}
              </div>

              <a
                href={activeProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono text-[#6A6253] hover:text-[#111111] inline-flex items-center gap-1"
              >
                <span>Repo</span>
                <ExternalLink className="h-2.5 w-2.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpenSourceSection;
