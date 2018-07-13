<template>
  <div class="container"
       v-if="data">
       <pre>{{data}}</pre>
    <section>
      <h2></h2>
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
  async asyncData({ params }) {
    let { data } = await axios.get(
      `https://innovaciondocente-utpl.firebaseio.com/innovacion-docente/buenas-practicas/${params.id}.json` 
    );
    return { data };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";

</style>
