<template>
  <div class="container">
    <figure>
      <img v-lazy="require('@/static/img/' + encuentro.img)"
           :alt="encuentro.img">
    </figure>
    <h1>{{encuentro.tema}}</h1>
    <small>{{encuentro.fecha}}</small>
    <hr>
    <p>{{encuentro.desc}}</p>
    <h2>Invitados</h2>
    <div class="row">
      <div class="col-md-6"
           v-for="(invitado, index) in encuentro.invitados"
           :key="index">
        <strong>{{invitado.name}}: </strong>
        <p>{{invitado.desc}}</p>
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
  validate({ params }) {
    // TODO: validate param
    return true;
  }
};
</script>

<style lang="scss" scoped>
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
