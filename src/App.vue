<template>
  <div class="container">
    <Nav/>
    <HeroImage/>
    <main>
      <About/>
      <FindRestaurant/>
      <ShowRestaurant/>
    </main>
    <Footer/>
    <router-view/>
  </div>
</template>

<script>
import Nav from "@/components/nav.vue";
import HeroImage from "@/components/heroImage.vue";
import About from "@/components/about.vue";
import FindRestaurant from "@/components/findRestaurant.vue";
import ShowRestaurant from "@/components/showRestaurant.vue";
import Footer from "@/components/footer.vue";
export default {
  name: "App",
  components: {
    Nav,
    HeroImage,
    About,
    FindRestaurant,
    ShowRestaurant,
    Footer
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
