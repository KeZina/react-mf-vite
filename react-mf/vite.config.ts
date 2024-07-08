import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mf",
      remotes: {
        header: "http://localhost:3001/assets/remoteEntry.js",
        cards: "http://localhost:3002/assets/remoteEntry.js",
        shared: "http://localhost:3003/assets/remoteEntry.js",
        profile: "http://localhost:3004/assets/remoteEntry.js",
        store: "http://localhost:3005/assets/remoteEntry.js",
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
        "zustand",
        "styled-components",
      ],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3000,
  },
});
