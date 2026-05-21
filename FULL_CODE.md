# Full Code — Narula Cloud & AI Consulting Website

This code package includes updated logo usage, founder photo, About Us section, and safer typography spacing.

## `package.json`

```json
{
  "name": "narula-cloud-ai-consulting",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@types/node": "^20.14.12",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "framer-motion": "^11.3.24",
    "lucide-react": "^0.468.0",
    "next": "^14.2.15",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "typescript": "^5.5.4"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.20",
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.15",
    "postcss": "^8.4.41",
    "tailwindcss": "^3.4.10"
  }
}

```

## `next.config.mjs`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;

```

## `tailwind.config.ts`

```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter Tight', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        ink: '#080808',
        paper: '#f3f0e9',
        acid: '#d9ff3f',
        mist: '#c8c8c8'
      },
      boxShadow: {
        glow: '0 0 80px rgba(217, 255, 63, 0.18)',
        acid: '0 0 42px rgba(217, 255, 63, 0.26)',
        soft: '0 20px 80px rgba(0, 0, 0, 0.22)'
      },
      backgroundImage: {
        radialGrid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)'
      }
    }
  },
  plugins: []
};

export default config;

```

## `postcss.config.mjs`

```js
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;

```

## `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```

## `app/layout.tsx`

```tsx
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

```

## `app/page.tsx`

```tsx
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

```

## `app/globals.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Inter+Tight:wght@600;700;800;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --ink: #080808;
  --paper: #f3f0e9;
  --acid: #d9ff3f;
  --mist: #c8c8c8;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background: var(--ink);
}

body {
  margin: 0;
  min-height: 100vh;
  color: var(--paper);
  background:
    radial-gradient(circle at 20% 10%, rgba(217, 255, 63, 0.14), transparent 32rem),
    radial-gradient(circle at 82% 18%, rgba(255, 255, 255, 0.07), transparent 28rem),
    #080808;
  overflow-x: hidden;
}

::selection {
  background: var(--acid);
  color: var(--ink);
}

.noise::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 80;
  opacity: 0.07;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
}

.text-balance {
  text-wrap: balance;
}

.big-outline {
  -webkit-text-stroke: 1px rgba(243, 240, 233, 0.42);
  color: transparent;
}

.clip-card {
  clip-path: polygon(0 0, 100% 0, 100% 86%, 88% 100%, 0 100%);
}

.clip-panel {
  clip-path: polygon(0 0, 94% 0, 100% 12%, 100% 100%, 7% 100%, 0 88%);
}

.cursor-dot {
  mix-blend-mode: difference;
}

.magnetic {
  transform-style: preserve-3d;
}

.card-sheen {
  position: relative;
  overflow: hidden;
}

.card-sheen::after {
  content: '';
  position: absolute;
  inset: -120% auto auto -80%;
  width: 80%;
  height: 240%;
  background: linear-gradient(115deg, transparent, rgba(255, 255, 255, 0.15), transparent);
  transform: rotate(20deg);
  transition: transform 0.8s ease;
}

.card-sheen:hover::after {
  transform: translateX(260%) rotate(20deg);
}

.marquee-track {
  animation: marquee 26s linear infinite;
}

.marquee-track-reverse {
  animation: marquee-reverse 32s linear infinite;
}

.orbit-slow {
  animation: orbit 18s linear infinite;
}

