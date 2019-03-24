<template>
  <header class="app-header">
    <h1 class="app-header--h1">Znajdź restauracje !</h1>
    <i class="fas fa-arrow-circle-down app-header--icon"></i>
    <router-view/>
  </header>
</template>

<script>
export default {
  name: "HeroImage"
};
</script>

<style lang="scss" scoped>
.app-header {
  height: 100vh;
  background: url("../assets/hero-image.jpg") center no-repeat;
  background-size: cover;
  position: relative;
  .app-header--h1 {
    width: 100%;
    color: white;
    text-align: center;
    position: absolute;
    top: 40%;
    left: 50%;
    font-size: 45px;
    padding: 10px;
    font-family: "Montserrat", sans-serif;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.6);
  }
  .app-header--icon {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 50px;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
  }
}
</style>
