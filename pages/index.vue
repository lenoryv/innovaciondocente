<template>
<div>
  <header class="header content">
    <div class="header-video">
        <video :src="require('@/static/videos/Decide_ser_mas_en_la_UTPL.mp4')" alt="" autoplay loop muted></video>
    </div>
    <div class="header-overlay"></div>
    <div class="header-content">
      <h1>The drive to study</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <a href="#" class="btn">Go to Course</a>
    </div>
  </header>
  <div class="div1" id="navbar">
    <div class="div2">
      <div class="div3">
        <nuxt-link class="link" :to="{name: 'index'}">
          <svg class="heart" width="40px" height="40px" viewBox="0 0 510 510" >
            <path d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
                C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/>
          </svg>
          <span class="d-block">Inicio</span>
        </nuxt-link>
        <nuxt-link class="link" :to="{name: 'formacion-docente-programa-formacion'}">
          <svg class="heart" width="40px" height="40px" viewBox="0 0 510 510" >
            <path d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
                C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/>
          </svg>
          <span class="d-block">Formación Docente</span>
         </nuxt-link>
        <nuxt-link class="link" :to="{name: 'innovacion-docente'}">
          <svg class="heart" width="40px" height="40px" viewBox="0 0 510 510" >
            <path d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
                C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/>
          </svg>
          <span class="d-block">Innovación Docente</span>
        </nuxt-link>
        <nuxt-link class="link" :to="{name: 'innovacion-docente'}">
          <svg class="heart" width="40px" height="40px" viewBox="0 0 510 510" >
            <path d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
                C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/>
          </svg>
          <span class="d-block">Observatorio EduTendencias</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</div>  
</template>

<script>
export default {
  data() {
    return {
      name: "jahurtado"
    };
  },

  layout: "empty",
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
  overflow-x: hidden;
  word-wrap: break-word;
}

div {
  display: block;
}

.header {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  color: #feea00;
}

.content {
  max-width: 40rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: auto;
  text-align: center;
}

.header-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
}

.header-video video {
  object-fit: cover;
  width: 100%;
  min-height: 300px;
  height: 100vh;
  max-height: 100vh;
  opacity: 1;
  position: relative;
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
  background: rgb(198, 200, 202);
}

.div2 {
  text-align: center !important;
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
}

.div3{
  display: flex;
  vertical-align: bottom;
  flex-wrap: nowrap !important;
  align-items: flex-end !important;
  justify-content: space-between !important;
}

.div3 a {
  border-color: #444d56;
  border-bottom: 3px solid transparent;
  display: block;
  text-decoration: none; 
  padding: 24px 0 24px,
}

.div3 svg {
  max-height: 60px;
  transition: transform ease-in-out 0.25s;
}

.div3 span {
  color: #24292e !important;
}

@media (max-width: 960px) {
  .content {
    padding: 0 3rem 0 3rem;
  }
}
</style>