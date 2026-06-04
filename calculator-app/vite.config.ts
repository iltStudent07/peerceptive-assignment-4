import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig ({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        port: 3001,
        open: true,
        strictPort: true,
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
    },
    preview: {
        port: 4000,
    },
});