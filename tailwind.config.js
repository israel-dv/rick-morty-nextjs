const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-1000': '#212332',
        'blue-950': '#2A2D3E',
      },
      fontFamily: {
        balsamiq: ['Balsamiq Sans', ...defaultTheme.fontFamily.sans],
        comfortaa: ['Comfortaa', ...defaultTheme.fontFamily.sans],
        varela: ['Varela Round', ...defaultTheme.fontFamily.sans],
      },
      maxHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
      },
      minHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
      },
      screens: {
        iphone: '375px',
        fh: '1080px',
        hd: '1366px',
      },
      translate: {
        '-1/2': '-50%',
      },
      minHeight: {
        24: '6rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
