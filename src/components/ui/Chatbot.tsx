import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Cpu, User, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { cn } from '@/src/lib/utils';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! I\'m Nexis assistant. How can I help you automate your business today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          {
            role: 'user',
            parts: [{ text: `You are a helpful assistant for Nexis AI, a premium AI automation agency in India. 
            You help SMB owners understand how AI can save them time. 
            Keep your responses professional, concise, and focused on business outcomes.
            Our services: AI WhatsApp Bots, Invoice Processing, Voice AI, Workflow Automation, Internal AI Knowledge Bases.
            Typical savings: 20-40 hours per week.
            User: ${input}` }]
          }
        ],
        config: {
          systemInstruction: "You are an expert consultant at Nexis AI. Your goal is to guide visitors through the benefits of AI automation and encourage them to book an audit call. Don't be too pushy, be informative. Use small paragraphs. Don't use too many emojis.",
        }
      });

      const assistantMessage: Message = { 
        role: 'assistant', 
        content: response.text || "I'm sorry, I encountered an error. Please try again or book a call with our team."
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Something went wrong. Please check your connection or try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl blue-glow"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-[60] w-[380px] h-[500px] glass-panel rounded-3xl overflow-hidden flex flex-col shadow-[0_0_100px_rgba(0,0,0,0.5)] border-white/10"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-zinc-900 to-zinc-950 border-b border-white/5 flex items-center gap-3">
              <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <Cpu className="text-cyan-400 w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold tracking-tight">Nexis AI Assistant</h4>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Online</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-hide"
            >
              {messages.map((m, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "flex gap-3",
                    m.role === 'user' ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                    m.role === 'user' ? "bg-white/5" : "bg-cyan-500/10"
                  )}>
                    {m.role === 'user' ? <User className="w-4 h-4 text-zinc-400" /> : <Sparkles className="w-4 h-4 text-cyan-400" />}
                  </div>
                  <div className={cn(
                    "p-3 rounded-2xl text-sm leading-relaxed max-w-[80%]",
                    m.role === 'user' 
                      ? "bg-zinc-800 text-zinc-100 rounded-tr-none" 
                      : "bg-white/5 text-zinc-300 border border-white/5 rounded-tl-none"
                  )}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
                  </div>
                  <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-100" />
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/5 bg-zinc-950/50">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors pr-12"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-cyan-400 hover:text-white transition-colors disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-zinc-600 mt-3 text-center">
                Powered by Nexis AI & Gemini 3
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
