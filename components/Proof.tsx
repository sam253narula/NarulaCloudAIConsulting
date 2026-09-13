'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { proofPoints, site, trust } from '@/lib/site';
import { useMotionPreferences } from './MotionProvider';

export function Proof() {
  const { motionEnabled } = useMotionPreferences();

  return (
    <section id="proof" className="portfolio-section portfolio-proof">
      <div className="portfolio-container">
        <motion.div
          className="portfolio-proof-panel"
          initial={motionEnabled ? { opacity: 0, y: 24 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: motionEnabled ? 0.65 : 0 }}
        >
          <div className="portfolio-proof-intro">
            <p className="portfolio-eyebrow"><span className="portfolio-eyebrow-line" aria-hidden="true" />05 / depth that delivers</p>
            <h2>Built on experience.<br /><span>Grounded in delivery.</span></h2>
            <a className="portfolio-text-link" href={site.linkedin} target="_blank" rel="noreferrer">View professional background <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <ul className="portfolio-proof-points">{proofPoints.map((point, index) => <li key={point}><span>0{index + 1}</span>{point}</li>)}</ul>
        </motion.div>
        <div className="portfolio-expertise-band" aria-label="Areas of technical expertise">
          {trust.map((item) => { const Icon = item.icon; return <div key={item.label}><Icon size={17} strokeWidth={1.5} aria-hidden="true" /><span>{item.label}</span></div>; })}
        </div>
      </div>
    </section>
  );
}
