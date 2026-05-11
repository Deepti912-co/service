import { motion } from 'motion/react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';

export function CaseStudy() {
  return (
    <section id="case-studies" className="py-32 bg-black relative overflow-hidden">
       {/* Background Cinematic Decor */}
       <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-purple-600/5 blur-[180px] -z-10" />

      <div className="max-w-[1800px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-cyan-400 mb-8 flex items-center gap-4">
               <div className="w-12 h-[1px] bg-cyan-400" /> Case_Study_024
            </h2>
            <h3 className="text-5xl md:text-8xl font-display font-black text-white mb-12 uppercase italic leading-[0.8] tracking-tighter">
              The <br /> 
              <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.05)' }}>
                Healthcare
              </span> <br />
              <span className="text-zinc-700">Protocol.</span>
            </h3>
            
            <p className="text-xl text-zinc-500 mb-12 leading-relaxed uppercase tracking-widest font-light italic">
              We architected an autonomous medical triage system for a multispecialty clinic, 
              automating 4,000+ patient interactions per month without human interference.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-16">
              {[
                { label: 'Latency_Reduction', val: '60%' },
                { label: 'Human_Error_Rate', val: '0.01%' },
                { label: 'Patient_Sentiment', val: '98%' },
                { label: 'ROI_Timeline', val: '4mo' },
              ].map((stat) => (
                <div key={stat.label} className="border-l border-white/10 pl-6">
                  <p className="text-[10px] font-black tracking-widest text-zinc-600 uppercase mb-2">{stat.label}</p>
                  <p className="text-4xl font-display font-black text-white italic tracking-tighter">{stat.val}</p>
                </div>
              ))}
            </div>

            <Button variant="outline" size="lg" className="group">
              <span className="flex items-center gap-4">
                Access Data Logs <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square glass-panel p-1 border-white/20 relative blue-glow">
              <div className="w-full h-full bg-[#030303] flex items-center justify-center p-12 overflow-hidden">
                <div className="w-full space-y-8">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-none bg-cyan-400 animate-pulse" />
                    <div className="h-1 w-32 bg-white/10" />
                  </div>
                  
                  <div className="space-y-4 font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
                    <p className="text-cyan-400">{">"} Incoming_Encryption_Pulse...</p>
                    <p className="animate-pulse delay-75">{">"} analyzing_patient_intent_vector...</p>
                    <p className="text-white">{">"} query: "available_slots_dr_mehta"</p>
                    <p className="text-white italic">{">"} matching_metadata: [98.4%_confidence]</p>
                    <p className="text-cyan-400">{">"} response_sent: "slot_reserved_10:30AM"</p>
                  </div>

                  <div className="h-[200px] border border-white/5 bg-[radial-gradient(ellipse_at_bottom,rgba(0,219,255,0.05)_0%,transparent_70%)] relative">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:20px_20px]" />
                    <motion.div 
                      animate={{ height: ['0%', '60%', '20%', '80%', '40%'] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-cyan-500/20 to-transparent border-t border-cyan-500/50" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating Floating UI Element */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-zinc-900 border border-white/10 p-8 flex flex-col justify-center items-center shadow-2xl">
                 <p className="text-[10px] font-black tracking-widest text-zinc-700 uppercase mb-2">Efficiency</p>
                 <p className="text-5xl font-display font-black text-white italic tracking-tighter">MAX</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
