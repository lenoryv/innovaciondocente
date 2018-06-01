<template>
  <div>
    <img v-lazy="banner"
         alt="banner-cafe-cientifico">
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <figure>
              <img v-lazy="require('@/static/img/' + ultimoEncuento.img)"
                   alt="Imagen Encuentro">
            </figure>
            <h2>Invitados</h2>
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
      <div class="container-fluid">
        <h2>Portafolio de Encuentros</h2>
        <div class="row">
          <nuxt-link class="col-lg-3 col-sm-6 encuentro"
                     v-for="(encuentro, i) in nuestrosEncuentos"
                     :key="i"
                     :to="{name: 'formacion-docente-cafe-cientifico-id', params: {id: i}}"
                     tag="div">
            <figure>
              <img v-lazy="require('@/static/img/' + encuentro.img)"
                   alt="Imagen Encuentros">
            </figure>
            <h4>{{encuentro.tema}}</h4>
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
          Encuentro Café Científico es un evento en el que expertos y profesionales en diferentes campos, dialogan
          y problematizan sobre un tema actual de una forma diferente e informal. Su finalidad de escuchar
          opiniones diversas y realizar algunos postulados que contribuyan al trabajo posterior y que
          ayuden a fomentar inquietudes que despierten una entretenida discusión.
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
  async asyncData({ params }) {
    let res = await axios.get(
      "https://innovaciondocente-utpl.firebaseio.com/formacion-docente/cafe-cientifico.json"
    );
    let ultimoEncuento = res.data.encuentros[0];
    let nuestrosEncuentos = res.data.encuentros.slice(0, 4);
    let banner = res.data.banner;
    return { banner, nuestrosEncuentos, ultimoEncuento };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";

#suscripcion {
  background-color: $color-primary;
  color: $color-font-primary;
}

.encuentro {
  cursor: pointer;
}
figure {
  width: 100%;
  overflow: hidden;
  padding-bottom: 50%;
  height: 0;
  margin: 0;
}
figure img {
  display: block;
  width: 100%;
}
</style>