# Vyshnav P — Portfolio

A personal portfolio built as a quiet editorial sketchbook: warm paper, blue ink, a pen-drawn portrait, custom technical diagrams, and CV-sourced content.

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS v4, and custom CSS. All page components render on the server; project contribution disclosures use native HTML. No animation or icon libraries. The portrait is a compressed WebP served through Next.js image optimization. System serif and sans-serif fonts keep the site independent of external font requests.

## Getting started

Use Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run typecheck
npm run build
npm start
```

Production builds use Next.js’s supported Webpack option to avoid a local Turbopack compiler port restriction. Development uses the default Turbopack server.

## Content

Edit `data/portfolio.ts` for the name, bio, projects, roles, skills, education, email, and social URLs. Project contributions expand with a keyboard-accessible disclosure. Optional project URLs appear only when supplied. Diagrams are conceptual illustrations, not product screenshots.

The supplied CV contains no actual contact addresses or project links. At the owner’s request, `vyshnav@example.com` is a **dummy email**. Replace it before publishing. Social links remain empty until real URLs are available; add entries such as `{ label: 'GitHub', url: 'https://github.com/YOUR_USERNAME' }` to `socials`. Do not publish unverified professional details.

The download at `public/Vyshnav-P-Resume.docx` is the original supplied document, which also contains contact placeholders. Replace it with your final public CV when ready. The university name is omitted because it was absent from the source CV.

## Portrait and design

Replace `public/portrait-transparent.webp` with a square portrait. The original supplied illustration was optimized to 1000 × 1000 WebP. Retain the blue-ink-on-paper style for the current composition. Adjust dimensions in `app/page.tsx` if the aspect ratio changes. `sizes` and `preload` are configured for the hero.

- `app/globals.css`: paper and ink colors, responsive compositions, typography, and motion preferences.
- `components/ink.tsx`: hand-drawn arrows and conceptual technical illustrations.
- `components/section-heading.tsx`: consistent numbered section headings.
- `app/icon.svg`: favicon.
- `app/opengraph-image.tsx`: generated social preview.
- `app/layout.tsx`: SEO and Open Graph metadata, based on the shared content file.

The mobile composition places the portrait between the headline and introduction, reduces spacing, and keeps the navigation compact. Keyboard focus styles, a skip link, semantic landmarks, alternative text, and reduced-motion handling are included.

## Deploy to Vercel

1. Replace the dummy email, add verified social links, and update the downloadable CV.
2. Push the project to a Git repository.
3. Import that repository into Vercel and select the Next.js framework preset.
4. Set `NEXT_PUBLIC_SITE_URL` to the complete production origin, such as `https://your-domain.com`, for absolute Open Graph URLs.
5. Deploy using the default `npm run build` command. No database or additional services are required.

This project is prepared for deployment; it is not published automatically.

### Transparent portrait edit

`public/portrait-transparent.webp` was created with the built-in image-generation tool and optimized with its alpha channel preserved. The previous checkerboard asset was removed.

Edit prompt: “Use case: background-extraction. Edit target: supplied blue pen-and-ink portrait. Remove the baked-in gray and white checkerboard everywhere, including between fine ink strokes and within shirt and facial highlights. Produce an actual transparent background with alpha, NOT a drawn checkerboard, NOT a white or colored rectangular background. Preserve the person's recognizable facial structure, smile, hair, pose, shirt, composition, fine blue ink lines and crosshatching as closely as possible. Keep the exact square composition and full visible shoulders. This asset overlays a warm paper website background; empty areas between blue drawing strokes should be transparent so the website paper shows through. No added content, text, shadows, outlines, recoloring, or stylistic redesign.”
