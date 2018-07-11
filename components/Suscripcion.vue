<template>
  <section class="container">
    <h2>Suscribete</h2>
    <p>Obtenga las últimas noticias de Innovación UTPL entregadas en su bandeja de entrada.</p>
    <div class="form-group">
      <input v-model="email"
             type="mail"
             name="email"
             class="form-control"
             placeholder="Correo Electronico"
             v-validate="'required'">
      <span v-show="errors.has('email')">Email es requerido</span>
    </div>
    <button @click="submit"
            class="btn btn-outline-primary btn-large"
            type="submit">
      Suscribirse
    </button>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: ""
    };
  },
  methods: {
    submit(e) {
      this.$validator.validateAll().then(x => {
        if (x) {
          // only if valid
          axios
            .post(
              "https://innovaciondocente-utpl.firebaseio.com/suscripcion/suscripciones.json",
              this.email
            )
            .then(function(response) {
              alert("Te has suscribido");
            })
            .catch(function(error) {
              console.log(error);
              alert("HA OCURRIDO UN ERROR, VUELVE A INTENTARLO");
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/form";
.container {
  background-color: white;
}
</style>