import path from "path"
import react from "@vitejs/plugin-react"
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from "vite"

export default defineConfig({
  base: "/rcts/c4gtwebsite/",
  plugins: [
    react(),
    tailwindcss(), // <-- Add this plugin
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: true,
  },
})