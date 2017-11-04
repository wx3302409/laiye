<template>
	<div>
		<h2 class="hot_h2">热销推荐</h2>
		<div>
			<ul>
				<li class="hot_li" v-for="(esources, index) in hotsight" :key="index">
					<div class="hot_li_img image-ready">
						<img :src="esources.listImg"/>
					</div>
					<div class="hot_li_infos">
						<div class="hot_li_title">{{esources.listInfoTitle}}</div>
						<div class="hot_li_desc">{{esources.listInfoDes}}</div>
					</div>
					<div class="hot_li_price">
						&yen;
						<em class="hot_price_num">{{esources.price}}</em>
						<span class="hot_price_text">起</span>
					</div>
				</li> 
			</ul>
			<div class="hot-modmore">
				<a href="javascript:;">查看所有产品</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default { 
		data(){
			return {
				
			}
		},
		props: ["hotsight"]
	}
</script>

<style>
	.hot_h2 {
		height: .8rem;
	    padding-left: .26rem;
	    line-height: .8rem;
	    color: #212121;
	}
	.hot_li {
		position: relative;
	    overflow: hidden;
	    height: 1.4rem;
	    padding: .24rem;
	    background-color: #FFFFFF;
	} 
	.hot_li_img {
		position: absolute;
	    top: .24rem;
	    left: .24rem;
	    background-size: contain;
	    width: 1.4rem;
	    height: 1.4rem;
	}   
	.image-ready img {
	    opacity: 0;
	}
	
	.hot_li_img img {
	    vertical-align: top;
	    opacity: 1;
	    transition: opacity 4000ms;
	    width: 1.4rem;
	    height: 1.4rem;
	}
	.hot_li_infos {
		margin-left: 1.6rem;
	}
	.hot_li_title {
		overflow: hidden;
	    margin-top: .04rem;
	    margin-bottom: .1rem;
	    color: #212121;
	    font-size: .3rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.hot_li_desc {
		overflow: hidden;
	    margin-bottom: .1rem;
	    height: .4rem;
	    line-height: .4rem;
	    color: #9e9e9e;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.hot_li_price {
		margin-left: 1.6rem;
    	color: #ff8300;
	}
	.hot_price_num {
		font-size: .36rem;
    	padding: 0 .04rem;
	}
	.hot_price_text {
		color: #9e9e9e;
    	font-size: .24rem;
	}
	.hot-modmore {
	    height: .88rem;
	    color: #00afc7;
	    line-height: .88rem;
	    text-align: center;
	}
	.hot-modmore a {
		display: inline-block;
		width:100%;
		height: 100%;   
		background-color: #FFFFFF; 
	}
</style>