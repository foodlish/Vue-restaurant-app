<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
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
