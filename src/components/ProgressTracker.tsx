import React, { useState } from 'react';
import { CheckCircle2, Clock, ShieldCheck, ArrowRight, Layers, FileCheck } from 'lucide-react';

export const ProgressTracker: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(1);

  const phases = [
    {
      phaseNumber: 1,
      title: 'Discovery & Feasibility Audit',
      duration: 'Weeks 1 – 2',
      focus: 'Technical architecture, API access, and baseline benchmark definition',
      deliverables: [
        'Detailed Workflow Mapping & Edge-Case Catalog',
        'Data Privacy & SOC2/HIPAA Security Clearance',
        'System Connector API Contracts (ERP, CRM, SQL)',
        'Quantified SLA & Acceptance Criteria Agreement'
      ],
      clientReview: 'Architecture Sign-Off & Staging Access Provisioning'
    },
    {
      phaseNumber: 2,
      title: 'Architecture & Guardrails Blueprint',
      duration: 'Weeks 3 – 4',
      focus: 'Multi-agent state graph design, schema contracts, and hallucination defenses',
      deliverables: [
        'LangGraph / State Machine Pipeline Specification',
        'Retrieval-Augmented Generation (RAG) Vector Indexing',
        'Deterministic Semantic Policy Guardrails',
        'Golden Dataset of 300+ Automated Test Vectors'
      ],
      clientReview: 'Mock Run Review & Prompt Policy Approval'
    },
    {
      phaseNumber: 3,
      title: 'Agentic Engineering & Sandbox Testing',
      duration: 'Weeks 5 – 7',
      focus: 'Core agent development, tool execution, and supervisor cockpit integration',
      deliverables: [
        'Autonomous Worker Agents with Auto-Retry Logic',
        'Human-in-the-Loop Operator Review Cockpit UI',
        'Staging Environment Benchmark Testing (> 99% accuracy)',
        'Automated Rollback & Fail-Safe Circuit Breakers'
      ],
      clientReview: 'End-to-End Staging Walkthrough & User Acceptance Testing (UAT)'
    },
    {
      phaseNumber: 4,
      title: 'Enterprise Integration & UAT Hardening',
      duration: 'Weeks 8 – 9',
      focus: 'Bi-directional enterprise connectors, load testing, and operator training',
      deliverables: [
        'Live Enterprise System Connector Integration',
        'Concurrency & Stress Testing (1,000+ simultaneous requests)',
        'Operator Training & SOP Documentation Handover',
        'Auditor Compliance Certification Packet'
      ],
      clientReview: 'Formal SOW Acceptance & Production Green-Light'
    },
    {
      phaseNumber: 5,
      title: 'Production Cutover & 60-Day Hypercare',
      duration: 'Weeks 10+',
      focus: 'Traffic cutover, continuous observability, and SLA enforcement',
      deliverables: [
        'Gradual Canary Traffic Deployment (10% -> 50% -> 100%)',
        '24/7 Telemetry & Latency Monitoring (OpenTelemetry/Grafana)',
        'Weekly Performance Drift & Accuracy Reports',
        'Dedicated Senior AI Architect Hypercare Support'
      ],
      clientReview: 'Quarterly Executive ROI & Expansion Review'
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-6 sm:p-8 lg:p-10">
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-semibold mb-3">
          <Clock className="w-3.5 h-3.5" />
          5-Phase Enterprise Delivery Framework
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          How We Build & Deploy Production AI Systems
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
          Our disciplined 5-stage engineering lifecycle guarantees deterministic accuracy, rigorous data security, and verifiable ROI from day one.
        </p>
      </div>

      {/* Phase Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
        {phases.map((p) => {
          const isSelected = selectedPhase === p.phaseNumber;
          return (
            <button
              key={p.phaseNumber}
              type="button"
              onClick={() => setSelectedPhase(p.phaseNumber)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'border-orange-500 bg-orange-50/70 shadow-2xs ring-1 ring-orange-500'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <div className="text-[11px] font-bold text-orange-600">PHASE 0{p.phaseNumber}</div>
              <div className="font-semibold text-xs sm:text-sm text-slate-900 mt-0.5 line-clamp-1">{p.title}</div>
              <div className="text-[11px] text-slate-500 mt-1">{p.duration}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Phase Detail Card */}
      {phases.map((p) => {
        if (p.phaseNumber !== selectedPhase) return null;
        return (
          <div key={p.phaseNumber} className="bg-slate-50 rounded-2xl border border-slate-200/80 p-6 sm:p-8 space-y-6 animate-in fade-in-50">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Phase 0{p.phaseNumber} Deep Dive
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">{p.title}</h3>
              </div>
              <div className="text-xs font-mono font-semibold px-3 py-1 bg-white border border-slate-300 rounded-lg text-slate-700 shrink-0">
                Estimated Timeline: {p.duration}
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              <strong className="text-slate-900">Core Engineering Objective:</strong> {p.focus}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-orange-600" />
                  Key Tangible Deliverables
                </h4>
                <div className="space-y-2.5">
                  {p.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-orange-600" />
                  Governance & Client Review Gate
                </h4>
                <div className="p-4 bg-white rounded-lg border border-slate-200/80 text-xs sm:text-sm space-y-2">
                  <div className="font-semibold text-slate-900">{p.clientReview}</div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    No code is merged into production without explicit stakeholder validation of latency, task accuracy, and error fallback protocols.
                  </p>
                  <div className="pt-2 text-[11px] text-orange-700 font-semibold">
                    ✓ Includes complete audit trail & signed approval sign-off
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
