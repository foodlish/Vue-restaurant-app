<template>
  <div class="app-geolocation">
    <!-- <div class="app-geolocation__co-ordinates">
      <span>Center: {{ center }}</span>
      <span>Zoom: {{ zoom }}</span>
      <span>Bounds: {{ bounds }}</span>
    </div>-->
    <h1 class="app-geolocation__h1">Lokalizacja</h1>
    <l-map
      v-if="renderMap"
      class="app-geolocation__map"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <v-geosearch :options="geosearchOptions" ></v-geosearch>
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng" >
        <l-popup>Tutaj jesteś !</l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import Vue from "vue";
import * as Vue2Leaflet from "vue2-leaflet";
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import VGeosearch from 'vue2-leaflet-geosearch';
Vue.component("l-map", Vue2Leaflet.LMap);
Vue.component("l-tile-layer", Vue2Leaflet.LTileLayer);
Vue.component('l-marker', Vue2Leaflet.LMarker);
Vue.component('l-popup', Vue2Leaflet.LPopup);
export default {
  name: "geolocation",
  components: { VGeosearch },
  data() {
    return {
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 15,
      renderMap: false,
      center: [],
      markerLatLng: [],
      bounds: null,
      geosearchOptions: {
        provider: new OpenStreetMapProvider(),
      },
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
        const positionLat = position.coords.latitude;
        const positionLong = position.coords.longitude;
        this.center = [positionLat, positionLong];
        this.markerLatLng = [positionLat, positionLong];
        this.renderMap = true;
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
