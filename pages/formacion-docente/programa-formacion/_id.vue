<template>
  <section>
    <div class="container">
      <div class="alert alert-danger"
           v-if="!data.postulacion">
        <!--TODO: validate fin postulacion-->
        Este curso ha finalizado
      </div>
      <div class="alert alert-success"
           v-else>
        <i class="fas fa-calendar-alt"></i>
        Postula hasta el
        <b>{{data.postulacion | date}}</b>
      </div>
      <h1>{{ data.nombre }}</h1>
      <hr>
      <div class="row">
        <div class="col-md-3">
          <img v-lazy="data.img"
               alt="Imagen Curso">
          <a target="_blank"
             rel="noopener"
             class="btn btn-large"
             v-bind:class="[
                {'btn-outline-primary':data.urlContenido},
                {'btn-danger disabled':!data.urlContenido}
              ]"
             :href="data.urlContenido">
            <!--TODO: add if data.postulacion-->
            <i class="fas fa-file-pdf"></i>
            Contenido
          </a>
          <a target="_blank"
             rel="noopener"
             class="btn btn-large"
             v-bind:class="[
                {'btn-outline-primary':data.link_postulacion},
                {'btn-danger disabled':!data.link_postulacion}
              ]"
             :href="data.link_postulacion">
            <!--TODO: add if data.postulacion-->
            Postular
          </a>
          <button @click="$router.go(-1)"
                  class="btn btn-primary btn-large">Regresar</button>
        </div>
        <div class="col-md-9">
          <span v-if="data.instructores">
            <b>Instructor:</b>
            <ul>
              <li v-for="(instructor, i) in data.instructores"
                  :key="i">
                {{instructor.nombre}}
                <small v-if="instructor.small">({{instructor.small}})</small>
              </li>
            </ul>
          </span>
          <p>
            <b>Fecha:</b>
            {{ data.fecha | date}}
          </p>
          <p>
            <b>Duración:</b>
            {{ data.duracionSemanas }} Semanas - {{ data.duracionHoras }} Horas
          </p>
          <p>
            <b>Módulo:</b>
            {{data.modulo}}
          </p>
          <p>
            <b>Horario:</b>
            {{data.horario}}
          </p>
          <p v-if="data.dirigido">
            <b>Dirigido:</b> {{data.dirigido}}</p>
          <span v-if="data.finalidades">
            <b>Finalidades:</b>
            <ul>
              <li v-for="(finalidad, i) in data.finalidades"
                  :key="i">
                {{finalidad.nombre}}
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    let { data } = await axios.get(
      `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/programa-formacion/cursos/${
        params.id
      }.json`
    );
    return { data };
  },
  head() {
    return {
      title: this.data.nombre + " | Innovación Docente",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.data.finalidad
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
