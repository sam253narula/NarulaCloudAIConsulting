'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, CloudCog, Cpu, DatabaseZap, ShieldCheck } from 'lucide-react';
import { useRef } from 'react';
import { MagneticButton } from '@/components/MagneticButton';
import { metrics, primaryWhatsAppUrl, site } from '@/lib/site';

const orbitItems = [
  { label: 'AWS', icon: CloudCog, style: { left: '14%', top: '28%' } },
  { label: 'GCP', icon: DatabaseZap, style: { left: '86%', top: '28%' } },
  { label: 'AI', icon: Cpu, style: { left: '14%', top: '30%' } },
  { label: 'K8s', icon: ShieldCheck, style: { left: '86%', top: '32%' } }
];

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative z-10 min-h-screen overflow-hidden px-4 pt-32 md:px-8 md:pt-40"
    >
      <motion.div
        style={{ y, opacity }}
        className="mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.12fr_0.88fr]"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex rounded-full border border-paper/10 bg-paper/[0.04] px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-acid sm:tracking-[0.24em]">
              {site.title}
            </span>
            <span className="inline-flex rounded-full border border-acid/25 bg-acid/10 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-paper/70 sm:tracking-[0.18em]">
              {site.role} · {site.consultingRole}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: 'easeOut' }}
            className="font-display text-[3.4rem] font-black leading-[1.03] tracking-[-0.015em] text-paper text-balance sm:text-[5.1rem] sm:tracking-[-0.02em] md:text-[6.8rem] lg:text-[7.8rem]"
          >
            Cloud, DevOps{' '}
            <span className="big-outline block tracking-[-0.01em] sm:tracking-[-0.015em]">
              &amp; AI Platforms
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-paper/70 md:text-xl"
          >
            {site.description} I help startups, product companies and enterprise engineering teams move faster with practical architecture, implementation and production delivery support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton href="#contact" variant="acid">
              Start a project
            </MagneticButton>
            <MagneticButton href={primaryWhatsAppUrl} target="_blank" rel="noreferrer" variant="ghost">
              WhatsApp consultation
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[31rem] pb-8 lg:pb-0"
        >
          <div className="clip-panel relative aspect-square overflow-hidden border border-paper/10 bg-paper/[0.04] p-4 shadow-soft sm:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,255,63,0.18),transparent_45%)]" />
            <div className="orbit-slow absolute inset-[12%] rounded-full border border-dashed border-acid/35" />
            <div className="orbit-fast absolute inset-[23%] rounded-full border border-paper/10" />

            <div className="absolute left-1/2 top-1/2 z-10 grid h-32 w-48 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[1.8rem] border border-paper/10 bg-paper p-4 shadow-glow sm:h-36 sm:w-56 md:h-40 md:w-64 md:rounded-[2rem]">
              <img src={site.logo} alt={site.name} className="max-h-full w-full object-contain" />
            </div>

            {orbitItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  style={item.style}
                  className="card-sheen absolute z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border border-paper/10 bg-ink/80 text-paper shadow-soft backdrop-blur sm:h-16 sm:w-16 md:h-[5.25rem] md:w-[5.25rem] md:rounded-3xl"
                >
                  <Icon className="mb-1 h-4 w-4 text-acid md:mb-2 md:h-5 md:w-5" />
                  <span className="text-[0.58rem] font-black uppercase leading-none tracking-[0.12em] sm:text-[0.65rem] md:text-xs md:tracking-[0.18em]">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-between rounded-full border border-paper/10 bg-paper/[0.04] px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-paper/55 sm:tracking-[0.18em]">
            <span>available</span>
            <span className="text-acid">India · US remote</span>
          </div>
        </motion.div>
      </motion.div>

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-px overflow-hidden border border-paper/10 bg-paper/10 md:grid-cols-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            className="bg-ink p-5 md:p-7"
          >
            <p className="font-display text-4xl font-black tracking-[-0.01em] text-paper md:text-5xl">
              {metric.value}
            </p>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-acid md:tracking-[0.16em]">
              {metric.label}
            </p>
            <p className="mt-2 text-sm text-paper/45">{metric.detail}</p>
          </motion.div>
        ))}
      </div>

      <a
        href="#services"
        className="cursor-target absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-paper/45 transition hover:text-acid md:flex"
      >
        Scroll <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
