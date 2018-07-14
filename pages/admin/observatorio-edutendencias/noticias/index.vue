<template>
  <div class="container">
    <h1>
      Noticias
    </h1>
    <section>
      <nuxt-link :to="{name : 'admin-observatorio-edutendencias-noticias-noticia'}"
                 class="btn btn-success btn-sm">
        Agregar Nueva Noticia
      </nuxt-link>
      <div style="overflow-x:auto;"
           v-if="noticias">
        <table>
          <tr>
            <th>Nombre</th>
            <th>Opciones</th>
          </tr>
          <tr v-for="(noticia, key) in noticias"
              v-if="noticia"
              :key="key">
            <td>
              <nuxt-link :to="{name: 'observatorio-edutendencias-noticias-id', params: {id:key}}">
                {{noticia.nombre | capitalize}}
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
      noticias: null
    };
  },
  methods: {
    loadData() {
      axios
        .get(
          `https://innovaciondocente-utpl.firebaseio.com/observatorio-edutendencias/noticias.json`
        )
        .then(res => (this.noticias = res.data));
    },
    remove(key) {
      axios
        .delete(
          `https://innovaciondocente-utpl.firebaseio.com/observatorio-edutendencias/noticias/${key}.json`
        )
        .catch(e => alert("No se pudo eliminar"));
      this.noticias[key] = 0;
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
