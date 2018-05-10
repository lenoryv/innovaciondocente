<template>
  <div>
      <h2>¡Potencia tu formación docente!</h2>
      <p>
          Mes a mes, el Plan de Formación Docente Pedagógica ofrece cursos al profesorado de la UTPL para la mejora de su formación académica. Te presentamos los testimonios de los expertos que han visitado el Campus UTPL para trabajar en temáticas que benefician la preparación de los docentes.
      </p>
      <div v-for="(curso, index) in cursos" :key="index">
          <h3>{{curso.title}}</h3>
          <p>{{curso.desc}}</p>
          <div class="embed-container">
            <iframe :src="curso.vid" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          <hr>
      </div>
  </div>
</template>

<script>
import cursos from "@/static/data/potencia-informacion.json";

export default {
  asyncData ({ params }) {
    return { cursos };
  }
};
</script>

<style lang="scss" scoped>
p {
  text-align: justify;
}
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}
.embed-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
