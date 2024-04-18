// Creamos la configuración de Astro.
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Añadimos tailwind.
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: netlify()
});