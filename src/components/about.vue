<template>
  <section class="app-about">
    <!-- <h1
      class="app-about--h1"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum molestiae consequatur debitis aut itaque suscipit temporibus maiores, sapiente at placeat!</h1>-->
    <router-view/>
  </section>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped>
.app-about {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

