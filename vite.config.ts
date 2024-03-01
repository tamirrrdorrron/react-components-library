import { defineConfig } from "vitest/config";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "react-component-library",
      fileName: (format) => `index.${format}.js`,
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "styled-components",
        "react/jsx-runtime",
      ],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [dts()],
});
