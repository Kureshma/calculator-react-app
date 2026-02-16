import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/calculator-react-app/',  // 👈 VERY IMPORTANT
  plugins: [react()],
})
