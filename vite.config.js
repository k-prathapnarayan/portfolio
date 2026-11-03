
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  server: {
    port: 3000,
    open: false,
  },
  build: {
    // Disable source maps in production to protect source code
    sourcemap: false,
    // Minify output bundle
    minify: 'esbuild',
    // Optimize chunk sizes
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
        },
      },
    },
  },
});
