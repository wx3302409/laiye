<template>

  	<header class="header">
  		<div class="header-left iconfont icon-fanhui"></div> 
  		
  		<div class="header-title">
  			输入城市/景点/游玩主题
  		</div>

  		<div class="header-right">
  			<div class = "header-city-wrapper">
  				<span class=" header-city">
  					北京
  				</span>
			</div>		
  		</div>
  	</header>
  
</template>

<script>
export default {
  
}
</script>

<style>
	.header{
		height: .88rem;
		background: #00bcd4;
		position: relative;
	}
	
	.header-left{
		float: left;
		width: .4rem;
		padding:0 .2rem;
		color:#fff;
		line-height: .88rem;
		font-size: .4rem;
	}
	
	.header-title{
		position: absolute;
		left:.8rem;
		right: 1.28rem;
		top:.14rem;
		line-height: .6rem;
		background: #fff;
		border-radius: .06rem;
		text-indent: .2rem;
		color:#ccc;
	}

	.header-right{
		float: right;
		width: 1.28rem;
		height: .88rem;
		text-align: center;
		color:#fff;
		line-height: .88rem
	}

	.header-city-wrapper{
		height: .88rem
	
	}

	.header-city {
		line-height: .88rem;
    	color: #fff;
    	text-align: center;
    	height: .88rem;
    	width: .9rem;
    	display: inline-block;
    	overflow: hidden;
    	white-space: nowrap;
    	text-overflow: ellipsis;
    	float:left;
    }

	.header-right:after{
		content:"\0020";
		border:.1rem solid transparent;
		border-top: .1rem solid #fff;
		position: absolute;
		top:.4rem;
		right:.12rem;
	}

</style>