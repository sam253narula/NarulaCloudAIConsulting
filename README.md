# Narula Cloud & AI Consulting — Static Website

A premium dark-theme, mobile-first Next.js static profile website for Narula Cloud & AI Consulting.

## What's included

- Next.js App Router
- Tailwind CSS
- Framer Motion animations
- Lucide icons
- Sticky navbar
- Hero section with Narula Cloud & AI Consulting logo
- About Us section with Samarth Narula photo
- Role labels: Founder and Founder & Independent Consultant
- Animated service cards
- Showcase/gallery section
- Contact lead generation form
- WhatsApp/contact CTA
- Footer with logo
- Static export configuration

## Updated assets

The site uses these files inside `public/`:

- `narula-logo-transparent.png`
- `narula-logo-white.png`
- `samarth-narula-founder.jpg`
- `samarth-narula-founder.webp`

## Run locally

```bash
npm install
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Build static output

```bash
npm run build
```

Because `next.config.mjs` uses `output: 'export'`, the static site will be generated in the `out/` folder.

## Main content file

Update consulting details in:

```bash
lib/site.ts
```

Current site information:

```ts
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
```
