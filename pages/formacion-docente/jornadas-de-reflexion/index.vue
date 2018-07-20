<template>
  <section class="container">
    <div class="row">
      <div class="col-lg-3">
        <FormaJornada v-bind:LinkKey="encuentro.key"></FormaJornada>
        <nuxt-link :to="{name: 'formacion-docente-jornadas-de-reflexion-jornadas-anteriores'}"
                   class="btn btn-large btn-outline-primary btn-sm">
          <i class="fas fa-folder"></i> Portafolio <br> de Jornadas
        </nuxt-link>
      </div>
      <div class="col-lg-8">
        <h1>Jornada de Reflexión Académica</h1>
        <small v-if="encuentro.data.autor">
          <i class="fas fa-user"></i> {{encuentro.data.autor}}
        </small>
        <small v-if="encuentro.data.date">
          <br>
          <i class="fas fa-calendar-alt"></i> {{encuentro.data.date | date}}
        </small>
        <hr>
        <div v-html="encuentro.data.html"
             class="html"></div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import FormaJornada from "@/components/FormaJornada";
export default {
  async asyncData() {
    let { data } = await axios.get(
      "https://innovaciondocente-utpl.firebaseio.com/formacion-docente/jornadas-de-reflexion.json?orderBy=%22$key%22&limitToLast=1"
    );

    let encuentro = null;
    for (const key in data) {
      encuentro = { key: key, data: data[key] };
    }

    return { encuentro };
  },
  head() {
    return {
      title: "Jornadas de Reflexión | Proyecto Ascendere",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.encuentro.description
        }
      ]
    };
  },
  components: {
    FormaJornada
  }
};
</script>

<style lang="scss" scoped>
@import "assets/html";
</style>
