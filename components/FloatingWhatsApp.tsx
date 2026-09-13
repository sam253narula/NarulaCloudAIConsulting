import { MessageCircle } from 'lucide-react';
import { primaryWhatsAppUrl } from '@/lib/site';

export function FloatingWhatsApp() {
  return (
    <a
      href={primaryWhatsAppUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Samarth Narula on WhatsApp (opens in a new tab)"
      className="floating-contact cursor-target"
    >
      <MessageCircle size={21} strokeWidth={1.7} aria-hidden="true" />
      <span>Let’s talk</span>
    </a>
  );
}
