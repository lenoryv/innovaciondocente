<template>
  <div class="container"
       v-if="data">
    <h1>
      Portafolio de Buenas Prácticas
    </h1>
    <section>
      <h2>Subdivisión por areas</h2>
      <div class="row">
          <div class="col-lg-3">
              <nuxt-link class="btn btn-outline-dark btn-large"
                       :to="{name: 'admin-innovacion-docente-buenas-practicas-index-id',params:{id:'0'}}">A. Biológica</nuxt-link>
          </div>
          <div class="col-lg-3">
              <nuxt-link class="btn btn-outline-dark btn-large"
                       :to="{name: 'admin-innovacion-docente-buenas-practicas-index-id',params:{id:'1'}}">A. Técnica</nuxt-link>
          </div>
          <div class="col-lg-3">
              <nuxt-link class="btn btn-outline-dark btn-large"
                       :to="{name: 'admin-innovacion-docente-buenas-practicas-index-id',params:{id:'2'}}">A. Socio Humanística</nuxt-link>
          </div>
          <div class="col-lg-3">
              <nuxt-link class="btn btn-outline-dark btn-large"
                       :to="{name: 'admin-innovacion-docente-buenas-practicas-index-id',params:{id:'3'}}">A. Administrativa </nuxt-link>
          </div>
      </div>      
            <nuxt-child/>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  layout: "admin",
  data() {
    return {
      data: null
    };
  },
  methods: {
    loadData() {
      axios
        .get(
          `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/cafe-cientifico.json`
        )
        .then(res => (this.data = res.data));
    },
    remove(key) {
      axios
        .delete(
          `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/cafe-cientifico/encuentros/${key}.json`
        )
        .catch(e => alert("No se pudo eliminar"));
      this.data.encuentros[key] = 0;
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>

<style lang="scss" scoped>
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

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid $color-primary;
}
th {
  background-color: $color-primary;
  color: $color-font-primary;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #ddd;
}
</style>