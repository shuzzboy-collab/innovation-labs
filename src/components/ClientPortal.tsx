import React, { useState } from 'react';
import { ShieldCheck, Activity, FileText, Download, CheckCircle2, Clock, AlertCircle, ArrowUpRight, Lock, UserCheck } from 'lucide-react';

interface ClientPortalProps {
  onClose: () => void;
}

export const ClientPortal: React.FC<ClientPortalProps> = ({ onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [activeTab, setActiveTab] = useState<'milestones' | 'telemetry' | 'documents' | 'support'>('milestones');

  const milestones = [
    { name: '1. Architecture & API Specifications', status: 'Completed', date: 'Oct 14, 2026', signOff: 'Verified by CCO' },
    { name: '2. Multi-Agent Engine Sandbox Build', status: 'Completed', date: 'Oct 28, 2026', signOff: '99.6% Accuracy Passed' },
    { name: '3. Core Banking API Connector Sync', status: 'Completed', date: 'Nov 02, 2026', signOff: 'Staging Integration Cleared' },
    { name: '4. Operator UAT & Shadow Mode Traffic', status: 'In Progress (85%)', date: 'Current Sprint', signOff: 'Target: Nov 12, 2026' },
    { name: '5. Production Live Cutover & 24/7 SLA', status: 'Scheduled', date: 'Nov 18, 2026', signOff: 'Pending UAT Sign-off' },
  ];

  const documents = [
    { title: 'Statement of Work (SOW) - Fully Executed', type: 'PDF', size: '2.4 MB', date: 'Oct 08, 2026' },
    { title: 'Architecture Blueprint & Security Matrix v2.1', type: 'PDF', size: '5.1 MB', date: 'Oct 18, 2026' },
    { title: 'Deterministic Guardrails Audit & Benchmark Log', type: 'JSON / PDF', size: '840 KB', date: 'Nov 01, 2026' },
    { title: 'API Integration OpenAPI 3.1 Swagger Spec', type: 'YAML', size: '120 KB', date: 'Nov 03, 2026' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-orange-600 flex items-center justify-center font-bold text-sm">
              <UserCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base text-white">InnovationLab Client Portal</h3>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  AUTHENTICATED (DEMO)
                </span>
              </div>
              <p className="text-xs text-slate-400">Client: FinScale Global Banking · Project: AML Triaging Agent</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Close Portal
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 bg-slate-100 border-b border-slate-200 flex gap-4 text-xs font-semibold">
          {[
            { id: 'milestones', label: 'Milestones & Delivery' },
            { id: 'telemetry', label: 'Live Agent Telemetry & SLA' },
            { id: 'documents', label: 'Project Artifacts & SOW' },
            { id: 'support', label: 'Dedicated Architect Support' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3 border-b-2 transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'border-orange-600 text-orange-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Body Content */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          
          {/* Milestones Tab */}
          {activeTab === 'milestones' && (
            <div className="space-y-6">
              <div className="p-4 bg-orange-50/60 rounded-xl border border-orange-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-orange-700 uppercase tracking-wider">Overall Sprint Progress</span>
                  <div className="text-lg font-bold text-slate-900 mt-0.5">Sprint 4 of 5 (85% Finished)</div>
                  <p className="text-xs text-slate-600 mt-0.5">Currently conducting shadow traffic validation against core banking test accounts.</p>
                </div>
                <div className="w-full sm:w-48 bg-white p-2 rounded-lg border border-orange-200">
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                    <span>Progress</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-600 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">Delivery Stages & Sign-offs</h4>
                {milestones.map((m, idx) => (
                  <div key={idx} className="p-3.5 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-3">
                      {m.status === 'Completed' ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : m.status.includes('In Progress') ? (
                        <Clock className="w-4 h-4 text-orange-600 shrink-0" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-slate-300 shrink-0" />
                      )}
                      <div>
                        <span className="font-semibold text-slate-900 text-sm block">{m.name}</span>
                        <span className="text-slate-500">{m.signOff}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 font-mono">{m.date}</span>
                      <span
                        className={`px-2.5 py-1 rounded-full font-semibold text-[11px] ${
                          m.status === 'Completed'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : m.status.includes('In Progress')
                            ? 'bg-orange-50 text-orange-700 border border-orange-200'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {m.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Telemetry Tab */}
          {activeTab === 'telemetry' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 font-medium">Agent Uptime SLA</span>
                  <div className="text-2xl font-extrabold text-slate-900 mt-1 font-mono">99.98%</div>
                  <span className="text-[11px] text-emerald-600 font-semibold">Exceeds 99.5% Contract</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 font-medium">Shadow Requests Tested</span>
                  <div className="text-2xl font-extrabold text-slate-900 mt-1 font-mono">142,850</div>
                  <span className="text-[11px] text-slate-500">Across 14 jurisdictions</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 font-medium">Median Reasoning Latency</span>
                  <div className="text-2xl font-extrabold text-slate-900 mt-1 font-mono">1.12s</div>
                  <span className="text-[11px] text-slate-500">Sub-second streaming ready</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 font-medium">Policy Guardrail Trips</span>
                  <div className="text-2xl font-extrabold text-slate-900 mt-1 font-mono">14</div>
                  <span className="text-[11px] text-emerald-600 font-semibold">100% successfully routed</span>
                </div>
              </div>

              <div className="p-4 bg-slate-900 text-white rounded-xl font-mono text-xs">
                <div className="flex justify-between border-b border-slate-800 pb-2 mb-3 text-slate-400">
                  <span>LIVE AUDIT STREAM</span>
                  <span className="text-emerald-400">STATUS: HEALTHY</span>
                </div>
                <div className="space-y-1.5 text-slate-300">
                  <div>[2026-11-05 09:21:04] IngestionAgent &gt; Received Corporate Wire Dossier #88219 (SEK 1,450,000)</div>
                  <div>[2026-11-05 09:21:05] SanctionsAgent &gt; Executed OFAC & Interpol live scan (0 hits, 100% clear)</div>
                  <div>[2026-11-05 09:21:06] RiskReasoner &gt; Confidence score 99.8%. Compliance package generated for Officer Vance.</div>
                </div>
              </div>
            </div>
          )}

          {/* Documents Tab */}
          {activeTab === 'documents' && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">Project Artifacts & SOW Records</h4>
              <div className="space-y-2.5">
                {documents.map((doc, i) => (
                  <div key={i} className="p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between gap-4 text-xs">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-orange-600 shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-900 text-sm block">{doc.title}</span>
                        <span className="text-slate-500">{doc.type} · {doc.size} · Uploaded {doc.date}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => alert(`Downloading ${doc.title}...`)}
                      className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Support Tab */}
          {activeTab === 'support' && (
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm space-y-4">
              <h4 className="font-bold text-slate-900 text-base">Dedicated Architecture Pod</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <span className="text-slate-400 text-xs block">Lead AI Solutions Architect:</span>
                  <span className="font-bold text-slate-900 block mt-0.5">Alexei Ivanov</span>
                  <span className="text-slate-500 text-xs">alexei@innovation.com</span>
                </div>
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <span className="text-slate-400 text-xs block">Emergency Engineering Hotline:</span>
                  <span className="font-bold text-slate-900 block mt-0.5">+1 (800) 555-0199 ext. 4</span>
                  <span className="text-slate-500 text-xs">24/7 SLA Response Window &lt; 15 min</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
