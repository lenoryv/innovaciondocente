<template>
  <section class="container">
    <h1>{{data.nombre}}</h1>
    <small v-if="data.autor">
      <i class="fas fa-user"></i> {{data.autor}}
    </small>
    <small v-if="data.date">
      <br>
      <i class="fas fa-calendar-alt"></i> {{data.date | date}}
    </small>
    <hr>
    <div v-html="data.html"
         class="html"></div>
    <button @click="$router.go(-1)"
            class="btn btn-outline-primary btn-large">Regresar</button>
  </section>
</template>

<script>
import axios from "axios";
export default {
  async asyncData({ params }) {
    let { data } = await axios.get(
      `https://innovaciondocente-utpl.firebaseio.com/observatorio-edutendencias/noticias/${
        params.id
      }.json`
    );
    return { data };
  },
  head() {
    return {
      title: this.data.nombre + " | Proyecto Ascendere",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.data.description
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/html";
</style>
