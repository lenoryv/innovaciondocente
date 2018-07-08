<template>
    <div>
        <div class="card_4"
             v-if="nota">
            <div class="card_4__thumb">
                <a href="#"><img :src="nota.img"></a>
            </div>
            <div class="card_4__date">
                <span class="card_4__date__day">23</span>
                <span class="card_4__date__month">Mai</span>
            </div>
            <div class="card_4__body">
                <div class="card_4__category">
                    <a href="#">{{nota.type}}</a>
                </div>
                <div class="card_4__title">
                    <a href="#">{{nota.title}}</a>
                </div>
                <div class="card_4__subtitle">{{nota.subtitle}}</div>
                <div class="card_4__description">
                    <p>{{nota.description}}</p>
                </div>
                <div class="card_4__footer">
                    <nuxt-link class=""
                               :to="{name: ''}">
                        Leer más +
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["nota"]
};
</script>

<style lang="scss" scoped>
@import "assets/card";
p {
  padding: 0.5rem;
}
</style>