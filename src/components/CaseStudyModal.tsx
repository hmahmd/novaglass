import React, { useState } from 'react';
import { CaseStudy } from '../types';
import { X, CheckCircle2, BarChart3, ArrowRight } from 'lucide-react';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onSelectNext: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ study, onClose, onSelectNext }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'challenge' | 'deliverables'>('overview');

  if (!study) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-slate-900/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl my-auto glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 bg-white/95 border border-white/95 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer z-20"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-slate-500 mb-2 sm:mb-3 pr-10">
          <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-blue-50 text-blue-700 font-semibold border border-blue-100 text-[10px] sm:text-xs">
            CASE STUDY {study.number}
          </span>
          <span>·</span>
          <span className="truncate">{study.client}</span>
          <span>·</span>
          <span>{study.year}</span>
        </div>

        {/* Title & Subtitle */}
        <h2 id="case-study-title" className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
          {study.title}
        </h2>
        <p className="text-xs sm:text-base text-slate-600 mt-1 mb-5">
          {study.subtitle}
        </p>

        {/* Interactive Tabs Header with mobile scroll */}
        <div className="overflow-x-auto no-scrollbar pb-1 mb-5 w-full">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl w-max">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Overview &amp; Impact
            </button>
            <button
              onClick={() => setActiveTab('challenge')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'challenge'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Problem &amp; Solution
            </button>
            <button
              onClick={() => setActiveTab('deliverables')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'deliverables'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Deliverables &amp; Code
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-5">
          {activeTab === 'overview' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              {/* Highlight Metric Card */}
              <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 border border-blue-100 flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-2.5 rounded-xl bg-blue-600 text-white shrink-0 mt-0.5">
                  <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-[10px] sm:text-xs font-mono font-semibold text-blue-900 uppercase tracking-wider">
                    Measurable Production Impact
                  </h3>
                  <p className="text-sm sm:text-xl font-bold text-slate-900 mt-0.5">
                    {study.impact}
                  </p>
                </div>
              </div>

              <div className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                {study.description}
              </div>

              {/* Tags & Stack Chips */}
              <div className="pt-1">
                <h4 className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Core Technologies &amp; Methodologies
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {study.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/80 text-[11px] font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'challenge' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 animate-in fade-in duration-150">
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-rose-600 font-semibold text-xs uppercase font-mono">
                  <span>The Architectural Challenge</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-sky-50/70 border border-sky-100 space-y-1.5">
                <div className="flex items-center gap-2 text-sky-700 font-semibold text-xs uppercase font-mono">
                  <span>The Nova Glass Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {study.solution}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'deliverables' && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {study.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="mt-6 pt-5 border-t border-slate-200/70 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400 font-mono">Category:</span>
            <span className="font-semibold text-slate-800">{study.category}</span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onSelectNext}
              className="flex-1 sm:flex-none px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Next</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none glass-button-primary px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer text-center"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
