import { defineConfig } from 'vite';

export default defineConfig({
  root: 'web',
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'Gamby',
      fileName: 'gamby',
    },
  },
});
