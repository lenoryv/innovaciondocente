<template>
  <div>
      <div v-for="(anio, i) in cursos" :key="i">
        <div v-for="(mes, j) in anio.months" :key="j">
          <h2>Cursos {{mes.month}} - {{anio.year}} </h2>
          <div v-for="(curso, k) in mes.cursos" :key="k">
            <img :src="'/img/' + curso.poster" :alt="curso.poster">
            <h3>{{curso.nombre}}</h3>
            <small>{{curso.fecha}}</small>
            <p>{{curso.finalidad}}</p>
          </div>
        </div>
      </div>
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
