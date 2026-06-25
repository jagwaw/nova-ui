import { novaTheme } from './theme/nova'

export default defineNuxtConfig({
  compatibilityDate: '2026-05-18',
  devtools: { enabled: false },

  modules: ['vuetify-nuxt-module', '@nuxtjs/google-fonts'],

  css: ['~/assets/styles/nova/index.scss', '@mdi/font/css/materialdesignicons.min.css'],

  typescript: {
    strict: true,
  },

  googleFonts: {
    families: {
      'Space+Grotesk': [400, 500, 600, 700],
      Inter: [400, 500, 600],
      'JetBrains+Mono': [400, 500],
    },
    display: 'swap',
  },

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'novaDark',
        themes: novaTheme,
      },
      defaults: {
        VBtn: {
          rounded: 'lg',
          elevation: 0,
        },
        VTextField: {
          variant: 'outlined',
          density: 'comfortable',
          color: 'primary',
        },
        VCard: {
          rounded: 'lg',
          elevation: 0,
        },
      },
    },
  },

  app: {
    head: {
      title: 'NovaUI — Fintech & support SaaS component library',
      meta: [
        {
          name: 'description',
          content:
            'NovaUI is a Vuetify 3 component layer for fintech and customer-support SaaS — typed APIs, dark theme, and SDK-quality docs.',
        },
        { name: 'theme-color', content: '#0a0a0f' },
      ],
    },
  },
})
