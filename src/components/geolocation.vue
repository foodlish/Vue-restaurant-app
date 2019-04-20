<template>
  <div class="app-geolocation">
    <!-- <div class="app-geolocation__co-ordinates">
      <span>Center: {{ center }}</span>
      <span>Zoom: {{ zoom }}</span>
      <span>Bounds: {{ bounds }}</span>
    </div>-->
    <h1 class="app-geolocation__h1">Lokalizacja</h1>
    <l-map
      class="app-geolocation__map"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url"></l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import Vue from "vue";
import * as Vue2Leaflet from "vue2-leaflet";
Vue.component("l-map", Vue2Leaflet.LMap);
Vue.component("l-tile-layer", Vue2Leaflet.LTileLayer);
export default {
  name: "geolocation",
  data() {
    return {
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 3,
      center: [],
      bounds: null
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.positionLat = position.coords.latitude;
        this.positionLong = position.coords.longitude;
        console.log(this.positionLat);
        console.log(this.positionLong);
        this.center = [position.coords.latitude, position.coords.longitude];
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.app-geolocation {
  // .app-geolocation__co-ordinates {
  //   width: 100%;
  // }
  .app-geolocation__h1 {
    font-size: 50px;
    text-align: center;
    margin-top: 80px;
  }
  .app-geolocation__map {
    height: 50vh;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -70%);
    position: absolute;
  }
}
</style>
