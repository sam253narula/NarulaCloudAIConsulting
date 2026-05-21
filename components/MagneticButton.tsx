'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

type Variant = 'paper' | 'acid' | 'ghost';

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  target?: string;
  rel?: string;
}

const variantStyles: Record<Variant, string> = {
  paper: 'border-paper bg-paper text-ink hover:bg-acid hover:border-acid',
  acid: 'border-acid bg-acid text-ink hover:bg-paper hover:border-paper shadow-acid',
  ghost: 'border-paper/20 bg-paper/5 text-paper hover:border-acid hover:text-acid'
};

export function MagneticButton({ href, children, variant = 'paper', className = '', target, rel }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18 });
  const springY = useSpring(y, { stiffness: 180, damping: 18 });

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`magnetic cursor-target group inline-flex items-center justify-center gap-3 rounded-full border px-6 py-4 text-xs font-black uppercase tracking-[0.2em] transition-colors md:text-sm ${variantStyles[variant]} ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </motion.a>
  );
}
