<template>
	<div>
		<home-header/>
		<home-swiper></home-swiper>
		<Mpswiper></Mpswiper>
		<home-activity></home-activity>
		<home-hot :hotsight="hotRecommendInfo"></home-hot>
	</div>
</template>

<script>
	import HeaderComponent from "./Header"
	import swiper from "./Swiper"
	import 	Mpswiper from "./Mpswiper";
	import ActivityComponent from "./Activity"
	import Hot_recommendation from "./Hot"
	
	export default {
		created: function() {
            this.$http.get('/static/home.json').then(response => {
                this.hotRecommendInfo = response.body.data.hotRecommendInfo;
                console.log(this.hotRecommendInfo[1].listImg)
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
			"home-hot": Hot_recommendation
		}
	}
</script>

<style>
</style>
