<template>
  <header class="app-header">
    <h1 class="app-header__h1">Foodlish</h1>
    <p class="app-header__p">Znajdź restauracje w pobliżu ciebie !</p>
    <router-link to="/restaurant" class="app-header__link">Teraz !</router-link>
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
  z-index: -1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .app-header__h1 {
    width: 100%;
    color: white;
    text-align: center;
    font-size: 40px;
    padding: 10px;
    font-family: "Montserrat", sans-serif;
    background-color: rgba(0, 0, 0, 0.6);
    margin-bottom: 50px;
  }
  .app-header__p {
    color: white;
    font-size: 20px;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 20px;
  }
  .app-header__link {
    cursor: pointer;
    z-index: 100;
  }
}
</style>
