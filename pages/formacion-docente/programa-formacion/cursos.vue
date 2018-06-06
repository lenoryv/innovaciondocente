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
                     v-if="cursos.length == 0">
                    No se encontraton cursos
                </div>
                <div class="row"
                     v-else>
                    <nuxt-link v-for="(curso, i) in cursos"
                               :key="i"
                               class="col-xl-4 col-md-6 curso"
                               :to="{name: 'formacion-docente-programa-formacion-id', params: {id: i}}"
                               tag="div">
                        <div class="card card__one link">
                            <figure class="card__img">
                                <img v-lazy="require('@/static/img/' + curso.poster)"
                                     alt="Imagen Curso">
                            </figure>
                            <div class="card__desc">
                                <h4>{{curso.nombre}}</h4>
                                <small>{{curso.fecha}}</small>
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
    return {
      cursos: null,
      query: ""
    };
  },
  head() {
    return {
      title: "Portafolio de Cursos | Innovación Docente"
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let res = await axios.get(
        `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/programa-formacion/cursos.json`
      );
      this.cursos = res.data;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/form";
@import "assets/card";
@import "assets/alert";
</style>