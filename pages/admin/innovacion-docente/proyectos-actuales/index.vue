<template>
    <div class="container" v-if="data">
        <h1>Proyectos Actuales</h1>
        <section>
      <h2>Portafolio de Proyectos</h2>
      <nuxt-link :to="{name : 'admin-innovacion-docente-proyectos-actuales-proyecto'}"
                 class="btn btn-success btn-sm">
        Agregar Nuevo Proyecto
      </nuxt-link>
      <div style="overflow-x:auto;">
        <table>
          <tr>
            <th>Titulo</th>
            <th>Opciones</th>
          </tr>
          <tr v-for="(proyecto, key) in data"
              v-if="proyecto"
              :key="key">
            <td>
              <nuxt-link :to="{name: 'innovacion-docente-proyectos-actuales'}">
                {{proyecto.title}}
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
      <br>
    </section>
    </div>
</template>

<script>
import axios from "axios";
export default {
  layout: "admin",
  data() {
    return {
      data: null
    };
  },
  methods: {
    loadData() {
      axios
        .get(
          `https://innovaciondocente-utpl.firebaseio.com/innovacion-docente/proyectos-actuales.json`
        )
        .then(res => (this.data = res.data));
    },
    remove(key) {
      axios
        .delete(
          `https://innovaciondocente-utpl.firebaseio.com/innovacion-docente/proyectos-actuales/${key}.json`
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

