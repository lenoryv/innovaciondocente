<template>
<div class="container">
  <img v-if="curso.poster" :src="require('@/static/img/' + curso.poster)" :alt="curso.poster">
  <h1>{{ curso.nombre }}</h1>
  <small v-if="curso.fecha">Fecha: {{ curso.fecha }}</small>
  <hr>
  <p v-if="curso.instructor"><b>Instructores:</b> {{ curso.instructor }}</p>
  <p v-if="curso.duracion"><b>Duración:</b> {{ curso.duracion }}</p>
  <p v-if="curso.modulo"><b>Módulo:</b> {{curso.modulo}}</p>
  <p v-if="curso.dirigido"><b>Dirigido:</b> {{curso.dirigido}}</p>
  <p v-if="curso.finalidad"><b>Finalidades la Formación:</b> {{curso.finalidad}}</p>
  <p v-if="curso.descarga"><a target="_blank" :href="curso.descarga">Descarga los contenidos del curso</a></p>
  <p v-if="curso.fin_postulacion"><a target="_blank" :href="curso.url_postulacion">{{curso.fin_postulacion}}</a></p>
  <button @click="$router.go(-1)" class="btn btn-large">Regresar</button>
</div>
</template>

<script>
import cursos from "@/static/data/cursos.json";
export default {
  asyncData({ params }) {
    let curso = null;
    for (let i = 0; i < cursos.length; i++) {
      for (let j = 0; j < cursos[i].months.length; j++) {
        for (let k = 0; k < cursos[i].months[j].cursos.length; k++) {
          if (cursos[i].months[j].cursos[k].id == params.id)
            curso = cursos[i].months[j].cursos[k];
        }
      }
    }
    return { curso };
  },
  validate({ params }) {
    for (let i = 0; i < cursos.length; i++)
      for (let j = 0; j < cursos[i].months.length; j++)
        for (let k = 0; k < cursos[i].months[j].cursos.length; k++)
          if (cursos[i].months[j].cursos[k].id == params.id) return true;
    return false;
  }
};
</script>