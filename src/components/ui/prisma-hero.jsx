import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import logoImg from "@/assets/logo.jpeg";
import DancingLetters from "@/components/ui/dancing-letters";



/* ---------------- WordsPullUp ---------------- */
export const WordsPullUp = ({ text, className = "", showAsterisk = false, style }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] text-cyan-400">*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ---------------- WordsPullUpMultiStyle ---------------- */
export const WordsPullUpMultiStyle = ({ segments, className = "", style }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const words = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`} style={style}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block ${w.className ?? ""}`}
          style={{ marginRight: "0.25em" }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
};

/* ---------------- Hero ---------------- */
const navItems = [
  { label: "What We Do", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const PrismaHero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="relative h-full w-full overflow-hidden">
        
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        {/* Noise overlay */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-[#0a0f1d]/20 to-[#0a0f1d]/90" />

        {/* Full-Width Navbar covering the whole width */}
        <header className="absolute top-0 left-0 right-0 w-full z-30 bg-[#0a0f1d]/85 backdrop-blur-md border-b border-[#1e2f47]/80 transition-all duration-300 shadow-lg shadow-black/20">
          <div className="h-20 max-w-7xl mx-auto px-6 flex items-center justify-between">
            {/* Logo Craftly Web */}
            <a
              href="#"
              aria-label="Craftly.web Homepage"
              className="flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.02]"
            >
              <div className="bg-white/95 px-2 py-1 rounded-lg shadow-md border border-white/20 flex items-center justify-center">
                <img
                  alt="Craftly Web Logo"
                  className="h-7 sm:h-8 w-auto object-contain"
                  src={logoImg}
                />
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tight hidden sm:inline-block">
                Craftly<span className="text-cyan-400">.web</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111c2e]/90 border border-[#1e2f47] shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
                <span className="text-xs font-medium text-slate-300 tracking-wide">
                  Available for new projects
                </span>
              </div>
              <a
                href="#contact"
                className="relative overflow-hidden inline-flex items-center justify-center px-4.5 py-2 bg-gradient-to-r from-cyan-400 to-cyan-500 text-[#071321] text-sm font-bold rounded-lg hover:from-cyan-300 hover:to-cyan-400 transition-all duration-200 shadow-md shadow-cyan-500/25 active:scale-95 shimmer-sweep"
              >
                Get in Touch
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                aria-label="Toggle navigation menu"
                className="md:hidden p-2 text-slate-300 hover:text-cyan-400 hover:bg-[#111c2e] rounded-lg border border-transparent hover:border-[#1e2f47] transition-all cursor-pointer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="material-symbols-outlined text-2xl">
                  {mobileMenuOpen ? "close" : "menu"}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-[#0a0f1d]/98 border-b border-[#1e2f47] px-6 py-6 transition-all duration-300 shadow-2xl backdrop-blur-xl">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-200 hover:text-cyan-300 text-base font-medium py-2 px-3 rounded-lg hover:bg-[#111c2e] transition-colors flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <span className="material-symbols-outlined text-slate-500 text-sm">
                      chevron_right
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-12 items-end gap-4 max-w-7xl mx-auto">
            
            {/* Title with DancingLetters physics-based animation */}
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="font-medium leading-[0.85] tracking-[-0.07em] text-[18vw] sm:text-[17vw] md:text-[16vw] lg:text-[14vw] xl:text-[13vw] 2xl:text-[14vw] select-none mb-6 sm:mb-8 md:mb-12"
                style={{ color: "#E1E0CC" }}
              >
                <DancingLetters text="Craftly" showAsterisk />
              </h1>
            </div>

            <div className="col-span-12 flex flex-col gap-5 pb-6 lg:col-span-4 lg:pb-12">
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-200"
                style={{ lineHeight: 1.4 }}
              >
                <strong className="text-white font-semibold">Craftly Web</strong> is a modern full-stack engineering studio specialized in high-performance web solutions with React, Node, PostgreSQL, and MongoDB.
              </motion.p>

              <motion.a
                href="#contact"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group inline-flex items-center gap-2 self-start rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 py-1.5 pl-6 pr-1.5 text-sm font-bold text-[#071321] transition-all hover:gap-3 sm:text-base cursor-pointer shadow-lg shadow-cyan-500/25"
              >
                <span>Start a Project</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#071321] text-cyan-300 transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </motion.a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PrismaHero };
