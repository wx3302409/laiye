<template>

  	<header class="home-activity">
  		<ul class="home-list">
			<li class="home-list-pos iconfont icon-location home-list-pos-left" >定位失败</li>
			<li class="home-list-pos iconfont icon-quanqiu home-list-pos-right"><a href="http://sale.piao.qunar.com/touch/topic/mk/t_2469.htm?cat=from_area%3Dts_tuiguang" target="_blank">5折泡温泉</a></li>
  		</ul>
  		<ul class="home-list-discount">
			<li class="home-list-discount-pos home-list-discount-posL" ><a class="home-list-discount-posA" href="https://sale.piao.qunar.com/touch/topic/mk/t_2469.htm?from=as_rmhd_1_%E5%8C%97%E4%BA%AC&cat=from_area%3Dts_yunying%26from_index%3D0%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC" target="_blank"></a>
			</li>
			<li class="home-list-discount-pos home-list-discount-posR"><a class="home-list-discount-posA" href="https://sale.piao.qunar.com/touch/topic/mk/t_2390.htm?from=as_rmhd_2_%E5%8C%97%E4%BA%AC&cat=from_area%3Dts_yunying%26from_index%3D1%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC" target="_blank"></a></li>
  		</ul>
  	</header>
  
</template>

<script>
export default {
  
}
</script>

<style>

	.home-list{
		
		border-top:1px solid #f0f0f0;
		height:0.98rem;
	}
	.home-list li{
		float:left;
		width:49.8%;
		height:0.98rem;
		font-size:0.28rem;
		line-height:0.98rem;
		text-align: center;
		background:white;
	}
	.home-list-pos-left{
		border-right:1px solid #f0f0f0;
	
	}
	.home-list-pos-right{
		float:right;
	}
	.home-list-pos-right >a{
		color:black;
		
	}
	.home-list-discount{
		height:1.2rem;
		margin-top:.4rem;
	}
	.home-list-discount-pos{
		width:49.8%;
		height:1.2rem;
		float:left;
		
		
	}
	.home-list-discount-posL{
		border-right:1px solid #f0f0f0;
		background:white url(http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png) center center no-repeat;background-size:auto 100%;
	}
	.home-list-discount-posR{
		float:right;
		background:white url(http://img1.qunarzz.com/piao/fusion/1710/54/1685d2108b652302.png) center center no-repeat;background-size:auto 100%;
	}
	.home-list-discount-posA{
		width:100%;
		height:100%;
		display:inline-block;
	}

</style>