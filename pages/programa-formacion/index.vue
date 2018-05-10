<template>
  <div class="container">
      <h1>Programa de Formación Docente</h1>
      <img src="/img/banner-formacion-docente.jpg" alt="banner-formacion-docente">
      <p>
          “El Programa de Formación  Docente de la universidad está orientado de forma prioritaria a facilitar y apoyar a nuestros docentes al desarrollo de sus necesidades de tipo formativo, dotándoles de las estrategias y recursos necesarios para desarrollar una serie de nuevas competencias profesionales. Por este motivo es preciso reflexionar sobre las nuevas exigencias profesionales y apoyar el desarrollo de dichas competencias desde la formación del profesorado y desde el enfoque de nuestra universidad.” 
      </p>
      <hr>
      <div class="row">
          <div class="col-md-3">
              <!--Sidebar-->
              <ul>
                  <li><nuxt-link :to="{path: '/programa-formacion/calendario-anual'}">Calendario Anual</nuxt-link></li>
                  <li>
                      <ul>
                          <li><nuxt-link :to="{name: ''}">Enero</nuxt-link></li>
                          <li><nuxt-link :to="{name: ''}">Febrero</nuxt-link></li>
                          <li><nuxt-link :to="{name: ''}">Marzo</nuxt-link></li>
                          <li><nuxt-link :to="{name: ''}">Abril</nuxt-link></li>
                          <li><nuxt-link :to="{name: ''}">Mayo</nuxt-link></li>
                      </ul>
                  </li>
                  <li><nuxt-link :to="{path: '/programa-formacion/validar-formacion'}">Valida tu formación</nuxt-link></li>
                  <li><nuxt-link :to="{path: '/programa-formacion/potencia-informacion'}">Potencia tu formación</nuxt-link></li>
              </ul>
          </div>
          <div class="col-md-9">
              <nuxt-child/>
          </div>
      </div>
  </div>
</template>


<style lang="scss" scoped>
.sidenav {
  width: 130px;
  z-index: 1;
  background: #eee;
  overflow-x: hidden;
  padding: 8px 0;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #2196f3;
  display: block;
}

.sidenav a:hover {
  color: #064579;
}
</style>
