<template>
  <div>
    <header class="parallax"
            :style="'background-image: url('+encuentro.img+');'"></header>
    <section class="container">
      <h1>{{encuentro.nombre}}</h1>
      <small>
        <i class="fas fa-calendar-alt"></i> {{encuentro.fecha | date}}</small>
      <hr>
      <p>{{encuentro.contenido}}</p>
      <h2 v-if="encuentro.invitados">
        <i class="fas fa-users"></i> Invitados
      </h2>
      <div class="row">
        <div class="col-md-6"
             v-for="(invitado, index) in encuentro.invitados"
             :key="index">
          <strong>{{invitado.nombre}}: </strong>
          <p>{{invitado.descripcion}}</p>
        </div>
      </div>
      <div class="row">
        <div :class="[{'col-6': canIncribe}, {'col-12': !canIncribe}]">
          <button @click="$router.go(-1)"
                  class="btn btn-outline-primary btn-large">Regresar</button>
        </div>
        <div class="col-6"
             v-if="canIncribe">
          <nuxt-link class="btn btn-primary btn-large"
                     :to="{name: 'formacion-docente-cafe-cientifico-inscripcion', query: {id: key}}">Incribete</nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData({ params }) {
    let res = await axios.get(
      `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/cafe-cientifico/encuentros/${
        params.id
      }.json`
    );
    // validate date
    let fecha = new Date(res.data.postulacion);
    let canIncribe = fecha.getTime() >= new Date().getTime();
    return { encuentro: res.data, canIncribe, key: params.id };
  },
  head() {
    return {
      title: this.encuentro.nombre + " | Innovación Docente",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.encuentro.contenido
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
@import "assets/parallax";
</style>
