<template>
  <div class="container">
    <h1>
      Edutendencias
    </h1>
    <section>
      <nuxt-link :to="{name : 'admin-observatorio-edutendencias-edutendencias-video'}"
                 class="btn btn-success btn-sm">
        Agregar Nuevo Video
      </nuxt-link>
      <div style="overflow-x:auto;"
           v-if="video">
        <table>
          <tr>
            <th>Nombre</th>
            <th>Opciones</th>
          </tr>
          <tr v-for="(vid, key) in video"
              v-if="vid"
              :key="key">
            <td>
              <nuxt-link :to="{name: 'observatorio-edutendencias-tips-innovacion-videos'}">
                {{vid.title}}
              </nuxt-link>
            </td>
            <td>
              <button v-on:click="remove(key)"
                      class="btn btn-large btn-danger btn-sm">
                eliminar
              </button>
            </td>
          </tr>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  layout: "admin",
  data() {
    return {
      video: null
    };
  },
  methods: {
    loadData() {
      axios
        .get(
          `https://innovaciondocente-utpl.firebaseio.com/observatorio-edutendencias/tips-innovacion/videos.json`
        )
        .then(res => (this.video = res.data));
    },
    remove(key) {
      axios
        .delete(
          `https://innovaciondocente-utpl.firebaseio.com/observatorio-edutendencias/tips-innovacion/videos/${key}.json`
        )
        .catch(e => alert("No se pudo eliminar"));
      this.video[key] = 0;
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid $color-primary;
}
th {
  background-color: $color-primary;
  color: $color-font-primary;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #ddd;
}
</style>
