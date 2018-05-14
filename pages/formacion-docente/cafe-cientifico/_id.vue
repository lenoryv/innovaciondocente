<template>
<div class="container">
  <img :src="require('@/static/img/' + encuentro.img)" :alt="encuentro.img">
  <h1>{{encuentro.tema}}</h1>
  <small>{{encuentro.fecha}}</small>
  <hr>
  <p>{{encuentro.desc}}</p>
  <h2>Invitados</h2>
  <div class="row">
    <div class="col-md-6" v-for="(invitado, index) in encuentro.invitados" :key="index">
      <strong>{{invitado.name}}: </strong><br>{{invitado.desc}}
    </div>
  </div>
  <button @click="$router.go(-1)">Regresar</button>
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