<template>
  <div>
    <div class="container">
      <section>
        <h1>Convocatoria de Proyectos de Innovación Docente</h1>
      </section>
      <div class="row">
        <div class="col-md-3">
          <div class="sticky">
            <nuxt-link class="btn btn-outline-dark btn-large"
                       :to="{name: 'innovacion-docente-convocatorias-index'}">Actual</nuxt-link>
            <div v-for="(convocatoria, key) in convocatorias"
                 v-if="convocatoria"
                 :key="key">
              <nuxt-link class="btn btn-outline-dark btn-large"
                         :to="{name: 'innovacion-docente-convocatorias-index-id',params:{id:convocatoria.key}}">{{convocatoria.data.fecha}}</nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <nuxt-child/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData({ params }) {
    let { data } = await axios.get(
      "https://innovaciondocente-utpl.firebaseio.com/innovacion-docente/convocatorias.json"
    );
    const description =
      "Esta convocatoria es una invitación a todos los docentes de la Universidad para que participen e implementen nuevas estrategias de enseñanza aprendizaje, potenciando el uso creativo de diferentes herramientas dentro y fuera del aula, implicando a los estudiantes activamente en su proceso de aprendizaje, planificando, desarrollando y evaluando las competencias necesarias para contribuir con el perfil de egreso de la titulación.";
    return { data, description };
  },
  computed: {
    convocatorias() {
      let convocatorias = [];
      for (const key in this.data) {
        convocatorias.push({ key: key, data: this.data[key] });
      }
      convocatorias.sort(function(a, b) {
        return ("" + b.key).localeCompare(a.key);
      });
      return convocatorias;
    }
  },
  head() {
    return {
      title: "Convocatorias | Proyecto Ascendere",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "assets/variables";
section{
  padding-bottom: 0;
}
.nuxt-link-exact-active {
  color: $color-font-primary !important;
  background-color: $color-primary !important;
  border-color: $color-dark !important;
  &:hover {
    opacity: 0.8;
    transition: 0.2s all ease;
  }
}
.btn {
  font-size: 12px;
}
@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 3;
  }
}

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
