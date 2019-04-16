<template>
  <div class="container">
    <Nav/>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from "@/components/nav.vue";
export default {
  name: "App",
  components: {
    Nav
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat");
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
