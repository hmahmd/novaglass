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
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/90 shadow-xl shadow-sky-950/5">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-6 lg:gap-8 items-center divide-y md:divide-y-0 lg:divide-x divide-slate-200/60">
          {/* 4 Metric Columns */}
          <div className="col-span-2 md:col-span-4 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {METRICS.map((metric) => {
              const Icon = iconMap[metric.iconName];
              return (
                <div key={metric.id} className="flex flex-col space-y-1.5 group">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-1 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-700 leading-tight">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono hidden sm:block">
                    {metric.sublabel}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quote Column on the Right matching the reference layout */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-center">
            <div className="relative pl-6">
              <Quote className="w-5 h-5 text-sky-400 absolute top-0 left-0 -scale-x-100 opacity-60" />
              <blockquote className="text-sm font-medium text-slate-700 italic leading-snug">
                &ldquo;{FAMOUS_QUOTE.quote}&rdquo;
              </blockquote>
              <div className="mt-2 flex items-center gap-2">
                <span className="h-px w-4 bg-slate-300" />
                <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider font-mono">
                  {FAMOUS_QUOTE.author}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">· {FAMOUS_QUOTE.role}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
