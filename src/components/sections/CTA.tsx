import { motion } from 'motion/react';
import { Button } from '@/src/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-32 lg:py-64 px-6 relative overflow-hidden bg-black">
      {/* Background Volumetric Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,219,255,0.05)_0%,transparent_70%)] -z-10" />

      <div className="max-w-[1400px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xs font-black uppercase tracking-[0.8em] text-cyan-400 mb-16 animate-pulse">
            Terminal_Access_Authorized
          </h2>
          
          <h3 className="text-6xl md:text-9xl lg:text-[15rem] font-display font-black text-white italic tracking-tighter leading-[0.75] uppercase mb-16">
            Ready To <br /> 
            <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '3px rgba(255,255,255,0.1)' }}>
               Evolve?
            </span>
          </h3>

          <p className="text-xl md:text-2xl text-zinc-500 uppercase tracking-[0.3em] font-light max-w-2xl mx-auto mb-24 italic">
            Initialize your AI transformation protocol. 
            The future is waiting for your signature.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <Button size="lg" className="px-16 py-8 text-2xl blue-glow group">
              <span className="flex items-center gap-6">
                Start Integration <ArrowRight className="w-8 h-8 group-hover:translate-x-4 transition-transform duration-500" />
              </span>
            </Button>
            <div className="flex flex-col items-center gap-2">
               <span className="text-[10px] font-black tracking-widest text-zinc-700 uppercase italic">Or Connect via</span>
               <a href="mailto:hi@nexisai.com" className="text-white font-display font-black text-xl italic hover:text-cyan-400 transition-colors tracking-widest">ENCRYPTED_MAIL</a>
            </div>
          </div>
        </motion.div>
      </div>

       {/* Scrolled Background Text */}
       <div className="absolute -bottom-20 left-0 w-full whitespace-nowrap overflow-hidden pointer-events-none opacity-5">
          <p className="text-[20rem] font-display font-black text-white italic leading-none tracking-tighter">
            INTELLIGENT AUTONOMOUS INFRASTRUCTURE PROTOCOL V0.1
          </p>
       </div>
    </section>
  );
}
