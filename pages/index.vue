<template>
  <div>
    <header class="header">
      <!--<div class="header-video">
      <img class="background img-move" :src="require('@/static/imgIndex.jpg')" alt="">
       <video :src="require('@/static/videos/Decide_ser_mas_en_la_UTPL.mp4')" alt="" autoplay loop muted></video> 
    </div>-->
      <div class="header-overlay"></div>
      <div class="fondo">
        <img class="img-move"
             :src="require('@/static/imgIndex.jpg')"
             alt="">
      </div>
      <div class="header-content">
        <h1>Decide ser más</h1>
        <p>Proyecto Ascendere</p>
        <button href="#"
                class="btn btn-primary">GO TO COURSE</button>
        <a href="#"
           class="arrow arrow-1">
          <span></span>
        </a>
        <a href="#"
           class="arrow arrow-2">
          <span></span>
        </a>
        <a href="#"
           class="arrow arrow-3">
          <span></span>
        </a>
      </div>
    </header>

    <!-- Navbar  -->
    <div class="div1"
         id="navbar">
      <div class="div2">
        <div class="div3">
          <nuxt-link class="link"
                     scroll
                     :to="{name: 'innovacion-docente'}">
            <svg v-show="!scrolled"
                 class="heart"
                 width="40px"
                 height="40px"
                 viewBox="0 0 510 510">
              <path d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
                C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"
              />
            </svg>
            <span class="d-block">INNOVACIÓN DOCENTE</span>
          </nuxt-link>
          <nuxt-link class="link"
                     :to="{name: 'formacion-docente-programa-formacion'}">
            <svg v-show="!scrolled"
                 class="heart"
                 width="40px"
                 height="40px"
                 viewBox="0 0 510 510">
              <path d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
                C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"
              />
            </svg>
            <span class="d-block">FORMACIÓN DOCENTE</span>
          </nuxt-link>
          <nuxt-link class="link"
                     :to="{name: 'observatorio-edutendencias'}">
            <svg v-show="!scrolled"
                 class="heart"
                 width="40px"
                 height="40px"
                 viewBox="0 0 510 510">
              <path d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
                C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"
              />
            </svg>
            <span class="d-block">OBSERVATORIO EDUTENDENCIAS</span>
          </nuxt-link>
          <a class="link"
             target="_blank"
             href="https://radio.utpl.edu.ec">
            <svg v-show="!scrolled"
                 class="heart"
                 width="40px"
                 height="40px"
                 viewBox="0 0 510 510">
              <path d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
                C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"
              />
            </svg>
            <span class="d-block">RADIO UTPL</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Noticia, Curso, tip -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <img class="notes-img"
                 :src="require('~/static/img/innovacion/convocatorias.png')"
                 alt="convocatoria">
            <div class="notes-content"></div>
            <div class="notes-text">
              <h3>Noticia Reciente</h3>
              <p>Rajoy ha presidido este viernes la reunión del Consejo de Ministros, a la... </p>
              <button class="btn">Leer Más</button>
            </div>
          </div>
          <div class="col-md-4">
            <img class="notes-img"
                 :src="require('~/static/img/innovacion/proyectos-actuales.png')"
                 alt="proyectos-actuales">
            <div class="notes-content"></div>
            <div class="notes-text">
              <h3>Curso Reciente</h3>
              <p>Rajoy ha presidido este viernes la reunión del Consejo de Ministros, a la... </p>
              <button class="btn btn">Leer Más</button>
            </div>
          </div>
          <div class="col-md-4">
            <img class="notes-img"
                 :src="require('~/static/img/innovacion/proyecto-mentores.png')"
                 alt="proyecto-mentores">
            <div class="notes-content"></div>
            <div class="notes-text">
              <h3>Tip Reciente</h3>
              <p>Rajoy ha presidido este viernes la reunión del Consejo de Ministros, a la... </p>
              <button class="btn">Leer Más</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Cafe Cientifico -->
    <section class="cafe-cientifico">

      <div class="container">
        <div class="row">
          <div>
            <h2>Café Científico</h2>
            <p>Encuentro Café Científico es un evento en el que expertos y profesionales en diferentes campos,
              dialogan y problematizan sobre un tema actual de una forma diferente e informal. Su finalidad
              de escuchar opiniones diversas y realizar algunos postulados que contribuyan al trabajo
              posterior y que ayuden a fomentar inquietudes que despierten una entretenida discusión.</p>
          </div>
          <div class="col-md-6 section-text">
            <hr>
            <h3>TRANSFORMACIÓN DIGITAL: ESTRATEGIA PARA GESTIÓN DEL CAMBIO DE LA TECNOLOGÍA Y DISRUPCIÓN
              DIGITAL
            </h3>
            <p>Organizaciones de todos tipos y tamaños tradicionalmente han dependido de su habilidad para
              reaccionar rápidamente a los retos cambiantes que van de la mano del avance tecnológico,
              a la disrupción digital, las demandas del mercado y otros tipos de eventos disruptivos.
              La agilidad con la que pueden afrontar estos cambios es fundamental para que las organizaciones
              no se vean abocadas a largos procesos de planificación que no van de la mano con la era
              de aceleración disruptiva (tecnológica - digita...</p>
            <nuxt-link class="btn btn-large btn-primary"
                       :to="{name: ''}">
              Leer más
            </nuxt-link>
          </div>
          <div class="col-md-6">
            <figure>
              <img :src="require('~/static/img/familia.jpg')">
            </figure>
          </div>
        </div>
      </div>
    </section>

    <!-- Quienes somos-->
    <section class="quienes-somos">
      <div class="quienes-content">
        <h2>QUIENES SOMOS</h2>
        <p class="section-text-center">A través de iniciativas como
          <strong>Encuentro Café Científico</strong>,
          <strong>Jornadas de Reflexión Académica</strong>, el
          <strong>Plan de Formación Docente</strong> , entre otras, busca instaurar un sello de calidad para
          todos los programas formativos de la Universidad Técnica Particular de Loja.</p>
        <div class="avatar">
          <img class="img-avatar"
               :src="require('@/static/avatar-icom.png')"
               alt="Avatar">
          <h3>Dr. Santiago Acosta Aide</h3>
          <h4>Vicerrector Académico</h4>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-3 avatar">
              <img class="img-avatar"
                   :src="require('@/static/avatar-icom.png')"
                   alt="Avatar">
              <h3>PhD. María Isabel Loaiza</h3>
              <h4>Dirección de Innovación, Formación y Evaluación Docente</h4>
            </div>
            <div class="col-md-3 avatar">
              <img class="img-avatar"
                   :src="require('@/static/avatar-icom.png')"
                   alt="Avatar">
              <h3>Mgtr. Andrea Loaiza</h3>
              <h4>Dirección de Planificación y Desarrollo Curricular</h4>
            </div>
            <div class="col-md-3 avatar">
              <img class="img-avatar"
                   :src="require('@/static/avatar-icom.png')"
                   alt="Avatar">
              <h3>Mgtr. Paola Andrade</h3>
              <h4>Coordinación General</h4>
            </div>
            <div class="col-md-3 avatar">
              <img class="img-avatar"
                   :src="require('@/static/avatar-icom.png')"
                   alt="Avatar">
              <h3>Mgtr. Natalia Lutsak</h3>
              <h4>Dirección de Posgrados</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="footer-commo container">
        <div class="cards-news">
          <p>Obtenga las últimas noticias de Innovación UTPL entregadas en su bandeja de entrada.</p>
          <div class="form-row">
            <label class="label">
              Your Email:
            </label>
            <input type="email"
                   name="email"
                   class="input-text"
                   placeholder="your_email@email.com">
            <button class="btn btn-secondary">Suscribite</button>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-9">
            <div class="list-vertical">
              <h3>Innovación Docente</h3>
              <ul>
                <li>Convocatorias</li>
                <li>Proyectos Actuales</li>
                <li>Proyecto Mentores</li>
                <li>Buenas Parcticas</li>
                <li>Ayudante de Catedra</li>
              </ul>
            </div>
            <div class="list-vertical">
              <h3>Formación Docente</h3>
              <ul>
                <li>Programa de Formacíon</li>
                <li>Café Científico</li>
                <li>Jornadas de Reflexión</li>
              </ul>
            </div>
            <div class="list-vertical">
              <h3>Observatorio EduTendencias</h3>
              <ul>
                <li>Aula Divertida</li>
                <li>Docentes del Futuro</li>
                <li>Videos</li>
                <li>Podcast</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="list-vertical">
              <h3>Acerca de Nosotros</h3>
              <ul>
                <li>Quienes Somos</li>
                <li>Nuestro Equipo</li>
                <li>Nuestros Servicios</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copy">
        <ul class="mb">
          <li class="mr">© 2018
            <a href="https://www.utpl.edu.ec/">UTPL</a>
          </li>
          <li class="mr">San Cayetano Alto</li>
          <li>Loja - Ecuador</li>
        </ul>
        <a class="footer-heart"
           href=""
           title="With love by InDevelopmentCompany">
          <svg class="heart"
               width="16px"
               height="16px"
               viewBox="0 0 510 510">
            <path d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
                C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"
            />
          </svg>

        </a>
        <ul>
          <li class="mr">Contactos</li>
          <li class="mr">1800 8875 8875</li>
          <li>
            <a href="mailto:vacademico@utpl.edu.ec">vacademico@utpl.edu.ec</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  layout: "empty",

  data() {
    return {
      scrolled: false
    };
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 690;
    },
    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";

h1 {
  color: $color-secondary;
  font-size: 60px;
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  text-transform: uppercase;
  font-size: 120px;
  letter-spacing: 5px;
}

p {
  text-align: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.header {
  object-fit: cover;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  color: $color-secondary;
  text-align: center;
}

.fondo {
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  position: absolute;
  z-index: -2;
}

.img-move {
  object-fit: cover;
  width: 100%;
  min-height: 300px;
  height: 100vh;
  max-height: 100vh;
  opacity: 1;
  position: relative;
  animation: moving 10s infinite linear alternate;
  @keyframes moving {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.3);
    }
  }
}

