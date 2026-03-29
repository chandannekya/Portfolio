"use client";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Cpu, Layout, Server, Database, Sparkles, Languages } from "lucide-react";

const ICON_MAP = {
  Frontend:  <Layout className="w-5 h-5" />,
  Backend:   <Server className="w-5 h-5" />,
  Database:  <Database className="w-5 h-5" />,
  "AI / ML": <Sparkles className="w-5 h-5" />,
  DevOps:    <Cpu className="w-5 h-5" />,
  Languages: <Languages className="w-5 h-5" />,
};

function SkillCategory({ title, items, index }: { title: string; items: string[]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card-premium h-full group"
    >
      <div className="flex items-center gap-4 mb-8">
         <div className="p-3 bg-steel/5 rounded-2xl group-hover:bg-steel/10 transition-colors text-steel">
            {(ICON_MAP as Record<string, React.ReactElement>)[title] || <Cpu className="w-5 h-5" />}
         </div>
         <div>
            <div className="mono-font text-[9px] text-muted tracking-widest uppercase">Capacity Module 04-{(index + 1).toString().padStart(2, '0')}</div>
            <h3 className="pixel-font text-xs text-gold uppercase tracking-widest leading-none">{title}</h3>
         </div>
      </div>

      <div className="flex flex-wrap gap-2.5">
         {items.map((skill, si) => (
           <motion.span
             key={si}
             whileHover={{ scale: 1.05, borderColor: 'rgba(116, 177, 207, 0.4)' }}
             className="px-3 py-1.5 glass rounded-lg border-white/5 mono-font text-[11px] text-cream/70 hover:text-steel transition-all cursor-default select-none"
           >
             {skill}
           </motion.span>
         ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const skillEntries = Object.entries(skills);

  return (
    <section id="skills" className="bg-void py-24 border-b border-white/5">
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
             <span className="pixel-font text-steel text-[10px] uppercase tracking-widest leading-loose">Deployment Log 04</span>
          </div>
          <h2 className="pixel-font text-cream text-2xl md:text-3xl lg:text-4xl inline-block relative">
             Core Tech Stack
             <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gold/40" />
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {skillEntries.map(([title, items], idx) => (
             <SkillCategory key={title} title={title} items={items} index={idx} />
           ))}
        </div>

        {/* Tech Footer */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-24 p-12 border border-white/5 rounded-[3rem] bg-steel/[0.02] flex flex-col items-center text-center gap-6"
        >
           <div className="w-16 h-1 bg-gradient-to-r from-transparent via-steel/40 to-transparent" />
           <p className="mono-font text-muted max-w-2xl text-[12px] uppercase tracking-widest leading-relaxed">
             Continuously expanding capabilities in decentralized architectures, 
             autonomous agents, and high-performance kernel design.
           </p>
           <div className="w-16 h-1 bg-gradient-to-r from-transparent via-steel/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
