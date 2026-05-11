import { motion } from 'motion/react';
import { MessageSquare, MessageCircle, FileText, BookOpen, Layers, Mic, Settings, Search } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const services = [
  {
    title: 'AI WhatsApp Bots',
    problem: 'Missing customer inquiries after hours.',
    outcome: '24/7 automated support & sales.',
    savings: '20+ hours / week',
    icon: MessageCircle,
  },
  {
    title: 'Invoice Processing',
    problem: 'Manual data entry from thousands of bills.',
    outcome: '99% extraction accuracy in seconds.',
    savings: '15+ hours / week',
    icon: FileText,
  },
  {
    title: 'Voice AI Agents',
    problem: 'Busy front-desk missing calls.',
    outcome: 'AI answers calls, books appointments.',
    savings: '30+ hours / month',
    icon: Mic,
  },
  {
    title: 'Workflow Automation',
    problem: 'Spreadsheet chaos and manual tasks.',
    outcome: 'Seamless data flow between apps.',
    savings: '40+ hours / month',
    icon: Settings,
  },
  {
    title: 'Internal AI Tools',
    problem: 'Employees wasting time searching docs.',
    outcome: 'Custom GPT trained on your private data.',
    savings: '10+ hours / employee',
    icon: Layers,
  },
  {
    title: 'AI Search Systems',
    problem: 'Losing leads to poor site search.',
    outcome: 'Semantic search that understands intent.',
    savings: '15% boost in conversion',
    icon: Search,
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Volumetric Light */}
      <div className="absolute top-1/2 left-0 w-[50%] h-[50%] bg-blue-600/5 blur-[150px] -translate-y-1/2 -z-10" />

      <div className="max-w-[1800px] mx-auto px-6">
        <div className="flex flex-col mb-32">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-cyan-400 mb-8">
            Capability_Matrix
          </h2>
          <h3 className="text-5xl md:text-[10rem] font-display font-black text-white uppercase italic leading-[0.75] tracking-tighter">
            Digital <br /> 
            <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.05)' }}>
              Evolution.
            </span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 1 }}
              viewport={{ once: true }}
              className="group p-16 bg-black relative overflow-hidden transition-all duration-700 hover:bg-zinc-950"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-center mb-16">
                   <div className="w-16 h-16 bg-white/5 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-700 flex items-center justify-center">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <span className="text-4xl font-display font-black text-white/5 group-hover:text-cyan-500/10 transition-colors uppercase italic underline decoration-cyan-500/0 group-hover:decoration-cyan-500/20">
                    S_{index + 1}
                  </span>
                </div>
                
                <h4 className="text-3xl font-display font-black text-white mb-4 uppercase tracking-tighter">
                  {service.title}
                </h4>

                <div className="space-y-6 mb-12 flex-grow">
                  <p className="text-zinc-500 text-sm leading-relaxed uppercase tracking-widest italic group-hover:text-zinc-300 transition-colors">
                    {service.problem}
                  </p>
                  <p className="text-cyan-400 text-xs font-black uppercase tracking-[0.2em] border-l-2 border-cyan-400/30 pl-4 py-1">
                    Target Output: {service.outcome}
                  </p>
                </div>

                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Efficiency_Gain</span>
                  <span className="text-white text-xl font-display font-black italic tracking-widest uppercase">{service.savings}</span>
                </div>
              </div>

              {/* Cinematic Scanline Effect on Hover */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-cyan-400 shadow-[0_0_20px_rgba(0,219,255,1)] translate-y-[-100%] group-hover:animate-translate-y transition-none pointer-events-none opacity-0 group-hover:opacity-50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
