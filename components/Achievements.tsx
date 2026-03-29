"use client";
import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import { Award, Zap, Users, Globe2 } from "lucide-react";

/**
 * Achievements section for summarizing key impact metrics.
 * Designed with a high-impact, minimalist numeric grid.
 */

const ICON_MAP = [
  <Zap key="zap" className="w-5 h-5 text-gold" />,
  <Users key="users" className="w-5 h-5 text-steel" />,
  <Globe2 key="globe" className="w-5 h-5 text-emerald-400" />,
  <Award key="award" className="w-5 h-5 text-purple-400" />,
];

function Milestone({ item, index }: { item: (typeof achievements)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card-premium h-full group text-center flex flex-col items-center gap-6"
    >
      <div className="p-4 bg-white/5 border border-white/5 rounded-full group-hover:scale-110 transition-transform">
         {ICON_MAP[index] || <Award className="w-5 h-5" />}
      </div>

      <div className="space-y-4">
        <h3 className="pixel-font text-2xl md:text-3xl text-gold group-hover:drop-shadow-[0_0_10px_var(--color-gold)] transition-all">
          {item.value}
        </h3>
        <div>
          <h4 className="mono-font text-sm text-cream font-bold tracking-widest uppercase mb-1.5">{item.title}</h4>
          <p className="mono-font text-[10px] text-muted tracking-wide max-w-[200px] leading-relaxed mx-auto italic">
            {item.detail}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="bg-void py-24 relative overflow-hidden border-b border-white/5">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/[0.015] rounded-full blur-[120px] -z-10" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
             <div className="h-px w-12 bg-steel/30" />
             <span className="pixel-font text-steel text-[10px] uppercase tracking-widest leading-loose">Deployment Log 05</span>
          </div>
          <h2 className="pixel-font text-cream text-2xl md:text-3xl lg:text-4xl inline-block relative">
             Battle Stats
             <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gold/40" />
          </h2>
        </motion.div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {achievements.map((item, idx) => (
             <Milestone key={item.title} item={item} index={idx} />
           ))}
        </div>

        {/* Decorative Grid Lines */}
        <div className="mt-20 flex justify-between px-10">
           {[...Array(6)].map((_, i) => (
              <div key={i} className={`w-0.5 h-12 bg-gradient-to-b from-white/5 to-transparent ${i % 2 === 0 ? 'opacity-40' : 'opacity-10'}`} />
           ))}
        </div>
      </div>
    </section>
  );
}
