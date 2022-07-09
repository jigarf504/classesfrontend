export default {
  head: {
    title: 'Test-Classes',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/css/tailwind.css'
  ],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
    '@nuxtjs/dotenv',
  ],
  modules: [
    '@nuxtjs/axios',
    'nuxt-material-design-icons',
    '@nuxtjs/toast',
  ],
  toast: {
      position: 'top-bottom',
      register: [ // Register custom toasts
        {
          name: 'my-error',
          message: 'Oops...Something went wrong',
          options: {
            type: 'error'
          }
        }
      ]
  },
  axios: {
    baseURL: process.env.BASE_URL
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },
  server: {
    port: 3005 // default: 3000
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true
  }
}
