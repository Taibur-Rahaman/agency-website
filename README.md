# Omix Solutions — Digital Agency Website

Modern marketing website for **Omix Solutions**, a full-service digital agency based in Dhaka, Bangladesh. Dark theme, neon glows, 3D particle effects, and animated UI inspired by contemporary SaaS landing pages.

## Overview

Omix Solutions offers software development, web and mobile apps, UI/UX design, digital marketing, SEO, branding, e-commerce, SaaS, automation, and IT consulting. This site showcases services, pricing, portfolio work, and contact information.

## Features

- Dark theme with neon animated glows and gradient accents
- 3D particle effects (React Three Fiber + Three.js)
- Framer Motion page and scroll animations
- Responsive layout (mobile, tablet, desktop)
- Multiple landing page variants (`/new`, `/showcase`, `/storex-style`, `/web-development`)
- Pricing and admin preview pages
- Custom Node.js production server (`server.js`) for Hostinger deployment

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| 3D | Three.js, React Three Fiber, Drei |
| Icons | Lucide React |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install and run

```bash
git clone https://github.com/Taibur-Rahaman/agency-website.git
cd agency-website

npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root path redirects to `/new` (main landing page).

### Production build

```bash
npm run build
npm start
```

For Hostinger or custom Node hosting:

```bash
npm run server
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for Hostinger deployment steps.

## Project Structure

```
agency-website/
├── app/
│   ├── page.tsx              # Redirects to /new
│   ├── new/                  # Main home page
│   ├── showcase/             # Portfolio showcase
│   ├── storex-style/         # Alternate landing layout
│   ├── web-development/      # Service landing page
│   ├── pricing/              # Pricing page
│   └── admin/                # Admin preview
├── components/               # Hero, Services, About, Contact, Navigation, Particles
├── public/                   # Static assets
├── server.js                 # Production Node server
├── DEPLOYMENT.md             # Hostinger deployment guide
└── package.json
```

## Contact

| | |
|---|---|
| **Phone** | +880 1601-677122 |
| **Email** | omixsolutions@gmail.com |
| **Address** | House-11, Road-7, Block-F, Bashundhara R/A, Dhaka, Bangladesh |

## Author

**Md Taibur Rahaman** — [GitHub](https://github.com/Taibur-Rahaman)

Part of the OMIX Solutions team.

## License

Private — All rights reserved.
