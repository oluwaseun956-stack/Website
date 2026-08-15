import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    // Leading dot matches the domain and any subdomain, so a new tunnel URL
    // does not require a config change.
    allowedHosts: [".ngrok-free.app", ".ngrok.app", ".trycloudflare.com"],
  },
});
