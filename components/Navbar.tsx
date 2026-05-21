'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { navItems, primaryWhatsAppUrl, site } from '@/lib/site';

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -22, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed left-0 right-0 top-0 z-50 px-3 py-3 md:px-8"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-paper/10 bg-ink/76 px-3 py-2 shadow-soft backdrop-blur-xl md:px-4">
        <a href="#top" className="cursor-target flex items-center gap-3 rounded-full text-paper" aria-label="Narula Cloud & AI Consulting home">
          <span className="grid h-12 w-[11.5rem] place-items-center rounded-full border border-paper/10 bg-paper px-4 shadow-soft md:w-[14rem]">
            <img src={site.logo} alt={site.name} className="h-8 w-full object-contain" />
          </span>
          <span className="hidden text-[0.62rem] font-black uppercase leading-4 tracking-[0.18em] text-paper/45 xl:block">
            {site.consultingRole}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="cursor-target rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-paper/55 transition hover:bg-paper/10 hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={primaryWhatsAppUrl}
          target="_blank"
          rel="noreferrer"
          className="cursor-target inline-flex items-center gap-2 rounded-full bg-acid px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-ink transition hover:bg-paper"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Let&apos;s talk</span>
        </a>
      </div>
    </motion.header>
  );
}
