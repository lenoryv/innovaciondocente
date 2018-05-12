<template>
<nav>
  <ul>
    <li><nuxt-link :to="{name: 'index'}">UTPL</nuxt-link></li>
    <li class="dropdown">
      <nuxt-link class="dropbtn" :to="{path: '/programa-formacion'}">Formación Docente</nuxt-link>
      <div class="dropdown-content">
        <nuxt-link :to="{path: '/programa-formacion'}">Programa de Formación</nuxt-link>
        <nuxt-link :to="{path: '/cafe-cientifico'}">Café Científico</nuxt-link>
        <nuxt-link :to="{path: '/jornadas-de-reflexion'}">Jornadas de Reflexión</nuxt-link>
        <nuxt-link :to="{path: '/tipsexpertos'}">Nuestros cursos</nuxt-link>
        <nuxt-link :to="{path: '/programaformacion'}">Recomendaciones de expertos</nuxt-link>
      </div>
    </li>
    <li>
      <nuxt-link :to="{name: 'about'}">About</nuxt-link>
    </li>
  </ul>
</nav>
</template>

<style lang="scss" scoped >
@import "assets/variables";

nav {
  width: 100%;
  background-color: $color-primary;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.7);
  margin: 0px;
}
nav > ul {
  margin: 0px;
  padding: 0px;
}
nav > ul li {
  display: inline-block;
}
nav > ul li a {
  text-decoration: none;
  color: $color-font-primary;
  min-width: 100px;
  display: inline-block;
  text-align: center;
  padding: 10px 10px;
  font-weight: bold;
  position: relative;
}
nav > ul li a::before {
  background: $color-font-primary;
  bottom: 0px;
  height: 3px;
  content: "";
  left: 0;
  position: absolute;
  width: 0%;
  transition: 0.5s;
}
nav > ul li a:hover::before {
  width: 100%;
}
.nuxt-link-exact-active::before {
  width: 25%;
}
/*dropdown*/
nav > ul li a,
.dropbtn {
  color: $color-font-primary;
  text-align: center;
  text-decoration: none;
}

nav > ul li.dropdown {
  display: inline-block;
}

nav > ul li .dropdown-content {
  display: none;
  position: absolute;
  background-color: $color-primary;
  box-shadow: 1px 0px 8px rgba(0, 0, 0, 0.7);
  z-index: 1;
}
nav > ul li .dropdown-content a {
  display: block;
}
.dropdown:hover .dropdown-content {
  display: block;
}
</style>