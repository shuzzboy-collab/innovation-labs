import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// In-memory store for consultation requests and inquiries
interface Inquiry {
  id: string;
  type: 'consultation' | 'inquiry' | 'proposal_lead';
  name: string;
  email: string;
  company?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  date?: string;
  timeSlot?: string;
  notes?: string;
  status: 'new' | 'reviewed' | 'scheduled' | 'completed';
  createdAt: string;
}

const inquiries: Inquiry[] = [
  {
    id: 'inq-101',
    type: 'consultation',
    name: 'Marcus Vance',
    email: 'm.vance@apexfinancial.com',
    company: 'Apex Financial Services',
    service: 'AI Agents & Bots',
    budget: '$50,000 - $100,000',
    timeline: '1-3 Months',
    date: '2026-11-12',
    timeSlot: '14:00 - 14:45 GMT',
    notes: 'Looking to automate high-volume AML triage and regulatory compliance reporting.',
    status: 'scheduled',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: 'inq-102',
    type: 'inquiry',
    name: 'Elena Rostova',
    email: 'elena@novacarehealth.io',
    company: 'NovaCare Health',
    service: 'Business Process Automation',
    budget: '$25,000 - $50,000',
    timeline: '3-6 Months',
    notes: 'Require intelligent medical claims extraction and clinical NLP parsing.',
    status: 'new',
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
  },
  {
    id: 'inq-103',
    type: 'proposal_lead',
    name: 'David Kim',
    email: 'dkim@omnilogistics.co',
    company: 'OmniLogistics Worldwide',
    service: 'Custom AI Development',
    budget: '$100,000+',
    timeline: 'ASAP (< 1 Month)',
    notes: 'Autonomous multi-modal freight tracking and demurrage prevention agent.',
    status: 'reviewed',
    createdAt: new Date(Date.now() - 86400000 * 4).toISOString(),
  },
];

// Initialize Gemini Client
const aiApiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (aiApiKey && aiApiKey !== 'MY_GEMINI_API_KEY') {
  aiClient = new GoogleGenAI({
    apiKey: aiApiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

function withTimeout<T>(promise: Promise<T>, ms = 5000): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error('AI inference timeout')), ms)
    ),
  ]);
}

// 1. AI Assistant Chat Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required.' });
      return;
    }

    if (aiClient) {
      try {
        const systemInstruction = `You are "IL-Assistant", the senior AI solutions consultant for InnovationLab (AI Agency | Agents & Bots).
InnovationLab builds high-performance AI solutions for businesses:
1. Autonomous AI Agents & Intelligent Assistants
2. Enterprise AI Chatbots & Customer Operations
3. End-to-End Business Process Automation (RPA + LLMs)
4. Generative AI Solutions & Custom Fine-Tuning
5. Machine Learning & Predictive Analytics
6. Natural Language Processing & Document Intelligence
7. Computer Vision & Automated Quality Control
8. Custom Enterprise AI Development

Your personality:
- Professional, pragmatic, consultative, transparent, and authoritative.
- Never use generic AI clichés like "supercharge" or "unlock limitless potential".
- Emphasize real business outcomes: labor reduction, accuracy SLAs, fast payback periods, human-in-the-loop safety.
- When relevant, encourage the user to schedule a discovery consultation or test the interactive tools on the site (Cost Estimator, ROI Calculator, Solution Generator).
- Keep replies succinct (2-4 paragraphs max), clear, and well-structured.`;

        // Format prior history if provided
        const contents: any[] = [];
        if (Array.isArray(history)) {
          for (const item of history.slice(-6)) {
            contents.push({
              role: item.role === 'assistant' ? 'model' : 'user',
              parts: [{ text: item.content || '' }],
            });
          }
        }
        contents.push({ role: 'user', parts: [{ text: message }] });

        const response: any = await withTimeout(
          aiClient.models.generateContent({
            model: 'gemini-3.8-flash',
            contents,
            config: {
              systemInstruction,
            },
          }),
          5000
        );

        res.json({
          reply: response.text || 'I am ready to assist you with InnovationLab solutions.',
          source: 'gemini-3.8-flash',
        });
        return;
      } catch (geminiError: any) {
        console.error('Gemini API call timed out or failed, using expert fallback:', geminiError?.message);
      }
    }

    // High-quality expert rule-based fallback if API key is not configured or fails
    const lower = message.toLowerCase();
    let fallbackReply = '';

    if (lower.includes('price') || lower.includes('cost') || lower.includes('rate') || lower.includes('budget')) {
      fallbackReply = `InnovationLab structures engagements based on scope and architecture:
- **Pilot Agent / MVP (4-6 weeks)**: $15,000 – $35,000 (Single-task autonomous agent or specialized workflow automation with human review).
- **Production Multi-Agent System (8-12 weeks)**: $40,000 – $95,000 (Full ERP/CRM integration, self-correcting RAG, SOC2 compliant guardrails).
- **Enterprise Automation Transformation (Ongoing)**: Custom tier with dedicated AI engineering pods and guaranteed 99.5% task accuracy SLA.

You can also use our interactive **AI Project Cost Estimator** under the "AI Tools" tab for an instant detailed breakdown!`;
    } else if (lower.includes('service') || lower.includes('what do you do') || lower.includes('agent') || lower.includes('bot')) {
      fallbackReply = `InnovationLab specializes in high-reliability AI systems:
1. **Autonomous Agents**: Self-orchestrating bots that take actions across your databases, SaaS tools, and APIs with deterministic safety.
2. **Enterprise Chatbots**: Multi-modal, context-aware assistants for customer support, onboarding, and internal knowledge access.
3. **Workflow Automation**: Intelligent document parsing, invoice reconciliation, and complex multi-step robotic process automation.
4. **Custom AI Engineering**: Private model fine-tuning, vector database pipelines, and computer vision quality inspection.

Would you like to explore a specific use case or calculate your estimated ROI?`;
    } else if (lower.includes('book') || lower.includes('consult') || lower.includes('meeting') || lower.includes('contact')) {
      fallbackReply = `We'd be delighted to discuss your technical architecture. You can book a 30-minute Discovery Consultation directly on our **Contact** page. Our Principal AI Architect will review your current workflows and map out feasible automation opportunities.`;
    } else {
      fallbackReply = `At InnovationLab, our mission is turning complex business friction into autonomous, measurable AI solutions. Whether you need an intelligent agent to handle back-office operations, a conversational copilot for your customer base, or custom ML modeling, we build with deterministic guardrails and clear ROI benchmarks.

Feel free to ask about our tech stack, past case studies, or try our live **AI Solution Generator**!`;
    }

    res.json({
      reply: fallbackReply,
      source: 'innovationlab-knowledge-engine',
    });
  } catch (error: any) {
    console.error('Error in /api/chat:', error);
    res.status(500).json({ error: 'Internal server error processing AI response.' });
  }
});

