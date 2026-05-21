'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { contactOptions, primaryWhatsAppUrl, site } from '@/lib/site';
import { SectionLabel } from './SectionLabel';

export function Contact() {
  return (
    <section id="contact" className="relative z-10 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow="contact" title="Have a cloud or AI build?">
          Send a project note and start with the outcome you want: faster delivery, safer cloud, better platform, stronger data pipeline or AI automation.
        </SectionLabel>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] border border-paper/10 bg-paper/[0.04] p-7 md:p-9"
          >
            <p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.28em] text-acid">/direct line</p>
            <h3 className="font-display text-5xl font-black leading-tight tracking-[-0.02em] text-paper">Talk to Samarth</h3>
            <p className="mt-6 text-base leading-8 text-paper/62">
              {site.consultingRole} at {site.name}. Available for DevOps, Cloud, Platform Engineering, Data Engineering, Low-Code SaaS and AI Product consulting.
            </p>

            <div className="mt-8 space-y-3">
              {contactOptions.map((option) => (
                <a
                  key={option.label}
                  href={option.href}
                  className="cursor-target flex items-center justify-between rounded-2xl border border-paper/10 bg-ink/60 p-4 transition hover:border-acid/50 hover:bg-paper hover:text-ink"
                >
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-acid">{option.label}</span>
                  <span className="text-sm font-semibold">{option.value}</span>
                </a>
              ))}
            </div>

            <a
              href={primaryWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="cursor-target mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-acid px-6 py-5 text-xs font-black uppercase tracking-[0.22em] text-ink transition hover:bg-paper"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp me
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08 }}
            action={`mailto:${site.email}`}
            method="post"
            encType="text/plain"
            className="rounded-[2rem] border border-paper/10 bg-paper/[0.04] p-5 md:p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-paper/50">Name</span>
                <input
                  name="name"
                  className="w-full rounded-2xl border border-paper/10 bg-ink px-4 py-4 text-paper outline-none transition placeholder:text-paper/25 focus:border-acid"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-paper/50">Email</span>
                <input
                  name="email"
                  type="email"
                  className="w-full rounded-2xl border border-paper/10 bg-ink px-4 py-4 text-paper outline-none transition placeholder:text-paper/25 focus:border-acid"
                  placeholder="you@company.com"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-paper/50">Need help with</span>
              <select
                name="service"
                className="w-full rounded-2xl border border-paper/10 bg-ink px-4 py-4 text-paper outline-none transition focus:border-acid"
                defaultValue="Cloud / DevOps consulting"
              >
                <option>Cloud / DevOps consulting</option>
                <option>Platform engineering</option>
                <option>AI product architecture</option>
                <option>Data engineering / low-code SaaS</option>
                <option>Kubernetes / Terraform implementation</option>
              </select>
            </label>

            <label className="mt-4 block">
              <span className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-paper/50">Project</span>
              <textarea
                name="project"
                rows={7}
                className="w-full resize-none rounded-2xl border border-paper/10 bg-ink px-4 py-4 text-paper outline-none transition placeholder:text-paper/25 focus:border-acid"
                placeholder="Briefly describe your challenge, timeline and target outcome."
              />
            </label>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <button
                type="submit"
                className="cursor-target inline-flex items-center justify-center gap-2 rounded-full bg-acid px-5 py-4 text-xs font-black uppercase tracking-[0.22em] text-ink transition hover:bg-paper sm:col-span-2"
              >
                <Mail className="h-4 w-4" /> Send inquiry
              </button>
              <a
                href={primaryWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="cursor-target inline-flex items-center justify-center gap-2 rounded-full border border-paper/15 px-5 py-4 text-xs font-black uppercase tracking-[0.22em] text-paper transition hover:border-acid hover:text-acid"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