.orbit-fast {
  animation: orbit 10s linear infinite reverse;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes marquee-reverse {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes orbit {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}

```

## `lib/site.ts`

```ts
import {
  Bot,
  Boxes,
  BrainCircuit,
  CloudCog,
  Code2,
  DatabaseZap,
  Gauge,
  GitBranch,
  Layers3,
  LineChart,
  LockKeyhole,
  MessageCircle,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Workflow,
  Zap
} from 'lucide-react';

export const site = {
  name: 'Narula Cloud & AI Consulting',
  founder: 'Samarth Narula',
  title: 'DevOps, Cloud, Platform Engineering & AI Product Consulting',
  description:
    'Hands-on consulting for scalable cloud platforms, automated DevOps workflows, data engineering systems, low-code SaaS enablement, and AI-powered engineering products.',
  email: 'samarthnarula253@gmail.com',
  whatsappNumber: '+91 9930864102/ +1 7272255610',
  linkedin: 'https://www.linkedin.com/in/samarth-narula/',
  logo: '/narula-logo-transparent.png',
  logoWhite: '/narula-logo-white.png',
  founderPhoto: '/samarth-narula-founder.jpg',
  role: 'Founder',
  consultingRole: 'Founder & Independent Consultant'
};

export const primaryWhatsAppUrl = 'https://wa.me/919930864102';
export const indiaPhoneUrl = 'tel:+919930864102';
export const usPhoneUrl = 'tel:+17272255610';

export const navItems = [
  { label: 'work', href: '#work' },
  { label: 'about', href: '#about' },
  { label: 'services', href: '#services' },
  { label: 'method', href: '#method' },
  { label: 'proof', href: '#proof' },
  { label: 'contact', href: '#contact' }
];

export const metrics = [
  { value: '10+', label: 'years building systems', detail: 'cloud, AI, data and DevOps' },
  { value: '31K+', label: 'users enabled', detail: 'enterprise telecom platform' },
  { value: '55', label: 'engineers led', detail: 'global delivery teams' },
  { value: 'AWS/GCP', label: 'cloud depth', detail: 'certified multi-cloud execution' }
];

export const services = [
  {
    icon: GitBranch,
    title: 'DevOps Automation',
    text: 'CI/CD pipelines, release workflows, GitOps, deployment controls and delivery automation that reduce manual effort.',
    tags: ['CI/CD', 'GitOps', 'Argo']
  },
  {
    icon: CloudCog,
    title: 'Cloud Architecture',
    text: 'Secure AWS and GCP architecture for product platforms, data workloads, SaaS deployments and scalable foundations.',
    tags: ['AWS', 'GCP', 'Security']
  },
  {
    icon: Layers3,
    title: 'Platform Engineering',
    text: 'Internal developer platforms, reusable Terraform modules, golden paths and self-service engineering workflows.',
    tags: ['IDP', 'Terraform', 'DX']
  },
  {
    icon: Boxes,
    title: 'Kubernetes Platforms',
    text: 'Containerized delivery using Docker, Kubernetes, Helm, observability, service reliability and rollout strategies.',
    tags: ['EKS', 'GKE', 'Helm']
  },
  {
    icon: BrainCircuit,
    title: 'AI Product Engineering',
    text: 'GenAI prototypes, AI copilots, structured outputs, guardrails and practical AI automation for engineering teams.',
    tags: ['GenAI', 'RAG', 'Guardrails']
  },
  {
    icon: DatabaseZap,
    title: 'Data Engineering & Low-Code SaaS',
    text: 'Data pipelines, lakehouse migration, metadata workflows, low-code SaaS evaluation and cloud analytics foundations.',
    tags: ['Spark', 'BigQuery', 'SaaS']
  }
];

export const showcase = [
  {
    number: '01',
    title: 'ThinkDB AI Data Copilot',
    company: 'AI Product Architecture',
    description:
      'A natural-language database IDE concept that converts questions into safe, schema-aware SQL with validation, guardrails and conversational follow-ups.',
    stack: ['GenAI', 'SQL', 'Spring Boot', 'PostgreSQL'],
    icon: Bot,
    accent: 'from-lime-300 via-emerald-300 to-cyan-300'
  },
  {
    number: '02',
    title: 'Enterprise Cloud Data Platform',
    company: 'Cloud + Data Engineering',
    description:
      'GCP modernization patterns for data teams using BigQuery, Dataproc, Composer, governance and reusable platform automation.',
    stack: ['GCP', 'BigQuery', 'Dataproc', 'Composer'],
    icon: LineChart,
    accent: 'from-sky-300 via-indigo-300 to-violet-300'
  },
  {
    number: '03',
    title: 'Multi-Tenant SaaS Automation',
    company: 'DevOps + Platform Engineering',
    description:
      'Zero-touch SaaS onboarding patterns with cloud templates, Lambda workflows, Kubernetes jobs, secrets automation and Argo orchestration.',
    stack: ['AWS', 'EKS', 'Lambda', 'Argo'],
    icon: Workflow,
    accent: 'from-orange-300 via-rose-300 to-pink-300'
  },
  {
    number: '04',
    title: 'Low-Code Engineering Enablement',
    company: 'SaaS Evaluation + Adoption',
    description:
      'Technical evaluation and rollout support for low-code data platforms, Spark/Airflow workflows, demos and adoption playbooks.',
    stack: ['Prophecy', 'Spark', 'Airflow', 'DataOps'],
    icon: Code2,
    accent: 'from-yellow-300 via-lime-300 to-green-300'
  }
];

export const method = [
  {
    title: 'Map the bottleneck',
    description:
      'Find where cloud, DevOps, data, AI, cost, security or team workflows are slowing delivery down.',
    icon: Gauge
  },
  {
    title: 'Design the operating model',
    description:
      'Define architecture, implementation roadmap, reusable platform blocks and measurable engineering outcomes.',
    icon: ServerCog
  },
  {
    title: 'Build with your team',
    description:
      'Implement infrastructure, pipelines, Kubernetes platforms, data workflows and AI prototypes hands-on.',
    icon: Rocket
  },
  {
    title: 'Harden for production',
    description:
      'Improve reliability, observability, security, cost, governance and production readiness before scale.',
    icon: ShieldCheck
  }
];

export const marqueeWords = [
  'Cloud Architecture',
  'AI Products',
  'Kubernetes',
  'DevOps Automation',
  'Data Engineering',
  'Low-Code SaaS',
  'Terraform',
  'Platform Engineering',
  'Reliability',
  'GenAI Workflows'
];

export const trust = [
  { label: 'AWS', icon: CloudCog },
  { label: 'GCP', icon: CloudCog },
  { label: 'Kubernetes', icon: Boxes },
  { label: 'Terraform', icon: TerminalSquare },
  { label: 'GenAI', icon: BrainCircuit },
  { label: 'Security', icon: LockKeyhole },
  { label: 'Automation', icon: Zap },
  { label: 'Data', icon: DatabaseZap }
];

export const proofPoints = [
  'Cloud architecture across AWS and GCP',
  'Platform engineering with Kubernetes, Helm and Terraform',
  'Data engineering systems with Spark, BigQuery, Kafka and Flink',
  'Low-code SaaS enablement and enterprise rollout support',
  'AI-powered engineering tools, copilots and GenAI automation',
  'Hands-on delivery across startups, product teams and enterprises'
];

export const contactOptions = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { label: 'India', value: '+91 9930864102', href: indiaPhoneUrl },
  { label: 'US', value: '+1 7272255610', href: usPhoneUrl }
];

```

## `components/About.tsx`

```tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, BadgeCheck, BriefcaseBusiness, Sparkles } from 'lucide-react';
import { site } from '@/lib/site';
import { SectionLabel } from './SectionLabel';

