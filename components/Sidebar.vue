<template>
  <div>
    <ul>
      <li>
        Formación Docente
        <ul>
          <li>
            <nuxt-link :to="{name: 'admin-formacion-docente-programa-formacion'}">Programa Formacion</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{name: 'admin-formacion-docente-cafe-cientifico'}">Cafe Cientifico</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{name: 'admin-formacion-docente-jornadas-de-reflexion'}">Jornadas de Reflexion</nuxt-link>
          </li>
        </ul>
      </li>
      <li>
        Innovación Docente
        <ul>
          <li>
            <nuxt-link :to="{name: 'admin-innovacion-docente-proyectos-actuales'}">Proyectos Actuales</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{name: 'admin-innovacion-docente-convocatorias'}">Convocatorias</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{name: 'admin-innovacion-docente-buenas-practicas'}">Buenas Prácticas</nuxt-link>
          </li>
        </ul>
        <li>
          Observatorio EduTendencias
          <ul>
            <li>
              <nuxt-link :to="{name: 'admin-observatorio-edutendencias-noticias'}">Noticias</nuxt-link>
            </li>
          </ul>
        </li>
    </ul>
  </div>
</template>
