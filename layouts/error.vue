<template>
  <div>
    <div>
      <div>
        {{error.statusCode}}
      </div>
      <hr>
      <div v-if="error.statusCode === 400">
        BAD REQUEST
      </div>
      <div v-else-if="error.statusCode === 401">
        UNAUTHORIZED
      </div>
      <div v-else-if="error.statusCode === 402">
        FORBIDDEN
      </div>
      <div v-else-if="error.statusCode === 403">
        NOT FOUND
      </div>
      <div v-else-if="error.statusCode === 404">
        SERVER ERROR
      </div>
      <div v-else>
        An error occurred
      </div>
      <nuxt-link to="/">
        HOME
      </nuxt-link>
      <button @click="$router.go(-1)">
        BACK
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "empty"
};
</script>