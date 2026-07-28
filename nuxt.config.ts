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
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    },
  ],
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
  app: {
    head: {
      title: 'Giulia & Rolf',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#faf1e1' }
      ],
    },
  },
  modules: ['@nuxt/eslint', '@vercel/analytics', '@vercel/speed-insights']
})
