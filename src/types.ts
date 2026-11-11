export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  capabilities: string[];
  businessImpact: string;
  technologies: string[];
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: {
    metric: string;
    label: string;
    description: string;
  }[];
  beforeWorkflow: string[];
  afterWorkflow: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface ResearchArticle {
  id: string;
  title: string;
  summary: string;
  category: 'Autonomous Agents' | 'LLM Architecture' | 'Enterprise Guardrails' | 'Workflow Automation';
  readTime: string;
  publishedDate: string;
  author: string;
  content: string[];
  keyTakeaways: string[];
}

export interface AgentArchitecture {
  id: string;
  name: string;
  category: string;
  description: string;
  useCase: string;
  latencySla: string;
  accuracySla: string;
  toolsIntegrated: string[];
  workflowSteps: string[];
}

export interface InquiryData {
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

export interface SolutionBlueprint {
  solutionName: string;
  executiveSummary: string;
  recommendedArchitecture: {
    layer: string;
    technology: string;
    description: string;
  }[];
  agentWorkflows: {
    agentName: string;
    role: string;
    trigger: string;
    output: string;
  }[];
  implementationRoadmap: {
    phase: string;
    duration: string;
    deliverable: string;
  }[];
  projectedBusinessImpact: {
    timeSavings: string;
    costReduction: string;
    paybackPeriod: string;
    accuracyGuarantee: string;
  };
  recommendedNextStep: string;
}

export interface ProposalData {
  proposalId: string;
  createdDate: string;
  validUntil: string;
  preparedFor: {
    company: string;
    industry: string;
    contact: string;
  };
  preparedBy: {
    agency: string;
    lead: string;
    website: string;
  };
  executiveSummary: string;
  scopeOfWork: {
    title: string;
    details: string;
  }[];
  investmentStructure: {
    item: string;
    duration: string;
    fee: string;
  }[];
  totalEstimatedInvestment: string;
  estimatedTimeline: string;
  serviceLevelAgreement: string;
}
