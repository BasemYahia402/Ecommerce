import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/Ecommerce/home",
  build: {
    outDir: "dist",
  },
  plugins: [react()],
});