.header-overlay {
  height: 100vh;
  width: 100%;
  position: absolute;
  left: 0;
  background: #0227499f;
  z-index: -1;
}

.header-content {
  margin: auto;
  text-align: center;
}

.header-content h1 {
  font-size: 50px;
  margin-bottom: 0;
}

.header-content p {
  font-size: 1.5rem;
  display: block;
  padding-bottom: 2rem;
}

.link {
  height: 100%;
  width: 100%;
  max-width: 12018px;
  text-align: center !important;
  display: inline-block;
  padding: 1rem;
  font-size: 13px;
}

.link svg {
  margin: 10px;
}

.div1 {
  position: -webkit-sticky;
  position: sticky;
  transition: transform ease 0.4s;
  height: 100%;
  width: 100%;
  border-color: #eaecef !important;
  border-bottom: 1px #e1e4e8 solid !important;
  top: 0;
  background: $color-background-white;
  z-index: 1;
}

.div2 {
  text-align: center !important;
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
}

.div3 {
  display: flex;
  vertical-align: bottom;
  flex-wrap: nowrap !important;
  align-items: flex-start !important;
  justify-content: space-between !important;
}

.div3 a {
  border-color: #444d56;
  border-bottom: 3px solid transparent;
  display: block;
  text-decoration: none;
}

