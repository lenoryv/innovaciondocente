<template>
<div class="container">
    <h1>
        {{$route.params.id}}
    </h1>
</div>
</template>

<script>
import encuentros from "@/static/data/encuentros.json";
export default {
  asyncData({ params }) {
    let ultimoEncuento = encuentros[0];
    let nuestrosEncuentos = encuentros.slice(0, 4);
    return { nuestrosEncuentos, ultimoEncuento };
  }
};
</script>