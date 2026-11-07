import React, { useState } from 'react';
import { SERVICES } from '../data/content';
import { CheckCircle2, ArrowUpRight, Clock } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [expandedService, setExpandedService] = useState<string>('spatial-ui');

  return (
    <section id="services" className="py-16 sm:py-20 md:py-28 relative w-full max-w-full">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-sky-600 uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
              <span>Capabilities &amp; Advisory</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
              Services &amp; Specializations
            </h2>
            <p className="text-xs sm:text-base text-slate-600 mt-1.5 max-w-xl">
              Turnkey interface engineering and strategic advisory tailored for high-growth tech ventures and visionary founders.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 self-start md:self-auto">
            <Clock className="w-4 h-4 text-sky-500 shrink-0" />
            <span>Project Cycle: 3–6 Weeks</span>
          </div>
        </div>

        {/* 2x2 Services Grid with Interactive Expansion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {SERVICES.map((service) => {
            const isExpanded = expandedService === service.id;
            return (
              <div
                key={service.id}
                className={`glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-8 border border-white/95 shadow-lg sm:shadow-xl transition-all duration-300 flex flex-col justify-between w-full ${
                  isExpanded ? 'ring-2 ring-blue-500/30 bg-white/90' : 'hover:bg-white/80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-[10px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-sky-50 text-sky-700 border border-sky-100">
                      SERVICE {service.number}
                    </span>
                    <span className="text-[11px] sm:text-xs font-mono text-slate-400">
                      {service.turnaround}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold text-slate-900 font-display">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {service.summary}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-200/60">
                    <h4 className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                      Included Deliverables
                    </h4>
                    <div className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer / Action */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200/60 flex items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                    {service.tools.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="glass-button-primary px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer group shrink-0"
                  >
                    <span>Commission</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
