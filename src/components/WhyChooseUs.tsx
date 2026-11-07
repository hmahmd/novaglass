import React, { useState } from 'react';
import { WHY_CHOOSE_US } from '../data/content';
import { Check, ShieldCheck, Zap, Sparkles, Sliders, LayoutGrid } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-xs font-mono font-semibold text-sky-700 uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Nova Glass Standard</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Why Visionary Teams Partner With Us
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Eliminating the compromise between artistic avant-garde visual quality and bulletproof technical reliability.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((pillar, idx) => {
            const isSelected = activePillar === idx;
            return (
              <div
                key={pillar.number}
                onMouseEnter={() => setActivePillar(idx)}
                className={`glass-panel rounded-3xl p-6 sm:p-7 border border-white/90 shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected ? 'ring-2 ring-blue-500/30 scale-102 bg-white/95' : 'hover:bg-white/80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-display text-sky-600/70">
                      {pillar.number}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-display mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Guaranteed</span>
                  <span className="text-blue-600 font-semibold">Zero-Drift</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Tactile Micro-Interaction Feeler Card */}
        <div className="mt-12 glass-panel rounded-3xl p-6 sm:p-8 border border-white/90 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-blue-500/20">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 font-display">
                Experience Instantaneous 60fps Micro-Feelers
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Every control in our design system settles in under 150ms using hardware-accelerated compositor transforms.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={(e) => {
                const target = e.currentTarget;
                target.classList.add('scale-95');
                setTimeout(() => target.classList.remove('scale-95'), 120);
              }}
              className="glass-button-primary px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider cursor-pointer active:scale-95 transition-transform"
            >
              Test Spring Response
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
