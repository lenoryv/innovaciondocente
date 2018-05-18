/* nuxt.config.js */
// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/innovaciondocente/'
  }
} : {};

module.exports = {
  /**
   * router base
   */
  ...routerBase,
  /*
  ** Headers of the page
  */
  head: {
    title: 'Innovacion Docente',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Página web de Innovacion Docente | UTPL' }
    ]
  },
  /*
 ** Customize the progress bar color
 */
  loading: {
    color: '#e9ecef',
    height: '3px'
  },
  loadingIndicator: {
    name: 'three-bounce',
    color: 'white',
    background: "#0D47A1"
  },
  /**
   * mode 'spa' or 'universal'
   */
  mode: 'universal',
  /**
   * manifest
   */
  manifest: {
    name: 'Innovacion Docente UTPL',
    lang: 'es',
    short_name: 'Innovacion Docente',
    start_url: '/',
    display: 'standalone',
    orientation: "portrait",
    background_color: "#0D47A1",
    theme_color: "#0D47A1",
    description: "Pagina web de innovacion docente.",
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    extractCSS: true,
    vendor: ['vee-validate']
  },
  css: [
    '@/assets/bootstrap/bootstrap-grid.scss',
    '@/assets/router-transition.scss',
    '@/assets/style.scss'
  ],
  modules: [
    '@nuxtjs/pwa'
  ],
  plugins: [
    { src: '~/plugins/vee-validate.js', ssr: true }
  ]
}
