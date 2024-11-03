// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/check-user': {
        target: 'https://estilist.azurewebsites.net/estilist_backend',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});