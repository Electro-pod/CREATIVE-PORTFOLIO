# P Sai Charan Babu — Creative Portfolio

Personal portfolio for freelance photography, videography, and editing. The homepage features Charan filming with a gimbal; the selected-work gallery uses his uploaded photographs. Contact Charan at [charanstudio26@gmail.com](mailto:charanstudio26@gmail.com) or follow the public Instagram profile at [@charan.cinematics_](https://www.instagram.com/charan.cinematics_/).

## Design system
- Colors: charcoal `#151515` (page), `#1E1E1E` (panels), `#2E2E2E` (lines), bone `#F2F1EE` (text), ash `#9B9A96` (secondary text), tungsten `#C8A978` (the one accent: focus rings, process timeline).
- Type: Instrument Serif (uppercase editorial headlines) + Manrope (body).
- Layout: image-led cinematic homepage, editorial masonry photo gallery, generous spacing.
- Motion: restrained hero text reveal, scroll reveals, hover zooms, and a keyboard-navigable photo lightbox. Motion respects `prefers-reduced-motion`.

## Portfolio images
- Images provided for the portfolio are stored in `public/images/`.
- The event-speaking portrait is used as the hero banner; a camera portrait appears in the About section. Update `site.heroImage` in `src/data/siteData.js` to use a different banner.
- Gallery titles, categories, local image paths, and dimensions are listed in `works` in `src/data/siteData.js`.
- To add photos, put the originals in `public/images/` and add an entry to `works`.

## Run locally
Requires Node.js 18+.
```
npm install
npm run dev
```
Open the URL shown (usually http://localhost:5173). Build with `npm run build`.

## Deploy
- Vercel: push to GitHub, import the repo at vercel.com, framework "Vite", deploy.
- Netlify: push to GitHub, "Add new site", build command `npm run build`, publish directory `dist`.
- Or drag the `dist` folder (after `npm run build`) onto app.netlify.com/drop.
