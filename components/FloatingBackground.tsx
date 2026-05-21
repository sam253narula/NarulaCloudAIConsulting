'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

export function FloatingBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-ink">
      <motion.div
        className="absolute inset-0 opacity-80"
        style={{
          background: useMotionTemplate`radial-gradient(560px circle at ${mouseX}px ${mouseY}px, rgba(217, 255, 63, 0.12), transparent 42%)`
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(243,240,233,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(243,240,233,0.06)_1px,transparent_1px)] bg-[size:88px_88px] opacity-20" />
      <div className="absolute left-1/2 top-0 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full border border-paper/10 opacity-40" />
      <div className="absolute -right-48 top-28 h-[34rem] w-[34rem] rounded-full bg-acid/10 blur-3xl" />
      <div className="absolute -bottom-48 left-0 h-[32rem] w-[32rem] rounded-full bg-paper/10 blur-3xl" />
    </div>
  );
}
