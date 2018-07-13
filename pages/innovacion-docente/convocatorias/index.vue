<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <section class="sticky">
            <!-- <div v-for="(convocatoria, key) in convocatorias"
            v-if="convocatoria"
             :key="key">
             <nuxt-link class="btn btn-outline-dark btn-large" :to="{name: 'innovacion-docente-convocatorias-index-id',params:{id:key}}">{{convocatoria.data.fecha}}</nuxt-link>
            </div>-->
            <nuxt-link class="btn btn-outline-dark btn-large" :to="{name: 'innovacion-docente-convocatorias-index'}">Actual</nuxt-link>
            <nuxt-link class="btn btn-outline-dark btn-large" :to="{name: 'innovacion-docente-convocatorias-index-id',params:{id:'0'}}">Abril-Agosto 2018</nuxt-link>
            <nuxt-link class="btn btn-outline-dark btn-large" :to="{name: 'innovacion-docente-convocatorias-index-id',params:{id:'1'}}">Octubre 2017-Febrero 2018</nuxt-link>
            <nuxt-link class="btn btn-outline-dark btn-large" :to="{name: 'innovacion-docente-convocatorias-index-id',params:{id:'2'}}">Abril-Agosto 2017</nuxt-link>
          </section>
        </div>
        <section class="col-md-9">
          <h1>Convocatoria de Proyectos de Innovación Docente</h1>
          <nuxt-child/>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData({ params }) {
    let { data } = await axios.get(
      "https://innovaciondocente-utpl.firebaseio.com/innovacion-docente/convocatorias.json"
    );
    return { data };
  },
  computed:{
    convocatorias() {
      // TODO: sort by date
      let convocatorias = [];
      for (const key in this.data) {
        convocatorias.push({key:key, data:this.data[key] });
      }
      convocatorias.sort(function(a, b) {
        return ("" + b.key).localeCompare(a.key);
      });
      return convocatorias;
    }
  }
};
</script>



<style lang="scss">
@import "assets/variables";
.nuxt-link-exact-active {
  color: $color-font-primary !important;
  background-color: $color-primary !important;
  border-color: $color-dark !important;
  &:hover {
    opacity: 0.8;
    transition: 0.2s all ease;
  }
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 3;
  }
}


.embed-container {
  position: relative;
  padding-bottom: 100%;
  height: 0;
  overflow: hidden;
}

.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
