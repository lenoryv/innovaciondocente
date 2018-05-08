<template>
<div>
  <h1>
    @{{ name }}
  </h1>
  <div>
    <router-link :to="{ name: 'about'}">about</router-link>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      name: "baesparza"
    };
  }
};
</script>

<style lang="scss" scoped>
.red {
  color: slategrey;
}
</style>