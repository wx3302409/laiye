<template>
	<div>
		<home-header/>
		<home-swiper></home-swiper>
		<home-activity></home-activity>
		<home-hot></home-hot>
	</div>
</template>

<script>
	import HeaderComponent from "./Header"
	import swiper from "./Swiper"
	import ActivityComponent from "./Activity"
	import Hotrecommendation from "./Hot"
	
	export default {
		components: {
			"home-header": HeaderComponent,
			"home-swiper": swiper,
			"home-activity": ActivityComponent,
			"home-hot": Hotrecommendation
		}
	}
</script>

<style>
</style>