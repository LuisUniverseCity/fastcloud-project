import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default async function React(app){

const vite = await createViteServer({
  server: { middlewareMode: "html" },
  root: resolve(__dirname, "../../")
});

  app.use(vite.middlewares);

  app.use(async (req, res) => {
    try {
      const url = req.originalUrl;
      let template = await vite.transformIndexHtml(url, '');
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });
}