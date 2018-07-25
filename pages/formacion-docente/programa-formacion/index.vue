<template>
  <div>
    <header class="parallax"
            :style="'background-image: url('+banner+');'">
      <div class="header-content">
        <h1>
          {{title}}
        </h1>
        <p class="container">
          {{description}}
        </p>
      </div>
    </header>
    <!--Cursos section-->
    <Cursos></Cursos>
    <!--Videos section-->
    <Videos></Videos>
    <!--PDF sections-->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3>
              Válida tu formación Docente - Pedagógica
            </h3>
            <p>
              Intructivo para validar tus cursos del Programa de Formación Docente - Pedagógica en el Sistema de Información
              Académica Científica (SIAC)
            </p>
            <a class="btn btn-outline-primary btn-large"
               target="_blank"
               rel="noopener"
               href="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/formacion-docente%2Fprograma-formacion%2Fprograma-formacion%2FInstructivo_validacio%CC%81n_formacio%CC%81n_SIAC(1).pdf?alt=media&token=816f02a3-4f2d-4b54-9bca-6b8005614b68">
              <i class="fas fa-file-pdf"></i>
              Descargar intructivo</a>
          </div>
          <div class="col-md-6">
            <h3>
              Cursos Específicos
            </h3>
            <p>
              Pasos a seguir para presentar solicitudes en la realización de Cursos Específicos y Emisión de certificados.
            </p>
            <nuxt-link :to="{name: 'formacion-docente-programa-formacion-cursos-especificos'}"
                       class="btn btn-outline-primary btn-large">
              Ver Más...
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Cursos from "@/components/formacion-docente/Cursos";
import Videos from "@/components/formacion-docente/Videos";
export default {
  async asyncData() {
    let { data } = await axios.get(
      `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/programa-formacion/banner.json`
    );
    const title = "Programa de Formación Docente";
    const description =
      "El Programa de Formación Docente de la universidad está orientado de forma prioritaria a facilitar y apoyar a nuestros docentes al desarrollo de sus necesidades de tipo formativo, dotándoles de las estrategias y recursos necesarios para desarrollar una serie de nuevas competencias profesionales. Por este motivo es preciso reflexionar sobre las nuevas exigencias profesionales y apoyar el desarrollo de dichas competencias desde la formación del profesorado y desde el enfoque de nuestra universidad.";
    return {
      banner: data,
      title,
      description
    };
  },
  components: {
    Cursos,
    Videos
  },
  head() {
    return {
      title: this.title + " | Proyecto Ascendere",
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

<style lang="scss" scoped>
@import "assets/variables";
header {
  height: 100vh;
  width: 100%;
  display: flex;
}

.header-content {
  text-align: center;
  h1 {
    color: $color-font-primary;
    font-weight: 400;
  }
  margin: auto;
  p {
    text-align: center;
    color: $color-font-primary;
  }
}
@media screen and (min-width: 768px) {
  .header-content {
    text-align: center;
    h1 {
      font-size: 300%;
      letter-spacing: 0.3em;
    }
  }
}
</style>
