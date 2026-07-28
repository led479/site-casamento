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
        { name: 'theme-color', content: '#faf1e1' },
        { property: 'og:title', content: 'Giulia & Rolf' },
        { property: 'og:description', content: 'Te convidamos para o nosso casamento — 24 de outubro de 2026' },
        { property: 'og:image', content: 'https://giuliarolf.com.br/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://giuliarolf.com.br' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Giulia & Rolf' },
        { name: 'twitter:description', content: 'Te convidamos para o nosso casamento — 24 de outubro de 2026' },
        { name: 'twitter:image', content: 'https://giuliarolf.com.br/og-image.jpg' },
      ],
    },
  },
  modules: ['@nuxt/eslint', '@vercel/analytics', '@vercel/speed-insights']
})
