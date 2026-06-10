// @ts-check
import { defineConfig } from 'astro/config';

// Served from a GitHub Pages project site at noelmas.github.io/sophie-morris/.
// The base path is only applied in production builds, so local `astro dev`
// still serves at http://localhost:4321/ as before.
const base = process.env.NODE_ENV === 'production' ? '/sophie-morris' : '/';

export default defineConfig({
  site: 'https://noelmas.github.io',
  base,
});
