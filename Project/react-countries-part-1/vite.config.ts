import { defineConfig } from "vite";
import postcss from "./postcss.config.js";

export default defineConfig({
  css: {
    postcss,
  },
  build: {
    outDir: "./dist",
    rollupOptions: {
      input: "./src/styles/tailwind.css",
      output: {
        entryFileNames: "styles.css",
      },
    },
  },
});
