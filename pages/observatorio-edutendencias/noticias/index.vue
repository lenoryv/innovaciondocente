<template>
  <section>
    <h1>
      Noticias
    </h1>
    <div class="container">
      <div class="content"
           v-for="(noticia, i) in noticias"
           :key="i"
           :style="'background-image: url('+noticia.data.img+');'">
        <div class="overlay">
          <div class="data">
            <nuxt-link :to="{name: 'observatorio-edutendencias-noticias-id', params: {id:noticia.key}}"
                       tag="h3">
              {{noticia.data.nombre | capitalize}}
            </nuxt-link>
            <p>{{noticia.data.description}}
              <br>
              <nuxt-link :to="{name: 'observatorio-edutendencias-noticias-id', params: {id:noticia.key}}">
                Leer más...
              </nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  async asyncData() {
    let { data } = await axios.get(
      `https://innovaciondocente-utpl.firebaseio.com/observatorio-edutendencias/noticias.json`
    );
    return { data };
  },
  computed: {
    noticias() {
      let resp = [];
      for (const key in this.data) {
        resp.push({ key: key, data: this.data[key] });
      }
      resp.sort(function(a, b) {
        return ("" + b.key).localeCompare(a.key);
      });
      return resp;
    }
  },
  head() {
    return {
      title: "Noticias | Innovación Docente"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
$size: 250px;

.container {
  display: grid;
  grid-auto-rows: $size;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(auto-fit, minmax($size, 1fr));
  grid-gap: 5px;
}
.content {
  background-repeat: no-repeat;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  &:nth-child(1) {
    grid-column-end: span 2;
  }
  &:nth-child(8n + 0) {
    grid-row-end: span 2;
  }
  &:nth-child(5n + 0) {
    grid-column-end: span 2;
  }
  @media (min-width: 540px) {
    &:nth-child(1) {
      grid-row-end: span 2;
      grid-column-end: span 3;
    }
    &:nth-child(10n + 0) {
      grid-column-end: span 3;
    }
  }
  .overlay {
    position: relative;
    height: 100%;
    width: 100%;
    color: $color-font-primary;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      $color-dark
    );
    .data {
      padding: 20px;
      position: absolute;
      bottom: 0px;
      max-width: 100%;
      max-height: 100%;
      overflow: auto;
      text-align: justify;
      h3:hover {
        cursor: pointer;
        text-decoration: underline;
      }
      p,
      a {
        display: none;
        color: $color-font-primary;
      }
      a {
        float: right;
      }
    }
  }
}
.overlay:hover {
  background: rgba($color-dark, 0.8);
  .data {
    p,
    a {
      display: inline;
    }
  }
}
</style>
