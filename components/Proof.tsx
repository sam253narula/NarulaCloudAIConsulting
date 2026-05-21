'use client';

import { motion } from 'framer-motion';
import { proofPoints, site, trust } from '@/lib/site';
import { SectionLabel } from './SectionLabel';

export function Proof() {
  return (
    <section id="proof" className="relative z-10 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow="proof" title="Built around real cloud, AI and data delivery.">
          A focused consulting brand backed by hands-on architecture, engineering and implementation experience.
        </SectionLabel>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-paper/10 bg-paper/[0.04] p-7 md:p-9">
            <div className="inline-flex rounded-[1.6rem] bg-paper px-5 py-4 shadow-soft">
              <img src={site.logo} alt={site.name} className="h-14 w-64 max-w-full object-contain md:h-16 md:w-72" />
            </div>
            <h3 className="mt-8 font-display text-4xl font-black leading-tight tracking-[-0.015em] text-paper md:text-5xl">
              {site.name}
            </h3>
            <p className="mt-6 text-base leading-8 text-paper/62">
              Positioned for teams that need an independent consultant who can move from strategy to implementation across DevOps, cloud platforms, data systems and AI products.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-paper/10 bg-paper/10 sm:grid-cols-2">
            {proofPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
                className="bg-ink p-6"
              >
                <span className="font-display text-4xl font-black tracking-[-0.02em] text-paper/20">0{index + 1}</span>
                <p className="mt-5 text-base font-semibold leading-7 text-paper/78">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-full border border-paper/10 bg-paper/[0.03] py-4">
          <div className="marquee-track-reverse flex w-max items-center gap-3 whitespace-nowrap px-4">
            {[...trust, ...trust, ...trust].map((item, index) => {
              const Icon = item.icon;
              return (
                <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2 rounded-full border border-paper/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-paper/65">
                  <Icon className="h-4 w-4 text-acid" /> {item.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
