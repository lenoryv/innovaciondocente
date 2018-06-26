<template>
  <div>
    <header class="header"
            v-if="ultimoEncuentro">
      <div class="header-overlay"></div>
      <div class="background-banner">
        <img :src="ultimoEncuentro.data.img"
             alt="img-background">
      </div>
      <div class="container">
        <div class="header-content">
          <nuxt-link :to="{name: 'formacion-docente-cafe-cientifico-id', params: {id: ultimoEncuentro.key}}">
            <h1>{{ultimoEncuentro.data.nombre}}</h1>
          </nuxt-link>
          <div class="row">
            <div class="col-lg-5">
              <figure :style="'background-image: url('+ultimoEncuentro.data.img+');'"></figure>
              <ul>
                <h3>
                  <i class="fas fa-users"></i> Invitados
                </h3>
                <li v-for="(invitado, index) in ultimoEncuentro.data.invitados"
                    :key="index">{{ invitado.nombre }}</li>
              </ul>
            </div>
            <div class="col-lg-7">
              <small>{{ultimoEncuentro.data.fecha | date}}</small>
              <p>{{ultimoEncuentro.data.contenido | slice(0,800)}}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section v-if="data.encuentros"
             id="encuentros">
      <div class="container-fluid">
        <h2>
          Portafolio de Encuentros
        </h2>
        <div class="row encuentros">
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
    </section>
    <section id="suscripcion">
      <div class="container">
        <h2>
          Suscribete a nuestro Café Científico
        </h2>
        <p>
          {{description}}
        </p>
        <nuxt-link class="btn btn-inverse btn-large"
                   :to="{name: 'formacion-docente-cafe-cientifico-suscripcion'}">Suscribirse</nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData() {
    const { data } = await axios.get(
      `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/cafe-cientifico.json`
    );
    const description =
      "Encuentro Café Científico es un evento en el que expertos y profesionales en diferentes campos, dialogan y problematizan sobre un tema actual de una forma diferente e informal. Su finalidad de escuchar opiniones diversas y realizar algunos postulados que contribuyan al trabajo posterior y que ayuden a fomentar inquietudes que despierten una entretenida discusión.";
    return { data, description };
  },
  computed: {
    ultimoEncuentro() {
      // TODO: optimize
      let res = null;
      for (const key in this.data.encuentros) {
        res = { key: key, data: this.data.encuentros[key] };
      }
      return res;
    },
    encuentros() {
      // TODO: sort by date
      let cursos = [];
      for (const key in this.data.encuentros) {
        cursos.push({ key: key, data: this.data.encuentros[key] });
      }
      cursos.sort(function(a, b) {
        return ("" + b.key).localeCompare(a.key);
      });
      return cursos;
    },
  },
  head() {
    return {
      title: "Café Científico | Innovación Docente",
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

.header {
  object-fit: cover;
  overflow: hidden;
  min-height: 100vh;
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
    text-decoration: underline;
    font-weight: 400;
  }
  ul {
    list-style: none;
    padding: 0;
  }
}

#suscripcion {
  background-color: $color-primary;
  color: $color-font-primary;
}
#encuentros {
  overflow: auto;
  background-color: $color-font-primary;
  .row {
    display: -webkit-box;
    flex-wrap: nowrap;
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
