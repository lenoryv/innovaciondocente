<template>
  <section class="container">
    <h2>Ultimos Cursos</h2>
    <div class="row"
         v-if="cursos">
      <nuxt-link class="col-md-4 col-sm-6"
                 v-for="(curso, key) in cursos"
                 :key="key"
                 :to="{name: 'formacion-docente-programa-formacion-id', params: {id: key}}"
                 tag="div">
        <div class="card card__one link">
          <figure class="card__img">
            <img v-lazy="curso.img"
                 alt="imagen curso">
          </figure>
          <div class="card__desc">
            <h4>{{curso.nombre}}</h4>
            <small>
              <i class="fas fa-calendar-alt"></i> {{curso.fecha | date}}</small>
          </div>
        </div>
      </nuxt-link>
    </div>
    <nuxt-link class="btn btn-sm btn-primary btn-large"
               :to="{name: 'formacion-docente-programa-formacion-cursos'}">
      <i class="fas fa-folder"></i> Portafolio de Cursos
    </nuxt-link>
    <a class="btn btn-outline-primary btn-sm btn-large"
       rel="noopener"
       target="_blank"
       href="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/formacion-docente%2Fprograma-formacion%2Fprograma-formacion%2FResumen%20del%20programa%20de%20formacio%CC%81n%202018%20(FINAL)%20(1).pdf?alt=media&token=cc2fa206-7118-4c4b-ac58-9ba918a16892">
      <i class="fas fa-calendar-alt"></i> Programa de Formación Docente
    </a>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    let cursos;
    axios
      .get(
        `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/programa-formacion/cursos.json?orderBy=%22$key%22&limitToLast=4`
      )
      .then(res => (this.cursos = res.data))
      .catch(e => console.log(e));

    return { cursos };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/card";
</style>


