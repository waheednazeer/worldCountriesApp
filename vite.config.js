import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        wb: resolve(__dirname, "src/json/wb.json"),
        country: resolve(__dirname, "src/json/country.json"),

      },
    },
  },
});
