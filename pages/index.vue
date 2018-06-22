<template>
  <div>
    <!-- Header  -->
    <header class="header">
      <div class="header-overlay"></div>
      <div class="fondo">
        <img class="img-move"
             :src="require('@/static/index.jpg')"
             alt="">
      </div>
      <div class="header-content">
        <h1>Proyecto Ascendere</h1>
        <p>Innovación
          <span>|</span> Formación
          <span>|</span> Evaluación</p>
        <a href="#"
           class="arrow arrow-1">
          <span @click="pageScroll()"></span>
        </a>
        <a href="#"
           class="arrow arrow-2">
          <span @click="pageScroll()"></span>
        </a>
        <a href="#"
           class="arrow arrow-3">
          <span @click="pageScroll()"></span>
        </a>
      </div>
    </header>

    <!-- Noticia, Curso, tip -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="card_4">
              <div class="card_4__thumb">
                <a href="#"><img src="https://images.unsplash.com/photo-1512466699224-9d8217244131?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4b6f389eb54cb8e27ee8ee5d4040a5d7&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"></a>
              </div>
              <div class="card_4__date">
                <span class="card_4__date__day">23</span>
                <span class="card_4__date__month">Mai</span>
              </div>
              <div class="card_4__body">
                <div class="card_4__category">
                  <a href="#">Category</a>
                </div>
                <div class="card_4__title">
                  <a href="#">Vivamus elementum semper nisivi troscup</a>
                </div>
                <div class="card_4__subtitle">Donec posuere vulputate</div>
                <div class="card_4__description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sapiente doloremque
                    recusandae, modi dolore velit, illum itaque minus inventore, omnis et nisi rem facere.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sapiente doloremque
                    recusandae, modi dolore velit, illum itaque minus inv</p>
                </div>
                <div class="card_4__footer">
                  <nuxt-link class=""
                             :to="{name: ''}">
                    Leer más +
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card_4">
              <div class="card_4__thumb">
                <a href="#"><img src="https://images.unsplash.com/photo-1512466699224-9d8217244131?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4b6f389eb54cb8e27ee8ee5d4040a5d7&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"></a>
              </div>
              <div class="card_4__date">
                <span class="card_4__date__day">23</span>
                <span class="card_4__date__month">Mai</span>
              </div>
              <div class="card_4__body">
                <div class="card_4__category">
                  <a href="#">Category</a>
                </div>
                <div class="card_4__title">
                  <a href="#">Vivamus elementum semper nisivi troscup</a>
                </div>
                <div class="card_4__subtitle">Donec posuere vulputate</div>
                <div class="card_4__description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sapiente doloremque
                    recusandae, modi dolore velit, illum itaque minus inventore, omnis et nisi rem facere.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sapiente doloremque
                    recusandae, modi dolore velit, illum itaque minus inv</p>
                </div>
                <div class="card_4__footer">
                  <nuxt-link class=""
                             :to="{name: ''}">
                    Leer más +
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="card_4">
              <div class="card_4__thumb">
                <a href="#"><img src="https://images.unsplash.com/photo-1512466699224-9d8217244131?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4b6f389eb54cb8e27ee8ee5d4040a5d7&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"></a>
              </div>
              <div class="card_4__date">
                <span class="card_4__date__day">23</span>
                <span class="card_4__date__month">Mai</span>
              </div>
              <div class="card_4__body">
                <div class="card_4__category">
                  <a href="#">Category</a>
                </div>
                <div class="card_4__title">
                  <a href="#">Vivamus elementum semper nisivi troscup</a>
                </div>
                <div class="card_4__subtitle">Donec posuere vulputate</div>
                <div class="card_4__description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sapiente doloremque
                    recusandae, modi dolore velit, illum itaque minus inventore, omnis et nisi rem facere.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sapiente doloremque
                    recusandae, modi dolore velit</p>
                </div>
                <div class="card_4__footer">
                  <nuxt-link class=""
                             :to="{name: ''}">
                    Leer más +
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LiiD -->
    <div class="liid">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <div class="liid-info border">
              <img :src="require('~/static/iconLiiD.png')">
              <p>El Laboratorio de Investigación e Innovación Docente Educativa es un espacio orientado
                al desarrollo de la innovación e investigación educativa a nivel local, nacional e internacional.</p>
              <p>Con el trabajo del Vicerrectorado Académico, Vicerrectorado de Modalidad Abierta y a Distancia,
                Vicerrectorado de Investigación, Departamento de Ciencias de la Educación, Departamento
                de Ciencias de la Computación y el Departamento de Ciencias de la Comunicación, se pretende
                fortalecer la actividad de los grupos de innovación e investigación en temas de tecnología
                educativa; además de identificar diferentes prácticas de innovación educativa que se
                suceden en el campus, en relación al uso de nuevas tecnologías y ambientes de aprendizaje.
              </p>
            </div>
          </div>
          <div class="col-md-6 background-mustard">
            <div class="liid-info">
              <h2>Proyectos Actuales</h2>
              <div class="col-lg-12">
                <div class="embed-container">
                  <iframe src="https://www.youtube.com/embed/8lp20JFiB4s"
                          frameborder="0"
                          allow="encrypted-media"
                          allowfullscreen></iframe>
                </div>
              </div>
              <p>Ascendere crea y motiva a las nuevas generaciones a poner en práctica, explorar nuevas
                areas con el fin de crear cosas simples pero asombrosas, tienes dudas pues te invitamos
                a explorar cada uno de los proyectos.</p>
              <nuxt-link :to="{name: 'innovacion-docente-proyectos-actuales'}"
                         class="btn btn-large btn-primary">Atrevete</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Cafe Cientifico -->
    <section class="cafe-cientifico">
      <div id="back"></div>
      <div id="front"></div>
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
            <h3>{{cafecientifico.nombre}}</h3>
            <p>{{cafecientifico.contenido | slice(0,500) }}</p>

          </div>
          <div class="col-md-6">
            <figure>
              <img :src="cafecientifico.img">
            </figure>
            <nuxt-link class="btn btn-large btn-inverse"
                       :to="{name: ''}">
              Leer más
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Quienes somos-->
    <section class="quienes-somos quienes-overlay">
      <div class="vignette"></div>
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

    <!-- Footer -->
    <footer>
      <div class="footer-commo container">
        <div class="card_4s-news">
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
              <nuxt-link class="link-footer-title"
                         :to="{name: 'innovacion-docente'}">
                <h3>Innovación Docente</h3>
              </nuxt-link>
              <ul>
                <nuxt-link class="link-footer"
                           :to="{name: 'innovacion-docente-convocatorias-index'}">Convocatorias</nuxt-link>
                <nuxt-link class="link-footer"
                           :to="{name: 'innovacion-docente-proyectos-actuales'}">Proyectos Actuales</nuxt-link>
                <nuxt-link class="link-footer"
                           :to="{name: 'innovacion-docente-poyecto-mentores'}">Proyecto Mentores</nuxt-link>
                <nuxt-link class="link-footer"
                           :to="{name: 'innovacion-docente-buenas-practicas-index'}">Buenas Practicas</nuxt-link>
                <nuxt-link class="link-footer"
                           :to="{name: 'formacion-docente-ayudante-catedra'}">Ayudante de Catedra</nuxt-link>
              </ul>
            </div>
            <div class="list-vertical">
              <nuxt-link class="link-footer-title"
                         :to="{name: 'formacion-docente-programa-formacion'}">
                <h3>Formación Docente</h3>
              </nuxt-link>
              <ul>
                <nuxt-link class="link-footer"
                           :to="{name: 'formacion-docente-programa-formacion'}">Programa de Formación</nuxt-link>
                <nuxt-link class="link-footer"
                           :to="{name: 'formacion-docente-cafe-cientifico'}">Café Científico</nuxt-link>
                <nuxt-link class="link-footer"
                           :to="{name: 'formacion-docente-jornadas-de-reflexion'}">Jornadas de Reflexión</nuxt-link>
              </ul>
            </div>
            <div class="list-vertical">
              <nuxt-link class="link-footer-title"
                         :to="{name: 'observatorio-edutendencias'}">
                <h3>Observatorio EduTencencias</h3>
              </nuxt-link>
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
    </footer>

  </div>
