<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <nuxt-link class="btn btn-outline-dark btn-large"
                     :to="{name: 'formacion-docente-jornadas-de-reflexion-jornadas-anteriores'}">
            JORNADAS DE REFLEXIÓN
          </nuxt-link>
          <nuxt-link class="btn btn-outline-dark btn-large"
                     :to="{name: 'formacion-docente-jornadas-de-reflexion-jornadas-anteriores-id', params: {id:2018}}">
            Jornada 2018
          </nuxt-link>
          <nuxt-link class="btn btn-outline-dark btn-large"
                     :to="{name: 'formacion-docente-jornadas-de-reflexion-jornadas-anteriores-id', params: {id:2016}}">
            Jornada 2016
          </nuxt-link>
          <nuxt-link class="btn btn-primary btn-large"
                     :to="{name: 'formacion-docente-jornadas-de-reflexion'}">
            Jornada Actual
          </nuxt-link>
        </div>
        <div class="col-md-9">
          <nuxt-child />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "assets/variables";
@import "assets/button";

.nuxt-link-exact-active {
  color: $color-font-primary !important;
  background-color: $color-dark !important;
  border-color: $color-dark !important;
  &:hover {
    opacity: 0.8;
    transition: 0.2s all ease;
  }
}
</style>
