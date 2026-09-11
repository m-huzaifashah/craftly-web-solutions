import { SOLUTIONS, TECH_BADGES, VALUE_PROPS } from '../data/content'

export default function Services() {
  return (
    <section className="w-full bg-[#080d19] py-24 relative border-y border-[#1e2f47]/70" id="services">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="reveal-on-scroll text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-2.5 font-mono">
            How We Help You Win
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight">
            Engineered for real business results, not tech jargon
          </h2>
          <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
            You don’t need to worry about databases, servers, or complex acronyms. Tell us what your business wants to achieve, and we engineer and deploy the complete, high-performance solution.
          </p>
        </div>

        {/* 3 Value Guarantee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {VALUE_PROPS.map((prop, idx) => (
            <div
              key={idx}
              className="reveal-on-scroll bg-[#0c1424]/90 p-6 rounded-xl border border-[#1e2f47]/80 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-sm group shadow-md"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-[#071321] transition-all duration-300">
                <span className="material-symbols-outlined text-2xl">{prop.icon}</span>
              </div>
              <h3 className="font-display text-lg text-white font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                {prop.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {prop.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Two Core Outcome Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {SOLUTIONS.map((solution) => (
            <div
              key={solution.id}
              className={`reveal-on-scroll bg-[#111c2e]/90 p-8 sm:p-9 rounded-2xl border border-[#1e2f47] ${solution.hoverBorder} hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 group sheen-card backdrop-blur-md flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`px-3.5 py-1.5 rounded-full border text-xs font-bold tracking-wider uppercase font-mono ${solution.badgeClass}`}
                  >
                    {solution.badge}
                  </span>
                  <span className="text-slate-400 text-xs font-mono font-medium">
                    {solution.subtitle}
                  </span>
                </div>

                <h3
                  className={`font-display text-2xl text-white font-bold mb-3 ${solution.hoverTitle} transition-colors duration-200`}
                >
                  {solution.title}
                </h3>

                <p className="text-slate-300 leading-relaxed mb-6 text-sm sm:text-base">
                  {solution.description}
                </p>

                <ul className="space-y-3.5 text-sm text-slate-200">
                  {solution.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-200"
                      style={{ transitionDelay: `${idx * 75}ms` }}
                    >
                      <span className={`material-symbols-outlined ${solution.iconColor} text-[20px] shrink-0 mt-0.5`}>
                        check_circle
                      </span>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#1e2f47] flex flex-col gap-2.5 text-xs text-slate-400">
                <div className="flex items-center justify-between">
                  <span>
                    Best for: <strong className="text-slate-200 font-semibold">{solution.bestFor}</strong>
                  </span>
                </div>
                <div className="text-[11px] font-mono text-cyan-300/90 bg-[#080d19]/80 px-3 py-2 rounded-lg border border-[#1e2f47]/60">
                  {solution.techStack}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Tech Pill Badges */}
        <div className="reveal-on-scroll text-center pt-2">
          <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
            Under The Hood: Modern Production Technologies We Utilize
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {TECH_BADGES.map((badge, idx) => (
              <span
                key={idx}
                className={`px-3.5 py-1.5 bg-[#111c2e]/90 rounded-full text-xs font-medium text-slate-200 border border-[#1e2f47] ${badge.color} hover:bg-[#15243b] hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 cursor-default shadow-sm`}
              >
                {badge.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
