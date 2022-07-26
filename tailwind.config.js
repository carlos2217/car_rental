/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prim': '#03fce3',
      },
      fontFamily:{
        body: ['Edu VIC WA NT Beginner']
      }
    },
  },
  plugins: [],
}
