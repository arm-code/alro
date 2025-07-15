/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
        violetPalette: {
          darkest: '#2c003e',
          darker: '#4b007d',
          primary: '#7f00ff',
          light: '#b266ff',
          lighter: '#d1a3ff',
          pale: '#f0e6ff',
          accent: '#ff66cc',
          textBase: '#1a1a1a',
          textLight: '#ffffff',
          bgBase: '#ffffff',
        },
      }
    },
  },
  plugins: [],
}

/**
 * 
 * 
 * --violet-primary: color principal para botones, enlaces activos, y elementos destacados 
 * --violet-darkest y --violet-darker: encabezados, fondo de navbars o pie de página.
 * --violet-light, --violet-lighter: fondos suaves, tarjetas o hover states.
 * --violet-pale: fondo general si quieres una apariencia muy suave.
 * --accent-pink: color complementario para resaltar detalles (botones secundarios, links
 * --text-base y --text-light: texto sobre fondo claro u oscuro
 * --bg-base: fondo base de la página.
 * 
 * 
 * 
 * 
 */