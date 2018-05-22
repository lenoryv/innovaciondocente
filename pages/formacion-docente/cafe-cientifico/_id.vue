<template>
<div class="container">
  <figure>
    <img :src="require('@/static/img/' + encuentro.img)" :alt="encuentro.img">
  </figure>
  <h1>{{encuentro.tema}}</h1>
  <small>{{encuentro.fecha}}</small>
  <hr>
  <p>{{encuentro.desc}}</p>
  <h2>Invitados</h2>
  <div class="row">
    <div class="col-md-6" v-for="(invitado, index) in encuentro.invitados" :key="index">
      <strong>{{invitado.name}}: </strong>
      <p>{{invitado.desc}}</p>
    </div>
  </div>
  <button @click="$router.go(-1)" class="btn btn-large">Regresar</button>
</div>
</template>

<script>
import encuentros from "@/static/data/encuentros.json";
export default {
  asyncData({ params }) {
    let encuentro = null;
    for (let i = 0; i < encuentros.length; i++)
      if (encuentros[i].id == params.id) {
        encuentro = encuentros[i];
        break;
      }
    return { encuentros, encuentro };
  },
  validate({ params }) {
    for (let i = 0; i < encuentros.length; i++)
      if (encuentros[i].id == params.id) {
        return true;
      }
    return false;
  }
};
</script>

<style lang="scss" scoped>
p {
  text-align: justify;
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
