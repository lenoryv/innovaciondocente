<template>
  <section>
    <div class="container">
      <h1>Innovación Docente</h1>
      <div class="row">
          <div class="col-lg-4 col-md-6">
            <nuxt-link :to="{name: 'innovacion-docente-convocatoria'}">
              <img src="~/static/convocatorias.png" alt="convocatoria">
            </nuxt-link>
          </div>
         <div class="col-lg-4 col-md-6">
           <nuxt-link :to="{name: 'innovacion-docente-proyectos-actuales'}">
             <img src="~/static/proyectos-actuales.png" alt="proyectos-actuales">
           </nuxt-link>
          </div>
          <div class="col-lg-4 col-md-6">
            <nuxt-link :to="{name: 'innovacion-docente-proyecto-mentores'}">
              <img src="~/static/proyecto-mentores.png" alt="proyecto-mentores">
            </nuxt-link>
          </div>

          <div class="col-lg-4 col-md-6">
            <nuxt-link :to="{name: 'innovacion-docente-proyectos-actuales'}">
              <img src="~/static/buenas-practicas.png" alt="buenas-practicas">
            </nuxt-link>
          </div>
          <div class="col-lg-4 col-md-6">
            <nuxt-link :to="{name: 'innovacion-docente-ayudante-catedra'}">
              <img src="~/static/ayudante-catedra.png" alt="ayudante-catedra">
            </nuxt-link>
          </div>
          <div class="col-lg-4 col-md-6">
            <a target="_blank" href="https://retos.utpl.edu.ec/">
              <img src="~/static/reto.png" alt="retos">
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