const highlights = [
  'DevOps, Cloud, Platform Engineering and AI product consulting',
  'Hands-on architecture, implementation and delivery support',
  'Data engineering, low-code SaaS enablement and automation experience'
];

export function About() {
  return (
    <section id="about" className="relative z-10 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow="about us" title="Founder-led consulting for teams that need execution, not noise.">
          Narula Cloud & AI Consulting is led by Samarth Narula, combining cloud architecture, DevOps execution, platform engineering, data systems and practical AI product delivery.
        </SectionLabel>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="clip-panel relative min-h-[35rem] overflow-hidden border border-paper/10 bg-paper/[0.04] shadow-soft"
          >
            <img
              src={site.founderPhoto}
              alt={`${site.founder}, ${site.consultingRole}`}
              className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
            <div className="absolute left-5 right-5 top-5 rounded-[1.6rem] border border-paper/10 bg-ink/62 p-4 backdrop-blur-xl">
              <img src={site.logo} alt={site.name} className="h-14 w-full object-contain rounded-2xl bg-paper p-2" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="rounded-[2rem] border border-paper/10 bg-ink/72 p-6 backdrop-blur-xl">
                <p className="mb-3 inline-flex rounded-full bg-acid px-3 py-1 text-[0.64rem] font-black uppercase tracking-[0.18em] text-ink">
                  {site.role}
                </p>
                <h3 className="font-display text-4xl font-black leading-tight tracking-[-0.015em] text-paper md:text-5xl">
                  {site.founder}
                </h3>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-acid">
                  {site.consultingRole}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="flex flex-col justify-between rounded-[2.2rem] border border-paper/10 bg-paper/[0.04] p-6 md:p-9"
          >
            <div>
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-acid text-ink">
                  <Sparkles className="h-5 w-5" />
                </span>
                <span className="rounded-full border border-paper/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-paper/52">
                  Founder-led · delivery-focused
                </span>
              </div>

              <h3 className="font-display text-4xl font-black leading-tight tracking-[-0.015em] text-paper md:text-6xl">
                Building scalable cloud platforms, automated DevOps workflows and AI-powered engineering products.
              </h3>

              <p className="mt-7 text-lg leading-8 text-paper/66">
                We help startups, product companies and enterprise teams solve real-world engineering challenges across AWS, GCP, Kubernetes, Terraform, CI/CD, observability, reliability, data engineering, low-code SaaS and GenAI automation.
              </p>
            </div>

            <div className="mt-9 grid gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-paper/10 bg-ink/50 p-4">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-acid" />
                  <p className="text-sm leading-6 text-paper/65">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              <a href="#contact" className="cursor-target inline-flex items-center justify-center gap-2 rounded-full bg-acid px-5 py-4 text-xs font-black uppercase tracking-[0.16em] text-ink transition hover:bg-paper">
                <BriefcaseBusiness className="h-4 w-4" /> Work with us
              </a>
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="cursor-target inline-flex items-center justify-center gap-2 rounded-full border border-paper/15 px-5 py-4 text-xs font-black uppercase tracking-[0.16em] text-paper transition hover:border-acid hover:text-acid">
                LinkedIn <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

```

## `components/Approach.tsx`

```tsx
'use client';

import { motion } from 'framer-motion';
import { method } from '@/lib/site';
import { SectionLabel } from './SectionLabel';

export function Approach() {
  return (
    <section id="method" className="relative z-10 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow="method" title="A hands-on delivery model, not a consulting deck.">
          The engagement starts with the bottleneck and ends with working systems, reusable patterns and production confidence.
        </SectionLabel>

        <div className="grid gap-4 lg:grid-cols-4">
          {method.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.07 }}
                className="clip-card min-h-[20rem] border border-paper/10 bg-paper/[0.04] p-7"
              >
                <div className="mb-16 flex items-center justify-between">
                  <span className="font-display text-5xl font-black tracking-[-0.02em] text-paper/18">0{index + 1}</span>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-acid text-ink">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="font-display text-3xl font-black leading-tight tracking-[-0.018em] text-paper">{item.title}</h3>
                <p className="mt-5 text-sm leading-7 text-paper/58">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

```

## `components/ButtonLink.tsx`

```tsx
export { MagneticButton as ButtonLink } from './MagneticButton';

```

## `components/CTA.tsx`

```tsx
'use client';

import { motion } from 'framer-motion';
import { MagneticButton } from './MagneticButton';
import { primaryWhatsAppUrl } from '@/lib/site';

export function CTA() {
  return (
    <section className="relative z-10 px-4 py-16 md:px-8 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-acid/25 bg-acid p-7 text-ink shadow-glow md:p-12"
      >
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="mb-5 font-mono text-xs font-black uppercase tracking-[0.35em] text-ink/60">/fast start</p>
            <h2 className="font-display text-5xl font-black leading-[1.02] tracking-[-0.02em] md:text-7xl">
              Need a cloud, DevOps, data or AI build?
            </h2>
          </div>
          <div className="md:text-right">
            <p className="mb-6 text-base leading-7 text-ink/70">
              Share your project challenge. I can help turn it into architecture, automation, platform implementation or AI product delivery.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <MagneticButton href="#contact" variant="paper">Send inquiry</MagneticButton>
              <MagneticButton href={primaryWhatsAppUrl} target="_blank" rel="noreferrer" variant="ghost" className="border-ink/30 bg-ink text-paper hover:border-ink hover:bg-paper hover:text-ink">
                WhatsApp
              </MagneticButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

```

## `components/Contact.tsx`

```tsx
'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { contactOptions, primaryWhatsAppUrl, site } from '@/lib/site';
import { SectionLabel } from './SectionLabel';

export function Contact() {
  return (
    <section id="contact" className="relative z-10 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow="contact" title="Have a cloud or AI build?">
          Send a project note and start with the outcome you want: faster delivery, safer cloud, better platform, stronger data pipeline or AI automation.
        </SectionLabel>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] border border-paper/10 bg-paper/[0.04] p-7 md:p-9"
          >
            <p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.28em] text-acid">/direct line</p>
            <h3 className="font-display text-5xl font-black leading-tight tracking-[-0.02em] text-paper">Talk to Samarth</h3>
            <p className="mt-6 text-base leading-8 text-paper/62">
              {site.consultingRole} at {site.name}. Available for DevOps, Cloud, Platform Engineering, Data Engineering, Low-Code SaaS and AI Product consulting.
            </p>

            <div className="mt-8 space-y-3">
              {contactOptions.map((option) => (
                <a
                  key={option.label}
                  href={option.href}
                  className="cursor-target flex items-center justify-between rounded-2xl border border-paper/10 bg-ink/60 p-4 transition hover:border-acid/50 hover:bg-paper hover:text-ink"
                >
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-acid">{option.label}</span>
                  <span className="text-sm font-semibold">{option.value}</span>
                </a>
              ))}
            </div>

            <a
              href={primaryWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="cursor-target mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-acid px-6 py-5 text-xs font-black uppercase tracking-[0.22em] text-ink transition hover:bg-paper"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp me
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08 }}
            action={`mailto:${site.email}`}
            method="post"
            encType="text/plain"
            className="rounded-[2rem] border border-paper/10 bg-paper/[0.04] p-5 md:p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-paper/50">Name</span>
                <input
                  name="name"
                  className="w-full rounded-2xl border border-paper/10 bg-ink px-4 py-4 text-paper outline-none transition placeholder:text-paper/25 focus:border-acid"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-paper/50">Email</span>
                <input
                  name="email"
                  type="email"
                  className="w-full rounded-2xl border border-paper/10 bg-ink px-4 py-4 text-paper outline-none transition placeholder:text-paper/25 focus:border-acid"
                  placeholder="you@company.com"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-paper/50">Need help with</span>
              <select
                name="service"
                className="w-full rounded-2xl border border-paper/10 bg-ink px-4 py-4 text-paper outline-none transition focus:border-acid"
                defaultValue="Cloud / DevOps consulting"
              >
                <option>Cloud / DevOps consulting</option>
                <option>Platform engineering</option>
                <option>AI product architecture</option>
                <option>Data engineering / low-code SaaS</option>
                <option>Kubernetes / Terraform implementation</option>
              </select>
            </label>

            <label className="mt-4 block">
              <span className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-paper/50">Project</span>
              <textarea
                name="project"
                rows={7}
                className="w-full resize-none rounded-2xl border border-paper/10 bg-ink px-4 py-4 text-paper outline-none transition placeholder:text-paper/25 focus:border-acid"
                placeholder="Briefly describe your challenge, timeline and target outcome."
              />
            </label>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <button
                type="submit"
                className="cursor-target inline-flex items-center justify-center gap-2 rounded-full bg-acid px-5 py-4 text-xs font-black uppercase tracking-[0.22em] text-ink transition hover:bg-paper sm:col-span-2"
              >
                <Mail className="h-4 w-4" /> Send inquiry
              </button>
              <a
                href={primaryWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="cursor-target inline-flex items-center justify-center gap-2 rounded-full border border-paper/15 px-5 py-4 text-xs font-black uppercase tracking-[0.22em] text-paper transition hover:border-acid hover:text-acid"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

```

## `components/CustomCursor.tsx`

```tsx
'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 320, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 320, damping: 30 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      mouseX.set(event.clientX - (hovering ? 42 : 14));
      mouseY.set(event.clientY - (hovering ? 42 : 14));
    };

    const onPointer = (event: Event) => {
      const target = event.target as HTMLElement;
      setHovering(Boolean(target.closest('a, button, input, textarea, .cursor-target')));
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', onPointer);
    document.addEventListener('mouseout', onPointer);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', onPointer);
      document.removeEventListener('mouseout', onPointer);
    };
  }, [hovering, mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="cursor-dot pointer-events-none fixed left-0 top-0 z-[100] hidden rounded-full border border-paper/60 bg-paper/10 backdrop-blur-sm md:block"
      style={{ x: springX, y: springY }}
      animate={{
        width: hovering ? 84 : 28,
        height: hovering ? 84 : 28,
        opacity: hovering ? 0.7 : 0.9
      }}
      transition={{ type: 'spring', stiffness: 240, damping: 24 }}
    />
  );
}

```

## `components/FloatingBackground.tsx`

```tsx
'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

export function FloatingBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-ink">
      <motion.div
        className="absolute inset-0 opacity-80"
        style={{
          background: useMotionTemplate`radial-gradient(560px circle at ${mouseX}px ${mouseY}px, rgba(217, 255, 63, 0.12), transparent 42%)`
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(243,240,233,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(243,240,233,0.06)_1px,transparent_1px)] bg-[size:88px_88px] opacity-20" />
      <div className="absolute left-1/2 top-0 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full border border-paper/10 opacity-40" />
      <div className="absolute -right-48 top-28 h-[34rem] w-[34rem] rounded-full bg-acid/10 blur-3xl" />
      <div className="absolute -bottom-48 left-0 h-[32rem] w-[32rem] rounded-full bg-paper/10 blur-3xl" />
    </div>
  );
}

```

## `components/FloatingWhatsApp.tsx`

```tsx
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

```

## `components/Footer.tsx`

```tsx
import { primaryWhatsAppUrl, site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-paper/10 px-4 py-12 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-5 inline-flex rounded-[1.4rem] border border-paper/10 bg-paper px-4 py-3 shadow-soft">
            <img src={site.logo} alt={site.name} className="h-12 w-64 object-contain" />
          </div>
          <p className="font-display text-4xl font-black leading-tight tracking-[-0.015em] text-paper md:text-6xl">{site.name}</p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-paper/50">
            DevOps, Cloud, Platform Engineering, Data Engineering, Low-Code SaaS and AI Product Consulting by {site.founder}, {site.consultingRole}.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-paper/50">
          <a href="#top" className="cursor-target hover:text-acid">Back to top</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="cursor-target hover:text-acid">LinkedIn</a>
          <a href={`mailto:${site.email}`} className="cursor-target hover:text-acid">Email</a>
          <a href={primaryWhatsAppUrl} target="_blank" rel="noreferrer" className="cursor-target hover:text-acid">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}

```

## `components/Hero.tsx`

```tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, CloudCog, Cpu, DatabaseZap, ShieldCheck } from 'lucide-react';
import { useRef } from 'react';
import { MagneticButton } from '@/components/MagneticButton';
import { metrics, primaryWhatsAppUrl, site } from '@/lib/site';

