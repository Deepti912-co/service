import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { cn } from '@/src/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Process', href: '#process' },
    { name: 'Impact', href: '#case-studies' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 lg:px-12 py-6',
        isScrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5 py-4' : 'bg-transparent'
      )}
    >
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-white rounded-none flex items-center justify-center transition-transform group-hover:rotate-90 duration-500">
              <Cpu className="text-black w-6 h-6" />
            </div>
            <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
          </div>
          <span className="text-2xl font-display font-black tracking-tighter text-white uppercase italic">
            Nexis<span className="text-cyan-400 tracking-[-0.1em]">_</span>AI
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-all hover:tracking-[0.4em]"
            >
              {link.name}
            </a>
          ))}
          <Button variant="outline" size="sm" className="hidden xl:flex">
            Establish Connection
          </Button>
          <Button variant="primary" size="sm" className="blue-glow">
            Initialize Project
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-zinc-900 border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-zinc-400 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" className="w-full">
              Book a Call
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.nav>
    );
}
