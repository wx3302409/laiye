<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<Mpswiper :firstGroup = "MpSwiperInfoGroup1" :secondGroup = "MpSwiperInfoGroup2"></Mpswiper>
		<home-activity :ActivityInfos="ActivityInfos"></home-activity>
		<home-hot></home-hot>
		<home-weekend :weekTrip="WeekendInfos"></home-weekend>
	</div>
</template>

<script>
	import HeaderComponent from "./Header";
	import swiper from "./Swiper";
	import 	Mpswiper from "./Mpswiper";
	import ActivityComponent from "./Activity";
	import Hot_recommendation from "./Hot";
	import WeekendComponent from "./Weekend";
	
		
	export default {
		created: function() {
            this.$http.get('/static/home.json').then(response => {
                this.hotRecommendInfo = response.body.data.hotRecommendInfo;
                this.MpSwiperInfoGroup1 = response.body.data.MpSwiperInfoGroup1;
                this.MpSwiperInfoGroup2 = response.body.data.MpSwiperInfoGroup2;
                this.ActivityInfos = response.body.data.ActivityInfos;
                this.WeekendInfos = response.body.data.WeekendInfos;
            }, response => {
                console.log("get index data error");
            });
        },
        data () {
            return {
                hotRecommendInfo: [],
                MpSwiperInfoGroup1:[],
                MpSwiperInfoGroup2:[],
                ActivityInfos: [],
                WeekendInfos: [],
            }
        },
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
			
		}
	}
</script>

<style>

</style> 

