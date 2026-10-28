import React, { useState, useEffect } from 'react';
import { ArrowUpRight, X, GitPullRequest, GitBranch, ExternalLink, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export interface OpenSourcePR {
  id: string;
  repoName: string;
  repoStars: string;
  repoUrl: string;
  prNumber?: string;
  prUrl?: string;
  forkUrl?: string;
  issueNumber?: string;
  issueUrl?: string;
  title: string;
  statusNote: string;
  stats: string;
  problem: string;
  engineeredFix: string;
  talkTrack: string;
  outcomes?: string[];
  tags: string[];
}

export interface OpenSourceRepoGroup {
  id: string;
  name: string;
  stars: string;
  repoUrl: string;
  pullsUrl?: string;
  badge?: string;
  description: string;
  prs: OpenSourcePR[];
}

export const OPEN_SOURCE_GROUPS: OpenSourceRepoGroup[] = [
  {
    id: 'deepmind-hope',
    name: 'Google DeepMind: HOPE',
    stars: 'DeepMind Official',
    badge: 'First 15 PRs in Repo History',
    repoUrl: 'https://github.com/google-deepmind/hope',
    pullsUrl: 'https://github.com/google-deepmind/hope/pulls',
    description: 'Audited the full HOPE (Hilbert Operator for Progressive Encoding) and DEFT codebase end to end within two days of public release. Opened PRs #1 through #15—the first 15 pull requests in the repository\'s history—fixing 18 proven defects, adding 90+ tests, pure-NumPy examples, and GitHub Actions CI (Google CLA signed).',
    prs: [
      {
        id: 'hope-pr-1',
        repoName: 'Google DeepMind: HOPE',
        repoStars: 'DeepMind',
        repoUrl: 'https://github.com/google-deepmind/hope',
        prNumber: '#1',
        prUrl: 'https://github.com/google-deepmind/hope/pull/1',
        title: 'Merge Cache Statistics Scale Factor Bug Proved Against sqrt(R_F)',
        statusNote: 'Open in Review (Google CLA Signed)',
        stats: 'Scale factor fix · Proved against sqrt(R_F)',
        problem: 'Found a mathematical scale factor bug in the merge cache statistics. Merges of near-duplicate neurons were scored with systematically inflated distortion values due to an omitted square-root normalization factor on the feature dimension R_F.',
        engineeredFix: 'Proved the mathematical error exactly against the missing sqrt(R_F) scaling factor in the Hilbert operator derivation. Corrected the distortion evaluation metric so near-duplicate neurons are accurately prioritized for merging without distortion inflation.',
        talkTrack: 'I found and fixed a scale factor bug in DeepMind HOPE\'s merge cache, proving the error against the missing sqrt(R_F) factor so near-duplicate neuron merges aren\'t distorted.',
        outcomes: [
          'Proved the mathematical error analytically against the Hilbert operator derivation',
          'Eliminated distortion score inflation across all neuron merge candidate evaluations',
          'First pull request (#1) in Google DeepMind HOPE repository history'
        ],
        tags: ['Google DeepMind', 'Python', 'Hilbert Operators', 'Mathematical Proof', 'Model Compression']
      },
      {
        id: 'hope-pr-3',
        repoName: 'Google DeepMind: HOPE',
        repoStars: 'DeepMind',
        repoUrl: 'https://github.com/google-deepmind/hope',
        prNumber: '#3',
        prUrl: 'https://github.com/google-deepmind/hope/pull/3',
        title: 'Eliminated Weight Resurrection Bug Raising Mid-Compression Density',
        statusNote: 'Open in Review (Google CLA Signed)',
        stats: '610 fuzz runs · Density regression fix',
        problem: 'Discovered a silent correctness bug via automated property-based fuzzing across 610 random network encodings: neuron merge operations were inadvertently restoring weights that earlier pruning steps had already eliminated, raising model density mid-compression.',
        engineeredFix: 'Enforced strict sparsity mask preservation across intermediate neuron merge operations. Created regression test fixtures asserting monotonic density reduction throughout the progressive encoding lifecycle.',
        talkTrack: 'Through property-based fuzzing across 610 random network encodes, I discovered merges were resurrecting pruned weights mid-compression, and enforced strict sparsity mask invariance.',
        outcomes: [
          'Discovered via automated property-based fuzzing across 610 random network encodes',
          'Guaranteed strictly monotonic weight density reduction during multi-stage pruning',
          'Prevented silent parameter count blow-ups in compressed deployment artifacts'
        ],
        tags: ['Google DeepMind', 'Property Fuzzing', 'Sparsity Mask', 'Neural Pruning', 'Verification']
      },
      {
        id: 'hope-pr-5',
        repoName: 'Google DeepMind: HOPE',
        repoStars: 'DeepMind',
        repoUrl: 'https://github.com/google-deepmind/hope',
        prNumber: '#5',
        prUrl: 'https://github.com/google-deepmind/hope/pull/5',
        title: 'Fisher Information Estimator Trailing Batch Retention',
        statusNote: 'Open in Review (Google CLA Signed)',
        stats: 'Curvature estimation fix · Empirical Fisher',
        problem: 'The empirical Fisher information matrix estimator silently dropped the trailing partial batch of evaluation samples when dataset size was not evenly divisible by batch size, skewing parameter importance ranking.',
        engineeredFix: 'Refactored batch iteration to compute weighted running gradient outer-products across all residual samples, ensuring 100% sample coverage and unbiased empirical Fisher curvature estimation.',
        talkTrack: 'Fixed a silent defect in HOPE\'s Fisher information estimator that dropped trailing partial batches, restoring unbiased curvature computation across uneven sample sets.',
        outcomes: [
          'Eliminated silent data loss on datasets with uneven batch multiples',
          'Guaranteed mathematically unbiased parameter curvature estimation',
          'Added unit assertions verifying trailing batch gradient contribution'
        ],
        tags: ['Google DeepMind', 'Empirical Fisher', 'Curvature Estimation', 'PyTorch', 'Numerical Precision']
      },
      {
        id: 'hope-pr-4',
        repoName: 'Google DeepMind: HOPE',
        repoStars: 'DeepMind',
        repoUrl: 'https://github.com/google-deepmind/hope',
        prNumber: '#4',
        prUrl: 'https://github.com/google-deepmind/hope/pull/4',
        title: 'Guarded Loss of Batch Normalization Filters at Zero Scale',
        statusNote: 'Open in Review (Google CLA Signed)',
        stats: 'Zero scale guard · Layer stability',
        problem: 'When neural network layers reached zero scale during progressive pruning, downstream batch normalization transformations suffered division-by-zero or collapsed entire filter channels unexpectedly.',
        engineeredFix: 'Introduced adaptive epsilon safeguards and zero-scale bypass logic within batch normalization folding passes, maintaining structural graph integrity even under extreme sparse compression.',
        talkTrack: 'Added zero-scale guards to batch normalization folding in HOPE to prevent division-by-zero crashes when layers are aggressively pruned.',
        outcomes: [
          'Prevents graph collapse on aggressively pruned zero-scale layers',
          'Hardened numerical stability across batch norm folding transformations'
        ],
        tags: ['Google DeepMind', 'BatchNorm', 'Numerical Guards', 'Graph Transformations']
      },
      {
        id: 'hope-pr-7',
        repoName: 'Google DeepMind: HOPE',
        repoStars: 'DeepMind',
        repoUrl: 'https://github.com/google-deepmind/hope',
        prNumber: '#7',
        prUrl: 'https://github.com/google-deepmind/hope/pull/7',
        title: 'Baselines Crash Fix on Mixed Conv and Dense Networks',
        statusNote: 'Open in Review (Google CLA Signed)',
        stats: 'Heterogeneous shape handling · Multi-arch',
        problem: 'Benchmark compression baselines crashed with tensor dimension mismatches whenever executed against architectures combining both 2D convolutional and linear dense layers (e.g. standard classification heads).',
        engineeredFix: 'Standardized spatial dimension flattening and dynamic tensor rank unwrapping across baseline evaluation wrappers, enabling seamless execution across mixed Conv/Dense architectures.',
        talkTrack: 'Fixed baseline benchmark crashes on heterogeneous networks combining Convolutional and Dense layers with robust tensor unwrapping.',
        outcomes: [
          'Enables unified benchmarking across CNNs, MLPs, and hybrid architectures',
          'Eliminated dimensional assertion crashes during comparative baseline runs'
        ],
        tags: ['Google DeepMind', 'CNN', 'Dense Layers', 'Tensor Dimensionality', 'Benchmarking']
      },
      {
        id: 'hope-pr-10',
        repoName: 'Google DeepMind: HOPE',
        repoStars: 'DeepMind',
        repoUrl: 'https://github.com/google-deepmind/hope',
        prNumber: '#10',
        prUrl: 'https://github.com/google-deepmind/hope/pull/10',
        title: 'Comprehensive Test Suite: 90+ Unit & Regression Tests',
        statusNote: 'Open in Review (Google CLA Signed)',
        stats: '+90 unit & regression tests · 100% pass',
        problem: 'The newly open-sourced codebase lacked automated regression tests for mathematical edge cases, pruning invariance, and layer mergers, making refactoring or external contributions error-prone.',
        engineeredFix: 'Authored and contributed an extensive test suite with over 90 regression and unit tests covering forward passes, numerical stability, pruning checks, and corner-case matrix operations.',
        talkTrack: 'Contributed 90+ comprehensive unit and regression tests to DeepMind HOPE covering forward passes, pruning invariance, and numerical edge cases.',
        outcomes: [
          'Added 90+ comprehensive pytest test cases across the entire codebase',
          'Established automated safety guardrails against mathematical regressions'
        ],
        tags: ['Google DeepMind', 'Pytest', 'Test Architecture', 'Regression Testing', 'CI/CD']
      },
      {
        id: 'hope-pr-14',
        repoName: 'Google DeepMind: HOPE',
        repoStars: 'DeepMind',
        repoUrl: 'https://github.com/google-deepmind/hope',
        prNumber: '#14',
        prUrl: 'https://github.com/google-deepmind/hope/pull/14',
        title: 'Standalone Pure-NumPy Runnable Execution Example',
        statusNote: 'Open in Review (Google CLA Signed)',
        stats: 'Runnable example under examples/ · Pure NumPy',
        problem: 'External researchers had no lightweight, self-contained reference demonstration to test HOPE progressive encoding without configuring complex dependencies or datasets.',
        engineeredFix: 'Created a standalone, turn-key runnable demonstration under examples/ utilizing only pure NumPy, showing end-to-end Hilbert progressive encoding from scratch.',
        talkTrack: 'Built a standalone pure-NumPy demonstration under examples/ so researchers can run HOPE progressive encoding with zero setup friction.',
        outcomes: [
          'Zero-dependency standalone entry point for research reproduction',
          'Clear pedagogical walkthrough of Hilbert progressive operator encoding'
        ],
        tags: ['Google DeepMind', 'NumPy', 'Research Reproduction', 'Documentation']
      },
      {
        id: 'hope-pr-15',
        repoName: 'Google DeepMind: HOPE',
        repoStars: 'DeepMind',
        repoUrl: 'https://github.com/google-deepmind/hope',
        prNumber: '#15',
        prUrl: 'https://github.com/google-deepmind/hope/pull/15',
        title: 'Automated GitHub Actions CI Pipeline for Testing and Linting',
        statusNote: 'Open in Review (Google CLA Signed)',
        stats: 'GitHub Actions workflow · Automated CI',
        problem: 'The official repository was published without continuous integration automation, allowing silent code rot, dependency drift, and broken builds on upstream commits.',
        engineeredFix: 'Designed and contributed a full GitHub Actions CI matrix running automated test suites, type checking, and style linters across multiple Python versions on pull requests and pushes.',
        talkTrack: 'Added a GitHub Actions CI matrix to Google DeepMind HOPE for a repository that had zero CI automation at launch.',
        outcomes: [
          'Established first automated CI/CD pipeline in repository history',
          'Multi-version Python matrix verification on every pull request'
        ],
        tags: ['Google DeepMind', 'GitHub Actions', 'CI/CD', 'Workflow Automation']
      },
      {
        id: 'hope-pr-2',
        repoName: 'Google DeepMind: HOPE',
        repoStars: 'DeepMind',
        repoUrl: 'https://github.com/google-deepmind/hope',
        prNumber: '#2',
        prUrl: 'https://github.com/google-deepmind/hope/pull/2',
        title: 'Core Algorithm Tensor Pipeline Refinements',
        statusNote: 'Open in Review (Google CLA Signed)',
        stats: 'Core pipeline cleanup · Numerical stability',
        problem: 'Intermediate tensor allocations in core Hilbert operator passes caused unnecessary memory footprint during deep progressive encoding steps.',
        engineeredFix: 'Streamlined in-place tensor operations and optimized tensor buffer reuse throughout the progressive encoding loop.',
        talkTrack: 'Refactored core tensor operations to reduce memory overhead and improve numerical stability in progressive encoding loops.',
        outcomes: ['Reduced peak memory footprint during deep progressive passes'],
        tags: ['Google DeepMind', 'Optimization', 'Tensor Pipeline']
      },
      {
        id: 'hope-pr-6',
        repoName: 'Google DeepMind: HOPE',
        repoStars: 'DeepMind',
        repoUrl: 'https://github.com/google-deepmind/hope',
        prNumber: '#6',
        prUrl: 'https://github.com/google-deepmind/hope/pull/6',
        title: 'Pre-Sweep Execution Flags and Config Validation',
        statusNote: 'Open in Review (Google CLA Signed)',
        stats: 'CLI flag parsing · Configuration schema',
        problem: 'Command-line execution scripts crashed ambiguously when pre-sweep flags were omitted or partially specified.',
        engineeredFix: 'Added robust argument defaults and schema validation for hyperparameter sweep flags with informative error messaging.',
        talkTrack: 'Added strict schema validation and sensible defaults for CLI pre-sweep flags.',
        outcomes: ['Prevents ambiguous runtime crashes on missing experiment flags'],
        tags: ['Google DeepMind', 'CLI', 'Config Validation']
      },
      {
        id: 'hope-pr-8',
        repoName: 'Google DeepMind: HOPE',
        repoStars: 'DeepMind',
        repoUrl: 'https://github.com/google-deepmind/hope',
        prNumber: '#8',
        prUrl: 'https://github.com/google-deepmind/hope/pull/8',
        title: 'Plot Generation Hardening and Headless Rendering Guards',
        statusNote: 'Open in Review (Google CLA Signed)',
        stats: 'Matplotlib backend fix · Headless servers',
        problem: 'Evaluation scripts attempting to render distortion curves threw GUI backend exceptions when run on headless cloud VM instances.',
        engineeredFix: 'Forced non-interactive Agg Matplotlib backends prior to importing pyplot in headless environments.',
        talkTrack: 'Hardened plot generation scripts to execute reliably on headless compute servers without GUI display errors.',
        outcomes: ['Enables headless figure generation in cloud training clusters'],
        tags: ['Google DeepMind', 'Visualization', 'Cloud Compute']
      },
      {
        id: 'hope-pr-9',
        repoName: 'Google DeepMind: HOPE',
        repoStars: 'DeepMind',
        repoUrl: 'https://github.com/google-deepmind/hope',
        prNumber: '#9',
        prUrl: 'https://github.com/google-deepmind/hope/pull/9',
        title: 'Corrupt Cache Error Diagnostics and Safe Recovery',
        statusNote: 'Open in Review (Google CLA Signed)',
        stats: 'Cache validation · Diagnostic recovery',
        problem: 'Corrupted disk cache artifacts from interrupted runs caused uninformative unpickling crashes on subsequent script executions.',
        engineeredFix: 'Added checksum integrity verification and automatic corrupt cache invalidation with user diagnostic warnings.',
        talkTrack: 'Implemented safe recovery and diagnostics for corrupted disk cache files to prevent crash loops.',
        outcomes: ['Automatic invalidation and recovery for corrupted disk artifacts'],
        tags: ['Google DeepMind', 'Caching', 'Error Handling']
      },
      {
        id: 'hope-pr-11',
        repoName: 'Google DeepMind: HOPE',
        repoStars: 'DeepMind',
        repoUrl: 'https://github.com/google-deepmind/hope',
        prNumber: '#11',
        prUrl: 'https://github.com/google-deepmind/hope/pull/11',
        title: 'DEFT Dictionary Schema Parsing and CLI Argument Hardening',
        statusNote: 'Open in Review (Google CLA Signed)',
        stats: 'DEFT dictionary parser · Schema hardening',
        problem: 'DEFT compression dictionary definitions failed silently on custom layer name mappings.',
        engineeredFix: 'Added robust dictionary key normalization and comprehensive CLI argument parsing for DEFT compression models.',
        talkTrack: 'Hardened DEFT dictionary parsing and argument handling for arbitrary network architectures.',
        outcomes: ['Reliable dictionary parsing across non-standard layer naming conventions'],
        tags: ['Google DeepMind', 'DEFT', 'Schema Parsing']
      },
      {
        id: 'hope-pr-12',
        repoName: 'Google DeepMind: HOPE',
        repoStars: 'DeepMind',
        repoUrl: 'https://github.com/google-deepmind/hope',
        prNumber: '#12',
        prUrl: 'https://github.com/google-deepmind/hope/pull/12',
        title: 'Decoder Exception Handling and Missing Key Recovery',
        statusNote: 'Open in Review (Google CLA Signed)',
        stats: 'Decoder resilience · Exception handling',
        problem: 'HOPE decoders crashed ungracefully when decoding representations with optional metadata fields omitted.',
        engineeredFix: 'Added graceful fallback key retrieval and typed validation across progressive decoding stages.',
        talkTrack: 'Added graceful exception handling and missing key recovery to HOPE decoders.',
        outcomes: ['Backwards-compatible decoding across sparse representation formats'],
        tags: ['Google DeepMind', 'Decoder', 'Resilience']
      },
      {
        id: 'hope-pr-13',
        repoName: 'Google DeepMind: HOPE',
        repoStars: 'DeepMind',
        repoUrl: 'https://github.com/google-deepmind/hope',
        prNumber: '#13',
        prUrl: 'https://github.com/google-deepmind/hope/pull/13',
        title: 'Atomic File Output Serialization Preventing Partial Writes',
        statusNote: 'Open in Review (Google CLA Signed)',
        stats: 'Atomic serialization · Disk safety',
        problem: 'Interrupted encoding jobs left truncated checkpoint files on disk that poisoned subsequent resume operations.',
        engineeredFix: 'Implemented atomic file serialization writing to temporary staging files before renaming upon verified completion.',
        talkTrack: 'Implemented atomic checkpoint writing to eliminate truncated output files during job preemptions.',
        outcomes: ['Zero corrupted files on preempted or killed encoding jobs'],
        tags: ['Google DeepMind', 'IO Resilience', 'Checkpointing']
      }
    ]
  },
  {
    id: 'litellm',
    name: 'LiteLLM',
    stars: '62k',
    repoUrl: 'https://github.com/BerriAI/litellm',
    description: 'High-throughput LLM gateway, load balancer, and routing engine',
    prs: [
      {
        id: 'litellm-redis',
        repoName: 'LiteLLM',
        repoStars: '62k',
        repoUrl: 'https://github.com/BerriAI/litellm',
        prNumber: '#48403',
        prUrl: 'https://github.com/BerriAI/litellm/pull/48403',
        issueNumber: '#48376',
        issueUrl: 'https://github.com/BerriAI/litellm/issues/48376',
        title: 'Redis Circuit Breaker Idle Recovery via Background Prober',
        statusNote: 'Open in Review',
        stats: '+142 lines · 5 tests pass',
        problem: 'Tripped Redis circuit breakers remained frozen open indefinitely on idle or low-traffic instances because the circuit recovery mechanism only executed health checks when incoming requests arrived. If traffic halted during a downstream outage, the gateway remained locked out even after Redis fully restored.',
        engineeredFix: 'Architected an autonomous background daemon prober that runs every 5 seconds using lightweight Redis PING probes with exponential backoff. Once Redis health is verified without relying on user traffic, the daemon autonomously closes the circuit breaker and safely resumes gateway routing.',
        talkTrack: 'I resolved a LiteLLM circuit breaker deadlock where idle instances could never recover, adding a thread-safe background prober to verify Redis and re-open traffic.',
        outcomes: [
          'Eliminated indefinite freeze states on low-throughput and cold-start services',
          'Zero-overhead async daemon with isolated thread management and graceful termination',
          'Added 5 regression and concurrency unit tests verifying failover recovery'
        ],
        tags: ['Python', 'Redis', 'Concurrency', 'Circuit Breakers', 'Gateway Resilience']
      },
      {
        id: 'litellm-ollama',
        repoName: 'LiteLLM',
        repoStars: '62k',
        repoUrl: 'https://github.com/BerriAI/litellm',
        prNumber: '#48402',
        prUrl: 'https://github.com/BerriAI/litellm/pull/48402',
        issueNumber: '#48388',
        issueUrl: 'https://github.com/BerriAI/litellm/issues/48388',
        title: 'Error Diagnostics for Non-JSON Proxy Responses in Ollama Embeddings',
        statusNote: 'Open in Review',
        stats: '+80 lines · 2 regression tests',
        problem: 'When enterprise reverse proxies (Cloudflare, Nginx, ALB) fronting Ollama instances responded with HTML error pages (e.g., 502 Bad Gateway or 504 Gateway Timeout), LiteLLM crashed with unhandled JSONDecodeError exceptions that obscured the real underlying HTTP status code.',
        engineeredFix: 'Implemented defensive response parsing across both synchronous and asynchronous embedding pipelines. Inspects response headers and content-type, extracts raw HTTP status codes alongside truncated response payloads, and raises structured OllamaError diagnostics with root-cause context.',
        talkTrack: 'In LiteLLM, I eliminated opaque JSONDecodeError crashes when reverse proxies return HTML errors, surfacing the true HTTP status code and response snippet.',
        outcomes: [
          'Prevents unhandled pipeline crashes on transient edge proxy errors',
          'Surfaces human-readable diagnostic status codes directly to client applications',
          'Verified with 2 regression tests covering sync and async embedding paths'
        ],
        tags: ['Python', 'Ollama', 'Embeddings', 'Reverse Proxy', 'AsyncIO']
      },
      {
        id: 'litellm-azure',
        repoName: 'LiteLLM',
        repoStars: '62k',
        repoUrl: 'https://github.com/BerriAI/litellm',
        prNumber: '#48404',
        prUrl: 'https://github.com/BerriAI/litellm/pull/48404',
        issueNumber: '#48387',
        issueUrl: 'https://github.com/BerriAI/litellm/issues/48387',
        title: 'Model-Accurate Pricing for Azure Speech Fast Transcription',
        statusNote: 'Open in Review',
        stats: '+201 lines · 6 tests pass',
        problem: 'Fast-transcription requests dispatched through Azure Speech were billed by LiteLLM at an inaccurate flat rate, failing to differentiate between underlying acoustic models and leading to billing discrepancies across production audio pipelines.',
        engineeredFix: 'Engineered dynamic model-identifier extraction from request parameters (e.g., enhancedMode) and mapped verified pricing tiers directly from the official Microsoft Azure Retail Prices API ($0.54/hr for MAI-Transcribe-2).',
        talkTrack: 'I added model-accurate pricing for Azure Speech fast transcription in LiteLLM, calibrating rates from Microsoft Retail Prices API telemetry.',
        outcomes: [
          'Accurate granular billing across varied audio transcription models',
          'Sourced and hard-calibrated official rates directly from Azure pricing metadata',
          'Integrated 6 automated billing evaluation and parameter validation tests'
        ],
        tags: ['Python', 'Azure Speech', 'Pricing API', 'Telemetry', 'Audio AI']
      }
    ]
  },
  {
    id: 'haystack',
    name: 'Haystack',
    stars: '27k',
    repoUrl: 'https://github.com/deepset-ai/haystack',
    description: 'Modular enterprise framework for building production RAG and agent pipelines',
    prs: [
      {
        id: 'haystack-diagnostics',
        repoName: 'Haystack',
        repoStars: '27k',
        repoUrl: 'https://github.com/deepset-ai/haystack',
        prNumber: '#13440',
        prUrl: 'https://github.com/deepset-ai/haystack/pull/13440',
        issueNumber: '#13418',
        issueUrl: 'https://github.com/deepset-ai/haystack/issues/13418',
        title: 'Per-Query Missing-Document Diagnostics in DocumentRecallEvaluator',
        statusNote: 'Open in Review',
        stats: '+232 lines · 56 tests pass (11 new)',
        problem: 'Haystack\'s DocumentRecallEvaluator returned only a single global aggregate score for an entire benchmark. When retrieval recall degraded, developers had zero visibility into which specific queries failed or which ground-truth documents were dropped.',
        engineeredFix: 'Added optional per-query diagnostic telemetry with include_diagnostics=True. The evaluator returns granular evaluation artifacts detailing missing document identifiers, per-query rank scores, and retrieval coverage ratios for fine-grained failure analysis.',
        talkTrack: 'I added per-query diagnostics to Haystack\'s recall evaluator. Instead of just a single aggregate score, developers can now pinpoint exact missing documents for each query.',
        outcomes: [
          'Enables RAG engineers to pinpoint retriever blindspots and false negatives',
          'Maintained full backwards compatibility with legacy scalar return types',
          'Shipped 11 new Pytest test cases; verified all 56 evaluator tests pass'
        ],
        tags: ['Python', 'Haystack', 'RAG Evaluation', 'Search & Retrieval', 'Pytest']
      }
    ]
  },
  {
    id: 'pandas',
    name: 'pandas',
    stars: '45k',
    repoUrl: 'https://github.com/pandas-dev/pandas',
    description: 'The standard Python library for high-performance data manipulation and analysis',
    prs: [
      {
        id: 'pandas-doclinks',
        repoName: 'pandas',
        repoStars: '45k',
        repoUrl: 'https://github.com/pandas-dev/pandas',
        prNumber: '#71721',
        prUrl: 'https://github.com/pandas-dev/pandas/pull/71721',
        issueNumber: '#70086',
        issueUrl: 'https://github.com/pandas-dev/pandas/issues/70086',
        title: 'Core Documentation & Source Citation Link Remediation',
        statusNote: 'Open in Review',
        stats: '6 files updated · Tooling verified',
        problem: 'Dozens of academic references and foundational specifications linked across pandas\' core C/Cython algorithms and Python docstrings were broken due to retired domains and dead MSDN anchors.',
        engineeredFix: 'Claimed assigned issue (/take), audited broken links across core indexing and datetime engines, and replaced dead endpoints with authoritative modern documentation and permanent Wayback Machine archive records.',
        talkTrack: 'I claimed an assigned pandas issue, live-verified replacement references, and remediated dead links across active Python and Cython files.',
        outcomes: [
          'Restored foundational algorithm citations and developer documentation links',
          'Validated all changes through pandas Sphinx linkcheck CI test suite',
          'Maintained strict PEP 8 docstring style and contributor guidelines'
        ],
        tags: ['Python', 'Cython', 'pandas', 'Documentation', 'Sphinx']
      }
    ]
  },
  {
    id: 'langchain-mlflow',
    name: 'LangChain & MLflow',
    stars: '166k combined',
    repoUrl: 'https://github.com/anilkumara9',
    description: 'Industry-standard vector store runtimes and ML experiment tracking platforms',
    prs: [
      {
        id: 'langchain-vectorstore',
        repoName: 'LangChain',
        repoStars: '148k',
        repoUrl: 'https://github.com/langchain-ai/langchain',
        prNumber: '#40502',
        forkUrl: 'https://github.com/anilkumara9/langchain/tree/fix-inmemory-relevance-40502',
        issueNumber: '#40502',
        issueUrl: 'https://github.com/langchain-ai/langchain/issues/40502',
        title: 'InMemoryVectorStore Relevance Score Normalization',
        statusNote: 'Ready on Fork',
        stats: '+54 lines · 37 tests pass',
        problem: 'Calling similarity_search_with_relevance_scores on LangChain\'s InMemoryVectorStore raised an unhandled NotImplementedError, blocking developers from running thresholded retrieval evaluations in unit test suites and in-memory environments.',
        engineeredFix: 'Implemented cosine similarity normalization mapping raw dot products from the [-1, 1] interval into normalized [0, 1] relevance score space, matching standard vector store interfaces across LangChain.',
        talkTrack: 'Implemented normalized relevance scores for LangChain\'s InMemoryVectorStore, resolving NotImplementedError with verified test coverage.',
        outcomes: [
          'Permits score-thresholded semantic search on local in-memory vector stores',
          'Mathematically verified cosine rescaling preserving relative distance ranking',
          'Added comprehensive test suite verifying 37 unit tests'
        ],
        tags: ['Python', 'LangChain', 'Vector Stores', 'Cosine Similarity', 'RAG']
      },
      {
        id: 'mlflow-url-sync',
        repoName: 'MLflow',
        repoStars: '18k',
        repoUrl: 'https://github.com/mlflow/mlflow',
        prNumber: '#14841',
        forkUrl: 'https://github.com/anilkumara9/mlflow/tree/feat-mlflow-search-url-14841',
        issueNumber: '#14841',
        issueUrl: 'https://github.com/mlflow/mlflow/issues/14841',
        title: 'Bidirectional URL Sync for UI Search Experiments Filter',
        statusNote: 'Ready on Fork',
        stats: '+58 lines · 2 Jest tests',
        problem: 'When navigating shared or bookmarked MLflow tracking URLs with experiment search filters, clicking into the uncontrolled search bar wiped active query parameters and reset the experiment filter.',
        engineeredFix: 'Implemented bidirectional state synchronization between URL search parameters and the React experiment search bar using dedicated useEffect hooks and debounced history state updates.',
        talkTrack: 'Fixed an MLflow UI bug that wiped bookmarked experiment search filters, syncing input state with URL query parameters.',
        outcomes: [
          'Preserves search state when sharing experiment filter links across engineering teams',
          'Prevents redundant component re-renders via debounced parameter synchronization',
          'Verified with 2 Jest UI interaction test suites'
        ],
        tags: ['TypeScript', 'React', 'MLflow', 'UI State', 'Jest']
      }
    ]
  },
  {
    id: 'sentence-transformers',
    name: 'Sentence-Transformers',
    stars: '19k',
    repoUrl: 'https://github.com/huggingface/sentence-transformers',
    description: 'Hugging Face state-of-the-art framework for dense vector sentence & image embeddings',
    prs: [
      {
        id: 'hf-sentence-transformers',
        repoName: 'Sentence-Transformers',
        repoStars: '19k',
        repoUrl: 'https://github.com/huggingface/sentence-transformers',
        prNumber: '#4276',
        prUrl: 'https://github.com/huggingface/sentence-transformers/pull/4276',
        issueNumber: '#3923',
        issueUrl: 'https://github.com/huggingface/sentence-transformers/issues/3923',
        title: 'Production Guide: Cold Starts & Air-Gapped Offline Model Loading',
        statusNote: 'Open in Review',
        stats: '+173 lines · Docs & code verified',
        problem: 'Deploying sentence-transformer models in air-gapped or high-concurrency production Kubernetes clusters led to severe cold-start latency spikes or container crashloops when workers attempted remote HuggingFace Hub network calls.',
        engineeredFix: 'Authored complete production deployment guidance covering containerized embedding startup bottlenecks: weight pre-baking into container images, local_files_only=True, HF_HUB_OFFLINE=1, and Kubernetes readiness warmup probes.',
        talkTrack: 'For Hugging Face, I wrote deployment guidance on cold starts and offline model loading to solve latency when serving embeddings in production.',
        outcomes: [
          'Eliminates external hub network roundtrips during autoscale container spin-ups',
          'Provided copy-paste Kubernetes manifest templates and Dockerfile best practices',
          'Validated configuration patterns against latest sentence-transformers v3 runtime'
        ],
        tags: ['Hugging Face', 'Embeddings', 'Production ML', 'Docker', 'Kubernetes']
      }
    ]
  }
];

export default function AkoderOpenSource() {
  const [selectedPR, setSelectedPR] = useState<OpenSourcePR | null>(null);
  const [showAllDeepMind, setShowAllDeepMind] = useState<boolean>(false);
  // Initially only the first repository ('deepmind-hope') is open on mount/refresh
  const [openRepoId, setOpenRepoId] = useState<string | null>('deepmind-hope');

  const toggleRepo = (repoId: string) => {
    setOpenRepoId(prev => (prev === repoId ? null : repoId));
  };

  // Lock body scroll and listen for ESC key when PR modal is active
  useEffect(() => {
    if (!selectedPR) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPR(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedPR]);

  return (
    <section id="opensource" className="relative px-4 sm:px-8 py-10 sm:py-14 scroll-mt-20">
      {/* Clean Minimalist Section Title */}
      <div className="mb-4">
        <h2 className="text-[20px] sm:text-[22px] font-medium text-[#F4F4F5] tracking-tight">
          Tier-1 Open Source
        </h2>
      </div>

      {/* Outside Hand-drawn Note, Developer Workspace Character & Sketched Arrow on LEFT SIDE in gutter */}
      <div
        aria-hidden="true"
        className="absolute -left-36 sm:-left-48 md:-left-56 lg:-left-64 xl:-left-72 top-24 sm:top-32 md:top-40 lg:top-44 z-20 select-none hidden xl:flex flex-col items-end rotate-[-2deg] pointer-events-none"
      >
        {/* Workspace Cutout Sticker ABOVE */}
        <div
          onClick={() => {
            setOpenRepoId('deepmind-hope');
            const el = document.getElementById('opensource');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="cursor-pointer hover:scale-105 hover:rotate-0 transition-transform duration-300 pointer-events-auto mb-1.5"
          title="Open Source Developer Workspace"
        >
          <img
            src="/opensource-workspace.png"
            alt="Anil Open Source Developer Workspace"
            className="w-20 sm:w-26 md:w-30 lg:w-36 xl:w-40 h-auto object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.85)] rotate-[2deg]"
          />
        </div>

        {/* Handwritten text in Caveat script font */}
        <div className="font-['Caveat',_'Shantell_Sans',_cursive] text-[16px] sm:text-[19px] lg:text-[22px] text-zinc-100 leading-tight font-medium tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] text-right whitespace-nowrap">
          <div>23 Pull Requests ⚡</div>
          <div className="text-[14px] sm:text-[16px] lg:text-[18px] text-zinc-300 -mt-0.5">DeepMind, LiteLLM &amp; more!</div>
        </div>

        {/* Sketched Hand-drawn Curving Arrow pointing down-right across border into Open Source section */}
        <svg 
          width="44" 
          height="38" 
          viewBox="0 0 52 46" 
          fill="none" 
          className="text-zinc-300 drop-shadow-md mt-1 mr-1"
        >
          <path 
            d="M8 4 C14 18, 28 28, 46 34" 
            stroke="currentColor" 
            strokeWidth="2.4" 
            strokeLinecap="round" 
            fill="none" 
          />
          <path 
            d="M35 26 L46 34 L38 40" 
            stroke="currentColor" 
            strokeWidth="2.4" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </div>

      {/* Repo Groups with Collapsible Sub-Sections */}
      <div className="space-y-4">
        {OPEN_SOURCE_GROUPS.map((repo) => {
          const isDeepMind = repo.id === 'deepmind-hope';
          const isOpen = openRepoId === repo.id;
          const displayedPRs = isDeepMind && !showAllDeepMind ? repo.prs.slice(0, 6) : repo.prs;

          return (
            <div key={repo.id} className="relative transition-all">
              {/* Repo Header Bar - Click to Toggle Sub-Section */}
              <div
                onClick={() => toggleRepo(repo.id)}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-2 px-2.5 -mx-2.5 rounded-lg hover:bg-[#121216]/60 transition-colors cursor-pointer select-none"
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <img
                    src="/folder-sticker.png"
                    alt=""
                    className="w-5 h-5 object-contain select-none shrink-0"
                  />
                  <span className="font-serif italic text-[13.5px] text-zinc-300 bg-[#141417] px-2.5 py-0.5 rounded border border-[#222226] group-hover:border-zinc-500/50 transition-colors">
                    {repo.name}
                  </span>
                  {repo.badge ? (
                    <span className="font-mono text-[11px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      {repo.badge}
                    </span>
                  ) : (
                    <span className="font-mono text-[11px] text-zinc-400 bg-[#101014] px-2 py-0.5 rounded border border-[#1E1E24]">
                      ★ {repo.stars}
                    </span>
                  )}
                  <span className="font-mono text-[11px] text-zinc-500 group-hover:text-zinc-400 transition-colors">
                    ({repo.prs.length} {repo.prs.length === 1 ? 'PR' : 'PRs'})
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {repo.pullsUrl && (
                    <a
                      href={repo.pullsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[11.5px] font-mono text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 transition-colors"
                    >
                      <span>All 15 PRs</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <a
                    href={repo.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[11.5px] font-mono text-zinc-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Repo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <div className="w-5 h-5 rounded flex items-center justify-center text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Sub-Section Block Table with Hairline Dividers - Only Visible When Open */}
              {isOpen && (
                <div className="mt-2 animate-in fade-in duration-150">
                  <div className="divide-y divide-[#18181C] border-y border-[#18181C]">
                    {displayedPRs.map((pr) => (
                      <div
                        key={pr.id}
                        onClick={() => setSelectedPR(pr)}
                        className="group flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 py-3 px-2 sm:px-3 hover:bg-[#121216]/60 transition-colors cursor-pointer"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 min-w-0">
                          <span className="font-mono text-[11.5px] text-amber-400/90 group-hover:text-amber-300 shrink-0 sm:w-[70px]">
                            {pr.prNumber || 'Branch'}
                          </span>
                          <span className="font-medium text-[14.5px] text-[#F4F4F5] group-hover:text-white truncate sm:max-w-[420px] md:max-w-[490px]">
                            {pr.title}
                          </span>
                        </div>

                        <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-auto pt-1 sm:pt-0">
                          <span className="text-[10.5px] font-mono px-2 py-0.5 rounded bg-[#141418] text-zinc-400 border border-[#222227]">
                            {pr.statusNote}
                          </span>
                          <a
                            href={pr.prUrl || pr.forkUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-zinc-500 group-hover:text-zinc-200 p-0.5 transition-colors"
                            title={`View on GitHub`}
                          >
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* DeepMind Toggle to expand all 15 PRs */}
                  {isDeepMind && (
                    <div className="pt-2 px-1 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setShowAllDeepMind(!showAllDeepMind)}
                        className="text-[11.5px] font-mono text-zinc-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors cursor-pointer py-1"
                      >
                        {showAllDeepMind ? (
                          <>
                            <span>Show key PRs only</span>
                            <ChevronUp className="w-3.5 h-3.5" />
                          </>
                        ) : (
                          <>
                            <span>View all 15 DeepMind PRs (#1 through #15)</span>
                            <ChevronDown className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>

                      <a
                        href="https://github.com/google-deepmind/hope/pulls"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-mono text-zinc-500 hover:text-zinc-300 hidden sm:inline-flex items-center gap-1 transition-colors"
                      >
                        <span>github.com/google-deepmind/hope/pulls</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Editorial Block Line PR Case Study Modal */}
      {selectedPR && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedPR(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-[#090A0F] border border-[#1C1D25] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-zinc-100 animate-in zoom-in-95 duration-150"
          >
            {/* Header Block with Clean Block Lines */}
            <div className="p-6 sm:p-7 border-b border-[#1C1D25] bg-[#0E0F15] shrink-0">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/25">
                      {selectedPR.prNumber || 'Fork Branch'}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#15161E] text-zinc-300 border border-[#252735]">
                      {selectedPR.repoName}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#12131A] text-zinc-400 border border-[#20212C]">
                      {selectedPR.statusNote}
                    </span>
                  </div>
                  <h3 className="text-[19px] sm:text-[22px] font-serif font-medium text-white tracking-tight leading-snug pt-1">
                    {selectedPR.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedPR(null)}
                  aria-label="Close dialog"
                  className="size-8 rounded-full bg-[#181923] hover:bg-[#232431] border border-[#272835] flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer shrink-0"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-2 pt-3.5 mt-3 border-t border-[#1C1D25]/70">
                {selectedPR.prUrl && (
                  <a
                    href={selectedPR.prUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-mono bg-white text-black hover:bg-zinc-200 font-medium shadow-sm transition-all"
                  >
                    <GitPullRequest className="w-3.5 h-3.5" />
                    <span>View PR ({selectedPR.prNumber})</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                {selectedPR.forkUrl && (
                  <a
                    href={selectedPR.forkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-mono bg-white text-black hover:bg-zinc-200 font-medium shadow-sm transition-all"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>View Branch on GitHub</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                {selectedPR.issueUrl && (
                  <a
                    href={selectedPR.issueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-mono bg-[#15161E] hover:bg-[#1E202B] border border-[#252735] text-zinc-300 hover:text-white transition-all"
                  >
                    <span>Linked Issue ({selectedPR.issueNumber})</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
                {selectedPR.repoName.includes('DeepMind') && (
                  <a
                    href="https://github.com/google-deepmind/hope/pulls"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-mono bg-[#15161E] hover:bg-[#1E202B] border border-[#252735] text-amber-300 hover:text-amber-200 transition-all"
                  >
                    <span>All 15 DeepMind PRs</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>

            {/* Modal Body with Clean Block Line Sections */}
            <div className="overflow-y-auto divide-y divide-[#1C1D25] text-[13.5px]">
              {/* Meta Specs Grid with Crisp Hairline Block Lines */}
              <div className="grid grid-cols-2 sm:grid-cols-3 divide-x divide-y sm:divide-y-0 divide-[#1C1D25] bg-[#0B0C11]">
                <div className="p-4 sm:p-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">Repository</span>
                  <span className="font-mono text-[12px] text-zinc-200 font-medium block truncate">
                    {selectedPR.repoName}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">Code Impact</span>
                  <span className="font-mono text-[12px] text-amber-300 font-medium block truncate">
                    {selectedPR.stats}
                  </span>
                </div>
                <div className="p-4 sm:p-5 col-span-2 sm:col-span-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">Status</span>
                  <span className="font-mono text-[12px] text-emerald-400 font-medium block truncate">
                    {selectedPR.statusNote}
                  </span>
                </div>
              </div>

              {/* Problem & Root Cause Section */}
              <div className="p-6 sm:p-7 space-y-2.5">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-zinc-500 font-semibold block">
                  Problem &amp; Context
                </span>
                <p className="text-[14px] text-zinc-300 leading-relaxed font-sans">
                  {selectedPR.problem}
                </p>
              </div>

              {/* Engineered Fix & Technical Solution */}
              <div className="p-6 sm:p-7 space-y-3">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-zinc-500 font-semibold block">
                  Engineered Fix &amp; Implementation
                </span>
                <p className="text-[13.5px] text-zinc-300 leading-relaxed font-sans">
                  {selectedPR.engineeredFix}
                </p>

                {selectedPR.outcomes && selectedPR.outcomes.length > 0 && (
                  <div className="pt-2 space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 block">Verified Outcomes:</span>
                    <ul className="space-y-1.5 pl-0.5">
                      {selectedPR.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-[13px] text-zinc-400 leading-relaxed font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Interview / Engineering Talk Track */}
              {selectedPR.talkTrack && (
                <div className="p-6 sm:p-7 space-y-2">
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-zinc-500 font-semibold block">
                    Engineering Summary
                  </span>
                  <blockquote className="border-l-2 border-amber-400/60 pl-3.5 py-1 text-[13.5px] text-zinc-300 italic font-sans leading-relaxed">
                    "{selectedPR.talkTrack}"
                  </blockquote>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="p-6 sm:p-7 space-y-3">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-zinc-500 font-semibold block">
                  Technologies &amp; Disciplines
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedPR.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11.5px] font-mono bg-[#13141C] text-zinc-300 border border-[#21232E]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Block */}
            <div className="p-4 sm:p-5 border-t border-[#1C1D25] bg-[#0E0F15] flex items-center justify-between gap-3 shrink-0">
              <span className="font-mono text-[11px] text-zinc-500 hidden sm:inline">
                Press ESC or click outside to dismiss
              </span>
              <button
                type="button"
                onClick={() => setSelectedPR(null)}
                className="px-4 py-1.5 rounded-full bg-[#181923] hover:bg-[#232431] border border-[#272835] text-[12px] font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer ml-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
