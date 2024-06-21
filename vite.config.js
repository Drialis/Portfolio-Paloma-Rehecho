import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    optimizeDeps: {
        include: ['react', 'react-dom']
    },
    server: {
        mimeTypes: {
            'text/jsx': ['jsx']
        }
    }
});
