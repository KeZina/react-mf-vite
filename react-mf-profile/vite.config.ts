import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "profile",
      exposes: {
        "./ProfilePage": "./src/pages/ProfilePage/ProfilePage",
        "./useProfileStore": "./src/shared/store/useProfileStore",
      },
      remotes: {
        common: "http://localhost:3003/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom", "zustand", "styled-components"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3004,
  },
});
