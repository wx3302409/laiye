<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<Mpswiper :firstGroup = "MpSwiperInfoGroup1" :secondGroup = "MpSwiperInfoGroup2"></Mpswiper>
		<home-activity :ActivityInfos="this.$store.state.ActivityInfos"></home-activity>
		<home-hot></home-hot>
		<home-weekend :weekTrip="this.$store.state.WeekendInfos"></home-weekend>
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
			if (this.$store.getters.shouldGetData ) {
				this.$store.dispatch("getSwiperInfo");
			}
			this.$store.dispatch("getActivityInfo");
			
		}
	}
</script>

<style>

</style> 

