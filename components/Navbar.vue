<template>
  <div>
    <div @click="toggleMenu"
         class="menu-icon"
         id="menu-icon">
      <span class="menu-icon__line menu-icon__line-left"></span>
      <span class="menu-icon__line"></span>
      <span class="menu-icon__line menu-icon__line-right"></span>
    </div>
    <div class="nav"
         id="nav">
      <div class="nav__content">
        <ul class="nav__list">
          <li class="nav__list-item">
            <nuxt-link :to="{name: 'index'}">UTPL</nuxt-link>
          </li>
          <li class="nav__list-item ">
            <nuxt-link :to="{name: 'innovacion-docente'}">Innovación Docente</nuxt-link>
            <ul>
              <nuxt-link :to="{name: 'innovacion-docente-convocatorias-index'}">Convocatorias</nuxt-link>
              <nuxt-link :to="{name: 'innovacion-docente-proyectos-actuales'}">Proyectos Actuales</nuxt-link>
              <nuxt-link :to="{name: 'innovacion-docente-poyecto-mentores'}">Proyecto Mentores</nuxt-link>
              <nuxt-link :to="{name: 'innovacion-docente-buenas-practicas-index'}">Buenas Practicas</nuxt-link>
              <nuxt-link :to="{name: 'formacion-docente-ayudante-catedra'}">Ayudante de Catedra</nuxt-link>
              <a target="_blank"
                 rel="noopener"
                 href="https://retos.utpl.edu.ec/">Retos</a>
            </ul>
          </li>
          <li class="nav__list-item ">
            <nuxt-link :to="{name: 'formacion-docente-programa-formacion'}">Formación Docente</nuxt-link>
            <ul>
              <nuxt-link :to="{name: 'formacion-docente-programa-formacion'}">Programa de Formación</nuxt-link>
              <nuxt-link :to="{name: 'formacion-docente-cafe-cientifico'}">Café Científico</nuxt-link>
              <nuxt-link :to="{name: 'formacion-docente-jornadas-de-reflexion'}">Jornadas de Reflexión</nuxt-link>
            </ul>
          </li>
          <li class="nav__list-item">
            <nuxt-link :to="{name: 'observatorio-edutendencias'}">Observatorio EduTencencias</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      let body = document.querySelector("body");

      if (body.classList.contains("nav-active"))
        body.classList.remove("nav-active");
      else body.classList.add("nav-active");
    }
  },
  watch: {
    $route: function() {
      let body = document.querySelector("body");

      if (body.classList.contains("nav-active"))
        body.classList.remove("nav-active");
    }
  }
};
</script>


<style lang="scss" scoped >
@import "assets/variables";

.menu-icon {
  $size: 30px;
  height: $size;
  width: $size;
  position: fixed;
  z-index: 2;
  right: 50px;
  top: 30px;
  cursor: pointer;
  &__line {
    height: 2px;
    width: $size;
    display: block;
    background-color: $color-font-primary;
    margin-bottom: 4px;
    transition: transform 0.2s ease, background-color 0.5s ease;
  }
  &__line-left {
    width: $size / 2;
  }
  &__line-right {
    width: $size / 2;
    float: right;
  }
}

.nav {
  visibility: hidden;
  position: fixed;
  z-index: 1;
  &:before,
  &:after {
    content: "";
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba($color-font-primary, 0.3);
    z-index: -1;
    transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
    transform: translateX(0%) translateY(-100%);
  }
  &:after {
    background: rgba($color-font-primary, 1);
    transition-delay: 0s;
  }
  &:before {
    transition-delay: 0.1s;
  }
  &__content {
    text-align: center;
    position: fixed;
    top: 50%;
    transform: translate(0%, -50%);
    width: 100%;
    text-align: center;
    cursor: pointer;
    font-size: 1.5em;
    ul {
      margin: 0;
      padding: 0;
    }
  }
  &__list {
    text-transform: capitalize;
  }
  &__list-item {
    position: relative;
    display: inline-block;
    transition-delay: 0.8s;
    opacity: 0;
    transform: translate(0%, 100%);
    transition: opacity 0.2s ease, transform 0.3s ease;
    margin-right: 25px;
    vertical-align: top;
    > a {
      font-weight: 600;
    }
    a {
      display: block;
      padding: 4px 0 0 0;
      text-decoration: none;
      transition-property: all 0.2s linear 0s;
      -moz-transition: all 0.2s linear 0s;
      -webkit-transition: all 0.2s linear 0s;
      -o-transition: all 0.2s linear 0s;
    }
    ul {
      padding: 10px;
      li {
        display: block;
        width: 100%;
      }
    }
  }
}

.nav-active {
  .menu-icon {
    &__line {
      background-color: $color-primary;
      transform: translateX(0px) rotate(-45deg);
    }
    &__line-left {
      transform: translateX(1px) rotate(45deg);
    }
    &__line-right {
      transform: translateX(-2px) rotate(45deg);
    }
  }
  .nav {
    visibility: visible;
    &:before,
    &:after {
      transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
      transform: translateX(0%) translateY(0%);
    }
    &:after {
      transition-delay: 0.1s;
    }
    &:before {
      transition-delay: 0s;
    }
    &__list-item {
      opacity: 1;

      position: relative;
      display: inline-block;

      transform: translateX(0%);
      transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
      @for $i from 0 through 4 {
        &:nth-child(#{$i}) {
          transition-delay: 0.8 * $i / 8 + 0.5 + s;
        }
      }
    }
  }
}

@media screen and (max-width: 48em) {
  .nav {
    &__list {
      padding: 30px 0px 0px;
    }
    &__list-item {
      width: 100%;
      padding: 0;
    }
  }
}
</style>