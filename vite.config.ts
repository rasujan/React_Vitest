import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
/** @type {import('vite').UserConfig} */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    globals: true,
    // ...
  },
});
