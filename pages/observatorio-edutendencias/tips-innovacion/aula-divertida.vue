<template>
  <div class="container">
    <section>
    <div class="row">
      <div class="col-lg-4"
           v-for="(card,i) in aulas[0].cards"
           :key="i">
        <div class="flip flip-vertical" :style="'background-color:'">
          <div class="front" :style="'background-image: url('+card.img+');'">
            <h3>{{card.titulo}}</h3>
          </div>
          <div class="back">
            <p>{{card.descripcion}}</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "assets/card";

.front{
background-color: aqua;
}

</style>
<script>
import aulas from "@/static/data/aula-divertida.json";
export default {
  asyncData() {
    return { aulas };
  }
};
</script>



