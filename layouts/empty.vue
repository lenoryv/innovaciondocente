<template>
  <div>
    <Navbar/>
    <nuxt/>
    <FooterIndex/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import FooterIndex from "@/components/FooterIndex";
export default {
  components: {
    Navbar,
    FooterIndex
  }
};
</script>