const orbitItems = [
  { label: 'AWS', icon: CloudCog, position: 'left-2 top-16 md:left-6 md:top-20' },
  { label: 'GCP', icon: DatabaseZap, position: 'right-3 top-24 md:right-8 md:top-28' },
  { label: 'AI', icon: Cpu, position: 'bottom-16 left-8 md:bottom-20 md:left-12' },
  { label: 'K8s', icon: ShieldCheck, position: 'bottom-8 right-6 md:bottom-12 md:right-14' }
];

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section id="top" ref={heroRef} className="relative z-10 min-h-screen overflow-hidden px-4 pt-32 md:px-8 md:pt-40">
      <motion.div style={{ y, opacity }} className="mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.12fr_0.88fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex rounded-full border border-paper/10 bg-paper/[0.04] px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-acid">
              {site.title}
            </span>
            <span className="inline-flex rounded-full border border-acid/25 bg-acid/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-paper/70">
              {site.role} · {site.consultingRole}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: 'easeOut' }}
            className="font-display text-[3.9rem] font-black leading-[1.0] tracking-[-0.025em] text-paper text-balance sm:text-[5.4rem] md:text-[7rem] lg:text-[8rem]"
          >
            Cloud, DevOps <span className="big-outline block tracking-[-0.02em]">&amp; AI Platforms</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-paper/70 md:text-xl"
          >
            {site.description} I help startups, product companies and enterprise engineering teams move faster with practical architecture, implementation and production delivery support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton href="#contact" variant="acid">Start a project</MagneticButton>
            <MagneticButton href={primaryWhatsAppUrl} target="_blank" rel="noreferrer" variant="ghost">
              WhatsApp consultation
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[31rem] pb-8 lg:pb-0"
        >
          <div className="clip-panel relative aspect-square overflow-hidden border border-paper/10 bg-paper/[0.04] p-6 shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,255,63,0.18),transparent_45%)]" />
            <div className="absolute inset-10 rounded-full border border-dashed border-acid/35 orbit-slow" />
            <div className="absolute inset-20 rounded-full border border-paper/10 orbit-fast" />
            <div className="absolute left-1/2 top-1/2 grid h-36 w-48 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[2rem] border border-paper/10 bg-paper p-4 shadow-glow md:h-40 md:w-60">
              <img src={site.logo} alt={site.name} className="max-h-full w-full object-contain" />
            </div>
            {orbitItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`absolute ${item.position} card-sheen flex h-20 w-20 flex-col items-center justify-center rounded-3xl border border-paper/10 bg-ink/75 text-paper shadow-soft backdrop-blur md:h-24 md:w-24`}
                >
                  <Icon className="mb-2 h-5 w-5 text-acid" />
                  <span className="text-xs font-black uppercase tracking-[0.18em]">{item.label}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex items-center justify-between rounded-full border border-paper/10 bg-paper/[0.04] px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-paper/55">
            <span>available</span>
            <span className="text-acid">India · US remote</span>
          </div>
        </motion.div>
      </motion.div>

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-px overflow-hidden border border-paper/10 bg-paper/10 md:grid-cols-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            className="bg-ink p-5 md:p-7"
          >
            <p className="font-display text-4xl font-black tracking-[-0.015em] text-paper md:text-5xl">{metric.value}</p>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-acid">{metric.label}</p>
            <p className="mt-2 text-sm text-paper/45">{metric.detail}</p>
          </motion.div>
        ))}
      </div>

      <a
        href="#services"
        className="cursor-target absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-paper/45 transition hover:text-acid md:flex"
      >
        Scroll <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}

