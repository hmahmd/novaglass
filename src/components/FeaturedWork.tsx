import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/content';
import { CaseStudy } from '../types';
import { ArrowUpRight, Sparkles, Zap, Smartphone } from 'lucide-react';
import { CaseStudyModal } from './CaseStudyModal';

export const FeaturedWork: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  const categories = ['All', 'Spatial & UI/UX', 'Mobility & Web', 'Mobile Systems'];

  const filteredStudies = selectedCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((s) => s.category === selectedCategory);

  const handleSelectNext = () => {
    if (!activeStudy) return;
    const currentIndex = CASE_STUDIES.findIndex((s) => s.id === activeStudy.id);
    const nextIndex = (currentIndex + 1) % CASE_STUDIES.length;
    setActiveStudy(CASE_STUDIES[nextIndex]);
  };

  return (
    <section id="work" className="py-16 sm:py-20 md:py-28 relative w-full max-w-full">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-sky-600 uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
              Featured Case Studies
            </h2>
            <p className="text-xs sm:text-base text-slate-600 mt-1.5 max-w-xl">
              Production interfaces blending optical glass aesthetics, high-density telemetry, and sensory responsiveness.
            </p>
          </div>

          {/* Interactive Category Segmented Control with horizontal scroll on mobile */}
          <div className="w-full sm:w-auto overflow-x-auto no-scrollbar py-1">
            <div className="flex items-center gap-1.5 p-1.5 bg-white/85 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-xs w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3-Column Grid matching reference image cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => setActiveStudy(study)}
              className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-white/95 group cursor-pointer flex flex-col justify-between w-full"
            >
              <div>
                {/* Visual Preview Frame */}
                <div className="relative aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 mb-4 sm:mb-5 border border-slate-800/40 shadow-inner">
                  {/* Custom Simulated UI for each project to match the high-end reference mockup */}
                  {study.id === 'stellar-command' && (
                    <div className="w-full h-full p-3 sm:p-4 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800/50">
                          ORBITAL HUD // LEO-4
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <div className="space-y-1.5">
                        <div className="h-1.5 w-3/4 bg-sky-500/40 rounded-full" />
                        <div className="h-1.5 w-1/2 bg-blue-500/30 rounded-full" />
                        <div className="grid grid-cols-3 gap-1.5 pt-1 sm:pt-2">
                          <div className="p-1 sm:p-1.5 rounded bg-white/5 border border-white/10 text-center">
                            <p className="text-[8px] sm:text-[9px] text-slate-400 font-mono">VELOCITY</p>
                            <p className="text-[10px] sm:text-xs font-bold text-sky-300 font-mono">7.8 km/s</p>
                          </div>
                          <div className="p-1 sm:p-1.5 rounded bg-white/5 border border-white/10 text-center">
                            <p className="text-[8px] sm:text-[9px] text-slate-400 font-mono">APOGEE</p>
                            <p className="text-[10px] sm:text-xs font-bold text-emerald-300 font-mono">420 km</p>
                          </div>
                          <div className="p-1 sm:p-1.5 rounded bg-white/5 border border-white/10 text-center">
                            <p className="text-[8px] sm:text-[9px] text-slate-400 font-mono">TELEMETRY</p>
                            <p className="text-[10px] sm:text-xs font-bold text-indigo-300 font-mono">SYNCED</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {study.id === 'quantum-drive' && (
                    <div className="w-full h-full p-3 sm:p-4 bg-gradient-to-br from-slate-900 via-neutral-900 to-sky-950 text-white flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-blue-300 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/50">
                          AETHER COCKPIT 3D
                        </span>
                        <Zap className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <div className="my-auto flex items-center justify-center">
                        <div className="w-20 sm:w-24 h-10 sm:h-12 rounded-full border-2 border-sky-400/60 flex items-center justify-center bg-sky-500/10 shadow-lg shadow-sky-500/20">
                          <span className="text-[11px] sm:text-xs font-bold font-mono tracking-widest text-sky-200">920 HP</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-mono text-slate-400">
                        <span>AERO: 0.19 CD</span>
                        <span className="text-sky-400 font-semibold">RANGE: 620 KM</span>
                      </div>
                    </div>
                  )}

                  {study.id === 'zenith-app' && (
                    <div className="w-full h-full p-3 sm:p-4 bg-gradient-to-br from-indigo-950 via-slate-900 to-sky-900 text-white flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800/50">
                          ZENITH // NEURO-FOCUS
                        </span>
                        <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
                      </div>
                      <div className="space-y-1.5 py-1">
                        <div className="p-1.5 sm:p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                            <span className="text-[11px] sm:text-xs font-semibold">Focus Sprint</span>
                          </div>
                          <span className="text-[10px] font-mono text-sky-200">52:00</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-sky-400 to-indigo-400 w-3/4 rounded-full" />
                        </div>
                      </div>
                      <div className="text-[9px] sm:text-[10px] font-mono text-slate-400 flex justify-between">
                        <span>ALPHA BRAINWAVE</span>
                        <span className="text-emerald-400">OPTIMAL</span>
                      </div>
                    </div>
                  )}

                  {/* Number Overlay in the top-left corner */}
                  <div className="absolute top-2.5 left-2.5 w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-[10px] sm:text-xs font-mono font-bold">
                    {study.number}
                  </div>

                  {/* Hover Inspect Pill */}
                  <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-xl bg-white text-slate-900 text-xs font-semibold shadow-lg flex items-center gap-1.5 transform scale-95 group-hover:scale-100 transition-transform">
                      <span>Inspect Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Title & Description */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-display">
                    {study.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {study.subtitle}
                  </p>
                </div>
              </div>

              {/* Tags / Metadata without pill badge spam, following zero-pill discipline */}
              <div className="pt-3.5 mt-3.5 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5 font-medium truncate max-w-[70%]">
                  <span className="truncate">{study.tags[0]}</span>
                  <span>·</span>
                  <span className="truncate">{study.tags[1]}</span>
                </div>
                <span className="font-mono text-[11px] text-blue-600 font-semibold group-hover:translate-x-0.5 transition-transform shrink-0">
                  View →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        study={activeStudy}
        onClose={() => setActiveStudy(null)}
        onSelectNext={handleSelectNext}
      />
    </section>
  );
};
