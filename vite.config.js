import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        wb: resolve(__dirname, "src/json/wb.json"),
        country: resolve(__dirname, "src/json/country.json"),

      },
    },
  },
});
