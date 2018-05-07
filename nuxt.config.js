module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'innovaciondocente',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Código fuente de la página web de Innovacion Docente | UTPL' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /**
   * manifest
   */
  manifest: {
    name: 'Innovacion Docente UTPL',
    lang: 'es',
    short_name: 'innovaciondocente',
    start_url: '/',
    display: 'standalone',
    orientation: "portrait",
    background_color: "#f0f",
    theme_color: "#f0f",
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
    }
  },
  css: [
    '@/assets/bootstrap/bootstrap-reboot.scss',
    '@/assets/bootstrap/bootstrap-grid.scss'
  ],
  modules: [
    ['@nuxtjs/pwa', { icon: false }]
  ]
}
