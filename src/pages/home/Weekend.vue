<template>

  	<div class="home-weekend">
  		<h2 class="weekend-title">周末去哪</h2>
  		<ul class="home-weekend-ul">
  			
			<li v-for="(info ,index) in weekTrip" :key="info.id" class="home-weekend-sights"> 
				<div class="home-weekend-ul-imgcontainer">
					<img class="home-weekend-ul-img" :src="info.img" :alt="info.alt"/>
				</div>
				<p class="home-weekend-ul-ptitle">{{info.title}}</p>
				<p class="home-weekend-ul-pinfo">{{info.Info}}</p>

			</li>
		
  		</ul> 		
  	</div>
  
</template>

<script>

export default {
	data(){
		return{

		}
		 
	},
	props:["weekTrip"],

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
	background:#fff;
}

.home-weekend-ul-imgcontainer{
	overflow: hidden;
    height: 3.1rem;
    width: 100%;
}
.home-weekend-ul-img {
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.home-weekend-ul-ptitle {
	width:2.5rem;
	height: .8rem;
    padding-left: .26rem;
    line-height: .8rem; 
    color: #212121;
    overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.home-weekend-ul-pinfo {
	width:4.5rem;
	font-size:.16rem;
	padding-left: .26rem;
	padding-bottom:.4rem;
	color: #212121;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

</style>