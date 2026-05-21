import { MessageCircle } from 'lucide-react';
import { primaryWhatsAppUrl } from '@/lib/site';

export function FloatingWhatsApp() {
  return (
    <a
      href={primaryWhatsAppUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp Narula Cloud & AI Consulting"
      className="cursor-target fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-acid text-ink shadow-acid transition hover:scale-110 md:h-16 md:w-16"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
