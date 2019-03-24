<template>
  <nav class="app-nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/findRestaurant">Find Restaurant</router-link>
    <router-link to="/footer">Footer</router-link>
    <router-view/>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
.app-nav {
  position: fixed;
  top: 0;
  left: 0;
}
</style>

