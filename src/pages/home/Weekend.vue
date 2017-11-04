<template>

  	<div class="home-activity">
  		<h2>周末去哪</h2>
  		<ul class="home-activity-ul">
  		<header_uan>
			<li v-for=" info in infos"> 
				<img :src="info.img"/>
				<p class="home-activity-ul-ptitle">{{info.title}}</p>
				<p class="home-activity-ul-pinfo">{{info.Info}}</p>

			</li>
		</header_uan>
  		</ul> 		
  	</div>
  
</template>

<script>
	
	var header= {
		template: `
			<div>
				<slot></slot>
			</div>
		`
	}
export default {
	data(){
		return{

		infos:[
			{
				"img": "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
				"title": "北京温泉排行榜",
				"Info":"细数北京温泉，温暖你的冬天"
			},

			{
				"img": "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
				"title": "寻找北京的皇城范儿",
				"Info":"数百年的宫廷庙宇，至今依旧威严霸气"
			},
			{
				"img": "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
				"title": "北京必游",
				"Info":"来北京必去的景点非这些地方莫属"
			},
			{
				"img": "http://img1.qunarzz.com/sight/source/1509/81/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg",
				"title": "登高望远秋色佳",
				"Info":"山顶满眼彩色，此情此景醉了"
			},
			{
				"img": "http://img1.qunarzz.com/sight/source/1509/28/1bb74b851279e6.jpg_r_640x214_64ebf0ee.jpg",
				"title": "秋高气爽去礼佛",
				"Info":"秋风伴着美妙经声，品尝秋的另一番滋味"
			}]
		}
		 
	},
	components: {
		"header_uan": header
	}

	// props:["scenicInfos"],
	// components:{
	// 	"weekend-scenicInfos": scenicInfos
	// }
}

</script>

<style>
.home-activity h2 {
	height: .8rem;
    padding-left: .26rem;
    line-height: .8rem;
    color: #212121;
}
.home-activity-ul li {
	background:#fff;
}
.home-activity-ul li img {
	width:100%;
}

.home-activity-ul li .home-activity-ul-ptitle {
	height: .8rem;
    padding-left: .26rem;
    line-height: .8rem; 
    color: #212121;
}
.home-activity-ul li .home-activity-ul-pinfo {
	font-size:.14rem;
	padding-left: .26rem;
	padding-bottom:.4rem;
	color: #212121;
}

</style>