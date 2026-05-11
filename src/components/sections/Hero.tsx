import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const glintX = useTransform(scrollYProgress, [0, 1], ["-150%", "150%"]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden cinematic-vignette lg:px-12">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_50%_50%,rgba(0,219,255,0.08)_0%,transparent_50%)] animate-glow" />
        <div className="absolute inset-0 bg-[#000]" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_30%,transparent_100%)] opacity-30" />
        
        {/* Particle/Lights Layer */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_20%_30%,rgba(121,40,202,0.1)_0%,transparent_40%)]" 
        />
      </div>

      <div className="relative z-10 max-w-[1800px] w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="container mx-auto px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-block mb-12"
          >
            <div className="px-6 py-2 glass-panel border-white/20 rounded-none relative overflow-hidden group">
               <div className="absolute inset-0 bg-cyan-400/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
               <span className="relative z-10 text-[10px] font-black tracking-[0.5em] text-cyan-400 uppercase">
                 System Initialized // Next-Gen Automation
               </span>
            </div>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[12rem] font-display font-black leading-[0.8] tracking-[-0.05em] mb-12 uppercase italic relative group">
            <div className="relative inline-block overflow-hidden">
              <motion.span 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="block"
              >
                Intelligent
              </motion.span>
              
              {/* Glint Sweep */}
              <motion.div 
                style={{ x: glintX }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] pointer-events-none mix-blend-overlay"
              />
            </div>

            <div className="relative inline-block overflow-hidden">
              <motion.span 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="block text-transparent stroke-white"
                style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}
              >
                Infrastructure
              </motion.span>
              
              {/* Glint Sweep */}
              <motion.div 
                style={{ x: glintX }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent skew-x-[-20deg] pointer-events-none mix-blend-overlay"
              />
            </div>
          </h1>
          
          <div className="max-w-3xl mx-auto mb-16">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-xl md:text-2xl text-zinc-500 uppercase tracking-widest font-light leading-relaxed px-4"
            >
              Engineering bespoke AI operating systems for India's most ambitious SMBs. 
              Efficiency is no longer optional. It is the core protocol.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <Button size="lg" className="blue-glow border-none px-16 group relative">
              <span className="flex items-center gap-4">
                Launch Protocol <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </Button>
            <Button variant="ghost" className="text-zinc-500 hover:text-white tracking-[0.3em] font-black italic">
              View Solutions_01
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Cinematic Bottom Frame */}
      <div className="absolute bottom-12 left-12 right-12 z-20 flex justify-between items-end border-t border-white/5 pt-8 pointer-events-none opacity-40">
        <div className="space-y-2">
          <div className="flex gap-1">
             {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-3 bg-cyan-400" />)}
          </div>
          <p className="text-[10px] font-mono uppercase tracking-widest leading-none">Status: Operational</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-mono uppercase tracking-widest mb-1">Latency: 24ms</p>
          <div className="w-32 h-1 bg-white/10 relative overflow-hidden">
             <motion.div 
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-cyan-400 w-1/2" 
             />
          </div>
        </div>
      </div>
    </section>
  );
}
