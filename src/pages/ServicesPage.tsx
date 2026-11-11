import React, { useState } from 'react';
import { SERVICES } from '../data/mockData';
import { Bot, MessageSquareCode, Cpu, Sparkles, TrendingUp, FileText, Eye, Layers, CheckCircle2, ArrowRight, Calendar, ShieldCheck, Terminal } from 'lucide-react';

interface ServicesPageProps {
  onBookConsultation: (serviceTitle?: string) => void;
  onNavigate: (tab: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onBookConsultation, onNavigate }) => {
  const [selectedService, setSelectedService] = useState<string>(SERVICES[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot className="w-5 h-5 text-orange-600" />;
      case 'MessageSquareCode': return <MessageSquareCode className="w-5 h-5 text-orange-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-orange-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-orange-600" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-orange-600" />;
      case 'FileText': return <FileText className="w-5 h-5 text-orange-600" />;
      case 'Eye': return <Eye className="w-5 h-5 text-orange-600" />;
      default: return <Layers className="w-5 h-5 text-orange-600" />;
    }
  };

  const active = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-semibold">
          AI Capabilities & Practice Areas
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Enterprise AI Engineering & Custom Solutions
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          We architect, build, and deploy production AI systems designed to operate deterministically inside your existing enterprise security boundary.
        </p>
      </div>

      {/* Interactive Service Selector & Detailed Blueprint */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Service Nav List */}
        <div className="lg:col-span-4 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">Select Capability</span>
          {SERVICES.map((srv, idx) => {
            const isSelected = selectedService === srv.id;
            return (
              <button
                key={srv.id}
                type="button"
                onClick={() => setSelectedService(srv.id)}
                className={`w-full p-3.5 rounded-xl text-left border transition-all duration-200 flex items-center justify-between cursor-pointer card-hover-elevate group ${
                  isSelected
                    ? 'bg-orange-50/70 border-orange-500 shadow-xs ring-1 ring-orange-500'
                    : 'bg-white border-slate-200 hover:border-orange-300 hover:bg-orange-50/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg transition-transform duration-200 group-hover:scale-110 ${isSelected ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-700 group-hover:bg-orange-100 group-hover:text-orange-700'}`}>
                    {getIcon(srv.iconName)}
                  </div>
                  <div>
                    <div className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-orange-600 transition-colors">{srv.title}</div>
                    <div className="text-[11px] text-slate-500 truncate max-w-[200px]">{srv.businessImpact}</div>
                  </div>
                </div>
                {isSelected && <ArrowRight className="w-4 h-4 text-orange-600 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />}
              </button>
            );
          })}
        </div>

        {/* Right: Selected Service Deep Dive Card */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 lg:p-10 space-y-8 animate-in fade-in-50">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">PRACTICE AREA OVERVIEW</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">{active.title}</h2>
            </div>
            <button
              onClick={() => onBookConsultation(`Request SOW for ${active.title}`)}
              className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-xs flex items-center gap-2 cursor-pointer shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Scope & Quote</span>
            </button>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">Technical Description</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {active.fullDescription}
            </p>
          </div>

          <div className="p-4 bg-orange-50/60 rounded-xl border border-orange-200/80">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-800 block">Demonstrated Business Outcome</span>
            <p className="text-sm font-semibold text-slate-900 mt-1">
              {active.businessImpact}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">Core Engineering Capabilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {active.capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-orange-600" />
                Underlying Technology Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {active.technologies.map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 bg-slate-100 rounded-md font-mono text-xs text-slate-700 border border-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
                Standard Deliverables Package
              </h3>
              <ul className="space-y-1 text-xs text-slate-600">
                {active.deliverables.map((deliv, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span>
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Need custom scoping or an on-premise deployment?
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => onNavigate('tools')}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-xs rounded-lg transition-colors cursor-pointer"
              >
                Estimate Cost
              </button>
              <button
                onClick={() => onBookConsultation(`Consultation for ${active.title}`)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded-lg transition-colors cursor-pointer"
              >
                Book Technical Call
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