```

## `components/MagneticButton.tsx`

```tsx
'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

type Variant = 'paper' | 'acid' | 'ghost';

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  target?: string;
  rel?: string;
}

const variantStyles: Record<Variant, string> = {
  paper: 'border-paper bg-paper text-ink hover:bg-acid hover:border-acid',
  acid: 'border-acid bg-acid text-ink hover:bg-paper hover:border-paper shadow-acid',
  ghost: 'border-paper/20 bg-paper/5 text-paper hover:border-acid hover:text-acid'
};

export function MagneticButton({ href, children, variant = 'paper', className = '', target, rel }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18 });
  const springY = useSpring(y, { stiffness: 180, damping: 18 });

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`magnetic cursor-target group inline-flex items-center justify-center gap-3 rounded-full border px-6 py-4 text-xs font-black uppercase tracking-[0.2em] transition-colors md:text-sm ${variantStyles[variant]} ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </motion.a>
  );
}

```

## `components/Marquee.tsx`

```tsx
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

```

## `components/Navbar.tsx`

```tsx
'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { navItems, primaryWhatsAppUrl, site } from '@/lib/site';

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -22, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed left-0 right-0 top-0 z-50 px-3 py-3 md:px-8"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-paper/10 bg-ink/76 px-3 py-2 shadow-soft backdrop-blur-xl md:px-4">
        <a href="#top" className="cursor-target flex items-center gap-3 rounded-full text-paper" aria-label="Narula Cloud & AI Consulting home">
          <span className="grid h-12 w-[11.5rem] place-items-center rounded-full border border-paper/10 bg-paper px-4 shadow-soft md:w-[14rem]">
            <img src={site.logo} alt={site.name} className="h-8 w-full object-contain" />
          </span>
          <span className="hidden text-[0.62rem] font-black uppercase leading-4 tracking-[0.18em] text-paper/45 xl:block">
            {site.consultingRole}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="cursor-target rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-paper/55 transition hover:bg-paper/10 hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={primaryWhatsAppUrl}
          target="_blank"
          rel="noreferrer"
          className="cursor-target inline-flex items-center gap-2 rounded-full bg-acid px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-ink transition hover:bg-paper"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Let&apos;s talk</span>
        </a>
      </div>
    </motion.header>
  );
}

```

