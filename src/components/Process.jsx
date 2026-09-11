import { PROCESS_STEPS } from '../data/content'

export default function Process() {
  return (
    <section className="w-full bg-[#080d19] py-24 border-y border-[#1e2f47]/70" id="process">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-on-scroll text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-2.5 font-mono">
            How We Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-white font-bold tracking-tight">
            A simple, transparent process
          </h2>
          <p className="text-slate-300 mt-3.5 text-base sm:text-lg">
            From initial idea to launch day, we keep communication straightforward and momentum high.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className={`reveal-on-scroll bg-[#111c2e]/90 p-7 rounded-2xl border border-[#1e2f47] ${step.colorTheme.hoverBorder} hover:-translate-y-1.5 transition-all duration-300 group cursor-default shadow-md backdrop-blur-md flex flex-col justify-between`}
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 group-hover:text-[#071321] group-hover:scale-110 transition-all duration-300 shadow-sm ${step.colorTheme.iconBox}`}
                >
                  <span className="material-symbols-outlined text-[24px]">
                    {step.icon}
                  </span>
                </div>
                <span
                  className={`text-xs font-bold font-mono tracking-wider uppercase block mb-1.5 ${step.colorTheme.badge}`}
                >
                  {step.step}
                </span>
                <h3
                  className={`font-display text-lg text-white font-bold mb-2 ${step.colorTheme.hoverTitle} transition-colors`}
                >
                  {step.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
