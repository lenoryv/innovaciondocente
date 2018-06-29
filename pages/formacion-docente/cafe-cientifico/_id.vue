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
        <div class="col-6">
          <button @click="$router.go(-1)"
                  class="btn btn-outline-primary btn-large">Regresar</button>
        </div>
        <div class="col-6">
          <button class="btn btn-primary btn-large">Incribete</button>
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

    return { encuentro: res.data };
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
  },
  validate({ params }) {
    // TODO: validate param
    return true;
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
@import "assets/parallax";
</style>
