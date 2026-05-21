'use client';

import { motion } from 'framer-motion';
import { method } from '@/lib/site';
import { SectionLabel } from './SectionLabel';

export function Approach() {
  return (
    <section id="method" className="relative z-10 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow="method" title="A hands-on delivery model, not a consulting deck.">
          The engagement starts with the bottleneck and ends with working systems, reusable patterns and production confidence.
        </SectionLabel>

        <div className="grid gap-4 lg:grid-cols-4">
          {method.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.07 }}
                className="clip-card min-h-[20rem] border border-paper/10 bg-paper/[0.04] p-7"
              >
                <div className="mb-16 flex items-center justify-between">
                  <span className="font-display text-5xl font-black tracking-[-0.02em] text-paper/18">0{index + 1}</span>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-acid text-ink">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="font-display text-3xl font-black leading-tight tracking-[-0.018em] text-paper">{item.title}</h3>
                <p className="mt-5 text-sm leading-7 text-paper/58">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
