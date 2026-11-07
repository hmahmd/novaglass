import React from 'react';
import { METRICS, FAMOUS_QUOTE } from '../data/content';
import { Sparkles, Briefcase, Users, Award, Quote } from 'lucide-react';

const iconMap = {
  sparkles: Sparkles,
  briefcase: Briefcase,
  users: Users,
  award: Award,
};

export const MetricsBar: React.FC = () => {
  return (
    <section className="relative z-20 -mt-4 sm:-mt-6 lg:-mt-8 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full max-w-full">
      <div className="glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/95 shadow-xl shadow-sky-950/5 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* 4 Metric Items: 2x2 on mobile, 4 in a row on tablet+ */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {METRICS.map((metric) => {
              const Icon = iconMap[metric.iconName];
              return (
                <div key={metric.id} className="flex flex-col space-y-1 group p-2 sm:p-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-0.5 group-hover:scale-105 transition-transform shrink-0">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-display tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-700 leading-tight">
                    {metric.label}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono hidden sm:block">
                    {metric.sublabel}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quote Column on the Right: Full width on mobile with clean top divider */}
          <div className="lg:col-span-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-200/60 lg:pl-8 flex flex-col justify-center">
            <div className="relative pl-5 sm:pl-6">
              <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 absolute top-0 left-0 -scale-x-100 opacity-60" />
              <blockquote className="text-xs sm:text-sm font-medium text-slate-700 italic leading-snug">
                &ldquo;{FAMOUS_QUOTE.quote}&rdquo;
              </blockquote>
              <div className="mt-2 flex items-center gap-2">
                <span className="h-px w-3 sm:w-4 bg-slate-300" />
                <span className="text-[11px] sm:text-xs font-semibold text-slate-900 uppercase tracking-wider font-mono">
                  {FAMOUS_QUOTE.author}
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono">· {FAMOUS_QUOTE.role}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
