<template>
  <section>
    <div class="container-fluid">
      <div class="row">
          <div class="col-lg-4 col-md-6">
            <nuxt-link :to="{name: 'innovacion-docente-convocatorias-index'}">
              <img src="~/static/img/innovacion/convocatorias.png" alt="convocatoria">
            </nuxt-link>
          </div>
         <div class="col-lg-4 col-md-6">
           <nuxt-link :to="{name: 'innovacion-docente-proyectos-actuales'}">
             <img src="~/static/img/innovacion/proyectos-actuales.png" alt="proyectos-actuales">
           </nuxt-link>
          </div>
          <div class="col-lg-4 col-md-6">
            <nuxt-link :to="{name: 'innovacion-docente-proyecto-mentores'}">
              <img src="~/static/img/innovacion/proyecto-mentores.png" alt="proyecto-mentores">
            </nuxt-link>
          </div>

          <div class="col-lg-4 col-md-6">
            <nuxt-link :to="{name: 'innovacion-docente-buenas-practicas-index'}">
              <img src="~/static/img/innovacion/buenas-practicas.png" alt="buenas-practicas">
            </nuxt-link>
          </div>
          <div class="col-lg-4 col-md-6">
            <nuxt-link :to="{name: 'innovacion-docente-ayudante-catedra'}">
              <img src="~/static/img/innovacion/ayudante-catedra.png" alt="ayudante-catedra">
            </nuxt-link>
          </div>
          <div class="col-lg-4 col-md-6">
            <a target="_blank" href="https://retos.utpl.edu.ec/">
              <img src="~/static/img/innovacion/reto.png" alt="retos">
            </a>
          </div>
        </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.col-md-6{
  margin: 0;
  padding: 5px;
}
</style>




