import { motion } from 'motion/react';
import { Stethoscope, Scale, ShoppingBag, Truck, GraduationCap, Building2, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const industries = [
  {
    name: 'Clinics & Healthcare',
    description: 'Automate booking, patient follow-ups, and AI report summaries.',
    icon: Stethoscope,
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
  },
  {
    name: 'CAs & Legal Firms',
    description: 'AI-powered document sorting, invoice processing, and compliance checks.',
    icon: Scale,
    color: 'from-purple-500/20 to-indigo-500/20',
    iconColor: 'text-purple-400',
  },
  {
    name: 'D2C & E-commerce',
    description: 'WhatsApp sales bots, inventory automation, and customer support AI.',
    icon: ShoppingBag,
    color: 'from-orange-500/20 to-red-500/20',
    iconColor: 'text-orange-400',
  },
  {
    name: 'Logistics & Supply Chain',
    description: 'Real-time routing AI and automated delivery orchestration.',
    icon: Truck,
    color: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-400',
  },
  {
    name: 'Education & EdTech',
    description: 'Personalized learning paths and AI-driven assessment grading.',
    icon: GraduationCap,
    color: 'from-yellow-500/20 to-orange-500/20',
    iconColor: 'text-yellow-400',
  },
  {
    name: 'Real Estate',
    description: 'AI property matching and automated lead qualification bots.',
    icon: Building2,
    color: 'from-pink-500/20 to-rose-500/20',
    iconColor: 'text-pink-400',
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-32 relative overflow-hidden bg-black">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-24">
          <div className="lg:col-span-8">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-cyan-400 mb-8 flex items-center gap-4">
               <div className="w-12 h-[1px] bg-cyan-400" /> Target_Sectors
            </h2>
            <h3 className="text-5xl md:text-8xl font-display font-black text-white mb-0 italic tracking-tighter uppercase leading-[0.85]">
              Specialized <br /> 
              <span className="text-zinc-800">Verticals.</span>
            </h3>
          </div>
          <div className="lg:col-span-4">
            <p className="text-lg text-zinc-500 font-light leading-relaxed uppercase tracking-widest">
              We don't build generic AI. We architect specialized systems for sectors where 
              latency and precision are non-negotiable.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-white/5">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={cn(
                "p-12 group transition-all duration-700 hover:bg-white/[0.02] border-white/5",
                index % 3 !== 2 ? "lg:border-r" : "",
                "border-b"
              )}
            >
              <div className="flex justify-between items-start mb-12">
                <div className={cn(
                  "w-16 h-16 rounded-none flex items-center justify-center transition-all duration-700 group-hover:scale-110",
                  "bg-zinc-900 border border-white/5"
                )}>
                  <industry.icon className={`w-8 h-8 ${industry.iconColor} group-hover:text-white transition-colors`} />
                </div>
                <span className="text-[10px] font-mono text-zinc-600 group-hover:text-cyan-400 transition-colors uppercase tracking-[0.2em]">0{index + 1} //</span>
              </div>
              
              <h4 className="text-3xl font-display font-black text-white mb-6 uppercase tracking-tighter group-hover:text-cyan-400 transition-colors">
                {industry.name}
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed uppercase tracking-widest group-hover:text-zinc-300 transition-colors">
                {industry.description}
              </p>
              
              <div className="mt-12 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                 <ArrowRight className="w-6 h-6 text-cyan-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
