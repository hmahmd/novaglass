import React, { useState } from 'react';
import { SKILLS, TECH_STACK } from '../data/content';
import { Sparkles, Code2, Compass, Layers, CheckCircle2, ChevronRight, Boxes } from 'lucide-react';

export const BentoGrid: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(0);
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [philosophyFocus, setPhilosophyFocus] = useState<string>('Glass Aesthetics');

  const philosophies = [
    {
      id: 'human',
      position: 'top',
      title: 'Human-Centered',
      desc: 'Ergonomic layouts reducing cognitive burden and respecting human visual attention.'
    },
    {
      id: 'glass',
      position: 'right',
      title: 'Glass Aesthetics',
      desc: 'Frosted surfaces, specular edge reflections, and tactile refractive depth.'
    },
    {
      id: 'spatial',
      position: 'bottom',
      title: 'Spatial Experience',
      desc: 'Seamless dimensional hierarchy spanning mobile, ultra-wide desktop, and AR headsets.'
    },
    {
      id: 'kinetic',
      position: 'left',
      title: 'Kinetic Precision',
      desc: 'Physics-based 60fps micro-transitions that confirm user intent instantly.'
    }
  ];

  return (
    <section id="philosophy" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-sky-600 uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            <span>Core Architecture &amp; Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Skills, Stack &amp; Design Philosophy
          </h2>
          <p className="text-base text-slate-600 mt-2 max-w-2xl">
            A balanced triad of technical mastery, industry tooling, and foundational architectural principles.
          </p>
        </div>

        {/* 3-Column Bento Grid matching the reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: SKILLS & EXPERTISE (4 cols) */}
          <div className="lg:col-span-4 glass-panel rounded-3xl p-6 sm:p-7 border border-white/90 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/70">
                <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-slate-800 uppercase">
                  <span className="text-sky-500">◆</span>
                  <span>Skills &amp; Expertise</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">Benchmarked</span>
              </div>

              <div className="space-y-4">
                {SKILLS.map((skill, index) => {
                  const isSelected = selectedSkill === index;
                  return (
                    <div
                      key={skill.name}
                      onClick={() => setSelectedSkill(index)}
                      className={`p-3 rounded-2xl transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-white shadow-xs border border-sky-100'
                          : 'hover:bg-white/50 border border-transparent'
                      }`}
                    >
                      <div className="flex justify-between items-center text-xs font-semibold text-slate-800 mb-1.5">
                        <span className="flex items-center gap-1.5">
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                          {skill.name}
                        </span>
                        <span className="font-mono text-blue-600 font-bold">{skill.percentage}%</span>
                      </div>
                      {/* Animated Progress Bar */}
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden p-[1px]">
                        <div
                          className="h-full bg-gradient-to-r from-sky-400 to-blue-600 rounded-full transition-all duration-700 ease-out"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                      {isSelected && (
                        <p className="text-[11px] text-slate-500 mt-2 font-mono leading-relaxed animate-in fade-in duration-200">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>Audited against ISO 9241 UX specs</span>
              <span className="text-sky-600 font-semibold">99.4th Percentile</span>
            </div>
          </div>

          {/* Card 2: TECH STACK (4 cols) */}
          <div className="lg:col-span-4 glass-panel rounded-3xl p-6 sm:p-7 border border-white/90 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/70">
                <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-slate-800 uppercase">
                  <span className="text-blue-500">◆</span>
                  <span>Tech Stack</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">9 Core Engines</span>
              </div>

              {/* 3x3 Tool Grid matching reference image */}
              <div className="grid grid-cols-3 gap-3">
                {TECH_STACK.map((item) => {
                  const isActive = activeTech === item.name;
                  return (
                    <button
                      key={item.name}
                      onClick={() => setActiveTech(isActive ? null : item.name)}
                      className={`p-3.5 rounded-2xl flex flex-col items-center justify-center text-center transition-all cursor-pointer group ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-102 border-transparent'
                          : 'bg-white/80 hover:bg-white text-slate-800 border border-slate-200/70 hover:shadow-xs'
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl mb-2 flex items-center justify-center font-black font-display text-sm ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'bg-sky-50 text-blue-600 group-hover:bg-blue-50'
                        }`}
                      >
                        {item.name.substring(0, 2).toUpperCase()}
                      </div>
                      <span className="text-xs font-bold tracking-tight">{item.name}</span>
                      <span
                        className={`text-[10px] font-mono mt-0.5 ${
                          isActive ? 'text-blue-100' : 'text-slate-400'
                        }`}
                      >
                        {item.level}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Stack Detail Card */}
              {activeTech ? (
                <div className="mt-4 p-3.5 rounded-2xl bg-white border border-blue-100 shadow-xs animate-in fade-in duration-150">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">{activeTech}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                      {TECH_STACK.find((t) => t.name === activeTech)?.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    {TECH_STACK.find((t) => t.name === activeTech)?.role}
                  </p>
                </div>
              ) : (
                <p className="text-[11px] text-slate-500 text-center mt-4 font-mono">
                  Click any tool badge to inspect architectural specialization.
                </p>
              )}
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>Zero external bloat</span>
              <span className="text-blue-600 font-semibold">100% Type-Safe</span>
            </div>
          </div>

          {/* Card 3: DESIGN PHILOSOPHY (4 cols) */}
          <div className="lg:col-span-4 glass-panel rounded-3xl p-6 sm:p-7 border border-white/90 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/70">
                <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-slate-800 uppercase">
                  <span className="text-indigo-500">◆</span>
                  <span>Design Philosophy</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">4 Axes</span>
              </div>

              {/* Diamond Radar Simulation matching reference image */}
              <div className="relative w-full aspect-square max-w-[260px] mx-auto flex items-center justify-center my-3">
                {/* Concentric rings */}
                <div className="absolute inset-0 rounded-full border border-sky-200/60" />
                <div className="absolute inset-6 rounded-full border border-sky-100/80" />
                <div className="absolute inset-12 rounded-full border border-dashed border-sky-200/60" />

                {/* Central Floating Polyhedron / Crystal Prism */}
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600 p-[2px] shadow-xl shadow-blue-500/30 animate-pulse">
                  <div className="w-full h-full rounded-[14px] bg-white/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-1">
                    <Boxes className="w-6 h-6 text-blue-600 mb-0.5" />
                    <span className="text-[9px] font-mono font-bold text-slate-800 leading-none">NOVA</span>
                    <span className="text-[8px] font-mono text-blue-600">NEXUS</span>
                  </div>
                </div>

                {/* 4 Interactive Philosophy Nodes */}
                {philosophies.map((p) => {
                  const isActive = philosophyFocus === p.title;
                  const posClasses = {
                    top: 'top-0 left-1/2 -translate-x-1/2',
                    right: 'right-0 top-1/2 -translate-y-1/2',
                    bottom: 'bottom-0 left-1/2 -translate-x-1/2',
                    left: 'left-0 top-1/2 -translate-y-1/2'
                  }[p.position];

                  return (
                    <button
                      key={p.id}
                      onClick={() => setPhilosophyFocus(p.title)}
                      className={`absolute ${posClasses} px-2.5 py-1 rounded-xl text-[10px] font-bold font-mono tracking-tight transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-slate-900 text-white shadow-md scale-105'
                          : 'bg-white/90 text-slate-700 border border-slate-200 hover:border-blue-400'
                      }`}
                    >
                      {p.title}
                    </button>
                  );
                })}
              </div>

              {/* Active Philosophy Highlight Box */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-white to-sky-50/50 border border-sky-100 shadow-xs">
                <p className="text-xs font-bold text-slate-900 font-display flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  {philosophyFocus}
                </p>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {philosophies.find((p) => p.title === philosophyFocus)?.desc}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>Tactile Ergonomics</span>
              <span className="text-indigo-600 font-semibold">100% Focused</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
