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
        { src: ['server/*', '!server/config', '!server/.env'], dest: '../' },
        { src: 'server/config/prod/*', dest: '../config' },
        {
          src: 'package.json', dest: '../', transform: (content) => {
            const pkg = JSON.parse(content.toString());
            delete pkg.devDependencies;
            delete pkg.dependencies["@tailwindcss/vite"];
            delete pkg.dependencies["lucide-react"];
            delete pkg.dependencies["react"];
            delete pkg.dependencies["react-dom"];
            delete pkg.dependencies["react-router-dom"];
            delete pkg.dependencies["tailwindcss"];
            delete pkg.dependencies["build"];
            delete pkg.dependencies["dev"];
            delete pkg.dependencies["qrcode"];
            delete pkg.scripts.lint
            delete pkg.scripts.preview
            if (pkg.scripts && pkg.scripts.deploy) {
              pkg.scripts.deploy = "npx pm2 start ./config/eco.config.cjs";
            }
            if (pkg.scripts && pkg.scripts.restart) {
              pkg.scripts.restart = "npx pm2 restart ./config/eco.config.cjs";
            }
            if (pkg.scripts && pkg.scripts.delete) {
              pkg.scripts.delete = "npx pm2 delete ./config/eco.config.cjs";
            }
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

