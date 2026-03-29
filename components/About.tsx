"use client";
import React from "react";
import { motion } from "framer-motion";
import { personal, education } from "@/lib/data";
import { useGitHubStats } from "@/lib/hooks/useGitHubStats";
import { useLeetCodeStats } from "@/lib/hooks/useLeetCodeStats";
import { useGFGStats } from "@/lib/hooks/useGFGStats";
import { GraduationCap, Code2, Trophy, BarChart3 } from "lucide-react";

const HM_COLORS = ["#0c0c14", "#16283a", "#1e3f5c", "#2d5f87", "#74b1cf"];

function Heatmap({ contributions }: { contributions: { date: string; count: number }[] }) {
  if (!contributions.length) return null;
  const maxC = Math.max(...contributions.map((d) => d.count), 1);
  const getColor = (c: number) => {
    if (c === 0) return HM_COLORS[0];
    return HM_COLORS[Math.min(4, Math.ceil((c / maxC) * 4))];
  };
  const weeks: { date: string; count: number }[][] = [];
  let wk: { date: string; count: number }[] = [];
  contributions.forEach((d, i) => {
    wk.push(d);
    if (wk.length === 7 || i === contributions.length - 1) {
      weeks.push(wk);
      wk = [];
    }
  });
  return (
    <div className="overflow-x-auto custom-scrollbar-hide pb-2">
      <div className="flex min-w-max gap-1">
        {weeks.slice(-52).map((w, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {w.map((d, di) => (
              <div
                key={di}
                className="w-2.5 h-2.5 rounded-[1px] border border-white/5"
                style={{ background: getColor(d.count) }}
                title={`${d.date}: ${d.count}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function StatRing({ value, max, color, label, icon: Icon }: { value: number; max: number; color: string; label: string; icon: React.ElementType }) {
  const size = 64, r = 26, circ = r * 2 * Math.PI;
  const pct = Math.min(1, value / Math.max(max, 1));
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div className="relative">
        <svg width={size} height={size}>
          <circle cx={32} cy={32} r={r} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="3" />
          <motion.circle
            cx={32} cy={32} r={r} fill="none" stroke={color} strokeWidth="3"
            strokeDasharray={circ} initial={{ strokeDashoffset: circ }}
            whileInView={{ strokeDashoffset: circ - pct * circ }}
            viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
            strokeLinecap="round" transform="rotate(-90 32 32)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="w-4 h-4 text-white/20 group-hover:text-white/40 transition-colors" />
        </div>
      </div>
      <div className="text-center">
        <span className="mono-font text-[12px] block font-bold" style={{ color }}>{value}</span>
        <span className="mono-font text-[9px] text-muted uppercase tracking-widest">{label}</span>
      </div>
    </div>
  );
}

function SectionLabel({ text, icon: Icon }: { text: string; icon: React.ElementType }) {
  return (
    <div className="flex items-center gap-3 mb-6">
       <div className="p-2 glass border-steel/20 rounded-lg text-steel">
          <Icon className="w-4 h-4" />
       </div>
       <span className="mono-font text-[10px] text-steel uppercase tracking-[0.3em] font-bold">
         [ {text} ]
       </span>
    </div>
  )
}

export function About() {
  const { data: gh, loading: ghL } = useGitHubStats();
  const { data: lc, loading: lcL } = useLeetCodeStats();
  const { data: gfg, loading: gfgL } = useGFGStats();

  return (
    <section id="about" className="bg-void relative border-y border-white/5">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
             <div className="h-px w-12 bg-steel/30" />
             <span className="pixel-font text-steel text-[10px] uppercase tracking-widest leading-loose">Discovery Protocol 01</span>
          </div>
          <h2 className="pixel-font text-cream text-2xl md:text-3xl lg:text-4xl inline-block relative">
            About Core System
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gold/40" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Block: Bio & Education */}
          <div className="lg:col-span-12 flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               {/* Bio */}
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="card-premium h-full"
               >
                 <SectionLabel text="Bio Terminal" icon={Code2} />
                 <p className="mono-font text-cream/70 text-sm md:text-base leading-relaxed whitespace-pre-line">
                   {personal.bio}
                 </p>
               </motion.div>

               {/* Education */}
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="card-premium h-full"
               >
                 <SectionLabel text="Training Data" icon={GraduationCap} />
                 <div className="space-y-6">
                    {education.map((ed, idx) => (
                      <div key={idx} className="relative pl-6 border-l border-steel/20 group">
                        <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-steel/40 group-hover:bg-steel transition-colors" />
                        <h4 className="mono-font text-sm text-gold font-bold mb-1">{ed.degree}</h4>
                        <div className="mono-font text-xs text-cream/50 uppercase tracking-widest mb-1">{ed.institution}</div>
                        <div className="mono-font text-[10px] text-muted tracking-widest">{ed.period}</div>
                      </div>
                    ))}
                 </div>
               </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {/* GitHub */}
               <motion.div
                 whileHover={{ y: -5 }}
                 className="card-premium"
               >
                 <SectionLabel text="GitHub Logs" icon={BarChart3} />
                 {ghL ? <div className="animate-pulse flex space-x-4"><div className="flex-1 space-y-4 py-1"><div className="h-4 bg-white/5 rounded w-3/4"></div></div></div> : gh ? (
                   <div className="space-y-6">
                      <div className="flex justify-between items-center text-center px-2">
                        {[["COM", gh.totalCommits], ["REP", gh.repos], ["STR", gh.stars]].map(([l, v]) => (
                          <div key={String(l)} className="flex flex-col">
                            <span className="pixel-font text-xs text-gold mb-1">{v}</span>
                            <span className="mono-font text-[9px] text-muted uppercase tracking-widest">{l}</span>
                          </div>
                        ))}
                      </div>
                      <Heatmap contributions={gh.contributions} />
                   </div>
                 ) : <div className="text-muted text-xs italic opacity-50">Log error: module unreachable</div>}
               </motion.div>

               {/* LeetCode */}
               <motion.div
                 whileHover={{ y: -5 }}
                 className="card-premium"
               >
                 <SectionLabel text="Algo Metrics" icon={Trophy} />
                 {lcL ? <div className="animate-pulse flex space-x-4"><div className="flex-1 space-y-4 py-1"><div className="h-4 bg-white/5 rounded w-3/4"></div></div></div> : lc ? (
                   <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-6 justify-center">
                        <div className="text-center">
                          <div className="pixel-font text-xl text-gold">{lc.totalSolved}</div>
                          <div className="mono-font text-[9px] text-muted uppercase mt-1">Total Fixed</div>
                        </div>
                        <div className="flex gap-4">
                          <StatRing value={lc.easySolved} max={lc.totalEasy} color="#4ade80" label="S1" icon={Code2} />
                          <StatRing value={lc.mediumSolved} max={lc.totalMedium} color="#facc15" label="S2" icon={Code2} />
                          <StatRing value={lc.hardSolved} max={lc.totalHard} color="#f87171" label="S3" icon={Code2} />
                        </div>
                      </div>
                   </div>
                 ) : <div className="text-muted text-xs italic opacity-50">Algo-sys: Offline</div>}
               </motion.div>

               {/* GFG */}
               <motion.div
                 whileHover={{ y: -5 }}
                 className="card-premium"
               >
                 <SectionLabel text="Geek Insights" icon={BarChart3} />
                 {gfgL ? <div className="animate-pulse flex space-x-4"><div className="flex-1 space-y-4 py-1"><div className="h-4 bg-white/5 rounded w-3/4"></div></div></div> : gfg ? (
                   <div className="grid grid-cols-3 items-end h-full">
                      {[["SCORE", gfg.codingScore], ["SOLVED", gfg.problemsSolved], ["RANK", gfg.instituteRank]].map(([l, v]) => (
                        <div key={String(l)} className="text-center group">
                          <div className="pixel-font text-sm text-gold group-hover:scale-110 transition-transform">{v}</div>
                          <div className="mono-font text-[8px] text-muted uppercase mt-2 tracking-tighter opacity-70">{l}</div>
                        </div>
                      ))}
                   </div>
                 ) : <div className="text-muted text-xs italic opacity-50">Insights unavailable</div>}
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
