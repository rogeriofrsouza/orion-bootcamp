import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/orion-bootcamp/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ex1: resolve(__dirname, 'src/ex1/ex1.html'),
        ex2: resolve(__dirname, 'src/ex2/ex2.html')
      }
    }
  }
});