// 2. AI Solution Generator Endpoint
app.post('/api/solution-generator', async (req, res) => {
  try {
    const { businessType, challenge, goal, timeline, budget } = req.body;

    if (!challenge) {
      res.status(400).json({ error: 'Business challenge is required.' });
      return;
    }

    if (aiClient) {
      try {
        const prompt = `As a Senior AI Solutions Architect at InnovationLab, analyze the following client inquiry and generate a professional, highly concrete technical and business solution blueprint:
- Business/Industry: ${businessType || 'General Enterprise'}
- Core Challenge: ${challenge}
- Target Goal: ${goal || 'Streamline operations and reduce manual costs'}
- Timeline: ${timeline || '3-6 Months'}
- Budget Bracket: ${budget || 'Flexible'}

Provide the response in structured JSON with the following exact keys:
{
  "solutionName": "Concise high-impact solution title",
  "executiveSummary": "2-3 sentences explaining how InnovationLab solves this challenge",
  "recommendedArchitecture": [
    { "layer": "Layer Name (e.g. Ingestion, Orchestration, Reasoning, Action, Guardrails)", "technology": "Tech stack (e.g. LangGraph, Gemini 3.8 Flash, Pinecone, FastAPI)", "description": "Specific functional responsibility" }
  ],
  "agentWorkflows": [
    { "agentName": "Name of Agent", "role": "What it does", "trigger": "How it activates", "output": "What it produces" }
  ],
  "implementationRoadmap": [
    { "phase": "Phase 1: Discovery & Data Audit", "duration": "Weeks 1-2", "deliverable": "Architecture blueprint & data pipeline validation" },
    { "phase": "Phase 2: Core Agent MVP", "duration": "Weeks 3-5", "deliverable": "Working prototype with human-in-the-loop validation" },
    { "phase": "Phase 3: Production Hardening", "duration": "Weeks 6-8", "deliverable": "Full API integration, telemetry & guardrails" },
    { "phase": "Phase 4: Deployment & Scaling", "duration": "Weeks 9+", "deliverable": "Continuous monitoring, fine-tuning & SLA enforcement" }
  ],
  "projectedBusinessImpact": {
    "timeSavings": "e.g. 68% reduction in manual turnaround",
    "costReduction": "e.g. $140,000+ estimated annualized operational savings",
    "paybackPeriod": "e.g. 4.2 Months to positive ROI",
    "accuracyGuarantee": "99.2% with deterministic human-in-the-loop validation"
  },
  "recommendedNextStep": "Actionable closing recommendation"
}`;

        const response: any = await withTimeout(
          aiClient.models.generateContent({
            model: 'gemini-3.8-flash',
            contents: prompt,
            config: {
              responseMimeType: 'application/json',
            },
          }),
          6000
        );

        if (response.text) {
          const parsed = JSON.parse(response.text);
          res.json({ data: parsed, source: 'gemini-3.8-flash' });
          return;
        }
      } catch (geminiError: any) {
        console.error('Gemini Solution Generator error, using resilient generator:', geminiError?.message);
      }
    }

    // Dynamic intelligent fallback
    const blueprint = {
      solutionName: `${businessType || 'Enterprise'} Autonomous AI Workflow Engine`,
      executiveSummary: `InnovationLab deploys a multi-agent orchestration architecture to eliminate manual bottlenecks in ${challenge.toLowerCase()}. By combining deterministic API tools with multimodal reasoning, we reduce cycle times while preserving total human supervisory oversight.`,
      recommendedArchitecture: [
        {
          layer: 'Data Ingestion & Perception',
          technology: 'FastAPI, Document OCR & Multimodal Parsing',
          description: 'Secure webhook and document ingestion from your existing ERP, CRM, and cloud storage.',
        },
        {
          layer: 'Reasoning & Orchestration',
          technology: 'Autonomous Agent Framework & Gemini 3.8 Flash',
          description: 'Contextual intent classification, validation rules, and multi-step action planning.',
        },
        {
          layer: 'Knowledge Grounding (RAG)',
          technology: 'Hybrid Dense/Sparse Vector Store (Pinecone / pgvector)',
          description: 'Grounds every decision in your proprietary company policies, catalogs, and contracts.',
        },
        {
          layer: 'Deterministic Execution',
          technology: 'REST Integrations, SQL connectors & Human-in-the-loop Escalation',
          description: 'Direct transaction writes to downstream databases only after safety threshold passes.',
        },
      ],
      agentWorkflows: [
        {
          agentName: 'Triage & Ingestion Agent',
          role: 'Validates inputs, deduplicates incoming records, and extracts key entities.',
          trigger: 'New transaction or ticket event',
          output: 'Standardized structured JSON payload',
        },
        {
          agentName: 'Domain Reasoning Agent',
          role: 'Evaluates business logic against compliance checklists and company SOPs.',
          trigger: 'Validated payload received',
          output: 'Proposed action plan with confidence scoring',
        },
        {
          agentName: 'Execution & Verification Agent',
          role: 'Executes approved actions across third-party APIs and audits the output.',
          trigger: 'Confidence score >= 95% (or human manager sign-off)',
          output: 'Completed transaction record & client notification',
        },
      ],
      implementationRoadmap: [
        {
          phase: 'Phase 1: Discovery & Architecture Specification',
          duration: 'Weeks 1-2',
          deliverable: 'Data security audit, API contract definitions, and SLA targets',
        },
        {
          phase: 'Phase 2: Agent Prototype & Guardrails Benchmark',
          duration: 'Weeks 3-5',
          deliverable: 'Functional staging environment with 500+ test benchmark runs',
        },
        {
          phase: 'Phase 3: Production Integration & Staging Review',
          duration: 'Weeks 6-8',
          deliverable: 'Bi-directional CRM/ERP sync, automated rollback, and staff training',
        },
        {
          phase: 'Phase 4: Live Rollout & Continuous Observability',
          duration: 'Weeks 9+',
          deliverable: 'Full production traffic cutover with 24/7 telemetry monitoring',
        },
      ],
      projectedBusinessImpact: {
        timeSavings: '70% reduction in manual processing time',
        costReduction: '$180,000+ estimated annualized operational savings',
        paybackPeriod: '3.8 Months to break-even',
        accuracyGuarantee: '99.4% task compliance with automatic fallback',
      },
      recommendedNextStep: 'Schedule a 30-minute Technical Discovery Session with an InnovationLab Lead Architect to review API access and sample data requirements.',
    };

    res.json({ data: blueprint, source: 'innovationlab-expert-engine' });
  } catch (error: any) {
    console.error('Error in /api/solution-generator:', error);
    res.status(500).json({ error: 'Failed to generate solution blueprint.' });
  }
});

