<template>
  <section class="container">
    <h1>Nuevo Encuentro</h1>
    <!--nombre-->
    <div class="form-group">
      <label for="nombre">Nombre del Curso</label>
      <input v-model="forma.nombre"
             type="text"
             name="nombre"
             class="form-control"
             v-validate="'required'">
      <span v-show="errors.has('nombre')"
            class="alert alert-danger">Nombre es requerido</span>
    </div>
    <!--img-->
    <div class="form-group">
      <label for="img">Link de la imagen</label>
      <input v-model="forma.img"
             type="text"
             name="img"
             class="form-control"
             v-validate="'required'">
      <span v-show="errors.has('img')"
            class="alert alert-danger">Imagen es requerido</span>
    </div>
    <!--fecha-->
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
    <!--instructor-->
    <label>Instructores</label>
    <div class="form-row"
         v-for="(instructor, i) in forma.instructores"
         :key="`instructor${i}`">
      <div class="form-group col-md-6">
        <label>Nombre</label>
        <input v-model="forma.instructores[i].nombre"
               type="text"
               :name="`instructor${i}nombre`"
               class="form-control"
               v-validate="'required'">
        <span v-show="errors.has(`instructor${i}nombre`)"
              class="alert alert-danger">Instructor es requerido</span>
      </div>
      <div class="form-group col-md-6">
        <label>Proviene de:</label>
        <input v-model="forma.instructores[i].small"
               type="text"
               class="form-control">
      </div>
    </div>
    <div class="row">
      <div class=" col-md-6">
        <button class="btn btn-outline-danger btn-sm btn-large"
                @click="delInstructor">Eliminar Ultimo</button>
      </div>
      <div class=" col-md-6">
        <button class="btn btn-outline-success btn-sm btn-large"
                @click="addInstructor">Añadir un instructor</button>
      </div>
    </div>
    <!--postulacion-->
    <div class="form-group form-row">
      <div class="col-md-6">
        <label for="postulacion">Fecha de Postulaciones</label>
        <input type="date"
               v-model="forma.postulacion"
               name="postulacion"
               class="form-control"
               v-validate="'required'">
        <span v-show="errors.has('postulacion')"
              class="alert alert-danger">Fecha de Postulaciones es requerido</span>
      </div>
      <div class="col-md-6">
        <label for="link_postulacion">Link para Postulaciones</label>
        <input type="text"
               v-model="forma.link_postulacion"
               name="postulacion"
               class="form-control"
               v-validate="'required'">
        <span v-show="errors.has('postulacion')"
              class="alert alert-danger">Link de Postulaciones es requerido</span>

      </div>
    </div>
    <!--duracion-->
    <div class="form-group form-row">
      <div class="col-md-6">
        <label for="duracionSemanas">Duración en semanas</label>
        <input type="text"
               v-model="forma.duracionSemanas"
               name="duracionSemanas"
               class="form-control"
               v-validate="'required|numeric'">
        <span v-show="errors.has('duracionSemanas')"
              class="alert alert-danger">Semanas tiene que ser valido</span>
      </div>
      <div class="col-md-6">
        <label for="duracionHoras">Duración en horas</label>
        <input type="text"
               v-model="forma.duracionHoras"
               name="duracionHoras"
               class="form-control"
               v-validate="'required|numeric'">
        <span v-show="errors.has('duracionHoras')"
              class="alert alert-danger">Horas tiene que ser valido</span>

      </div>
    </div>
    <!--horario-->
    <div class="form-group">
      <label for="horario">Horario</label>
      <input v-model="forma.horario"
             type="text"
             name="horario"
             class="form-control"
             v-validate="'required'">
      <span v-show="errors.has('horario')"
            class="alert alert-danger">Horario es requerido</span>
    </div>
    <!--modulo-->
    <div class="form-group">
      <label for="modulo">Módulo</label>
      <input v-model="forma.modulo"
             type="text"
             name="modulo"
             class="form-control"
             v-validate="'required'">
      <span v-show="errors.has('modulo')"
            class="alert alert-danger">Módulo es requerido</span>
    </div>
    <!--dirigido-->
    <div class="form-group">
      <label for="dirigido">Dirigido</label>
      <input v-model="forma.dirigido"
             type="text"
             name="dirigido"
             class="form-control">
    </div>
    <!--urlContenido-->
    <div class="form-group">
      <label for="urlContenido">Link para descargar los contenidos del curso </label>
      <input v-model="forma.urlContenido"
             type="text"
             name="urlContenido"
             class="form-control"
             v-validate="'required'">
      <span v-show="errors.has('urlContenido')"
            class="alert alert-danger">El link es requerido</span>
    </div>
    <!--Finalidades-->
    <label>Finalidades de la formación</label>
    <div v-for="(finalidad, i) in forma.finalidades"
         :key="`finalidad${i}`">
      <div class="form-group">
        <input type="text"
               v-model="forma.finalidades[i].nombre"
               :name="`finalidad${i}nombre`"
               class="form-control"
               v-validate="'required'">
        <span v-show="errors.has(`finalidad${i}nombre`)"
              class="alert alert-danger">Finalidad es requerido</span>
      </div>
    </div>
    <div class="form-row">
      <div class="col-6">
        <button class="btn btn-outline-danger btn-large btn-sm"
                @click="delFinalidad">Eliminar Ultimo</button>
      </div>
      <div class="col-6">
        <button class="btn btn-outline-success btn-large btn-sm"
                @click="addFinalidad">Añadir Finalidad</button>
      </div>
    </div>
    <!--Buttons forma-->
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
      nombre: null,
      imgW: null,
      fecha: null,
      instructores: [{ nombre: null, small: null }],
      postulacion: null,
      link_postulacion: null,
      duracionSemanas: null,
      duracionHoras: null,
      horario: null,
      modulo: null,
      dirigido: null,
      urlContenido: null,
      finalidades: [{ nombre: null }]
    };
    return { forma };
  },
  methods: {
    addInstructor() {
      this.forma.instructores.push({ nombre: "", small: "" });
    },
    delInstructor() {
      this.forma.instructores.pop();
    },
    addFinalidad() {
      this.forma.finalidades.push({ nombre: "" });
    },
    delFinalidad() {
      this.forma.finalidades.pop();
    },
    submit() {
      this.$validator
        .validateAll()
        .then(x => {
          if (x) {
            // only if valid
            axios
              .post(
                "https://innovaciondocente-utpl.firebaseio.com/formacion-docente/programa-formacion/cursos.json",
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
