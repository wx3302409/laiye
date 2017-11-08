<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-link to="/Travel_search"></router-link>
    <router-link to="/onedayTrip"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
	body {
		background:#f5f5f5;
	}
	@import "./reset.css";
	@import "./iconfont/iconfont.css";
	@import "../../node_modules/swiper/dist/css/swiper.css";
</style>
