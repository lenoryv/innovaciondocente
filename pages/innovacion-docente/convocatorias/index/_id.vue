<template>
  <div>
        <div class="embed-container">
            <embed name="plugin" id="plugin" :src="pdf.url" type="application/pdf" internalinstanceid="423">
        </div> 
    </div>
</template>
 
<script>
import pdfs from "@/static/data/convocatorias.json";
export default {
  asyncData({ params }) {
      let pdf = "";
      for (let i = 0; i < pdfs.length; i++)
      if (pdfs[i].id == params.id) {
        pdf = pdfs[i];
        break;
      }
    return { pdf };
  },
  validate({ params }) {
    for (let i = 0; i < pdfs.length; i++)
      if (pdfs[i].id == params.id) {
        return true;
      }
    return false;
  }
};
</script>

