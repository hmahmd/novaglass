import React, { useState, useEffect } from 'react';
import { ArrowUp, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const [timeSF, setTimeSF] = useState('');
  const [timeZurich, setTimeZurich] = useState('');

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimeSF(
        now.toLocaleTimeString('en-US', {
          timeZone: 'America/Los_Angeles',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
      setTimeZurich(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Europe/Zurich',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/70 bg-white/50 backdrop-blur-md pt-12 pb-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-200/60">
          {/* Brand Wordmark */}
          <div className="space-y-1">
            <a href="#" className="font-display font-extrabold text-xl text-slate-900 tracking-tight">
              NOVA GLASS
            </a>
            <p className="text-xs text-slate-500 font-mono">
              Digital Designer &amp; Experience Architect
            </p>
          </div>

          {/* Navigation Links Mirror */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-600">
            <a href="#work" className="hover:text-blue-600 transition-colors">Work</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#philosophy" className="hover:text-blue-600 transition-colors">Philosophy</a>
            <a href="#reviews" className="hover:text-blue-600 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          {/* Live Studio Clocks */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>SF {timeSF || '08:30'}</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>ZRH {timeZurich || '17:30'}</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            &copy; {new Date().getFullYear()} Nova Glass Experience Architecture. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Built with React, TypeScript &amp; Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-semibold">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
