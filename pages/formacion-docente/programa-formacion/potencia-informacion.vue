<template>
  <div>
    <header>
      <h1>
        {{title}}
      </h1>
    </header>
    <section class="container">
      <h3>¡Potencia tu formación docente!</h3>
      <p>
        {{description}}
      </p>
    </section>
    <div class="container-fluid">
      <div class="row">
        <div v-for="tip in tips"
             :key="tip.id"
             class="col-xl-4 col-md-6">
          <div class="embed-container">
            <iframe :src="'https://www.youtube.com/embed/'+tip.id"
                    frameborder="0"
                    title="tip"
                    allow="autoplay; encrypted-media"
                    allowfullscreen></iframe>
          </div>
          <h3>{{tip.name}}</h3>
          <p>{{tip.description}}</p>

        </div>
      </div>
      <button @click="$router.go(-1)"
              class="btn btn-outline-primary btn-large btn-sm">Regresar</button>
    </div>
  </div>
</template>

<script>
import { TipsExpertosCollection } from "~/plugins/firebase.js";

export default {
  async asyncData({ params }) {
    let title = "Tips de Expertos";
    let description =
      "Mes a mes, el Plan de Formación Docente Pedagógica ofrece cursos al profesorado de la UTPL para la mejora de su formación académica. Te presentamos los testimonios de los expertos que han visitado el Campus UTPL para trabajar en temáticas que benefician la preparación de los docentes.";
    return { title, description };
  },
  data() {
    return { tips: null };
  },
  async mounted() {
    const tipsSnap = await TipsExpertosCollection.get();
    this.tips = tipsSnap.docs.map(doc =>
      Object.assign({ id: doc.id }, doc.data())
    );
  },
  head() {
    return {
      title: this.title,
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
@import "assets/header";
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
