<template>
  <nav
    v-on:click="isActiveNav = !isActiveNav"
    class="app-nav"
    v-bind:class="{openBurger: isActiveNav}"
  >
    <router-link to="/" class="app-nav__item">Home</router-link>
    <router-link to="/restaurant" class="app-nav__item">Find Restaurant</router-link>
    <div class="app-nav__burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      isActiveNav: false
    };
  }
};
</script>

<style lang="scss" scoped>
.app-nav {
  position: fixed;
  width: 100%;
  top: -100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.7s;
  .app-nav__item {
    text-decoration: none;
    color: white;
    font-size: 40px;
    margin: 30px 0;
  }
  .app-nav__burger {
    z-index: 9999;
    position: fixed;
    top: 20px;
    right: 5px;
    width: 50px;
    height: 35px;
    margin: 0 10px;
    cursor: pointer;
    transition: 0.2s;

    span {
      position: absolute;
      width: 100%;
      height: 5px;
      background-color: black;

      transition: top 0.2s 0.2s, bottom 0.2s 0.2s, opacity 0.2s 0.3s,
        transform 0.2s 0.4s;

      &:nth-child(1) {
        top: 0;
      }

      &:nth-child(2) {
        top: calc(50% - 2.5px);
      }

      &:nth-child(3) {
        bottom: 0;
      }
    }
  }
  //ACTIVE
  &.openBurger {
    z-index: 99;
    top: 0;
    .app-nav__burger {
      transform: rotate(-90deg);

      span {
        background-color: white;

        &:nth-child(1) {
          top: calc(50% - 2.5px);
          transform: rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          bottom: calc(50% - 2.5px);
          transform: rotate(-45deg);
        }
      }
    }
  }
}
</style>
