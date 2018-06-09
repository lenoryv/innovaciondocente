<template>
  <div class="container"
       v-if="data">
    <section>
      <h1>
        Café Científico
      </h1>
      <h2>Banner</h2>
      <hr>
      <div class="row">
        <div class="col-md-8">
          <img :src="data.banner"
               alt="Banner">
        </div>
        <div class="col-md-4">
          <h3>Nuevo Banner</h3>

        </div>
      </div>
      <br>
      <h3>Portafolio de Encuentros</h3>
      <hr>
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
              :key="key">
            <td>
              <nuxt-link :to="{name: 'formacion-docente-cafe-cientifico-id', params: {id:key}}">
                {{encuentro.nombre | slice(0,70) | capitalize}}
              </nuxt-link>
            </td>
            <td>{{encuentro.fecha}}</td>
            <td>
              <nuxt-link :to="{}"
                         class="btn btn-large btn-outline-dark btn-sm">
                modificar
              </nuxt-link>
              <nuxt-link :to="{}"
                         class="btn btn-large btn-danger btn-sm">
                eliminar
              </nuxt-link>
            </td>
          </tr>
        </table>
      </div>
      <br>
      <h2>
        Suscriptores
      </h2>
      <hr> Generar archivo
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
