// Creamos la configuración de Astro.
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// Añadimos tailwind.
export default defineConfig({
  integrations: [tailwind()],
});
