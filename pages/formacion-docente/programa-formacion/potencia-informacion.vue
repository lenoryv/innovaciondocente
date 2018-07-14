<template>
  <div>
    <section class="container">
      <h1>
        {{title}}
      </h1>
      <h3>¡Potencia tu formación docente!</h3>
      <p>
        {{description}}
      </p>
    </section>
    <div class="container-fluid">
      <div class="row">
        <div v-for="video in videos"
             :key="video.key"
             class="col-xl-4 col-md-6">
          <div class="embed-container">
            <iframe :src="video.data.link"
                    frameborder="0"
                    title="video"
                    allow="autoplay; encrypted-media"
                    allowfullscreen></iframe>
          </div>
          <h3>{{video.data.nombre}}</h3>
          <p>{{video.data.descripcion}}</p>
        </div>
      </div>
      <button @click="$router.go(-1)"
              class="btn btn-outline-primary btn-large btn-sm">Regresar</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    let title = "Tips de Expertos";
    let description =
      "Mes a mes, el Plan de Formación Docente Pedagógica ofrece cursos al profesorado de la UTPL para la mejora de su formación académica. Te presentamos los testimonios de los expertos que han visitado el Campus UTPL para trabajar en temáticas que benefician la preparación de los docentes.";
    // get all vids
    let videos = [];
    let { data } = await axios.get(
      "https://innovaciondocente-utpl.firebaseio.com/formacion-docente/programa-formacion/videos.json"
    );
    for (const key in data) {
      videos.push({ key: key, data: data[key] });
    }
    videos.sort((a, b) => ("" + b.key).localeCompare(a.key));

    return { title, description, videos };
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
