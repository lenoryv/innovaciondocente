<template>
  <div>
    <div class="embed-container">
      <embed name="plugin"
             id="plugin"
             :src="data.url"
             type="application/pdf"
             internalinstanceid="423">
    </div>
  </div>
</template>
 
<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    let { data } = await axios.get(
      `https://innovaciondocente-utpl.firebaseio.com/innovacion-docente/convocatorias/${params.id}.json` 
    );
    return { data };
  }
};
</script>

