import { ServiceItem, CaseStudy, ResearchArticle, AgentArchitecture } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'ai-agents',
    title: 'AI Agents & Intelligent Assistants',
    slug: 'ai-agents',
    shortDescription: 'Autonomous multi-step agents that execute complex business workflows with deterministic verification and safety guardrails.',
    fullDescription: 'We architect autonomous software agents capable of breaking down ambiguous business tasks, making API calls across your tech stack, verifying intermediate outputs, and requesting human manager approvals when safety thresholds require escalation.',
    iconName: 'Bot',
    capabilities: [
      'Multi-agent hierarchical orchestration (Supervisor & Worker patterns)',
      'Deterministic tool calling with automatic retry & self-healing',
      'Persistent memory architectures (Episodic, Semantic & Working memory)',
      'Human-in-the-loop escalation thresholds for high-risk operations'
    ],
    businessImpact: 'Reduces manual multi-system operations by 65–80% while preserving absolute compliance.',
    technologies: ['LangGraph', 'Gemini 3.8 Flash', 'Python', 'FastAPI', 'Redis', 'Docker'],
    deliverables: ['Custom Agentic Architecture', 'ERP/CRM Tool Connectors', 'Supervisor Cockpit UI', '99.5% Task Accuracy SLA']
  },
  {
    id: 'ai-chatbots',
    title: 'Enterprise AI Chatbots',
    slug: 'ai-chatbots',
    shortDescription: 'Context-aware, zero-hallucination conversational bots grounded in proprietary company knowledge and live APIs.',
    fullDescription: 'Next-generation conversational agents designed for customer support, employee self-service, and sales enablement. Grounded in enterprise vector indexes with strict response boundaries and real-time CRM updates.',
    iconName: 'MessageSquareCode',
    capabilities: [
      'Retrieval-Augmented Generation (RAG) with hybrid search',
      'Omnichannel deployment: Web, WhatsApp, Slack, Teams, In-App',
      'Sentiment-driven dynamic routing and live agent handoff',
      'Multilingual real-time translation across 80+ languages'
    ],
    businessImpact: 'Resolves 70%+ of tier-1 inquiries in under 45 seconds without increasing headcount.',
    technologies: ['Vector Databases (Pinecone/pgvector)', 'Gemini 3.8 Flash', 'Node.js', 'WebSocket', 'Next.js'],
    deliverables: ['Custom Branded Web Widget', 'Knowledge Base Synchronizer', 'Omnichannel Gateways', 'Conversation Analytics Suite']
  },
  {
    id: 'process-automation',
    title: 'Business Process Automation',
    slug: 'process-automation',
    shortDescription: 'End-to-end cognitive automation combining robotic process workflows with generative AI reasoning.',
    fullDescription: 'Replace repetitive manual copy-pasting, invoice matching, compliance audits, and data validation with autonomous software pipelines that operate 24/7 without fatigue.',
    iconName: 'Cpu',
    capabilities: [
      'Unstructured document parsing (PDFs, scans, contracts, invoices)',
      'Cross-system reconciliation across SAP, Salesforce, QuickBooks, and internal DBs',
      'Automated email drafting, triaging, and regulatory filing',
      'Exception queues with automated visual diffs for auditors'
    ],
    businessImpact: 'Eliminates 90% of back-office transcription errors and cuts processing lead times from days to minutes.',
    technologies: ['FastAPI', 'Gemini Multimodal', 'Celery', 'PostgreSQL', 'Airflow'],
    deliverables: ['Automated ETL Pipeline', 'Document Parsing Engine', 'Audit Trail Dashboard', 'SOC2 Compliance Pack']
  },
  {
    id: 'generative-ai',
    title: 'Generative AI Solutions',
    slug: 'generative-ai',
    shortDescription: 'Bespoke foundation model deployment, domain fine-tuning, and enterprise prompt engineering systems.',
    fullDescription: 'Tailored generative models adapted to your unique industry terminology, proprietary datasets, and tone of voice. We engineer robust evaluation harnesses to ensure continuous output quality.',
    iconName: 'Sparkles',
    capabilities: [
      'Domain adaptation and LoRA parameter-efficient fine-tuning',
      'Synthetic data generation for compliance testing and edge cases',
      'Automated report and marketing asset generation pipelines',
      'Prompt caching and token cost optimization (cutting inference costs by up to 60%)'
    ],
    businessImpact: 'Accelerates domain content and analysis generation by 5x with zero training data leakage.',
    technologies: ['PyTorch', 'Hugging Face', 'Gemini Models', 'vLLM', 'Triton'],
    deliverables: ['Fine-Tuned Model Weights', 'Inference API Service', 'Evaluation Benchmark Suite', 'Cost Optimization Guide']
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning & Predictive Modeling',
    slug: 'machine-learning',
    shortDescription: 'Production-ready predictive models for demand forecasting, customer churn, and anomaly detection.',
    fullDescription: 'Turn historical operational data into accurate predictive foresight. We build enterprise ML models with continuous drift monitoring and automated retraining pipelines.',
    iconName: 'TrendingUp',
    capabilities: [
      'Time-series forecasting and inventory optimization',
      'Customer lifetime value (CLV) and churn prediction',
      'Real-time fraud and payment anomaly scoring',
      'MLOps pipeline with automated data validation and model registry'
    ],
    businessImpact: 'Drives average forecast accuracy improvements of 24–38%, directly reducing carrying costs.',
    technologies: ['Scikit-Learn', 'XGBoost', 'TensorFlow', 'MLflow', 'Kubernetes'],
    deliverables: ['Production ML Microservice', 'Model Drift Monitor', 'Feature Store Configuration', 'Executive Impact Dashboard']
  },
  {
    id: 'nlp-solutions',
    title: 'Natural Language Processing (NLP)',
    slug: 'nlp-solutions',
    shortDescription: 'Advanced semantic search, legal contract intelligence, and multi-document synthesis.',
    fullDescription: 'Harness state-of-the-art NLP to extract structured metadata, identify legal clause discrepancies, synthesize thousands of research publications, and structure messy text.',
    iconName: 'FileText',
    capabilities: [
      'Named Entity Recognition (NER) & Relation Extraction',
      'Legal contract clause comparison and deviation detection',
      'Voice-to-text intelligence with speaker diarization',
      'Semantic search across millions of unstructured files'
    ],
    businessImpact: 'Reduces contract review turnaround from 4 hours to 9 minutes per document.',
    technologies: ['Spacy', 'Gemini Embeddings', 'BERT', 'Elasticsearch', 'pgvector'],
    deliverables: ['NLP Processing Pipeline', 'Custom NER Models', 'Search API Gateway', 'Accuracy Verification Report']
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision & Inspection',
    slug: 'computer-vision',
    shortDescription: 'Edge and cloud vision systems for automated visual defect detection, asset tracking, and OCR.',
    fullDescription: 'From manufacturing line flaw detection to video intelligence, we deploy high-throughput vision pipelines optimized for real-time edge hardware and cloud inference.',
    iconName: 'Eye',
    capabilities: [
      'High-speed industrial surface defect classification',
      'Edge deployment on NVIDIA Jetson and on-prem hardware',
      'Barcode, label, and packaging validation at line speed',
      'Automated visual safety compliance monitoring'
    ],
    businessImpact: 'Prevents 99.8% of packaging and surface defects before warehouse dispatch.',
    technologies: ['OpenCV', 'YOLOv11', 'TensorRT', 'Gemini Multimodal', 'NVIDIA DeepStream'],
    deliverables: ['Edge Inference Container', 'Trained Inspection Weights', 'Camera Calibration Suite', 'Rejection Actuator Integration']
  },
  {
    id: 'custom-ai',
    title: 'Custom Enterprise AI Development',
    slug: 'custom-ai',
    shortDescription: 'Full-lifecycle software engineering to embed AI capabilities into existing enterprise architectures.',
    fullDescription: 'We partner with enterprise IT and product teams to design, architect, build, and deploy custom AI infrastructure that adheres strictly to your compliance, SOC2, and data sovereignty requirements.',
    iconName: 'Layers',
    capabilities: [
      'Private cloud deployment (VPC, AWS GovCloud, Azure Private Enclaves)',
      'Strict zero-retention API integrations (data never used for model training)',
      'High-concurrency streaming microservices with sub-second latency',
      'Full source-code ownership and seamless handover to internal teams'
    ],
    businessImpact: 'Delivers enterprise-grade AI capabilities 3x faster than building an internal AI lab from scratch.',
    technologies: ['Kubernetes', 'Go / TypeScript / Python', 'Terraform', 'PostgreSQL', 'Grafana'],
    deliverables: ['Complete Clean Codebase', 'Terraform Infrastructure as Code', 'Architecture Review Board Pack', 'Team Enablement Workshops']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'finscale-kyc',
    title: 'Autonomous AML & KYC Compliance Operations Agent',
    client: 'FinScale Global Banking',
    industry: 'Financial Services',
    challenge: 'FinScale compliance officers spent an average of 42 minutes per business onboarding case manually cross-referencing company registries, sanctions lists, proof-of-address documents, and beneficial ownership structures.',
    solution: 'InnovationLab designed a multi-agent verification system. Agent 1 parses and extracts multi-lingual corporate filings; Agent 2 executes live sanctions and PEP checks via secure banking APIs; Agent 3 checks compliance rules and flags discrepancies with cited evidence for human officer sign-off.',
    technologies: ['Gemini 3.8 Flash', 'LangGraph', 'FastAPI', 'PostgreSQL', 'Airflow'],
    results: [
      { metric: '74%', label: 'Turnaround Reduction', description: 'Average onboarding case review dropped from 42 min to 11 min' },
      { metric: '$420,000', label: 'Annual Operational Savings', description: 'Reallocated 14 FTEs to complex investigations rather than manual entry' },
      { metric: '99.9%', label: 'Audit Compliance Rate', description: 'Zero missed sanctions hits across 180,000+ evaluated corporate profiles' }
    ],
    beforeWorkflow: [
      'Manual PDF download from client portal',
      'Analyst opens 4 external browser tabs for sanctions databases',
      'Manual copy-paste of corporate directors into spreadsheet',
      'Typing verification report in Microsoft Word (42 minutes total)'
    ],
    afterWorkflow: [
      'Client submits documents; Ingestion Agent triggers instantly',
      'Agent extracts UBOs, verifies certificates, and runs API checks in 18 seconds',
      'Synthesized compliance dossier generated with highlight citations',
      'Compliance officer conducts 1-click review and approval (under 11 minutes total)'
    ],
    testimonial: {
      quote: 'InnovationLab delivered an agent system that our compliance auditors genuinely trust. The deterministic citations and human sign-off loop made regulatory approval painless.',
      author: 'Marcus Vance',
      role: 'Chief Compliance Officer',
      company: 'FinScale Global'
    }
  },
  {
    id: 'omnilogistics-demurrage',
    title: 'Autonomous Freight Tracking & Demurrage Prevention Agent',
    client: 'OmniLogistics Worldwide',
    industry: 'Supply Chain & Logistics',
    challenge: 'Unpredictable port delays and delayed EDI status messages resulted in over $850,000 in annual container demurrage fines and hundreds of frantic client tracking phone calls daily.',
    solution: 'InnovationLab engineered an autonomous logistics dispatcher agent that continuously polls terminal vessel schedules, translates unstructured carrier emails, predicts demurrage risk 72 hours in advance, and automatically triggers drayage truck bookings.',
    technologies: ['Gemini Multimodal', 'Node.js', 'Redis', 'pgvector', 'Docker'],
    results: [
      { metric: '82%', label: 'Demurrage Fines Eliminated', description: 'Reduced container detention fees by $697,000 in the first 9 months' },
      { metric: '3.4x', label: 'Dispatcher Productivity', description: 'Single operator now oversees 240 active containers up from 70' },
      { metric: '< 2 min', label: 'Proactive Alert Latency', description: 'Shippers notified of customs holds within minutes, not hours' }
    ],
    beforeWorkflow: [
      'Dispatchers logged into 12 separate port terminal portals each morning',
      'Urgent gate-hold notices buried in 500+ daily operational emails',
      'Drayage truckers booked only after container landed on terminal floor',
      'Costly daily demurrage accruals when delays hit'
    ],
    afterWorkflow: [
      'Autonomous Agent parses terminal EDI feeds & customs release notices continuously',
      'Predictive model forecasts container availability window 48 hours prior to berthing',
      'Auto-reserves local carrier appointments via API',
      'Clients receive real-time map link and auto-cleared documentation'
    ],
    testimonial: {
      quote: 'The ROI was obvious within the first 60 days. Our dispatchers no longer drown in port portals, and our clients get answers before they even ask.',
      author: 'Sarah Chen',
      role: 'VP of Global Logistics',
      company: 'OmniLogistics Worldwide'
    }
  },
  {
    id: 'novacare-claims',
    title: 'Clinical NLP & Prior-Authorization Processing Bot',
    client: 'NovaCare Health Network',
    industry: 'Healthcare & Life Sciences',
    challenge: 'Healthcare providers faced a 14-day backlog reviewing complex medical prior-authorization requests, leading to treatment delays and high administrative overhead.',
    solution: 'Engineered a HIPAA-compliant medical document intelligence pipeline that scans physician notes, maps ICD-10 diagnostic codes, verifies insurance clinical policy guidelines, and pre-populates authorization packets.',
    technologies: ['Gemini 3.8 Flash', 'HIPAA Secure Cloud', 'Python', 'FastAPI', 'Elasticsearch'],
    results: [
      { metric: '68%', label: 'Faster Authorization', description: 'Turnaround cut from 14 business days down to 4.5 days' },
      { metric: '99.4%', label: 'Medical Coding Precision', description: 'Zero coding hallucination with strict clinical terminology mapping' },
      { metric: '$310,000', label: 'Administrative Cost Savings', description: 'Reduced overtime expenses for clinical nurse reviewers' }
    ],
    beforeWorkflow: [
      'Doctor faxes or uploads 30-page patient chart',
      'Nurse reviewer reads pages looking for diagnostic criteria',
      'Manual lookup against 400-page health plan policy manual',
      '10-14 days until determination sent back'
    ],
    afterWorkflow: [
      'Clinical NLP parses medical history and maps diagnosis in 12 seconds',
      'Matching policy clause automatically tagged with evidence links',
      'Draft decision package presented to medical director for signed approval',
      'Turnaround under 48 hours for standard authorizations'
    ],
    testimonial: {
      quote: 'Patient care cannot wait two weeks for manual paperwork. InnovationLab provided an AI workflow that adheres to strict medical rigor while accelerating our review cycle.',
      author: 'Dr. Aris Thorne',
      role: 'Medical Director',
      company: 'NovaCare Health'
    }
  }
];

