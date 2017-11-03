<template>
	<div>
		<home-header/>
		<home-swiper></home-swiper>
	</div>
</template>

<script>
	import HeaderComponent from "./Header"
	import swiper from "./Swiper"
	
	export default {
		components: {
			"home-header": HeaderComponent,
			"home-swiper": swiper
		}
	}
</script>

<style>
</style>