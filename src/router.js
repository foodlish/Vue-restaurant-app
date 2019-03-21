import Vue from 'vue';
import Router from 'vue-router';
import Nav from "@/components/nav.vue";
import HeroImage from "@/components/heroImage.vue";
import About from "@/components/about.vue";
import FindRestaurant from "@/components/findRestaurant.vue";
import ShowRestaurant from "@/components/showRestaurant.vue";
import Footer from "@/components/footer.vue";

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/nav',
      name: 'Nav',
      component: Nav,
    },
    {
      path: '/heroImage',
      name: 'HeroImage',
      component: HeroImage,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/findRestaurant',
      name: 'FindRestaurant',
      component: FindRestaurant,
    },
    {
      path: '/showRestaurant',
      name: 'ShowRestaurant',
      component: ShowRestaurant,
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer,
    },
  ],
});
