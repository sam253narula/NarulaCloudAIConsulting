'use client';

import { motion } from 'framer-motion';
import { showcase } from '@/lib/site';
import { SectionLabel } from './SectionLabel';

export function Showcase() {
  return (
    <section id="work" className="relative z-10 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow="selected work" title="Consulting stories, presented like products.">
          A premium profile site should sell outcomes. These cards turn your experience into high-conversion proof.
        </SectionLabel>

        <div className="space-y-5">
          {showcase.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
                className="cursor-target group grid gap-6 overflow-hidden rounded-[2rem] border border-paper/10 bg-paper/[0.035] p-5 backdrop-blur transition hover:border-acid/50 md:grid-cols-[0.2fr_0.9fr_1.2fr_0.5fr] md:items-center md:p-7"
              >
                <div>
                  <p className="font-display text-6xl font-black tracking-[-0.025em] text-paper/18 transition group-hover:text-acid">{project.number}</p>
                </div>
                <div>
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-acid">{project.company}</p>
                  <h3 className="font-display text-4xl font-black leading-tight tracking-[-0.02em] text-paper md:text-5xl">{project.title}</h3>
                </div>
                <p className="text-base leading-7 text-paper/58">{project.description}</p>
                <div className="flex flex-row items-start gap-3 md:flex-col md:items-end">
                  <span className={`grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br ${project.accent} text-ink shadow-glow`}>
                    <Icon className="h-7 w-7" />
                  </span>
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full bg-paper/10 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.16em] text-paper/62">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
