<template>
  <div class="container">
    <h1>
      Edutendencias
    </h1>
    <section>
      <h2>Subdivisión por Tips</h2>
      <div class="row">
              <nuxt-link class="btn btn-outline-dark btn-large"
                       :to="{name: 'admin-observatorio-edutendencias-edutendencias-tips'}">Nuevo Tip</nuxt-link>

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
