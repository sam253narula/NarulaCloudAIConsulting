'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, BadgeCheck, BriefcaseBusiness, Sparkles } from 'lucide-react';
import { site } from '@/lib/site';
import { SectionLabel } from './SectionLabel';

const highlights = [
  'DevOps, Cloud, Platform Engineering and AI product consulting',
  'Hands-on architecture, implementation and delivery support',
  'Data engineering, low-code SaaS enablement and automation experience'
];

export function About() {
  return (
    <section id="about" className="relative z-10 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow="about us" title="Founder-led consulting for teams that need execution, not noise.">
          Narula Cloud & AI Consulting is led by Samarth Narula, combining cloud architecture, DevOps execution, platform engineering, data systems and practical AI product delivery.
        </SectionLabel>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="clip-panel relative min-h-[35rem] overflow-hidden border border-paper/10 bg-paper/[0.04] shadow-soft"
          >
            <img
              src={site.founderPhoto}
              alt={`${site.founder}, ${site.consultingRole}`}
              className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
            <div className="absolute left-5 right-5 top-5 rounded-[1.6rem] border border-paper/10 bg-ink/62 p-4 backdrop-blur-xl">
              <img src={site.logo} alt={site.name} className="h-14 w-full object-contain rounded-2xl bg-paper p-2" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="rounded-[2rem] border border-paper/10 bg-ink/72 p-6 backdrop-blur-xl">
                <p className="mb-3 inline-flex rounded-full bg-acid px-3 py-1 text-[0.64rem] font-black uppercase tracking-[0.18em] text-ink">
                  {site.role}
                </p>
                <h3 className="font-display text-4xl font-black leading-tight tracking-[-0.015em] text-paper md:text-5xl">
                  {site.founder}
                </h3>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-acid">
                  {site.consultingRole}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="flex flex-col justify-between rounded-[2.2rem] border border-paper/10 bg-paper/[0.04] p-6 md:p-9"
          >
            <div>
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-acid text-ink">
                  <Sparkles className="h-5 w-5" />
                </span>
                <span className="rounded-full border border-paper/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-paper/52">
                  Founder-led · delivery-focused
                </span>
              </div>

              <h3 className="font-display text-4xl font-black leading-tight tracking-[-0.015em] text-paper md:text-6xl">
                Building scalable cloud platforms, automated DevOps workflows and AI-powered engineering products.
              </h3>

              <p className="mt-7 text-lg leading-8 text-paper/66">
                We help startups, product companies and enterprise teams solve real-world engineering challenges across AWS, GCP, Kubernetes, Terraform, CI/CD, observability, reliability, data engineering, low-code SaaS and GenAI automation.
              </p>
            </div>

            <div className="mt-9 grid gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-paper/10 bg-ink/50 p-4">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-acid" />
                  <p className="text-sm leading-6 text-paper/65">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              <a href="#contact" className="cursor-target inline-flex items-center justify-center gap-2 rounded-full bg-acid px-5 py-4 text-xs font-black uppercase tracking-[0.16em] text-ink transition hover:bg-paper">
                <BriefcaseBusiness className="h-4 w-4" /> Work with us
              </a>
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="cursor-target inline-flex items-center justify-center gap-2 rounded-full border border-paper/15 px-5 py-4 text-xs font-black uppercase tracking-[0.16em] text-paper transition hover:border-acid hover:text-acid">
                LinkedIn <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
