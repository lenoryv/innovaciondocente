<template>
  <section>
    <h1>Portafolio de Cursos</h1>
    <div class="container">
      <form v-on:submit.prevent="onSubmit">
        <div class="form-group">
          <label for="busqueda">Buscar Curso</label>
          <input v-model="query"
                 type="text"
                 id="busqueda"
                 class="form-control"
                 placeholder="Nombre Curso">
        </div>
      </form>
    </div>
    <div class="container-fluid">
      <!--don't load courses on the server, fetch them from the client-->
      <div v-if="cursos">
        <div class="alert alert-danger"
             v-if="!cursos">
          No se encontraton cursos
        </div>
        <div class="row"
             v-else>
          <nuxt-link class="col-xl-2 col-lg-3 col-md-4 col-sm-6 curso"
                     v-for="curso in cursos"
                     :key="curso.key"
                     :to="{name: 'formacion-docente-programa-formacion-id', params: {id: curso.key}}"
                     tag="div">
            <div class="card card__one link">
              <figure class="card__img">
                <img v-lazy="curso.img"
                     alt="imagen curso">
              </figure>
              <div class="card__desc">
                <h4>{{curso.nombre | slice(0,50)}}</h4>
                <small>
                  <i class="fas fa-calendar-alt"></i> {{curso.fecha | date}}</small>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <button @click="$router.go(-1)"
              class="btn btn-primary btn-large">
        Regresar
      </button>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    let cursos = [];
    axios
      .get(
        `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/programa-formacion/cursos.json`
      )
      .then(res => {
        for (const key in res.data) {
          if (res.data.hasOwnProperty(key)) {
            res.data[key].key = key;
            cursos.push(res.data[key]);
          }
        }
        cursos.sort((a, b) => ("" + b.key).localeCompare(a.key));
      })
      .catch(e => console.log(e));

    return { cursos };
  },
  head() {
    return {
      title: "Portafolio de Cursos | Innovación Docente"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/form";
@import "assets/card";
@import "assets/alert";
</style>
