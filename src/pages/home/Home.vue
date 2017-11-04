<template>
	<div>
		<home-header/>
		<home-swiper></home-swiper>
		<Mpswiper></Mpswiper>
		<home-activity></home-activity>
		<home-hot :hotsight="hotRecommendInfo"></home-hot>
		<home-weekend></home-weekend>
	</div>
</template>

<script>
	import HeaderComponent from "./Header"
	import swiper from "./Swiper"
	import 	Mpswiper from "./Mpswiper";
	import ActivityComponent from "./Activity"
	import Hot_recommendation from "./Hot"import WeekendComponent from "./Weekend"
	import WeekendComponent from "./Weekend"
	
	export default {
		created: function() {
            this.$http.get('/static/home.json').then(response => {
                this.hotRecommendInfo = response.body.data.hotRecommendInfo;
            }, response => {
                console.log("get index data error")
            });
        },
        data () {
            return {
                hotRecommendInfo: []
            }
        },
		components: {
			"home-header": HeaderComponent,
			"home-swiper": swiper,
			"Mpswiper":Mpswiper,
			"home-activity": ActivityComponent,
			"home-hot": Hot_recommendation,
			"home-weekend": WeekendComponent
		}
	}
</script>

<style>
</style> 