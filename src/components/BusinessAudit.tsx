import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, RefreshCw, Sparkles, Calendar } from 'lucide-react';

interface BusinessAuditProps {
  onBookConsultationWithAudit?: (score: number, readinessTier: string) => void;
}

export const BusinessAudit: React.FC<BusinessAuditProps> = ({ onBookConsultationWithAudit }) => {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({
    standardization: 2,
    dataInfrastructure: 3,
    apiReadiness: 3,
    complianceRisk: 2,
    teamCapacity: 3,
  });

  const questions = [
    {
      id: 'standardization',
      title: 'Workflow Standardization',
      question: 'How documented and standardized are your key back-office business processes?',
      options: [
        { label: 'Informal / Tribal Knowledge (mostly in employee heads)', score: 1 },
        { label: 'Partially documented SOPs with frequent manual exceptions', score: 2 },
        { label: 'Well-documented standardized workflows with clear step rules', score: 3 },
        { label: 'Rigid, codified processes with existing digital audit trails', score: 4 },
      ]
    },
    {
      id: 'dataInfrastructure',
      title: 'Data Accessibility & Cleanliness',
      question: 'Where does the primary input data for your target workflows reside?',
      options: [
        { label: 'Scanned paper PDFs, physical faxes, or unstructured email threads', score: 1 },
        { label: 'Mixed spreadsheets and semi-structured shared drives', score: 2 },
        { label: 'Cloud SaaS applications (Salesforce, Zendesk, QuickBooks, HubSpot)', score: 3 },
        { label: 'Structured SQL databases, data warehouses, or clean REST APIs', score: 4 },
      ]
    },
    {
      id: 'apiReadiness',
      title: 'System Connectivity & APIs',
      question: 'Can your downstream systems accept programmatic read/write updates?',
      options: [
        { label: 'No public APIs; strictly closed legacy desktop software', score: 1 },
        { label: 'Limited export/import via scheduled CSV or batch SFTP', score: 2 },
        { label: 'Modern REST/GraphQL APIs available with developer keys', score: 3 },
        { label: 'Robust webhooks and event-driven architecture already in place', score: 4 },
      ]
    },
    {
      id: 'complianceRisk',
      title: 'Regulatory & Data Sovereignty Constraints',
      question: 'What level of compliance governance applies to your target operational data?',
      options: [
        { label: 'Standard commercial (No strict regulatory mandates)', score: 4 },
        { label: 'Standard Enterprise (SOC2 Type II, GDPR, CCPA requirements)', score: 3 },
        { label: 'Strict Healthcare / HIPAA (requires private isolated BAAs)', score: 2 },
        { label: 'Highly Regulated Financial / Defense (requires air-gapped VPCs)', score: 1 },
      ]
    },
    {
      id: 'teamCapacity',
      title: 'Human-in-the-Loop Supervision',
      question: 'Does your organization have subject-matter experts available to review edge cases during rollout?',
      options: [
        { label: 'Severely constrained; no team members available for review', score: 1 },
        { label: 'Limited time; can spend 1-2 hours weekly testing prototypes', score: 2 },
        { label: 'Dedicated managers ready to inspect and validate agent decisions', score: 3 },
        { label: 'Full cross-functional team with clear sign-off authority', score: 4 },
      ]
    }
  ];

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const maxScore = 20;
  const percentage = Math.round((totalScore / maxScore) * 100);

  let readinessTier = 'High Potential Candidate';
  let tierColor = 'text-emerald-600 bg-emerald-50 border-emerald-200';
  let summary = 'Your infrastructure and workflow structure are primed for high-yield autonomous agent deployment with minimal friction.';

  if (percentage < 50) {
    readinessTier = 'Foundational Preparation Phase';
    tierColor = 'text-amber-700 bg-amber-50 border-amber-200';
    summary = 'Your organization would benefit most from initial data structuring, API modernization, and workflow mapping before scaling agentic automation.';
  } else if (percentage < 75) {
    readinessTier = 'Targeted Pilot Candidate';
    tierColor = 'text-blue-700 bg-blue-50 border-blue-200';
    summary = 'Your systems are well-positioned for high-ROI single-agent pilots with human-in-the-loop supervisor controls.';
  }

  const handleOptionSelect = (qId: string, score: number) => {
    setAnswers((prev) => ({ ...prev, [qId]: score }));
  };

  return (
    <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-6 sm:p-8 lg:p-10">
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-semibold mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          Interactive AI Business Audit
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Evaluate Your Enterprise AI Readiness
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
          Complete this 5-point readiness diagnostic to assess workflow viability, identify architectural bottlenecks, and discover your highest-ROI automation opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Diagnostic Form */}
        <div className="lg:col-span-7 space-y-6">
          {questions.map((q, idx) => (
            <div key={q.id} className="p-4 sm:p-5 bg-slate-50 rounded-xl border border-slate-200/80">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">
                <span>0{idx + 1}.</span>
                <span>{q.title}</span>
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-slate-900 mb-3">
                {q.question}
              </h4>
              <div className="space-y-2">
                {q.options.map((opt, oIdx) => {
                  const isSelected = answers[q.id] === opt.score;
                  return (
                    <button
                      key={oIdx}
                      type="button"
                      onClick={() => handleOptionSelect(q.id, opt.score)}
                      className={`w-full p-3 text-left rounded-lg text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-orange-50 border border-orange-500 text-slate-900 font-medium ring-1 ring-orange-500'
                          : 'bg-white border border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Live Scorecard & Recommendations */}
        <div className="lg:col-span-5 sticky top-28 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm">
          <div className="border-b border-slate-100 pb-5">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">AI Readiness Index</span>
            <div className="mt-2 flex items-baseline gap-3">
              <span className="text-4xl sm:text-5xl font-extrabold font-mono text-slate-900 tabular-nums">
                {percentage}
              </span>
              <span className="text-sm font-semibold text-slate-400">/ 100</span>
            </div>

            <div className={`mt-3 inline-block px-3 py-1 rounded-md text-xs font-bold border ${tierColor}`}>
              {readinessTier}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
              {summary}
            </p>
          </div>

          {/* Breakdown by Dimension */}
          <div className="py-5 border-b border-slate-100 space-y-3">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">Pillar Analysis</span>
            {questions.map((q) => {
              const val = answers[q.id] || 1;
              const barWidth = `${(val / 4) * 100}%`;
              return (
                <div key={q.id}>
                  <div className="flex justify-between text-xs text-slate-600 mb-1">
                    <span>{q.title}</span>
                    <span className="font-mono font-medium">{val}/4</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-600 rounded-full transition-all duration-300" style={{ width: barWidth }}></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Recommendations */}
          <div className="py-5 border-b border-slate-100 space-y-2 text-xs">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">Recommended 3-Step Strategy</span>
            <div className="p-2.5 bg-orange-50/60 rounded-lg text-slate-800 border border-orange-100">
              <span className="font-semibold text-orange-900 block">1. 30-Day Bounded MVP</span>
              <span>Pick one high-frequency workflow with existing API access to validate accuracy.</span>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-lg text-slate-800 border border-slate-200">
              <span className="font-semibold text-slate-900 block">2. Dual-Layer Guardrails</span>
              <span>Enforce deterministic schema validation before transactions touch ERP records.</span>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-lg text-slate-800 border border-slate-200">
              <span className="font-semibold text-slate-900 block">3. Supervisor Review Queue</span>
              <span>Keep human experts in the approval loop until model confidence exceeds 99%.</span>
            </div>
          </div>

          <div className="pt-5">
            <button
              onClick={() => onBookConsultationWithAudit?.(percentage, readinessTier)}
              className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Discuss Audit with Lead Architect</span>
            </button>
            <p className="text-[11px] text-slate-400 text-center mt-2">
              Free 30-min technical architecture review with zero obligation.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
