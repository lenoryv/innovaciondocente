<template>
  <div class="container"
       v-if="data">
    <h1>
      Café Científico
    </h1>
    <section>
      <h2>Portafolio de Encuentros</h2>
      <nuxt-link :to="{name : 'admin-formacion-docente-cafe-cientifico-encuentro'}"
                 class="btn btn-success btn-sm">
        Agregar Nuevo Encuentro
      </nuxt-link>
      <div style="overflow-x:auto;">
        <table>
          <tr>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Opciones</th>
          </tr>
          <tr v-for="(encuentro, key) in data.encuentros"
              v-if="encuentro"
              :key="key">
            <td>
              <nuxt-link :to="{name: 'formacion-docente-cafe-cientifico-id', params: {id:key}}">
                {{encuentro.nombre | slice(0,70) | capitalize}}
              </nuxt-link>
            </td>
            <td>{{encuentro.fecha}}</td>
            <td>
              <!--
                TODO: add modify
              <nuxt-link :to="{name: 'admin-formacion-docente-cafe-cientifico-encuentro', query: {id:key}}"
                         class="btn btn-large btn-outline-dark btn-sm">
                modificar
              </nuxt-link>
              -->
              <button v-on:click="remove(key)"
                      class="btn btn-large btn-danger btn-sm">
                eliminar
              </button>
            </td>
          </tr>
        </table>
      </div>
      <br>
      <h2>
        Suscriptores
      </h2>
      Generar archivo
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
          `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/cafe-cientifico.json`
        )
        .then(res => (this.data = res.data));
    },
    remove(key) {
      axios
        .delete(
          `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/cafe-cientifico/encuentros/${key}.json`
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
