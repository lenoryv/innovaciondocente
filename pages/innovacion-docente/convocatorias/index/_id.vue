<template>
  <div>
    <div class="alert alert-success"
         v-if="canPostulate">
      <a :href="data.postulaciones.url"
         class="alert-link">
        <i class="fas fa-calendar-alt"></i>
        Postula hasta el
        <b>{{data.postulaciones.fecha | date}}</b>
      </a>
    </div>
    <div class="embed-container">
      <embed name="plugin"
             id="plugin"
             :src="data.url"
             type="application/pdf"
             internalinstanceid="423">
    </div>
    <div class="container">
      <pre>
        {{data}}
      </pre>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    let { data } = await axios.get(
      `https://innovaciondocente-utpl.firebaseio.com/innovacion-docente/convocatorias/${
        params.id
      }.json`
    );
    // validate date
    let fecha_postulacion = new Date(data.postulaciones.fecha);
    let canPostulate = fecha_postulacion.getTime() >= new Date().getTime();
    return { data, canPostulate };
  },
  head() {
    return {
      title: this.data.fecha
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/alert";
</style>

