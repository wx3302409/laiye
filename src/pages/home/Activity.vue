<template>

  	<header class="home-activity">
  		<ul class="activity">
			<li class="activity-pos iconfont icon-location activity-pos-left" >定位失败</li>
			<li class="activity-pos iconfont icon-quanqiu activity-pos-right"><a class="position_a" href="http://sale.piao.qunar.com/touch/topic/mk/t_2469.htm?cat=from_area%3Dts_tuiguang" target="_blank">5折泡温泉</a></li>
  		</ul>
  		<ul class="activity-discount">
			<li v-for="ActivityInfo in ActivityInfos" class="activity-discount-pos" >
				<router-link :to="ActivityInfo.link">	
					<img class="activity-img " :src="ActivityInfo.imgUrl"/>			
				</router-link>
			</li>
  		</ul>
  	</header>
  
</template>

<script>
import {mapState} from 'vuex'

export default {
	data() {
		return {

		}
	},
	computed: mapState({
		ActivityInfos(state) {
			return state.home.ActivityInfos
		}
	})
  
}
</script>

<style scoped>

	.activity{
		
		border-top:1px solid #f0f0f0;
		height:0.98rem;
	}
	.activity li{
		float:left;
		width:49.8%;
		height:0.98rem;
		font-size:0.28rem;
		line-height:0.98rem;
		text-align: center;
		background:white;
	}
	.activity-pos-left{
		border-right:1px solid #f0f0f0;
	
	}
	.activity-pos-right{
		float:right;
	}
	.position_a{
		color:black;
		display:inline-block;
		
	}
	.activity-discount{
		height:1.4rem;
		margin-top:.4rem;
	}
	.activity-discount-pos{
		width:49.9%;
		height:1.4rem;
		float:left;
		background:#fff;
		
	}
	

	.activity-img{
		width:100%;
		height:1.4rem;
	}

	 
	
	.activity-discount-posA{
		width:100%;
		height:100%;
		display:inline-block;
	}


	
	.activity-discount-title {
		
		padding:0 .2rem;
		line-height:.8rem;
		color:red;
		
	}
	.activity-discount-Info{
		
		padding:0 .2rem;
		font-size:.15rem;
		line-height:.2rem;
		color:#ccc;
	}


</style>