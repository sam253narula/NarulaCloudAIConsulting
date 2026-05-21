import { primaryWhatsAppUrl, site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-paper/10 px-4 py-12 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-5 inline-flex rounded-[1.4rem] border border-paper/10 bg-paper px-4 py-3 shadow-soft">
            <img src={site.logo} alt={site.name} className="h-12 w-64 object-contain" />
          </div>
          <p className="font-display text-4xl font-black leading-tight tracking-[-0.015em] text-paper md:text-6xl">{site.name}</p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-paper/50">
            DevOps, Cloud, Platform Engineering, Data Engineering, Low-Code SaaS and AI Product Consulting by {site.founder}, {site.consultingRole}.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-paper/50">
          <a href="#top" className="cursor-target hover:text-acid">Back to top</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="cursor-target hover:text-acid">LinkedIn</a>
          <a href={`mailto:${site.email}`} className="cursor-target hover:text-acid">Email</a>
          <a href={primaryWhatsAppUrl} target="_blank" rel="noreferrer" className="cursor-target hover:text-acid">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
