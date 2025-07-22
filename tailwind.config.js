/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        lightgray: '#EDEDED',
        black: '#000000',
        pantone: '#4A26A4',
        ametist: '#B076E3',
        lavender: '#E0BCFF',
        royalblue: '#4136C3',
        deepindigo: '#3E3183',
        cornflower: '#74A3FF',
        lavendermist: '#E8D7F8',
        midnight: '#1A1B41',
        electricviolet: '#7F00FF',
        cybergrape: '#58427C',
        neonblue: '#4D9DE0',
        softsky: '#BFD7ED',
        slategray: '#6C7A89',
        mintcream: '#EFFFFD',
        richblack: '#0B0C10',
      },
    },
  },
  plugins: [],
}
