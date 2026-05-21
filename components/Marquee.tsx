import { marqueeWords } from '@/lib/site';

export function Marquee() {
  const words = [...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords];

  return (
    <section className="relative z-10 overflow-hidden border-y border-paper/10 bg-paper/[0.03] py-5">
      <div className="marquee-track flex w-max items-center gap-5 whitespace-nowrap">
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="font-display text-2xl font-black uppercase tracking-[-0.015em] text-paper/85 md:text-4xl">
            {word} <span className="text-acid">•</span>
          </span>
        ))}
      </div>
    </section>
  );
}
