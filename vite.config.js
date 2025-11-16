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
        {
          src: 'package.json', dest: '../', transform: (content) => {
            const pkg = JSON.parse(content.toString());
            delete pkg.devDependencies;
            return JSON.stringify(pkg, null, 2)
          }
        },
        { src: 'package-lock.json', dest: '../' },
        { src: 'server/config/pm2/*', dest: '../config' }
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
