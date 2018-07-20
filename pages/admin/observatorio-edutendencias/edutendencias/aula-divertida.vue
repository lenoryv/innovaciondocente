<template>
  <section class="container">
    <h1>Nueva Aula</h1>
    <div class="form-group">
      <label for="nombre">Nombre</label>
      <input v-model="forma.nombre"
             type="text"
             name="nombre"
             class="form-control"
             v-validate="'required'">
      <span v-show="errors.has('nombre')"
            class="alert alert-danger">Nombre es requerido</span>
    </div>
    <div class="form-group">
      <label for="img">Imagen</label>
      <input v-model="forma.img"
             type="text"
             name="img"
             class="form-control"
             v-validate="'required'">
      <span v-show="errors.has('img')"
            class="alert alert-danger">Imagen es requerido</span>
    </div>
    <div class="form-group">
      <label for="description">Descripcion</label>
      <textarea v-model="forma.description"
                type="text"
                name="description"
                class="form-control"
                v-validate="'required'" />
      <span v-show="errors.has('description')"
            class="alert alert-danger">Descripcion es requerido</span>
    </div>
    <div class="form-group">
      <label for="html">Html Markup</label>
      <textarea v-model="forma.html"
                type="text"
                name="html"
                class="form-control code"
                v-validate="'required'" />
      <span v-show="errors.has('html')"
            class="alert alert-danger">Html Markup es requerido</span>
    </div>
    <div class="html">
      <h1>{{forma.nombre}}</h1>
      <hr>
      <span v-html="forma.html"></span>
    </div>
    <!--Buttons forma-->
    <div class="form-row">
      <div class="col-6">
        <button @click="$router.go(-1)"
                class="btn btn-outline-primary btn-large">
          Regresar
        </button>
      </div>
      <div class="col-6">
        <button @click="submit"
                class="btn btn-success btn-large"
                type="submit"
                v-bind:class="{ disabled: errors.items.length > 0 }">
          Guardar
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    let forma = {
      nombre: null,
      img: null,
      description: null,
      html: null
    };
    return { forma };
  },
  methods: {
    submit() {
      this.$validator
        .validateAll()
        .then(x => {
          if (x) {
            let d = new Date();
            this.forma.date = `${d.getFullYear()}-${d.getMonth() +
              1}-${d.getDate()}`;
            // remove accent from string
            this.forma.description = this.forma.description
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "");
            // push to firebase
            axios
              .post(
                "https://innovaciondocente-utpl.firebaseio.com/observatorio-edutendencias/tips-innovacion/aula-divertida.json",
                this.forma
              )
              .then(function(response) {
                alert("Completado");
                window.$nuxt.$router.go(-1);
              })
              .catch(function(error) {
                console.log(error);
                alert("HA OCURRIDO UN ERROR, VUELVE A INTENTARLO");
              });
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  layout: "admin"
};
</script>


<style lang="scss" scoped>
@import "assets/form";
@import "assets/alert";
@import "assets/html";
.code {
  font-family: monospace;
}
</style>