export const AGENT_ARCHITECTURES: AgentArchitecture[] = [
  {
    id: 'arch-customer-ops',
    name: 'Customer Operations & Resolution Agent',
    category: 'Customer Experience',
    description: 'Autonomous customer tier-1/tier-2 resolution agent equipped with Stripe, Zendesk, and Shopify tools to issue authorized refunds, modify shipping addresses, and troubleshoot issues.',
    useCase: 'High-volume consumer and B2B SaaS helpdesk automation.',
    latencySla: '< 1.4 seconds end-to-end',
    accuracySla: '99.2% policy compliance',
    toolsIntegrated: ['CRM Read/Write', 'Payment Gateway (Stripe)', 'Order Management (Shopify/SAP)', 'Email & SMS Dispatch'],
    workflowSteps: [
      'User Query & Authentication Validation',
      'Intent Classification & Policy Lookup',
      'Tool Execution with Parameter Sanity Check',
      'Supervisor Safety Evaluation & Response Delivery'
    ]
  },
  {
    id: 'arch-financial-recon',
    name: 'Financial Ledger & Bank Reconciliation Agent',
    category: 'Finance & Accounting',
    description: 'Continuously balances daily bank transactions against ERP invoices, identifies reconciliation breaks, and prepares journal entries for accounting controllers.',
    useCase: 'Month-end close acceleration and automated multi-currency reconciliation.',
    latencySla: 'Real-time transaction event streaming',
    accuracySla: '100% mathematical balance verification',
    toolsIntegrated: ['Plaid Bank Feeds', 'NetSuite / QuickBooks API', 'Document OCR', 'Slack Notification Bot'],
    workflowSteps: [
      'Stream transaction records from bank feeds',
      'Match against open accounts receivable invoices',
      'Classify unallocated items via historical vector embeddings',
      'Stage suggested balanced journal entries for Controller review'
    ]
  },
  {
    id: 'arch-research-synthesis',
    name: 'Executive Intelligence & Market Research Agent',
    category: 'Strategic Intelligence',
    description: 'Monitors regulatory filings, patent databases, earnings calls, and competitor pricing to assemble weekly structured executive briefs with source citations.',
    useCase: 'C-suite strategy, private equity diligence, and competitive tracking.',
    latencySla: 'Continuous scheduled & on-demand execution',
    accuracySla: '100% cited source grounding',
    toolsIntegrated: ['SEC EDGAR Filings', 'Patent DB Scrapers', 'Financial News APIs', 'Notion/Docx Exporter'],
    workflowSteps: [
      'Ingest quarterly disclosures & news releases',
      'Semantic deduplication & key metric extraction',
      'Cross-company thematic synthesis and risk indexing',
      'Export formatted executive summary PDF with clickable citations'
    ]
  },
  {
    id: 'arch-code-compliance',
    name: 'DevSecOps & Cloud Compliance Sentinel Bot',
    category: 'Engineering & Security',
    description: 'Inspects code pull requests and infrastructure-as-code manifests against enterprise security policies, flagging secrets, vulnerable dependencies, and misconfigurations.',
    useCase: 'Automated SOC2, HIPAA, and ISO27001 continuous compliance.',
    latencySla: '< 45 seconds per pull request',
    accuracySla: 'Zero false negatives on critical CVEs',
    toolsIntegrated: ['GitHub / GitLab Webhooks', 'Trivy / Snyk Scanner', 'AWS IAM Policy Simulator', 'Jira Issue Creator'],
    workflowSteps: [
      'PR opened -> Parse diff AST and Terraform templates',
      'Run semantic rule validation against enterprise policy library',
      'Generate inline code suggestions with safe remediation snippets',
      'Update GitHub status check and sync with security compliance log'
    ]
  }
];

