<template>
  <div class="container">
    <div class="embed-container">
      <embed name="plugin"
             id="plugin"
             :src="data.url"
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
      "https://innovaciondocente-utpl.firebaseio.com/innovacion-docente/convocatorias.json?orderBy=%22$key%22&limitToFirst=1"
    );
    return { data: data[0] };
  }
};
</script>

