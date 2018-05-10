<template>
  <div class="container">
      <h1>Programa de Formación Docente {{$route.params.id}}</h1>
      <div class="embed-container">
        <embed name="plugin" id="plugin" src="https://innovaciondocente.utpl.edu.ec/sites/default/files/files/Instructivo_validacio%CC%81n_formacio%CC%81n_SIAC(1).pdf" type="application/pdf" internalinstanceid="423">
      </div>
  </div>
</template>

<script>
import programaFormacion from "@/static/data/programa-formacion.json";

export default {
  asyncData({ params }) {
    return { programaFormacion };
  },
  validate({ params }) {
    // validate document if exists
    for (let i = 0; i < programaFormacion.length; i++)
      if (programaFormacion[i].id == params.id) return true;
    return false;
  }
};
</script>


<style lang="scss" scoped>
.embed-container {
  position: relative;
  padding-bottom: 100%;
  height: 0;
  overflow: hidden;
}
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
