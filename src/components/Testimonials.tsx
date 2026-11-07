import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/content';
import { Quote, Star, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="reviews" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-sky-600 uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
              <span>Client Endorsements</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
              Verified Executive Reviews
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-xl">
              Concrete outcomes and testimonials from executive design directors, founders, and engineering leaders.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1))}
              aria-label="Previous testimonial"
              className="p-3 rounded-2xl bg-white border border-slate-200/80 text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-xs transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-mono text-xs font-semibold text-slate-400">
              {activeIndex + 1} / {TESTIMONIALS.length}
            </span>
            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
              aria-label="Next testimonial"
              className="p-3 rounded-2xl bg-white border border-slate-200/80 text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-xs transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Hero Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/95 shadow-2xl relative overflow-hidden">
          <Quote className="w-16 h-16 text-sky-200 absolute -top-2 right-8 opacity-40 pointer-events-none" />

          <div className="max-w-4xl">
            {/* Metric highlight badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-mono font-bold text-blue-700 mb-6">
              <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>Verified Impact: {current.metric}</span>
            </div>

            <blockquote className="text-xl sm:text-3xl font-medium text-slate-800 leading-snug tracking-tight font-display">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {/* Styled Resilient Glass Avatar with Initials Fallback */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-600 p-[1.5px] shadow-sm">
                  <div className="w-full h-full rounded-[14px] bg-slate-900 text-white flex items-center justify-center font-bold text-sm font-display">
                    {current.author.split(' ').map((n) => n[0]).join('')}
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    {current.author}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    {current.role} · <span className="text-slate-800 font-medium">{current.company}</span>
                  </p>
                </div>
              </div>

              {/* 5-Star indicator */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 mini cards below for quick scanning */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-5 rounded-2xl transition-all cursor-pointer border ${
                activeIndex === idx
                  ? 'bg-white shadow-md border-sky-300 ring-2 ring-sky-100'
                  : 'bg-white/60 hover:bg-white/90 border-slate-200/70'
              }`}
            >
              <p className="text-xs font-mono font-semibold text-blue-600 mb-1">
                {item.company}
              </p>
              <p className="text-xs text-slate-700 line-clamp-2 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <p className="text-[11px] text-slate-400 mt-2 font-mono">
                — {item.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
