// Vite is the dev server + bundler. Two plugins are needed:
//  - @vitejs/plugin-react: enables JSX and fast refresh
//  - @tailwindcss/vite:    runs Tailwind CSS v4 (no tailwind.config.js or PostCSS needed)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Portfolio/", // GitHub Pages serves from /repo-name/, not /
});
