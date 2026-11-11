import React from 'react';
import { ShieldCheck, Cpu, Target, Award, Users, ArrowRight, CheckCircle2, Calendar } from 'lucide-react';

interface AboutPageProps {
  onBookConsultation: (serviceOrNote?: string) => void;
  onNavigate: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBookConsultation, onNavigate }) => {
  const owner = {
    name: 'Mr. Shuja Ali',
    role: 'Owner & Founder',
    title: 'Chief Executive & AI Strategist',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-09_at_11.48.58_PM_e69ebc40.jpeg',
    quote: 'True enterprise AI is not about speculative chatbots or superficial demos. It is about deploying deterministic, resilient software agents that eliminate back-office friction and create measurable financial return.',
    bio: 'Mr. Shuja Ali is the Owner and Founder of InnovationLab. A forward-thinking technologist and business strategist, he established InnovationLab to solve the most critical challenges facing modern enterprises: high operational overhead, slow process turnaround, and error-prone manual tasks. Under his leadership, the agency has pioneered production-grade autonomous multi-agent pipelines, custom enterprise cognitive workflows, and strict zero-data-retention AI deployments that ensure client proprietary information remains entirely confidential.',
    strategicFocus: [
      'Enterprise AI Transformation & Roadmap Design',
      'Autonomous Multi-Agent Systems & Tool Orchestration',
      'Deterministic Business Process Automation & SLAs',
      'Client Trust, Security Architecture & Zero Data Leakage',
    ],
  };

  const leadership = [
    {
      name: 'Mr. Shahmir Khalid',
      role: 'Sales Officer',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-07_at_1.42.36_AM__1__ea6a8442.jpeg',
      initials: 'SK',
      focus: 'Enterprise Account Strategy & Consultative Sales',
      tag: 'Sales Officer',
      bio: 'Directs enterprise commercial relations and client discovery scoping at InnovationLab. Specializes in aligning client operational bottlenecks with high-impact, fixed-SLA AI automation architectures.',
    },
    {
      name: 'Miss Bushra',
      role: 'Frontend Developer & Sales Assistant Executive',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-07_at_1.42.35_AM_3a2b023c.jpeg',
      initials: 'MB',
      focus: 'Interactive UI, React Engineering & Sales Support',
      tag: 'Frontend & Sales',
      bio: 'Bridges frontend application engineering and client sales operations at InnovationLab. Specializes in designing intuitive AI cockpit interfaces, high-converting client tools, and assisting enterprise solution presentations.',
    },
    {
      name: 'Muhammad Aman',
      role: 'Lead Generation Expert',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-07_at_1.56.01_AM_36eaef5f.jpeg',
      initials: 'MA',
      focus: 'B2B Lead Enrichment & Acquisition Pipelines',
      tag: 'Lead Gen Lead',
      bio: 'Directs InnovationLab’s outbound client pipeline and automated lead qualification architecture. Specializes in cognitive prospect discovery, automated CRM enrichment, and high-conversion enterprise acquisition workflows.',
    },
    {
      name: 'Mr. Muhammad Hasnain',
      role: 'Social Media Manager & Marketing Adviser',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-07_at_1.42.36_AM_80f07da4.jpeg',
      initials: 'MH',
      focus: 'Multi-Channel Brand Growth & Creative Direction',
      tag: 'Marketing Adviser',
      bio: 'Orchestrates InnovationLab’s international brand narrative, executive social presence, and high-impact digital outreach campaigns across enterprise technology ecosystems.',
    },
    {
      name: 'Mr. Ariyan',
      role: 'Senior Graphic Designer & Video Editor',
      image: '/assets/aistudio/Gemini_Generated_Image_ngcfnngcfnngcfnn_c74ca045.jfif',
      initials: 'AR',
      focus: 'Motion Graphics, Video Production & Visual Storytelling',
      tag: 'Design & Video',
      bio: 'Directs multimedia design, video production, and high-impact motion storytelling at InnovationLab. Creates dynamic product animations, brand video assets, and enterprise presentation visual systems.',
    },
    {
      name: 'Miss Faiza Rehman',
      role: 'Graphic Designer',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-07_at_1.42.36_AM__2__e9f656d4.jpeg',
      initials: 'FR',
      focus: 'Brand Identity, Creative Direction & UI Graphics',
      tag: 'Graphic Designer',
      bio: 'Leads visual design, creative identity assets, and brand storytelling at InnovationLab. Crafts distinctive digital design collateral, product marketing visuals, and enterprise presentation systems.',
    },
    {
      name: 'Alexei Ivanov',
      role: 'Chief Technology Officer & Co-Founder',
      initials: 'AI',
      focus: 'Multi-Agent Infrastructure & Model Guardrails',
      tag: 'Architecture Lead',
      bio: 'Former principal ML systems architect with 12+ years deploying enterprise AI pipelines at scale. Author of leading papers on deterministic guardrail systems.',
    },
    {
      name: 'Dr. Sarah Al-Mansoor',
      role: 'Head of Autonomous Agent Research',
      initials: 'SM',
      focus: 'Cognitive Reasoning & Zero-Leakage RAG',
      tag: 'Research & RAG',
      bio: 'PhD in Computer Science (Distributed Systems & NLP). Specializes in multi-agent supervisor hierarchies, LangGraph workflows, and zero-leakage RAG retrieval.',
    },
    {
      name: 'Marcus Reynolds',
      role: 'VP of Enterprise Solutions & Delivery',
      initials: 'MR',
      focus: 'SLA Delivery & Compliance Integration',
      tag: 'Client Delivery',
      bio: '15+ years managing high-stakes digital transformations for Fortune 500 banks and healthcare providers. Dedicated to fixed-price, outcome-guaranteed client delivery.',
    },
  ];

  const milestones = [
    { year: '2023', title: 'Agency Inception', desc: 'InnovationLab founded by Mr. Shuja Ali to bridge the gap between speculative generative AI research and pragmatic enterprise back-office automation.' },
    { year: '2024', title: 'Deterministic Guardrails Engine', desc: 'Engineered proprietary post-generation verification layers, achieving zero-hallucination certifications in clinical and fintech environments.' },
    { year: '2025', title: 'Multi-Agent Supervisor Framework', desc: 'Expanded into autonomous agent orchestration, deploying over 35 production multi-system workflows across 10 enterprise sectors.' },
    { year: '2026', title: 'Global Enterprise Scale', desc: 'Over $2.8M in client operational costs eliminated, 99.4% task accuracy SLA maintained across 45+ deployed production agents.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-semibold">
          About InnovationLab
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Turning Complex Business Friction into Autonomous AI Systems.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          InnovationLab is a specialized artificial intelligence agency dedicated to engineering autonomous agents, intelligent chatbots, and cognitive workflow automation. We don't build toys or speculative prototypes—we build software that works 24/7 with deterministic guarantees.
        </p>
      </div>

      {/* Mission & Vision Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
            <Target className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            To liberate enterprise teams from repetitive, soul-crushing back-office friction by building autonomous software agents that execute complex tasks faster, cheaper, and with higher accuracy than humanly possible.
          </p>
        </div>

        <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
            <Cpu className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Our Vision</h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            A future where every modern business is powered by a private, secure cognitive nervous system—where routine document processing, customer inquiries, and system reconciliations occur autonomously with total supervisory safety.
          </p>
        </div>
      </div>

      {/* Core Engineering Principles */}
      <div className="space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Our Engineering Code</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Four Uncompromising Technical Principles</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: '01. Deterministic Guardrails',
              desc: 'We never allow raw LLMs to write unchecked transactions into enterprise databases. Every decision is verified against rigid business rules.'
            },
            {
              title: '02. Quantified Business ROI',
              desc: 'If a proposed AI automation project does not offer a demonstrable break-even timeline under 6 months, we advise the client not to build it.'
            },
            {
              title: '03. Human-in-the-Loop Safeguards',
              desc: 'High-consequence edge cases are automatically surfaced to managers with full contextual diffs, citations, and approval gates.'
            },
            {
              title: '04. Strict Zero Data Retention',
              desc: 'All models run in private tenant VPCs or enterprise zero-retention gateways. Your corporate IP is never used for training.'
            }
          ].map((principle, idx) => (
            <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-2">{principle.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{principle.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Agency Milestones Timeline */}
      <div className="space-y-6 pt-4">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Company History</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Our Journey & Track Record</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {milestones.map((m, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <span className="font-mono text-xl font-extrabold text-orange-600 block mb-1">{m.year}</span>
              <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5">{m.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team & Leadership Section */}
      <section className="space-y-10 pt-4">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-semibold">
            <Users className="w-3.5 h-3.5 text-orange-600" />
            Executive Leadership & Team
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet the Minds Driving InnovationLab
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Led by agency founder Mr. Shuja Ali, our multidisciplinary team of AI architects, machine learning engineers, and enterprise transformation leads build deterministic systems with measurable business outcomes.
          </p>
        </div>

        {/* 1. Executive Spotlight: Mr. Shuja Ali (Owner & Founder) */}
        <div className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-amber-50/20 rounded-3xl border-2 border-orange-200/80 p-6 sm:p-8 lg:p-10 shadow-lg shadow-orange-500/5">
          <div className="absolute top-0 right-0 w-80 h-80 bg-circuit-dots opacity-30 pointer-events-none" />
          
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Picture Column */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start lg:items-center">
              <div className="relative group">
                {/* Glow ring & decorative frame */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-orange-600 via-amber-500 to-orange-400 rounded-3xl blur-sm opacity-60 group-hover:opacity-100 transition duration-500" />
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden bg-slate-100 border-2 border-white shadow-xl">
                  <img
                    src={owner.image}
                    alt={owner.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Floating Verified Badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-3.5 py-1.5 rounded-full border border-orange-200 shadow-md flex items-center gap-1.5 whitespace-nowrap">
                  <ShieldCheck className="w-4 h-4 text-orange-600 shrink-0" />
                  <span className="text-[11px] font-bold text-slate-900 tracking-wide">Owner & Founder</span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-[11px] font-bold uppercase tracking-wider">
                  Agency Leadership
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {owner.name}
                </h3>
                <p className="text-sm font-semibold text-orange-600">
                  {owner.role} <span className="text-slate-300">|</span> <span className="text-slate-600 font-medium">{owner.title}</span>
                </p>
              </div>

              {/* Founder Quote */}
              <div className="p-4 bg-white/90 rounded-xl border-l-4 border-orange-500 border-y border-r border-slate-200 shadow-2xs">
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{owner.quote}"
                </p>
              </div>

              {/* Bio */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {owner.bio}
              </p>

              {/* Strategic Pillars */}
              <div className="pt-2">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Core Strategic Mandates:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {owner.strategicFocus.map((focus, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-white/80 px-2.5 py-1.5 rounded-lg border border-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                      <span className="line-clamp-1 font-medium">{focus}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Booking Action */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onBookConsultation()}
                  className="px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md hover:shadow-orange-500/25 flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Executive Consultation with Mr. Shuja Ali</span>
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm rounded-xl border border-slate-200 transition-colors cursor-pointer"
                >
                  Direct Inquiry
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Technical Leadership & Core Specialists */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-bold text-slate-900">Senior Leadership & Domain Specialists</h4>
            <span className="text-xs text-slate-500">Engineering, Growth & Systems Delivery</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {leadership.map((leader, idx) => (
              <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all space-y-3 flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    {leader.image ? (
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-orange-500/80 shadow-xs shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center font-bold text-orange-700 font-mono text-sm shrink-0">
                        {leader.initials}
                      </div>
                    )}
                    <span className="text-[10px] uppercase font-mono font-bold text-orange-700 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded">
                      {leader.tag}
                    </span>
                  </div>
                  <div>
                    <h5 className="font-bold text-base text-slate-900 leading-snug">{leader.name}</h5>
                    <span className="text-xs text-orange-600 font-semibold block">{leader.role}</span>
                    <span className="text-[11px] text-slate-400 font-mono mt-0.5 block line-clamp-1">{leader.focus}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{leader.bio}</p>
                </div>
                
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">InnovationLab Pod</span>
                  <button
                    onClick={() => onBookConsultation(`Inquiry with ${leader.name} (${leader.role})`)}
                    className="text-orange-600 hover:text-orange-700 font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Connect</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Consultation CTA */}
      <div className="p-8 sm:p-12 bg-slate-900 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold">Want to evaluate AI automation for your business?</h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Book a direct technical discussion with Mr. Shuja Ali and our principal architects to review system architecture and feasibility.
          </p>
        </div>
        <button
          onClick={() => onBookConsultation('Executive Discovery Inquiry (About Page)')}
          className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs sm:text-sm rounded-xl shrink-0 transition-colors flex items-center gap-2 cursor-pointer shadow-md"
        >
          <Calendar className="w-4 h-4" />
          <span>Book an Executive Discovery Call</span>
        </button>
      </div>

    </div>
  );
};
