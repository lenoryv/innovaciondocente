<template>
  <div>
    <section class="container">
      <h1>¡Potencia tu formación docente!</h1>
      <p>
        Mes a mes, el Plan de Formación Docente Pedagógica ofrece cursos al profesorado de la UTPL para la mejora
        de su formación académica. Te presentamos los testimonios de los expertos que han visitado el
        Campus UTPL para trabajar en temáticas que benefician la preparación de los docentes.
      </p>
    </section>  
  </div>
</template>

<script>
import proyectos from "@/static/data/proyectos-actuales.json";
export default {
    asyncData({ params }) {
    let proyecto = null;
    for (let i = 0; i < proyectos.length; i++) {
              if (proyectos[i] == params.id)
                proyecto = proyectos[i];
    }
    return { proyecto };
    },
    validate({ params }) {
    for (let i = 0; i < proyectos.length; i++)
          if (proyectos[i] == params.id) return true;
    return false;
  }
};
</script>

<style lang="scss" scoped>
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
