"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personal } from "@/lib/data";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";

/**
 * Premium Navbar with glassmorphism and smart scroll behaviors.
 * Features a minimalist "tech-elite" look.
 */

const LINKS = [
  { href: "#about", label: "Protocol.01", title: "About" },
  { href: "#experience", label: "Protocol.02", title: "Experience" },
  { href: "#projects", label: "Protocol.03", title: "Projects" },
  { href: "#skills", label: "Protocol.04", title: "Skills" },
  { href: "#contact", label: "Protocol.05", title: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = LINKS.map(l => l.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveTab(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="section-container !py-0">
        <nav className={`flex items-center justify-between px-6 py-3 rounded-2xl glass transition-all border-white/5 shadow-2xl ${scrolled ? 'bg-void/80 border-steel/10 shadow-steel/5' : 'bg-transparent border-transparent'}`}>
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 active:scale-95 transition-transform group">
             <div className="w-10 h-10 rounded-xl bg-steel/5 border border-steel/20 flex items-center justify-center text-steel group-hover:bg-steel group-hover:text-void transition-all duration-500">
                <Terminal className="w-5 h-5" />
             </div>
             <div className="hidden sm:block">
                <div className="pixel-font text-[10px] text-white tracking-[2px] mb-0.5">CHANDAN NEKYA</div>
                <div className="mono-font text-[8px] text-muted tracking-widest uppercase">SYSTM_READY</div>
             </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
             {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-5 py-2 rounded-xl mono-font text-[11px] uppercase tracking-widest transition-all relative group ${activeTab === link.href.slice(1) ? 'text-steel' : 'text-muted hover:text-cream'}`}
                >
                  <span className="relative z-10">{link.title}</span>
                  {activeTab === link.href.slice(1) && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-steel/5 border border-steel/20 rounded-xl z-0 shadow-[0_0_15px_var(--color-steel-ghost)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {activeTab !== link.href.slice(1) && (
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-xl transition-colors z-0" />
                  )}
                </a>
             ))}
          </div>

          {/* Hire Me CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
             <a
               href="https://drive.google.com/file/d/14zGnIjaSh9OC3VAjZncm85_Ldvfx0smL/view?usp=sharing"
               target="_blank"
               rel="noopener noreferrer"
               className="hidden md:flex items-center gap-2 mono-font text-[10px] text-cream bg-white/5 border border-white/10 px-5 py-2.5 rounded-xl hover:bg-white/10 hover:text-white transition-all duration-500 uppercase tracking-widest font-bold"
             >
               Resume <ArrowUpRight className="w-3.5 h-3.5" />
             </a>
             <a
               href="#contact"
               className="hidden md:flex items-center gap-2 mono-font text-[10px] text-steel border border-steel/30 px-5 py-2.5 rounded-xl hover:bg-steel hover:text-void transition-all duration-500 uppercase tracking-widest font-bold shadow-lg shadow-steel/5"
             >
               Hire Terminal <ArrowUpRight className="w-3.5 h-3.5" />
             </a>

             <button
               onClick={() => setMobileOpen(!mobileOpen)}
               className="lg:hidden p-2 text-muted hover:text-white transition-colors"
             >
               {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
         {mobileOpen && (
           <>
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setMobileOpen(false)}
               className="fixed inset-0 bg-void/90 backdrop-blur-md z-[90] lg:hidden"
             />
             <motion.div
               initial={{ x: "100%" }}
               animate={{ x: 0 }}
               exit={{ x: "100%" }}
               transition={{ type: "spring", damping: 30, stiffness: 300 }}
               className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-panel border-l border-white/5 p-8 z-[100] lg:hidden"
             >
                <div className="flex justify-between items-center mb-16">
                   <div className="pixel-font text-[10px] text-steel tracking-widest">MENU</div>
                   <button onClick={() => setMobileOpen(false)} className="p-2 text-muted hover:text-white border border-white/5 rounded-xl">
                      <X className="w-5 h-5" />
                   </button>
                </div>

                <div className="flex flex-col gap-6">
                   {LINKS.map((link, idx) => (
                      <motion.a
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between py-4 border-b border-white/5 group ${activeTab === link.href.slice(1) ? 'text-steel' : 'text-muted'}`}
                      >
                         <span className="pixel-font text-xs tracking-widest">{link.title}</span>
                         <span className="mono-font text-[10px] opacity-40 group-hover:opacity-100 transition-opacity">{link.label}</span>
                      </motion.a>
                   ))}
                </div>

                <div className="absolute bottom-12 left-8 right-8 flex flex-col gap-4">
                   <a
                     href="https://drive.google.com/file/d/14zGnIjaSh9OC3VAjZncm85_Ldvfx0smL/view?usp=sharing"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center justify-center gap-3 w-full py-5 border border-white/10 text-cream pixel-font text-[10px] font-bold tracking-widest uppercase rounded-2xl bg-white/5"
                   >
                     View Resume <ArrowUpRight className="w-4 h-4" />
                   </a>
                   <a
                     href="#contact"
                     onClick={() => setMobileOpen(false)}
                     className="flex items-center justify-center gap-3 w-full py-5 bg-steel text-void pixel-font text-[10px] font-bold tracking-widest uppercase rounded-2xl shadow-xl shadow-steel/10"
                   >
                     Initiate Hire <ArrowUpRight className="w-4 h-4" />
                   </a>
                </div>
             </motion.div>
           </>
         )}
      </AnimatePresence>
    </header>
  );
}
