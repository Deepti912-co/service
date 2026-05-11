import { motion } from 'motion/react';
import { Zap, Target, Coins, ShieldCheck, Headphones } from 'lucide-react';

const reasons = [
  {
    title: 'Fast Implementation',
    desc: 'Go from concept to production in as little as 14 days.',
    icon: Zap,
  },
  {
    title: 'Custom-Built',
    desc: 'No generic bots. We build solutions tailored to your specific business logic.',
    icon: Target,
  },
  {
    title: 'SMB Affordable',
    desc: 'Enterprise-grade AI at a price point that makes sense for moving businesses.',
    icon: Coins,
  },
  {
    title: 'Modern AI Stack',
    desc: 'Leveraging the latest from Gemini, OpenAI, and specialized vector DBs.',
    icon: ShieldCheck,
  },
  {
    title: 'Ongoing Support',
    desc: 'We don\'t just deploy and leave. We monitor and optimize your AI monthly.',
    icon: Headphones,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Cinematic Decor */}
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-cyan-600/5 blur-[180px] -z-10" />

      <div className="max-w-[1800px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-32 items-center">
          <div className="lg:col-span-12 mb-32">
             <h2 className="text-xs font-black uppercase tracking-[0.5em] text-cyan-400 mb-8 flex items-center gap-4">
               <div className="w-12 h-[1px] bg-cyan-400" /> Operational_Edge
            </h2>
            <h3 className="text-5xl md:text-[10rem] font-display font-black text-white italic tracking-tighter leading-[0.75] uppercase">
               Why Nexis <br /> 
               <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.05)' }}>
                  Is The Default.
               </span>
            </h3>
          </div>
          
          <div className="lg:col-span-12 grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 border border-white/5">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="p-12 bg-black relative group overflow-hidden"
              >
                <div className="w-16 h-16 bg-white/5 flex items-center justify-center mb-12 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-700">
                  <reason.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-display font-black text-white mb-6 uppercase tracking-tight group-hover:text-cyan-400 transition-colors">
                  {reason.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed uppercase tracking-widest italic group-hover:text-zinc-300 transition-colors">
                  {reason.desc}
                </p>

                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
