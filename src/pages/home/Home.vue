<template>
	<div>
		<home-header/>
		<home-swiper></home-swiper>
		<home-activity></home-activity>
	</div>
</template>

<script>
	import HeaderComponent from "./Header"
	import swiper from "./Swiper"
	import ActivityComponent from "./Activity"
	
	export default {
		components: {
			"home-header": HeaderComponent,
			"home-swiper": swiper,
			"home-activity": ActivityComponent
		}
	}
</script>

<style>
</style>