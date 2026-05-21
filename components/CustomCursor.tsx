'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 320, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 320, damping: 30 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      mouseX.set(event.clientX - (hovering ? 42 : 14));
      mouseY.set(event.clientY - (hovering ? 42 : 14));
    };

    const onPointer = (event: Event) => {
      const target = event.target as HTMLElement;
      setHovering(Boolean(target.closest('a, button, input, textarea, .cursor-target')));
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', onPointer);
    document.addEventListener('mouseout', onPointer);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', onPointer);
      document.removeEventListener('mouseout', onPointer);
    };
  }, [hovering, mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="cursor-dot pointer-events-none fixed left-0 top-0 z-[100] hidden rounded-full border border-paper/60 bg-paper/10 backdrop-blur-sm md:block"
      style={{ x: springX, y: springY }}
      animate={{
        width: hovering ? 84 : 28,
        height: hovering ? 84 : 28,
        opacity: hovering ? 0.7 : 0.9
      }}
      transition={{ type: 'spring', stiffness: 240, damping: 24 }}
    />
  );
}
