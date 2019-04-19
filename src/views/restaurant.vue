<template>
  <div class="resta-container">
    <h1>mapa</h1>
    <geolocation/>
  </div>
</template>

<script>
import geolocation from "@/components/geolocation.vue";
export default {
  name: "Restaurant",
  components: {
    geolocation
  }
};
</script>

<style>
</style>
