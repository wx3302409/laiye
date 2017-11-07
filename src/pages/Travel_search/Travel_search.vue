<template>
	<div>
		<div class="travel-header">
			<a class="mp-header-left mp-iconfont iconfont icon-fanhui"></a>
			<h1 class="mp-header-title">
				<input :placeholder="ddd" class="mp-search-input" @focus="getFocus" v-model='value'>
				<a class="mp-search-delete" v-show ="show" @click="textVal" ></a>
			</h1>
			<span class="mp-header-right">
				<a data-search="submit" class="mp-search-submit" data-click-from-value="景点门票" >搜索</a>
			</span>
		</div>
	</div>
</template>

<script scoped>
	
	export default{
		data(){		//属性：值
			return {
				show:false,
				value:'',
				ddd:"输入城市或景点"
			}
		},
		conputed: {		//实时计算
			
		},
		methods: {		//方法
			getFocus: function() {
				this.show = true;
				
			},
			textVal: function() {
				this.value="";
			}
		}
	}
</script>

<style>
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
</style>