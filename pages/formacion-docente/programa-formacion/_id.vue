<template>
  <section>
    <div class="container">
      <div class="alert alert-danger"
           v-if="!curso.fin_postulacion">
        Este curso ha finalizado
      </div>
      <div class="alert alert-success"
           v-if="curso.fin_postulacion">
        <i class="fas fa-calendar-alt"></i>
        {{curso.fin_postulacion}}
      </div>
      <h1>{{ curso.nombre }}</h1>
      <small v-if="curso.fecha">Fecha: {{ curso.fecha }}</small>
      <hr>
      <div class="row">
        <div class="col-lg-4">
          <img v-if="curso.poster"
               v-lazy="require('@/static/img/' + curso.poster)"
               alt="Imagen Curso">
          <a target="_blank"
             rel="noopener"
             class="btn btn-large"
             v-bind:class="[
                {'btn-outline-primary':curso.descarga},
                {'btn-danger disabled':!curso.descarga}
              ]"
             :href="curso.descarga">
            <i class="fas fa-file-pdf"></i>
            Contenidos del curso
          </a>
          <a target="_blank"
             rel="noopener"
             class="btn btn-large"
             v-bind:class="[
                {'btn-outline-primary':curso.descarga},
                {'btn-danger disabled':!curso.descarga}
              ]"
             :href="curso.url_postulacion">Postular</a>
          <button @click="$router.go(-1)"
                  class="btn btn-primary btn-large">Regresar</button>
        </div>
        <div class="col-lg-8">
          <p v-if="curso.instructor">
            <b>Instructores:</b> {{ curso.instructor }}</p>
          <p v-if="curso.duracion">
            <b>Duración:</b> {{ curso.duracion }}</p>
          <p v-if="curso.modulo">
            <b>Módulo:</b> {{curso.modulo}}</p>
          <p v-if="curso.dirigido">
            <b>Dirigido:</b> {{curso.dirigido}}</p>
          <p v-if="curso.finalidad">
            <b>Finalidades la Formación:</b> {{curso.finalidad}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    let curso = null;
    let res = await axios.get(
      `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/programa-formacion/cursos/${
        params.id
      }.json`
    );
    curso = res.data;
    return { curso };
  },
  head() {
    return {
      title: this.curso.nombre + " | Innovación Docente",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.curso.finalidad
        }
      ]
    };
  }
  // TODO: validate param
};
</script>

<style lang="scss">
@import "assets/alert";
</style>
