import type { Metadata } from 'next';
import { headers } from 'next/headers';
import './globals.css';
import { site } from '@/lib/site';

export function generateMetadata(): Metadata {
  const requestHeaders = headers();
  const host = requestHeaders.get('host') || 'localhost:3000';
  const protocol = requestHeaders.get('x-forwarded-proto') === 'http' || host.startsWith('localhost') ? 'http' : 'https';
  const image = { url: site.logo.replace('narula-logo-transparent.png', 'og.png'), width: 1536, height: 1024, alt: 'Narula Cloud & AI Consulting — Cloud that scales. AI that delivers.' };

  return {
  metadataBase: new URL(`${protocol}://${host}`),
  title: `${site.name} | ${site.title}`,
  description: site.description,
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: 'Cloud that scales. AI that delivers. | Narula',
    description: site.description,
    images: [image]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud that scales. AI that delivers. | Narula',
    description: site.description,
    images: [image]
  },
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
  ]
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="noise font-sans antialiased">{children}</body>
    </html>
  );
}
