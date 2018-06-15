<template>
  <section class="container">
    <h1>Nuevo Video</h1>
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
      <label for="link">Link</label>
      <input v-model="forma.link"
             type="text"
             name="link"
             class="form-control"
             v-validate="'required'">
      <span v-show="errors.has('link')"
            class="alert alert-danger">Link es requerido</span>
    </div>
    <div class="form-group">
      <label for="descripcion">Descripcion</label>
      <textarea v-model="forma.descripcion"
                type="text"
                name="descripcion"
                class="form-control"
                v-validate="'required'" />
      <span v-show="errors.has('descripcion')"
            class="alert alert-danger">Descripcion es requerido</span>
    </div>
    <!--Bbuttons forma-->
    <div class="form-row">
      <div class="col-6">
        <button @click="$router.go(-1)"
                class="btn btn-outline-danger btn-large">
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
      nombre: "",
      link: "",
      descripcion: ""
    };
    return { forma };
  },
  methods: {
    submit() {
      this.$validator
        .validateAll()
        .then(x => {
          if (x) {
            // only if valid
            axios
              .post(
                "https://innovaciondocente-utpl.firebaseio.com/formacion-docente/programa-formacion/videos.json",
                this.forma
              )
              .then(function(response) {
                alert("Completado");
                // TODO: fix router
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
textarea {
  height: 160px;
}
</style>
