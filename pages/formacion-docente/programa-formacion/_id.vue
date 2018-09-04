<template>
  <section>
    <div class="container">
      <div class="alert alert-success"
           v-if="canPostulate">
        <i class="fas fa-calendar-alt"></i>
        Postula hasta el
        <b>{{data.postulacion.fecha | date}}</b>
      </div>
      <div class="alert alert-danger"
           v-else>
        Las postulaciones para este curso han finalizado
      </div>
      <h1>{{ data.nombre }}</h1>
      <hr>
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <img v-lazy="data.img"
               alt="Imagen Curso">
          <a target="_blank"
             rel="noopener"
             class="btn btn-outline-primary btn-large"
             v-if="canPostulate"
             :href="data.postulacion.link">
            Postular
          </a>
          <a target="_blank"
             rel="noopener"
             class="btn btn-large"
             v-bind:class="[
                {'btn-outline-primary':data.urlContenido},
                {'btn-danger disabled':!data.urlContenido}
              ]"
             :href="data.urlContenido">
            <i class="fas fa-file-pdf"></i>
            Contenido
          </a>
          <button @click="$router.go(-1)"
                  class="btn btn-primary btn-large">Regresar</button>
        </div>
        <!--split-->
        <div class="col-lg-9 col-md-8">
          <p>
            {{ data.description}}
          </p>
          <!---->
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
          <!---->
          <p>
            <b>Fecha:</b>
            {{ data.fecha | date}}
          </p>
          <!---->
          <p v-if="data.duracion">
            <b>Duración: </b>
            <ul>
              <li v-if="data.duracion.horas">{{ data.duracion.horas }} Horas</li>
              <li v-if="data.duracion.dias">{{ data.duracion.dias }} Días</li>
              <li v-if="data.duracion.semanas">{{ data.duracion.semanas }} Semanas</li>
            </ul>
          </p>
          <!---->
          <p>
            <b>Módulo:</b>
            {{data.modulo}}
          </p>
          <!---->
          <p>
            <b>Lugar:</b>
            {{data.lugar}}
          </p>
          <!---->
          <p>
            <b>Horario:</b>
            {{data.horario}}
          </p>
          <!---->
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
    // validate date
    let fecha_postulacion = new Date(data.postulacion);
    let canPostulate = fecha_postulacion.getTime() > new Date().getTime();
    return { data, canPostulate };
  },
  head() {
    return {
      title: this.data.nombre + " | Proyecto Ascendere",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.data.description
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "assets/alert";
</style>
