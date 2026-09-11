import { PrismaHero } from '@/components/ui/prisma-hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <div className="bg-[#0a0f1d] font-body text-slate-200 antialiased selection:bg-cyan-500/25 selection:text-cyan-300 relative overflow-x-hidden min-h-screen">
      {/* Ambient Backdrop Lighting Elements */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-cyan-500/15 via-blue-600/10 to-transparent blur-[120px]" />
        <div className="absolute top-[35%] right-[-5%] w-[600px] h-[600px] bg-indigo-600/10 blur-[130px] rounded-full" />
        <div className="absolute top-[65%] left-[-10%] w-[650px] h-[650px] bg-cyan-600/10 blur-[140px] rounded-full" />
      </div>

      {/* Main Content Sections with PrismaHero */}
      <main className="w-full relative z-10">
        <PrismaHero />
        <div className="flex flex-col w-full">
          <Services />
          <Portfolio />
          <Process />
          <Testimonials />
          <Contact />
        </div>
      </main>

      {/* Modern Studio Footer */}
      <Footer />
    </div>
  )
}
