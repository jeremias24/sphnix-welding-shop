import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Sphnix Welding Shop',
        short_name: 'Sphnix Welding Shop',
        description: 'Welding products and services',
        display: 'standalone',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa/phoenix-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ]
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // ✅ 5 MB limit
      }
    })
  ],
  resolve: {
    alias: {
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "/",
  build: {
    chunkSizeWarningLimit: 3000,
  },
});
