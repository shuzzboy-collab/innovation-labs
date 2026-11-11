import React, { useState } from 'react';
import { ArrowRight, Check, X, Clock, DollarSign, AlertCircle, ShieldCheck, Zap } from 'lucide-react';

export const WorkflowComparison: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<'invoicing' | 'customer-ops' | 'kyc-compliance'>('invoicing');

  const scenarios = {
    invoicing: {
      title: 'Supplier Invoicing & Accounts Payable',
      manual: {
        steps: [
          'AP clerk opens email attachment and manually downloads invoice PDF',
          'Manual transcription of vendor name, invoice date, line items, and totals into ERP',
          'Search for matching Purchase Order (PO) across 3 separate database screens',
          'Emailing department manager to verify delivery of goods and obtain sign-off',
          'Routing to finance controller for scheduled payment release (3-5 days turnaround)'
        ],
        time: '36 Minutes per invoice',
        cost: '$24.50 per invoice',
        errorRate: '5.2% transcription & duplicate payment rate',
        compliance: 'Manual sampling audit (only 10% of invoices inspected)'
      },
      automated: {
        steps: [
          'Ingestion Agent automatically intercepts supplier emails & validates cryptographic hashes',
          'Multimodal parser extracts structured line items, tax IDs, and bank routing in 4 seconds',
          'Automated 3-way matching against ERP purchase orders and warehouse receiving logs',
          'Straight-through approval if match confidence >= 99.5% with zero discrepancies',
          'Exception queue routes unmatched edge-cases directly to manager with highlighted diffs'
        ],
        time: '45 Seconds total processing',
        cost: '$1.40 per invoice',
        errorRate: '< 0.05% error rate with automated duplicate lock',
        compliance: '100% comprehensive audit trail with immutable logs'
      }
    },
    'customer-ops': {
      title: 'E-Commerce Tier-1 Support & Address Modifications',
      manual: {
        steps: [
          'Customer submits contact ticket regarding wrong shipping address',
          'Ticket sits in triage queue for 4 to 8 hours waiting for agent assignment',
          'Support rep searches customer history across Zendesk, Shopify, and Stripe',
          'Rep checks warehouse packing cutoff status manually via internal Slack message',
          'Rep types manual reply and updates ERP shipping address (if order has not shipped)'
        ],
        time: '6.4 Hours average response turnaround',
        cost: '$8.20 per handled customer ticket',
        errorRate: '12% missed cutoff rate (order ships to wrong address anyway)',
        compliance: 'Inconsistent agent tone and policy exceptions'
      },
      automated: {
        steps: [
          'Conversational Agent verifies customer phone/email token in real-time',
          'Agent polls warehouse WMS API to confirm pallet has not been loaded onto truck',
          'Instant address update pushed directly to Shopify & logistics carrier via API',
          'Automated confirmation email and SMS dispatched to customer in 40 seconds',
          'Ticket automatically resolved with full diagnostic timeline staged in CRM'
        ],
        time: '40 Seconds instant resolution',
        cost: '$0.35 per handled ticket',
        errorRate: '< 0.2% missed cutoff rate with millisecond carrier locks',
        compliance: '100% brand tone adherence and deterministic policy compliance'
      }
    },
    'kyc-compliance': {
      title: 'Corporate AML & Beneficial Ownership Verification',
      manual: {
        steps: [
          'Compliance officer receives 35-page foreign corporate registration packet',
          'Officer manually queries 4 disparate international corporate registries for active status',
          'Manual search of corporate directors across OFAC sanctions and PEP watchlists',
          'Analyst drafts verification memo in Microsoft Word and prints physical file for review',
          'Compliance committee meets weekly to sign off on approved corporate entities'
        ],
        time: '5 Business Days onboarding lead time',
        cost: '$180.00 per corporate onboarding review',
        errorRate: 'Human oversight risk on complex multi-tier shell companies',
        compliance: 'Audit vulnerability due to scattered analyst desktop notes'
      },
      automated: {
        steps: [
          'Document Intelligence Agent extracts ultimate beneficial owners (UBOs) in 14 languages',
          'Automated sanctions & negative news cross-check against 80+ global databases via API',
          'Risk Scoring Reasoner generates risk vector index and cites regulatory clause evidence',
          'Synthesized compliance dossier generated with 1-click human officer approval gate',
          'Continuous 24/7 background monitoring for changes in director sanctions status'
        ],
        time: '12 Minutes end-to-end review',
        cost: '$18.00 per corporate onboarding review',
        errorRate: 'Zero missed sanctions hits across automated registries',
        compliance: 'Full cryptographically verifiable audit trail for regulatory examiners'
      }
    }
  };

  const current = scenarios[activeScenario];

  return (
    <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-6 sm:p-8 lg:p-10">
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-semibold mb-3">
          <Zap className="w-3.5 h-3.5" />
          Before & After Workflow Comparison
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Manual Bottlenecks vs. InnovationLab AI Automation
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
          See the tangible operational shift between traditional human copy-paste workflows and our multi-agent autonomous execution pipelines.
        </p>
      </div>

      {/* Scenario Selector */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4 mb-8">
        {[
          { id: 'invoicing', label: 'Accounts Payable & Invoices' },
          { id: 'customer-ops', label: 'Customer Operations & Orders' },
          { id: 'kyc-compliance', label: 'AML & KYC Compliance' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveScenario(tab.id as any)}
            className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
              activeScenario === tab.id
                ? 'bg-orange-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Side-by-Side Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* Manual Legacy Workflow Card */}
        <div className="p-6 bg-red-50/30 hover:bg-red-50/50 rounded-2xl border border-red-200/80 flex flex-col justify-between transition-all duration-300 card-hover-elevate">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-red-200/60 mb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 font-mono">TRADITIONAL WORKFLOW</span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Manual Human Process</h3>
              </div>
              <span className="p-1.5 bg-red-100 text-red-700 rounded-full">
                <X className="w-4 h-4" />
              </span>
            </div>

            <div className="space-y-3 mb-6">
              {current.manual.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 p-1.5 rounded-lg hover:bg-white/60 transition-colors">
                  <span className="font-mono text-red-500 font-bold shrink-0 mt-0.5">0{i + 1}.</span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metric Badges */}
          <div className="pt-4 border-t border-red-200/60 space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-red-100">
              <span className="text-slate-500">Cycle Time:</span>
              <span className="font-semibold text-slate-900">{current.manual.time}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-red-100">
              <span className="text-slate-500">Unit Cost:</span>
              <span className="font-semibold text-red-600">{current.manual.cost}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-red-100">
              <span className="text-slate-500">Error Risk:</span>
              <span className="font-semibold text-slate-900">{current.manual.errorRate}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500">Audit Scope:</span>
              <span className="font-semibold text-slate-900">{current.manual.compliance}</span>
            </div>
          </div>
        </div>

        {/* InnovationLab Automated Agent Card */}
        <div className="p-6 bg-gradient-to-br from-orange-50/70 via-amber-50/40 to-white rounded-2xl border border-orange-300/90 hover:border-orange-500 shadow-xs hover:shadow-xl flex flex-col justify-between transition-all duration-300 card-hover-elevate relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-orange-400/20 transition-all duration-500" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between pb-4 border-b border-orange-200 mb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 font-mono">INNOVATIONLAB ARCHITECTURE</span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Autonomous Agent Automation</h3>
              </div>
              <span className="p-1.5 bg-orange-600 text-white rounded-full shadow-xs group-hover:scale-110 transition-transform">
                <Check className="w-4 h-4" />
              </span>
            </div>

            <div className="space-y-3 mb-6">
              {current.automated.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-800 p-1.5 rounded-lg hover:bg-white/80 transition-colors">
                  <span className="font-mono text-orange-600 font-bold shrink-0 mt-0.5">0{i + 1}.</span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metric Badges */}
          <div className="relative z-10 pt-4 border-t border-orange-200 space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-orange-100">
              <span className="text-slate-500">Cycle Time:</span>
              <span className="font-bold text-emerald-700 font-mono tabular-nums">{current.automated.time}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-orange-100">
              <span className="text-slate-500">Unit Cost:</span>
              <span className="font-bold text-emerald-700 font-mono tabular-nums">{current.automated.cost}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-orange-100">
              <span className="text-slate-500">Error Risk:</span>
              <span className="font-bold text-slate-900 font-mono tabular-nums">{current.automated.errorRate}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500">Audit Scope:</span>
              <span className="font-bold text-slate-900">{current.automated.compliance}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
