import React from 'react';
import { ArrowDown, Download, Sparkles, Compass, Eye, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onOpenContact }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Ambient background light orbs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full bg-sky-200/40 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-indigo-100/30 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Card Container matching the reference design layout */}
        <div className="relative rounded-3xl p-6 sm:p-10 lg:p-14 glass-panel overflow-hidden border border-white/90 shadow-2xl shadow-sky-950/5">
          {/* Subtle interior glow highlights */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sky-200/30 via-indigo-100/20 to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-sky-100/40 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Typography, Value Proposition & Actions */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              {/* Status Indicator */}
              <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-sky-100 shadow-xs w-fit">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
                </span>
                <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase font-mono">
                  Available for Freelance &amp; Enterprise
                </span>
              </div>

              {/* Sculpted Chrome Hero Brand Headline */}
              <div className="space-y-1">
                <div className="relative inline-block">
                  <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[0.92] select-none font-display">
                    <span className="block bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent drop-shadow-xs">
                      NOVA
                    </span>
                    <span className="block bg-gradient-to-b from-sky-700 via-blue-800 to-indigo-950 bg-clip-text text-transparent">
                      GLASS
                    </span>
                  </h1>

                  {/* Sparkle reflection icon */}
                  <div className="absolute -top-2 right-4 sm:-top-3 sm:right-6 text-sky-400 animate-pulse">
                    <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-lg sm:text-xl font-semibold text-blue-700 tracking-tight font-display">
                    Digital Designer &amp; Experience Architect
                  </p>
                </div>
              </div>

              {/* Bio & Value Proposition */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
                I design futuristic interfaces, spatial systems, and tactile digital experiences that blend mathematical clarity, functional depth, and visual wonder.
              </p>

              {/* Primary Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onExploreWork}
                  className="glass-button-primary px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center gap-2.5 cursor-pointer shadow-lg shadow-blue-500/25 group"
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
                  className="glass-button-secondary px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center gap-2.5 cursor-pointer"
                >
                  <span>Inquire Project</span>
                  <Compass className="w-4 h-4 text-blue-600" />
                </a>

                <button
                  onClick={() => {
                    // Trigger simulated tactile resume download
                    const dummyPdfContent = 'Nova Glass - Experience Architecture Portfolio & Resume 2026';
                    const blob = new Blob([dummyPdfContent], { type: 'text/plain' });
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'Nova-Glass-Architect-CV-2026.txt';
                    a.click();
                    window.URL.revokeObjectURL(url);
                  }}
                  className="px-4 py-3 rounded-2xl text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer hover:bg-white/60"
                  title="Download Curriculum Vitae"
                >
                  <Download className="w-3.5 h-3.5 text-slate-400" />
                  <span>Download CV</span>
                </button>
              </div>

              {/* Sub-credibility kicker */}
              <div className="pt-2 flex items-center gap-4 text-xs text-slate-500 font-mono">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Enterprise Security &amp; NDA Ready</span>
                </div>
                <span>·</span>
                <div>Based in San Francisco &amp; Zurich</div>
              </div>
            </div>

            {/* Right Column: Visual Anchor with Futuristic Glass Visor Imagery & Floating Widgets */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-white/90 via-sky-100/50 to-white/70 border border-white/90 shadow-xl shadow-sky-900/10">
                {/* Image frame */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900 group">
                  <img
                    src="/assets/aistudio/image_d577693e.png"
                    alt="Nova Glass futuristic interface architect visual"
                    className="w-full h-full object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Graceful fallback container if asset fails
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

              {/* Decorative Glass Refraction Plate behind the image */}
              <div className="absolute -bottom-4 -left-4 -z-10 w-28 h-28 rounded-2xl bg-white/60 backdrop-blur-lg border border-white/80 shadow-md rotate-6" />
              <div className="absolute -top-4 -right-4 -z-10 w-24 h-24 rounded-2xl bg-sky-100/60 backdrop-blur-lg border border-white/80 shadow-md -rotate-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
