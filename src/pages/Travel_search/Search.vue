<template>
	<div>
		<div id="mp-main">
			<div class="mp-filter mpf-border-bottom" >
				<div class="mp-select" :class="bbbb" @click ="onclick2">
					<span class="mp-select-caption">全部分类</span>
				</div>
				<div class="mp-select"  :class="aaaa" @click ="onclick">
					<span class="mp-select-caption">推荐排序</span>
				</div>
			</div>
		</div>
		<div class="mp-menu">
			<div class="mp-menu-left" v-show="show">
				<div id="wrapper">
					<div id="scroller">
						<div class="mp-menu-item" v-for="item in hotsight" :key="item.id">
							<img :src="item.ticketImg" class="mp-menu-item-icon"/>
							{{item.name}}
							<span class="mp-munu-item-num">
								{{item.number}}
							</span>
						</div>
					</div>
				</div>
			</div>
			<div class="mp-menu-right" >
	
			</div>
		</div>
		<div class="occlusion" v-show="occlusion">
			
		</div>
	</div>
	
</template>

<script>
	import {mapState} from "vuex";
	require("../../utils/iscroll-probe.js");
	export default{
		data() {
			 return {
				selected: null,
				aaaa:null,
				bbbb:null,
				show:false,
				occlusion:false
          	 }
		},
		methods: {
			onclick:function(){
				if(this.aaaa==="mp-select-opened"){
					this.aaaa ="";
				}else{
					this.aaaa ="mp-select-opened";
				}
			},
			onclick2:function(){
				this.show=!this.show
				this.occlusion=!this.occlusion
				if(this.bbbb==="mp-select-opened"){
					this.bbbb ="";
				}else{
					this.bbbb ="mp-select-opened";
				}
			}
		},
		
		computed: mapState({ //将公共的数据做映射
	      hotsight(state) {
	        return state.Travel_search.searchInfo
	      }
	    }),
	    mounted() {
	    	this.myScroll = new IScroll('#wrapper', { mouseWheel: true });
			this.myScroll.on("scroll",() => {
				console.log(this.myScroll)
			})
	    },
	    updated() {
	    	this.myScroll.refresh();
	    }
	}
</script>

<style>
	#wrapper {
		height:4.8rem;
		overflow:hidden;
	}
	.mp-filter {
	    display: -webkit-box;
	    display: -moz-box;
	    display: -ms-flexbox;
	    display: box;
	    height: .8rem;
	    background-color: #fff;
	    width: 100%;
	}	
	.mp-filter::before {
	    border-color: #c3c4d7;
	}
	.mp-filter .mp-select:first-child {
	    border: 0;
	}
	.mp-filter .mp-select {
	    display: block;
	    box-flex: 1;
	    -webkit-box-flex: 1;
	    -moz-box-flex: 1;
	    -ms-flex: 1;
	    box-sizing: border-box;
	    width: 100%;
	}
	.mp-select {
	    display: block;
	    width: 100%;
	    height: .8rem;
	    overflow: hidden;
	    position: relative;
	    color: #212121;
	    line-height: .8rem;
	    text-align: center;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    box-flex: 1;
	    -webkit-box-flex: 1;
	    -moz-box-flex: 1;
	    -ms-flex: 1;
	    box-sizing: border-box;
	}
	.mp-filter .mp-select:first-child::before {
	    border-color: transparent;
	}
	.mp-filter .mp-select::before {
	    content: "";
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: .02rem;
	    height: 100%;
	    background: #e8eff0;
	    background: -webkit-linear-gradient(top,#fff,#ccc,#fff);
	    background: -o-linear-gradient(top,#fff,#ccc,#fff);
	    background: linear-gradient(top,#fff,#ccc,#fff);
	    -webkit-transform: scaleX(.51);
	    -moz-transform: scaleX(.51);
	    -ms-transform: scaleX(.51);
	    -o-transform: scaleX(.51);
	    transform: scaleX(.51);
	}
	.mp-select-caption {
	    position: relative;
	}
	.mp-select {
	    display: block;
	    width: 100%;
	    height: .8rem;
	    overflow: hidden;
	    position: relative;
	    color: #212121;
	    line-height: .8rem;
	    text-align: center;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    box-flex: 1;
	    -webkit-box-flex: 1;
	    -moz-box-flex: 1;
	    -ms-flex: 1;
	    box-sizing: border-box;
	}
	.mp-select-caption::after {
	    content: "";
	    position: absolute;
	    right: -.25rem;
	    top: .18rem;
	    width: 0;
	    height: 0;
	    margin-top: -.04rem;
	    border-left: .08rem solid transparent;
	    border-right: .08rem solid transparent;
	    border-top: .08rem solid #666;
	}
	.mp-select-opened .mp-select-caption::after {
	    border-top: .08rem solid #1ba9ba;
	    -moz-transform: rotate(180deg);
	    -webkit-transform: rotate(180deg);
	    -ms-transform: rotate(180deg);
	    -o-transform: rotate(180deg);
	    transform: rotate(180deg);
	}
	.mp-select-opened {
	    color: #00afc7;
	}
	.mp-menu {
		position: absolute;
		width: 100%;
		max-height: 4.8rem;
		left: 0;
   		background: white;
   		overflow: hidden;
   		z-index: 1001;
	}
	.mp-menu-left {
		float: left;
		width: 50%;
		height: auto;
	}
	.mp-menu-right {
		float: left;
		width: 50%;
		height: auto;
	}
	.mp-menu-item {
	    padding-left: .3rem;
	    line-height: .8rem;
	    height: .8rem;
	    overflow: hidden;
	    color: #212121;
	    border: 1px solid rgba(199, 206, 212, 0.3);
	    box-sizing: border-box;
	}
	.mp-munu-item-num {
		float: right;
	    margin-right: .2rem;
	    font-size: .24rem;
	    color: #9e9e9e;
	}
	.mp-menu-item-icon {
		width: .3rem;
	    height: .3rem;
	    vertical-align: middle;
	    margin-right: .1rem;
	}
	.occlusion {
		width: 100%;
		height: 100%;
		background: #000000;
		position: absolute;
		opacity: 0.5;
	}
</style>



