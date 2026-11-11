import React, { useState } from 'react';
import { TrendingUp, Clock, DollarSign, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';

interface RoiCalculatorProps {
  onBookConsultation?: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onBookConsultation }) => {
  const [teamSize, setTeamSize] = useState<number>(8);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(14);
  const [hourlyWage, setHourlyWage] = useState<number>(45);
  const [automationRate, setAutomationRate] = useState<number>(70);

  // Calculations
  const weeksPerYear = 48; // Working weeks
  const totalWeeklyManualHours = teamSize * hoursPerWeek;
  const annualManualHours = totalWeeklyManualHours * weeksPerYear;
  const currentAnnualCost = annualManualHours * hourlyWage;

  const annualHoursSaved = Math.round(annualManualHours * (automationRate / 100));
  const annualCostSaved = Math.round(currentAnnualCost * (automationRate / 100));

  // Benchmark estimated implementation investment based on team scale
  const estimatedInvestment = Math.round(Math.max(25000, annualCostSaved * 0.22) / 1000) * 1000;
  const monthlySavings = annualCostSaved / 12;
  const paybackMonths = monthlySavings > 0 ? (estimatedInvestment / monthlySavings).toFixed(1) : '0';

  const threeYearNetSavings = annualCostSaved * 3 - estimatedInvestment;
  const threeYearRoiPercent = estimatedInvestment > 0 ? Math.round((threeYearNetSavings / estimatedInvestment) * 100) : 0;

  return (
    <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-6 sm:p-8 lg:p-10">
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-semibold mb-3">
          <TrendingUp className="w-3.5 h-3.5" />
          Interactive Business ROI Calculator
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Quantify Your Potential Time & Cost Savings
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
          Adjust the sliders to match your operational reality. Our model calculates recoverable staff hours, direct cost reductions, and payback duration based on real automation benchmarks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Sliders Area */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Slider 1: Team Size */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Team Members Performing Manual Tasks
              </label>
              <span className="font-mono text-base font-extrabold text-orange-600">{teamSize} people</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>1 person</span>
              <span>25 people</span>
              <span>50 people</span>
            </div>
          </div>

          {/* Slider 2: Weekly Hours per person */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Average Manual Hours Spent Per Week / Person
              </label>
              <span className="font-mono text-base font-extrabold text-orange-600">{hoursPerWeek} hrs/week</span>
            </div>
            <input
              type="range"
              min="4"
              max="35"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>4 hrs (Light)</span>
              <span>20 hrs (Heavy)</span>
              <span>35 hrs (Dedicated)</span>
            </div>
          </div>

          {/* Slider 3: Blended Hourly Rate */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Blended Hourly Employee Cost (Salary + Benefits)
              </label>
              <span className="font-mono text-base font-extrabold text-orange-600">${hourlyWage}/hour</span>
            </div>
            <input
              type="range"
              min="20"
              max="150"
              step="5"
              value={hourlyWage}
              onChange={(e) => setHourlyWage(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>$20/hr</span>
              <span>$85/hr</span>
              <span>$150/hr</span>
            </div>
          </div>

          {/* Slider 4: Target Automation Percentage */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Target AI Automation Rate (Conservative Target)
              </label>
              <span className="font-mono text-base font-extrabold text-orange-600">{automationRate}%</span>
            </div>
            <input
              type="range"
              min="40"
              max="90"
              step="5"
              value={automationRate}
              onChange={(e) => setAutomationRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>40% (Selective)</span>
              <span>70% (Standard)</span>
              <span>90% (Maximum Straight-Through)</span>
            </div>
          </div>

        </div>

        {/* Dynamic ROI Metrics Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-orange-600 to-amber-600 text-white rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="border-b border-orange-400/40 pb-5">
            <span className="text-xs font-bold tracking-widest uppercase text-orange-100">Estimated Annual Impact</span>
            <div className="mt-2 text-3xl sm:text-4xl font-extrabold font-mono tabular-nums">
              ${annualCostSaved.toLocaleString()}
            </div>
            <div className="text-xs text-orange-100 mt-1 font-medium">
              Direct operational cost savings recovered every year
            </div>
          </div>

          <div className="py-5 border-b border-orange-400/40 grid grid-cols-2 gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-orange-100 block">Annual Hours Saved</span>
              <div className="text-xl sm:text-2xl font-bold font-mono mt-0.5">{annualHoursSaved.toLocaleString()} hrs</div>
              <span className="text-[10px] text-orange-100/80">Equivalent to {(annualHoursSaved / (weeksPerYear * 40)).toFixed(1)} full-time roles</span>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-wider text-orange-100 block">Payback Period</span>
              <div className="text-xl sm:text-2xl font-bold font-mono mt-0.5">{paybackMonths} Months</div>
              <span className="text-[10px] text-orange-100/80">Rapid time-to-value</span>
            </div>
          </div>

          <div className="py-4 border-b border-orange-400/40 space-y-2 text-xs">
            <div className="flex justify-between text-orange-100">
              <span>Estimated AI Solution Setup:</span>
              <span className="font-mono font-semibold text-white">${estimatedInvestment.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-orange-100">
              <span>3-Year Net Cumulative ROI:</span>
              <span className="font-mono font-semibold text-white">+{threeYearRoiPercent}% (${threeYearNetSavings.toLocaleString()})</span>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={onBookConsultation}
              className="w-full py-3 bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-orange-600" />
              <span>Validate These Savings with Our Architects</span>
            </button>
            <p className="text-[10px] text-orange-100/90 text-center mt-2.5">
              *Disclaimer: Estimates based on average enterprise automation benchmarks. Exact ROI is verified during discovery.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
