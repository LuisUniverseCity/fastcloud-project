import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    viteStaticCopy({
      targets: [
        { src: ['server/*', '!server/config'], dest: '../' },
        { src: 'server/config/prod/*', dest: '../config' },
        { src: 'package.json', dest: '../' },
        { src: 'package-lock.json', dest: '../' }
      ]
    })
  ],
  server: {
    port: 8282
  },
  build: {
    outDir: 'output/dist'
  }
})
