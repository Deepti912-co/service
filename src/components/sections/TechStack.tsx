import { motion } from 'motion/react';

const techs = [
  { name: 'Gemini', icon: 'https://www.gstatic.com/lamda/images/gemini_favicon_f06991e574aada73.ico' },
  { name: 'OpenAI', icon: 'https://openai.com/favicon.ico' },
  { name: 'Firebase', icon: 'https://www.gstatic.com/devrel-devsite/prod/v6f1947e452a8451f28b4c2ca3223ef21ee6f2a6327b8f9e614d339308cc4b204/firebase/images/favicon.png' },
  { name: 'WhatsApp', icon: 'https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png' },
  { name: 'Next.js', icon: 'https://nextjs.org/favicon.ico' },
  { name: 'Pinecone', icon: 'https://www.pinecone.io/favicon.ico' },
  { name: 'Supabase', icon: 'https://supabase.com/favicon.ico' },
  { name: 'Vercel', icon: 'https://vercel.com/favicon.ico' },
];

export function TechStack() {
  return (
    <section className="py-24 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center italic text-zinc-500 text-sm mb-12">
        Powered by the world's most advanced AI stack
      </div>
      
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-16 items-center whitespace-nowrap"
        >
          {[...techs, ...techs, ...techs].map((tech, i) => (
            <div key={i} className="flex items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
              {/* <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" /> */}
              <span className="text-2xl font-display font-bold text-white tracking-widest">{tech.name.toUpperCase()}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
