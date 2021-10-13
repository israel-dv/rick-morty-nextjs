module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-1000': '#212332',
        'blue-950': '#2A2D3E',
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
