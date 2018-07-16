<template>
  <section v-bind:class="[{'blue':blue}]">
    <div class="container">
      <h2>{{title}}</h2>
      <p>{{description}}</p>
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
              v-bind:class="[{'btn-inverse':blue},{'btn-outline-primary':!blue}]"
              class="btn btn-large btn-small"
              type="submit">
        Suscribirse
      </button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  props: ["title", "description", "blue"],
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
.blue {
  color: $color-font-primary;
  background-color: $color-primary;
}
</style>
