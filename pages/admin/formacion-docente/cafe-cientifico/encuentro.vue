<template>
  <section class="container">
    <h1>Nuevo Encuentro</h1>
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
      <label for="contenido">Contenido</label>
      <textarea v-model="forma.contenido"
                type="text"
                name="contenido"
                class="form-control"
                v-validate="'required'" />
      <span v-show="errors.has('contenido')"
            class="alert alert-danger">Contenido es requerido</span>
    </div>
    <div class="form-group">
      <label for="fecha">Fecha</label>
      <input type="date"
             v-model="forma.fecha"
             name="fecha"
             class="form-control"
             v-validate="'required'">
      <span v-show="errors.has('fecha')"
            class="alert alert-danger">Fecha es requerido</span>
    </div>
    <h3>Invitados</h3>
    <div class="form-row"
         v-for="(invitado, i) in forma.invitados"
         :key="i">
      <div class="form-group col-lg-4">
        <label :for="`invitado${i}nombre`">Nombre</label>
        <input type="text"
               v-model="forma.invitados[i].nombre"
               :name="`invitado${i}nombre`"
               class="form-control"
               v-validate="'required'">
        <span v-show="errors.has(`invitado${i}nombre`)"
              class="alert alert-danger">Nombre es requerido</span>
      </div>
      <div class="form-group col-lg-8">
        <label :for="`invitado${i}contenido`">Descripcion</label>
        <textarea v-model="forma.invitados[i].descripcion"
                  type="text"
                  :name="`invitado${i}contenido`"
                  class="form-control"
                  v-validate="'required'" />
        <span v-show="errors.has(`invitado${i}contenido`)"
              class="alert alert-danger">Descripcion es requerido</span>
      </div>
    </div>
    <!--Invitados options-->
    <div class="form-row">
      <div class="col-6">
        <button class="btn btn-outline-danger btn-large btn-sm"
                @click="delInvitado">Eliminar Ultimo</button>
      </div>
      <div class="col-6">
        <button class="btn btn-outline-success btn-large btn-sm"
                @click="addInvitado">Añadir Invitado</button>
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
      nombre: "",
      img: "",
      contenido: "",
      fecha: "",
      invitados: [{ nombre: "", descripcion: "" }]
    };
    return { forma };
  },
  methods: {
    addInvitado() {
      this.forma.invitados.push({ nombre: "", descripcion: "" });
    },
    delInvitado() {
      this.forma.invitados.pop();
    },
    submit() {
      this.$validator
        .validateAll()
        .then(x => {
          if (x) {
            // only if valid
            axios
              .post(
                "https://innovaciondocente-utpl.firebaseio.com/formacion-docente/cafe-cientifico/encuentros.json",
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
