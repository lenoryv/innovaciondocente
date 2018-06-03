<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <section class="sticky">
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
        </section>
      </div>
      <section class="col-md-9">
        <nuxt-child />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Jornadas de Reflexión | Innovación Docente",
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Consolidadas como instancias de diálogo, análisis y reflexión, las Jornadas de Reflexión son encuentros
            centrados en temas en los que se conjugan ciencia y filosofía institucional, están dirigidos
            al personal docente y administrativo, contando con una parte académica y otra humanística.`
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
@import "assets/variables";

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 3;
  }
}

section {
  padding-bottom: 0;
}

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
