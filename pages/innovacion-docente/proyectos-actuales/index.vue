<template>
  <section class="container">
    <h1>¡Proyectos Actuales!</h1>
    <div class="contenedor">
          <div class="card" id = "cards">
            <div class="front">
              <iframe class="video" width="300" height="150" src="https://www.youtube.com/embed/c6-EfveplnA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div class="back">
              <h3>Scott Pilgrim</h3>
              <div @click="card">video</div>
          <p></p>
          </div>
        </div>
      </div>
    <div class="row">
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Vue from 'vue';


export default {
  async asyncData({ params }) {
    let res = await axios.get(
      "https://innovaciondocente-utpl.firebaseio.com/formacion-docente/programa-formacion/videos.json"
    );
    return { videos: res.data };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
.boton{
  position: absolute;
  width: 300px;
  height: 50%;
  top: 150px;
}
.video{
  position: absolute;
  top: 0;
}

.contenedor {
  width: 300px;
  height: 200px;
  position: relative;
  -webkit-perspective: 800px;
  -ms-perspective: 800px;
  perspective: 800px;
  border-radius: 4px;
}
.card {
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: -webkit-transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), -webkit-transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 6px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
  cursor: pointer;
}
.card div {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 6px;
  background: $color-primary;
  display: -ms-flexbox;
  display: box;
  display: flex;
  -o-box-pack: center;
  justify-content: center;
  -o-box-align: center;
  align-items: center;
  -webkit-font-smoothing: antialiased;
}
.card .back {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.card.flipped {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
</style>

<script>
export default {
  methods:{
  card() {
    let card = document.getElementById("cards");
    card.classList.toggle("flipped")
  }
  }

}
</script>


