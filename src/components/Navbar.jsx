import { useState, useEffect } from 'react'
import { LOGO_URL, NAV_LINKS } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0f1d]/90 backdrop-blur-md border-b border-[#1e2f47]/80 shadow-lg shadow-black/30'
          : 'bg-[#0a0f1d]/75 backdrop-blur-sm border-b border-[#1e2f47]/50'
      }`}
    >
      <div className="h-20 max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          aria-label="Craftly.web Homepage"
          className="flex items-center gap-2.5 sm:gap-3 group transition-transform duration-200 hover:scale-[1.02] active:scale-95"
        >
          {!imageError ? (
            <img
              src={LOGO_URL}
              alt="Craftly Web Logo"
              className="h-8 sm:h-9 w-auto object-contain transition-opacity duration-200 group-hover:opacity-95"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center shadow-md shadow-cyan-500/20">
                <span className="font-mono font-black text-slate-950 text-base">C</span>
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tight">
                Craftly<span className="text-cyan-400">.web</span>
              </span>
            </div>
          )}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action area */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {/* Availability Pill */}
          <div className="hidden lg:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111c2e]/90 border border-[#1e2f47] shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
            </span>
            <span className="text-xs font-medium text-slate-300 tracking-wide">
              Available for new projects
            </span>
          </div>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="relative overflow-hidden inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 text-[#071321] text-xs sm:text-sm font-bold tracking-tight shadow-md shadow-cyan-500/25 border border-cyan-300/40 hover:from-cyan-300 hover:to-cyan-400 active:scale-95 transition-all duration-200 shimmer-sweep"
          >
            <span>Get in Touch</span>
            <span className="material-symbols-outlined text-sm sm:text-base">arrow_forward</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="md:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-slate-300 hover:text-cyan-400 bg-[#111c2e]/90 hover:bg-[#15243b] active:scale-95 active:bg-[#111c2e] rounded-xl border border-[#1e2f47] transition-all cursor-pointer shadow-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1d]/98 border-b border-[#1e2f47] px-6 pt-5 pb-7 transition-all duration-300 shadow-2xl backdrop-blur-2xl">
          <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#111c2e]/90 border border-[#1e2f47] mb-5 shadow-inner">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
              <span className="text-xs font-medium text-slate-300">
                Available for new projects
              </span>
            </div>
            <span className="text-[10px] font-mono font-semibold text-emerald-400 uppercase tracking-wider">Active</span>
          </div>

          <div className="flex flex-col gap-1.5 mb-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-cyan-300 active:bg-[#15243b] active:text-cyan-300 text-base font-medium py-2.5 px-3.5 rounded-xl hover:bg-[#111c2e] transition-colors flex items-center justify-between group"
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-slate-500 group-hover:text-cyan-400 text-sm transition-colors">
                  chevron_right
                </span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#1e2f47]/80 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full relative overflow-hidden inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 text-[#071321] text-sm font-bold rounded-xl shadow-lg shadow-cyan-500/25 active:scale-[0.98] transition-all shimmer-sweep"
            >
              <span>Get in Touch</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
            <a
              href="mailto:craftlywebsolutions@gmail.com"
              className="inline-flex items-center justify-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 font-mono py-1"
            >
              <span className="material-symbols-outlined text-sm text-cyan-400">mail</span>
              <span>craftlywebsolutions@gmail.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
