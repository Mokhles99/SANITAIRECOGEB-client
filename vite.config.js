
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@mui/material': path.resolve(__dirname, 'node_modules', '@mui/material'),
      '@mui/icons-material': path.resolve(__dirname, 'node_modules', '@mui/icons-material'),
      '@mui/system': path.resolve(__dirname, 'node_modules', '@mui/system'),
      '@mui/styled-engine': path.resolve(__dirname, 'node_modules', '@mui/styled-engine'),
      '@mui/styled-engine-sc': path.resolve(__dirname, 'node_modules', '@mui/styled-engine-sc'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'mui-vendor': ['@mui/material', '@mui/icons-material', '@mui/system'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});

