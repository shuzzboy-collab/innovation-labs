import React, { useState } from 'react';
import { Sparkles, Layers, ArrowRight, CheckCircle2, Clock, DollarSign, ShieldAlert, Cpu, RefreshCw, Copy, Check } from 'lucide-react';
import { SolutionBlueprint } from '../types';

interface SolutionGeneratorProps {
  onBookConsultationWithSolution?: (solutionName: string) => void;
}

export const SolutionGenerator: React.FC<SolutionGeneratorProps> = ({
  onBookConsultationWithSolution,
}) => {
  const [businessType, setBusinessType] = useState('Financial Services & Fintech');
  const [challenge, setChallenge] = useState('Our compliance team spends 40+ hours weekly manually reviewing vendor invoices, cross-checking tax IDs, and verifying bank routing details before issuing approvals.');
  const [targetGoal, setTargetGoal] = useState('Reduce manual invoice review time by 70% and prevent fraudulent payment routing.');
  const [budget, setBudget] = useState('$35,000 - $60,000');
  const [timeline, setTimeline] = useState('1-3 Months');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [result, setResult] = useState<SolutionBlueprint | null>(null);

  const presets = [
    {
      title: 'Invoice & Vendor Audit',
      type: 'Finance & Accounting',
      challenge: 'Manual verification of supplier invoices, line-item matching against purchase orders, and tax compliance checks.',
      goal: 'Automate 80% of straight-through invoice matching with human review on exceptions.'
    },
    {
      title: 'Customer Operations Copilot',
      type: 'E-Commerce & Retail',
      challenge: 'High customer support ticket volume regarding delivery delays, returns, and damaged product claims during peak sales seasons.',
      goal: 'Resolve 65%+ of tier-1 support requests autonomously across WhatsApp and Zendesk in under 1 minute.'
    },
    {
      title: 'Medical Claims Triaging',
      type: 'Healthcare & Life Sciences',
      challenge: 'Unstructured doctor clinical notes must be extracted and mapped to ICD-10 diagnostic codes for insurance approval.',
      goal: 'Accelerate prior-authorization turnaround from 12 days to under 48 hours without coding hallucination.'
    },
    {
      title: 'Freight Demurrage Monitoring',
      type: 'Logistics & Supply Chain',
      challenge: 'Lack of real-time visibility into terminal port gate-holds leads to costly container detention fines.',
      goal: 'Predict container hold-ups 48 hours ahead and auto-schedule drayage dispatch.'
    }
  ];

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!challenge.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/solution-generator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessType,
          challenge,
          goal: targetGoal,
          budget,
          timeline
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate solution blueprint');
      }

      const resData = await response.json();
      setResult(resData.data);
    } catch (err: any) {
      console.error(err);
      setError('Unable to contact the AI generation engine. Please check network connection or try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!result) return;
    const summaryText = `INNOVATIONLAB AI SOLUTION BLUEPRINT
Solution: ${result.solutionName}
Executive Summary: ${result.executiveSummary}

Projected Impact:
- Time Savings: ${result.projectedBusinessImpact.timeSavings}
- Cost Reduction: ${result.projectedBusinessImpact.costReduction}
- Payback: ${result.projectedBusinessImpact.paybackPeriod}
- Accuracy SLA: ${result.projectedBusinessImpact.accuracyGuarantee}

Recommended Next Step: ${result.recommendedNextStep}`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl border border-neutral-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_40px_-10px_rgba(234,88,12,0.08)] transition-all duration-300 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
      {/* Subtle Warm Backdrop Lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-100/40 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-3xl mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-semibold mb-3 border border-orange-200/60 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-orange-600" />
          Interactive AI Solution Generator
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Describe Your Business Challenge. Get an Architecture Blueprint.
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
          Input your operational bottlenecks below. Our AI systems architect will analyze your requirements and formulate a tailored multi-agent automation roadmap with concrete deliverables.
        </p>

        {/* Quick Presets with Enhanced Hover Feedback */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-500 py-1 font-medium">Or try an industry scenario:</span>
          {presets.map((preset, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setBusinessType(preset.type);
                setChallenge(preset.challenge);
                setTargetGoal(preset.goal);
              }}
              className="text-xs px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-300 hover:shadow-2xs active:scale-95 text-slate-700 border border-slate-200/90 transition-all duration-200 cursor-pointer font-medium hover:-translate-y-0.5"
            >
              {preset.title}
            </button>
          ))}
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={handleGenerate} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Industry / Business Domain
            </label>
            <select
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
            >
              <option value="Financial Services & Fintech">Financial Services & Banking</option>
              <option value="Healthcare & Life Sciences">Healthcare & Life Sciences</option>
              <option value="Logistics & Supply Chain">Supply Chain & Logistics</option>
              <option value="E-Commerce & Retail">E-Commerce & Consumer Retail</option>
              <option value="Legal & Regulatory Compliance">Legal & Regulatory Practices</option>
              <option value="B2B SaaS & Technology">B2B SaaS & Tech Enterprise</option>
              <option value="Manufacturing & Quality Control">Manufacturing & Industrial</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Desired Implementation Timeline
            </label>
            <select
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
            >
              <option value="Rapid Pilot (< 4 Weeks)">Rapid Pilot (&lt; 4 Weeks)</option>
              <option value="1-3 Months">1-3 Months (Standard Production MVP)</option>
              <option value="3-6 Months">3-6 Months (Full Enterprise Transformation)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
            Current Operational Challenge / Manual Bottleneck <span className="text-orange-600">*</span>
          </label>
          <textarea
            rows={3}
            value={challenge}
            onChange={(e) => setChallenge(e.target.value)}
            placeholder="Describe the repetitive manual process, data sources, errors, or customer delays your team faces..."
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Primary Business Objective
            </label>
            <input
              type="text"
              value={targetGoal}
              onChange={(e) => setTargetGoal(e.target.value)}
              placeholder="e.g. Cut review time by 60%, eliminate data entry errors"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Target Budget Allocation
            </label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
            >
              <option value="$15,000 - $35,000">$15,000 - $35,000 (Pilot Scope)</option>
              <option value="$35,000 - $75,000">$35,000 - $75,000 (Production System)</option>
              <option value="$75,000 - $150,000+">$75,000 - $150,000+ (Multi-Agent Architecture)</option>
              <option value="Flexible / Undetermined">Flexible / Undetermined</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <button
            type="submit"
            disabled={loading || !challenge.trim()}
            className="px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 disabled:from-slate-300 disabled:to-slate-400 text-white text-sm font-semibold rounded-xl shadow-sm btn-hover-lift flex items-center gap-2 cursor-pointer"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Architecting AI Blueprint...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generate Solution Blueprint</span>
              </>
            )}
          </button>

          <span className="text-xs text-slate-500 hidden sm:inline">
            Powered by InnovationLab Architecture Engine
          </span>
        </div>
      </form>

      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Generated Blueprint Output */}
      {result && (
        <div className="mt-10 pt-8 border-t border-slate-200 space-y-8 animate-in fade-in-50 duration-300">
          
          {/* Header & Impact Bar */}
          <div className="p-6 bg-gradient-to-br from-orange-50/60 via-amber-50/30 to-white rounded-xl border border-orange-200/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-orange-200/60">
              <div>
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Architectural Recommendation</span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">{result.solutionName}</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Spec'}</span>
                </button>
                {onBookConsultationWithSolution && (
                  <button
                    type="button"
                    onClick={() => onBookConsultationWithSolution(result.solutionName)}
                    className="px-4 py-1.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors cursor-pointer"
                  >
                    Schedule Implementation Call
                  </button>
                )}
              </div>
            </div>

            <p className="text-slate-700 text-sm sm:text-base mt-4 leading-relaxed">
              {result.executiveSummary}
            </p>

            {/* Projected Impact Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              <div className="p-3 bg-white rounded-lg border border-orange-100 shadow-2xs">
                <span className="text-xs text-slate-500 font-medium">Time Savings</span>
                <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">{result.projectedBusinessImpact.timeSavings}</div>
              </div>
              <div className="p-3 bg-white rounded-lg border border-orange-100 shadow-2xs">
                <span className="text-xs text-slate-500 font-medium">Cost Reduction</span>
                <div className="text-base sm:text-lg font-bold text-orange-600 mt-0.5">{result.projectedBusinessImpact.costReduction}</div>
              </div>
              <div className="p-3 bg-white rounded-lg border border-orange-100 shadow-2xs">
                <span className="text-xs text-slate-500 font-medium">Payback Period</span>
                <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">{result.projectedBusinessImpact.paybackPeriod}</div>
              </div>
              <div className="p-3 bg-white rounded-lg border border-orange-100 shadow-2xs">
                <span className="text-xs text-slate-500 font-medium">Accuracy Guarantee</span>
                <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">{result.projectedBusinessImpact.accuracyGuarantee}</div>
              </div>
            </div>
          </div>

          {/* Agent Workflow Orchestration */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-orange-600" />
              Proposed Autonomous Agent Pipeline
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {result.agentWorkflows.map((agent, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-semibold text-orange-700 bg-orange-100/60 inline-block px-2 py-0.5 rounded mb-2">
                      Agent 0{i + 1}
                    </div>
                    <h5 className="font-semibold text-slate-900 text-sm">{agent.agentName}</h5>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{agent.role}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] space-y-1">
                    <div><span className="text-slate-400 font-medium">Trigger:</span> <span className="text-slate-700">{agent.trigger}</span></div>
                    <div><span className="text-slate-400 font-medium">Output:</span> <span className="text-slate-700">{agent.output}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Layers */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-orange-600" />
              Technical Stack & System Layers
            </h4>
            <div className="space-y-3">
              {result.recommendedArchitecture.map((layer, idx) => (
                <div key={idx} className="p-3.5 bg-white rounded-lg border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
                  <div className="sm:w-1/3">
                    <span className="font-semibold text-slate-900 block">{layer.layer}</span>
                    <span className="text-xs font-mono text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded">{layer.technology}</span>
                  </div>
                  <div className="sm:w-2/3 text-xs sm:text-sm text-slate-600 leading-normal">
                    {layer.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Phase Implementation Roadmap */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-600" />
              Phased Implementation Roadmap
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {result.implementationRoadmap.map((item, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50/80 rounded-lg border border-slate-200 text-xs">
                  <div className="font-semibold text-slate-900 mb-1">{item.phase}</div>
                  <div className="text-orange-600 font-medium mb-1.5">{item.duration}</div>
                  <div className="text-slate-600 leading-relaxed">{item.deliverable}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps CTA */}
          <div className="p-4 bg-slate-900 text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-orange-400 font-semibold uppercase tracking-wider">Next Step</span>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">{result.recommendedNextStep}</p>
            </div>
            {onBookConsultationWithSolution && (
              <button
                type="button"
                onClick={() => onBookConsultationWithSolution(result.solutionName)}
                className="px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold rounded-lg shrink-0 transition-colors cursor-pointer"
              >
                Review with AI Architect
              </button>
            )}
          </div>

        </div>
      )}
    </div>
  );
};
