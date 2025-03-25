// @ts-check
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://fioki.net',
  base: '.',
  integrations: [react(), starlight({
    title: 'fioki',
    })]
});