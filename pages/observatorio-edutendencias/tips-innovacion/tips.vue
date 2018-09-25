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
import { TipsCollection } from "~/plugins/firebase.js";
import Card from "@/components/Index/Card";

export default {
  async asyncData({ query }) {
    let cards = [];
    try {
      let tipsSnap = await TipsCollection.where("tag", "==", query.tag)
        .orderBy("edited", "desc")
        .get();
      cards = tipsSnap.docs.map(doc => {
        let tip = doc.data();
        return {
          key: doc.id,
          type: tip.tag,
          title: tip.name,
          description: tip.description,
          key: {
            name: tip.link
          },
          img: tip.img
        };
      });
    } catch (error) {}
    let title = "Tips de Innovación";
    return { cards, title };
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
