<template>
  <section class="container">
    <h1>Nuevo Tip</h1>
    <div class="form-group">
      <label for="title">Nombre</label>
      <input v-model="forma.title"
             type="text"
             name="title"
             class="form-control"
             v-validate="'required'">
      <span v-show="errors.has('title')"
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
      <label for="url">Url o enlace</label>
      <input v-model="forma.url"
             type="text"
             name="url"
             class="form-control"
             v-validate="'required'">
      <span v-show="errors.has('url')"
            class="alert alert-danger">Url es requerido</span>
    </div>
    <div class="form-group">
      <label for="tag">Selecciona un tag</label>
      <select v-model="forma.tag"
              class="form-control"
              id="tag"
              name="tag"
              v-validate="'required|not_in:Choose'">
        <option value="aula-divertida">Aula divertida</option>
        <option value="docentes-futuro">Docentes del futuro</option>
        <option value="videos">Videos</option>
      </select>
      <span v-show="errors.has('tag')"
            class="alert alert-danger">Es requerido</span>
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
      description: null,
      url: null,
      tag: null
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
            // push to firebase
            axios
              .post(
                `https://innovaciondocente-utpl.firebaseio.com/observatorio-edutendencias/tips-innovacion.json`,
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
</style>
