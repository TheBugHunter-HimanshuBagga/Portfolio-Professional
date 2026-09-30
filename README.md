# Himanshu Bagga — Portfolio

Personal portfolio built with **Vite + React 19 + Tailwind CSS v4 + Framer Motion + AOS**,
matching the reference interface at `adityasinghportfolia.vercel.app`.

All content is sourced from [github.com/TheBugHunter-HimanshuBagga](https://github.com/TheBugHunter-HimanshuBagga).

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Sections (in order)

| # | Section | Component |
|---|---------|-----------|
| 1 | Preloader (red clip-path reveal) | `src/components/layout/Preloader.jsx` |
| 2 | Navbar (blur on scroll + Hire Me) | `src/components/layout/Navbar.jsx` |
| 3 | Hero `#home` | `src/components/sections/Hero.jsx` |
| 4 | About `#about` (red block) | `src/components/sections/About.jsx` |
| 5 | Skills `#skills` (filter pills + neon cards) | `src/components/sections/Skills.jsx` |
| 6 | Process `#process` (scroll-drawn path) | `src/components/sections/Process.jsx` |
| 7 | Projects `#projects` (vertical timeline) | `src/components/sections/Projects.jsx` |
| 8 | Experience `#experience` (light cards) | `src/components/sections/Experience.jsx` |
| 9 | Highlights (42/58 split + stats) | `src/components/sections/Highlights.jsx` |
| 10 | Repositories `#repositories` (globe + filters) | `src/components/sections/Repositories.jsx` |
| 11 | Soft Skills (4-col grid) | `src/components/sections/SoftSkills.jsx` |
| 12 | Contact `#contact` (giant parallax text + red form) | `src/components/sections/Contact.jsx` |
| 13 | Footer (giant lowercase name) | `src/components/layout/Footer.jsx` |

## Editing content

**All text, projects, skills, experience and repositories live in one file:**

```
src/data/index.js
```

Change names, links, tech stacks, levels and repository lists there — no component
edits needed.

## Contact form

Works out of the box via a `mailto:` fallback. To use EmailJS, replace the three
placeholder values in `src/data/index.js`:

```js
export const emailJsConfig = {
  serviceId: "YOUR_EMAILJS_SERVICE_ID",
  templateId: "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
};
```

## Assets

This build uses inline SVG icons and CSS-generated visuals so there are **no binary
assets to manage**. Drop images into `public/` and reference them as `/your-image.png`
if you want to swap in a hero video or photo later.
