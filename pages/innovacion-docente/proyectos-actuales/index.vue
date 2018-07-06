<template>
  <div>
    <section class="container">
      <h1>¡Proyectos actuales!</h1>
    </section>
    <div class="container-fluid">
      <div class="row">
        <div v-for="(video, key) in data"
             :key="key"
             class="col-xl-4 col-md-6">
          <div class="card card__one link">
            <figure class="card__img">
              <div class="embed-container">
                <iframe :src="video.vid"
                        frameborder="0"
                        title="video"
                        allow="autoplay; encrypted-media"
                        allowfullscreen></iframe>
              </div>
            </figure>
            <div class="card__desc">
              <h3>{{video.title}}</h3>
              <p>{{video.desc}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    let { data } = await axios.get(
      "https://innovaciondocente-utpl.firebaseio.com/innovacion-docente/proyectos-actuales.json"
    );
    return { data };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
@import "assets/card";
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
