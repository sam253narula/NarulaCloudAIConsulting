import type { ReactNode } from 'react';

export function SectionLabel({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="mb-10 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.35em] text-acid">/{eyebrow}</p>
        <h2 className="max-w-4xl font-display text-5xl font-black leading-[0.98] tracking-[-0.02em] text-paper text-balance md:text-7xl">
          {title}
        </h2>
      </div>
      {children ? <div className="max-w-sm text-sm leading-6 text-paper/55 md:text-right">{children}</div> : null}
    </div>
  );
}
