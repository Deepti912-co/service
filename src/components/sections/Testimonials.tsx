import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The WhatsApp automation Nexis AI built for us is a game-changer. We haven't missed a single patient lead in 4 months.",
    author: "Dr. Ananya Sharma",
    role: "Director, LifeCare Clinic",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    quote: "Processing 500+ invoices used to take our junior CA two full days. Now it happens in under 10 minutes with AI.",
    author: "Rajesh Malhotra",
    role: "Senior Partner, Malhotra & Associates",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    quote: "Our D2C brand's ROI on customer support improved by 40% after implementing their custom knowledge base bot.",
    author: "Siddharth Verma",
    role: "Co-founder, UrbanVibe D2C",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="flex flex-col mb-32 items-start">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-cyan-400 mb-8 flex items-center gap-4">
             <div className="w-12 h-[1px] bg-cyan-400" /> Human_Sentiment
          </h2>
          <h3 className="text-5xl md:text-[10rem] font-display font-black text-white italic tracking-tighter leading-[0.75] uppercase">
             Transformed <br /> 
             <span className="text-zinc-800">Operations.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 1 }}
              viewport={{ once: true }}
              className="p-20 bg-zinc-950 relative group overflow-hidden border-r border-white/5 last:border-r-0"
            >
              <Quote className="text-cyan-400/10 w-32 h-32 absolute -top-4 -right-4 italic font-display group-hover:text-cyan-400/20 transition-colors" />
              
              <div className="relative z-10">
                <p className="text-3xl font-display font-black text-white mb-16 italic tracking-tighter leading-tight uppercase group-hover:text-cyan-400 transition-colors">
                  "{t.quote}"
                </p>
                
                <div className="flex items-center gap-8 border-t border-white/5 pt-12">
                  <div className="relative">
                    <img src={t.avatar} className="w-16 h-16 rounded-none border border-white/20 grayscale group-hover:grayscale-0 transition-all duration-700" alt={t.author} />
                    <div className="absolute inset-0 bg-cyan-400/10 group-hover:opacity-0 transition-opacity" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-sm uppercase tracking-widest mb-1 italic">{t.author}</h4>
                    <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">{t.role}</p>
                  </div>
                </div>
              </div>

               <div className="absolute inset-x-0 bottom-0 h-[2px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
