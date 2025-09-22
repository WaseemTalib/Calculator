# Calculator Tools Website

A scalable, SEO-ready calculator website built with Next.js, Tailwind CSS, and TypeScript. Includes:

- Age Calculator
- Pregnancy Due Date Calculator
- Tip Calculator

## Features
- Clean, modern, mobile-first UI
- Fast, instant results (no page reloads)
- SEO meta tags for each tool
- Ready for Google AdSense (robots.txt, sitemap.xml, ads.txt included)
- Easy to extend with more tools

## Usage
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run locally:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build && npm run start
   ```

## Structure
- `/src/app` — Next.js App Router pages
- `/src/components` — Reusable UI components
- `/public` — Static files (robots.txt, sitemap.xml, ads.txt)

## SEO & AdSense
- Each page has unique meta tags
- robots.txt and sitemap.xml for search engines
- ads.txt for AdSense setup (replace publisher ID)

## License
MIT
