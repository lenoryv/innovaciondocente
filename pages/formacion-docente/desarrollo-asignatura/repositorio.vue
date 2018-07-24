<template>
  <div>
    <header>
      <h1>
        {{title}}
      </h1>
    </header>
    <section class="container">
      <ol class="list-group vertical-steps">
        <li class="list-group-item html"
            v-for="(d, i) in data"
            :key="i"
            v-html="d.html">
        </li>
        <li>
          <button @click="$router.go(-1)"
                  class="btn btn-outline-primary btn-large btn-sm">Regresar</button>
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData() {
    let { data } = await axios.get(
      "https://innovaciondocente-utpl.firebaseio.com/formacion-docente/desarrollo-asignatura/repositorio.json"
    );
    let title = "Manual de uso del repositorio de planes docentes";
    return { data, title };
  },
  head() {
    return {
      title: this.title + " | Proyecto Ascendere",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Manual de uso del repositorio de planes docentes"
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
@import "assets/list";
</style>

