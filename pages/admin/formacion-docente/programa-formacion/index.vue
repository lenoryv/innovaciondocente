<template>
  <div v-if="data">
    <h1>
      {{data.title}}
    </h1>
    <section>
      <h2>Banner</h2>
      <div class="row">
        <div class="col-md-6">
          <img :src="data.banner"
               alt="banner">
        </div>
        <div class="col-md-6">
          Update Banner
        </div>
      </div>
    </section>
    <section>
      <h2>Cursos</h2>
      <nuxt-link :to="{name : 'admin-formacion-docente-programa-formacion-curso'}"
                 class="btn btn-success btn-sm">
        Agregar Nuevo Curso
      </nuxt-link>
      <pre>
      {{data.cursos}}
    </pre>
    </section>
    <section>
      <h2>Tips de Expertos</h2>
      <nuxt-link :to="{name : 'admin-formacion-docente-programa-formacion-video'}"
                 class="btn btn-success btn-sm">
        Agregar Nuevo Video
      </nuxt-link>
      <pre>
      {{data.videos}}
    </pre>
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
          `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/programa-formacion.json`
        )
        .then(res => (this.data = res.data));
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>
