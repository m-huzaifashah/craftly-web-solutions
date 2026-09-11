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
      <div className="h-20 max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          aria-label="Craftly.web Homepage"
          className="flex items-center gap-2.5 group transition-transform duration-200 hover:scale-[1.02]"
        >
          {!imageError ? (
            <img
              src={LOGO_URL}
              alt="Craftly Web Logo"
              className="h-8 w-auto object-contain transition-opacity duration-200 group-hover:opacity-95"
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
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Availability Pill */}
          <div className="hidden sm:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111c2e]/90 border border-[#1e2f47] shadow-sm backdrop-blur-md">
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
            className="relative overflow-hidden inline-flex items-center justify-center px-4.5 py-2 bg-gradient-to-r from-cyan-400 to-cyan-500 text-[#071321] text-sm font-bold rounded-lg hover:from-cyan-300 hover:to-cyan-400 transition-all duration-200 shadow-md shadow-cyan-500/25 active:scale-95 shimmer-sweep"
          >
            Get in Touch
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-slate-300 hover:text-cyan-400 hover:bg-[#111c2e] rounded-lg border border-transparent hover:border-[#1e2f47] transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1d]/98 border-b border-[#1e2f47] px-6 py-6 transition-all duration-300 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#111c2e]/90 border border-[#1e2f47] sm:hidden">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
              <span className="text-xs font-medium text-slate-300">
                Available for new projects
              </span>
            </div>

            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-cyan-300 text-base font-medium py-2 px-3 rounded-lg hover:bg-[#111c2e] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-slate-500 text-sm">
                  chevron_right
                </span>
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-[#071321] text-sm font-bold rounded-lg shadow-md shadow-cyan-500/25"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
