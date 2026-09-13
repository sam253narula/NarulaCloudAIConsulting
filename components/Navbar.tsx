'use client';

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowUpRight, Menu, Pause, Play, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useMotionPreferences } from '@/components/MotionProvider';
import { site } from '@/lib/site';

const links = [{ label: 'Expertise', href: '#services' }, { label: 'Selected work', href: '#work' }, { label: 'About', href: '#about' }, { label: 'Approach', href: '#method' }];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const { scrollY, scrollYProgress } = useScroll();
  const { paused, setPaused, reducedMotion, motionEnabled } = useMotionPreferences();
  useMotionValueEvent(scrollY, 'change', (value) => setScrolled(value > 24));

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); menuRef.current?.focus(); }
    };
    const query = window.matchMedia('(min-width: 1000px)');
    const closeDesktop = () => { if (query.matches) setOpen(false); };
    document.addEventListener('keydown', onKey);
    query.addEventListener('change', closeDesktop);
    return () => { document.removeEventListener('keydown', onKey); query.removeEventListener('change', closeDesktop); };
  }, [open]);

  return (
    <header className={`profile-nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="profile-nav-inner">
        <a href="#top" className="profile-brand" aria-label={`${site.name} home`} onClick={() => setOpen(false)}><img src={site.logo} alt={site.name} width="230" height="67" /></a>
        <nav className="desktop-nav" aria-label="Main navigation">{links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
        <div className="profile-nav-actions">
          <button type="button" className="motion-toggle" onClick={() => setPaused(!paused)} disabled={reducedMotion} aria-label={reducedMotion ? 'Motion disabled by your device preference' : paused ? 'Resume animations' : 'Pause animations'} aria-pressed={paused || reducedMotion} title={reducedMotion ? 'Reduced motion enabled on your device' : paused ? 'Resume animations' : 'Pause animations'}>{paused || reducedMotion ? <Play size={13} /> : <Pause size={13} />}<span>Motion</span></button>
          <a href="#contact" className="nav-contact" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight size={15} /></a>
          <button ref={menuRef} type="button" className="nav-menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={23} /> : <Menu size={23} />}</button>
        </div>
      </div>
      <AnimatePresence>{open && <motion.nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: motionEnabled ? 0.25 : 0 }}>
        {[...links, { label: 'Contact', href: '#contact' }].map((link, i) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}><span>0{i + 1}</span>{link.label}<ArrowUpRight size={20} /></a>)}
        <p>Independent expertise. Global reach.</p>
      </motion.nav>}</AnimatePresence>
      <motion.div className="reading-progress" style={{ scaleX: scrollYProgress }} />
    </header>
  );
}
