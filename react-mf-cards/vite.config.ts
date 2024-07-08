import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      remotes: {
        common: ["http://localhost:3003/assets/remoteEntry.js"],
        profile: ["http://localhost:3004/assets/remoteEntry.js"],
      },
      exposes: {
        "./UserCardsPage": "./src/pages/UserCardsPage/UserCardsPage",
        "./useUserCardsStore": "./src/shared/store/useUserCardsStore",
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
    port: 3002,
  },
});
