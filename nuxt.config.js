import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',
  router: {
    base: '/resume/' // github repository name
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://domain/resume/'
  },
  head: {
    titleTemplate: '%s - 서성식',
    title: 'test',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  // Global font css
  css: ['~/assets/css/font/SUIT-Variable.css'],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  modules: [
  ],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  build: {
  },

  server: {
    port: 4040, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  }
}
