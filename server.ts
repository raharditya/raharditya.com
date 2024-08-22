import { createRequestHandler } from '@remix-run/express';
import express, { Response } from 'express';
import path from 'node:path';
import url from 'node:url';

const PORT = Number(process.env.PORT) || 3000;

const vite =
  process.env.NODE_ENV === 'production'
    ? null
    : await import('vite').then(({ createServer }) => createServer({ server: { middlewareMode: true } }));

const remix = createRequestHandler({
  build: vite
    ? () => vite.ssrLoadModule('virtual:remix/server-build')
    : // @ts-expect-error
      await import('./server/index.js'),
});

const app = express();
app.use(express.static('build/client'));

if (vite) {
  app.use(vite.middlewares);
} else {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const client = path.resolve(__dirname, 'client');
  app.use('/homepage/public/assets', express.static(path.join(client, 'assets'), { immutable: true, maxAge: '1y' }));
  app.use('/homepage/public', express.static(client, { maxAge: '1h' }));
}

export type Locals = {};

app.get('*', async (req, res: Response<any, Locals>, next) => {
  //  Fetch data

  return next();
});
app.all('*', remix);

app.on('error', (err) => {
  console.log(err);
});

const server = app.listen(PORT, () => {
  console.log('App listening on http://localhost:3000');
});

['SIGTERM', 'SIGINT'].forEach((signal) => {
  process.on(signal, () => {
    server.close();
    process.exit();
  });
});
