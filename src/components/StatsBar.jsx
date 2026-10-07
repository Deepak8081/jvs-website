import React from 'react';
import { Layers, Briefcase, GraduationCap, Rocket, CheckCircle } from 'lucide-react';
import { companyData } from '../data/jvsData';

export default function StatsBar() {
  const icons = [Layers, Briefcase, GraduationCap, Rocket];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-gradient-to-r from-slate-900/95 via-[#0c1328]/95 to-slate-900/95 border border-cyan-500/20 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {companyData.stats.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div 
                key={idx} 
                className={`flex flex-col items-center text-center ${idx > 0 ? 'pt-4 md:pt-0 md:pl-6' : ''}`}
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm font-bold text-slate-200 mt-1">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-400 mt-0.5 max-w-[180px] leading-tight">
                  {stat.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
