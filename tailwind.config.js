module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#47b19e'
      }
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif']
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
