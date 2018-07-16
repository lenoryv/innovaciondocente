<template>
  <section class="container">
    <h1>Nuevo Video</h1>
    <div class="form-group">
      <label for="title">Titulo</label>
      <input v-model="forma.title"
             type="text"
             name="title"
             class="form-control"
             v-validate="'required'">
      <span v-show="errors.has('title')"
            class="alert alert-danger">Titulo es requerido</span>
    </div>
    <div class="form-group">
      <label for="desc">Descripción</label>
      <textarea v-model="forma.desc"
                type="text"
                name="desc"
                class="form-control"
                v-validate="'required'" />
      <span v-show="errors.has('desc')"
            class="alert alert-danger">Descripción es requerido</span>
    </div>
    <div class="form-group">
      <label for="img">Imagen</label>
      <input v-model="forma.img"
             type="text"
             name="img"
             class="form-control"
             v-validate="'required'">
      <span v-show="errors.has('img')"
            class="alert alert-danger">Imagen es requerida</span>
    </div>
    <div class="form-group">
      <label for="vid">Video (url)</label>
      <input v-model="forma.vid"
                type="text"
                name="vid"
                class="form-control"
                v-validate="'required'" />
      <span v-show="errors.has('vid')"
            class="alert alert-danger">Video es requerido</span>
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
      title: null,
      img: null,
      vid: null,
      desc: null,
    };
    return { forma };
  },
  methods: {
    submit() {
      this.$validator
        .validateAll()
        .then(x => {
          if (x) {
            axios
              .post(
                "https://innovaciondocente-utpl.firebaseio.com/observatorio-edutendencias/tips-innovacion/videos.json",
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
