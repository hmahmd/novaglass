import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Reviews', href: '#reviews' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-full ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-white/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-6 lg:gap-8">
        {/* Zone 1: Brand Title (Strict One-Line Contract) */}
        <a
          href="#"
          className="flex items-center gap-2.5 sm:gap-3 text-slate-900 group whitespace-nowrap shrink-0"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-600 p-[1.5px] shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200 shrink-0">
            <div className="w-full h-full bg-white/90 backdrop-blur-md rounded-[10px] flex items-center justify-center">
              <span className="font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-sky-600 to-indigo-700 text-base sm:text-lg tracking-tighter">
                N
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-slate-900 leading-none">
              NOVA GLASS
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-widest text-slate-400 uppercase font-mono mt-0.5">
              Experience Studio
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Clean 1-2 Word Single-Line Text) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-blue-600 transition-colors duration-150 whitespace-nowrap shrink-0 py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 rounded-full transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Status Pill */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200/80 shadow-xs text-xs font-medium text-slate-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20"></span>
            <span className="font-mono text-[11px] text-slate-500">Available Q1 2026</span>
          </div>

          <button
            onClick={onOpenContact}
            className="glass-button-primary px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide uppercase flex items-center gap-2 group whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Let&apos;s Build</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger & Contact Button */}
        <div className="flex items-center gap-2 lg:hidden shrink-0">
          <button
            onClick={onOpenContact}
            className="glass-button-primary px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Contact</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-1.5 sm:p-2 rounded-xl bg-white/80 border border-slate-200/70 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-5 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200 w-full max-w-full">
          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Available for Selective Commissions</span>
            </div>

            <nav className="flex flex-col gap-1 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-800 hover:text-blue-600 transition-colors py-2.5 border-b border-slate-100 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-slate-300 text-xs font-mono">→</span>
                </a>
              ))}
            </nav>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="mt-2 w-full glass-button-primary py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Initiate Project Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
