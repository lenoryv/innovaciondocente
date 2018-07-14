<template>
  <section>
    <div class="container">
      <h2>Tips de Expertos</h2>
      <div class="row">
        <div class="col-xl-7 col-lg-8">
          <h3>#InnovaciónenlaUTPL</h3>
          <div class="embed-container">
            <iframe src="https://www.youtube.com/embed/Fo6uuUi86F4"
                    frameborder="0"
                    allow="encrypted-media"
                    title="video"
                    allowfullscreen></iframe>
          </div>
          <a target="_blank"
             rel="noopener"
             class="btn btn-inverse btn-large"
             href="https://www.youtube.com/channel/UCzRd2Y87-NJnVliV8B6e_Xg">
            Innovación Docente en YouTube
          </a>
        </div>
        <div class="col-xl-5 col-lg-4"
             v-if="video">
          <h3>{{video.nombre}}</h3>
          <div class="embed-container">
            <iframe :src="video.link"
                    frameborder="0"
                    allow="encrypted-media"
                    title="video"
                    allowfullscreen></iframe>
          </div>
          <p>{{video.descripcion|slice(0,250)}}</p>
          <router-link class="btn btn-inverse btn-large"
                       :to="{name: 'formacion-docente-programa-formacion-potencia-informacion'}">
            Tips de expertos
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import axios from "axios";
export default {
  data() {
    let video = null;
    axios
      .get(
        `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/programa-formacion/videos.json?orderBy=%22$key%22&limitToLast=1`
      )
      .then(res => {
        for (const key in res.data) {
          if (res.data.hasOwnProperty(key)) {
            this.video = res.data[key];
            return;
          }
        }
      })
      .catch(e => console.log(e));
    return { video };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
section {
  background-color: $color-primary;
  color: $color-font-primary;
}

.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}
.embed-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
