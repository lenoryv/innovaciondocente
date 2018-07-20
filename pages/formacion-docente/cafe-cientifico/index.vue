<template>
  <div>
    <header class="header"
            v-if="ultimoEncuentro">
      <div class="header-overlay"></div>
      <div class="background-banner">
        <img :src="ultimoEncuentro.data.img"
             alt="img-background">
      </div>
      <div class="header-content">
        <nuxt-link :to="{name: 'formacion-docente-cafe-cientifico-id', params: {id: ultimoEncuentro.key}}"
                   tag="div"
                   class="container"
                   style="cursor:pointer">
          <h1>{{ultimoEncuentro.data.nombre}}</h1>
          <div class="row">
            <div class="col-lg-5 no-mobile">
              <figure :style="'background-image: url('+ultimoEncuentro.data.img+');'"></figure>
              <ul v-if="ultimoEncuentro.data.invitados">
                <h3>
                  <i class="fas fa-users"></i> Invitados
                </h3>
                <li v-for="(invitado, index) in ultimoEncuentro.data.invitados"
                    :key="index">{{ invitado.nombre }}</li>
              </ul>
            </div>
            <div class="col-lg-7">
              <small>{{ultimoEncuentro.data.fecha | date}}</small>
              <p class="no-mobile">{{ultimoEncuentro.data.contenido | slice(0,700)}}</p>
              <p class="no-desktop">{{ultimoEncuentro.data.contenido | slice(0,300)}}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </header>
    <section v-if="data.encuentros"
             id="encuentros">
      <div class="container-fluid">
        <h2>
          Portafolio de Encuentros
        </h2>
        <div class="encuentros">
          <div class="row"
               id="scroll">
            <nuxt-link class="col-lg-3 col-md-5 col-sm-7"
                       v-for="encuentro in encuentros"
                       :key="encuentro.key"
                       :to="{name: 'formacion-docente-cafe-cientifico-id', params: {id: encuentro.key}}"
                       tag="div">
              <div class="card card__two link">
                <figure class="card__img"
                        :style="'background-image: url('+encuentro.data.img+');'">
                </figure>
                <div class="card__desc">
                  <h4>{{encuentro.data.nombre}}</h4>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <button class="btn btn-large btn-sm btn-outline-primary"
                    @click="scrollLeft">&#60;&#61;</button>
          </div>
          <div class="col-6">
            <button class="btn btn-large btn-sm btn-outline-primary"
                    @click="scrollRight">&#61;&#62;</button>
          </div>
        </div>
      </div>
    </section>
    <!--Susciption section-->
    <Suscripcion title="Suscribete a nuestro Café Científico"
                 :description="description"
                 blue="true" />
  </div>
</template>

<script>
import axios from "axios";
import Suscripcion from "@/components/Suscripcion";
export default {
  async asyncData() {
    const { data } = await axios.get(
      `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/cafe-cientifico.json`
    );
    const description =
      "Encuentro Café Científico es un evento en el que expertos y profesionales en diferentes campos, dialogan y problematizan sobre un tema actual de una forma diferente e informal. Su finalidad de escuchar opiniones diversas y realizar algunos postulados que contribuyan al trabajo posterior y que ayuden a fomentar inquietudes que despierten una entretenida discusión.";
    return { data, description };
  },
  methods: {
    scrollLeft() {
      const el = document.getElementById("scroll");
      el.scrollLeft -= document.getElementById("encuentros").offsetWidth * 0.5;
    },
    scrollRight() {
      const el = document.getElementById("scroll");
      el.scrollLeft += document.getElementById("encuentros").offsetWidth * 0.5;
    }
  },
  computed: {
    ultimoEncuentro() {
      let res = null;
      for (const key in this.data.encuentros) {
        res = { key: key, data: this.data.encuentros[key] };
      }
      return res;
    },
    encuentros() {
      let cursos = [];
      for (const key in this.data.encuentros) {
        cursos.push({ key: key, data: this.data.encuentros[key] });
      }
      cursos.sort(function(a, b) {
        return ("" + b.key).localeCompare(a.key);
      });
      return cursos;
    }
  },
  components: {
    Suscripcion
  },
  head() {
    return {
      title: "Café Científico | Proyecto Ascendere",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
@import "assets/card";

@media (max-width: 767px) {
  .no-mobile {
    display: none;
  }
}
@media (min-width: 768px) {
  .no-desktop {
    display: none;
  }
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
.background-banner {
  left: 0;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  text-align: center;
  position: absolute;
  background-color: $color-primary;

  z-index: -2;
  -webkit-filter: blur(20px);
  filter: blur(20px);
  img {
    object-fit: cover;
    width: 100%;
    height: 100vh;
    opacity: 1;
    position: relative;
    overflow: hidden;
  }
}
.header-overlay {
  min-height: 100vh;
  width: 100%;
  position: absolute;
  left: 0;
  background: $color-dark;
  opacity: 0.6;
  z-index: -1;
}
.header-content {
  margin: auto;
  h1 {
    color: $color-font-primary !important;
    font-weight: 400;
  }
  ul {
    list-style: none;
    padding: 0;
  }
}

#encuentros {
  background-color: $color-font-primary;
  .row {
    overflow: auto;
    display: -webkit-box;
    flex-wrap: nowrap;
  }
  ::-webkit-scrollbar {
    display: none;
  }
}

figure {
  overflow: hidden;
  padding-bottom: 50% !important;
  height: 0;
  margin: 0;
  background-color: $color-primary;
  background-size: cover;
}
</style>
