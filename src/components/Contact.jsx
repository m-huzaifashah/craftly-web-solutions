import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Customer Portals & SaaS Apps (Real-Time)',
    message: '',
  })
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'submitted' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('submitted')
      } else {
        throw new Error(data.error || 'Unable to deliver message right now.')
      }
    } catch (err) {
      console.error('Contact Form Submission Error:', err)
      // Fallback: If backend is offline or errors, still provide clear guidance
      setStatus('error')
      setErrorMessage(
        err.message || 'Server is temporarily unreachable. You can also email us directly at craftlywebsolutions@gmail.com.'
      )
    }
  }

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      projectType: 'Customer Portals & SaaS Apps (Real-Time)',
      message: '',
    })
    setStatus('idle')
    setErrorMessage('')
  }

  return (
    <section className="w-full bg-[#080d19] py-24 border-t border-[#1e2f47]/70" id="contact">
      <div className="max-w-2xl mx-auto px-6">
        <div className="reveal-on-scroll text-center mb-12">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-2.5 font-mono">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-white font-bold tracking-tight mb-3">
            Let’s build something great
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-4">
            Tell us about your project and we’ll get back to you within 24 hours.
          </p>
          <a
            href="mailto:craftlywebsolutions@gmail.com"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111c2e] border border-[#1e2f47] text-xs font-mono text-cyan-300 hover:text-white hover:border-cyan-400/50 transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-sm text-cyan-400">mail</span>
            <span>craftlywebsolutions@gmail.com</span>
          </a>
        </div>

        <div className="reveal-on-scroll bg-[#111c2e]/95 p-8 sm:p-10 rounded-2xl border border-[#1e2f47] shadow-2xl shadow-black/50 transition-all duration-300 hover:border-[#2e4566] backdrop-blur-md">
          {status === 'submitted' ? (
            <div className="text-center py-8 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <span className="material-symbols-outlined text-3xl">check_circle</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Message Received!
              </h3>
              <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <span className="text-cyan-300 font-semibold">{formData.name}</span>. Your inquiry regarding{' '}
                <span className="text-slate-200 font-medium">{formData.projectType}</span> has been dispatched to{' '}
                <strong className="text-white font-mono">craftlywebsolutions@gmail.com</strong>. We will reply to{' '}
                <span className="text-cyan-300 font-mono font-medium">{formData.email}</span> within 24 hours.
              </p>
              <button
                onClick={handleReset}
                className="mt-6 px-6 py-2.5 bg-[#1e2f47] hover:bg-[#253752] text-slate-200 text-sm font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-200 text-xs sm:text-sm flex items-start gap-3 animate-fadeIn">
                  <span className="material-symbols-outlined text-rose-400 text-lg shrink-0 mt-0.5">
                    error
                  </span>
                  <div className="flex-1">
                    <p className="font-semibold mb-1">Message delivery notice</p>
                    <p className="text-slate-300">{errorMessage}</p>
                    <a
                      href={`mailto:craftlywebsolutions@gmail.com?subject=Project%20Inquiry%20from%20${encodeURIComponent(
                        formData.name || 'Client'
                      )}&body=${encodeURIComponent(
                        `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\n${formData.message}`
                      )}`}
                      className="mt-2 inline-flex items-center gap-1 text-cyan-300 hover:underline font-semibold"
                    >
                      <span>Click here to send directly via your mail client</span>
                      <span className="material-symbols-outlined text-xs">arrow_outward</span>
                    </a>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name-input"
                    className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono"
                  >
                    Your Name
                  </label>
                  <input
                    id="name-input"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#0f172a] border border-[#253752] text-white placeholder-slate-400 rounded-lg px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 hover:border-[#334b6e]"
                    placeholder="e.g. Sarah Connor"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email-input"
                    className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono"
                  >
                    Email Address
                  </label>
                  <input
                    id="email-input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#0f172a] border border-[#253752] text-white placeholder-slate-400 rounded-lg px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 hover:border-[#334b6e]"
                    placeholder="sarah@example.com"
                    required
                    type="email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="project-type-select"
                  className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono"
                >
                  Project Scope / Architecture
                </label>
                <div className="relative">
                  <select
                    id="project-type-select"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-[#0f172a] border border-[#253752] text-white rounded-lg px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 hover:border-[#334b6e] appearance-none cursor-pointer"
                  >
                    <option value="Customer Portals & SaaS Apps (Real-Time)" className="bg-[#0f172a] text-white">
                      Customer Portals & SaaS Apps (Real-Time / MERN)
                    </option>
                    <option value="Enterprise Platforms & Secure Systems" className="bg-[#0f172a] text-white">
                      Enterprise Platforms & Secure Data (PERN)
                    </option>
                    <option value="High-Speed Flagship Website / Brand Refresh" className="bg-[#0f172a] text-white">
                      High-Speed Website / Brand Refresh (Next.js & React)
                    </option>
                    <option value="Custom Scope — Consultation Needed" className="bg-[#0f172a] text-white">
                      Not Sure — Help Me Choose The Optimal Stack
                    </option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-xl">
                    expand_more
                  </span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message-input"
                  className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono"
                >
                  Project Brief & Requirements
                </label>
                <textarea
                  id="message-input"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-[#0f172a] border border-[#253752] text-white placeholder-slate-400 rounded-lg p-4 text-sm transition-all duration-200 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 hover:border-[#334b6e] resize-none"
                  placeholder="Tell us about your goals, key features, expected timeline, or budget..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="relative overflow-hidden w-full inline-flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-[#071321] font-bold text-base rounded-lg transition-all duration-200 shadow-lg shadow-cyan-500/25 cursor-pointer active:scale-[0.99] group shimmer-sweep disabled:opacity-75"
              >
                <span className="relative z-10">
                  {status === 'submitting' ? 'Sending to craftlywebsolutions@gmail.com...' : 'Send Message'}
                </span>
                <span className="material-symbols-outlined text-[19px] relative z-10 transition-transform duration-200 group-hover:translate-x-1 font-bold">
                  send
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
