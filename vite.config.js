import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./vitest.setup.js'],
    // 5T-Trustworthy: 必須排除本專案在用的備份/暫存目錄前綴。
    // 實測事故：專案根目錄有 .src-backup-*/ .src-pregradient-*/ .img-backup-*/
    // 這類備份時，vitest 的預設 glob 會把它們裡的 *.test.js 一併收進來，
    // 導致「10 failed | 5 passed」的紅燈，而這些測試壓根沒有跟本次改動有關。
    // 備份目錄只是改動前的快照，不該參與驗證。
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/out/**',
      '**/coverage/**',
      '**/.git/**',
      // 本專案的備份/暫存目錄（以點開頭 + 時間戳結尾）
      '**/.src-backup-*/**',
      '**/.src-pregradient-*/**',
      '**/.img-backup-*/**',
      '**/.deploy-stage/**',
      '**/.font-cache/**',
      '**/.fontenv/**',
      '**/__pycache__/**',
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
})