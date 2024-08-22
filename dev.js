import { execa } from 'execa';

if (process.env.NODE_ENV === 'production') {
  await import('./index.js');
} else {
  const command =
    'tsx watch --clear-screen=false --ignore ".cache/**" --ignore "app/**" --ignore "vite.config.ts.timestamp-*" --ignore "build/**" --ignore "node_modules/**" ./server.ts';
  execa(command, {
    stdio: ['ignore', 'inherit', 'inherit'],
    shell: true,
    env: {
      FORCE_COLOR: true,
      MOCKS: true,
      ...process.env,
    },
  });
}
