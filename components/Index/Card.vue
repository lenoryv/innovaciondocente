<template>
    <div>
        <div class="card_4"
             v-if="nota">
            <div class="card_4__thumb">
                <a href="#"><img :src="nota.img"></a>
            </div>
            <div class="card_4__date">
                <span class="card_4__date__day">05</span>
                <span class="card_4__date__month">{{nota.date.mes | formatMes}}</span>
            </div>
            <div class="card_4__body">
                <div class="card_4__category">
                    <a href="#">{{nota.type}}</a>
                </div>
                <div class="card_4__title"
                     v-if="nota.title">
                    <a href="#">{{nota.title | slice(50,"...") }}</a>
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
    formatMes: function(mes) {
        switch (mes) {
            case 1: { mes = "Ene"; break; }
            case 2: { mes = "Feb"; break; }
            case 3: { mes = "Mar"; break; }
            case 4: { mes = "Abr"; break; }
            case 5: { mes = "May"; break; }
            case 6: { mes = "Jun"; break; }
            case 7: { mes = "Jul"; break; }
            case 8: { mes = "Ago"; break; }
            case 9: { mes = "Sep"; break; }
            case 10: { mes = "Oct"; break; }
            case 11: { mes = "Nov"; break; }
            case 12: { mes = "Dic"; break; }
        }
        console.log(mes);
        return `${mes}`;
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