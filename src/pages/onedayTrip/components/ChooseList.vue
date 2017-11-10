<template>
	
		<div class="Listlbox">
		  	<div id="wrapper">
				<div id="scroller">
			  		<ul class="TripChooseList" v-show="chooselistcrosswise">
				  		 <li class="TripChooseList-items" v-for="item in ChooseList" :key="ChooseList.id">
				  		 	<span class="TripChooseList-content">{{item.title}}</span>
				  		 </li>

			  		 </ul>
			  	</div>

  			</div>

			<div class="ChooseListIcon iconfont " :class="classs" @click="handleIconclick"></div>

			<div class="ChooseListMask" v-show="Showmask"></div>
			<div class="ChooseList" v-show="chooselistshow">
				<div class="ChooseListheader">游玩景区<span class="ChooseListheader-options">（可多选）</span></div>

				<div id="wrapper2">
					<div id="scroller2">
						<ul class="ChooseListArea">
					  		<li class="ChooseListArea-items" v-for="item in ChooseList" :key="ChooseList.id">
					  		 <span class="ChooseListArea-content">{{item.title}}</span>
					  		</li>

				  		</ul>
			  		</div>
		  		</div>
			</div>
		
		</div>
	 
  
</template>

<script>
 	import {mapState} from "vuex";
 	require('../../../utils/iscroll-probe.js') 

	export default {
  		data(){
  			return { 	
  				classs: "icon-moreunfold",		
  				chooselistcrosswise:true,
  				chooselistshow:false,
  				Showmask:false
 			}
		},
		computed: mapState({
			ChooseList(state) {
				return state.oneDayTrip.ChooseList;				
			}
		}),
		methods: {
			handleIconclick:function() {
				
				if( this.classs == "icon-moreunfold"){
					this.classs = "icon-less";				
					this.chooselistcrosswise = false;
					this.chooselistshow = true;
					this.Showmask = true
					
				}else{
					this.classs = "icon-moreunfold"	
					this.chooselistcrosswise = true;
					this.chooselistshow = false,
					this.Showmask = false
				}

			}
		},

		mounted() {			
			
			this.myScroll = new IScroll('#wrapper', { probeType:2, scrollX: true, scrollY: false, mouseWheel: true });
			

			this.myScroll2 = new IScroll('#wrapper2', { mouseWheel: true });
			

		},
		updated() {			
			this.myScroll.refresh();
			this.myScroll2.refresh()				
		}
	}


</script>

<style scoped>
.ChooseListMask{
	width:100%;
	height: 100%;
	position:fixed;
	background:rgba(0,0,0,.3);
	z-index: 1
}

.Listlbox {
	position:relative;
	width:100%;
}

#wrapper{
	width: 85%;
	overflow:hidden;
	
}
#scroller{
	width: 3500px;
}

.TripChooseList {
	display:flex;
	white-space: nowrap;
	
}	

.TripChooseList-items {
	margin: 0.15rem .2rem;
    background: #fff;
    text-align: center;
    line-height: .48rem;
    border-radius: .05rem;
    height: .48rem;
    padding: 0 .2rem;
}
.ChooseListIcon{
    position:absolute;
    top:0rem;
    right:0;
    z-index: 3;
    border: 1px solid #ccc;
    width: 14%;
    height: .6rem;
    text-align: center;
    line-height: .6rem;
    font-size: .4rem;
    background:#f5f5f5;

}

.ChooseList{
	
	position: absolute;
    width: 100%;
	z-index: 2;
    top: 0;
    left: 0;
    background: #f5f5f5;
}
.ChooseListheader{
	width:100%;
	height:.7rem;
	line-height:.7rem;
	text-indent: .2rem;
}
.ChooseListheader-options {
	font-size:.2rem;

}

.ChooseListArea{
	width:100%;
}

.ChooseListArea-items {
	display:inline-block;
	padding:.1rem;
	background:white;
	margin:.1rem .1rem;
	border-radius:.06rem;
}

#wrapper2 {
	height:5rem;
	overflow: hidden;
}

#scroller2 {
	height:10rem;
}
</style>
