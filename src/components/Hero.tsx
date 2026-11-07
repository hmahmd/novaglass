import React from 'react';
import { ArrowDown, Download, Sparkles, Compass, Eye, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onOpenContact }) => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 overflow-hidden w-full max-w-full">
      {/* Background ambient light orbs contained safely */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-10 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-sky-200/40 blur-[100px] sm:blur-[120px]" />
        <div className="absolute top-40 right-4 sm:right-10 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-blue-100/50 blur-[110px] sm:blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Main Hero Card Container matching the reference design layout */}
        <div className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 xl:p-14 glass-panel overflow-hidden border border-white/95 shadow-xl sm:shadow-2xl shadow-sky-950/5 w-full">
          {/* Subtle interior glow highlights safely constrained */}
          <div className="absolute -top-12 -right-12 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-bl from-sky-200/30 via-indigo-100/20 to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-tr from-sky-100/40 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Typography, Value Proposition & Actions */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6">
              {/* Status Indicator */}
              <div className="flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 rounded-full bg-white/90 border border-sky-100 shadow-xs w-fit">
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-full w-full bg-sky-500"></span>
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-700 tracking-wide uppercase font-mono">
                  Available for Freelance &amp; Enterprise
                </span>
              </div>

              {/* Sculpted Chrome Hero Brand Headline */}
              <div className="space-y-1">
                <div className="relative inline-block max-w-full">
                  <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[0.95] select-none font-display">
                    <span className="block bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent drop-shadow-xs">
                      NOVA
                    </span>
                    <span className="block bg-gradient-to-b from-sky-700 via-blue-800 to-indigo-950 bg-clip-text text-transparent">
                      GLASS
                    </span>
                  </h1>

                  {/* Sparkle reflection icon */}
                  <div className="absolute -top-1 sm:-top-3 right-2 sm:right-6 text-sky-400 animate-pulse pointer-events-none">
                    <Sparkles className="w-5 h-5 sm:w-8 sm:h-8" />
                  </div>
                </div>

                <div className="pt-1 sm:pt-2">
                  <p className="text-base sm:text-xl font-semibold text-blue-700 tracking-tight font-display">
                    Digital Designer &amp; Experience Architect
                  </p>
                </div>
              </div>

              {/* MOBILE ONLY: Featured Futuristic Model Visual (Visible immediately on phone viewports!) */}
              <div className="block lg:hidden my-2">
                <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden bg-slate-950 border border-white/80 shadow-lg group">
                  <img
                    src="/assets/aistudio/image_d577693e.png"
                    alt="Nova Glass futuristic interface architect visual"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-white/10 pointer-events-none" />

                  {/* Mobile floating aperture indicator */}
                  <div className="absolute bottom-2.5 right-2.5 p-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full border border-sky-300 flex items-center justify-center animate-spin-slow">
                      <Sparkles className="w-3 h-3 text-sky-200" />
                    </div>
                    <span className="text-[10px] font-mono font-medium text-sky-100">Future-Proof Architecture</span>
                  </div>

                  <div className="absolute top-2.5 left-2.5 px-2 py-1 rounded-lg bg-slate-900/75 backdrop-blur-md border border-white/20 text-white flex items-center gap-1.5">
                    <Eye className="w-3 h-3 text-sky-400" />
                    <span className="text-[10px] font-mono">VisionOS &amp; Spatial Web</span>
                  </div>
                </div>
              </div>

              {/* Bio & Value Proposition */}
              <p className="text-sm sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
                I design futuristic interfaces, spatial systems, and tactile digital experiences that blend mathematical clarity, functional depth, and visual wonder.
              </p>

              {/* Primary Action Buttons (Responsive Layout: stacked/grid on mobile, inline on desktop) */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
                <button
                  onClick={onExploreWork}
                  className="glass-button-primary w-full sm:w-auto px-6 py-3.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/25 group shrink-0"
                >
                  <span>View Work</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </button>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenContact();
                  }}
                  className="glass-button-secondary w-full sm:w-auto px-6 py-3.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Inquire Project</span>
                  <Compass className="w-4 h-4 text-blue-600" />
                </a>

                <button
                  onClick={() => {
                    const dummyPdfContent = 'Nova Glass - Experience Architecture Portfolio & Resume 2026';
                    const blob = new Blob([dummyPdfContent], { type: 'text/plain' });
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'Nova-Glass-Architect-CV-2026.txt';
                    a.click();
                    window.URL.revokeObjectURL(url);
                  }}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl sm:rounded-2xl text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer hover:bg-white/60 shrink-0"
                  title="Download Curriculum Vitae"
                >
                  <Download className="w-3.5 h-3.5 text-slate-400" />
                  <span>Download CV</span>
                </button>
              </div>

              {/* Sub-credibility kicker */}
              <div className="pt-1 flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-slate-500 font-mono">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 shrink-0" />
                  <span>Enterprise Security &amp; NDA Ready</span>
                </div>
                <span className="hidden sm:inline">·</span>
                <div>Based in San Francisco &amp; Zurich</div>
              </div>
            </div>

            {/* DESKTOP ONLY: Right Column Visual Anchor Frame */}
            <div className="hidden lg:flex lg:col-span-5 relative items-center justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-white/90 via-sky-100/50 to-white/70 border border-white/90 shadow-xl shadow-sky-900/10">
                {/* Image frame */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900 group">
                  <img
                    src="/assets/aistudio/image_d577693e.png"
                    alt="Nova Glass futuristic interface architect visual"
                    className="w-full h-full object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  {/* Gradient Scrim for crisp text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-white/10 pointer-events-none" />

                  {/* Floating Glass Aperture Dial inspired by the reference image right lens */}
                  <div className="absolute bottom-4 right-4 p-3.5 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/40 shadow-lg text-white flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-sky-300/60 flex items-center justify-center animate-spin-slow">
                      <Sparkles className="w-4 h-4 text-sky-200" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-mono tracking-wider text-sky-200">Optical Focus</p>
                      <p className="text-xs font-semibold">Future-Proof Architecture</p>
                    </div>
                  </div>

                  {/* Top floating micro badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-slate-900/70 backdrop-blur-md border border-white/20 text-white flex items-center gap-2">
                    <Eye className="w-3.5 h-3.5 text-sky-400" />
                    <span className="text-xs font-medium font-mono">VisionOS &amp; Spatial Web</span>
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
