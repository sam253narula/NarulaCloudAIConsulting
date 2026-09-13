'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/site';
import { SectionLabel } from './SectionLabel';
import { useMotionPreferences } from './MotionProvider';

export function Services() {
  const { motionEnabled } = useMotionPreferences();

  return (
    <section id="services" className="portfolio-section portfolio-services">
      <div className="portfolio-container">
        <SectionLabel index="03" eyebrow="how I can help" title="The expertise to move you forward.">
          From the infrastructure underneath your product to the intelligence inside it. Built for your team and ready to evolve.
        </SectionLabel>
        <div className="portfolio-services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                className="portfolio-service-card"
                initial={motionEnabled ? { opacity: 0, y: 24 } : false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: motionEnabled ? 0.6 : 0, delay: motionEnabled ? (index % 3) * 0.05 : 0 }}
              >
                <div className="portfolio-service-top"><Icon size={25} strokeWidth={1.4} aria-hidden="true" /><span>0{index + 1}</span></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul className="portfolio-stack-list" aria-label="Specialties">{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
