import React, { useState } from 'react';
import { LiveDemonstrations } from '../components/LiveDemonstrations';
import { TECH_MAP_NODES } from '../data/mockData';
import { Cpu, Terminal, Layers, ArrowRight, ShieldCheck, Zap, Sparkles, Calendar } from 'lucide-react';

interface InnovationLabPageProps {
  onBookConsultation: () => void;
  onNavigate: (tab: string) => void;
}

export const InnovationLabPage: React.FC<InnovationLabPageProps> = ({ onBookConsultation, onNavigate }) => {
  const [selectedTechCategory, setSelectedTechCategory] = useState<number>(0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-semibold">
          R&D, Benchmarks & Live Sandboxes
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Innovation Lab: The Enterprise AI Sandbox
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Explore our internal technology stack, interactive agent testbenches, and live research prototypes. Test how our algorithms behave before writing a single line of production code.
        </p>
      </div>

      {/* 1. Interactive AI Technology Map */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 lg:p-10 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
            Core Technology Topology
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Interactive AI Technology Map
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Click through our 5 architectural layers to see the production-grade libraries, models, and databases powering our systems.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {TECH_MAP_NODES.map((node, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedTechCategory(idx)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedTechCategory === idx
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {node.category}
            </button>
          ))}
        </div>

        {/* Selected Layer Showcase */}
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-4 animate-in fade-in-50">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">LAYER FOCUS</span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">{TECH_MAP_NODES[selectedTechCategory].category}</h3>
            </div>
            <p className="text-xs text-slate-600">{TECH_MAP_NODES[selectedTechCategory].description}</p>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-3">
              Standard Supported Runtimes & Frameworks
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {TECH_MAP_NODES[selectedTechCategory].items.map((item, i) => (
                <div key={i} className="p-3 bg-white rounded-xl border border-slate-200 text-center font-semibold text-xs text-slate-900 shadow-2xs">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Live Interactive Experiments */}
      <LiveDemonstrations />

      {/* Bottom CTA */}
      <div className="p-8 sm:p-12 bg-slate-900 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold">Want a custom sandbox benchmark for your data?</h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            We provide a 5-day Rapid Proof-of-Concept to test agent accuracy on your actual enterprise documents.
          </p>
        </div>
        <button
          onClick={onBookConsultation}
          className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs sm:text-sm rounded-xl shrink-0 transition-colors flex items-center gap-2 cursor-pointer shadow-md"
        >
          <Calendar className="w-4 h-4" />
          <span>Request Custom Benchmark</span>
        </button>
      </div>

    </div>
  );
};
