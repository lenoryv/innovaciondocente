<template>
  <div>
    <div class="card-5"
         v-for="(repositorio, key) in practicas"
         v-if="practicas"
         :key="key">
      <img class="photo"
           :src="repositorio.data.img">
      <div class="description">
        <h3>{{repositorio.data.titulo}}</h3>
        <h4>{{repositorio.data.titulacion}}</h4>
        <div class="border"></div>
        <div class="summary">
          <p>Docentes: </p>
          <ul>
            <!--v-for="(nombre,i)in datos.docentes" :key="i"-->
            <li v-for="(nombre,key) in repositorio.data.docentes"
                :key="key">{{nombre}}</li>
          </ul>
        </div>
        <a target="_blank"
           :href="repositorio.data.url">
          <i class="fas fa-file-pdf fa-2x"></i>
        </a>
        <a target="_blank"
           :href="repositorio.data.infografia">
          <i class="fas fa-file-alt fa-2x"></i>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    let { data } = await axios.get(
      `https://innovaciondocente-utpl.firebaseio.com/innovacion-docente/buenas-practicas/${
        params.id
      }.json`
    );
    return { data };
  },
  computed: {
    practicas() {
      // TODO: sort by date
      let practicas = [];
      for (const key in this.data.repositorio) {
        practicas.push({ key: key, data: this.data.repositorio[key] });
      }
      practicas.sort(function(a, b) {
        return ("" + b.key).localeCompare(a.key);
      });
      return practicas;
    }
  },
  head() {
    return {
      title: this.data.titulo + " | Proyecto Ascendere",
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/card";
</style>