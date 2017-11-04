<template>
<<<<<<< HEAD
  	<div>
    	<home-header></home-header>
    	<Mpswiper></Mpswiper>
=======
	<div>
		<home-header/>
		<home-swiper></home-swiper>
		<home-activity></home-activity>
>>>>>>> 6de90d8d68dccda9f8cd4c854f930dbe3a929c20
	</div>
</template>

<script>
<<<<<<< HEAD
import  HeaderComponent from "./Header";
import 	Mpswiper from "./Mpswiper";
export default {
	
 	components:{
 		"home-header": HeaderComponent,
 		"Mpswiper":Mpswiper,
=======
	import HeaderComponent from "./Header"
	import swiper from "./Swiper"
	import ActivityComponent from "./Activity"
	
	export default {
		components: {
			"home-header": HeaderComponent,
			"home-swiper": swiper,
			"home-activity": ActivityComponent
		}
>>>>>>> 6de90d8d68dccda9f8cd4c854f930dbe3a929c20
	}
</script>

<style>
</style>
