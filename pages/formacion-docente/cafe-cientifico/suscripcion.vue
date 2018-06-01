<template>
  <div class="container">
    <h1>Suscribete a nuestro Café científico</h1>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="nombre">Nombre</label>
          <input v-model="forma.nombre"
                 type="text"
                 id="nombre"
                 class="form-control"
                 placeholder="Nombre"
                 v-validate="'required'">
          <span v-show="errors.has('nombre')"
                class="invalid-feedback">Nombre es requerido</span>
        </div>
        <div class="form-group col-md-6">
          <label for="apellido">Apellido</label>
          <input v-model="forma.apellido"
                 type="text"
                 id="apellido"
                 class="form-control"
                 placeholder="Apellido"
                 v-validate="'required'">
          <span v-show="errors.has('apellido')"
                class="invalid-feedback">Apellido es requerido</span>
        </div>
      </div>
      <div class="form-group">
        <label for="titulacion">Titulación</label>
        <input v-model="forma.titulacion"
               type="text"
               id="titulacion"
               class="form-control"
               placeholder="Primer titulacion"
               v-validate="'required'">
        <span v-show="errors.has('titulacion')"
              class="invalid-feedback">Titulación es requerido</span>
      </div>
      <div class="form-group">
        <label for="email">Correo Electronico</label>
        <input v-model="forma.email"
               class="form-control"
               id="email"
               type="text"
               placeholder="Email"
               v-validate="'required|email'">
        <span v-show="errors.has('email')"
              class="invalid-feedback">Tiene que ser un email valido</span>
      </div>
      <div class="form-group">
        <label for="telefono">Teléfono Celular</label>
        <input v-model="forma.telefono"
               class="form-control"
               id="telefono"
               type="text"
               placeholder="Número de telefono"
               v-validate="'required|numeric'">
        <span v-show="errors.has('telefono')"
              class="invalid-feedback">Tiene que ser un número valido</span>
      </div>
      <div class="form-group">
        <label for="universidad">Universidad</label>
        <input v-model="forma.universidad"
               class="form-control"
               id="universidad"
               type="text"
               placeholder="Universidad"
               v-validate="'required'">
        <span v-show="errors.has('universidad')"
              class="invalid-feedback">Universidad es requerido</span>
      </div>
      <div class="form-group">
        <label for="ciudad">Ciudad</label>
        <select v-model="forma.ciudad"
                class="form-control"
                id="ciudad">
          <option value="Loja">Loja</option>
          <option value="Cuenca">Cuenca</option>
          <option value="Guayaquil">Guayaquil</option>
          <option value="Quito">Quito</option>
        </select>
      </div>
      <div class="form-group form-check">
        <input v-model="forma.whatsapp"
               type="checkbox"
               class="form-check-input"
               id="whatsapp">
        <label class="form-check-label"
               for="whatsapp">¿Desearías que la información de los eventos de formación e innovación docente te lleguen por
          medio de WhatsApp?</label>
      </div>
      <div class="form-row">
        <div class="col-6">
          <nuxt-link class="btn btn-outline-danger btn-large"
                     :to="{name: 'formacion-docente-cafe-cientifico'}">Cancelar</nuxt-link>

        </div>
        <div class="col-6">
          <button @click="validateBeforeSubmit"
                  class="btn btn-success btn-large"
                  type="submit"
                  v-bind:class="{ disabled: errors.items.length > 0 }">
            Suscribirse
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    let forma = {
      nombre: "",
      apellido: "",
      ciudad: "Loja",
      telefono: 0,
      whatsapp: true,
      titulacion: "",
      universidad: "UTPL"
    };
    return {
      forma
    };
  },
  methods: {
    validateBeforeSubmit(e) {
      this.$validator
        .validateAll()
        .then(x => {
          console.log(x);
        })
        .catch(e => {
          console.log(e);
        });
      console.log(this.forma);
    }
  }
};
</script>


<style lang="scss" scoped>
@import "assets/variables";
@import "assets/form";
</style>
