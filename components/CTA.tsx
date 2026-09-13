'use client';

import { ArrowUpRight } from 'lucide-react';
import { useMotionPreferences } from './MotionProvider';

export function CTA() {
  const { motionEnabled } = useMotionPreferences();

  return (
    <section className="closing-cta" aria-labelledby="closing-cta-title" data-motion={motionEnabled ? 'on' : 'off'}>
      <div className="closing-cta-shell">
        <div className="closing-cta-topline">
          <p className="closing-eyebrow">Ambition → Architecture → Reality</p>
          <span className="closing-cta-coordinate" aria-hidden="true">[ THE NEXT CHAPTER ]</span>
        </div>
        <div className="closing-cta-content">
          <h2 id="closing-cta-title">Big ideas.<br /><span>Built to work.</span></h2>
          <div className="closing-cta-side">
            <p>From the first architecture sketch to a system your team can trust. Let’s turn your next challenge into forward motion.</p>
            <a href="#contact" className="closing-cta-link cursor-target">Start a conversation <ArrowUpRight size={21} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="closing-cta-orbit" aria-hidden="true">
          <div className="closing-orbit-lines">
            <span className="closing-orbit-ring" />
            <span className="closing-orbit-ring closing-orbit-inner" />
            <span className="closing-orbit-ellipse closing-orbit-ellipse-one" />
            <span className="closing-orbit-ellipse closing-orbit-ellipse-two" />
            <span className="closing-orbit-ellipse closing-orbit-ellipse-three" />
            <span className="closing-orbit-axis" />
          </div>
          <div className="closing-orbit-satellite"><span /></div>
        </div>
      </div>
    </section>
  );
}
