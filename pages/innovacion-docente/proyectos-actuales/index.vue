<template>
  <section class="container"
           @click="click_ventana">
    <h1>¡Proyectos Actuales!</h1>
    <div class="row">
    <div v-for="(video, index) in videos"
         :key="index">
      <div class="card card__one link">
        <figure class="card__img">
          <img class="img"
               @click="click_boton"
               :src="video.img"
               alt="imagen-div">
        </figure>
        <div class="card__desc">
          <h3 class="titulo">{{video.nombre}}</h3>
          <p>{{video.descripcion}}</p>
        </div>
      </div>
    </div>
    </div>
    <div v-for="(video, index) in videos"
         :key="index">
      <div id="myModal"
           class="modal">
        <div class="modal-content">
          <span class="close"
                @click="click_span">&times;</span>
          <iframe width="854"
                  height="480"
                  :src="video.link"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "assets/variables";
@import "assets/card";
.titulo{
  color: $color-warning-dark !important;
}
.img {
  height: 211px !important;
  width: 100% !important;
}
.modal {
  display: none; 
  position: fixed; 
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4); 
}

.modal-content {
  margin: 5% auto; 
  padding: 0;
  width: 65%; 
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>

<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    let res = await axios.get(
      "https://innovaciondocente-utpl.firebaseio.com/formacion-docente/programa-formacion/videos.json"
    );

    let title = "Proyectos Actuales";
    let description =
      "Mes a mes, el Plan de Formación Docente Pedagógica ofrece cursos al profesorado de la UTPL para la mejora de su formación académica. Te presentamos los testimonios de los expertos que han visitado el Campus UTPL para trabajar en temáticas que benefician la preparación de los docentes.";
    return { videos: res.data, title, description };
  },
  head() {
    return {
      title: this.title + " | Innovación Docente",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        }
      ]
    };
  },
  methods: {
    click_boton() {
      let modal = document.getElementById("myModal");
      modal.style.display = "block";
    },

    click_span() {
      let modal = document.getElementById("myModal");
      modal.style.display = "none";
    },

    click_ventana(event) {
      let modal = document.getElementById("myModal");
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
};
</script>



