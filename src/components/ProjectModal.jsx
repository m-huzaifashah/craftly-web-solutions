import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow || 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null


  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#111c2e] border border-[#2e4566] w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/10 text-left relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111c2e] via-[#111c2e]/40 to-transparent" />
          
          <span
            className={`absolute top-4 left-4 px-3 py-1 bg-[#0a0f1d]/90 rounded-full text-xs font-bold font-mono border ${project.tagColor}`}
          >
            {project.tag}
          </span>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0a0f1d]/80 hover:bg-[#1e2f47] text-slate-300 hover:text-white border border-[#2e4566] flex items-center justify-center transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          <div>
            <div className="flex items-center justify-between gap-4 mb-2">
              <h2 id="modal-title" className="font-display text-2xl sm:text-3xl text-white font-bold">
                {project.title}
              </h2>
              <span className={`font-mono text-sm font-bold ${project.metricColor}`}>
                {project.metric}
              </span>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.details.overview}
            </p>
          </div>

          {/* Key metadata grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#0c1424] border border-[#1e2f47] text-xs">
            <div>
              <span className="text-slate-500 block uppercase font-mono">Category</span>
              <strong className="text-slate-200 font-semibold">{project.category}</strong>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-mono">Client</span>
              <strong className="text-slate-200 font-semibold">{project.details.client}</strong>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-mono">Timeline</span>
              <strong className="text-cyan-300 font-semibold">{project.details.timeline}</strong>
            </div>
          </div>

          {/* Deliverables checklist */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono mb-3">
              Engineering Deliverables
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
              {project.details.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-cyan-400 text-base">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#0c1424] border-t border-[#1e2f47] flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-400 font-mono">
            Craftly Web Production Build
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#1e2f47] hover:bg-[#2e4566] text-slate-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>Visit Live Site</span>
                <span className="material-symbols-outlined text-xs">arrow_outward</span>
              </a>
            )}
            <a
              href="#contact"
              onClick={onClose}
              className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-cyan-500 text-[#071321] text-xs font-bold rounded-lg shadow-md shadow-cyan-500/20 hover:from-cyan-300 hover:to-cyan-400 transition-all font-semibold"
            >
              Start Similar Project
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
