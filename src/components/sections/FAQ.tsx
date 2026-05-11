import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "How long does implementation take?",
    a: "Most custom AI solutions are deployed within 2 to 4 weeks, depending on the complexity of your current workflow and integrations."
  },
  {
    q: "Do I need technical knowledge to use these tools?",
    a: "Not at all. We build tools that integrate directly into the apps you already use (Slack, WhatsApp, Gmail). If you can send a text, you can use our AI."
  },
  {
    q: "Is my business data secure?",
    a: "Security is our top priority. We use enterprise-grade encryption and can deploy 'Private AI' models that never train on your sensitive data."
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. Every implementation comes with 3 months of priority support and monthly optimization checks to ensure your AI keeps getting smarter."
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-zinc-950/30">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400 mb-4">
            Common Inquiries
          </h2>
          <h3 className="text-4xl font-display font-bold text-white mb-6">
            Frequently Asked <span className="text-zinc-500 italic">Questions</span>
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-panel rounded-2xl overflow-hidden border-white/5">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-zinc-200">{faq.q}</span>
                {openIndex === i ? <Minus className="w-4 h-4 text-cyan-400" /> : <Plus className="w-4 h-4 text-zinc-500" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
