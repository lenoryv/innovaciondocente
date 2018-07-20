<template>
    <div>
        <div class="card_4"
             v-if="nota">
            <div class="card_4__thumb">
                <img :src="nota.img">
            </div>
            <div class="card_4__date">
                <span class="card_4__date__day">{{nota.date.dia}}</span>
                <span class="card_4__date__month"
                      v-if="nota.date.full">{{nota.date.full | date | slice(5,9,"")}}</span>
            </div>
            <div class="card_4__body">
                <div class="card_4__category">
                    <a>{{nota.type}}</a>
                </div>
                <div class="card_4__title"
                     v-if="nota.title">
                    <nuxt-link class=""
                               :to="{name: nota.key.name, params: {id: nota.key.id}}">
                        {{nota.title | slice(0,40,"...")}}
                    </nuxt-link>
                    <a href="#"></a>
                </div>
                <div class="card_4__description">
                    <p>{{nota.description}}</p>
                </div>
                <div class="card_4__footer">
                    <nuxt-link v-if="nota.key.id"
                               :to="{name: nota.key.name, params: {id: nota.key.id}}">
                        Leer más
                    </nuxt-link>
                    <a v-else
                       :href="nota.key.name"
                       target="_blank">Leer más</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["nota"],
  filters: {
    slice: function(text, start, length, suffix) {
      if (text.length > length) return text.substring(start, length) + suffix;
      else return text;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/card";
p {
  padding: 0.5rem;
}
</style>