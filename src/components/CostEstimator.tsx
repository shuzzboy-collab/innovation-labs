import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Clock, ShieldCheck, DollarSign, Calendar } from 'lucide-react';

interface CostEstimatorProps {
  onBookWithEstimate?: (summary: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onBookWithEstimate }) => {
  const [projectType, setProjectType] = useState<'single-agent' | 'multi-agent' | 'chatbot' | 'vision-ml' | 'enterprise'>('multi-agent');
  const [integrationScope, setIntegrationScope] = useState<'standard' | 'enterprise-crm' | 'complex-erp'>('enterprise-crm');
  const [dataVolume, setDataVolume] = useState<'low' | 'medium' | 'high'>('medium');
  const [slaTier, setSlaTier] = useState<'business' | 'enterprise' | 'regulated'>('enterprise');
  const [requireHumanInLoop, setRequireHumanInLoop] = useState(true);

  // Cost calculation matrix
  const baseRates = {
    'single-agent': { min: 18000, max: 28000, weeks: '4-6' },
    'multi-agent': { min: 38000, max: 58000, weeks: '7-10' },
    'chatbot': { min: 22000, max: 34000, weeks: '5-7' },
    'vision-ml': { min: 45000, max: 70000, weeks: '8-12' },
    'enterprise': { min: 85000, max: 140000, weeks: '12-16' },
  };

  const integrationMultipliers = {
    'standard': 1.0,
    'enterprise-crm': 1.25,
    'complex-erp': 1.55,
  };

  const slaMultipliers = {
    'business': 1.0,
    'enterprise': 1.2,
    'regulated': 1.45,
  };

  const base = baseRates[projectType];
  const mult = integrationMultipliers[integrationScope] * slaMultipliers[slaTier];
  const finalMin = Math.round((base.min * mult) / 1000) * 1000;
  const finalMax = Math.round((base.max * mult) / 1000) * 1000;

  const handleBook = () => {
    const summary = `${projectType.toUpperCase()} architecture with ${integrationScope} integrations and ${slaTier} SLA ($${finalMin.toLocaleString()} - $${finalMax.toLocaleString()})`;
    if (onBookWithEstimate) {
      onBookWithEstimate(summary);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-6 sm:p-8 lg:p-10">
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-semibold mb-3">
          <Calculator className="w-3.5 h-3.5" />
          Interactive Cost & Timeline Estimator
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          AI Project Investment & Timeline Calculator
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
          Configure your architectural parameters below to receive a realistic investment range, milestone breakdown, and estimated delivery timeline. All InnovationLab engagements include fixed-price delivery guarantees.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Step 1: Project Type */}
          <div>
            <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
              1. Project Architecture Scope
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { id: 'single-agent', label: 'Single Task Agent', desc: 'Dedicated autonomous bot (e.g. invoice parsing or ticketing)' },
                { id: 'multi-agent', label: 'Multi-Agent Hierarchy', desc: 'Supervisor + worker agents for cross-departmental workflows' },
                { id: 'chatbot', label: 'Enterprise RAG Chatbot', desc: 'Omnichannel customer support & employee knowledge assistant' },
                { id: 'vision-ml', label: 'Computer Vision / ML', desc: 'Defect detection, OCR, or time-series predictive modeling' },
                { id: 'enterprise', label: 'Full Enterprise AI Suite', desc: 'End-to-end cognitive automation across multiple business units' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setProjectType(item.id as any)}
                  className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                    projectType === item.id
                      ? 'border-orange-500 bg-orange-50/50 ring-1 ring-orange-500'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  } ${item.id === 'enterprise' ? 'sm:col-span-2' : ''}`}
                >
                  <div className="font-semibold text-xs sm:text-sm text-slate-900">{item.label}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 leading-normal">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: System Integrations */}
          <div>
            <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
              2. System Integration Complexity
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: 'standard', label: 'Standard REST', desc: '1-2 modern SaaS APIs' },
                { id: 'enterprise-crm', label: 'CRM / Databases', desc: 'Salesforce, HubSpot, SQL' },
                { id: 'complex-erp', label: 'ERP & Legacy', desc: 'SAP, NetSuite, On-Prem' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIntegrationScope(item.id as any)}
                  className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                    integrationScope === item.id
                      ? 'border-orange-500 bg-orange-50/50 ring-1 ring-orange-500'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="font-semibold text-xs text-slate-900">{item.label}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: SLA & Compliance */}
          <div>
            <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
              3. SLA & Compliance Standard
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: 'business', label: 'Business Tier', desc: '99.0% SLA, standard cloud' },
                { id: 'enterprise', label: 'Enterprise 24/7', desc: '99.5% SLA, dedicated VPC' },
                { id: 'regulated', label: 'Regulated / HIPAA', desc: 'SOC2, HIPAA, air-gapped' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSlaTier(item.id as any)}
                  className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                    slaTier === item.id
                      ? 'border-orange-500 bg-orange-50/50 ring-1 ring-orange-500'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="font-semibold text-xs text-slate-900">{item.label}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Checkbox: Human in the loop */}
          <div className="pt-2">
            <label className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer">
              <input
                type="checkbox"
                checked={requireHumanInLoop}
                onChange={(e) => setRequireHumanInLoop(e.target.checked)}
                className="w-4 h-4 text-orange-600 rounded border-slate-300 focus:ring-orange-500"
              />
              <div>
                <span className="text-xs font-semibold text-slate-900 block">Include Supervisor Cockpit & Human-in-the-Loop UI</span>
                <span className="text-[11px] text-slate-500 block">Enables manager review queues, audit logs, and manual override controls</span>
              </div>
            </label>
          </div>

        </div>

        {/* Results Card Column */}
        <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-7 shadow-lg border border-slate-800">
          <div className="border-b border-slate-800 pb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">Estimated Project Investment</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white">
                ${finalMin.toLocaleString()} – ${finalMax.toLocaleString()}
              </span>
            </div>
            <div className="mt-2 flex items-center gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-orange-400" />
                <span>{base.weeks} Weeks Delivery</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Fixed-Fee Contract</span>
              </div>
            </div>
          </div>

          {/* Included Deliverables */}
          <div className="py-5 border-b border-slate-800 space-y-2.5 text-xs">
            <span className="font-semibold text-slate-200 block uppercase tracking-wider text-[11px]">Included in Engagement</span>
            <div className="flex items-start gap-2 text-slate-300">
              <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span>Dedicated Senior AI Architect & ML Engineer</span>
            </div>
            <div className="flex items-start gap-2 text-slate-300">
              <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span>Full source code ownership & complete IP assignment</span>
            </div>
            <div className="flex items-start gap-2 text-slate-300">
              <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span>Deterministic guardrail benchmarks with &gt; 99% accuracy SLA</span>
            </div>
            <div className="flex items-start gap-2 text-slate-300">
              <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span>60-Day post-deployment production hypercare support</span>
            </div>
          </div>

          {/* Milestone Schedule */}
          <div className="py-4 border-b border-slate-800 text-xs space-y-2">
            <div className="flex justify-between text-slate-400">
              <span>Phase 1: Discovery & Architecture</span>
              <span className="font-mono text-slate-200">20%</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Phase 2: Working Agent Prototype</span>
              <span className="font-mono text-slate-200">40%</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Phase 3: Integration & UAT Testing</span>
              <span className="font-mono text-slate-200">30%</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Phase 4: Production Cutover</span>
              <span className="font-mono text-slate-200">10%</span>
            </div>
          </div>

          <div className="pt-5">
            <button
              onClick={handleBook}
              className="w-full py-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Call for This Scope</span>
            </button>
            <p className="text-[11px] text-slate-400 text-center mt-2.5">
              Preliminary calculation. Formal SOW provided after technical discovery.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
