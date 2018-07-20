<template>
  <div class="container">
    <div class="embed-container">
      <embed name="plugin"
             id="plugin"
             :src="convocatorias.data.url"
             type="application/pdf"
             internalinstanceid="423">
    </div>
  </div>
</template>

<style lang="scss">
</style>

<script>
import axios from "axios";
export default {
  async asyncData({ params }) {
    let { data } = await axios.get(
      "https://innovaciondocente-utpl.firebaseio.com/innovacion-docente/convocatorias.json"
    );

    return { data };
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
      return convocatorias[0];
    }
  },
  head() {
    return {
      title: this.convocatorias.data.fecha + " | Proyecto Ascendere",
    };
  }
};
</script>

