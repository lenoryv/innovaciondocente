<template>
    <section class="container">
        <h1>Nueva Convocatoria</h1>
        <div class="form-group">
            <label for="fecha">Periodo Académico</label>
            <input v-model="forma.fecha"
                   type="text"
                   name="fecha"
                   class="form-control"
                   v-validate="'required'">
            <span v-show="errors.has('fecha')"
                  class="alert alert-danger">El Periodo académico es requerido</span>
        </div>
        <div class="form-group">
            <label for="url">Convocatoria (pdf)</label>
            <input v-model="forma.url"
                   type="text"
                   name="url"
                   class="form-control"
                   v-validate="'required'">
            <span v-show="errors.has('url')"
                  class="alert alert-danger">URL de la convocatoria es requerida</span>
        </div>
        <!--Bbuttons forma-->
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
      fecha: null,
      url: null
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
                "https://innovaciondocente-utpl.firebaseio.com/innovacion-docente/convocatorias.json",
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