// 3. AI Proposal Generator Endpoint
app.post('/api/proposal-generator', async (req, res) => {
  try {
    const { companyName, industry, challenge, selectedServices, contactEmail } = req.body;

    const company = companyName || 'Client Organization';
    const proposalId = `IL-PROP-${Math.floor(100000 + Math.random() * 900000)}`;

    const proposal = {
      proposalId,
      createdDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      validUntil: new Date(Date.now() + 86400000 * 30).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      preparedFor: {
        company,
        industry: industry || 'Technology & Operations',
        contact: contactEmail || 'leadership@client.com',
      },
      preparedBy: {
        agency: 'InnovationLab – AI Agency | Agents & Bots',
        lead: 'Principal Architecture Practice',
        website: 'www.innovation.com',
      },
      executiveSummary: `InnovationLab presents this formal Statement of Work and Technical Proposal to ${company}. Our goal is to address ${challenge || 'operational bottlenecks'} by architecting a production-grade autonomous AI solution. By replacing manual touchpoints with secure, self-evaluating agents, this project delivers tangible margin expansion and measurable accuracy.`,
      scopeOfWork: [
        {
          title: 'Architecture & Security Blueprint',
          details: 'Data isolation review, zero-retention LLM gateway setup, SOC2 compliance controls, and custom prompt defense layers.',
        },
        {
          title: 'Agentic Core Development',
          details: `Custom agent pipeline implementing ${selectedServices?.join(', ') || 'AI Agents, Bots, and Process Automation'}. Includes tool-calling protocols and stateful memory.`,
        },
        {
          title: 'System Integration & Testing',
          details: 'REST and GraphQL connector integration with existing enterprise systems, staging sandbox validation with 1,000+ golden test vectors.',
        },
        {
          title: 'Human-in-the-Loop Management UI',
          details: 'Dedicated operator cockpit allowing managers to inspect edge-case decisions, approve high-value transactions, and view live telemetry.',
        },
      ],
      investmentStructure: [
        { item: 'Architecture Discovery & Data Validation', duration: '2 Weeks', fee: '$12,500' },
        { item: 'Agentic Engineering & Guardrail Integration', duration: '4 Weeks', fee: '$28,000' },
        { item: 'Enterprise Integration & UAT Deployment', duration: '3 Weeks', fee: '$16,500' },
        { item: 'Production Launch & 60-Day Hypercare', duration: '8 Weeks', fee: '$9,000' },
      ],
      totalEstimatedInvestment: '$66,000',
      estimatedTimeline: '9 - 11 Weeks to Full Production',
      serviceLevelAgreement: '99.5% Uptime SLA, < 1.2s Median Agent Reasoning Latency, Zero Data Training Leakage Guarantee.',
    };

    // Store as lead
    inquiries.push({
      id: proposalId,
      type: 'proposal_lead',
      name: company,
      email: contactEmail || 'pending@client.com',
      company,
      service: selectedServices?.join(', ') || 'Custom AI Development',
      notes: `Generated proposal for challenge: ${challenge || 'N/A'}`,
      status: 'new',
      createdAt: new Date().toISOString(),
    });

    res.json({ proposal });
  } catch (error: any) {
    console.error('Error in /api/proposal-generator:', error);
    res.status(500).json({ error: 'Failed to generate proposal.' });
  }
});

