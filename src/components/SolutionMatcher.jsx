import React, { useState } from 'react';
import { 
  UserCheck, 
  Lightbulb, 
  Building, 
  Hotel, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { companyData } from '../data/jvsData';

const iconMap = {
  UserCheck,
  Lightbulb,
  Building,
  Hotel
};

export default function SolutionMatcher({ onSelectServiceByName, onNavigateToContact }) {
  const [selectedPersonaIndex, setSelectedPersonaIndex] = useState(0);

  const activePathway = companyData.ecosystemPathways[selectedPersonaIndex];
  const IconComponent = iconMap[activePathway.icon] || UserCheck;

  return (
    <section id="ecosystem" className="relative py-24 bg-[#030712] overflow-hidden border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Solution Finder</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            How Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">JVS Help You?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Select your profile to discover your tailored roadmap within the JVS & VexoBiz ecosystem.
          </p>
        </div>

        {/* Persona Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {companyData.ecosystemPathways.map((pathway, idx) => {
            const TabIcon = iconMap[pathway.icon] || UserCheck;
            const isSelected = selectedPersonaIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedPersonaIndex(idx)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'bg-gradient-to-b from-blue-950/90 to-slate-900 border-cyan-400 shadow-xl shadow-cyan-950/30 ring-1 ring-cyan-400/50'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-cyan-400'
                }`}>
                  <TabIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-xs sm:text-sm font-bold block ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {pathway.persona}
                  </span>
                  <span className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                    {pathway.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pathway Detail Box */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900/95 via-[#0a1024]/95 to-slate-900/95 border border-cyan-500/30 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Pathway info & steps */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Custom Pathway for {activePathway.persona}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activePathway.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activePathway.description}
                </p>
              </div>

              {/* Step Roadmap */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Success Roadmap:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activePathway.steps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 text-xs font-bold">
                        {idx + 1}
                      </div>
                      <span className="text-xs font-medium text-slate-200">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Services Tags */}
              <div className="pt-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Integrated Service Streams:</p>
                <div className="flex flex-wrap gap-2">
                  {activePathway.recommendedServices.map((srv, i) => (
                    <button
                      key={i}
                      onClick={() => onSelectServiceByName(srv)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-950/60 hover:bg-blue-900/80 text-cyan-300 border border-blue-500/30 text-xs font-semibold transition-all"
                    >
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      <span>{srv}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: CTA card */}
            <div className="lg:col-span-5 bg-[#030712] rounded-2xl border border-cyan-500/20 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold">
                  <IconComponent className="w-6 h-6 text-slate-950" />
                </div>
                <h4 className="text-lg font-bold text-white">Ready to take the next step?</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Connect with our dedicated counselor or venture consultant to start your journey with JVS today.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => onNavigateToContact()}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <a
                  href={`tel:${companyData.phone}`}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-800"
                >
                  <span>Direct Hotline: {companyData.phone}</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