.div3 svg {
  max-height: 60px;
  transition: transform ease-in-out 0.25s;
}

.div3 span {
  color: $color-primary;
  font-weight: bold;
}

.notes-text {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  padding: 15px 16px;
  text-align: center;
}

.notes-text:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
}

.col-md-4 {
  padding: 10px;
}

.header-content a {
  position: absolute;
  bottom: 20px;
  left: 50%;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: #fff;
  font: normal 400 20px/1 "Josefin Sans", sans-serif;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: opacity 0.3s;
}

.arrow {
  padding-top: 70px;
}

.arrow-1 {
  padding-top: 60px;
}

.arrow-2 {
  padding-top: 50px;
}

.arrow span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid $color-warning;
  border-bottom: 1px solid $color-secondary;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb05 1.5s infinite;
  animation: sdb05 1.5s infinite;
  @-webkit-keyframes sdb05 {
    0% {
      -webkit-transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }
  @keyframes sdb05 {
    0% {
      transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }
}

.link:hover {
  span {
    color: $color-warning-dark;
  }
}

.cafe-cientifico h2 {
  text-align: center;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.notes-content {
  border-top: 4px solid $color-section;
}

.quienes-somos {
  height: 100%;
  width: 100%;
  align-items: center;
  color: $color-secondary;
}

.quienes-content {
  padding: 50px;
  text-align: center;
  align-items: center;
}

.img-avatar {
  vertical-align: middle;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 10px;
}

.img-background {
  object-fit: cover;
  width: 100%;
  min-height: 300px;
  height: 100%;
  max-height: 100vh;
  opacity: 1;
  z-index: -1;
}

.avatar {
  text-align: center;
  padding: 10px;
}

.avatar h3 {
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.avatar h4 {
  font-weight: normal;
  font-style: italic;
  letter-spacing: 1px;
  color: #777;
}

.section-text-center {
  font-size: 22px;
  width: 80%;
  line-height: 1.4em !important;
  margin: 0 auto;
  padding-bottom: 40px;
  padding-top: 10px;
  letter-spacing: 0.02em;
  font-weight: 200;
}

.section-text p {
  text-align: left;
  padding: 10px;
}

.section-text h3 {
  text-align: left;
  padding: 10px;
}

.avatar:hover {
  .img-avatar {
    transition: transform ease-in-out 0.25s;
    transform: scale(1.1);
  }
}

.quienes-somos {
  background-image: url("../static/team-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.cafe-cientifico {
  background: #4080ff;
  color: #fff;
}

figure {
  margin-top: 1rem;
  width: 100%;
}

footer {
  line-height: 1.2;
  position: relative;
  overflow: hidden;
  max-width: 100%;
  padding: 65px 0 25px;
  background: #3b3e43;
  color: #fff;
  text-align: center;
}

.cards-news {
  margin-bottom: 3rem;
}

.cards-news p {
  font-size: 1.5em;
}

.input-text {
  width: 300px;
  border: 1px solid #8996a0;
  border-radius: 2px;
  padding: 0.5em;
}

.form-row .btn {
  margin: 0 1em;
  vertical-align: initial;
}

.form-row {
  padding: 1.25em;
}

.label {
  bottom: 10%;
  left: 0;
  margin: 0;
  padding: 10px;
  transition: bottom 0.2s, opacity 0.2s;
}

.list-vertical {
  padding: 10px;
}

.list-vertical li {
  list-style: none;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}

.list-vertical h3 {
  font-weight: bold;
  text-align: left !important;
}

.footer-copy p {
  text-align: left !important;
}

.footer-copy {
  display: flex;
  border-top: 1px $color-font-light solid;
  font-size: 0.7rem;
  padding-top: 40px;
  padding-bottom: 40px;
  margin: 40px 40px 0 40px;
  position: relative;
  justify-content: space-between !important;
}

footer ul {
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  padding-left: 10px;
  margin-top: 0;
  margin-right: 16px;
  margin-bottom: 0;
  color: $color-font-light;
}

footer li {
  margin-left: 1rem;
}

.mr {
  margin-right: 16px;
}

.footer-heart {
  color: $color-font-light;
}

.footer-heart:hover {
  color: $color-danger;
}

svg:not(:root) {
  overflow: hidden;
}

.heart {
  vertical-align: text-bottom;
}

.heart {
  display: inline-block;
  vertical-align: text-top;
  fill: currentColor;
}

@media (max-width: 992px) {
  .content {
    padding: 0 3rem 0 3rem;
  }
  .div1 {
    display: none;
  }
  .quienes-somos {
    background: #00406f;
  }
}

@media (max-width: 768px) {
  .content {
    padding: 0 3rem 0 3rem;
  }
  .form-row .btn {
    margin: 1em 0;
    width: 100%;
  }
  .form-row .input-text {
    width: 100%;
  }
}
</style>