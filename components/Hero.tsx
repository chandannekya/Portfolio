"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personal } from "@/lib/data";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type Star = { id: number; x: number; y: number; size: number; delay: number };
const makeStars = (): Star[] =>
  Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.8 + 0.4,
    delay: Math.random() * 3,
  }));

const SOCIALS = [
  { 
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ), 
    href: personal.github, 
    label: "GitHub" 
  },
  { 
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ), 
    href: personal.linkedin, 
    label: "LinkedIn" 
  },
  { 
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.558.217.957.477 1.377.896.419.42.679.819.896 1.377.163.422.358 1.057.412 2.227.059 1.266.071 1.646.071 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.217.558-.477.957-.896 1.377-.42.419-.819.679-1.377.896-.422.163-1.057.358-2.227.412-1.266.059-1.646.071-4.85.071s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.558-.217-.957-.477-1.377-.896-.419-.42-.679-.819-.896-1.377-.163-.422-.358-1.057-.412-2.227-.059-1.266-.071-1.646-.071-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.217-.558.477-.957.896-1.377.42-.419.819-.679 1.377-.896.422-.163 1.057-.358 2.227-.412 1.266-.059 1.646-.071 4.85-.071zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.26-2.911.557-.789.306-1.459.717-2.126 1.384-.667.667-1.078 1.337-1.384 2.126-.297.763-.5 1.634-.557 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.26 2.148.557 2.911.306.789.717 1.459 1.384 2.126.667.667 1.337 1.078 2.126 1.384.763.297 1.634.5 2.911.557 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.26 2.911-.557.789-.306 1.459-.717 2.126-1.384.667-.667 1.078-1.337 2.126-1.384.763-.297 1.634-.5 2.911-.557 1.28-.058 1.688-.072 4.947-.072s3.667.014 4.947.072c1.277.057 2.148.26 2.911.557.789.306 1.459.717 2.126 1.384.667.667 1.078 1.337 2.126 1.384.763-.297 1.634-.5 2.911-.557 1.28-.058 1.688-.072 4.947-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ), 
    href: personal.instagram, 
    label: "Instagram" 
  },
];

export function Hero() {
  const [typed, setTyped] = useState("");
  const [stars, setStars] = useState<Star[]>([]);
  const fullText = personal.tagline;
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 200]);
  const y2 = useTransform(scrollY, [0, 800], [0, -150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    setStars(makeStars());
  }, []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="min-h-[100svh] w-full flex flex-col items-center justify-center relative overflow-hidden bg-void pt-32 pb-16">
      {/* Dynamic Background */}
      <div className="absolute inset-0 grid-pattern opacity-30 mask-radial" />
      
      {/* Stars Background */}
      <motion.div style={{ opacity, y: y1 }} className="absolute inset-0 pointer-events-none">
        {stars.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full bg-steel/60"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              boxShadow: `0 0 ${s.size * 2}px var(--color-steel)`,
              animation: `pulse-slow ${3 + s.delay}s ease-in-out infinite`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </motion.div>

      {/* Hero Visual */}
      <motion.div
        style={{ y: y2 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative mb-6 lg:mb-8 flex justify-center items-center w-32 h-32 md:w-48 md:h-48"
      >
        {/* Outer Orbiting Ring */}
        <motion.div 
           animate={{ rotate: 360 }} 
           transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
           className="absolute inset-0 rounded-full border border-steel/10 pointer-events-none"
        >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold shadow-[0_0_15px_var(--color-gold)]" />
            <div className="absolute bottom-4 right-2 w-1.5 h-1.5 rounded-full bg-steel shadow-[0_0_10px_var(--color-steel)]" />
        </motion.div>

        {/* Counter-Spinning Inner Ring */}
        <motion.div 
           animate={{ rotate: -360 }} 
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           className="absolute inset-4 sm:inset-6 md:inset-8 rounded-full border border-steel/20 border-dashed opacity-50 pointer-events-none"
        />

        {/* Floating Center Target (CN Avatar) */}
        <motion.div 
           animate={{ y: [-4, 4, -4] }}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
           className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full glass flex items-center justify-center border-steel/30 shadow-[0_0_30px_var(--color-steel-ghost)]"
        >
             <span className="pixel-font text-steel text-sm md:text-xl">CN</span>
        </motion.div>
      </motion.div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center z-10 px-6 max-w-4xl"
      >
        <span className="mono-font text-[10px] md:text-[12px] text-muted tracking-[0.4em] uppercase mb-4 block">
          [ Engineering Excellence ]
        </span>
        
        <h1 className="pixel-font text-gold mb-4 leading-tight drop-shadow-sm select-none" style={{ fontSize: "clamp(1.5rem, 5vw, 4.5rem)" }}>
          {personal.name}
        </h1>

        <div className="flex flex-col items-center gap-4 md:gap-6">
            <div className="h-6 md:h-8 flex items-center">
                 <span className="pixel-font text-steel text-xs md:text-lg lg:text-xl tracking-wide">{typed}</span>
                 <span className="w-2 md:w-3 h-4 md:h-6 bg-steel ml-2 animate-pulse" />
            </div>

            <p className="mono-font text-cream/60 max-w-lg mx-auto text-xs md:text-base leading-relaxed mb-6">
              Architecting secure, distributed systems with a focus on AI integration 
              and user-centric design paradigms. 
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-12">
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  whileHover={{ y: -4, color: "var(--color-steel)" }}
                  className="p-2.5 md:p-3 glass rounded-xl text-muted border-white/5 transition-all duration-300"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3.5 bg-steel text-void pixel-font text-[10px] tracking-widest font-bold shadow-[0_0_20px_var(--color-steel-ghost)] transition-all hover:brightness-110 flex items-center justify-center gap-2"
              >
                View Works <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/14zGnIjaSh9OC3VAjZncm85_Ldvfx0smL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ backgroundColor: "rgba(116, 177, 207, 0.1)" }}
                className="w-full sm:w-auto px-8 py-3.5 border border-steel/30 text-steel pixel-font text-[10px] tracking-widest transition-all glass flex items-center justify-center gap-2"
              >
                Resume <ArrowUpRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ backgroundColor: "rgba(116, 177, 207, 0.1)" }}
                className="hidden md:flex w-full sm:w-auto px-8 py-3.5 border border-steel/30 text-steel pixel-font text-[10px] tracking-widest transition-all glass items-center justify-center gap-2"
              >
                Get Terminal
              </motion.a>
            </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="hidden [@media(min-height:750px)]:flex absolute bottom-8 flex-col items-center gap-4 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="mono-font text-[10px] text-muted tracking-widest uppercase">Explore Path</span>
        <div className="w-px h-16 bg-gradient-to-b from-steel/60 to-transparent" />
      </motion.div>
    </section>
  );
}
