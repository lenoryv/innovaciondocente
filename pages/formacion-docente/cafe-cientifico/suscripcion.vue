<template>
<div class="container">
  <h1>Suscribete a nuestro Café científico</h1>
  <form>
      <div class="form-group">
          <label for="nombre">Nombre</label>
          <input type="text" class="form-control" id="nombre" placeholder="Nombre">
      </div>
      <div class="form-group">
          <label for="apellido">Apellido</label>
          <input type="text" class="form-control" id="apellido" placeholder="Apellido">
      </div>
      <div class="form-group">
          <label for="titulacion">Titulación</label>
          <input type="text" class="form-control" id="titulacion" placeholder="Titulación">
      </div>
      <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Email ">
      </div>
      <div class="form-group">
          <label for="telefono">Teléfono Celular</label>
          <input type="text" class="form-control" id="telefono" placeholder="Teléfono Celular">
      </div>
      <div class="form-group">
          <label for="ciudad">Ciudad</label>
          <select class="form-control" id="ciudad">
              <option>-Seleccionar-</option>
              <option>Loja</option>
              <option>Cuenca</option>
              <option>Guayaquil</option>
              <option>Quito</option>
          </select>
      </div>
      <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="whatsapp">
          <label class="form-check-label" for="whatsapp">¿Desearías que la información de los eventos de formación e innovación docente te lleguen por medio de WhatsApp?</label>
      </div>
      <button type="submit">Submit</button>
      <nuxt-link tag="button" :to="{name: 'formacion-docente-cafe-cientifico'}">Cancelar</nuxt-link>
  </form>
</div>
</template>

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
  box-shadow: 0 0 0 0.2rem $color-primary-dark;
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
}

.form-check-label {
  margin-bottom: 0;
}
</style>
