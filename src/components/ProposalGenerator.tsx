import React, { useState } from 'react';
import { FileText, Printer, CheckCircle2, Sparkles, RefreshCw, Calendar, ArrowRight, Download } from 'lucide-react';
import { ProposalData } from '../types';

interface ProposalGeneratorProps {
  onBookKickoff?: (proposalId: string) => void;
}

export const ProposalGenerator: React.FC<ProposalGeneratorProps> = ({ onBookKickoff }) => {
  const [companyName, setCompanyName] = useState('Vanguard Logistics Partners');
  const [industry, setIndustry] = useState('Supply Chain & Freight');
  const [contactEmail, setContactEmail] = useState('ops-director@vanguardlogistics.com');
  const [challenge, setChallenge] = useState('We need an autonomous freight tracking and demurrage prediction agent to monitor terminal gate holds and auto-notify drayage dispatchers.');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'AI Agents & Bots',
    'Business Process Automation',
  ]);
  const [loading, setLoading] = useState(false);
  const [proposal, setProposal] = useState<ProposalData | null>(null);

  const availableServices = [
    'AI Agents & Bots',
    'AI Chatbots',
    'Business Process Automation',
    'Generative AI Solutions',
    'Machine Learning & Prediction',
    'Natural Language Processing',
    'Computer Vision',
    'Custom Enterprise AI',
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/proposal-generator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName,
          industry,
          challenge,
          selectedServices,
          contactEmail,
        }),
      });

      const data = await response.json();
      setProposal(data.proposal);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-6 sm:p-8 lg:p-10">
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-semibold mb-3">
          <FileText className="w-3.5 h-3.5" />
          AI Proposal & Statement of Work Generator
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Generate an Enterprise Project SOW Draft
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
          Provide your project scope details to automatically generate a formal Statement of Work (SOW) including architectural specifications, phased milestones, and pricing schedule.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Form Inputs */}
        <div className="lg:col-span-5 space-y-5">
          <form onSubmit={handleGenerate} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                Client Organization Name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Industry
                </label>
                <input
                  type="text"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Contact Email
                </label>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                Target Challenge & Desired Outcome
              </label>
              <textarea
                rows={3}
                value={challenge}
                onChange={(e) => setChallenge(e.target.value)}
                required
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Required Core Capabilities
              </label>
              <div className="grid grid-cols-2 gap-2">
                {availableServices.map((srv) => {
                  const isChecked = selectedServices.includes(srv);
                  return (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => toggleService(srv)}
                      className={`p-2 text-left rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                        isChecked
                          ? 'bg-orange-50 border-orange-500 text-orange-900 font-semibold'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {srv}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-orange-600 hover:bg-orange-700 disabled:bg-slate-300 text-white font-semibold text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Drafting Custom SOW...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Formal Proposal SOW</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Live Proposal SOW Paper View */}
        <div className="lg:col-span-7">
          {proposal ? (
            <div className="bg-white rounded-xl border border-slate-300 shadow-md p-6 sm:p-8 space-y-6 text-slate-900">
              
              {/* Proposal Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/aistudio/Screenshot_2026-11-05_113325_c39267d1.png"
                      alt="InnovationLab Logo"
                      className="logo-blend-natural h-10 w-auto object-contain"
                    />
                    <span className="text-xs font-mono text-slate-500 ml-2">STATEMENT OF WORK</span>
                  </div>
                  <div className="text-xs font-mono text-orange-600 font-semibold mt-2">
                    Doc Ref: {proposal.proposalId}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrint}
                    className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print / PDF</span>
                  </button>
                </div>
              </div>

              {/* Metadata Parties */}
              <div className="grid grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-lg border border-slate-200/80">
                <div>
                  <span className="text-slate-400 font-medium block">PREPARED FOR:</span>
                  <span className="font-bold text-slate-900 block text-sm mt-0.5">{proposal.preparedFor.company}</span>
                  <span className="text-slate-600">{proposal.preparedFor.industry} · {proposal.preparedFor.contact}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">PREPARED BY:</span>
                  <span className="font-bold text-slate-900 block text-sm mt-0.5">{proposal.preparedBy.agency}</span>
                  <span className="text-slate-600">{proposal.preparedBy.lead} · {proposal.preparedBy.website}</span>
                </div>
              </div>

              {/* Executive Summary */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  1. Executive Summary & Objective
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {proposal.executiveSummary}
                </p>
              </div>

              {/* Scope of Work */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  2. Detailed Scope of Deliverables
                </h4>
                <div className="space-y-2">
                  {proposal.scopeOfWork.map((item, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                      <span className="font-bold text-slate-900 block">{item.title}</span>
                      <span className="text-slate-600 mt-0.5 block leading-relaxed">{item.details}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Milestone & Pricing Schedule */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  3. Milestone & Fixed-Fee Structure
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
                    <thead className="bg-slate-100 text-slate-700 font-semibold">
                      <tr>
                        <th className="p-2.5">Milestone Stage</th>
                        <th className="p-2.5">Duration</th>
                        <th className="p-2.5 text-right">Investment</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {proposal.investmentStructure.map((row, idx) => (
                        <tr key={idx}>
                          <td className="p-2.5 text-slate-800">{row.item}</td>
                          <td className="p-2.5 text-slate-500">{row.duration}</td>
                          <td className="p-2.5 font-mono font-semibold text-right text-slate-900">{row.fee}</td>
                        </tr>
                      ))}
                      <tr className="bg-orange-50/60 font-bold">
                        <td colSpan={2} className="p-2.5 text-orange-900">Total Fixed Investment</td>
                        <td className="p-2.5 font-mono text-right text-orange-600 text-sm">
                          {proposal.totalEstimatedInvestment}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SLA Guarantee */}
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-900">
                <span className="font-bold block">Service Level & Accuracy Guarantee:</span>
                <span className="mt-0.5 block">{proposal.serviceLevelAgreement}</span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200">
                <span className="text-xs text-slate-500">
                  Valid for 30 calendar days until {proposal.validUntil}
                </span>
                <button
                  onClick={() => onBookKickoff?.(proposal.proposalId)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Schedule Technical Kickoff Call</span>
                </button>
              </div>

            </div>
          ) : (
            <div className="h-full min-h-[400px] border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center p-8 text-center text-slate-400">
              <FileText className="w-12 h-12 text-slate-300 mb-3" />
              <div className="text-sm font-semibold text-slate-600">No Proposal Generated Yet</div>
              <p className="text-xs max-w-sm text-slate-500 mt-1">
                Fill in your project requirements on the left to instantly generate a formal Statement of Work (SOW) with milestones and pricing.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