</template>
<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    let { data } = await axios.get(
      `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/cafe-cientifico/encuentros.json?orderBy=%22$key%22&limitToLast=1`
    );
    return { data };
  },
  computed: {
    cafecientifico() {
      for (const key in this.data) {
        return this.data[key];
      }
    }
  },
  methods: {
    pageScroll() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      });
    }
  }
};
</script>


<style lang="scss" scoped>
@import "assets/variables";
@import "assets/card";

h1 {
  color: $color-secondary;
  font-size: 60px;
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  text-transform: uppercase;
  font-size: 120px;
  letter-spacing: 5px;
}
h2 {
  text-align: center;
  text-transform: uppercase;
  font-weight: 45px;
}
p {
  text-align: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
p span {
  color: $color-warning;
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
  background: $color-section;
  opacity: 0.6;
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
  text-align: justify;
  padding: 10px;
}
.section-text h3 {
  text-align: center;
  padding: 10px;
}
.avatar:hover {
  .img-avatar {
    transition: transform ease-in-out 0.25s;
    transform: scale(1.1);
  }
}
.quienes-somos {
  background-image: url("../static/quienes-somos.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center center;
  display: block;
}
.vignette {
  background: rgba(0, 0, 0, 0.815);
  height: 100%;
  position: fixed;
  width: 100%;
}
.cafe-cientifico {
  color: #fff;
  background: $color-primary;
}
.img-cafe {
  object-fit: cover;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
figure {
  overflow: hidden;
  padding-top: 2rem;
  padding-bottom: 50% !important;
  height: 0;
  margin: 0;
}
figure img {
  display: block;
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
.card_4s-news {
  margin-bottom: 3rem;
}
.card_4s-news p {
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
.link-footer-title {
  color: $color-secondary;
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
.link-footer {
  padding-left: 10px;
  margin-top: 0;
  margin-right: 16px;
  margin-bottom: 0;
  color: $color-font-light;
}
.liid-info {
  padding: 2rem 1rem;
  height: 105vh;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  h2 {
    color: $color-primary;
  }
  img {
    height: 200px;
    width: 300px;
  }
}
.border {
  border-top: 3px solid $color-section;
}

.background-mustard {
  background: $color-warning;
}
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  margin: 1rem 0 1rem;
  height: 0;
  overflow: hidden;
}
.embed-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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