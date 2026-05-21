'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/site';
import { SectionLabel } from './SectionLabel';

export function Services() {
  return (
    <section id="services" className="relative z-10 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow="services" title="What I build for teams that need scale.">
          Practical engineering across cloud, DevOps, platform, data and AI — designed for delivery, not slideware.
        </SectionLabel>

        <div className="grid gap-px overflow-hidden border border-paper/10 bg-paper/10 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, delay: index * 0.04 }}
                whileHover={{ y: -8 }}
                className="card-sheen group min-h-[22rem] bg-ink p-7 transition-colors hover:bg-paper hover:text-ink md:p-8"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-display text-5xl font-black tracking-[-0.02em] text-paper/15 transition group-hover:text-ink/20">
                    0{index + 1}
                  </span>
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-paper/10 bg-paper/[0.04] text-acid transition group-hover:border-ink/10 group-hover:bg-ink group-hover:text-acid">
                    <Icon className="h-6 w-6" />
                  </span>
                </div>

                <h3 className="font-display text-4xl font-black leading-tight tracking-[-0.02em] text-paper transition group-hover:text-ink">
                  {service.title}
                </h3>
                <p className="mt-6 text-base leading-7 text-paper/58 transition group-hover:text-ink/65">{service.text}</p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-paper/10 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.18em] text-paper/55 transition group-hover:border-ink/10 group-hover:text-ink/55">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
