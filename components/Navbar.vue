<template>
<nav id="navbar">
  <nuxt-link style="font-weight: Bold" :to="{name: 'index'}">UTPL</nuxt-link>
  <nuxt-link :to="{name: 'index'}">Link1</nuxt-link>
  <div class="dropdown">
    <button class="dropbtn">Dropdown 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <nuxt-link :to="{name: 'index'}">Link1</nuxt-link>
      <nuxt-link :to="{name: 'index'}">Link2</nuxt-link>
      <nuxt-link :to="{name: 'index'}">Link3</nuxt-link>
    </div>
  </div> 
  <nuxt-link :to="{name: 'about'}">About</nuxt-link>
  <a style="font-size:15px;" class="icon" @click="toggleMenu">&#9776;</a>
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
  width: 100%;
  overflow: hidden;
  background-color: #0d47a1;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.7);
}

nav a {
  float: left;
  display: block;
  color: #e9ecef;
  text-align: center;
  padding: 10px;
  text-decoration: none;
  min-width: 100px;
  font-size: 14px;
}

nav .icon {
  display: none;
  color: #e9ecef !important;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 14px;
  border: none;
  outline: none;
  color: #e9ecef;
  padding: 10px;
  background-color: inherit;
  font-family: inherit;
  min-width: 100px;
  margin: 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #0d47a1;
  min-width: 100px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: #e9ecef;
  padding: 10px;
  text-decoration: none;
  display: block;
  text-align: left;
}

nav a:hover,
.dropdown:hover .dropbtn {
  background-color: #1565c0;
}

.dropdown-content a:hover {
  background-color: #1565c0;
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
    padding-left: 20px;
  }
  nav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
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
