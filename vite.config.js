import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import path from 'path';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/app.js'],
      refresh: true,
    }),
    react({
        jsxRuntime: 'automatic',
        include: '**/*.{jsx,tsx,js,ts}',
        fastRefresh: false,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // for imports without extensions
    alias: {
      '@': path.resolve(__dirname, 'resources/js'),
    },
  },
  server: {
    host: 'shopinative.localhost',
    hmr: {
        host: 'shopinative.localhost',
    },
  },
});