export const RESEARCH_ARTICLES: ResearchArticle[] = [
  {
    id: 'multi-agent-orchestration-2026',
    title: 'Architecting Resilient Multi-Agent Systems for Enterprise Workflows',
    summary: 'A comprehensive architectural blueprint for transitioning from fragile single-prompt chains to deterministic multi-agent supervisor hierarchies.',
    category: 'Autonomous Agents',
    readTime: '7 min read',
    publishedDate: 'November 2026',
    author: 'InnovationLab Research Team',
    content: [
      'Single-prompt LLM applications degrade rapidly when faced with complex multi-step workflows. When a prompt attempts to perform classification, tool execution, intermediate data restructuring, and final output formatting in a single pass, failure rates compound exponentially.',
      'To build production systems that achieve > 99% reliability, enterprises must adopt hierarchical multi-agent architectures where specialized micro-agents operate with bounded context windows, explicit JSON contracts, and deterministic supervisor checkpoints.',
      'Our benchmarking demonstrates that partitioning a 6-step business process across four isolated worker agents coordinated by a state machine supervisor reduces operational failure rates by 84% compared to monolithic prompt chains.'
    ],
    keyTakeaways: [
      'Decompose workflows into single-responsibility worker agents',
      'Maintain an immutable state graph with state rollback capabilities',
      'Implement deterministic validation gates before calling downstream APIs'
    ]
  },
  {
    id: 'deterministic-guardrails',
    title: 'Eliminating Hallucinations: Deterministic Guardrails in Regulated Domains',
    summary: 'How leading financial and healthcare institutions deploy dual-tier verification engines to guarantee factuality and prevent unsafe model outputs.',
    category: 'Enterprise Guardrails',
    readTime: '6 min read',
    publishedDate: 'October 2026',
    author: 'Dr. Sarah Al-Mansoor, Principal AI Researcher',
    content: [
      'In high-stakes industries like healthcare and banking, a 5% hallucination rate is not a minor inconvenience—it is an unacceptable legal and operational liability. Relying solely on prompt instructions like "never fabricate facts" is insufficient for compliance.',
      'Deterministic guardrails operate as an independent verification layer completely decoupled from the generative model. Every entity, claim, and dollar figure emitted by the model is parsed into a knowledge graph and validated against authorized enterprise databases before the customer ever sees the text.',
      'If an ungrounded statement is detected, the guardrail layer automatically redirects the query to a conservative fallback or routes the draft directly to a human operator queue.'
    ],
    keyTakeaways: [
      'Never rely on prompt phrasing alone for safety in regulated environments',
      'Deploy post-generation entity extraction with vector grounding checks',
      'Establish strict latency budgets: guardrail validation must execute in < 200ms'
    ]
  },
  {
    id: 'rag-vs-fine-tuning',
    title: 'RAG vs. Fine-Tuning: The 2026 Decision Matrix for Enterprise Executives',
    summary: 'A practical economic and technical decision framework to choose between vector search (RAG), parameter-efficient fine-tuning (PEFT), and hybrid pipelines.',
    category: 'LLM Architecture',
    readTime: '8 min read',
    publishedDate: 'September 2026',
    author: 'Alexei Ivanov, Chief Technology Officer',
    content: [
      'One of the most frequent dilemmas enterprise teams bring to InnovationLab is whether they need to fine-tune their own proprietary model or build a Retrieval-Augmented Generation (RAG) system.',
      'The short answer: RAG provides fresh knowledge and precise citations; fine-tuning teaches specialized style, syntax, and task behavior. In 85% of corporate knowledge retrieval use cases, high-density RAG paired with Gemini 3.8 Flash yields higher accuracy and lower ongoing maintenance costs than continuous fine-tuning.',
      'Fine-tuning becomes necessary when you require strict schema adherence in non-standard domain languages, extreme low-latency edge deployment, or specialized mathematical and chemical representations.'
    ],
    keyTakeaways: [
      'Use RAG when facts change weekly or citations are legally required',
      'Use fine-tuning when teaching unique jargon, structured schemas, or custom grammar',
      'The optimal enterprise stack is often hybrid: fine-tuned task adapters retrieving from indexed vector knowledge'
    ]
  }
];

