import React, { useState } from 'react';
import { HeroSection } from '../components/HeroSection';
import { SolutionGenerator } from '../components/SolutionGenerator';
import { WorkflowComparison } from '../components/WorkflowComparison';
import { LiveDemonstrations } from '../components/LiveDemonstrations';
import { InteractiveAssistant } from '../components/InteractiveAssistant';
import { SERVICES, CASE_STUDIES } from '../data/mockData';
import { Bot, MessageSquareCode, Cpu, Sparkles, TrendingUp, FileText, Eye, Layers, ArrowRight, CheckCircle2, ShieldCheck, Calendar, Star, Zap, Lock, Terminal, Users } from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onBookConsultation: (serviceOrNote?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onBookConsultation }) => {
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string>('All');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot className="w-5 h-5 text-orange-600" />;
      case 'MessageSquareCode': return <MessageSquareCode className="w-5 h-5 text-orange-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-orange-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-orange-600" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-orange-600" />;
      case 'FileText': return <FileText className="w-5 h-5 text-orange-600" />;
      case 'Eye': return <Eye className="w-5 h-5 text-orange-600" />;
      default: return <Layers className="w-5 h-5 text-orange-600" />;
    }
  };

  const serviceCategories = ['All', 'Agents & Bots', 'Automation', 'Generative & Vision'];

  const filteredServices = SERVICES.filter((s) => {
    if (selectedServiceCategory === 'All') return true;
    if (selectedServiceCategory === 'Agents & Bots') return s.id === 'ai-agents' || s.id === 'ai-chatbots';
    if (selectedServiceCategory === 'Automation') return s.id === 'process-automation' || s.id === 'custom-ai';
    if (selectedServiceCategory === 'Generative & Vision') return s.id === 'generative-ai' || s.id === 'computer-vision' || s.id === 'machine-learning' || s.id === 'nlp-solutions';
    return true;
  });

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* 1. Hero Section with Original Banner Directly Below Navbar */}
      <HeroSection
        onExploreSolutions={() => onNavigate('services')}
        onBookConsultation={() => onBookConsultation()}
        onOpenAudit={() => onNavigate('tools')}
      />

      {/* 2. Interactive AI Solution Generator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SolutionGenerator
          onBookConsultationWithSolution={(name) => onBookConsultation(`Proposed Architecture: ${name}`)}
        />
      </section>

      {/* 3. About InnovationLab Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-orange-50/20 to-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 lg:p-16 shadow-xs">
          <div className="absolute top-0 right-0 w-96 h-96 bg-circuit-dots opacity-30 pointer-events-none" />
          
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-100/80 border border-orange-200 text-orange-800 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
                About InnovationLab
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Engineering Practical AI Systems for Measurable Business Growth.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded with a mission to eliminate tedious back-office manual labor, InnovationLab designs and deploys autonomous multi-agent systems, intelligent conversational bots, and cognitive process automation pipelines.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We believe that modern enterprise AI is not about generic chat interfaces or speculative experiments. It is about deterministic, reliable software agents that solve specific, expensive business challenges with verifiable mathematical accuracy.
              </p>

              {/* High-Impact Engineering Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-white/60 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
                  <div>
                    <span className="text-xs sm:text-sm text-slate-900 font-semibold block">Deterministic Guardrails</span>
                    <span className="text-[11px] text-slate-500">Zero-hallucination verification gates</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-white/60 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
                  <div>
                    <span className="text-xs sm:text-sm text-slate-900 font-semibold block">Enterprise SOC2 & HIPAA</span>
                    <span className="text-[11px] text-slate-500">Private VPC & isolated deployment</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-white/60 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
                  <div>
                    <span className="text-xs sm:text-sm text-slate-900 font-semibold block">Human-in-the-Loop Cockpit</span>
                    <span className="text-[11px] text-slate-500">Supervisor approval on edge-cases</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-white/60 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
                  <div>
                    <span className="text-xs sm:text-sm text-slate-900 font-semibold block">Fast ROI Payback (&lt; 6 Mos)</span>
                    <span className="text-[11px] text-slate-500">Fixed-price contracts with SLA</span>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onNavigate('about')}
                  className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 hover:underline cursor-pointer"
                >
                  <span>Learn more about our agency mission & team</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-3.5">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between pb-2 border-b border-slate-100">
                <span>Why Enterprises Partner With Us</span>
                <span className="text-[10px] text-orange-600 font-mono font-semibold">TRUST PROTOCOL</span>
              </div>
              <div className="p-4 bg-orange-50/50 hover:bg-orange-50 rounded-xl border border-orange-100 hover:border-orange-300 transition-all duration-200 hover:-translate-y-0.5 shadow-2xs hover:shadow-xs">
                <div className="text-sm font-bold text-slate-900">Customized, Not Off-The-Shelf</div>
                <p className="text-xs text-slate-600 mt-1">Every agent is trained on your exact SOPs, ERP data, and business rules.</p>
              </div>
              <div className="p-4 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-200 hover:-translate-y-0.5 shadow-2xs hover:shadow-xs">
                <div className="text-sm font-bold text-slate-900">Zero Data Training Leakage</div>
                <p className="text-xs text-slate-600 mt-1">Your corporate data is never retained or used to train third-party foundation models.</p>
              </div>
              <div className="p-4 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-200 hover:-translate-y-0.5 shadow-2xs hover:shadow-xs">
                <div className="text-sm font-bold text-slate-900">Fixed-Price Delivery SLAs</div>
                <p className="text-xs text-slate-600 mt-1">Predictable budgets, transparent milestone gating, and clear ownership handover.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Core AI Services Grid with Category Segment Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5 text-orange-600" />
            Enterprise Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive AI & Automation Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From autonomous workflow agents to deep computer vision, we provide end-to-end engineering to modernize enterprise operations.
          </p>

          {/* Interactive Category Segment Control */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-100/80 rounded-xl max-w-md mx-auto border border-slate-200/80">
            {serviceCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedServiceCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedServiceCategory === cat
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredServices.map((srv, idx) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between card-hover-elevate group cursor-pointer relative overflow-hidden"
            >
              {/* Subtle Corner Number Indicator */}
              <div className="absolute top-4 right-4 text-[10px] font-mono font-bold text-slate-400 group-hover:text-orange-600 transition-colors">
                0{idx + 1}
              </div>

              <div>
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-100/90 group-hover:shadow-xs">
                  {getIcon(srv.iconName)}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-orange-600 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {srv.shortDescription}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100 mb-4">
                  {srv.capabilities.slice(0, 2).map((cap, i) => (
                    <div key={i} className="text-[11px] text-slate-700 flex items-start gap-1.5">
                      <span className="text-orange-500 font-bold shrink-0">·</span>
                      <span className="line-clamp-1">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Specs</span>
                  <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => onBookConsultation(`Interest in Service: ${srv.title}`)}
                  className="text-xs px-2.5 py-1 bg-slate-100 hover:bg-orange-600 hover:text-white rounded-md text-slate-700 font-medium transition-all active:scale-95 cursor-pointer"
                >
                  Scope Call
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Before and After Workflow Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WorkflowComparison />
      </section>

      {/* 6. Featured Case Studies & Quantified Results */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-semibold mb-2">
              <TrendingUp className="w-3.5 h-3.5 text-orange-600" />
              Verifiable Evidence
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Client Success Stories
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Real enterprise deployments with independently audited business outcomes.
            </p>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="group text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 cursor-pointer shrink-0 transition-colors"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between card-hover-elevate group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-orange-700 bg-orange-50 group-hover:bg-orange-100 px-2 py-0.5 rounded transition-colors">{cs.industry}</span>
                  <span className="font-mono text-slate-600 font-semibold">{cs.client}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-2 leading-snug group-hover:text-orange-600 transition-colors">
                  {cs.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {cs.challenge}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 my-5 p-3.5 bg-slate-50 group-hover:bg-orange-50/40 rounded-xl border border-slate-200/80 group-hover:border-orange-200 transition-colors">
                  {cs.results.slice(0, 2).map((res, idx) => (
                    <div key={idx}>
                      <div className="text-lg sm:text-xl font-bold text-orange-600 font-mono tabular-nums">{res.metric}</div>
                      <div className="text-[11px] text-slate-600 font-medium leading-tight">{res.label}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial Quote */}
                {cs.testimonial && (
                  <div className="p-3 bg-orange-50/50 border-l-2 border-orange-500 rounded-r-lg text-xs italic text-slate-700 leading-normal mb-4">
                    "{cs.testimonial.quote}"
                    <div className="font-bold not-italic text-slate-900 text-[11px] mt-1.5">
                      — {cs.testimonial.author}, {cs.testimonial.role}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono text-[11px]">Core: {cs.technologies[0]}</span>
                <button
                  onClick={() => onNavigate('projects')}
                  className="font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>Full Case Study</span>
                  <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Innovation Lab Interactive Sandbox Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LiveDemonstrations />
      </section>

      {/* 8. Interactive AI Assistant Embedded Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveAssistant onOpenConsultation={() => onBookConsultation('Inquiry via AI Assistant')} />
      </section>

      {/* 9. Executive Leadership & Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-circuit-dots opacity-15 pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="relative max-w-3xl mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-semibold">
              <Users className="w-3.5 h-3.5 text-orange-400" />
              Leadership & Engineering Team
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Led by Practitioners in Autonomous Enterprise AI
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              At InnovationLab, every engagement is guided by agency founder Mr. Shuja Ali and seasoned systems architects, delivering guaranteed execution and strict enterprise confidentiality.
            </p>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Owner Feature Card */}
            <div className="lg:col-span-5 bg-slate-850 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-sm shadow-inner">
              <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                <div className="relative shrink-0 group">
                  <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-orange-500/80 shadow-lg shadow-orange-500/20 bg-slate-950">
                    <img
                      src="/assets/aistudio/WhatsApp_Image_2026-11-09_at_11.48.58_PM_e69ebc40.jpeg"
                      alt="Mr. Shuja Ali"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-orange-600 text-white text-[10px] font-bold tracking-wide uppercase shadow-sm whitespace-nowrap">
                    Owner & Founder
                  </div>
                </div>

                <div className="space-y-2 text-center sm:text-left">
                  <div>
                    <div className="inline-block text-[11px] font-mono text-orange-400 font-bold uppercase tracking-wider mb-0.5">
                      Agency Founder & Principal
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Mr. Shuja Ali
                    </h3>
                    <p className="text-xs text-slate-300 font-medium">
                      Owner & Founder, InnovationLab
                    </p>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Dedicated to bridging high-level AI research with pragmatic enterprise operations. Mr. Shuja Ali leads InnovationLab with an unwavering commitment to mathematical accuracy, custom multi-agent robotics, and zero data leakage.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1 justify-center sm:justify-start">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-700/80 text-slate-200 border border-slate-600">Enterprise AI Strategy</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-700/80 text-slate-200 border border-slate-600">Autonomous Agents</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-700/80 text-slate-200 border border-slate-600">Deterministic SLAs</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Direct architectural oversight on every client engagement</span>
                </div>
                <button
                  onClick={() => onBookConsultation('Executive Discovery with Mr. Shuja Ali')}
                  className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold rounded-xl transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book with Mr. Shuja Ali</span>
                </button>
              </div>
            </div>

            {/* Senior Leadership & Specialist Pod Cards */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  {
                    name: 'Mr. Shahmir Khalid',
                    role: 'Sales Officer',
                    image: '/assets/aistudio/WhatsApp_Image_2026-11-07_at_1.42.36_AM__1__ea6a8442.jpeg',
                    desc: 'Consultative solution discovery and high-ROI AI automation contract structuring.',
                    tag: 'Sales Officer',
                  },
                  {
                    name: 'Miss Bushra',
                    role: 'Frontend Developer & Sales Assistant',
                    image: '/assets/aistudio/WhatsApp_Image_2026-11-07_at_1.42.35_AM_3a2b023c.jpeg',
                    desc: 'Interactive AI dashboards and executive client sales demonstrations.',
                    tag: 'Frontend & Sales',
                  },
                  {
                    name: 'Muhammad Aman',
                    role: 'Lead Generation Expert',
                    image: '/assets/aistudio/WhatsApp_Image_2026-11-07_at_1.56.01_AM_36eaef5f.jpeg',
                    desc: 'Automated B2B pipeline acceleration and AI prospect qualification systems.',
                    tag: 'Lead Gen',
                  },
                  {
                    name: 'Mr. Muhammad Hasnain',
                    role: 'Social Media & Marketing Adviser',
                    image: '/assets/aistudio/WhatsApp_Image_2026-11-07_at_1.42.36_AM_80f07da4.jpeg',
                    desc: 'Global brand visibility, visual content direction, and marketing campaigns.',
                    tag: 'Marketing',
                  },
                  {
                    name: 'Mr. Ariyan',
                    role: 'Senior Graphic Designer & Video Editor',
                    image: '/assets/aistudio/Gemini_Generated_Image_ngcfnngcfnngcfnn_c74ca045.jfif',
                    desc: 'Multimedia design, high-impact motion storytelling, and enterprise video assets.',
                    tag: 'Design & Video',
                  },
                  {
                    name: 'Miss Faiza Rehman',
                    role: 'Graphic Designer',
                    image: '/assets/aistudio/WhatsApp_Image_2026-11-07_at_1.42.36_AM__2__e9f656d4.jpeg',
                    desc: 'Creative brand identity, UI design collateral, and visual presentation systems.',
                    tag: 'Design',
                  },
                ].map((member, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl border transition-all duration-200 bg-gradient-to-r from-orange-950/40 via-slate-800/90 to-slate-800/70 border-orange-500/50 shadow-xs hover:border-orange-400"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="relative w-11 h-11 rounded-xl overflow-hidden border-2 border-orange-500/80 shadow-xs shrink-0">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className="text-xs sm:text-sm font-bold text-white truncate">{member.name}</h4>
                          <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded shrink-0 text-orange-300 bg-orange-600/30 border border-orange-500/40">
                            {member.tag}
                          </span>
                        </div>
                        <div className="text-[11px] text-orange-400 font-medium truncate">{member.role}</div>
                        <p className="text-[10px] text-slate-300 leading-tight mt-1 line-clamp-2">{member.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-2 text-center">
                <button
                  onClick={() => onNavigate('about')}
                  className="text-xs text-orange-400 hover:text-orange-300 font-semibold inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Learn more about our agency mission and team culture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. Final CTA Strip with Circuit Pattern & Shimmer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute inset-0 bg-circuit-dots opacity-20 pointer-events-none" />
          
          <div className="relative space-y-2 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-orange-100 font-bold flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-orange-200" />
              Ready to Accelerate Your Operations?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Let's Turn Your Bottlenecks into Autonomous AI Systems.
            </h2>
            <p className="text-xs sm:text-sm text-orange-100 leading-relaxed font-normal">
              Schedule a 30-minute discovery consultation with an InnovationLab Lead Architect. We will review your systems and map out feasible, high-ROI automation vectors.
            </p>
          </div>

          <div className="relative flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onBookConsultation('Homepage Banner CTA')}
              className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs sm:text-sm rounded-xl shadow-md btn-hover-lift btn-shimmer flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-orange-600" />
              <span>Book a Consultation</span>
            </button>
            <button
              onClick={() => onNavigate('tools')}
              className="px-6 py-3.5 bg-orange-700/60 hover:bg-orange-700 text-white font-semibold text-xs sm:text-sm rounded-xl border border-orange-400/40 hover:border-orange-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore AI Tools</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
