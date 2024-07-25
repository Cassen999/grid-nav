import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ['./setupTests.ts'],
    environment: 'happy-dom',
    globals: true,
    testTimeout: 10000,
  },
});
