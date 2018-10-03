importScripts('/innovaciondocente/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "innovaciondocente",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/innovaciondocente/_nuxt/app.6e32cb5d163bd0b17b420c332fb97b64.css",
    "revision": "6e32cb5d163bd0b17b420c332fb97b64"
  },
  {
    "url": "/innovaciondocente/_nuxt/app.a0034cd66c8c1b802ab5.js",
    "revision": "f4671af112cf7f4bc318f89e03b4943a"
  },
  {
    "url": "/innovaciondocente/_nuxt/layouts/default.448ec1f3723f3ad71a7c.js",
    "revision": "77debb38435f077e77f657a9cb888dd2"
  },
  {
    "url": "/innovaciondocente/_nuxt/layouts/empty.c1e2edfda941059a5c54.js",
    "revision": "4c2ed69b742d993f9691f7d85c1d760a"
  },
  {
    "url": "/innovaciondocente/_nuxt/manifest.5c6d5b971488fad08988.js",
    "revision": "10e58504f77bd071f52a0ec3f8d8e7b4"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/acerca-nosotros/index.d42cae12540de7a693d1.js",
    "revision": "9adfba411f33aaff28734a136f6063f2"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/acerca-nosotros/nuestro-equipo.4ac3ed7d6b1ef0a094e1.js",
    "revision": "bcbe47370a5a0af2c41cd85adfc7d842"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/acerca-nosotros/nuestros-servicios.4b2becb1418d8c05bf07.js",
    "revision": "38977815e9f38f60b7c6cbb5eb2dfa30"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/cafe-cientifico/_id.9ff4a50336f742d1fb8d.js",
    "revision": "7d7f759ef93f794c3a0ef09f4317c1f5"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/cafe-cientifico/index.3e51b72c417edee45375.js",
    "revision": "a0bb773a2cd24d139fefe6bbef19b70b"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/cafe-cientifico/inscripcion.c92ed4c841fd0ec336f7.js",
    "revision": "a82a905f37b473371a36beb0e53fe6c7"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/desarrollo-asignatura/asesoramiento.0e99de65d44e0b831236.js",
    "revision": "5d2463b49c92e1a40b2d68e9caf1d3b1"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/desarrollo-asignatura/elaborar.eededb30745c4411abbb.js",
    "revision": "eb8ed512ca7c23901cb598b8a6adb22c"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/desarrollo-asignatura/index.3351c25872727efeb8c0.js",
    "revision": "640b1d9580a0faeed91152d47729d751"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/desarrollo-asignatura/recursos.af012719f07f2c67b358.js",
    "revision": "a843eef6593e01de6d9b6367db7c4690"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/desarrollo-asignatura/repositorio.85d34a83806138305845.js",
    "revision": "949c0144b0766a57fa0bebe6038b13c7"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/jornadas-de-reflexion/index.7d06e4ed60694b625337.js",
    "revision": "c99376a9714512739e4971f5a2ada439"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/jornadas-de-reflexion/jornadas-anteriores.3ad9ec03966f5245db96.js",
    "revision": "8ee32bfc7a03b746b2ac993ceff34b8f"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/jornadas-de-reflexion/jornadas-anteriores/_id.9e7715c8bab2e5807f55.js",
    "revision": "6a41425ea58eb4d47981996b93429592"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/jornadas-de-reflexion/jornadas-anteriores/index.bb432fd26a433169bc79.js",
    "revision": "e04647cd7f137c17ea8ce8894c31b902"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/programa-formacion/_id.2c9702b8f950d13dae5e.js",
    "revision": "6a0ff134f7bfbbeaeee1be4cda8031e4"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/programa-formacion/cursos-especificos.b310c467c9470bedd8e0.js",
    "revision": "65a28d0e332f2c049288e5595a9f225c"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/programa-formacion/cursos.fa67f8beb798e0578640.js",
    "revision": "e0505cadb2bb671985f54b8366f04959"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/programa-formacion/index.950a1bb084eb10860c6f.js",
    "revision": "6cabb3067aec7ae9cf9e805bd8ee78a5"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/programa-formacion/potencia-informacion.e06ddd5a300c9e973b77.js",
    "revision": "647a1d577a717c4684526710e6de0cf8"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/index.8be47dbff52080d7f5b9.js",
    "revision": "f44eb38a5eb6d744037909a2d9bc5172"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/ayudante-catedra/index.5822b613c31c4fe56c95.js",
    "revision": "7c9e30f9af5f50a3087ee8f38cace17a"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/buenas-practicas/index.866b9ff56091165826f0.js",
    "revision": "3494716f03f4485c85c5d191bf418f36"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/buenas-practicas/index/_id.96da4a1c864289ef5b32.js",
    "revision": "1cacf8adb80cabe818bda3346c581288"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/buenas-practicas/index/index.519d936d5691cb411864.js",
    "revision": "f29629fec8323142ecbecc1122ca414c"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/convocatorias/index.4f2baa33d2e371f6fc9a.js",
    "revision": "3a69dae220403763d873a612c7295945"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/proyecto-mentores/index.8ed5ddb2c263c0c4c848.js",
    "revision": "4b202e8b8129f9396f69204b20b33e16"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/proyectos-actuales/index.2da7bc35c3b0c1e6f889.js",
    "revision": "b080c2df2ff380e8c7a5305ee2f5a48f"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/observatorio-edutendencias/noticias/_id.79e12c15a232c30f9f38.js",
    "revision": "38592d7182966905b726cc160a667d4f"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/observatorio-edutendencias/noticias/index.958884a1c871b578e70d.js",
    "revision": "82b01cb6b1a7d2c50a557db0e65d6246"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/observatorio-edutendencias/tips-innovacion/index.50d116d5347f11028637.js",
    "revision": "e126f5d040b13ffc590ae2b97bfc936f"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/observatorio-edutendencias/tips-innovacion/tips.3e1c78ca30aea68c9d27.js",
    "revision": "3a52a7075924747c5ebf157cdc510992"
  },
  {
    "url": "/innovaciondocente/_nuxt/vendor.f32540f22ad30d4736de.js",
    "revision": "09db8f64b3bcf3bbd3a768a575bae9b7"
  }
])


workboxSW.router.registerRoute(new RegExp('/innovaciondocente/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/innovaciondocente/.*'), workboxSW.strategies.networkFirst({}), 'GET')

