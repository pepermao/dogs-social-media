import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import BASE_URL from './BASE_URL';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: `/${BASE_URL}`,
});