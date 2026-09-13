'use client';

import { MotionConfig } from 'framer-motion';
import { createContext, useContext, useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from 'react';

type MotionPreferences = {
  paused: boolean;
  setPaused: Dispatch<SetStateAction<boolean>>;
  reducedMotion: boolean;
  motionEnabled: boolean;
};

const MotionContext = createContext<MotionPreferences>({ paused: false, setPaused: () => {}, reducedMotion: false, motionEnabled: true });

export function useMotionPreferences() { return useContext(MotionContext); }

export function MotionProvider({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);
  const motionEnabled = !paused && !reducedMotion;
  return (
    <MotionContext.Provider value={{ paused, setPaused, reducedMotion, motionEnabled }}>
      <MotionConfig reducedMotion={motionEnabled ? 'never' : 'always'}>
        <div className="profile-experience" data-motion={motionEnabled ? 'on' : 'off'}>{children}</div>
      </MotionConfig>
    </MotionContext.Provider>
  );
}
