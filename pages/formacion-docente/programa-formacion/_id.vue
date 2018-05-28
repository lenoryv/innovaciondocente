<template>
  <section>
    <div class="container">
      <h1>{{ curso.nombre }}</h1>
      <small v-if="curso.fecha">Fecha: {{ curso.fecha }}</small>
      <hr>
      <div class="row">
        <div class="col-lg-4">
          <img v-if="curso.poster"
               :src="require('@/static/img/' + curso.poster)"
               :alt="curso.poster">
          <a target="_blank"
             class="btn btn-outline-secondary btn-large"
             v-if="curso.descarga"
             :href="curso.descarga">Descarga los contenidos del curso</a>
          <a target="_blank"
             class="btn btn-outline-secondary btn-large"
             v-if="curso.fin_postulacion"
             :href="curso.url_postulacion">{{curso.fin_postulacion}}</a>
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
    let res = await axios.get(
      `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/programa-formacion/cursos/${
        params.id
      }.json`
    );

    return { curso: res.data };
  },
  validate({ params }) {
    return true;
    return false;
  }
};
</script>