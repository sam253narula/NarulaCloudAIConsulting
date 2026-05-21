import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/lib/site';

export const metadata: Metadata = {
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
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="noise font-sans antialiased">{children}</body>
    </html>
  );
}
