import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/zipporah-portfolio-/',  // Add this line for GitHub Pages
  plugins: [react()],
  build: {
    sourcemap: true,
    minify: 'terser',
  },
  server: {
    port: 3000,
    open: true,
  }
})
