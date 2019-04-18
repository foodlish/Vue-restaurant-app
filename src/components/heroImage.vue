<template>
  <header class="app-header">
    <h1 class="app-header__h1">Foodlish</h1>
    <div class="app-header__description">
      <p class="app-header__p">Znajdź restauracje w pobliżu ciebie !</p>
      <router-link to="/restaurant" class="app-header__link">Teraz !</router-link>
    </div>
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
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  .app-header__h1 {
    width: 100%;
    color: white;
    text-align: center;
    font-size: 40px;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.6);
    margin-bottom: 50px;
  }
  .app-header__description {
    display: flex;
    flex-direction: column;
    align-items: center;
    .app-header__p {
      color: white;
      font-size: 20px;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 20px;
      margin: 20px;
    }
    .app-header__link {
      color: white;
      text-decoration: none;
      cursor: pointer;
      padding: 10px;
      text-align: center;
      width: 40%;
      background-color: rgba(0, 0, 0, 0.5);
      border: 2px solid white;
      border-radius: 5px;
      transition: linear 0.2s;
      &:hover {
        color: black;
        background-color: white;
      }
    }
  }
}
</style>
