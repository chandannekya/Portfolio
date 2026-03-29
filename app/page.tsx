import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-void text-cream">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      
      {/* Premium Footer */}
      <footer className="py-12 border-t border-white/5 text-center">
         <div className="mono-font text-[10px] text-muted uppercase tracking-[0.4em] mb-4">
            [ Built by Chandan Nekya // 2026_Terminal ]
         </div>
         <div className="pixel-font text-[8px] text-steel opacity-30">
            Powered by Next.js & Framer Motion // Systems Architectures
         </div>
      </footer>
    </div>
  );
}
