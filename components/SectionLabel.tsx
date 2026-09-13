import type { ReactNode } from 'react';
import './portfolio-sections.css';

export function SectionLabel({
  eyebrow,
  title,
  children,
  index
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  index?: string;
}) {
  return (
    <div className="portfolio-section-heading">
      <div className="portfolio-section-heading-main">
        <p className="portfolio-eyebrow">
          <span className="portfolio-eyebrow-line" aria-hidden="true" />
          {index ? <span>{index} / </span> : null}{eyebrow}
        </p>
        <h2>{title}</h2>
      </div>
      {children ? <div className="portfolio-section-intro">{children}</div> : null}
    </div>
  );
}
