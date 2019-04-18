/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Home from "@/views/home.vue";
import Restaurant from "@/views/restaurant.vue";

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/restaurant',
      name: 'Restaurant',
      component: Restaurant
    }
  ],
});
