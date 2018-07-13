<template>
  <section class="container">
    <h1>Nueva Práctica</h1>
    <div class="form-group">
      <label for="titulo">Titulo</label>
      <input v-model="forma.titulo"
             type="text"
             name="titulo"
             class="form-control"
             v-validate="'required'">
      <span v-show="errors.has('titulo')"
            class="alert alert-danger">Titulo es requerido</span>
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
      <label for="infografia">Infografía(url)</label>
      <input v-model="forma.infografia"
                type="text"
                name="infografia"
                class="form-control"
                v-validate="'required'" />
      <span v-show="errors.has('infografia')"
            class="alert alert-danger">Infografía es requerida</span>
    </div>
    <div class="form-group">
      <label for="url">PDF(url)</label>
      <input type="text"
             v-model="forma.url"
             name="url"
             class="form-control"
             v-validate="'required'">
      <span v-show="errors.has('url')"
            class="alert alert-danger">PDF es requerido</span>
    </div>
    <h3>Docentes involucrados</h3>
    
      <div class="form-group"  v-for="(docente, i) in forma.docentes"
         :key="i">
        <label :for="`docente${i}`">Nombre del Docente</label>
        <input type="text"
               v-model="forma.docentes[i]"
               :name="`docente${i}`"
               class="form-control"
               v-validate="'required'">
        <span v-show="errors.has(`docente${i}`)"
              class="alert alert-danger">Nombre es requerido</span>
    </div>
    <!--Docentes options-->
    <div class="form-row">
      <div class="col-6">
        <button class="btn btn-outline-danger btn-large btn-sm"
                @click="delDocente">Eliminar Ultimo</button>
      </div>
      <div class="col-6">
        <button class="btn btn-outline-success btn-large btn-sm"
                @click="addDocente">Añadir Docente</button>
      </div>
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
      titulo: null,
      img: null,
      infografia: null,
      url: null,
      docentes: [null]
    };
    return { forma };
  },
  methods: {
    addDocente() {
      this.forma.docentes.push("");
    },
    delDocente() {
      this.forma.docentes.pop();
    },
    submit() {
      this.$validator
        .validateAll()
        .then(x => {
          if (x) {
            // only if valid
            axios
              .post(
                "https://innovaciondocente-utpl.firebaseio.com/innovacion-docente/buenas-practicas/0/repositorio.json",
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
</style>