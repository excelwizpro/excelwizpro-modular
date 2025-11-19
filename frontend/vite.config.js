import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/excelwizpro-frontend/",
  build: {
    rollupOptions: {
      input: {
        taskpane: resolve(__dirname, "taskpane.html")
      }
    }
  }
});