// 4. Inquiries & Consultations Management Endpoints
app.get('/api/inquiries', (req, res) => {
  res.json({ inquiries });
});

app.post('/api/inquiries', (req, res) => {
  const { type, name, email, company, service, budget, timeline, date, timeSlot, notes } = req.body;

  if (!name || !email) {
    res.status(400).json({ error: 'Name and email are required.' });
    return;
  }

  const newInquiry: Inquiry = {
    id: `inq-${Date.now().toString().slice(-6)}`,
    type: type || 'inquiry',
    name,
    email,
    company: company || '',
    service: service || 'General Consultation',
    budget: budget || 'To be discussed',
    timeline: timeline || 'Flexible',
    date,
    timeSlot,
    notes: notes || '',
    status: 'new',
    createdAt: new Date().toISOString(),
  };

  inquiries.unshift(newInquiry);
  res.status(201).json({ success: true, inquiry: newInquiry });
});

app.patch('/api/inquiries/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const target = inquiries.find((i) => i.id === id);
  if (!target) {
    res.status(404).json({ error: 'Inquiry not found.' });
    return;
  }

  if (status && ['new', 'reviewed', 'scheduled', 'completed'].includes(status)) {
    target.status = status;
  }

  res.json({ success: true, inquiry: target });
});

// Mount Vite or serve static files
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`InnovationLab server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
