/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'shadowColor': 'rgba(34, 34, 34, 0.8)',
      'btnColor1': 'rgba(223, 248, 248, 1)',
      'btnColor2': 'rgba(34, 163, 159, 1)',
      'white': '#FFFFFF',
      'main': '#F7F4F6',
      'black': '#000',
      'red': {
        100: '#ffe6e6',
        200: '#ffb3b3',
        300: '#ff8080',
        400: '#ff4d4d',
        500: '#ff1a1a',
        600: '#e60000',
        700: '#b30000',
        800: '#800000',
        900: '#4d0000'
      },
      'blue': '#00f',
      'green': '#0f0',
      'yellow': '#ff0',
      'gray': '#D9D9D9'
    },
  },
  plugins: [],
  
}