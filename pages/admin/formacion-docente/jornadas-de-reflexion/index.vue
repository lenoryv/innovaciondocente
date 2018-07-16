<template>
  <div class="container">
    <h1>
      Jornadas de Refrecion
    </h1>
    <section>
      <nuxt-link :to="{name : 'admin-formacion-docente-jornadas-de-reflexion-jornada'}"
                 class="btn btn-success btn-sm">
        Agregar Nueva Jornada
      </nuxt-link>
      <div v-if="jornadas">
        <table>
          <tr>
            <th>Nombre</th>
            <th>Opciones</th>
          </tr>
          <tr v-for="(jornada, key) in jornadas"
              v-if="jornada"
              :key="key">
            <td>
              <nuxt-link :to="{name: 'formacion-docente-jornadas-de-reflexion-jornadas-anteriores-id', params: {id:key}}">
                {{jornada.nombre | capitalize}}
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
      jornadas: null
    };
  },
  methods: {
    loadData() {
      axios
        .get(
          `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/jornadas-de-reflexion.json`
        )
        .then(res => (this.jornadas = res.data));
    },
    remove(key) {
      axios
        .delete(
          `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/jornadas-de-reflexion/${key}.json`
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
