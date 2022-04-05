import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { partytownVite } from "@builder.io/partytown/utils";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    plugins: [
      partytownVite({
        dest: path.join(__dirname, "dist", "~partytown"),
      }),
    ],
  },
});