## `components/Proof.tsx`

```tsx
'use client';

import { motion } from 'framer-motion';
import { proofPoints, site, trust } from '@/lib/site';
import { SectionLabel } from './SectionLabel';

export function Proof() {
  return (
    <section id="proof" className="relative z-10 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow="proof" title="Built around real cloud, AI and data delivery.">
          A focused consulting brand backed by hands-on architecture, engineering and implementation experience.
        </SectionLabel>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-paper/10 bg-paper/[0.04] p-7 md:p-9">
            <div className="inline-flex rounded-[1.6rem] bg-paper px-5 py-4 shadow-soft">
              <img src={site.logo} alt={site.name} className="h-14 w-64 max-w-full object-contain md:h-16 md:w-72" />
            </div>
            <h3 className="mt-8 font-display text-4xl font-black leading-tight tracking-[-0.015em] text-paper md:text-5xl">
              {site.name}
            </h3>
            <p className="mt-6 text-base leading-8 text-paper/62">
              Positioned for teams that need an independent consultant who can move from strategy to implementation across DevOps, cloud platforms, data systems and AI products.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-paper/10 bg-paper/10 sm:grid-cols-2">
            {proofPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
                className="bg-ink p-6"
              >
                <span className="font-display text-4xl font-black tracking-[-0.02em] text-paper/20">0{index + 1}</span>
                <p className="mt-5 text-base font-semibold leading-7 text-paper/78">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-full border border-paper/10 bg-paper/[0.03] py-4">
          <div className="marquee-track-reverse flex w-max items-center gap-3 whitespace-nowrap px-4">
            {[...trust, ...trust, ...trust].map((item, index) => {
              const Icon = item.icon;
              return (
                <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2 rounded-full border border-paper/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-paper/65">
                  <Icon className="h-4 w-4 text-acid" /> {item.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

```

