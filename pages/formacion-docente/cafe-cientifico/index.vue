<template>
  <div>
    <img v-lazy="banner"
         alt="banner-cafe-cientifico">
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <figure>
              <img v-lazy="ultimoEncuento.img"
                   alt="Imagen Encuentro">
            </figure>
            <h3>
              <i class="fas fa-users"></i> Invitados
            </h3>
            <ul>
              <li v-for="(invitado, index) in ultimoEncuento.invitados"
                  :key="index">{{ invitado.name }}</li>
            </ul>
          </div>
          <div class="col-md-8">
            <h1>{{ultimoEncuento.tema}}</h1>
            <small>{{ultimoEncuento.fecha}}</small>
            <p>{{ultimoEncuento.desc | slice(0,500)}}</p>
            <nuxt-link class="btn btn-primary"
                       :to="{name: 'formacion-docente-cafe-cientifico-id', params: {id: 0}}">
              Leer más
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section id="portafolio">
      <div class="container-fluid">
        <h2>
          Portafolio de Encuentros
        </h2>
        <div class="row">
          <nuxt-link class="col-xl-3 col-sm-6"
                     v-for="(encuentro, i) in nuestrosEncuentos"
                     :key="i"
                     :to="{name: 'formacion-docente-cafe-cientifico-id', params: {id: i}}"
                     tag="div">
            <div class="card card__two link">
              <figure class="card__img">
                <img v-lazy="encuentro.img"
                     alt="Imagen Encuentros">
              </figure>
              <div class="card__desc">
                <h4>{{encuentro.tema}}</h4>
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
import { DB } from "@/services/fireinit.js";
export default {
  async asyncData() {
    let res;
    let database = await DB.ref(`formacion-docente/cafe-cientifico`);
    database.on("value", snapshot => (res = snapshot.val()));
    return {
      ultimoEncuento: res.encuentros[0],
      nuestrosEncuentos: res.encuentros.slice(0, 4),
      banner: res.banner,
      description: res.description
    };
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
}
figure img {
  display: block;
  width: 100%;
}
</style>
