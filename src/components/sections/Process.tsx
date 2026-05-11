import { motion } from 'motion/react';
import { Search, ListChecks, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Understand Your Workflow',
    description: 'We sit with your team to map out every click and spreadsheet in your current process.',
    icon: Search,
    number: '01',
  },
  {
    title: 'Identify Repetitive Tasks',
    description: 'Using process mining, we pinpoint exactly where AI can save at least 20 hours per week.',
    icon: ListChecks,
    number: '02',
  },
  {
    title: 'Build AI Solution',
    description: 'Our engineers build a custom AI system using the latest models (Gemini, GPT-4) and APIs.',
    icon: Code2,
    number: '03',
  },
  {
    title: 'Deploy & Train Team',
    description: 'We integrate the solution into your existing tools and train your team for a smooth transition.',
    icon: Rocket,
    number: '04',
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 relative overflow-hidden bg-black">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="flex flex-col mb-32 items-center text-center">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-zinc-600 mb-8">
            Deployment_Cycle
          </h2>
          <h3 className="text-5xl md:text-8xl font-display font-black text-white uppercase italic tracking-tighter leading-none">
            The <span className="text-cyan-400">Nexis</span> Protocol.
          </h3>
        </div>

        <div className="grid lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 1 }}
              viewport={{ once: true }}
              className="group p-12 bg-black relative overflow-hidden border-r border-white/5 last:border-r-0"
            >
              <div className="relative z-10">
                <div className="text-[12rem] font-display font-black leading-[0.7] tracking-tighter text-white/5 absolute -top-12 -left-8 pointer-events-none group-hover:text-cyan-400/10 transition-colors">
                  0{index + 1}
                </div>
                
                <div className="w-16 h-16 bg-white/5 flex items-center justify-center mb-12 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  <step.icon className="w-8 h-8" />
                </div>
                
                <h4 className="text-2xl font-display font-black text-white mb-6 uppercase tracking-tight group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed uppercase tracking-widest italic group-hover:text-zinc-300 transition-colors">
                  {step.description}
                </p>
              </div>

               <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
