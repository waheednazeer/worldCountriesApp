import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        feedback: resolve(__dirname, "src/pages/feedback.html"),
        help: resolve(__dirname, "src/pages/help.html")
      },
    },
  },
});
