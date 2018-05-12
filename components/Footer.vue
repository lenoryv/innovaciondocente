<template>
<footer class="container">
    <ul class="mb">
        <li class="mr">© 2018 <a href="https://www.utpl.edu.ec/">UTPL</a></li>
        <li class="mr">San Cayetano Alto</li>
        <li>Loja - Ecuador</li>
    </ul>
    <a class="footer-heart" href="" title="With love by InDevelopmentCompany">
        <svg class="heart" width="16px" height="16px" viewBox="0 0 510 510" >
            <path d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
                C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/>
        </svg>
        
    </a>
    <ul>
        <li class="mr">Contactos</li>
        <li class="mr">1800 8875 8875</li>
        <li><a href="mailto:vacademico@utpl.edu.ec">vacademico@utpl.edu.ec</a></li>
    </ul>
</footer>
</template>


<style lang="scss" scoped>
@import "assets/variables";
footer {
  display: flex;
  border-top: 1px $color-font-background solid;
  font-size: 0.7rem;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-top: 40px;
  position: relative;
  justify-content: space-between !important;
}

ul {
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
}

.mr {
  margin-right: 16px;
}

.footer-heart {
  color: $color-font-background;
}
.footer-heart:hover {
  color: $color-danger;
}
a {
  text-decoration: none;
  background-color: transparent;
}

svg:not(:root) {
  overflow: hidden;
}
.heart {
  vertical-align: text-bottom;
}
.heart {
  display: inline-block;
  vertical-align: text-top;
  fill: currentColor;
}
@media (max-width: 768px) {
  footer {
    display: block;
  }
  .heart {
    display: none;
  }
  footer > .mb {
    padding-bottom: 15px;
  }
}
</style>
