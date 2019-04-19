<template>
  <div class="app-restaurant">
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

<style lang="scss" scoped>
.app-restaurant {
}
</style>

