import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: 'Imperius-Store',
  resolve: {
    alias: {
      // Isso mapeia o @ para a pasta src
      '@': path.resolve(__dirname, './src'),
    }
  }
})
