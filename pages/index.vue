<template>
<div>
  <header  class="header content">
    <!--<div class="header-video">
      <img class="background img-move" src="@/static/imgIndex.jpg" alt="">
       <video :src="require('@/static/videos/Decide_ser_mas_en_la_UTPL.mp4')" alt="" autoplay loop muted></video> 
    </div>-->
    <div class="header-overlay"></div>
    <div class="fondo">
      <img class="img-move" src="@/static/imgIndex.jpg" alt="">
    </div>
    <div class="header-content">
      <h1>The drive to study</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <button href="#" class="btn">Go to Course</button>
      <a href="#" class="arrow arrow-1"><span></span></a>
      <a href="#" class="arrow arrow-2"><span></span></a>
      <a href="#" class="arrow arrow-3"><span></span></a>
    </div>
  </header>

  <!-- Navbar  -->
  <div class="div1" id="navbar">
    <div class="div2">
      <div class="div3">
        <nuxt-link class="link" :to="{name: 'innovacion-docente'}">
          <svg class="heart" width="40px" height="40px" viewBox="0 0 510 510" >
            <path d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
                C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/>
          </svg>
          <span class="d-block">Innovación Docente</span>
        </nuxt-link>
        <nuxt-link class="link" :to="{name: 'formacion-docente-programa-formacion'}">
          <svg class="heart" width="40px" height="40px" viewBox="0 0 510 510" >
            <path d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
                C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/>
          </svg>
          <span class="d-block">Formación Docente</span>
         </nuxt-link>
        <nuxt-link class="link" :to="{name: ''}">
          <svg class="heart" width="40px" height="40px" viewBox="0 0 510 510" >
            <path d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
                C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/>
          </svg>
          <span class="d-block">Observatorio EduTendencias</span>
        </nuxt-link>
        <nuxt-link class="link" :to="{name: 'index'}">
          <svg class="heart" width="40px" height="40px" viewBox="0 0 510 510" >
            <path d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
                C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/>
          </svg>
          <span class="d-block">Radio UTPL</span>
        </nuxt-link>
      </div>
    </div>
  </div>

  <!-- Noticia, Curso, tip -->
  <section>
    <div class="container">
        <div class="row">
          <div class="col-md-4 notes">
            <img src="~/static/img/innovacion/convocatorias.png" alt="convocatoria">
            <div class="notes-text">
              <h3>Noticia Reciente</h3>
              <p>Rajoy ha presidido este viernes la reunión del Consejo de Ministros, a la... </p>
              <button class="btn btn">Leer Más</button>
            </div>
          </div>
          <div class="col-md-4 notes">
            <img src="~/static/img/innovacion/proyectos-actuales.png" alt="proyectos-actuales">
            <div class="notes-text">
              <h3>Curso Reciente</h3>
              <p>Rajoy ha presidido este viernes la reunión del Consejo de Ministros, a la... </p>
              <button class="btn btn">Leer Más</button>
            </div>
          </div>
          <div class="col-md-4 notes">
            <img src="~/static/img/innovacion/proyecto-mentores.png" alt="proyecto-mentores">   
            <div class="notes-text">
              <h3>Tip Reciente</h3>
              <p>Rajoy ha presidido este viernes la reunión del Consejo de Ministros, a la... </p>
              <button class="btn">Leer Más</button>
            </div>
          </div>
        </div>
    </div>
  </section>
</div>  
</template>

<script>
export default {
  layout: "empty"
};
</script>

<style lang="scss" scoped>
@import "assets/variables";

h1 {
  color: $color-secondary;
}

.header {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  color: $color-secondary;
}

.content {
  max-width: 40rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: auto;
  text-align: center;
}

.fondo {
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  position: absolute;
  z-index: -2;
}

.img-move {
  object-fit: cover;
  width: 100%;
  min-height: 300px;
  height: 100vh;
  max-height: 100vh;
  opacity: 1;
  position: relative;
  animation: moving 10s infinite linear alternate;
  @keyframes moving {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.3);
    }
  }
}

.header-overlay {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #0227499f;
  z-index: -1;
}

.header-content h1 {
  font-size: 50px;
  margin-bottom: 0;
}

.header-content p {
  font-size: 1.5rem;
  display: block;
  padding-bottom: 2rem;
}

.link {
  height: 100%;
  width: 100%;
  max-width: 12018px;
  text-align: center !important;
  display: inline-block;
  padding: 1rem;
}

.div1 {
  position: sticky;
  transition: transform ease 0.4s;
  height: 100%;
  width: 100%;
  border-color: #eaecef !important;
  border-bottom: 1px #e1e4e8 solid !important;
  top: 0;
  background: $color-warning;
  z-index: 1;
}

.div2 {
  text-align: center !important;
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
}

.div3 {
  display: flex;
  vertical-align: bottom;
  flex-wrap: nowrap !important;
  align-items: flex-start !important;
  justify-content: space-between !important;
}

.div3 a {
  border-color: #444d56;
  border-bottom: 3px solid transparent;
  display: block;
  text-decoration: none;
  padding: 24px 0 24px;
}

.div3 svg {
  max-height: 60px;
  transition: transform ease-in-out 0.25s;
}

.div3 span {
  color: #24292e !important;
}

.notes-text {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  padding: 15px 16px;
}

.notes-text:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
}

.col-md-4 {
  padding: 10px;
}

.header-content a {
  position: absolute;
  bottom: 20px;
  left: 50%;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: #fff;
  font: normal 400 20px/1 "Josefin Sans", sans-serif;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: opacity 0.3s;
}

.arrow {
  padding-top: 70px;
}

.arrow-1 {
  padding-top: 60px;
}

.arrow-2 {
  padding-top: 50px;
}

.arrow span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid $color-warning;
  border-bottom: 1px solid $color-secondary;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb05 1.5s infinite;
  animation: sdb05 1.5s infinite;
  box-sizing: border-box;
  @-webkit-keyframes sdb05 {
    0% {
      -webkit-transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }
  @keyframes sdb05 {
    0% {
      transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }
}

@media (max-width: 992px) {
  .content {
    padding: 0 3rem 0 3rem;
  }
  .div1 {
    display: none;
  }
}
</style>