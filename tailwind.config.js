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
      backgroundImage: {
        // 🔮 Gradient 1: #FFE5F1 → #F042FF
        'gradient-1': 'linear-gradient(to bottom, #FFE5F1, #F042FF)',

        // 🌈 Gradient 2: #FFF5F1 → #F042FF → #7226FF
        'gradient-2': 'linear-gradient(to left, #FFF5F1, #F042FF, #7226FF)',

        // 🧊 Gradient 3: #87F5F5 → #FFE5F1 → #F042FF
        'gradient-3': 'linear-gradient(to left, #87F5F5, #FFE5F1, #F042FF)',

        // 🌌 Gradient 4: #7226FF → #160078 → #010030
        'gradient-4': 'linear-gradient(to bottom, #7226FF, #160078, #010030)',
      },
    },
  },
  plugins: [],
}
