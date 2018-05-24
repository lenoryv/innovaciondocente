<template>
    <div>
        <h2>Año {{jornada.year}}</h2>
        <div v-html="jornada.html"></div>
    </div>
</template>

<script>
import jornadas from "@/static/data/jornadas.json";
export default {
  asyncData({ params }) {
    let jornada = null;
    for (let i = 0; i < jornadas.length; i++)
      if (jornadas[i].year == params.id) {
        jornada = jornadas[i];
        break;
      }
    return { jornada };
  },
  validate({ params }) {
    for (let i = 0; i < jornadas.length; i++)
      if (jornadas[i].year == params.id) return true;
    return false;
  }
};
</script>