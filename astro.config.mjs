// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Deployment target lives here and nowhere else.
 * Moving to a custom domain later = set SITE to the domain and BASE to '/'.
 */
const SITE = 'https://RuslanPr0g.github.io';
const BASE = '/SMF';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
