<template>
  <div class="container"
       v-if="data">
    <section>
      <nuxt-link :to="{name : 'admin-innovacion-docente-buenas-practicas-practica', query:{id:parametro}}"
                 class="btn btn-success btn-sm">
        Agregar Nuevo Encuentro
      </nuxt-link>
      <div style="overflow-x:auto;">
        <table>
          <tr>
            <th>Titulo</th>
            <th>Opciones</th>
          </tr>
          <tr v-for="(practicas, key) in data.repositorio"
              v-if="practicas"
              :key="key">
            <td>
              <nuxt-link :to="{name: 'innovacion-docente-buenas-practicas-index-id', params: parametro}">
                {{practicas.titulo}}
              </nuxt-link>
            </td>
            <td>
              <button v-on:click="remove(parametro, key)"
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
  async asyncData({ params }) {
    let { data } = await axios.get(
      `https://innovaciondocente-utpl.firebaseio.com/innovacion-docente/buenas-practicas/${
        params.id
      }.json`
    );
    return { data, parametro: params.id };
  },
  methods: {
    loadData(key) {
      axios
        .get(
          `https://innovaciondocente-utpl.firebaseio.com/innovacion-docente/buenas-practicas/${key}.json`
        )
        .then(res => (this.data = res.data));
    },
    remove(key, indice) {
      console.log(key);
      console.log(indice);
      axios
        .delete(
          `https://innovaciondocente-utpl.firebaseio.com/innovacion-docente/buenas-practicas/${key}/repositorio/${indice}.json`
        )
        .catch(e => alert("No se pudo eliminar"));
      this.data.encuentros[key] = 0;
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