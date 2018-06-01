<template>
    <div>
        <img v-lazy="banner"
             alt="banner-formacion-docente">
        <section>
            <div class="container">
                <h1>Programa de Formación Docente</h1>
                <p>
                    “El Programa de Formación Docente de la universidad está orientado de forma prioritaria a facilitar y
                    apoyar a nuestros docentes al desarrollo de sus necesidades de tipo formativo, dotándoles
                    de las estrategias y recursos necesarios para desarrollar una serie de nuevas competencias
                    profesionales. Por este motivo es preciso reflexionar sobre las nuevas exigencias
                    profesionales y apoyar el desarrollo de dichas competencias desde la formación del
                    profesorado y desde el enfoque de nuestra universidad.”
                </p>
                <h2>Cursos Actuales</h2>
                <div class="row">
                    <nuxt-link class="col-lg-6"
                               v-for="(curso, i) in cursos"
                               :key="i"
                               :to="{name: 'formacion-docente-programa-formacion-id', params: {id: i}}"
                               tag="div">
                        <div class="card card__one link">
                            <figure class="card__img">
                                <img v-lazy="require('@/static/img/' + curso.poster)"
                                     alt="imagen curso">
                            </figure>
                            <div class="card__desc">
                                <h4>{{curso.nombre}}</h4>
                                <small>{{curso.anio}} - {{curso.mes}} - {{curso.dia}}</small>
                            </div>
                        </div>
                    </nuxt-link>
                </div>
                <nuxt-link class="btn btn-primary btn-large"
                           :to="{name: 'formacion-docente-programa-formacion-cursos-id'}">
                    Portafolio de Cursos
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
                        <h3>{{video.title}}</h3>
                        <div class="embed-container">
                            <iframe :src="video.vid"
                                    frameborder="0"
                                    allow="encrypted-media"
                                    title="video"
                                    allowfullscreen></iframe>
                        </div>
                        <p>{{video.desc|slice(0,250)}}</p>
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
                            integrados por itinerarios. En esta estructura se reflejen las líneas de
                            capacitación de toda la comunidad universitaria. De acuerdo a los ejes formativos:
                            académia e investigación, e identidad y excelencia, se podrán ordenar el
                            tipo de capacitación requerida por módulos e itinerarios, garantizando que
                            el alcance de una formación, cumpla los objetivos deseados.
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
    let res = await axios.get(
      "https://innovaciondocente-utpl.firebaseio.com/formacion-docente/programa-formacion.json"
    );
    let video = res.data.videos[0];
    let banner = res.data.banner;
    let cursos = res.data.cursos.slice(0, 4);

    return { video, banner, cursos };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
@import "assets/card";

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