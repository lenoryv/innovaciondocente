<template>
  <div class="container-fluid">
    <h1>Portafolio de Cursos</h1>
    <div class="container">
      <div class="row">
        <nuxt-link v-for="(curso, i) in cursos"
                   :key="i"
                   class="col-xl-4 col-md-6 curso"
                   :to="{name: 'formacion-docente-programa-formacion-id', params: {id: i}}"
                   tag="div">
          <div class="card card__one link">
            <figure class="card__img">
              <img :src="require('@/static/img/' + curso.poster)"
                   :alt="curso.img">
            </figure>
            <div class="card__desc">
              <h4>{{curso.nombre}}</h4>
              <small>{{curso.fecha}}</small>
            </div>
          </div>
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
@import "assets/button";
@import "assets/card";
</style>