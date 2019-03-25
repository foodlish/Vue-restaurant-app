<template>
  <nav v-on:click="isActive = !isActive" class="app-nav" v-bind:class="{active: isActive}">
    <router-link to="/" class="app-nav--item">Home</router-link>
    <router-link to="/about" class="app-nav--item">About</router-link>
    <router-link to="/findRestaurant" class="app-nav--item">Find Restaurant</router-link>
    <router-link to="/footer" class="app-nav--item">Footer</router-link>
    <div class="app-nav--burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <router-view/>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      isActive: true
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
  .app-nav--item {
    text-decoration: none;
    color: white;
    font-size: 40px;
    margin: 30px 0;
  }
  .app-nav--burger {
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
      background-color: white;

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
  &.active {
    z-index: 99;
    top: 0;
    .app-nav--burger {
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
