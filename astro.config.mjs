// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';
import { loadEnv } from 'vite';

const { SANITY_PROJECT_ID, SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV ?? 'production',
  process.cwd(),
  ''
);

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [
    react(),
    sanity({
      projectId: SANITY_PROJECT_ID || 'zzzzzzzz',
      dataset: SANITY_DATASET || 'production',
      useCdn: false,
      apiVersion: '2025-02-20',
      studioBasePath: '/studio',
    }),
  ],
});
