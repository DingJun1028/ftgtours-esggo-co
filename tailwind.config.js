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
          orange: '#e07a3d',
          // ── 語意別名（非新色）────────────────────────────────────
          // 這兩個名稱是程式語意（Hero 暖白遮罩 / streams 深綠底），
          // 但設計稿未給獨立色票，故指向既有最接近色值。
          // 若設計確認需獨立色相，改此兩行即可，不影響任何呼叫端。
          sunlight: '#f5f0e8',  // = sand，暖白遮罩與手機卡片底
          deepgreen: '#1a3c34', // = forest，最深綠
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