## `components/SectionHeader.tsx`

```tsx
export { SectionLabel as SectionHeader } from './SectionLabel';

```

## `components/SectionLabel.tsx`

```tsx
import type { ReactNode } from 'react';

export function SectionLabel({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="mb-10 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.35em] text-acid">/{eyebrow}</p>
        <h2 className="max-w-4xl font-display text-5xl font-black leading-[0.98] tracking-[-0.02em] text-paper text-balance md:text-7xl">
          {title}
        </h2>
      </div>
      {children ? <div className="max-w-sm text-sm leading-6 text-paper/55 md:text-right">{children}</div> : null}
    </div>
  );
}

```

## `components/Services.tsx`

```tsx
'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/site';
import { SectionLabel } from './SectionLabel';

export function Services() {
  return (
    <section id="services" className="relative z-10 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow="services" title="What I build for teams that need scale.">
          Practical engineering across cloud, DevOps, platform, data and AI — designed for delivery, not slideware.
        </SectionLabel>

        <div className="grid gap-px overflow-hidden border border-paper/10 bg-paper/10 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, delay: index * 0.04 }}
                whileHover={{ y: -8 }}
                className="card-sheen group min-h-[22rem] bg-ink p-7 transition-colors hover:bg-paper hover:text-ink md:p-8"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-display text-5xl font-black tracking-[-0.02em] text-paper/15 transition group-hover:text-ink/20">
                    0{index + 1}
                  </span>
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-paper/10 bg-paper/[0.04] text-acid transition group-hover:border-ink/10 group-hover:bg-ink group-hover:text-acid">
                    <Icon className="h-6 w-6" />
                  </span>
                </div>

                <h3 className="font-display text-4xl font-black leading-tight tracking-[-0.02em] text-paper transition group-hover:text-ink">
                  {service.title}
                </h3>
                <p className="mt-6 text-base leading-7 text-paper/58 transition group-hover:text-ink/65">{service.text}</p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-paper/10 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.18em] text-paper/55 transition group-hover:border-ink/10 group-hover:text-ink/55">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

```

