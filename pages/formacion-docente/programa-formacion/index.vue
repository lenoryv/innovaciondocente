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
    <section>
      <div class="container">
        <h2>Cursos Actuales</h2>
        <div class="row">
          <nuxt-link class="col-md-4 col-sm-6"
                     v-for="curso in cursos"
                     :key="curso.key"
                     :to="{name: 'formacion-docente-programa-formacion-id', params: {id: curso.key}}"
                     tag="div">
            <div class="card card__one link">
              <figure class="card__img">
                <img v-lazy="curso.data.img"
                     alt="imagen curso">
              </figure>
              <div class="card__desc">
                <h4>{{curso.data.nombre}}</h4>
                <small>
                  <i class="fas fa-calendar-alt"></i> {{curso.data.fecha}}</small>
              </div>
            </div>
          </nuxt-link>
        </div>
        <nuxt-link class="btn btn-primary btn-large"
                   :to="{name: 'formacion-docente-programa-formacion-cursos'}">
          <i class="fas fa-folder"></i> Portafolio de Cursos
        </nuxt-link>
      </div>
    </section>
    <section id="video">
      <div class="container">
        <h2>Tips de Expertos</h2>
        <div class="row">
          <div class="col-xl-7 col-lg-8">
            <h3>#InnovaciónenlaUTPL</h3>
            <div class="embed-container">
              <iframe src="https://www.youtube.com/embed/Fo6uuUi86F4"
                      frameborder="0"
                      allow="encrypted-media"
                      title="video"
                      allowfullscreen></iframe>
            </div>
            <a target="_blank"
               rel="noopener"
               class="btn btn-inverse btn-large"
               href="https://www.youtube.com/channel/UCzRd2Y87-NJnVliV8B6e_Xg">
              Innovación Docente en YouTube
            </a>
          </div>
          <div class="col-xl-5 col-lg-4">
            <h3>{{video.nombre}}</h3>
            <div class="embed-container">
              <iframe :src="video.link"
                      frameborder="0"
                      allow="encrypted-media"
                      title="video"
                      allowfullscreen></iframe>
            </div>
            <p>{{video.descripcion|slice(0,250)}}</p>
            <router-link class="btn btn-inverse btn-large"
                         :to="{name: 'formacion-docente-programa-formacion-potencia-informacion'}">
              Tips de expertos
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3>
              <i class="fas fa-file-pdf"></i>
              Calendario Anual
            </h3>
            <p>
              El Programa de Formación se desarrolla por medio de la articulación de varios módulos, los cuales están
              integrados por itinerarios. En esta estructura se reflejen las líneas de capacitación de
              toda la comunidad universitaria. De acuerdo a los ejes formativos: académia e investigación,
              e identidad y excelencia, se podrán ordenar el tipo de capacitación requerida por módulos
              e itinerarios, garantizando que el alcance de una formación, cumpla los objetivos deseados.
            </p>
            <a class="btn btn-outline-primary btn-large"
               href="https://innovaciondocente.utpl.edu.ec/sites/default/files/files/Resumen%20del%20programa%20de%20formacio%CC%81n%202018%20(FINAL)%20(1).pdf"

               rel="noopener"
               target="_blank">
              Programa de Formación Docente
            </a>
          </div>
          <div class="col-md-6">
            <h3>
              <i class="fas fa-file-pdf"></i>
              Valida tu formación Docente - Pedagógica
            </h3>
            <p>
              Intructivo para validar tus cursos del Programa de Formación Docente Pedagógica en el Sistema de Información
              Académica Científica (SIAC)
            </p>
            <a class="btn btn-outline-primary btn-large"
               href="https://innovaciondocente.utpl.edu.ec/sites/default/files/files/Instructivo_validacio%CC%81n_formacio%CC%81n_SIAC(1).pdf"

               target="_blank"
               rel="noopener">
              Intructivo para validar tus cursos</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData() {
    let cursosRes = await axios.get(
      `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/programa-formacion/cursos.json?orderBy=%22$key%22&limitToLast=4`
    );
    let bannerRes = await axios.get(
      `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/programa-formacion/banner.json`
    );
    const title = "Programa de Formación Docente";
    const description = "El Programa de Formación Docente de la universidad está orientado de forma prioritaria a facilitar y apoyar a nuestros docentes al desarrollo de sus necesidades de tipo formativo, dotándoles de las estrategias y recursos necesarios para desarrollar una serie de nuevas competencias profesionales. Por este motivo es preciso reflexionar sobre las nuevas exigencias profesionales y apoyar el desarrollo de dichas competencias desde la formación del profesorado y desde el enfoque de nuestra universidad."
    let videoRes = await axios.get(
      `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/programa-formacion/videos.json?orderBy=%22$key%22&limitToLast=1`
    );

    return {
      cursosRes,
      bannerRes,
      videoRes,
      title,
      description
    };
  },
  computed: {
    video() {
      // TODO: fix return unique video
      for (const key in this.videoRes.data) {
        return this.videoRes.data[key];
      }
    },
    banner() {
      return this.bannerRes.data;
    },
    cursos() {
      // TODO: sort cursos
      let res = [];
      for (const key in this.cursosRes.data) {
        res.push({ key: key, data: this.cursosRes.data[key] });
      }
      return res;
    }
  },
  head() {
    return {
      title: this.title + " | Innovación Docente",
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
@import "assets/card";
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
      letter-spacing: 0.5em;
    }
  }
}

h2 {
  text-align: center;
}

#video {
  background-color: $color-primary;
  color: $color-font-primary;
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
