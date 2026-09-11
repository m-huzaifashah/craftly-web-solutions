import { TESTIMONIALS } from '../data/content'

export default function Testimonials() {
  return (
    <section className="w-full bg-[#0a0f1d] py-24" id="testimonials">
      <div className="max-w-4xl mx-auto px-6">
        <div className="reveal-on-scroll text-center mb-14">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-2.5 font-mono">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-white font-bold tracking-tight">
            Trusted by founders and product leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={idx}
              className={`reveal-on-scroll bg-[#111c2e]/90 p-8 rounded-2xl border border-[#1e2f47] ${review.hoverBorder} hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/40 backdrop-blur-md`}
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-5">
                  {[...Array(5)].map((_, starIdx) => (
                    <span
                      key={starIdx}
                      className="material-symbols-outlined text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-slate-200 italic mb-6 leading-relaxed text-base font-normal">
                  {review.quote}
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-5 border-t border-[#1e2f47]">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-tr ${review.avatarGradient} text-white font-bold flex items-center justify-center text-sm shadow-md font-mono`}
                >
                  {review.initials}
                </div>
                <div>
                  <h3
                    className={`font-display text-white font-bold text-base ${review.hoverName} transition-colors`}
                  >
                    {review.author}
                  </h3>
                  <p className="text-slate-400 text-xs font-medium">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
