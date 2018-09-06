<template>
  <div>
    <header>
      <h1>{{title}}</h1>
    </header>
    <section class="container">
      <div class="row"
           v-if="cards.length > 0">
        <div v-for="(card, i) in cards"
             :key="i"
             class="col-lg-4 col-md-6">
          <card :nota="card" />
          <!--
          <figure class="card6">
            <img :src="card.img"
                 :alt="'img' + card.key" />
            <figcaption>
              <h3>{{card.title}}</h3>
              <p>
                <a :href="card.url"
                   target="_blank"></a>
              </p>
            </figcaption>
          </figure>
        -->
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
import Card from "@/components/Index/Card";

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
          let tempDate = d.date.split("-");
          cards.push({
            key: k,
            type: this.query.tag,
            title: d.title,
            date: {
              full: d.date,
              dia: tempDate[2],
              mes: tempDate[1]
            },
            description: d.description,
            key: {
              name: d.url
            },
            img: d.img
          });
        }
      // sort cards
      cards.sort(function(a, b) {
        return ("" + b.key).localeCompare(a.key);
      });
      return cards;
    }
  },
  components: {
    card: Card
  },
  head() {
    return {
      title: this.title 
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/card";
@import "assets/header";
</style>
