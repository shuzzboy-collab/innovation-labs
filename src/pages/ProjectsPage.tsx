import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/mockData';
import { WorkflowComparison } from '../components/WorkflowComparison';
import { ArrowRight, CheckCircle2, TrendingUp, Calendar, Filter, Star, ShieldCheck } from 'lucide-react';

interface ProjectsPageProps {
  onBookConsultation: (projectName?: string) => void;
  onNavigate: (tab: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onBookConsultation, onNavigate }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

  const industries = ['All', 'Financial Services', 'Supply Chain & Logistics', 'Healthcare & Life Sciences'];

  const filtered = selectedIndustry === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((cs) => cs.industry === selectedIndustry);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-semibold">
          Proven Enterprise Results
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Client Case Studies & Verified Impact
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Explore in-depth architectural case studies detailing how leading enterprises implemented InnovationLab autonomous agents to cut operational turnaround, eliminate errors, and generate positive ROI.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
        {industries.map((ind) => (
          <button
            key={ind}
            type="button"
            onClick={() => setSelectedIndustry(ind)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              selectedIndustry === ind
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {ind}
          </button>
        ))}
      </div>

      {/* Detailed Case Studies Cards */}
      <div className="space-y-12">
        {filtered.map((cs) => (
          <div
            key={cs.id}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 lg:p-10 space-y-8 card-hover-elevate group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest">
                  <span>{cs.industry}</span>
                  <span>·</span>
                  <span className="text-slate-600">{cs.client}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 group-hover:text-orange-600 transition-colors">{cs.title}</h2>
              </div>
              <button
                onClick={() => onBookConsultation(`Case Study Inquiry: ${cs.title}`)}
                className="px-5 py-2.5 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-xs btn-hover-lift flex items-center gap-2 cursor-pointer shrink-0"
              >
                <Calendar className="w-4 h-4" />
                <span>Discuss Similar Scope</span>
              </button>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">The Operational Challenge</span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {cs.challenge}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">InnovationLab Engineering Solution</span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {cs.solution}
                </p>
              </div>
            </div>

            {/* Audited Result Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-gradient-to-r from-orange-50/60 to-amber-50/40 rounded-xl border border-orange-200/80">
              {cs.results.map((res, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-orange-600 font-mono tabular-nums">{res.metric}</div>
                  <div className="text-xs font-bold text-slate-900">{res.label}</div>
                  <div className="text-[11px] text-slate-600 leading-snug">{res.description}</div>
                </div>
              ))}
            </div>

            {/* Verified Testimonial */}
            {cs.testimonial && (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
                <p className="italic leading-relaxed">
                  "{cs.testimonial.quote}"
                </p>
                <div className="font-bold not-italic text-slate-900 text-xs">
                  — {cs.testimonial.author}, {cs.testimonial.role} ({cs.testimonial.company})
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-500">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-medium text-slate-700">Production Stack:</span>
                {cs.technologies.map((t, idx) => (
                  <span key={idx} className="font-mono px-2 py-0.5 bg-slate-100 rounded text-slate-700 border border-slate-200">
                    {t}
                  </span>
                ))}
              </div>
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Independently Verified Case Data</span>
              </span>
            </div>

          </div>
        ))}
      </div>

      {/* Before and After Workflow Comparison Section */}
      <WorkflowComparison />

    </div>
  );
};
