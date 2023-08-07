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
        primary: {
          DEFAULT: '#003466',
          '50': '#e9fbff',
          '100': '#cef6ff',
          '200': '#a7f1ff',
          '300': '#6becff',
          '400': '#26dcff',
          '500': '#00b8ff',
          '600': '#008eff',
          '700': '#0073ff',
          '800': '#0063e6',
          '900': '#0058b3',
          '950': '#003466',
        },
        secondary: {
          DEFAULT: '#fe7702',
          '50': '#fff9ec',
          '100': '#fff2d3',
          '200': '#ffe2a6',
          '300': '#ffcc6d',
          '400': '#ffaa33',
          '500': '#ff8f0b',
          '600': '#fe7702',
          '700': '#cb5503',
          '800': '#a1430b',
          '900': '#81380d',
          '950': '#461a04',

        },
        danger: {
          DEFAULT: '#af1b3f',
          '50': '#fef2f3',
          '100': '#fde6e7',
          '200': '#fbd0d5',
          '300': '#f8a9b3',
          '400': '#f3798b',
          '500': '#ea4965',
          '600': '#d6284e',
          '700': '#af1b3f',
          '800': '#971a3d',
          '900': '#811a3a',
          '950': '#48091b',
        }
      }
    },
  },
  plugins: [],
}
