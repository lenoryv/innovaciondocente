<template>
<div>
  <img :src="require('@/static/img/banner-cafe-cientifico.png')" alt="banner-cafe-cientifico">
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <img :src="require('@/static/img/' + ultimoEncuento.img)" :alt="ultimoEncuento.img">
          <h2>Invitados</h2>
          <ul>
            <li v-for="(invitado, index) in ultimoEncuento.invitados" :key="index">{{ invitado.name }}</li>
          </ul>
        </div>
        <div class="col-md-8">
          <h1>{{ultimoEncuento.tema}}</h1>
          <small>{{ultimoEncuento.fecha}}</small>
          <p>{{ultimoEncuento.desc}}</p>
          <nuxt-link :to="{name: 'formacion-docente-cafe-cientifico-id', params: {id: ultimoEncuento.id}}">Leer mas</nuxt-link>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container-fluid">
      <h2>Nuestros Encuentros</h2>
      <div class="row">
        <nuxt-link class="col-lg-3 col-sm-6 encuentro" v-for="(encuentro, i) in nuestrosEncuentos" :key="i"
        :to="{name: 'formacion-docente-cafe-cientifico-id', params: {id: encuentro.id}}" tag="div">
          <img :src="require('@/static/img/' + encuentro.img)" :alt="encuentro.img">
          <h4>{{encuentro.tema}}</h4>
        </nuxt-link>
      </div>
    </div>
  </section>
  <section id="suscripcion">
    <div class="container">
      <h2>Suscribete a nuestro Café científico</h2>
      <p>
      Encuentro Café Científico es un evento en el que expertos y profesionales en diferentes campos, dialogan y problematizan sobre un tema actual de una forma diferente e informal. Su finalidad de escuchar opiniones diversas y realizar algunos postulados que contribuyan al trabajo posterior y que ayuden a fomentar inquietudes que despierten una entretenida discusión.
      </p>
      <nuxt-link tag="button" :to="{name: 'formacion-docente-cafe-cientifico-suscripcion'}">Suscribirse</nuxt-link>
    </div>
  </section>
</div>
</template>

<script>
import encuentros from "@/static/data/encuentros.json";
export default {
  asyncData({ params }) {
    let ultimoEncuento = encuentros[0];
    let nuestrosEncuentos = encuentros.slice(0, 4);
    return { nuestrosEncuentos, ultimoEncuento };
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
</style>