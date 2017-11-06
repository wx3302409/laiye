<template>
  	<div class = "contentBox">
  		<div class ="histryTitel" v-if="display" >
  			<span class="titleLeft">搜索历史</span>
  			<span class="titleright iconfont icon-delete">
				<span class="word" @click="clearAll" >清除</span>
  			</span>
  		</div>
		
		<div class="histryList" v-if="display" >
			<div v-for = "histryItem in histry" class="histryItem" >
				{{histryItem}}
			</div>
		</div>

  		<div class ="histryTitel searchTitel">
  			<span class="titleLeft">热门搜索</span>
  			<span class="titleright iconfont icon-refresh">
				<span class="word" @click="changeTop" >换一换</span>
  			</span>
  		</div>

  		<div class="sceneryList">
  			<div class="sceneryLeft">
  				<div class="sceneryImg">
  					<img src="http://img1.qunarzz.com/piao/fusion/1511/da/8c3405b0e7d493f7.png" >
  				</div>
  			</div>
			
			<div class="hotScenery">
				<div class="hotSceneryBox" :style="{top:hotSceneryTop +'px' }" >
					<span v-for="scenery in hotScenerys" class="hotSceneryItem"  @click="itemOnClick" >{{scenery}}</span>
				</div>
			</div>
		</div>
	
		<div class="cityList">
  			<div class="cityLeft ">
  				<div class="cityImg sceneryImg">
  					<img src="http://img1.qunarzz.com/piao/fusion/1511/e8/d46972e07444bbf7.png" >
  				</div>
  			</div>
			
			<div class="hotcity">
				<div class="hotcityBox" :style="{top:hotcityTop +'px' }" >
					<span v-for="hotcity in hotCitys" class="hotSceneryItem" @click="itemOnClick" >{{hotcity}}</span>
				</div>
			</div>
		</div>

		<div class="searchNearby">
			<div class="nearbyBtn">搜索周边的景点</div>
		</div>

	</div>
</template>

<script>
	
export default {

	props:["hotCitys","hotScenerys"],

	data(){
		return {
			hotSceneryTop:0,
			//hotScenerys:[],
			hotcityTop:0,
			//hotcitys:[],
			histry:[],
			display:false
		}
	},

	methods:{

		changeTop:function(){
			if(this.hotSceneryTop> -540){
				this.hotSceneryTop -= 90;
			}else{
				this.hotSceneryTop = 0;
			}

			if(this.hotcityTop >-90 ){
				this.hotcityTop -=90;
			}else{
				this.hotcityTop = 0;
			}
		},

		itemOnClick:function(e){
			this.histry.push(e.target.innerText);
			this.display = true;
		},

		clearAll:function(){
			this.histry.splice(0,this.histry.length);
			this.display = false;
		}
		
	}
}

</script>

<style scoped>
	.contentBox{
		width: 100%;
		height: 324px;
		margin-top: 5px;
	}

	.histryTitel{
		height: 32px;
		padding: 0 10px;
		line-height: 32px;
		font-size: 13px;
		background:#f0f5f6;
		border-top: 1px solid #dce5e7;
	}

	.titleLeft{
		float: left;
		color: #888;
	}
	
	.titleright{
		float:right;
		font-size: 13px;
		color: #00afc7;
	}
	
	.word{
		margin-left: 5px;
	}
	
	.sceneryList{
		height: 90px;
		position: relative;
		overflow: hidden;
		border-top: 1px solid #dce5e7;
	}

	.sceneryLeft{
		width: 37px;
		height: 90px;
		float: left;
	}

	.sceneryImg{
		width: 37px;
		height: 70%;
		position: absolute;
		top: 15%;
		border-right: 1px solid #dce5e7;
		text-align: center;
	}

	.sceneryImg>img{
		width: 15px;
		height: 15px;
		position: relative;
    	top: 50%;
    	margin-top: -.15rem;
	}
	
	.hotScenery{
		position: relative;
	}

	.hotSceneryBox{
		position: absolute;
		left: 12%;
		width: 88%
	}

	.hotSceneryItem{
		display: inline-block;
		line-height: 25px;
		height: 25px;
		font-size: 14px;
		padding :0 10px;
		border-right: 1px solid #aaa; 
		margin-top: 10px;
		margin-bottom: 10px;
		color:#333;
		max-width: 100px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.cityList{
		height: 45px;
		position: relative;
		overflow: hidden;
		border-top: 1px solid #dce5e7;
	}

	.hotcity{
		position: relative;
	}

	.cityLeft{
		float: left;
	}
	
	.hotcityBox{
		position: absolute;
		left: 12%;
		width: 88%
	}

	.searchNearby{
		padding: 10px;
		background: #fff;
		border-top: 1px solid #dce5e7;
		border-bottom: 1px solid #dce5e7;
		box-shadow: 0 1px 1px #aaa;
	}

	.nearbyBtn{
		height: 36px;
		border:1px solid #dde1e3;
		border-radius:2px;
		text-align: center;
		line-height: 36px;
		font-size: 13px;
	}
	
	.histryList{
		padding: 20px 0;
		overflow-x: scroll;
		height: 30px;
		white-space: nowrap;
	}

	.histryItem{
		height: 30px;
		padding: 0 7px;
		border: 1px solid #c9cccd;
		border-radius: 2px;
		display: inline-block;
		line-height: 30px;
		margin-left: 10px;

		max-width: 100px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}


</style>