<template>
  <div>
    <img v-lazy="banner"
         alt="banner-cafe-cientifico">
         <!--
    <section v-if="ultimoEncuento">
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
              <li v-for="(invitado, index) in ultimoEncuento.data.invitados"
                  :key="index">{{ invitado.nombre }}</li>
            </ul>
          </div>
          <div class="col-md-8">
            <h1>{{ultimoEncuento.data.nombre}}</h1>
            <small>{{ultimoEncuento.data.fecha}}</small>
            <p>{{ultimoEncuento.data.contenido | slice(0,500)}}</p>
            <nuxt-link class="btn btn-primary"
                       :to="{name: 'formacion-docente-cafe-cientifico-id', params: {id: ultimoEncuento.key}}">
              Leer más
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
         -->
    <pre>
      {{ultimoEncuentro}}
    </pre>
    <section id="portafolio"
             v-if="encuentros">
      <div class="container-fluid">
        <h2>
          Portafolio de Encuentros
        </h2>
        <div class="row">
          <nuxt-link class="col-xl-3 col-sm-6"
                     v-for="(encuentro, key) in encuentros"
                     :key="key"
                     :to="{name: 'formacion-docente-cafe-cientifico-id', params: {id: key}}"
                     tag="div">
            <div class="card card__two link">
              <figure class="card__img">
                <img v-lazy="encuentro.img"
                     alt="Imagen Encuentros">
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
    let { data } = await axios.get(
      `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/cafe-cientifico.json`
    );
    return {
      encuentros: data.encuentros,
      banner: data.banner,
      description: data.description
    };
  },
  computed: {
    ultimoEncuentro(encuentros){
      let vm = this;
      console.log(vm.encuentros);
      return{};
    }
  },
  head() {
    return {
      title: "Café Científico | Innovación Docente",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description.data
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
