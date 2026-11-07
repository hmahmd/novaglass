import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, QrCode, ArrowUpRight, Copy, Check, MessageSquare } from 'lucide-react';

interface ContactCTAProps {
  initialService?: string;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: initialService || 'Spatial & Futuristic UI',
    budget: '$50k – $100k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);

  const projectTypes = [
    'Spatial & Futuristic UI',
    'Enterprise Design System',
    'Interactive Web Platform',
    'Product Strategy & Audit',
  ];

  const budgets = ['$25k – $50k', '$50k – $100k', '$100k+'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@novaglass.studio');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Glass Container matching reference bottom card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-14 border border-white/95 shadow-2xl relative overflow-hidden">
          {/* Ambient background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-300/20 via-sky-200/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Headline & Studio Channels */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-xs font-mono font-semibold text-sky-700 uppercase mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Q1 / Q2 2026 Availability</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display leading-[1.05]">
                  Let&apos;s Build Something Extraordinary.
                </h2>

                <p className="text-base text-slate-600 mt-4 leading-relaxed">
                  Have a high-stakes project in mind or seeking to redefine your category through spatial interface design? Send us your brief or request an exploratory call.
                </p>
              </div>

              {/* Direct Contact Cards */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono uppercase text-slate-400">Direct Inquiries</p>
                      <p className="text-sm font-bold text-slate-900">hello@novaglass.studio</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase text-slate-400">Physical Studios</p>
                    <p className="text-sm font-bold text-slate-900">San Francisco &amp; Zurich</p>
                  </div>
                </div>
              </div>

              {/* QR Connect & Socials */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <button
                  onClick={() => setShowQRModal(true)}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <QrCode className="w-4 h-4 text-sky-600" />
                  <span>Scan Studio vCard</span>
                </button>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-800 transition-colors">GitHub</a>
                  <span>·</span>
                  <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-slate-800 transition-colors">X (Twitter)</a>
                  <span>·</span>
                  <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-slate-800 transition-colors">Dribbble</a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Proposal & Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg">
                {submitted ? (
                  <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 font-display">
                      Inquiry Dispatched Successfully
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. We review all incoming briefs with high confidentiality and will respond within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          projectType: 'Spatial & Futuristic UI',
                          budget: '$50k – $100k',
                          message: '',
                        });
                      }}
                      className="glass-button-secondary px-6 py-2.5 rounded-xl text-xs font-semibold cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 font-display mb-1">
                        Commission Project
                      </h3>
                      <p className="text-xs text-slate-500">
                        Fill in your project parameters for an immediate architecture review.
                      </p>
                    </div>

                    {/* Name & Email Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-medium text-slate-600 mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Maya Thorne"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-medium text-slate-600 mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="maya@enterprise.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                        />
                      </div>
                    </div>

                    {/* Project Type Segmented Selector */}
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-600 mb-2">
                        Primary Scope of Work
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {projectTypes.map((type) => (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer text-left truncate ${
                              formData.projectType === type
                                ? 'bg-slate-900 text-white shadow-xs'
                                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget Tier Selector */}
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-600 mb-2">
                        Estimated Budget Bracket
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {budgets.map((b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`py-2 px-3 rounded-xl text-xs font-semibold font-mono transition-all cursor-pointer text-center ${
                              formData.budget === b
                                ? 'bg-blue-600 text-white shadow-xs'
                                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message / Brief */}
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-600 mb-1.5">
                        Project Overview &amp; Objectives
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your product goals, timeline, and current design challenges..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full glass-button-primary py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-500/25"
                    >
                      <span>Send Project Brief</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQRModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setShowQRModal(false)}
        >
          <div
            className="glass-panel rounded-3xl p-8 max-w-sm w-full bg-white text-center shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 mx-auto flex items-center justify-center mb-4">
              <QrCode className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-display">
              Nova Glass Digital vCard
            </h3>
            <p className="text-xs text-slate-600 mt-1 mb-6">
              Instant contact synchronization for executive meetings.
            </p>

            {/* Simulated Clean SVG QR Code */}
            <div className="p-4 bg-white rounded-2xl border-2 border-slate-200 inline-block shadow-xs mb-6">
              <div className="w-48 h-48 bg-slate-950 p-2 rounded-lg flex flex-col justify-between">
                <div className="flex justify-between">
                  <div className="w-12 h-12 border-4 border-white bg-white/20" />
                  <div className="w-12 h-12 border-4 border-white bg-white/20" />
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-[10px] font-mono font-bold text-sky-400">NOVA GLASS</span>
                </div>
                <div className="flex justify-between">
                  <div className="w-12 h-12 border-4 border-white bg-white/20" />
                  <div className="w-6 h-6 bg-white" />
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => setShowQRModal(false)}
                className="w-full glass-button-primary py-2.5 rounded-xl text-xs font-semibold cursor-pointer"
              >
                Close vCard
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
