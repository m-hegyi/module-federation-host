// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import node from "@astrojs/node";

import moduleFederation from "astro-module-federation";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [
    tailwind(),
    react(),
    moduleFederation({
      name: "testApp",
      remotes: {
        testApp: "http://localhost:7100/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],

  adapter: node({
    mode: "standalone",
  }),
  vite: {
    build: {
      target: "esnext",
    },
  },
});

