<template>
<nav class="navbar">
  <ul>
    <li><nuxt-link :to="{name: 'index'}">UTPL</nuxt-link></li>
    <li class="dropdown">
      <nuxt-link class="dropbtn" :to="{name: 'about'}">about</nuxt-link>
      <div class="dropdown-content">
        <nuxt-link :to="{name: 'about'}">about1</nuxt-link>
        <nuxt-link :to="{name: 'about'}">about2</nuxt-link>
        <nuxt-link :to="{name: 'about'}">about3456</nuxt-link>
      </div>
    </li>
    <li class="dropdown">
      <nuxt-link class="dropbtn" :to="{name: 'about'}">Quienes-somos</nuxt-link>
      <div class="dropdown-content">
        <nuxt-link :to="{name: 'about'}">link largo 123456</nuxt-link>
        <nuxt-link :to="{name: 'about'}">about2</nuxt-link>
        <nuxt-link :to="{name: 'about'}">3</nuxt-link>
      </div>
    </li>
  </ul>
</nav>
</template>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  background-color: #0d47a1;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.7);
  margin: 0px;
}
.navbar > ul {
  margin: 0px;
  padding: 0px;
}
.navbar > ul li {
  display: inline-block;
}
.navbar > ul li a {
  text-decoration: none;
  color: #e9ecef;
  min-width: 100px;
  display: inline-block;
  text-align: center;
  padding: 10px 10px;
  font-weight: bold;
  position: relative;
}
.navbar > ul li a::before {
  background: #e9ecef;
  bottom: 0px;
  height: 3px;
  content: "";
  left: 0;
  position: absolute;
  width: 0%;
  transition: 0.5s;
}
.navbar > ul li a:hover::before {
  width: 100%;
}
/*.nuxt-link-exact-active {
  color: #fff !important;
  width: 100%;
}*/
/*dropdown*/
.navbar > ul li a,
.dropbtn {
  color: #e9ecef;
  text-align: center;
  text-decoration: none;
}

.navbar > ul li.dropdown {
  display: inline-block;
}

.navbar > ul li .dropdown-content {
  display: none;
  position: absolute;
  background-color: #0d47a1;
  box-shadow: 1px 0px 8px rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.navbar > ul li .dropdown-content a {
  display: block;
}

.dropdown-content a:hover {
  color: #e9ecef !important;
  background-color: #0d47a1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
