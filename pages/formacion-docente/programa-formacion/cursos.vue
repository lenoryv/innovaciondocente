<template>
<div class="container-fluid">
    <pre>
        {{ cursos }}
    </pre>
</div>
</template>

<script>
import cursos from "@/static/data/cursos.json";

export default {
  asyncData({ params }) {
    return { cursos };
  }
};
</script>

<style lang="scss" scoped>
</style>

