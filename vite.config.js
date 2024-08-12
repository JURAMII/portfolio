import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [react(), 
  VitePWA(
    {
      registerType: 'autoUpdate',
      injectRegister: false,
  
      pwaAssets: {
        disabled: false,
        config: true,
      },
  
      manifest: {
        name: "DANBI's portfolio",
        short_name: "DANBI's portfolio", //아이콘바로가기이름
        description: 'DANBI',
        theme_color: '#ffffff',
      },
  
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },
  
      devOptions: {
        enabled: true,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
      },
    }
  )],
})
