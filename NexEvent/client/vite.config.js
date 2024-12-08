import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../dist/app', // Ensure this aligns with your backend folder structure
  },
  server: {
    port: 5173, // Your development server port
  },
})
