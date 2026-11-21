// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://codelec.cz',
  base: '/hoerbiger-reports',
  vite: {
    plugins: [tailwindcss()],
  },
});
