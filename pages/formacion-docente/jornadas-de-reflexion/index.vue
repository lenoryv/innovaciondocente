<template>
  <section class="container">
    <div class="row">
      <div class="col-lg-3">
        <FormaJornada></FormaJornada>
        <nuxt-link :to="{name: 'formacion-docente-jornadas-de-reflexion-jornadas-anteriores'}"
                   class="btn btn-large btn-outline-primary btn-sm">
          <i class="fas fa-folder"></i> Portafolio <br> de Jornadas
        </nuxt-link>
      </div>
      <div class="col-lg-8">
        <div v-html="jornada.html"></div>
      </div>
    </div>
  </section>
</template>

<script>
import jornadas from "@/static/data/jornadas.json";
import FormaJornada from "@/components/FormaJornada";
export default {
  asyncData({ params }) {
    let jornada = jornadas[0];
    return { jornada };
  },
  head() {
    return {
      title: "Jornadas de Reflexión | Innovación Docente"
    };
  },
  components: {
    FormaJornada
  }
};
</script>

