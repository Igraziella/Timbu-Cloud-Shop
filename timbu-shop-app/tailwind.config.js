/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.html',
     './src/**/*.jsx',
  ],
  media: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'serif': ['Montserrat', 'Roboto']
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}

