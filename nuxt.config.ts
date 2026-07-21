import tailwindcss from "@tailwindcss/vite"
import svgLoader from "vite-svg-loader"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      supabaseUrl: '',
      supabasePublishableKey: '',
    },
  },
  css: ['~/assets/css/main.css'],
  nitro: {
    preset: 'static'
  },
  vite: {
    optimizeDeps: {
      include: [
        '@supabase/supabase-js',
      ]
    },
    plugins: [
      tailwindcss(),
      svgLoader()
    ],
  },
  modules: ['@nuxt/eslint']
})