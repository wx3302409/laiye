<template>

  	<header class="Tripheader">
  		<div class="Tripheader-left iconfont icon-fanhui">
  		</div> 
  		
  		<div class="Tripheader-title" @click="handleClearBtnClick">
  				<input class="Tripheader-title-input" type="text" :placeholder="inputyMessage" /> 	
  				<span class="Tripheader-title-clear" v-show="show"></span>	
  		</div>

  		<div class="Tripheader-right">
  			<div class = "Tripheader-city-wrapper">
  				<span class=" Tripheader-city">
  					搜索
  				</span>
			</div>		
  		</div>
  	</header>
  
</template>

<script>
 
	export default {
  		data(){
  			return {
  				inputyMessage:"一日游",	
  				show:false
  			}
		},
		methods: {
			
			handleClearBtnClick(show) {
				//this.show = !show;
				if(this.show == false){
					this.show = true;
				}else{
					this.show = false;
				}	
			},
			
		}
	}

</script>

<style>
	.Tripheader{
		height: .88rem;
		background: #00bcd4;
		position: relative;
		display:flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.Tripheader-left{
		float: left;
		width: .4rem;
		padding:0 .2rem;
		color:#fff;
		line-height: .88rem;
		font-size: .3rem;
		font-weight:bolder;
	}
	
	.Tripheader-title {
	padding: 0 .6rem 0 .2rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    box-flex: 1;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    position: relative;
    height: .6rem;
    margin: .14rem 0;
    background: #fff;
    line-height: .6rem;
    border-radius: .06rem;
	}
	.Tripheader-title-input {
		padding-right:.6rem;
		height:90%;
		outline:none;
		border:none;
	}
	.Tripheader-title-clear {
	    display: inline-block;
	    position: absolute;
	    top: .04rem;
	    right: 0;
	    width: .58rem;
	    height: .58rem;
	    background: url(//simg1.qunarzz.com/piao/images/touch/v2/sprites.png) -.48rem .1rem no-repeat;
	    background-size: 3rem 3rem;
	}
   

	.Tripheader-right{
		float: right;
		width: 1.28rem;
		height: .88rem;
		text-align: center;
		color:#fff;
		line-height: .88rem
	}

	

</style>