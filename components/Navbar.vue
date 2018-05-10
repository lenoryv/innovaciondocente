<template>
<nav id="navbar">
  <nuxt-link style="font-weight: Bold" :to="{name: 'index'}">UTPL</nuxt-link>
  <div class="dropdown">
    <button class="dropbtn">Formación Docente</button>
    <div class="dropdown-content">
      <nuxt-link :to="{name: 'programa-formacion'}">Programa de Formación</nuxt-link>
      <nuxt-link :to="{name: 'cafe-cientifico'}">Café Científico</nuxt-link>
      <nuxt-link :to="{name: 'jornadas-de-reflexion'}">Jornadas de Reflexión</nuxt-link>
      <nuxt-link :to="{name: 'tipsexpertos'}">Nuestros cursos</nuxt-link>
      <nuxt-link :to="{name: 'programaformacion'}">Recomendaciones de expertos</nuxt-link>
    </div>
  </div> 
  <nuxt-link :to="{name: 'about'}">About</nuxt-link>
  <a  href="javascript:void(0);" style="font-size:15px;" class="icon" @click="toggleMenu">&#9776;</a>
</nav>
</template>

<script>
export default {
  methods: {
    toggleMenu: () => {
      var x = document.getElementById("navbar");
      if (x.className === "") x.className += "responsive";
      else x.className = "";
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  overflow: hidden;
  background-color: #002171;
}

nav a {
  float: left;
  display: block;
  color: #ffffff;
  text-align: center;
  padding: 12px 14px;
  text-decoration: none;
  font-size: 13px;
}

.nuxt-link-active {
  background-color: #0d47a1;
  color: #ffffff;
}

nav .icon {
  display: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 13px;
  border: none;
  outline: none;
  color: #ffffff;
  padding: 12px 14px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #0d47a1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: #ffffff;
  padding: 12px 14px;
  text-decoration: none;
  display: block;
  text-align: left;
}

nav a:hover,
.dropdown:hover .dropbtn {
  background-color: #0d47a1;
  color: #ffffff;
}

.dropdown-content a:hover {
  background-color: #ffffff;
  color: #0d47a1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

@media screen and (max-width: 600px) {
  nav a:not(:first-child),
  .dropdown .dropbtn {
    display: none;
  }
  nav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  nav.responsive {
    position: relative;
  }
  nav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  nav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
  nav.responsive .dropdown {
    float: none;
  }
  nav.responsive .dropdown-content {
    position: relative;
  }
  nav.responsive .dropdown .dropbtn {
    display: block;
    width: 100%;
    text-align: left;
  }
}
</style>
