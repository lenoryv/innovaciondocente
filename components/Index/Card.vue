<template>
    <div>
        <div class="card_4"
             v-if="nota">
            <div class="card_4__thumb">
                <a href="#"><img :src="nota.img"></a>
            </div>
            <div class="card_4__date">
                <span class="card_4__date__day">{{nota.date.dia}}</span>
                <span class="card_4__date__month">{{nota.date.full | date | slice(3,"")}}</span>
            </div>
            <div class="card_4__body">
                <div class="card_4__category">
                    <a href="#">{{nota.type}}</a>
                </div>
                <div class="card_4__title"
                     v-if="nota.title">
                    <a href="#">{{nota.title | slice(50,"...")}}</a>
                </div>
                <div class="card_4__description">
                    <p>{{nota.description}}</p>
                </div>
                <div class="card_4__footer">
                    <nuxt-link class=""
                               :to="{name: nota.key.name, params: {id: nota.key.id}}">
                        Leer más
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["nota"],
  filters: {
    slice: function(text, length, suffix) {
      if (text.length > length) return text.substring(0, length) + suffix;
      else return text;
    },
  }
};
</script>

<style lang="scss" scoped>
@import "assets/card";
p {
  padding: 0.5rem;
}
</style>