import React, { useState } from 'react';
import { AGENT_ARCHITECTURES } from '../data/mockData';
import { Bot, Cpu, Zap, ShieldCheck, CheckCircle2, ArrowRight, Play, RefreshCw, Terminal, Layers } from 'lucide-react';

interface AgentsBotsPageProps {
  onBookConsultation: (agentName?: string) => void;
  onNavigate: (tab: string) => void;
}

export const AgentsBotsPage: React.FC<AgentsBotsPageProps> = ({ onBookConsultation, onNavigate }) => {
  const [selectedAgentId, setSelectedAgentId] = useState<string>(AGENT_ARCHITECTURES[0].id);

  const activeAgent = AGENT_ARCHITECTURES.find((a) => a.id === selectedAgentId) || AGENT_ARCHITECTURES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-semibold">
          Autonomous Systems & Bot Architectures
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Next-Generation AI Agents & Autonomous Bots
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Move beyond brittle chat wrappers. We architect autonomous multi-agent hierarchies capable of executing real multi-step API transactions, self-correcting logic breaks, and respecting deterministic safety thresholds.
        </p>
      </div>

      {/* Agent Selector Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {AGENT_ARCHITECTURES.map((arch) => {
          const isSelected = selectedAgentId === arch.id;
          return (
            <button
              key={arch.id}
              type="button"
              onClick={() => setSelectedAgentId(arch.id)}
              className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between card-hover-elevate ${
                isSelected
                  ? 'border-orange-500 bg-orange-50/60 shadow-xs ring-1 ring-orange-500'
                  : 'border-slate-200 hover:border-orange-300 hover:bg-orange-50/20 bg-white'
              }`}
            >
              <div>
                <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider block mb-1">
                  {arch.category}
                </span>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-2 leading-snug">
                  {arch.name}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {arch.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-slate-500">{arch.latencySla}</span>
                {isSelected && <ArrowRight className="w-3.5 h-3.5 text-orange-600" />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Agent Architecture Specification */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 lg:p-10 space-y-8 animate-in fade-in-50">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
          <div>
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">ARCHITECTURE BLUEPRINT</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">{activeAgent.name}</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">{activeAgent.useCase}</p>
          </div>
          <button
            onClick={() => onBookConsultation(`Deploy Architecture: ${activeAgent.name}`)}
            className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-xs flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Deploy This Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {activeAgent.description}
        </p>

        {/* SLA & Confidence Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-xs text-slate-500 font-medium">Latency Budget SLA</span>
            <div className="text-xl font-bold font-mono text-slate-900 mt-1">{activeAgent.latencySla}</div>
            <p className="text-[11px] text-slate-500 mt-0.5">Streaming token processing with parallel tool calling</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-xs text-slate-500 font-medium">Task Compliance SLA</span>
            <div className="text-xl font-bold font-mono text-orange-600 mt-1">{activeAgent.accuracySla}</div>
            <p className="text-[11px] text-slate-500 mt-0.5">Automated human escalation threshold below 99%</p>
          </div>
        </div>

        {/* Step-by-Step Execution Pipeline */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-4 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-orange-600" />
            Deterministic Execution Pipeline (Supervisor Flow)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {activeAgent.workflowSteps.map((step, idx) => (
              <div key={idx} className="p-4 bg-slate-50/80 rounded-xl border border-slate-200 text-xs">
                <span className="font-mono font-bold text-orange-600 text-xs block mb-1">
                  STAGE 0{idx + 1}
                </span>
                <span className="font-semibold text-slate-900 block leading-snug">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Integrated Tools */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-orange-600" />
            Connected Enterprise Tools & APIs
          </h3>
          <div className="flex flex-wrap gap-2">
            {activeAgent.toolsIntegrated.map((tool, i) => (
              <span key={i} className="px-3 py-1.5 bg-orange-50 border border-orange-200 rounded-lg text-xs font-semibold text-orange-900">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-500">
            All agents include supervisor cockpits and full source code handover.
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => onNavigate('tools')}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Estimate Timeline
            </button>
            <button
              onClick={() => onBookConsultation(`Technical Scoping: ${activeAgent.name}`)}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Book Technical Review
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
