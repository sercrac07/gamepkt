// Configuramos tailwind.
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        onest: ['"Onest Variable"', 'sans-serif'],
        press: ['"Press Start 2P"', 'sans-serif'],
      },
      backgroundColor: {
        primary: '#FEFAE0',
        secondary: '#FAEDCD',
        game: '#CCD5AE',
      },
    },
  },
  plugins: [],
}
