<template>
  <div>
    <header>
      <h1>
        {{data.title}}
      </h1>
    </header>
    <section class="container">
      <p>
        {{data.description}}
      </p>
      <div v-for="(recurso, i) in data.resources"
           :key="i">
        <h2>{{recurso.title}}</h2>
        <div class="card-container">
          <div class="item"
               v-for="(c, i) in recurso.cards"
               :key="i">
            <img v-if="c.img"
                 :src="c.img"
                 alt="img">
            <h3>{{c.title}}</h3>
            <p>{{ c.description }}</p>
          </div>
        </div>
      </div>
      <button @click="$router.go(-1)"
              class="btn btn-outline-primary btn-large btn-sm">Regresar</button>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData() {
    let { data } = await axios.get(
      "https://innovaciondocente-utpl.firebaseio.com/observatorio-edutendencias/recursos-digitales.json"
    );
    return { data };
  },
  head() {
    return {
      title: this.data.title + " | Innovación Docente",
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
@import "assets/variables";
@import "assets/header";
@import "assets/html";
.card-container {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
.item {
  border-radius: 5px;
  padding: 10px;
  grid-row-end: span 6;
  border: 1px solid $color-primary;
}
</style>

