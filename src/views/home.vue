<template>
  <div class="home-container">
    <Nav/>
    <HeroImage/>
  </div>
</template>

<script>
import Nav from "@/components/nav.vue";
import HeroImage from "@/components/heroImage.vue";
export default {
  name: "Home",
  components: {
    Nav,
    HeroImage
  }
};
</script>

<style>
</style>
