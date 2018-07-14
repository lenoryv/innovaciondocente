<template>
  <div class="container">
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
</style>
