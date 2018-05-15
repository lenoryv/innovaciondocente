<template>
<div>
  <div class="container">
    <h1>¡Potencia tu formación docente!</h1>
    <p>
      Mes a mes, el Plan de Formación Docente Pedagógica ofrece cursos al profesorado de la UTPL para la mejora de su formación académica. Te presentamos los testimonios de los expertos que han visitado el Campus UTPL para trabajar en temáticas que benefician la preparación de los docentes.
    </p>
  </div>
  <div class="container-fluid">
    <div class="card-container">
      <div v-for="(video, index) in videos" :key="index" class="item">
        <div class="embed-container">
          <iframe :src="video.vid" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <h3>{{video.title}}</h3>
        <p>{{video.desc}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import videos from "@/static/data/potencia-informacion.json";

export default {
  asyncData({ params }) {
    return { videos };
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
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 450px);
  grid-gap: 10px;
  justify-content: center;
}
.item {
  border-radius: 5px;
  padding: 10px;
  grid-row-end: span 6;
}
</style>
