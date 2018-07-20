<template>
  <div>
    <section class="container">
      <h1>¡Proyectos actuales!</h1>
    </section>
    <div class="container-fluid">
      <div class="row">
        <div v-for="(video, key) in proyectos"
             :key="key"
             class="col-xl-4 col-md-6">
          <div class="card card__one link">
            <figure class="card__img">
              <div class="embed-container">
                <iframe :src="video.data.vid"
                        frameborder="0"
                        title="video"
                        allow="autoplay; encrypted-media"
                        allowfullscreen></iframe>
              </div>
            </figure>
            <div class="card__desc">
              <h3>{{video.data.title}}</h3>
              <p>{{video.data.desc}}</p>
            </div>
          </div>
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
      "https://innovaciondocente-utpl.firebaseio.com/innovacion-docente/proyectos-actuales.json"
    );
    const description =
      "Estos proyectos tienen la duración de dos ciclos académicos, su implementación y elaboración de informes debe ser según el plazo establecido por la Dirección de Formación, Innovación y Evaluación Docente. ";
    return { data, description };
  },
  computed:{
    proyectos() {
      // TODO: sort by date
      let proyecto = [];
      for (const key in this.data) {
        proyecto.push({key:key, data:this.data[key] });
      }
      proyecto.sort(function(a, b) {
        return ("" + b.key).localeCompare(a.key);
      });
      return proyecto;
    }
  },
  head() {
    return {
      title: "Proyectos Actuales | Proyecto Ascendere",
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
section{
  padding-bottom: 0;
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
.card__one{
  p{
    height: 130px !important;
      overflow-x: scroll !important;
  }

}


</style>
