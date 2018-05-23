<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <ul>
            <li>
              <nuxt-link :to="{name: 'formacion-docente-jornadas-de-reflexion-jornadas-anteriores-id', params: {id:2018}}">2018</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name: 'formacion-docente-jornadas-de-reflexion-jornadas-anteriores-id', params: {id:2016}}">2016</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name: 'formacion-docente-jornadas-de-reflexion-jornadas-anteriores-id', params: {id:2015}}">2015</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name: 'formacion-docente-jornadas-de-reflexion-jornadas-anteriores-id', params: {id:2014}}">2014</nuxt-link>
            </li>
          </ul>
          <nuxt-link class="btn btn-large" :to="{name: 'formacion-docente-jornadas-de-reflexion'}">Jornada Actual</nuxt-link>
        </div>
        <div class="col-md-9">
          <nuxt-child />
        </div>
      </div>
    </div>
  </section>
</template>
