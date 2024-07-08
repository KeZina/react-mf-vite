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
      exposes: {
        "./Page": "./src/ui/Page/Page",
        "./Content": "./src/ui/Content/Content",
        "./Form": "./src/ui/Form/Form",
        "./Input": "./src/ui/Input/Input",
        "./Button": "./src/ui/Button/Button",
        "./PageTitle": "./src/ui/PageTitle/PageTitle",
      },
      shared: ["react", "react-dom", "react-router-dom", "styled-components"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: "esbuild",
    cssCodeSplit: false,
  },
  server: {
    port: 3003,
  },
});
