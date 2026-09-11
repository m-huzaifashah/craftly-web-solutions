import { useRef, useState } from 'react'
import { STATS } from '../data/content'

export default function Hero() {
  const heroRef = useRef(null)
  const [spotlightStyle, setSpotlightStyle] = useState({
    opacity: 0,
    background: 'radial-gradient(650px circle at 50% 40%, rgba(6, 182, 212, 0.18), rgba(59, 130, 246, 0.08) 40%, transparent 80%)',
  })

  const handleMouseMove = (e) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setSpotlightStyle({
      opacity: 1,
      background: `radial-gradient(650px circle at ${x}px ${y}px, rgba(6, 182, 212, 0.18), rgba(59, 130, 246, 0.08) 40%, transparent 80%)`,
    })
  }

  const handleMouseLeave = () => {
    setSpotlightStyle((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden pt-20 pb-20 md:pt-28 md:pb-28"
      id="hero-section"
    >
      {/* Interactive Mouse Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-700 md:block hidden"
        style={spotlightStyle}
      />

      {/* Ambient Glowing Pulse */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-cyan-400/20 via-blue-500/10 to-transparent blur-3xl pointer-events-none animate-hero-glow" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Status Badge */}
        <div className="reveal-on-scroll inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111c2e]/90 border border-cyan-500/40 mb-8 backdrop-blur-md shadow-sm shadow-cyan-500/15 cursor-default hover:border-cyan-400 hover:shadow-cyan-500/25 transition-all duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span className="text-xs font-bold text-cyan-300 tracking-wider uppercase font-mono">
            Full-Stack Engineering Studio
          </span>
        </div>

        {/* Headline & Subtitle */}
        <h1 className="reveal-on-scroll font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.14] text-balance mb-6">
          We build modern, <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 drop-shadow-sm">
            lightning-fast
          </span>{' '}
          web applications.
        </h1>

        <p className="reveal-on-scroll text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed text-balance font-normal">
          Full-stack web development with React, Node, PostgreSQL, and MongoDB. From clean design to reliable production code.
        </p>

        {/* CTAs */}
        <div className="reveal-on-scroll flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#contact"
            className="w-full sm:w-auto relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-cyan-400 hover:bg-cyan-300 text-[#071321] font-bold text-base rounded-lg shadow-lg btn-ambient-glow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group shimmer-sweep"
          >
            <span className="relative z-10">Start a Project</span>
            <span className="material-symbols-outlined text-[19px] relative z-10 font-semibold transition-transform duration-200 group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#111c2e]/90 border border-[#1e2f47] text-white font-semibold text-base rounded-lg hover:bg-[#15243b] hover:border-cyan-500/50 hover:text-cyan-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 backdrop-blur-md shadow-sm"
          >
            <span>View Work</span>
          </a>
        </div>

        {/* Metric Stats: High Contrast & Crisp Tactile Borders */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-[#1e2f47]/80">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`reveal-on-scroll p-5 rounded-xl bg-[#111c2e]/90 border border-[#1e2f47] ${stat.borderColor} hover:bg-[#15243b] hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 group cursor-default shadow-md shadow-black/40 backdrop-blur-md`}
            >
              <span
                className={`block font-display text-3xl sm:text-4xl font-extrabold tracking-tight transition-all duration-200 ${stat.colorClass}`}
              >
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-slate-400 mt-1.5 block font-medium group-hover:text-slate-200 transition-colors">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
