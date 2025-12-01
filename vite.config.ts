import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Map the 'process.env.API_KEY' used in the code to the 'VITE_API_KEY' set in Vercel
    'process.env.API_KEY': JSON.stringify(process.env.VITE_API_KEY)
  }
})
