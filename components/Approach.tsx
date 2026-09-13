'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { method } from '@/lib/site';
import { SectionLabel } from './SectionLabel';
import { useMotionPreferences } from './MotionProvider';

export function Approach() {
  const { motionEnabled } = useMotionPreferences();
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 85%', 'end 50%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="method" className="portfolio-section portfolio-method">
      <div className="portfolio-container">
        <SectionLabel index="04" eyebrow="the working process" title="Good systems start with good questions.">
          A clear path from your biggest bottleneck to working systems, reusable patterns and production confidence.
        </SectionLabel>
        <div className="portfolio-method-timeline" ref={timelineRef}>
          <div className="portfolio-timeline-track" aria-hidden="true"><motion.span style={{ scaleX: motionEnabled ? progress : 1 }} /></div>
          <ol className="portfolio-method-grid">
            {method.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.title}
                  initial={motionEnabled ? { opacity: 0, y: 24 } : false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: motionEnabled ? 0.6 : 0, delay: motionEnabled ? index * 0.1 : 0 }}
                >
                  <div className="portfolio-method-marker"><span>0{index + 1}</span><Icon size={18} aria-hidden="true" /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
