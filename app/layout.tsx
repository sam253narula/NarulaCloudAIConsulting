import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://sam253narula.github.io/NarulaCloudAIConsulting'),
  title: `${site.name} | ${site.title}`,
  description: site.description,
  keywords: [
    'Narula Cloud AI Consulting',
    'Samarth Narula',
    'Cloud Consulting',
    'DevOps Consulting',
    'Platform Engineering',
    'AI Product Consulting',
    'AWS',
    'GCP',
    'Kubernetes',
    'Terraform'
  ],
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: 'Cloud that scales. AI that delivers. | Narula',
    description: site.description,
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'Narula Cloud & AI Consulting — Cloud that scales. AI that delivers.' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud that scales. AI that delivers. | Narula',
    description: site.description,
    images: ['/og.png']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="noise font-sans antialiased">{children}</body>
    </html>
  );
}
