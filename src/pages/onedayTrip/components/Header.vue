<template>
	<div>
		<ondaytrap-header></ondaytrap-header>
		
	</div>
</template>

<script>
	import Header from "./components/Header";
	
		
	export default {
		
		components: {
			"home-header": HeaderComponent,
			"home-swiper": swiper,
			"Mpswiper":Mpswiper,
			"home-activity": ActivityComponent,
			"home-hot": Hot_recommendation,
			"home-weekend": WeekendComponent
		},
		mounted() {
			if (this.$store.getters.shouldGetData ) {
				this.$store.dispatch("getSwiperInfo");
			}
			this.$store.dispatch("getActivityInfo");
			
		}
	}
</script>

<style>

</style> 

