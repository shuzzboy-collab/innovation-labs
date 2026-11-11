import React, { useState, useRef, MouseEvent } from 'react';
import {
  ArrowRight,
  Calendar,
  Zap,
  Sparkles,
} from 'lucide-react';

interface HeroSectionProps {
  onExploreSolutions: () => void;
  onBookConsultation: (note?: string) => void;
  onOpenAudit: () => void;
}

interface Hotspot {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  title: string;
  tag: string;
  description: string;
  metric: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreSolutions,
  onBookConsultation,
  onOpenAudit,
}) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50, opacity: 0 });

  // Architectural hotspots mapped over key elements in the client's original banner
  const hotspots: Hotspot[] = [
    {
      id: 'cognitive-core',
      x: 27,
      y: 54,
      title: 'Cognitive Brain Engine',
      tag: 'NEURAL ROUTER',
      description: 'Multi-LLM reasoning engine with dynamic model fallback and task decomposition.',
      metric: 'Sub-200ms Velocity',
    },
    {
      id: 'growth-vector',
      x: 58,
      y: 47,
      title: 'Enterprise Growth Vector',
      tag: 'PROCESS ACCELERATOR',
      description: 'Autonomous workflow pipelines delivering verified 74% turnaround acceleration.',
      metric: '3.4x Velocity',
    },
    {
      id: 'guardrails',
      x: 48,
      y: 35,
      title: 'Deterministic Code Guardrails',
      tag: 'ZERO-HALLUCINATION',
      description: 'Mathematical safety gates, schema validators, and supervisor approval loops.',
      metric: '99.98% SLA',
    },
    {
      id: 'connectors',
      x: 77,
      y: 53,
      title: 'Autonomous API Connectors',
      tag: 'SYSTEM INTEGRATIONS',
      description: 'Bidirectional sync across SAP, Salesforce, Postgres, AWS, and enterprise ERPs.',
      metric: '400+ Connectors',
    },
  ];

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!bannerRef.current) return;
    const rect = bannerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setSpotlightPos({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setSpotlightPos((prev) => ({ ...prev, opacity: 0 }));
    setActiveHotspot(null);
  };

  return (
    <section className="relative overflow-hidden pt-4 pb-16 md:pt-8 md:pb-24 bg-gradient-to-b from-white via-orange-50/20 to-white">
      {/* Background Ambient Glow & Grid Textures */}
      <div className="absolute inset-0 bg-circuit-dots opacity-40 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_60%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-orange-400/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-48 right-10 w-[300px] h-[300px] bg-amber-300/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. ORIGINAL INNOVATIONLAB BANNER - Seamlessly Blended into Hero Stage */}
        <div className="mb-10 md:mb-14 relative">
          <div
            ref={bannerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative w-full max-w-5xl mx-auto flex items-center justify-center transition-all duration-300"
          >
            {/* Ambient Radial Backlight Glow that tracks cursor movement */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-3xl -z-10"
              style={{
                opacity: spotlightPos.opacity,
                background: `radial-gradient(600px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(249, 115, 22, 0.12), transparent 70%)`,
              }}
            />

            {/* Seamless Natural Banner: background completely dissolved via multiply blend */}
            <div className="relative w-full overflow-visible">
              <img
                src="/assets/aistudio/Screenshot_2026-11-05_113358.2png_371bedb8.png"
                alt="InnovationLab – AI Agency | Agents & Bots"
                className="banner-blend-natural w-full h-auto object-contain block mx-auto transition-transform duration-500 ease-out group-hover:scale-[1.01] select-none"
              />

              {/* Interactive Hotspot Overlay Pins (Floats directly over banner elements) */}
              <div className="absolute inset-0 pointer-events-auto">
                {hotspots.map((hs) => {
                  const isActive = activeHotspot === hs.id;
                  return (
                    <div
                      key={hs.id}
                      style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                      onMouseEnter={() => setActiveHotspot(hs.id)}
                      onMouseLeave={() => setActiveHotspot(null)}
                    >
                      {/* Radar Pulsing Beacon */}
                      <div className="relative cursor-pointer group/pin">
                        <span className="absolute -inset-2.5 rounded-full bg-orange-500/25 animate-radar pointer-events-none" />
                        <div
                          className={`relative flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full shadow-sm border transition-all duration-200 ${
                            isActive
                              ? 'bg-orange-600 text-white border-white scale-125 shadow-orange-500/50'
                              : 'bg-white/90 text-orange-600 border-orange-400/80 hover:bg-orange-600 hover:text-white hover:scale-110'
                          }`}
                        >
                          <span className="w-2 h-2 rounded-full bg-current" />
                        </div>

                        {/* Floating Architecture Tooltip Card */}
                        {isActive && (
                          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 sm:w-72 p-3.5 bg-slate-900/95 backdrop-blur-md text-white rounded-xl shadow-2xl border border-slate-700/80 z-30 text-left pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                            <div className="flex items-center justify-between text-[10px] font-mono mb-1 text-orange-400">
                              <span className="font-bold tracking-wider">{hs.tag}</span>
                              <span className="text-slate-400">{hs.metric}</span>
                            </div>
                            <div className="text-xs font-bold text-white mb-1">{hs.title}</div>
                            <p className="text-[11px] text-slate-300 leading-relaxed font-sans">{hs.description}</p>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/95" />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* Banner 'Contact Us' Clickable Hotspot (Bottom Right) */}
                <div
                  style={{ left: '89.5%', top: '88.5%' }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <button
                    onClick={() => onBookConsultation('Clicked Banner Contact Us Button')}
                    title="Click to Schedule a Discovery Session"
                    className="group/contact relative px-6 py-2.5 rounded-full bg-transparent hover:bg-orange-500/10 border border-transparent hover:border-orange-500/30 transition-all cursor-pointer flex items-center justify-center"
                  >
                    <span className="sr-only">Schedule Consultation</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 2. Hero Headline and Core Value Proposition */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-100/90 via-amber-100/80 to-orange-100/90 border border-orange-200 text-orange-950 text-xs font-semibold tracking-wide shadow-2xs hover:shadow-xs transition-all cursor-default">
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
            <span>Enterprise Autonomous Agents & Cognitive Automation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]" style={{ textWrap: 'balance' }}>
            Turning Business Challenges into <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600">Intelligent AI Solutions</span>.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            InnovationLab helps modern enterprises eliminate manual operational bottlenecks, automate multi-system back-office workflows, and deploy intelligent agents with deterministic safety and guaranteed ROI.
          </p>

          {/* Action CTAs with elevated visual polish */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onBookConsultation()}
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl shadow-md btn-hover-lift btn-shimmer flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Consultation</span>
            </button>

            <button
              onClick={onExploreSolutions}
              className="group w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-orange-50/50 hover:border-orange-400 border border-slate-300 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-4 h-4 text-orange-600 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-5 py-3.5 text-sm font-medium text-orange-800 bg-orange-50 hover:bg-orange-100 hover:shadow-xs border border-orange-200/70 hover:border-orange-300 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              <span>AI Readiness Audit</span>
              <Zap className="w-3.5 h-3.5 text-orange-600" />
            </button>
          </div>

          {/* Core Trust & Capability Badges with Elevated Hover Lift & Glow Border */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-slate-200/80">
            <div className="p-4 bg-white/95 hover:bg-white rounded-xl border border-slate-200/90 hover:border-orange-300 shadow-2xs hover:shadow-lg transition-all duration-200 hover:-translate-y-1 text-center group cursor-default glow-border-hover">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors font-mono tabular-nums">45+</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Autonomous Agents in Production</div>
            </div>
            <div className="p-4 bg-white/95 hover:bg-white rounded-xl border border-slate-200/90 hover:border-orange-300 shadow-2xs hover:shadow-lg transition-all duration-200 hover:-translate-y-1 text-center group cursor-default glow-border-hover">
              <div className="text-2xl sm:text-3xl font-extrabold text-orange-600 font-mono tabular-nums">74%</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Avg. Turnaround Time Reduction</div>
            </div>
            <div className="p-4 bg-white/95 hover:bg-white rounded-xl border border-slate-200/90 hover:border-orange-300 shadow-2xs hover:shadow-lg transition-all duration-200 hover:-translate-y-1 text-center group cursor-default glow-border-hover">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors font-mono tabular-nums">$2.8M+</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Client Cost Savings Delivered</div>
            </div>
            <div className="p-4 bg-white/95 hover:bg-white rounded-xl border border-slate-200/90 hover:border-orange-300 shadow-2xs hover:shadow-lg transition-all duration-200 hover:-translate-y-1 text-center group cursor-default glow-border-hover">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors font-mono tabular-nums">99.4%</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Deterministic Task SLA Accuracy</div>
            </div>
          </div>

          {/* Clean Industry Trust Strip */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-500 font-medium border-t border-slate-200/40">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Validated Across Industries:</span>
            <span className="hover:text-slate-900 transition-colors cursor-default">Global Banking & Fintech</span>
            <span className="hidden sm:inline text-slate-300">·</span>
            <span className="hover:text-slate-900 transition-colors cursor-default">Clinical Health Networks</span>
            <span className="hidden sm:inline text-slate-300">·</span>
            <span className="hover:text-slate-900 transition-colors cursor-default">Supply Chain & Freight</span>
            <span className="hidden sm:inline text-slate-300">·</span>
            <span className="hover:text-slate-900 transition-colors cursor-default">Enterprise B2B SaaS</span>
          </div>

        </div>

      </div>
    </section>
  );
};
