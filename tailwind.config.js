module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        entrust: {
          'black': '#131416',
          'gray': {
            '100': '#F9FAFA',
            '200': '#F4F5F6',
            '300': '#DEE0E3',
            '400': '#BDC2C7',
            '500': '#9CA3AB',
            '600': '#7B848E',
            '700': '#5E666E',
            '800': '#42474D',
            '900': '#26292C',
          },
          'blue': {
            'lightest': '#EDF8FC',
            'lighter': "#1D4986",
            DEFAULT: "#1A4177",
            'darker': "#163764"
          },
          'cyan': {
            'lighter': "#1D90BF",
            DEFAULT: "#1A83AE",
            'darker': "#17759B"
          },
          'red': {
            'lighter': "#FA5324",
            DEFAULT: "#E53706",
            'darker': "#C72F05"
          },
          'orange': {
            'lighter': "#F88926",
            DEFAULT: "#F77E11",
            'darker': "#ED7408"
          },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}