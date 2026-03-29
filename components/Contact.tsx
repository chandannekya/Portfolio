"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { personal } from "@/lib/data";
import { Send, Mail, MapPin, Phone, MessageSquare, Terminal, RefreshCw } from "lucide-react";

/**
 * Contact section with a professional "Live Terminal" aesthetic.
 * Focuses on direct communication and location metrics.
 */

function InputField({ label, name, type = "text", required = true, placeholder }: { label: string, name: string, type?: string, required?: boolean, placeholder?: string }) {
  return (
    <div className="space-y-2 group">
      <div className="flex items-center gap-2">
         <div className="w-1.5 h-1.5 rounded-full bg-steel/20 group-hover:bg-steel transition-colors" />
         <label htmlFor={name} className="mono-font text-[10px] text-muted uppercase tracking-widest font-bold">
            {label} {required && "[REQ]"}
         </label>
      </div>
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-3.5 mono-font text-sm text-cream focus:outline-none focus:ring-1 focus:ring-steel/30 focus:border-steel/20 transition-all placeholder:text-zinc-600"
      />
    </div>
  );
}

export function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const emailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const encodedSubject = encodeURIComponent(subject || `New transmission from ${name}`);
    const encodedBody = encodeURIComponent(emailBody);

    // Simulate sending time to show animation, then open user's mail app
    setTimeout(() => {
        setIsLoading(false);
        setIsSent(true);
        window.location.href = `mailto:${personal.email}?subject=${encodedSubject}&body=${encodedBody}`;
    }, 800);
  }

  return (
    <section id="contact" className="bg-void py-24 relative overflow-hidden">
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
             <div className="h-px w-12 bg-steel/30" />
             <span className="pixel-font text-steel text-[10px] uppercase tracking-widest leading-loose">Deployment Log 06</span>
          </div>
          <h2 className="pixel-font text-cream text-2xl md:text-3xl lg:text-4xl inline-block relative">
             Comm Link Terminal
             <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gold/40" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
           {/* Left: Contact Info */}
           <div className="lg:col-span-12 xl:col-span-5 space-y-8">
              <div className="card-premium space-y-12">
                 <div className="space-y-6">
                    <div className="flex items-center gap-3">
                       <Terminal className="w-4 h-4 text-steel" />
                       <span className="mono-font text-[11px] text-steel uppercase tracking-widest font-bold">System Location & Identifiers</span>
                    </div>
                    
                    <div className="space-y-8">
                       <div className="flex items-center gap-6 group">
                          <div className="w-12 h-12 rounded-2xl glass border-white/5 flex items-center justify-center text-muted group-hover:text-steel transition-all">
                             <Mail className="w-5 h-5" />
                          </div>
                          <div>
                             <div className="mono-font text-[9px] text-muted tracking-widest uppercase mb-1">Electronic Mail</div>
                             <a href={`mailto:${personal.email}`} className="mono-font text-sm text-cream hover:text-steel transition-colors">{personal.email}</a>
                          </div>
                       </div>

                       <div className="flex items-center gap-6 group">
                          <div className="w-12 h-12 rounded-2xl glass border-white/5 flex items-center justify-center text-muted group-hover:text-gold transition-all">
                             <MapPin className="w-5 h-5" />
                          </div>
                          <div>
                             <div className="mono-font text-[9px] text-muted tracking-widest uppercase mb-1">Geo Coordinates</div>
                             <div className="mono-font text-sm text-cream">{personal.location}</div>
                          </div>
                       </div>

                       <div className="flex items-center gap-6 group">
                          <div className="w-12 h-12 rounded-2xl glass border-white/5 flex items-center justify-center text-muted group-hover:text-emerald-400 transition-all">
                             <Phone className="w-5 h-5" />
                          </div>
                          <div>
                             <div className="mono-font text-[9px] text-muted tracking-widest uppercase mb-1">Direct Line</div>
                             <div className="mono-font text-sm text-cream">{personal.phone}</div>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="pt-12 border-t border-white/5">
                    <p className="mono-font text-[11px] text-muted leading-relaxed uppercase tracking-widest">
                       Secure encrypted tunnel ready for transmission. 
                       Avg response latency: &lt; 24h.
                    </p>
                 </div>
              </div>
           </div>

           {/* Right: Contact Form */}
           <div className="lg:col-span-12 xl:col-span-7">
              <div className="card-premium h-full">
                 <div className="mb-12 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <MessageSquare className="w-4 h-4 text-gold" />
                       <span className="mono-font text-[11px] text-gold uppercase tracking-widest font-bold">Initiate Message Queue</span>
                    </div>
                    {isSent && (
                       <span className="mono-font text-[9px] text-emerald-400 uppercase tracking-widest bg-emerald-400/10 px-3 py-1 rounded-full">Transmission OK</span>
                    )}
                 </div>

                 {!isSent ? (
                   <form onSubmit={handleSubmit} className="space-y-8">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <InputField label="Operator Name" name="name" placeholder="IDENTIFY YOURSELF" />
                        <InputField label="Contact Uplink" name="email" type="email" placeholder="YOUR@DOMAIN.COM" />
                     </div>
                     <InputField label="Mission Subject" name="subject" placeholder="NATURE OF UPLINK" />
                     
                     <div className="space-y-2 group">
                        <div className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-steel/20 group-hover:bg-steel transition-colors" />
                           <label htmlFor="message" className="mono-font text-[10px] text-muted uppercase tracking-widest font-bold">
                              Encoded Transmission [REQ]
                           </label>
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          placeholder="ENTER MESSAGE PAYLOAD..."
                          className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 mono-font text-sm text-cream focus:outline-none focus:ring-1 focus:ring-steel/30 focus:border-steel/20 transition-all placeholder:text-zinc-600 resize-none"
                        />
                     </div>

                     <motion.button
                       whileHover={{ scale: 1.02 }}
                       whileTap={{ scale: 0.98 }}
                       disabled={isLoading}
                       className="w-full py-5 bg-steel text-void pixel-font text-[11px] font-bold tracking-[0.2em] shadow-[0_0_30px_var(--color-steel-ghost)] hover:brightness-110 flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed group transition-all"
                     >
                       {isLoading ? (
                         <RefreshCw className="w-4 h-4 animate-spin" />
                       ) : (
                         <>
                           Execute Transmission <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                         </>
                       )}
                     </motion.button>
                   </form>
                 ) : (
                   <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="py-12 flex flex-col items-center text-center space-y-6"
                   >
                     <div className="w-20 h-20 rounded-full bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 mb-4">
                        <Send className="w-8 h-8" />
                     </div>
                     <h3 className="pixel-font text-lg text-emerald-400">Transmission Complete</h3>
                     <p className="mono-font text-sm text-cream/70 max-w-sm">
                        Your message has been successfully broadcast to the primary terminal. 
                        Standby for acknowledgment.
                     </p>
                     <button
                       onClick={() => setIsSent(false)}
                       className="mt-6 px-10 py-3 border border-white/5 hover:border-steel/30 glass transition-all mono-font text-[10px] text-muted uppercase tracking-widest"
                     >
                        New Link
                     </button>
                   </motion.div>
                 )}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
