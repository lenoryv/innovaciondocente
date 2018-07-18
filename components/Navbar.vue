<template>
  <header>
    <nav id="responsive">
      <nuxt-link :to="{name: 'index'}"
                 class="logo">
        UTPL
      </nuxt-link>
      <div class="nav">
        <div class="dropdown">
          <nuxt-link :to="{name: 'innovacion-docente'}"
                     class="dropbtn"
                     tag="button">
            Innovación Docente
            <i class="fa fa-caret-down"></i>
          </nuxt-link>
          <div class="dropdown-content">
            <nuxt-link :to="{name: 'innovacion-docente-ayudante-catedra'}">Ayudante de Catedra</nuxt-link>
            <nuxt-link :to="{name: 'innovacion-docente-buenas-practicas-index'}">Buenas Prácticas</nuxt-link>
            <nuxt-link :to="{name: 'innovacion-docente-convocatorias-index'}">Convocatorias</nuxt-link>
            <nuxt-link :to="{name: 'innovacion-docente-proyectos-actuales'}">Proyectos Actuales</nuxt-link>
            <nuxt-link :to="{name: 'innovacion-docente-proyecto-mentores'}">Proyecto Mentores</nuxt-link>
            <a target="_blank"
               rel="noopener"
               href="https://retos.utpl.edu.ec/">Retos</a>
          </div>
        </div>
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
            <nuxt-link :to="{name: 'formacion-docente-desarrollo-asignatura'}">Diseño de mi Asigantura</nuxt-link>
            <nuxt-link :to="{name: 'formacion-docente-jornadas-de-reflexion'}">Jornadas de Reflexión</nuxt-link>
          </div>
        </div>
        <div class="dropdown">
          <nuxt-link :to="{name: 'observatorio-edutendencias'}"
                     class="dropbtn"
                     tag="button">
            Observatorio EduTendencias
            <i class="fa fa-caret-down"></i>
          </nuxt-link>
          <div class="dropdown-content">
            <nuxt-link :to="{name: 'observatorio-edutendencias-noticias'}">Noticias</nuxt-link>
          </div>
        </div>
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
  .logo {
    font-weight: 700;
    padding-left: 30px;
  }
  a {
    float: left;
    display: block;
    color: $color-font-primary;
    text-align: center;
    padding: $padding;
    text-decoration: none;
    padding: 10px 20px 10px 0;
  }
  .icon {
    display: none;
  }
}

.nuxt-link-exact-active {
  font-weight: 500;
}
.nav {
  float: right;
  padding-right: 10px;
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
    padding: 10px 20px 10px 0;
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

@media screen and (max-width: 768px) {
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
  nav.responsive {
    position: relative;
    a.icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    a {
      float: none;
      display: block;
      text-align: left;
    }
    .dropdown {
      float: none;
      .dropbtn {
        display: block;
        width: 100%;
        text-align: left;
      }
      &-content {
        position: relative;
        background-color: $color-font-primary;
        border-left: 2px solid $color-font-primary;
        box-shadow: none;
        a {
          background-color: $color-primary;
          color: $color-font-primary;
        }
      }
    }
  }
  .nav {
    float: left;
    padding-left: 30px;
  }
}
</style>
