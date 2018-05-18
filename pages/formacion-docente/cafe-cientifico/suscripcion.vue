<template>
<div class="container">
  <h1>Suscribete a nuestro Café científico</h1>
  <div class="form-group">
    <label for="nombre">Nombre</label>
    <input v-model="forma.nombre" type="text" name="nombre" class="form-control" placeholder="Primer Nombre" v-validate="'required'">
    <span v-show="errors.has('nombre')" class="invalid-feedback">Nombre es requerido</span>
  </div>
  <div class="form-group">
    <label for="apellido">Apellido</label>
    <input v-model="forma.apellido" type="text" name="apellido" class="form-control" placeholder="Primer apellido" v-validate="'required'">
    <span v-show="errors.has('apellido')" class="invalid-feedback">Apellido es requerido</span>
  </div>
  <div class="form-group">
    <label for="titulacion">Titulación</label>
    <input v-model="forma.titulacion" type="text" name="titulacion" class="form-control" placeholder="Primer titulacion" v-validate="'required'">
    <span v-show="errors.has('titulacion')" class="invalid-feedback">Titulación es requerido</span>
  </div>
  <div class="form-group">
    <label for="email">Correo Electronico</label>
    <input v-model="forma.email" class="form-control" name="email" type="text" placeholder="Email" v-validate="'required|email'">
    <span v-show="errors.has('email')" class="invalid-feedback">Tiene que ser un email valido</span>
  </div>
  <div class="form-group">
    <label for="telefono">Teléfono Celular</label>
    <input v-model="forma.telefono" class="form-control" name="telefono" type="text" placeholder="Número de telefono" v-validate="'required|numeric'">
    <span v-show="errors.has('telefono')" class="invalid-feedback">Tiene que ser un número valido</span>
  </div>
  <div class="form-group">
    <label for="universidad">Universidad</label>
    <input v-model="forma.universidad" class="form-control" name="universidad" type="text" placeholder="Universidad" v-validate="'required'">
    <span v-show="errors.has('universidad')" class="invalid-feedback">Universidad es requerido</span>
  </div>
  <div class="form-group">
      <label for="ciudad">Ciudad</label>
      <select v-model="forma.ciudad" class="form-control" id="ciudad">
          <option value="Loja">Loja</option>
          <option value="Cuenca">Cuenca</option>
          <option value="Guayaquil">Guayaquil</option>
          <option value="Quito">Quito</option>
      </select>
  </div>
  <div class="form-group form-check">
    <input v-model="forma.whatsapp" type="checkbox" class="form-check-input" id="whatsapp">
      <label class="form-check-label" for="whatsapp">¿Desearías que la información de los eventos de formación e innovación docente te lleguen por medio de WhatsApp?</label>
  </div>
  <div class="form-group">
    <div class="row">
      <div class="col-6">
    <nuxt-link class="btn btn-danger btn-large" :to="{name: 'formacion-docente-cafe-cientifico'}">Cancelar</nuxt-link>

      </div>
      <div class="col-6">
    <button @click="validateBeforeSubmit" class="btn btn-success btn-large">Suscribirse</button>

      </div>
    </div>
  </div>
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
      whatsapp: false,
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
.form-group {
  margin-bottom: 1rem;
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: $color-font;
  background-color: $color-background;
  background-clip: padding-box;
  border: 1px solid $color-primary;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media screen and (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}

.form-control:focus {
  color: $color-font;
  outline: 0;
  box-shadow: 0 0 0 0.2rem lighten($color: $color-primary-dark, $amount: 60);
}

.form-control::placeholder {
  color: $color-font-light;
}

.form-check {
  position: relative;
  display: block;
  padding-left: 1.25rem;
}

.form-check-input {
  position: absolute;
  margin-top: 0.3rem;
  margin-left: -1.25rem;
}

.form-check-label {
  color: $color-font-light;
  margin-bottom: 0;
}

.invalid-feedback {
  display: block;
  width: 100%;
  color: $color-font-primary;
  background-color: lighten($color: $color-danger, $amount: 5);
  border: 1px solid $color-danger;
  border-radius: 5px;
  padding: 0.25rem;
  transition: opacity 0.5s;
}
</style>
