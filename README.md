# TEDxPanteion University X Site

This repository contains the TEDxPanteion University X website made by Λιν Χονγκ Τσε (Κιτ) (Github: https://github.com/Kit432), now kept as an archived event site. The site presents the anniversary event, TEDxPanteion University information, team sections, event history, sponsors assets, and public social links.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Netlify hosting with `@netlify/plugin-nextjs`

The project also includes visual/interactive dependencies such as Three.js, React Three Fiber, and tsparticles for richer frontend effects.

## Site Pages

- `/` - homepage with the TEDxPanteion University X hero and timeline.
- `/event` - event information, venue image, and map embed.
- `/about` - TEDx and TEDxPanteion University information.
- `/about/team` - team category sections.
- `/about/history` - previous event history, logos, speaker links, and video embeds.

## Project Structure

- `app/` - Next.js routes, layout, and global styles.
- `components/` - reusable layout, home, about, and UI components.
- `data/` - event history data and external talk links.
- `public/` - images, logos, team assets, history assets, and sound files.
- `utils/` - small shared helpers and hooks.
- `netlify.toml` - Netlify build and security header configuration.

## Security Hardening

The Netlify deployment sends conservative browser security headers for every route:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

External links that open in a new tab use `rel="noopener noreferrer"` to prevent the opened page from getting access to the original window.

A full Content Security Policy is intentionally not enabled yet. The site uses Next.js runtime assets plus YouTube and Google Maps embeds, so CSP should be tested separately before deployment to avoid breaking the archive.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Build Notes

Create a production build:

```bash
npm run build
```

This project uses `next/font` with Google-hosted Geist fonts, so local builds need network access to Google Fonts.

## Deployment

Netlify builds the app with:

```bash
npm run build
```

The production output is published from `.next` as configured in `netlify.toml`.
