<template>
    <div>
       <div class="card-5" v-for="(repositorio, i) in data.repositorio" :key="i" >
        <img class="photo"
             :src="repositorio.img">
        <div class="description">
          <h3>{{repositorio.titulo}}</h3>
          <h4>{{repositorio.titulacion}}</h4>
          <div class="border"></div>
          <div class="summary">
              <p>Docentes:  </p>
          <ul>
              <!--v-for="(nombre,i)in datos.docentes" :key="i"-->
              <li v-for="(nombre,i) in repositorio.docentes" :key="i">{{nombre}}</li>
          </ul>
          </div>
          <a target="_blank" :href="repositorio.url"><i class="fas fa-file-pdf fa-2x"></i></a>
          <a target="_blank" :href="repositorio.infografia"><i class="fas fa-file-alt fa-2x"></i></a>
        </div>
      </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    let { data } = await axios.get(
      `https://innovaciondocente-utpl.firebaseio.com/innovacion-docente/buenas-practicas/${params.id}.json` 
    );
    return { data };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/card";

</style>