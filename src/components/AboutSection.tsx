import React, { useState } from 'react';
import { Layers, Cpu, Sliders } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [blurIntensity, setBlurIntensity] = useState<number>(20);
  const [glassTint, setGlassTint] = useState<'pure' | 'sky' | 'indigo'>('sky');

  const tintStyles = {
    pure: 'bg-white/70 border-white/80 text-slate-800',
    sky: 'bg-sky-50/70 border-sky-200/80 text-slate-900',
    indigo: 'bg-indigo-50/70 border-indigo-200/80 text-slate-900',
  }[glassTint];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 relative w-full max-w-full">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Ethos & Narrative */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-sky-600 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
              <span>Design Ethos &amp; Studio Direction</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display leading-[1.1]">
              Bridging Optical Glass Physics with Human Interface Ergonomics.
            </h2>

            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
              Most digital products today look either aggressively flat or burdened with fake artificial complexity. Nova Glass was founded on a singular conviction: digital surfaces should possess the tactile, translucent nobility of sculpted optical glass without ever sacrificing speed, accessibility, or clarity.
            </p>

            <div className="space-y-3 sm:space-y-4 pt-1">
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/85 border border-slate-200/80 shadow-xs flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                  <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-display">
                    Single-Elevation Depth Architecture
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-relaxed">
                    Eliminating nested card traps. Content is separated by generous mathematical whitespace, hairline light dividers, and subtle specular refractions.
                  </p>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/85 border border-slate-200/80 shadow-xs flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-display">
                    Direct Code Co-Design
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-relaxed">
                    No handoff translation loss. We build and deliver production-ready React, TypeScript, and tokenized design systems that match Figma specs down to the sub-pixel.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Optical Glass Refraction Sandbox */}
          <div className="lg:col-span-6 w-full">
            <div className="glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-white/95 shadow-xl relative overflow-hidden w-full">
              <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-slate-200/60">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-sky-600 shrink-0" />
                  <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                    Live Optical Glass Engine
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                  CSS Shader
                </span>
              </div>

              {/* Sandbox Preview Container */}
              <div className="relative h-60 sm:h-72 rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-6 flex flex-col justify-between mb-5 bg-gradient-to-tr from-slate-900 via-sky-950 to-indigo-900 shadow-inner">
                {/* Background decorative fluid elements */}
                <div className="absolute top-2 left-4 w-28 h-28 rounded-full bg-sky-400/40 blur-2xl animate-pulse" />
                <div className="absolute bottom-2 right-4 w-36 h-36 rounded-full bg-indigo-500/30 blur-2xl" />

                <div className="relative z-10 flex items-center justify-between text-white/80 text-[10px] sm:text-[11px] font-mono">
                  <span className="tracking-wider uppercase">NOVA-REFRACT-V2</span>
                  <span>60.0 FPS</span>
                </div>

                {/* The Floating Glass Plate responding to sliders */}
                <div
                  className={`relative z-10 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl transition-all duration-300 border shadow-lg sm:shadow-xl ${tintStyles}`}
                  style={{
                    backdropFilter: `blur(${blurIntensity}px)`,
                    WebkitBackdropFilter: `blur(${blurIntensity}px)`,
                  }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] sm:text-xs font-bold font-display uppercase tracking-wider">
                      Optical Specular Reflection
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/10">
                      {blurIntensity}px
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs leading-relaxed opacity-90 line-clamp-3">
                    Light passes through real refractive boundaries, scattering background noise while keeping typography razor-sharp.
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between text-white/60 text-[9px] sm:text-[10px] font-mono">
                  <span>WCAG AA: 8.4:1</span>
                  <span>SUB-PIXEL ANTI-ALIASED</span>
                </div>
              </div>

              {/* Controls */}
              <div className="space-y-3.5">
                <div>
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-1">
                    <span>Backdrop Diffusion</span>
                    <span className="font-mono text-sky-600">{blurIntensity}px</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="40"
                    value={blurIntensity}
                    onChange={(e) => setBlurIntensity(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-semibold text-slate-700">Spectral Hue:</span>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {(['pure', 'sky', 'indigo'] as const).map((tint) => (
                      <button
                        key={tint}
                        onClick={() => setGlassTint(tint)}
                        className={`px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs font-semibold uppercase tracking-wider cursor-pointer transition-all ${
                          glassTint === tint
                            ? 'bg-slate-900 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {tint}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
