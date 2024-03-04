import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [react()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/test/setup.ts",
      css: true,
      coverage: {
        reporter: ['text', 'lcov'],
        exclude: ['src/stories/**', '**/node_modules/**']
      },
    },
  });