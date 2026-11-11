import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenConsultation: () => void;
  onOpenAdmin: () => void;
  onOpenClientPortal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenConsultation,
  onOpenAdmin,
  onOpenClientPortal,
}) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-xl p-2 shadow-xs border border-slate-700/60 inline-flex items-center justify-center">
                <img
                  src="/assets/aistudio/Screenshot_2026-11-05_113325_c39267d1.png"
                  alt="InnovationLab Logo"
                  className="logo-blend-natural h-11 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              InnovationLab is a premier enterprise AI agency specializing in autonomous multi-agent systems, intelligent chatbots, and cognitive workflow automation.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <a
                  href="https://wa.me/923330241899"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 font-mono text-emerald-300 font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>WhatsApp: 03330241899</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <a href="mailto:contact@innovation.com" className="hover:text-white transition-colors">
                  contact@innovation.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>San Francisco, CA · London, UK · Singapore</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400 font-mono text-[11px]">URL:</span>
                <span className="text-slate-300 font-mono text-[11px]">www.innovation.com</span>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">AI Services</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => setActiveTab('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Autonomous AI Agents
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Enterprise Chatbots
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Process Automation (RPA)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Generative AI & LLMs
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Machine Learning & Vision
                </button>
              </li>
            </ul>
          </div>

          {/* Client Tools Column */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Interactive Tools</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => setActiveTab('tools')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Project Cost Estimator
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('tools')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Business ROI Calculator
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('tools')} className="hover:text-white transition-colors cursor-pointer text-left">
                  AI Readiness Audit
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('tools')} className="hover:text-white transition-colors cursor-pointer text-left">
                  AI Proposal Generator
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('innovation-lab')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Innovation Lab Sandbox
                </button>
              </li>
            </ul>
          </div>

          {/* Governance & Agency */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Agency & Portal</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => setActiveTab('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  About InnovationLab
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('projects')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Verified Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('research')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Research & Insights
                </button>
              </li>
              <li>
                <button onClick={onOpenClientPortal} className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1 text-orange-400">
                  <span>Client SLA Portal</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button onClick={onOpenAdmin} className="hover:text-white transition-colors cursor-pointer text-left text-slate-500">
                  Admin Dashboard
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} InnovationLab – AI Agency | Agents & Bots. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>SOC2 Type II Certified</span>
            <span>·</span>
            <span>HIPAA Compliant</span>
            <span>·</span>
            <span>Zero Training Retention Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
