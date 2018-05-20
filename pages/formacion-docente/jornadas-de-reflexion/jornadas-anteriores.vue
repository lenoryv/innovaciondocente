<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <ul>
          <li>
            <nuxt-link :to="{name: 'formacion-docente-jornadas-de-reflexion-jornadas-anteriores-id', params: {id:2015}}">2016</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{name: 'formacion-docente-jornadas-de-reflexion-jornadas-anteriores-id', params: {id:2016}}">2015</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{name: 'formacion-docente-jornadas-de-reflexion-jornadas-anteriores-id', params: {id:2017}}">2014</nuxt-link>
          </li>
        </ul>
        <button @click="$router.go(-1)" class="btn btn-large">Regresar</button>
      </div>
      <div class="col-md-9">
        <nuxt-child />
      </div>
    </div>
  </div>
</div>
</template>
