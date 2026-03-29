"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "@/lib/data";
import { ChevronRight, Briefcase, Calendar, Target } from "lucide-react";

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="bg-void relative overflow-hidden border-b border-white/5 py-24">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-steel/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[80px] -z-10" />

      <div className="section-container">
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
             <div className="h-px w-12 bg-steel/30" />
             <span className="pixel-font text-steel text-[10px] uppercase tracking-widest leading-loose">Deployment Log 02</span>
          </div>
          <h2 className="pixel-font text-cream text-2xl md:text-3xl lg:text-4xl inline-block relative">
             Experience Timeline
             <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gold/40" />
          </h2>
        </motion.div>

        {/* Timeline Desktop */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[7px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-steel/60 via-steel/20 to-transparent" />

          <div className="space-y-12">
            {experience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-12 group"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-0 top-6 w-4 h-4 rounded-full border-2 border-steel bg-void z-10 transition-all duration-300 group-hover:scale-125 ${expandedIndex === idx ? 'shadow-[0_0_12px_var(--color-steel)]' : 'opacity-60 grayscale'}`} />

                <div className={`card-premium !p-0 overflow-hidden cursor-pointer transition-all duration-300 ${expandedIndex === idx ? 'border-steel/40' : 'border-white/5'}`}>
                   <button
                     onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                     className="w-full text-left px-8 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
                   >
                     <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3">
                           <Briefcase className="w-4 h-4 text-muted" />
                           <span className="pixel-font text-xs text-gold tracking-wider">{item.company}</span>
                        </div>
                        <h3 className="mono-font text-lg md:text-xl text-cream font-bold leading-tight">{item.role}</h3>
                        <div className="flex items-center gap-3">
                           <Calendar className="w-3.5 h-3.5 text-muted/60" />
                           <span className="mono-font text-[10px] text-muted tracking-widest uppercase">{item.period}</span>
                        </div>
                     </div>
                     <motion.div
                       animate={{ rotate: expandedIndex === idx ? 90 : 0 }}
                       className="p-2 border border-white/5 rounded-full text-steel flex items-center justify-center shrink-0"
                     >
                        <ChevronRight className="w-5 h-5" />
                     </motion.div>
                   </button>

                   <AnimatePresence>
                     {expandedIndex === idx && (
                       <motion.div
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: "auto", opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         className="overflow-hidden bg-white/[0.01] border-t border-white/5"
                       >
                         <div className="px-8 py-10 space-y-6">
                            <div className="flex items-center gap-2 mb-4">
                               <Target className="w-4 h-4 text-steel" />
                               <span className="mono-font text-[10px] text-steel uppercase tracking-widest font-bold">Key Mission Metrics:</span>
                            </div>
                            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
                               {item.highlights.map((h, hi) => (
                                 <li key={hi} className="flex gap-4 items-start group/item">
                                   <div className="w-1.5 h-1.5 rounded-full bg-steel/40 mt-1.5 group-hover/item:scale-150 transition-all hover:bg-steel" />
                                   <p className="mono-font text-sm text-cream/70 leading-relaxed group-hover/item:text-cream transition-colors">{h}</p>
                                 </li>
                               ))}
                            </ul>
                         </div>
                       </motion.div>
                     )}
                   </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
