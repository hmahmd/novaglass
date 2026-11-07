import React, { useState } from 'react';
import { Eye, Layers, ShieldCheck, Sparkles, Cpu, Sliders } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [blurIntensity, setBlurIntensity] = useState<number>(20);
  const [glassTint, setGlassTint] = useState<'pure' | 'sky' | 'indigo'>('sky');

  const tintStyles = {
    pure: 'bg-white/70 border-white/80 text-slate-800',
    sky: 'bg-sky-50/70 border-sky-200/80 text-slate-900',
    indigo: 'bg-indigo-50/70 border-indigo-200/80 text-slate-900',
  }[glassTint];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Ethos & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-sky-600 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
              <span>Design Ethos &amp; Studio Direction</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display leading-[1.1]">
              Bridging Optical Glass Physics with Human Interface Ergonomics.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Most digital products today look either aggressively flat or burdened with fake artificial complexity. Nova Glass was founded on a singular conviction: digital surfaces should possess the tactile, translucent nobility of sculpted optical glass without ever sacrificing speed, accessibility, or clarity.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-display">
                    Single-Elevation Depth Architecture
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Eliminating nested card-within-card traps. Content is separated by generous mathematical whitespace, hairline light dividers, and subtle specular refractions.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-display">
                    Direct Code Co-Design
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    No handoff translation loss. We build and deliver production-ready React, TypeScript, and tokenized design systems that match Figma specifications down to the sub-pixel.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Optical Glass Refraction Sandbox */}
          <div className="lg:col-span-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/95 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200/60">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-sky-600" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                    Live Optical Glass Engine
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                  Real-time CSS Shader
                </span>
              </div>

              {/* Sandbox Preview Container */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden p-6 flex flex-col justify-between mb-6 bg-gradient-to-tr from-slate-900 via-sky-950 to-indigo-900 shadow-inner">
                {/* Background decorative fluid elements */}
                <div className="absolute top-2 left-6 w-32 h-32 rounded-full bg-sky-400/40 blur-2xl animate-pulse" />
                <div className="absolute bottom-2 right-6 w-40 h-40 rounded-full bg-indigo-500/30 blur-2xl" />

                <div className="relative z-10 flex items-center justify-between text-white/80">
                  <span className="text-[11px] font-mono tracking-widest uppercase">SPECIES: NOVA-REFRACT-V2</span>
                  <span className="text-[11px] font-mono">60.0 FPS</span>
                </div>

                {/* The Floating Glass Plate responding to sliders */}
                <div
                  className={`relative z-10 p-5 rounded-2xl transition-all duration-300 border shadow-xl ${tintStyles}`}
                  style={{
                    backdropFilter: `blur(${blurIntensity}px)`,
                    WebkitBackdropFilter: `blur(${blurIntensity}px)`,
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold font-display uppercase tracking-wider">
                      Optical Specular Reflection
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/10">
                      Blur: {blurIntensity}px
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed opacity-90">
                    Light passes through real refractive boundaries, scattering high-frequency background noise while keeping primary typography razor-sharp.
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between text-white/60 text-[10px] font-mono">
                  <span>WCAG AA CONTRAST RATIO: 8.4:1</span>
                  <span>SUB-PIXEL ANTI-ALIASED</span>
                </div>
              </div>

              {/* Controls */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-1.5">
                    <span>Backdrop Diffusion (Blur Radius)</span>
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

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-semibold text-slate-700">Glass Spectral Hue:</span>
                  <div className="flex items-center gap-2">
                    {(['pure', 'sky', 'indigo'] as const).map((tint) => (
                      <button
                        key={tint}
                        onClick={() => setGlassTint(tint)}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider cursor-pointer transition-all ${
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
