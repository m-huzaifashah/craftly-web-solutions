import { useState } from 'react'
import { PROJECTS } from '../data/content'
import ProjectModal from './ProjectModal'

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeFilter, setActiveFilter] = useState('ALL')

  const FILTERS = [
    { label: 'All Projects', key: 'ALL' },
    { label: 'Enterprise & Industrial', key: 'ENTERPRISE' },
    { label: 'Fitness & Memberships', key: 'FITNESS' },
    { label: 'Travel & Tourism', key: 'TRAVEL' },
    { label: 'Restaurant & Dining', key: 'DINING' },
  ]

  const filteredProjects =
    activeFilter === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => {
          const str = `${p.title} ${p.category} ${p.tag} ${p.description}`.toUpperCase()
          if (activeFilter === 'ENTERPRISE') return str.includes('INDUSTRIAL') || str.includes('ENERGY') || str.includes('ENTERPRISE')
          if (activeFilter === 'FITNESS') return str.includes('FITNESS') || str.includes('GYM') || str.includes('HEALTH')
          if (activeFilter === 'TRAVEL') return str.includes('TRAVEL') || str.includes('TOURISM')
          if (activeFilter === 'DINING') return str.includes('RESTAURANT') || str.includes('DINING') || str.includes('CULINARY')
          return true
        })

  return (
    <section className="w-full bg-[#0a0f1d] py-24 border-t border-[#1e2f47]/60" id="work">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-on-scroll flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-2 font-mono">
              Portfolio
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-bold tracking-tight">
              Featured Live Projects
            </h2>
          </div>
          <p className="text-slate-300 text-sm sm:text-base max-w-sm">
            Live client applications and platforms designed, engineered, and deployed by Craftly Web.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="reveal-on-scroll flex items-center gap-2 mb-10 overflow-x-auto pb-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeFilter === f.key
                  ? 'bg-cyan-400 text-[#071321] shadow-md shadow-cyan-500/20'
                  : 'bg-[#111c2e]/90 text-slate-300 border border-[#1e2f47] hover:border-cyan-400/40 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* 2x2 Responsive Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`reveal-on-scroll bg-[#111c2e]/90 rounded-2xl overflow-hidden border border-[#1e2f47] flex flex-col group ${project.hoverBorder} hover:-translate-y-1.5 transition-all duration-300 sheen-card hover:shadow-2xl backdrop-blur-md`}
            >
              {/* Card Image Area */}
              <div
                className="h-56 overflow-hidden relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111c2e] via-transparent to-transparent" />
                
                {/* Tech Tag */}
                <span
                  className={`absolute top-3.5 left-3.5 px-3 py-1 bg-[#0a0f1d]/90 rounded-full text-xs font-bold font-mono border ${project.tagColor} shadow-md backdrop-blur-sm`}
                >
                  {project.tag}
                </span>

                {/* Live Indicator Pill */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-3.5 right-3.5 px-3 py-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 transition-all shadow-md backdrop-blur-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Live Site</span>
                  <span className="material-symbols-outlined text-xs">arrow_outward</span>
                </a>
              </div>

              {/* Card Content Area */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className={`font-display text-xl text-white font-bold cursor-pointer ${project.hoverTitle} transition-colors duration-200`}
                    >
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono font-semibold text-slate-400 bg-[#0c1424] px-2.5 py-1 rounded border border-[#1e2f47]">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Footer Controls with Direct Live Link & Modal Trigger */}
                <div className="pt-4 border-t border-[#1e2f47] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-medium">Metric:</span>
                    <span className={`${project.metricColor} font-bold font-mono`}>
                      {project.metric}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-slate-300 hover:text-white font-medium hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>Details</span>
                    </button>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-[#071321] font-bold rounded-lg transition-all flex items-center gap-1 shadow-sm shadow-cyan-500/20"
                    >
                      <span>Visit Live</span>
                      <span className="material-symbols-outlined text-xs font-bold">
                        open_in_new
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
