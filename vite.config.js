import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path'

export default defineConfig({
    plugins: [react()],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom']
    },
});
 