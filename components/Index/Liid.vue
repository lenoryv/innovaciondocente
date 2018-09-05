<template>
    <div class="liid">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <div class="liid-info">
                        <img  alt="Lab img" src="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/icons%2Fthumbnail_sello_laboratorio_investigacion_innovacion_feb_2018.png?alt=media&token=81b8fb6b-5f9e-4338-a6cc-e20ae8783e9e">
                        <p>El Laboratorio de Investigación e Innovación Docente Educativa es un espacio
                            orientado al desarrollo de la innovación e investigación educativa a nivel
                            local, nacional e internacional.</p>
                        <p>Con el trabajo del Vicerrectorado Académico, Vicerrectorado de Modalidad Abierta
                            y a Distancia, Vicerrectorado de Investigación, Departamento de Ciencias
                            de la Educación, Departamento de Ciencias de la Computación y el Departamento
                            de Ciencias de la Comunicación, se pretende fortalecer la actividad de los
                            grupos de innovación e investigación en temas de tecnología educativa; además
                            de identificar diferentes prácticas de innovación educativa que se suceden
                            en el campus, en relación al uso de nuevas tecnologías y ambientes de aprendizaje.
                        </p>
                    </div>
                </div>
                <div class="col-md-6 background-mustard">
                    <div class="liid-info">
                        <h2>Proyectos Actuales</h2>
                        <div class="embed-container">
                            <iframe src="https://www.youtube.com/embed/JGLLfevnHeM"
                                    frameborder="0"
                                    title="video"
                                    allow="autoplay; encrypted-media"
                                    allowfullscreen></iframe>
                        </div>
                        <p>Ascendere crea y motiva a las nuevas generaciones a poner en práctica, explorar
                            nuevas areas con el fin de crear cosas simples pero asombrosas, tienes dudas
                            pues te invitamos a explorar cada uno de los proyectos.</p>
                        <nuxt-link :to="{name: 'innovacion-docente-proyectos-actuales'}"
                                   class="btn btn-large btn-primary">Atrevete</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "assets/variables";
.liid-info {
  padding: 1rem;
  height: 105vh;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  h2 {
    color: $color-primary;
  }
  img {
    height: 250px;
    width: 250px;
  }
  p {
    text-align: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    span {
      color: $color-warning;
    }
  }
}
.background-mustard {
  background: $color-warning;
}
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  margin: 15px;
}
.embed-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>