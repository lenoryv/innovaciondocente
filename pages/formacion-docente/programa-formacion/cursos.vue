<template>
  <div class="container-fluid">
    <h1>Cursos</h1>
    <div class="container">
      <div class="row">
        <nuxt-link v-for="(curso, i) in cursos"
                   :key="i"
                   class="col-xl-4 col-md-6 curso"
                   :to="{name: 'formacion-docente-programa-formacion-id', params: {id: i}}"
                   tag="div">
          <img :src="require('@/static/img/' + curso.poster)"
               :alt="curso.img">
          <h4>{{curso.nombre}}</h4>
          <small>{{curso.fecha}}</small>
        </nuxt-link>
      </div>
    </div>
    <button @click="$router.go(-1)"
            class="btn btn-primary btn-large">
      Regresar
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async asyncData() {
    let res = await axios.get(
      "https://innovaciondocente-utpl.firebaseio.com/formacion-docente/programa-formacion/cursos.json"
    );
    let cursos = res.data;

    return { cursos };
  }
};
</script>

<style lang="scss" scoped>
.curso {
  cursor: pointer;
}
h4 {
  text-align: justify;
}
</style>