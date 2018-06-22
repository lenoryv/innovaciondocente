<template>
  <div>
    <img v-lazy="banner"
         alt="banner-cafe-cientifico">
    <section v-if="ultimoEncuentro">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <figure :style="'background-image: url('+ultimoEncuentro.data.img+');'"></figure>
            <h3>
              <i class="fas fa-users"></i> Invitados
            </h3>
            <ul>
              <li v-for="(invitado, index) in ultimoEncuentro.data.invitados"
                  :key="index">{{ invitado.nombre }}</li>
            </ul>
          </div>
          <div class="col-md-8">
            <h1>{{ultimoEncuentro.data.nombre}}</h1>
            <small>{{ultimoEncuentro.data.fecha}}</small>
            <p>{{ultimoEncuentro.data.contenido | slice(0,500)}}</p>
            <nuxt-link class="btn btn-primary"
                       :to="{name: 'formacion-docente-cafe-cientifico-id', params: {id: ultimoEncuentro.key}}">
              Leer más
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section id="portafolio"
             v-if="encuentros">
      <div class="container-fluid">
        <h2>
          Portafolio de Encuentros
        </h2>
        <div class="row">
          <nuxt-link class="col-lg-3 col-sm-6"
                     v-for="(encuentro, key) in encuentros"
                     :key="key"
                     :to="{name: 'formacion-docente-cafe-cientifico-id', params: {id: key}}"
                     tag="div">
            <div class="card card__two link">
              <figure class="card__img"
                      :style="'background-image: url('+encuentro.img+');'">
              </figure>
              <div class="card__desc">
                <h4>{{encuentro.nombre}}</h4>
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
    return { data };
  },
  computed: {
    ultimoEncuentro() {
      // TODO: return last item date
      let res = null;
      for (const key in this.data.encuentros) {
        if (!res) {
          res = { key: key, data: this.data.encuentros[key] };
          continue;
        }
        if (this.data.encuentros[key].fecha > res.fecha)
          res = this.data.encuentros[key];
      }
      return res;
    },
    encuentros() {
      // TODO: sort by date
      return this.data.encuentros;
    },
    banner() {
      return this.data.banner;
    },
    description() {
      return this.data.description;
    }
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

#suscripcion {
  background-color: $color-primary;
  color: $color-font-primary;
}

#portafolio {
  color: $color-primary;
  background-color: $color-warning;
  .card {
    padding-bottom: 0;
    color: $color-primary;
    background-color: $color-warning;
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
