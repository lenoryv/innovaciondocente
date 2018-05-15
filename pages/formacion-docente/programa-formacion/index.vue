<template>
<div>
    <img :src="require('@/static/img/banner-formacion-docente.jpg')" alt="banner-formacion-docente">
    <section>
        <div class="container">
            <h1>Programa de Formación Docente</h1>
            <p>
                “El Programa de Formación  Docente de la universidad está orientado de forma prioritaria a facilitar y apoyar a nuestros docentes al desarrollo de sus necesidades de tipo formativo, dotándoles de las estrategias y recursos necesarios para desarrollar una serie de nuevas competencias profesionales. Por este motivo es preciso reflexionar sobre las nuevas exigencias profesionales y apoyar el desarrollo de dichas competencias desde la formación del profesorado y desde el enfoque de nuestra universidad.” 
            </p>
        </div>
    </section>
    <section id="cursos">
        <div class="container">
            <h2>Cursos</h2>
            <div class="row">
                <nuxt-link class="col-sm-6 curso" v-for="(curso, i) in cursos" :key="i"
                :to="{name: 'formacion-docente-programa-formacion-id', params: {id: curso.id}}" tag="div">
                    <img :src="require('@/static/img/' + curso.poster)" :alt="curso.img">
                    <h4>{{curso.nombre}}</h4>
                    <small>{{curso.fecha}}</small>
                </nuxt-link>
            </div>
            <nuxt-link class="btn" :to="{name: 'formacion-docente-programa-formacion-cursos'}">Formación Docente</nuxt-link>
        </div>
    </section>
    <section id="video">
        <div class="container">
            <h2>Videos</h2>
            <div class="row">
                <div class="col-lg-8">
                    <h2>#InnovaciónenlaUTPL</h2>
                    <div class="embed-container">
                        <iframe src="https://www.youtube.com/embed/Fo6uuUi86F4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                    <a target="_blank" class="btn" href="https://www.youtube.com/channel/UCzRd2Y87-NJnVliV8B6e_Xg">Innovación Docente en YouTube</a>
                </div>
                <div class="col-lg-4">
                    <h2>{{video.title}}</h2>
                    <div class="embed-container">
                        <iframe :src="video.vid" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                    <p>{{video.desc}}</p>
                    <router-link class="btn" :to="{name: 'formacion-docente-programa-formacion-potencia-informacion'}">Ver mas potencia informacion</router-link>
                </div>
            </div>
        </div>
    </section>
    <section id="informacion">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h2>Calendario Anual</h2>
                    <p>
                        El Programa de Formación se desarrolla por medio de la articulación de varios módulos, los cuales están integrados por itinerarios. En esta estructura se reflejen las líneas de capacitación de toda la comunidad universitaria. De acuerdo a los ejes formativos: académia e investigación, e identidad y excelencia, se podrán ordenar el tipo de capacitación requerida por módulos e itinerarios, garantizando que el alcance de una formación, cumpla los objetivos deseados.
                    </p>
                    <a href="https://innovaciondocente.utpl.edu.ec/sites/default/files/files/Resumen%20del%20programa%20de%20formacio%CC%81n%202018%20(FINAL)%20(1).pdf" target="_blank">Programa de Formación Docente 2018</a>
                </div>
                <div class="col-md-6">
                    <h2>Valida tu formación Docente - Pedagógica</h2>
                    <a href="https://innovaciondocente.utpl.edu.ec/sites/default/files/files/Instructivo_validacio%CC%81n_formacio%CC%81n_SIAC(1).pdf" target="_blank">Intructivo para validar tus cursos</a>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import videos from "@/static/data/potencia-informacion.json";
import cursosdata from "@/static/data/cursos.json";
export default {
  asyncData({ params }) {
    let cursos = cursosdata[0].months[0].cursos;
    let video = videos[0];
    return { video, cursos };
  }
};
</script>


<style lang="scss" scoped>
@import "assets/variables";

#cursos {
}

h2 {
  text-align: center;
}

#informacion {
}

#video {
  background-color: $color-primary;
  color: $color-font-primary;
}
p {
  text-align: justify;
}

.btn {
  display: block;
  background-color: $color-font-primary;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  color: $color-primary;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  width: 100% !important;
  text-align: center;

  &:hover {
    opacity: 0.8;
    transition: 0.2s all ease;
  }
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
.curso {
  cursor: pointer;
}
</style>