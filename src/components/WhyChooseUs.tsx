import React, { useState } from 'react';
import { WHY_CHOOSE_US } from '../data/content';
import { Sparkles, Zap } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  return (
    <section className="py-16 sm:py-20 md:py-28 relative w-full max-w-full">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-[10px] sm:text-xs font-mono font-semibold text-sky-700 uppercase mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Nova Glass Standard</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Why Visionary Teams Partner With Us
          </h2>
          <p className="text-xs sm:text-base text-slate-600 mt-2 leading-relaxed">
            Eliminating the compromise between artistic avant-garde visual quality and bulletproof technical reliability.
          </p>
        </div>

        {/* 4 Pillars Grid: 1-col mobile, 2-col tablet, 4-col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {WHY_CHOOSE_US.map((pillar, idx) => {
            const isSelected = activePillar === idx;
            return (
              <div
                key={pillar.number}
                onClick={() => setActivePillar(idx)}
                onMouseEnter={() => setActivePillar(idx)}
                className={`glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 border border-white/95 shadow-md sm:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer w-full ${
                  isSelected ? 'ring-2 ring-blue-500/30 scale-101 sm:scale-102 bg-white/95' : 'hover:bg-white/80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl font-black font-display text-sky-600/70">
                      {pillar.number}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display mb-1.5 sm:mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Guaranteed</span>
                  <span className="text-blue-600 font-semibold">Zero-Drift</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Tactile Micro-Interaction Feeler Card */}
        <div className="mt-8 sm:mt-12 glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-8 border border-white/95 shadow-lg sm:shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 w-full">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-blue-500/20">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 font-display">
                Experience Instantaneous 60fps Micro-Feelers
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Every control in our design system settles in under 150ms using hardware-accelerated transforms.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={(e) => {
                const target = e.currentTarget;
                target.classList.add('scale-95');
                setTimeout(() => target.classList.remove('scale-95'), 120);
              }}
              className="glass-button-primary w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider cursor-pointer active:scale-95 transition-transform text-center"
            >
              Test Spring Response
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
