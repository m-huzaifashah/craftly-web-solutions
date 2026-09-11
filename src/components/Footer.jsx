export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-[#0a0f1d] border-t border-[#1e2f47] relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div
            onClick={scrollToTop}
            className="bg-white/95 px-2 py-1 rounded-lg shadow-sm border border-white/20 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
          >
            <img
              src="/logo.png"
              alt="Craftly Web Logo"
              className="h-6 w-auto object-contain"
            />
          </div>
          <span className="font-display font-bold text-white text-base tracking-tight">
            Craftly<span className="text-cyan-400">.web</span>
          </span>
        </div>

        <div className="flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#services" className="hover:text-cyan-400 transition-colors duration-200">
            Services
          </a>
          <a href="#work" className="hover:text-cyan-400 transition-colors duration-200">
            Work
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors duration-200">
            Contact
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1 text-xs font-mono cursor-pointer"
          >
            <span>Top</span>
            <span className="material-symbols-outlined text-sm">arrow_upward</span>
          </button>
        </div>

        <p className="text-xs text-slate-400 font-mono">
          © {new Date().getFullYear()} Craftly Web. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
