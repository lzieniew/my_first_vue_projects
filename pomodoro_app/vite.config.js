import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const base = process.env.NODE_ENV === 'production'
  ? '/pomodoro_app/'
  : '/';

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
