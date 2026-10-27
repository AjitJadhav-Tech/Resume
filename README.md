# Ajit Jadhav · Portfolio

Personal portfolio and resume site, built with [Astro](https://astro.build) and deployed to GitHub Pages.

Live: https://ajitjadhav-tech.github.io/Resume/

## Updating content

All text lives in `src/data/profile.ts`: profile, impact numbers, competencies, project case studies, experience, open-source repos and credentials. Edit it, push to `main`, and the site redeploys automatically.

To replace the downloadable resume, overwrite `public/Ajit-Jadhav-Resume.pdf`.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321/Resume/
npm run build    # outputs to dist/
```

## Deployment

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Custom domain (later)

1. Add the domain in **Settings → Pages → Custom domain** and enable **Enforce HTTPS**.
2. At your DNS provider, add A records for the apex to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and a `www` CNAME to `ajitjadhav-tech.github.io`.
3. Create `public/CNAME` containing the domain, and in `astro.config.mjs` set `site` to `https://<your-domain>` and `base` to `'/'`.
