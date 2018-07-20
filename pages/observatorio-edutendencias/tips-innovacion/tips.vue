<template>
  <div>
    <header>
      <h1>{{title}}</h1>
    </header>
    <section class="container">
      <div class="row"
           v-if="cards.length > 0">
        <div v-for="card in cards"
             :key="card.key"
             class="col-md-3 col-ms-2">
          <figure class="card6">
            <img :src="card.img"
                 :alt="'img' + card.key" />
            <figcaption>
              <h3>{{card.title|slice(0,40)}}</h3>
              <p>{{card.description|slice(0,80)}}</p>
            </figcaption>
            <a :href="card.url"
               target="_blank"></a>
          </figure>
        </div>
      </div>
      <div v-else>
        <h3>No se encontraton tips para mostrar</h3>
      </div>
      <button @click="$router.go(-1)"
              class="btn btn-outline-primary btn-large">Regresar</button>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData({ query }) {
    let { data } = await axios.get(
      "https://innovaciondocente-utpl.firebaseio.com/observatorio-edutendencias/tips-innovacion.json"
    );
    let title = "Tips de Innovación";
    return { data, title, query };
  },
  computed: {
    cards() {
      let cards = [];
      // push just cards
      for (const k in this.data)
        if (this.data[k].tag == this.query.tag) {
          let d = this.data[k];
          d.key = k;
          cards.push(d);
        }
      // sort cards
      cards.sort(function(a, b) {
        return ("" + b.key).localeCompare(a.key);
      });
      return cards;
    }
  },
  head() {
    return {
      title: this.title + " | Proyecto Ascendere"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/card";
@import "assets/header";
</style>
