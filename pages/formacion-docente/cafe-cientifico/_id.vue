<template>
  <div>
    <header>
      <div class="fondo">
        <img class="img-move"
             v-lazy="require('@/static/img/' + encuentro.img)"
             :alt="encuentro.img">
      </div>
    </header>
    <div class="container">
      <h1>{{encuentro.tema}}</h1>
      <small>
        <i class="fas fa-calendar-alt"></i> {{encuentro.fecha}}</small>
      <hr>
      <p>{{encuentro.desc}}</p>
      <h2>
        <i class="fas fa-users"></i> Invitados</h2>
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  // TODO: add paralax https://codepen.io/z-/pen/VLaxzx
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
@import "assets/variables";
header {
  object-fit: cover;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  color: $color-secondary;
  text-align: center;
}
.fondo {
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  position: absolute;
  z-index: -2;
}

.testing {
  width: 500px;
  height: 400px;
  background-size: cover;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.6)
    ),
    url("https://download.unsplash.com/photo-1428604467652-115d9d71a7f1");
  position: relative;
}

.testing p {
  font-size: 24px;
  color: #fff;
  text-transform: uppercase;
  font-family: sans-serif;
  position: absolute;
  bottom: 10px;
  left: 25px;
}
</style>
