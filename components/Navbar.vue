<template>
  <header>
    <nav id="responsive">
      <div class="container">
        <nuxt-link :to="{name: 'index'}"
                   style="font-weight: 700;">
          UTPL
        </nuxt-link>
        <!------Innovación Docente-------->
        <div class="dropdown">
          <nuxt-link :to="{name: 'innovacion-docente'}"
                     class="dropbtn"
                     tag="button">
            Innovación Docente
            <i class="fa fa-caret-down"></i>
          </nuxt-link>
          <div class="dropdown-content">
            <nuxt-link :to="{name: 'innovacion-docente-convocatorias-index'}">Convocatorias</nuxt-link>
            <nuxt-link :to="{name: 'innovacion-docente-proyectos-actuales'}">Proyectos Actuales</nuxt-link>
            <nuxt-link :to="{name: 'innovacion-docente-poyecto-mentores'}">Proyecto Mentores</nuxt-link>
            <nuxt-link :to="{name: 'innovacion-docente-buenas-practicas-index'}">Buenas Practicas</nuxt-link>
            <nuxt-link :to="{name: 'formacion-docente-ayudante-catedra'}">Ayudante de Catedra</nuxt-link>
            <a target="_blank"
               rel="noopener"
               href="https://retos.utpl.edu.ec/">Retos</a>
          </div>
        </div>
        <!------Formación Docente-------->
        <div class="dropdown">
          <nuxt-link :to="{name: 'formacion-docente-programa-formacion'}"
                     class="dropbtn"
                     tag="button">
            Formación Docente
            <i class="fa fa-caret-down"></i>
          </nuxt-link>
          <div class="dropdown-content">
            <nuxt-link :to="{name: 'formacion-docente-programa-formacion'}">Programa de Formación</nuxt-link>
            <nuxt-link :to="{name: 'formacion-docente-cafe-cientifico'}">Café Científico</nuxt-link>
            <nuxt-link :to="{name: 'formacion-docente-jornadas-de-reflexion'}">Jornadas de Reflexión</nuxt-link>
          </div>
        </div>
        <!------Observatorio EduTencencias-------->
        <nuxt-link :to="{name: 'observatorio-edutendencias'}">
          Observatorio EduTencencias
        </nuxt-link>
        <nuxt-link :to="{name: 'admin'}">
          Admin
        </nuxt-link>
      </div>
      <a href="javascript:void(0);"
         style="font-size:15px;"
         class="icon"
         @click="toggleMenu">&#9776;</a>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      let el = document.getElementById("responsive");
      el.classList.toggle("responsive");
    }
  },
  watch: {
    $route: function() {
      let body = document.getElementById("responsive");

      if (body.classList.contains("responsive")) {
        body.classList.remove("responsive");
      }
    }
  }
};
</script>


<style lang="scss" scoped>
@import "assets/variables";
///////options/////////
$padding: 12px;

@supports ((position: -webkit-sticky) or (position: sticky)) {
  header {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}

nav {
  overflow: hidden;
  background-color: $color-primary;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.7);
  a {
    float: left;
    display: block;
    color: $color-font-primary;
    text-align: center;
    padding: $padding;
    text-decoration: none;
  }
  .icon {
    display: none;
  }
}

.nuxt-link-exact-active {
  font-weight: 500;
}

.dropdown {
  float: left;
  overflow: hidden;
  .dropbtn {
    border: none;
    outline: none;
    color: $color-font-primary;
    padding: $padding;
    background-color: inherit;
    margin: 0;
    cursor: pointer;
  }
  &-content {
    display: none;
    position: absolute;
    background-color: $color-font-primary;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.7);
    min-width: 100px;
    z-index: 1020;
    a {
      float: none;
      background-color: $color-font-primary;
      color: $color-primary;
      padding: $padding;
      text-decoration: none;
      display: block;
      text-align: left;
      &:hover {
        background-color: $color-primary;
        color: $color-font-primary;
      }
    }
  }
}

.dropdown:hover .dropdown-content {
  display: block;
}

@media screen and (max-width: 600px) {
  nav {
    a:not(:first-child),
    .dropdown .dropbtn {
      display: none;
    }
    a.icon {
      float: right;
      display: block;
    }
  }
}

@media screen and (max-width: 600px) {
  nav.responsive {
    position: relative;
    .icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    a {
      float: none;
      display: block;
      text-align: left;
    }
    .dropdown-content {
      position: relative;
    }
    .dropdown .dropbtn {
      display: block;
      width: 100%;
      text-align: left;
    }
  }
}
</style>

<!--
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

      if (body.classList.contains("nav-active")) {
        body.classList.remove("nav-active");
        document.documentElement.style.overflow = "auto";
      } else {
        body.classList.add("nav-active");
        document.documentElement.style.overflow = "hidden";
      }
    }
  },
  watch: {
    $route: function() {
      let body = document.querySelector("body");

      if (body.classList.contains("nav-active")) {
        body.classList.remove("nav-active");
        document.documentElement.style.overflow = "auto";
      }
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
  z-index: 1022;
  right: 40px;
  top: 40px;
  filter: invert(1);
  cursor: pointer;
  &__line {
    height: 2px;
    width: $size;
    display: block;
    background-color: $color-warning;
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
  z-index: 1021;
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
    font-size: 1.1em;
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

@media only screen and (min-width: 800px) {
  .nav__content {
    font-size: 1.5em;
  }
}
</style>
-->
