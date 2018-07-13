<template>
  <div class="container"
       v-if="data">
    <section>
      <h2></h2>
      <nuxt-link :to="{name : 'admin-innovacion-docente-buenas-practicas-practica'}"
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
              <nuxt-link :to="{name: 'innovacion-docente-buenas-practicas-index-id', params: {id : key}}">
                {{practicas.titulo}}
              </nuxt-link>
            </td>
            <td>
              <button v-on:click="remove($params.id.key, key)"
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
      `https://innovaciondocente-utpl.firebaseio.com/innovacion-docente/buenas-practicas/${params.id}.json` 
    );
    return { data };
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

</style>
