<template>

  	<div class="home-weekend">
  		<h2 class="weekend-title">周末去哪</h2>
  		<ul class="home-weekend-ul">
  			
			<li v-for="info in WeekendInfos" :key="info.id" class="home-weekend-sights"> 
				<div class="home-weekend-ul-imgcontainer">
					<img class="home-weekend-ul-img" :src="info.img" :alt="info.alt"/>
				</div>
				<div class="home-weekend-info">
					<p class="home-weekend-info-name">{{info.title}}</p>
					<p class="home-weekend-info-disc">{{info.Info}}</p>
				</div>
			</li>
		
  		</ul> 		
  	</div>
  
</template>

<script>
import {mapState} from 'vuex'
export default {
	data(){
		return{

		}
		 
	},
	computed: mapState({
		WeekendInfos(state) {
			return state.home.WeekendInfos
		}
	})

}

</script>

<style scoped>
.home-weekend .weekend-title {
	width:2.5rem;
	height: .8rem;
    padding-left: .26rem;
    line-height: .8rem;
    color: #212121;
    overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.home-weekend-sights{
	position: relative;
    margin-bottom: .1rem;
    background: #fff;

	
	

.home-weekend-ul-imgcontainer{
    overflow: hidden;
    height: 0;
    padding-bottom: 37.4375%;
    background: url(//s.qunarzz.com/piao_topic/image/common/default/640x266.jpg) no-repeat center #dcdcdc;
    background-size: 100% 100%;
}


}
.home-weekend-ul-img {
	width: 100%;
	height: 100%;
	overflow: hidden;
}

.home-weekend-info{
	position: relative;
    padding: .14rem .2rem .2rem .2rem;
}
.home-weekend-info-name {
	overflow: hidden;
    padding-right: 1.4rem;
    color: #212121;
    font-size: .28rem;
    line-height: .48rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.home-weekend-info-disc {
	overflow: hidden;
    padding-right: 1.4rem;
    color: #616161;
    font-size: .24rem;
    line-height: .42rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}


</style>