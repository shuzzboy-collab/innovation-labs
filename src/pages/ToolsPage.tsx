import React, { useState } from 'react';
import { CostEstimator } from '../components/CostEstimator';
import { RoiCalculator } from '../components/RoiCalculator';
import { BusinessAudit } from '../components/BusinessAudit';
import { ProposalGenerator } from '../components/ProposalGenerator';
import { Calculator, TrendingUp, ShieldCheck, FileText, Calendar } from 'lucide-react';

interface ToolsPageProps {
  onBookConsultation: (note?: string) => void;
}

export const ToolsPage: React.FC<ToolsPageProps> = ({ onBookConsultation }) => {
  const [activeTool, setActiveTool] = useState<'estimator' | 'roi' | 'audit' | 'proposal'>('estimator');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-semibold">
          Decision Support & Planning Suite
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Interactive AI Strategy & Assessment Tools
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Use our interactive enterprise calculators to estimate budget requirements, calculate multi-year financial ROI, audit readiness vulnerabilities, and generate an immediate technical proposal draft.
        </p>
      </div>

      {/* Tool Selector Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          {
            id: 'estimator',
            label: 'Cost & Timeline Estimator',
            desc: 'Forecast budget and delivery weeks',
            icon: Calculator,
          },
          {
            id: 'roi',
            label: 'Business ROI Calculator',
            desc: 'Estimate hours & cost reductions',
            icon: TrendingUp,
          },
          {
            id: 'audit',
            label: 'AI Business Readiness Audit',
            desc: 'Diagnose 5 operational pillars',
            icon: ShieldCheck,
          },
          {
            id: 'proposal',
            label: 'AI Proposal Generator',
            desc: 'Create an instant SOW draft',
            icon: FileText,
          },
        ].map((tool) => {
          const Icon = tool.icon;
          const isSelected = activeTool === tool.id;
          return (
            <button
              key={tool.id}
              type="button"
              onClick={() => setActiveTool(tool.id as any)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer card-hover-elevate group ${
                isSelected
                  ? 'border-orange-500 bg-orange-50/70 shadow-xs ring-1 ring-orange-500'
                  : 'border-slate-200 hover:border-orange-300 hover:bg-orange-50/20 bg-white'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 transition-transform duration-200 group-hover:scale-110 ${
                isSelected ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-700 group-hover:bg-orange-100 group-hover:text-orange-700'
              }`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-orange-600 transition-colors">{tool.label}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{tool.desc}</div>
            </button>
          );
        })}
      </div>

      {/* Active Tool View */}
      <div className="animate-in fade-in-50 duration-200">
        {activeTool === 'estimator' && (
          <CostEstimator onBookWithEstimate={(summary) => onBookConsultation(summary)} />
        )}
        {activeTool === 'roi' && (
          <RoiCalculator onBookConsultation={() => onBookConsultation('Inquiry from ROI Calculator')} />
        )}
        {activeTool === 'audit' && (
          <BusinessAudit
            onBookConsultationWithAudit={(score, tier) =>
              onBookConsultation(`AI Readiness Audit Score: ${score}/100 (${tier})`)
            }
          />
        )}
        {activeTool === 'proposal' && (
          <ProposalGenerator
            onBookKickoff={(propId) => onBookConsultation(`Discussion on Generated Proposal Ref: ${propId}`)}
          />
        )}
      </div>

    </div>
  );
};
