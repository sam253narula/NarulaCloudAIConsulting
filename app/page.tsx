import { About } from '@/components/About';
import { Approach } from '@/components/Approach';
import { Contact } from '@/components/Contact';
import { CTA } from '@/components/CTA';
import { CustomCursor } from '@/components/CustomCursor';
import { FloatingBackground } from '@/components/FloatingBackground';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { Navbar } from '@/components/Navbar';
import { Proof } from '@/components/Proof';
import { Services } from '@/components/Services';
import { Showcase } from '@/components/Showcase';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-paper">
      <FloatingBackground />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Showcase />
      <Services />
      <Approach />
      <Proof />
      <CTA />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
