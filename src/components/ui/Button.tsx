import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}: ButtonProps) {
  const variants = {
    primary: 'bg-white text-black hover:bg-cyan-400 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,219,255,0.4)]',
    secondary: 'bg-zinc-900 border border-white/10 text-white hover:bg-zinc-800',
    outline: 'bg-transparent border border-white/20 text-white hover:border-cyan-400/50 hover:bg-cyan-500/5',
    ghost: 'bg-transparent text-zinc-500 hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs uppercase tracking-widest font-bold',
    md: 'px-6 py-3 text-sm uppercase tracking-widest font-bold',
    lg: 'px-10 py-5 text-base uppercase tracking-[0.2em] font-black',
  };

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'relative overflow-hidden inline-flex items-center justify-center rounded-none transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
