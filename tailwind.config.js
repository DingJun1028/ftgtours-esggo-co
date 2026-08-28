/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ftg: {
          green: '#2d4a3e',
          forest: '#1a3c34',
          leaf: '#4a7c59',
          sand: '#f5f0e8',
          cream: '#faf7f2',
          bark: '#8b6f47',
          orange: '#e07a3d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Noto Serif TC', 'serif'],
      }
    },
  },
  plugins: [],
}
