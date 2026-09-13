'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { site } from '@/lib/site';
import { SectionLabel } from './SectionLabel';
import { useMotionPreferences } from './MotionProvider';

const highlights = [
  ['Architecture to implementation', 'Hands-on support across cloud, DevOps and platform engineering.'],
  ['Experience across the stack', 'Data engineering, low-code SaaS and practical AI product delivery.'],
  ['Built alongside your team', 'Reusable systems and the knowledge to keep them moving.']
];

export function About() {
  const { motionEnabled } = useMotionPreferences();

  return (
    <section id="about" className="portfolio-section portfolio-about">
      <div className="portfolio-container">
        <SectionLabel index="01" eyebrow="the person behind the platform" title="A builder at heart.">
          Deep technical thinking. A hands-on approach. One partner from the first architecture sketch to production.
        </SectionLabel>

        <div className="portfolio-about-grid">
          <motion.figure
            className="portfolio-founder-photo"
            initial={motionEnabled ? { opacity: 0, y: 28 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: motionEnabled ? 0.7 : 0 }}
          >
            <img src={site.founderPhoto} alt={`${site.founder}, ${site.consultingRole}`} loading="lazy" />
            <span className="portfolio-photo-corner" aria-hidden="true" />
            <figcaption>
              <span className="portfolio-micro-label">{site.consultingRole}</span>
              <span className="portfolio-photo-name">{site.founder}</span>
            </figcaption>
          </motion.figure>

          <motion.div
            className="portfolio-about-copy"
            initial={motionEnabled ? { opacity: 0, y: 28 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: motionEnabled ? 0.7 : 0, delay: motionEnabled ? 0.1 : 0 }}
          >
            <p className="portfolio-micro-label portfolio-acid-text">Founder-led. Delivery-focused.</p>
            <h3>Turning complex systems into <span>your next advantage.</span></h3>
            <p className="portfolio-about-description">
              I’m Samarth, founder of Narula Cloud &amp; AI Consulting. I help startups, product companies and enterprise teams build scalable cloud platforms, automate delivery and bring practical AI products to life.
            </p>
            <div className="portfolio-founder-highlights">
              {highlights.map(([title, description]) => (
                <div key={title}>
                  <Check size={16} aria-hidden="true" />
                  <p><strong>{title}</strong><span>{description}</span></p>
                </div>
              ))}
            </div>
            <div className="portfolio-about-links">
              <a className="portfolio-solid-link" href="#contact">Work with me <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a className="portfolio-text-link" href={site.linkedin} target="_blank" rel="noreferrer">Explore my background <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
