'use client';

import { animate, motion, useInView } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Cloud, Cpu, Network } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { MagneticButton } from '@/components/MagneticButton';
import { CloudScene } from '@/components/CloudScene';
import { useMotionPreferences } from '@/components/MotionProvider';
import { metrics } from '@/lib/site';

function Metric({ value, label, detail, index }: (typeof metrics)[number] & { index: number }) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(numberRef, { once: true });
  const { motionEnabled } = useMotionPreferences();

  useEffect(() => {
    const match = value.match(/^(\d+)(.*)$/);
    if (!inView || !match || !numberRef.current || !motionEnabled) {
      if (numberRef.current) numberRef.current.textContent = value;
      return;
    }
    const animation = animate(0, Number(match[1]), {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (number) => {
        if (numberRef.current) numberRef.current.textContent = `${Math.round(number)}${match[2]}`;
      }
    });
    return () => animation.stop();
  }, [inView, value, motionEnabled]);

  return (
    <div className="hero-metric">
      <div className="hero-metric-top"><span className="hero-metric-index">0{index + 1}</span><span className="hero-metric-mark">+</span></div>
      <p className={`hero-metric-value${/^\d/.test(value) ? '' : ' hero-metric-text'}`}><span className="sr-only">{value}</span><span ref={numberRef} aria-hidden="true">{value}</span></p>
      <p className="hero-metric-label">{label}</p>
      <p className="hero-metric-detail">{detail}</p>
    </div>
  );
}

export function Hero() {
  const { motionEnabled } = useMotionPreferences();
  const entrance = (delay: number) => ({
    initial: motionEnabled ? { opacity: 0, y: 22 } : false as const,
    animate: { opacity: 1, y: 0 },
    transition: { duration: motionEnabled ? 0.8 : 0, delay: motionEnabled ? delay : 0, ease: [0.22, 1, 0.36, 1] as const }
  });

  return (
    <section id="top" className="profile-hero">
      <div className="hero-topline"><span><span className="availability-dot" /> Independent expertise. Global reach.</span><span className="hero-edition">CLOUD / PLATFORMS / INTELLIGENCE</span></div>
      <div className="hero-composition">
        <div className="hero-copy">
          <motion.p {...entrance(0.05)} className="hero-eyebrow"><span className="eyebrow-rule" /> ENGINEERING WHAT’S NEXT</motion.p>
          <h1 className="hero-heading">
            {['Cloud that', 'scales.', 'AI that', 'delivers.'].map((line, index) => (
              <span className="hero-line" key={line}>
                <motion.span
                  initial={motionEnabled ? { y: '108%', rotate: 3 } : false}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: motionEnabled ? 0.95 : 0, delay: motionEnabled ? 0.12 + index * 0.09 : 0, ease: [0.22, 1, 0.36, 1] }}
                  className={index % 2 ? 'hero-accent' : ''}
                >{line}</motion.span>
              </span>
            ))}
          </h1>
          <motion.p {...entrance(0.5)} className="hero-description">From your first architecture decision to production at scale. Hands-on cloud, DevOps and AI engineering with <strong>Samarth Narula.</strong></motion.p>
          <motion.div {...entrance(0.62)} className="hero-actions">
            <MagneticButton href="#contact" variant="acid">Let’s build together</MagneticButton>
            <a href="#work" className="hero-work-link">Explore the work <ArrowUpRight size={17} /></a>
          </motion.div>
        </div>
        <motion.div {...entrance(0.3)} className="hero-artwork">
          <div className="hero-artwork-coordinate" aria-hidden="true"><span>NC / SYSTEMS IN MOTION</span><span>01 — ∞</span></div>
          <div className="hero-scene-frame">
            <CloudScene paused={!motionEnabled} />
            <div className="hero-orbit-label orbit-label-cloud" aria-hidden="true"><Cloud size={15} /><span>Cloud architecture</span><i /></div>
            <div className="hero-orbit-label orbit-label-ai" aria-hidden="true"><Cpu size={15} /><span>Applied AI</span><i /></div>
            <div className="hero-orbit-label orbit-label-platform" aria-hidden="true"><Network size={15} /><span>Platform engineering</span><i /></div>
          </div>
          <div className="hero-artwork-caption"><span className="hero-signal-bars" aria-hidden="true">{Array.from({ length: 14 }, (_, i) => <i key={i} style={{ animationDelay: `${i * -0.17}s`, height: `${5 + (i * 7 % 15)}px` }} />)}</span><span>Complex systems.<br /><strong>Connected thinking.</strong></span><span className="hero-artwork-plus" aria-hidden="true">+</span></div>
        </motion.div>
      </div>
      <div className="hero-bottomline"><a href="#about"><span className="scroll-indicator"><ArrowDown size={14} /></span> A little further. A lot more possible.</a><span>BASED IN INDIA · WORKING GLOBALLY</span></div>
      <div className="hero-metrics">{metrics.map((metric, index) => <Metric key={metric.label} {...metric} index={index} />)}</div>
    </section>
  );
}
