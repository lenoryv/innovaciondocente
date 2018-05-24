<template>
  <div class="container-fluid">
    <h1>Cursos</h1>
    <div v-for="(anio, i) in cursos"
         :key="i">
      <div v-for="(month, j) in anio.months"
           :key="j">
        <div class="container">
          <h2>{{month.month}} de {{anio.year}}</h2>
          <div class="row">
            <nuxt-link v-for="(curso, k) in month.cursos"
                       :key="k"
                       class="col-lg-4 col-md-6 curso"
                       :to="{name: 'formacion-docente-programa-formacion-id', params: {id: curso.id}}"
                       tag="div">
              <img :src="require('@/static/img/' + curso.poster)"
                   :alt="curso.img">
              <h4>{{curso.nombre}}</h4>
              <small>{{curso.fecha}}</small>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <button @click="$router.go(-1)"
            class="btn btn-primary btn-large">Regresar</button>
  </div>
</template>

<script>
import cursos from "@/static/data/cursos.json";

export default {
  asyncData({ params }) {
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