<template>
  <section class="cafe-cientifico"
           v-if="cafecientifico">
    <div class="container">
      <div class="row">
        <div>
          <h2>Café Científico</h2>
          <p>Encuentro Café Científico es un evento en el que expertos y profesionales en diferentes campos,
            dialogan y problematizan sobre un tema actual de una forma diferente e informal. Su finalidad
            de escuchar opiniones diversas y realizar algunos postulados que contribuyan al trabajo posterior
            y que ayuden a fomentar inquietudes que despierten una entretenida discusión.</p>
        </div>
        <div class="col-md-6 section-text">
          <hr>
          <h3>{{cafecientifico.data.nombre}}</h3>
          <p>{{cafecientifico.data.contenido | slice(0,500) }}</p>

        </div>
        <div class="col-md-6">
          <figure>
            <img :src="cafecientifico.data.img">
          </figure>
          <nuxt-link class="btn btn-large btn-inverse"
                     :to="{name: 'formacion-docente-cafe-cientifico-id',  params: {id: cafecientifico.key}}"
                     tag="div">
            Leer más
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return { data: {} };
  },
  computed: {
    cafecientifico() {
      for (const key in this.data) {
        return { key: key, data: this.data[key] };
      }
    }
  },
  mounted() {
    axios
      .get(
        `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/cafe-cientifico/encuentros.json?orderBy=%22$key%22&limitToLast=1`
      )
      .then(res => (this.data = res.data))
      .catch(err => console.error(err));
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";

.cafe-cientifico {
  color: #fff;
  background: $color-primary;
  h2 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 45px;
  }
  p {
    text-align: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    span {
      color: $color-warning;
    }
  }
}
.section-text {
  p {
    text-align: justify;
    padding: 10px;
  }
  h3 {
    text-align: center;
    padding: 10px;
  }
}
figure {
  overflow: hidden;
  padding-top: 2rem;
  padding-bottom: 50% !important;
  height: 0;
  margin: 0;
  img {
    display: block;
    width: 100%;
  }
}
</style>