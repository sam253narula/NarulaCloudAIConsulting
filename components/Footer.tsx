import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { primaryWhatsAppUrl, site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="closing-footer">
      <div className="closing-footer-shell">
        <div className="closing-footer-top">
          <a href="#top" className="closing-footer-brand cursor-target" aria-label={`${site.name}, back to top`}>
            <span className="closing-footer-monogram" aria-hidden="true">N<span>↗</span></span>
            <span>Narula<span>Cloud &amp; AI Consulting</span></span>
          </a>
          <p>Cloud foundations.<br />Intelligent possibilities.</p>
          <nav className="closing-footer-links" aria-label="Social and contact links">
            <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a>
            <a href={`mailto:${site.email}`}>Email <ArrowUpRight size={13} aria-hidden="true" /></a>
            <a href={primaryWhatsAppUrl} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={13} aria-hidden="true" /></a>
          </nav>
        </div>
        <div className="closing-footer-wordmark" aria-hidden="true">NARULA<span>↗</span></div>
        <div className="closing-footer-bottom">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <span>Independent thinking. Hands-on engineering.</span>
          <a href="#top" className="cursor-target">Back to top <ArrowUp size={13} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