export const TECH_MAP_NODES = [
  {
    category: 'Foundation Models & LLMs',
    description: 'High-throughput reasoning and multimodal processing',
    items: ['Gemini 3.8 Flash', 'Gemini 4 Argon', 'Llama 3.3 Enterprise', 'Claude 3.7', 'DeepSeek-V3']
  },
  {
    category: 'Agent Frameworks & Orchestration',
    description: 'Stateful execution graphs and supervisor patterns',
    items: ['LangGraph', 'AutoGPT / CrewAI', 'Semantic Kernel', 'Temporal.io', 'FastAPI Async']
  },
  {
    category: 'Vector & Knowledge Memory',
    description: 'Hybrid sparse/dense retrieval and long-term agent memory',
    items: ['pgvector (PostgreSQL)', 'Pinecone', 'Qdrant', 'Milvus', 'Redis Enterprise']
  },
  {
    category: 'Guardrails & Observability',
    description: 'Deterministic policy enforcement and real-time tracing',
    items: ['NeMo Guardrails', 'LangSmith / Langfuse', 'OpenTelemetry', 'Arize AI', 'Prometheus']
  },
  {
    category: 'Enterprise Integrations',
    description: 'Secure bi-directional API bridges to core business software',
    items: ['Salesforce', 'SAP ERP', 'Microsoft 365', 'Slack & Teams', 'Snowflake / BigQuery']
  }
];
