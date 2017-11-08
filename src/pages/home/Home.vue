<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<Mpswiper :firstGroup = "MpSwiperInfoGroup1" :secondGroup = "MpSwiperInfoGroup2"></Mpswiper>
		<home-activity></home-activity>
		<home-hot></home-hot>
		<home-weekend></home-weekend>
	</div>
</template>

<script>
	import HeaderComponent from "./Header";
	import swiper from "./Swiper";
	import 	Mpswiper from "./Mpswiper";
	import ActivityComponent from "./Activity";
	import Hot_recommendation from "./Hot";
	import WeekendComponent from "./Weekend";
	import axios from "axios";
		
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
			if (!this.$store.state.ActivityInfos.length ) {
				this.$store.dispatch("getSwiperInfo");
			}
			
			
		}
	}
</script>

<style>

</style> 

