import { About } from '@/components/About';
import { Approach } from '@/components/Approach';
import { Contact } from '@/components/Contact';
import { CTA } from '@/components/CTA';
import { FloatingBackground } from '@/components/FloatingBackground';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { Navbar } from '@/components/Navbar';
import { Proof } from '@/components/Proof';
import { Services } from '@/components/Services';
import { Showcase } from '@/components/Showcase';
import { MotionProvider } from '@/components/MotionProvider';
import './profile.css';

export default function Home() {
  return (
    <MotionProvider>
    <main id="main-content" className="profile-shell relative min-h-screen overflow-hidden text-paper">
      <a className="skip-link" href="#hero-content">Skip to content</a>
      <FloatingBackground />
      <Navbar />
      <div id="hero-content" tabIndex={-1}><Hero /></div>
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
    </MotionProvider>
  );
}
