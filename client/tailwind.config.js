const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      lime: colors.lime,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      orange: colors.orange,
      cyan: colors.cyan,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      emerald: colors.emerald,
      "light-blue": colors.lightBlue,
      violet: colors.violet,
      pink: colors.pink,
      rose: colors.rose,
      green: colors.green
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
