import { defineConfig } from 'astro/config';

// Served from https://ajitjadhav-tech.github.io/Resume/ until a custom domain is attached.
// When the domain is added, set `site` to it and `base` to '/'.
export default defineConfig({
  site: 'https://ajitjadhav-tech.github.io',
  base: '/Resume',
  trailingSlash: 'ignore',
});
