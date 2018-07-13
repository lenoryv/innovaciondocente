<template>
  <div class="container">
    <h1>
      Aula Divertida
    </h1>
    <section>
      <nuxt-link :to="{name : 'admin-observatorio-edutendencias-tips-innovacion-aula'}"
                 class="btn btn-success btn-sm">
        Agregar Nueva Aula
      </nuxt-link>
      <div style="overflow-x:auto;"
           v-if="tips-innovacion">
        <table>
          <tr>
            <th>Nombre</th>
            <th>Opciones</th>
          </tr>
          <tr v-for="(aula, key) in aulas"
              v-if="aula"
              :key="key">
            <td>
              <nuxt-link :to="{name: 'observatorio-edutendencias-tips-inovacion-id', params: {id:key}}">
                {{cards.titulo | capitalize}}
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
      aulas: null
    };
  },
  methods: {
    loadData() {
      axios
        .get(
          `https://innovaciondocente-utpl.firebaseio.com/observatorio-edutendencias/aula-divertida.json`
        )
        .then(res => (this.aulas = res.data));
    },
    remove(key) {
      axios
        .delete(
          `https://innovaciondocente-utpl.firebaseio.com/observatorio-edutendencias/aula-divertida/${key}.json`
        )
        .catch(e => alert("No se pudo eliminar"));
      this.aulas[key] = 0;
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