## `components/Showcase.tsx`

```tsx
'use client';

import { motion } from 'framer-motion';
import { showcase } from '@/lib/site';
import { SectionLabel } from './SectionLabel';

export function Showcase() {
  return (
    <section id="work" className="relative z-10 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow="selected work" title="Consulting stories, presented like products.">
          A premium profile site should sell outcomes. These cards turn your experience into high-conversion proof.
        </SectionLabel>

        <div className="space-y-5">
          {showcase.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
                className="cursor-target group grid gap-6 overflow-hidden rounded-[2rem] border border-paper/10 bg-paper/[0.035] p-5 backdrop-blur transition hover:border-acid/50 md:grid-cols-[0.2fr_0.9fr_1.2fr_0.5fr] md:items-center md:p-7"
              >
                <div>
                  <p className="font-display text-6xl font-black tracking-[-0.025em] text-paper/18 transition group-hover:text-acid">{project.number}</p>
                </div>
                <div>
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-acid">{project.company}</p>
                  <h3 className="font-display text-4xl font-black leading-tight tracking-[-0.02em] text-paper md:text-5xl">{project.title}</h3>
                </div>
                <p className="text-base leading-7 text-paper/58">{project.description}</p>
                <div className="flex flex-row items-start gap-3 md:flex-col md:items-end">
                  <span className={`grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br ${project.accent} text-ink shadow-glow`}>
                    <Icon className="h-7 w-7" />
                  </span>
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full bg-paper/10 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.16em] text-paper/62">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

```

