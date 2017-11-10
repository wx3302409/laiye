<template>
	<div>
		<div class="travel-header">
			<router-link to="/">
				<a class="mp-header-left mp-iconfont iconfont icon-fanhui"></a>
			</router-link>
			<h1 class="mp-header-title">
				<input :placeholder="gray" class="mp-search-input" @focus="getFocus" v-model='value'
					@input="change" @blur="getBlur">
				<a class="mp-search-delete" v-show ="mpShow" @click="textVal" ></a>
			</h1>
			<span class="mp-header-right">
				<a data-search="submit" class="mp-search-submit" data-click-from-value="景点门票" >搜索</a>
			</span>
			
		</div>
		<div class="location-search" v-show="locationShow" >
				<div class="location-search-click">
					搜索身边的景点
				</div>		
			</div>
			<div class="searchHint" v-show="searchShow">
				<div class="searchHint-top" @click="searchEliminate">
					<span class="searchHint-top-spa-left">搜索建议</span>
					<span class="searchHint-top-spa-right">关闭</span>
				</div>
				<ul class="searchHint-ul">
					<li class="searchHint-li" v-for="listLi in list" >
						{{listLi}}
					</li>
				</ul>
			</div>
	</div>
</template>

<script >
	import {mapState} from "vuex";
	export default{
		data(){		//属性：值
			return {
				mpShow:false,
				locationShow: false,
				searchShow: false,
				value:'',
				gray:"输入城市或景点",
				list: '',
				num: ''
			}
		},
		methods: {		//方法
			getFocus: function() {
				this.mpShow = true;
				this.locationShow = true
			},
			getBlur: function() {
				this.mpShow = false;
				this.locationShow = false
			},
			textVal: function() {
				this.value="";
			},
			change: function() {
				
				var inputChange = this.value
					if(inputChange == '') {
						this.locationShow = true
						this.searchShow = false
					}else {
						this.locationShow = false
						this.searchShow = true
					}
				this.num = this.hotsight;
				
					for (var i=0; i <= this.num.length; i++) {
						if (inputChange == this.num[i].key) {
							this.list = this.num[i].text;
						}
					}
			},
			searchEliminate: function() {
				this.searchShow = false
			}
		},
		computed: mapState({ //将公共的数据做映射
	      hotsight(state) {
	        return state.Travel_search.headerInfo
	      }
	    })
	}
</script>

<style scoped>
	.searchHint-li {
		width: 100%;
		height: .6rem;
		line-height: .6rem;
		text-align: left;
		background: #FFFFFF;
		border: 1px solid rgba(204, 204, 204, 0.55);
	}
	.searchHint-top-spa-left {
		float: left;
		margin-left: .1rem;
	}
	.searchHint-top-spa-right {
		float: right;
		margin-right: .1rem;
	}
	.searchHint-top {
		width: 100%;
		height: .5rem;
		line-height: .5rem;
		background: rgba(204, 204, 204, 0.45);
		font-size: 12px;
		color: #333333;
	}
	.travel-header {
		position: relative;
	    display: -webkit-box;
	    display: -moz-box;
	    display: -ms-flexbox;
	    display: box;
	    width: 100%;
	    height: .88rem;
	    background: #00bcd4;
	    text-align: center;
	    color: #fff;
	}
	.mp-header-left {
		display: inline-block;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .2rem;
	    color: #fff;
	    font-size: .36rem;
	    text-align: left;
	}
	.mp-iconfont {
		font-family: 'mpiconfont';
	    speak: none;
	    font-style: normal;
	    font-weight: normal;
	    font-variant: normal;
	    text-transform: none;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	}
	.mp-header-title {
		padding: 0 .6rem 0 .2rem;
		position: relative;
	    height: .6rem;
	    margin: .14rem 0;
	    background: #fff;
	    line-height: .6rem;
	    border-radius: .06rem;
	    box-sizing: border-box;
	    -webkit-box-flex: 1;
	    box-flex: 1;
	}
	.mp-search-input {
	    position: relative;
	    width: 100%;
	    height: .4rem;
	    line-height: .4rem;
	    padding: .1rem 0;
	    border: 0;
	    font-family: "Microsoft Yahei",Arial;
	    font-size: .28rem;
	    border-radius: .06rem;
	}
	.location-search{
		position: absolute;
		left: 0;
		buttom: 0;
		width: 100%;
		height: 1.2rem;
		text-align: center;
		border: 1px solid #CCCCCC;
		background: #FFFFFF;
		z-index: 100;
	}
	.location-search-click{
		position: absolute;
		width: 94%;
		height: 70%;
        top: 0px; left: 0px;
        right: 0px; bottom: 0px;
        margin: auto;
        border-radius: 3%;
        text-align: center;
        line-height: .8rem;
        border: 1px solid rgba(204, 204, 204, 0.29);
	}
	.mp-search-delete {
	    position: absolute;
	    top: .04rem;
	    right: 0;
	    width: .58rem;
	    height: .58rem;
	    background: url(//simg1.qunarzz.com/piao/images/touch/v2/sprites.png) -.48rem .1rem no-repeat;
	    background-size: 3rem 3rem;
    }
    .mp-search-submit {
	    display: inline-block;
	    width: .74rem;
	    margin-right: .04rem;
	    color: #fff;
	    font-size: .28rem;
	    line-height: .88rem;
	    text-align: center;
	}
	.searchHint {
		position: absolute;
		left: 0;
		width: 100%;
	}
</style>