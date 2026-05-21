'use client';

import { motion } from 'framer-motion';
import { MagneticButton } from './MagneticButton';
import { primaryWhatsAppUrl } from '@/lib/site';

export function CTA() {
  return (
    <section className="relative z-10 px-4 py-16 md:px-8 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-acid/25 bg-acid p-7 text-ink shadow-glow md:p-12"
      >
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="mb-5 font-mono text-xs font-black uppercase tracking-[0.35em] text-ink/60">/fast start</p>
            <h2 className="font-display text-5xl font-black leading-[1.02] tracking-[-0.02em] md:text-7xl">
              Need a cloud, DevOps, data or AI build?
            </h2>
          </div>
          <div className="md:text-right">
            <p className="mb-6 text-base leading-7 text-ink/70">
              Share your project challenge. I can help turn it into architecture, automation, platform implementation or AI product delivery.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <MagneticButton href="#contact" variant="paper">Send inquiry</MagneticButton>
              <MagneticButton href={primaryWhatsAppUrl} target="_blank" rel="noreferrer" variant="ghost" className="border-ink/30 bg-ink text-paper hover:border-ink hover:bg-paper hover:text-ink">
                WhatsApp
              </MagneticButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
